package com.example.cwp.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name = "VerificationToken")
public class VerificationToken {
    @Id
    private String identifier;

    private String token;
    private LocalDateTime expires;


}
