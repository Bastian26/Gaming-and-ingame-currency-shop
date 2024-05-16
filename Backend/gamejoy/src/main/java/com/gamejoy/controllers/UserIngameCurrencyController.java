package com.gamejoy.controllers;

import com.gamejoy.dto.IngameCurrencyDto;
import com.gamejoy.exceptions.NotFoundException;
import com.gamejoy.services.UserIngameCurrencyService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@AllArgsConstructor
public class UserIngameCurrencyController {

    private final UserIngameCurrencyService userIngameCurrencyService;

    @GetMapping("/ingameCurrencies/{userId}")
    public ResponseEntity<List<IngameCurrencyDto>> getIngameCurrenciesByUserId(@PathVariable("userId") Long userId)
            throws NotFoundException {

        List<IngameCurrencyDto> ingameCurrenciesDto = userIngameCurrencyService.getIngameCurrenciesByUserId(userId);
        if (ingameCurrenciesDto == null) {
            throw new NotFoundException(String.format("No Ingame Currency found for User with id %d", userId));
        }  else {
            return ResponseEntity.ok(ingameCurrenciesDto);
        }
    }

 /*   @PutMapping("/ingameCurrencies/{userId}")
    public ResponseEntity<List<IngameCurrency>> updateUserIngameCurrenciesByUserId
            (@PathVariable("userId") long id, @Valid @RequestBody List<IngameCurrencyDto> IngameCurrencyDto) {
        ClimbingRoute climbingRoute = userIngameCurrencyService.updateClimbingRoute(id, climbingRouteDto);
        if (climbingRoute == null) {
            throw new NotFoundException(String.format("No Route with id %d found", id));
        } else {
            return new ResponseEntity<>(climbingRoute, HttpStatus.OK);
        }
    }*/
}
