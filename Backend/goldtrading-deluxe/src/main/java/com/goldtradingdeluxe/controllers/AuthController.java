package com.goldtradingdeluxe.controllers;

import com.goldtradingdeluxe.dto.CredentialDto;
import com.goldtradingdeluxe.dto.UserDto;
import com.goldtradingdeluxe.services.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthController {

    private final UserService userService;

    public AuthController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/login")
    public ResponseEntity<UserDto> login(@RequestBody CredentialDto credentialDto) {
        UserDto user = userService.login(credentialDto);
        return ResponseEntity.ok(user);
    }
}
