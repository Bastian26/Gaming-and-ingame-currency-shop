package com.gamejoy.domains.user.dtos;

// From the srcurity aspect it is better to use char instead of string for pw
public record CredentialDto(String userName, char[] password) {
}
