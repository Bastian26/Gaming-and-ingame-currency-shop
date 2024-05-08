package com.gamejoy.services;

import com.gamejoy.domains.user.repositories.AddressRepository;
import com.gamejoy.dto.CredentialDto;
import com.gamejoy.dto.SignUpDto;
import com.gamejoy.dto.UserDto;
import com.gamejoy.entities.Address;
import com.gamejoy.entities.User;
import com.gamejoy.exceptions.AppException;
import com.gamejoy.mappers.UserMapper;
import com.gamejoy.repositories.UserRepository;
import lombok.AllArgsConstructor;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.nio.CharBuffer;
import java.util.Optional;

@Service
@AllArgsConstructor
public class UserService {
    private static final Logger LOGGER = LogManager.getLogger(UserService.class);
    private final UserRepository userRepository;
    private final AddressRepository addressRepository;
    private final PasswordEncoder passwordEncoder;
    private final UserMapper userMapper;

    public UserDto login(CredentialDto credentialDto) {
        User user = userRepository.findByUserName(credentialDto.userName())
                .orElseThrow(() -> new AppException("Unknown User", HttpStatus.NOT_FOUND));

        if (passwordEncoder.matches(CharBuffer.wrap(credentialDto.password()),
                user.getPassword())) {
            LOGGER.info(String.format("User %s logged in", user.getUserName()));
            return userMapper.toUserDto(user);
        }
        throw new AppException("Invalid password", HttpStatus.BAD_REQUEST);
    }

    public UserDto register(@RequestBody SignUpDto signUpDto) {
        Optional<User> oUser = userRepository.findByUserName(signUpDto.userName());

        if (oUser.isPresent()) {
            throw new AppException("Login already exists", HttpStatus.BAD_REQUEST);
        }
        User user = userMapper.signUpToUser(signUpDto);
        // encode password with passwordEncoder
        user.setPassword(passwordEncoder.encode(CharBuffer.wrap(signUpDto.password())));
        Address savedAddress = addressRepository.save(user.getAddress());
        user.setAddress(savedAddress);
        User savedUser = userRepository.save(user);
        LOGGER.info(String.format("User %s registered", user.getUserName()));
        return userMapper.toUserDto(savedUser);
    }
}
