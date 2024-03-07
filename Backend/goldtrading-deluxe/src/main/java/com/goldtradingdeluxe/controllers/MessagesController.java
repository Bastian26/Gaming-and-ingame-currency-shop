package com.goldtradingdeluxe.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

@RestController
public class MessagesController {

    @GetMapping("/messages")
    public ResponseEntity<List<String>> messages() {
        return ResponseEntity.of(Optional.of(Arrays.asList("First", "Second")));
    }
}
