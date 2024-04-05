package com.goldtradingdeluxe.mappers;

import com.goldtradingdeluxe.dto.UserDto;
import com.goldtradingdeluxe.entities.User;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface UserMapper {
    UserDto toUserDto(User user);
}
