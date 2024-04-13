package com.goldtradingdeluxe.mappers;

import com.goldtradingdeluxe.dto.SignUpDto;
import com.goldtradingdeluxe.dto.UserDto;
import com.goldtradingdeluxe.entities.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring")
public interface UserMapper {
    UserMapper INSTANCE = Mappers.getMapper(UserMapper.class);

    UserDto toUserDto(User user);

    User toUser(UserDto userDto);

    @Mapping(target = "password", ignore = true)
    User signUpToUser(SignUpDto signUpDto);
}
