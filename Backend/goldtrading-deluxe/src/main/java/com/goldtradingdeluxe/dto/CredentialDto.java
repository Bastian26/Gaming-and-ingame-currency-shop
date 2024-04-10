package com.goldtradingdeluxe.dto;

// From the srcurity aspect it is better to use char instead of string for pw
public record CredentialDto(String login, char[] password) {
}
