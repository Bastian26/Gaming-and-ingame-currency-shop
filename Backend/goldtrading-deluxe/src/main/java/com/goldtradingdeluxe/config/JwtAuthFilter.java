package com.goldtradingdeluxe.config;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.OncePerRequestFilter;
import org. springframework.http.HttpHeaders;

import javax.management.RuntimeErrorException;
import java.io.IOException;

// Interceptor as HTTP filter for incoming HTTP requests and validate JWT token
@RequiredArgsConstructor
public class JwtAuthFilter extends OncePerRequestFilter {

    private final UserAuthProvider userAuthProvider;
    @Override
    protected void doFilterInternal(
            HttpServletRequest request,
            HttpServletResponse response,
            FilterChain filterChain) throws ServletException, IOException {

        String header = request.getHeader(HttpHeaders.AUTHORIZATION);

        if (header != null) {
            String[] authElements = header.split(" ");

            if (authElements.length == 2 && "Bearer".equals(authElements[0])) {
                try {
                    SecurityContextHolder.getContext().setAuthentication(userAuthProvider.validateToken(authElements[1]));
                } catch (RuntimeException exception) {
                    SecurityContextHolder.clearContext();
                    throw exception;
                }
            }
        }

        filterChain.doFilter(request, response);
    }
}
