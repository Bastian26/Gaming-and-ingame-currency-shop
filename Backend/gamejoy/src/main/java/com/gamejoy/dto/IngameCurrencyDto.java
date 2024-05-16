package com.gamejoy.dto;

import com.gamejoy.entities.Address;
import com.gamejoy.entities.UserRole;
import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class IngameCurrencyDto {
    private Long id;
    private String currencyName;
    private String lastName;
    private String gameName;
}
