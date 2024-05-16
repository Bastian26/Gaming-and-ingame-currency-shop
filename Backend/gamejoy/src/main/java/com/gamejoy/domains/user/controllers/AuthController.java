package com.gamejoy.domains.user.controllers;

import com.gamejoy.config.security.UserAuthProvider;
import com.gamejoy.domains.user.dtos.CredentialDto;
import com.gamejoy.domains.user.dtos.SignUpDto;
import com.gamejoy.domains.user.dtos.UserDto;
import com.gamejoy.domains.user.services.UserService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.net.URI;

@RestController
@RequiredArgsConstructor
public class AuthController {

    private final UserService userService;
    private final UserAuthProvider userAuthProvider;

    @PostMapping("/login")
    public ResponseEntity<UserDto> login(@RequestBody CredentialDto credentialDto) {
        UserDto user = userService.login(credentialDto);
        user.setToken(userAuthProvider.createToken(user));
        return ResponseEntity.ok(user);
    }

    @PostMapping("/register")
    public ResponseEntity<UserDto> register(@RequestBody SignUpDto signUpDto) {
        UserDto user = userService.register(signUpDto);
        user.setToken(userAuthProvider.createToken(user));
        return ResponseEntity.created(URI.create("/users/" + user.getId())).body(user);
    }

    @PostMapping("/changeUsername")
    public ResponseEntity<String> changeUsername(Long id, @Valid String username) {
        String usernameChangeResponse = userService.changeUsername(id, username);
        return ResponseEntity.ok().body(usernameChangeResponse);
    }

    @PostMapping("/changePassword")
    public ResponseEntity<String> changePassword(Long id, @Valid char[] password) {
        String passwordChangeResponse = userService.changePassword(id, password);
        return ResponseEntity.ok().body(passwordChangeResponse);
    }
}
