package com.gamejoy.repositories;

import com.gamejoy.entities.IngameCurrency;
import com.gamejoy.entities.UserIngameCurrency;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface IngameCurrencyRepository extends JpaRepository<IngameCurrency, Long> {
}
