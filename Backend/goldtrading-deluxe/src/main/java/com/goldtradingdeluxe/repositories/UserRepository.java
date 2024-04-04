package com.goldtradingdeluxe.repositories;

import com.goldtradingdeluxe.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, long> {

    Optional<User> findByLogin(String login);
}
