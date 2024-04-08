package com.goldtradingdeluxe;

import com.goldtradingdeluxe.mappers.UserMapper;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
public class GoldtradingDeluxeApplication {

	public static void main(String[] args) {
		SpringApplication.run(GoldtradingDeluxeApplication.class, args);
	}
}
