package com.example.cwp.entity;

import com.example.cwp.entity.User;

import javax.persistence.*;

@Entity
@Table(name = "Account")
public class Account {
    @Id
    private String id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "userId")
    private User user;

    private String type;
    private String provider;

    @Column(name = "providerAccountId")
    private String providerAccountId;

    @Column(name = "refresh_token")
    private String refreshToken;

    @Column(name = "refresh_token_expires_in")
    private Integer refreshTokenExpiresIn;

    @Column(name = "access_token")
    private String accessToken;

    @Column(name = "expires_at")
    private Integer expiresAt;

    @Column(name = "token_type")
    private String tokenType;

    private String scope;

    @Column(name = "id_token")
    private String idToken;

    @Column(name = "session_state")
    private String sessionState;

}