package com.gamejoy.dto;

import com.gamejoy.entities.Address;

public record SignUpDto(String firstName, String lastName, String userName, char[] password, String email, String telNr, Address address) {
}