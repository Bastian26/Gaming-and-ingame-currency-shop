package com.gamejoy.mappers;

import com.gamejoy.dto.IngameCurrencyDto;
import com.gamejoy.dto.SignUpDto;
import com.gamejoy.dto.UserDto;
import com.gamejoy.entities.IngameCurrency;
import com.gamejoy.entities.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring")
public interface IngameCurrencyMapper {
    IngameCurrencyMapper INSTANCE = Mappers.getMapper(IngameCurrencyMapper.class);

    IngameCurrencyDto toIngameCurrencyDto(IngameCurrency ingameCurrency);

    IngameCurrency toIngameCurrency(IngameCurrencyDto IngameCurrencyDto);
}
