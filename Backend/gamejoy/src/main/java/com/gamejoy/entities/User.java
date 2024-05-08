package com.gamejoy.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data
@Entity
@Table(name="app_user")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "first_name", nullable = false)
    private String firstName;
    @Column(name = "last_name", nullable = false)
    private String lastName;
    @Column(name = "user_name", nullable = false)
    private String userName;
    @Column(nullable = false)
    private String password;

    @Column(name = "email", nullable = false)
    private String email;

    @Column(name = "tel_nr", nullable = false)
    private String telNr;

    @Enumerated(EnumType.STRING)
    @Column(name = "role")
    private UserRole userRole;

    @ManyToOne
    @JoinColumn(name = "address_id")
    private Address address;
}
