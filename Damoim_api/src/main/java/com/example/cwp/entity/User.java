package com.example.cwp.entity;

import com.example.cwp.dto.UserDto;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class User {
    @Id
    private String id;

    private String name;
    @Column(name = "email")
    private String email;

    @Column(name = "emailVerified")
    private LocalDateTime emailVerified;

    private String image;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<Account> accounts;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<Session> sessions;

    private String provider;

    private String providerId;

    private String currentAddress;

    private String homeAddress;

    private String companyAddress;



    public User(UserDto userDto) {
        this.id = userDto.getId();
        this.name = userDto.getName();
        this.email = userDto.getEmail();
        this.image = userDto.getImage();
        this.provider = userDto.getProvider();
        this.providerId = userDto.getProviderId();
        this.currentAddress = userDto.getCurrentAddress();
        this.homeAddress = userDto.getHomeAddress();
        this.companyAddress = userDto.getCompanyAddress();
    }
}
