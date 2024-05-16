package com.gamejoy.domains.ingameCurrency.repositories;

import com.gamejoy.domains.ingameCurrency.entities.IngameCurrency;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IngameCurrencyRepository extends JpaRepository<IngameCurrency, Long> {
}
