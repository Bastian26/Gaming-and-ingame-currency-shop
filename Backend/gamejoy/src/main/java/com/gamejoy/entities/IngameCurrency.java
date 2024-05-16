package com.gamejoy.entities;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDateTime;
import java.util.Set;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "ingame_currency")
public class IngameCurrency {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NotNull
    @Column(name = "currency_name")
    private String currencyName;
    @NotNull
    @Column(name = "game_name")
    private String gameName;

    /**
     * It's a @ManToMany, but since the intermediate table has additional attributes (is more complex),
     * it is solved via a @oneToMany with intermediate table
     * **/
    @OneToMany(mappedBy = "ingameCurrency", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<UserIngameCurrency> users;
}
