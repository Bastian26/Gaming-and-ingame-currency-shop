package com.goldtradingdeluxe.controllers;

import com.goldtradingdeluxe.dto.CredentialDto;
import com.goldtradingdeluxe.dto.UserDto;
import com.goldtradingdeluxe.services.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

//@RequiredArgsConstructor -> creates constructor with final variabels
@RestController
@RequiredArgsConstructor
public class AuthController {

    private final UserService userService;

    @PostMapping("/login")
    public ResponseEntity<UserDto> login(@RequestBody CredentialDto credentialDto) {
        UserDto user = userService.login(credentialDto);
        return ResponseEntity.ok(user);
    }
}
