package com.example.cwp.dto;

import com.example.cwp.entity.User;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
public class UserDto {
    private String id;
    private String name;
    private String email;

    private String image;
    private String provider;
    private String providerId;
    private String currentAddress;
    private String homeAddress;
    private String companyAddress;

    public UserDto(User user) {
        this.id = user.getId();
        this.name = user.getName();
        this.email = user.getEmail();
        this.image = user.getImage();
        this.provider = user.getProvider();
        this.providerId = user.getProviderId();
        this.currentAddress = user.getCurrentAddress();
        this.homeAddress = user.getHomeAddress();
        this.companyAddress = user.getCompanyAddress();
    }
}