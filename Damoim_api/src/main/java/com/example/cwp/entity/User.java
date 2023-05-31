package com.example.cwp.entity;

import com.example.cwp.dto.UserDto;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String email;

    private String picture;

    private String provider;

    private String providerId;

    private String currentAddress;

    private String homeAddress;

    private String companyAddress;


    public User(UserDto userDto) {
        this.id = userDto.getId();
        this.name = userDto.getName();
        this.email = userDto.getEmail();
        this.picture = userDto.getPicture();
        this.provider = userDto.getProvider();
        this.providerId = userDto.getProviderId();
        this.currentAddress = userDto.getCurrentAddress();
        this.homeAddress = userDto.getHomeAddress();
        this.companyAddress = userDto.getCompanyAddress();
    }
}
