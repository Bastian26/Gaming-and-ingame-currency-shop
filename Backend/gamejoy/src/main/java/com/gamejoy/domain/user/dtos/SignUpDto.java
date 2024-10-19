package com.gamejoy.domain.user.dtos;

import com.gamejoy.domain.user.entities.Address;

public record SignUpDto(String firstName, String lastName, String userName, char[] password, String email, String telNr, Address address) {
}
