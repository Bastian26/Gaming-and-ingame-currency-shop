package com.gamejoy.config.exceptionHandler;

import com.gamejoy.domain.general.dto.ApiError;
import com.gamejoy.domain.general.dto.ApiResponseWrapper;
import com.gamejoy.domain.general.dto.ErrorDto;
import com.gamejoy.domain.general.exceptions.AppException;
import com.gamejoy.domain.user.exceptions.UserNotFoundException;
import com.gamejoy.domain.user.exceptions.InvalidPasswordException;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;

import java.time.Instant;


@ControllerAdvice
public class RestExceptionHandler {

    @ExceptionHandler(value = {AppException.class })
    @ResponseBody
    public ResponseEntity<ErrorDto> handleException(AppException exception) {
        return ResponseEntity.status(exception.getHttpStatus())
                .body(new ErrorDto(exception.getMessage()));
    }

    @ExceptionHandler(UserNotFoundException.class)
    public ResponseEntity<ApiError> handleUserNotFound(UserNotFoundException ex,
                                                                         HttpServletRequest request) {
        String details = String.format("Requested URI: %s", request.getRequestURI());
        String timestamp = Instant.now().toString();
        String errorCode = "USER_NOT_FOUND";

        return new ResponseEntity<>(new ApiError(
                404,
                ex.getMessage(),
                details,
                timestamp,
                errorCode
        ), HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(InvalidPasswordException.class)
    public ResponseEntity<ApiError> handleInvalidPassword(InvalidPasswordException ex, HttpServletRequest request) {
        String details = "Invalid password provided";
        String timestamp = Instant.now().toString();
        String errorCode = "INVALID_PASSWORD";

        return new ResponseEntity<>(new ApiError(
                400,
                ex.getMessage(),
                details,
                timestamp,
                errorCode
        ), HttpStatus.BAD_REQUEST);
    }
}
