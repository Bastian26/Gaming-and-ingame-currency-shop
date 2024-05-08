package com.gamejoy.domains.user.repositories;

import com.gamejoy.entities.Address;
import com.gamejoy.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AddressRepository extends JpaRepository<Address, Integer> {

}
