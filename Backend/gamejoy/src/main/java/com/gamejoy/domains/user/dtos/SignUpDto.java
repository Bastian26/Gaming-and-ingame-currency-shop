package com.gamejoy.domains.user.dtos;

import com.gamejoy.domains.user.entities.Address;

public record SignUpDto(String firstName, String lastName, String userName, char[] password, String email, String telNr, Address address) {
}
