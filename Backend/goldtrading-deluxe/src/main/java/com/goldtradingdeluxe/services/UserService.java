package com.goldtradingdeluxe.services;

import com.goldtradingdeluxe.dto.CredentialDto;
import com.goldtradingdeluxe.dto.UserDto;
import com.goldtradingdeluxe.entities.User;
import com.goldtradingdeluxe.exceptions.AppException;
import com.goldtradingdeluxe.mappers.UserMapper;
import com.goldtradingdeluxe.repositories.UserRepository;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.nio.CharBuffer;

@Service
public class UserService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final UserMapper userMapper;

    public UserService(UserRepository userRepository, PasswordEncoder passwordEncoder, UserMapper userMapper) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.userMapper = userMapper;
    }

    public UserDto login(CredentialDto credentialDto) {
        User user = userRepository.findByLogin(credentialDto.login())
                .orElseThrow(() -> new AppException("Unknown User", HttpStatus.NOT_FOUND));

        if (passwordEncoder.matches(CharBuffer.wrap(credentialDto.password()),
                user.getPassword())) {
            return userMapper.toUserDto(user);
        }
        throw new AppException("Invalid password", HttpStatus.BAD_REQUEST);
    }
}
