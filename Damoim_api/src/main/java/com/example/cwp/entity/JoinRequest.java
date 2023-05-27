package com.example.cwp.entity;

import com.example.cwp.dto.GroupDto;
import com.example.cwp.dto.JoinRequestDto;
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
public class JoinRequest {

    @Id
    @GeneratedValue( strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "member")
    private User user;

    @ManyToOne
    @JoinColumn(name = "groupid")
    private Group group;


    public JoinRequest(JoinRequestDto joinRequestDto){
        this.id = joinRequestDto.getId();
        this.user = joinRequestDto.getUser();
        this.group = joinRequestDto.getGroup();
    }

}


