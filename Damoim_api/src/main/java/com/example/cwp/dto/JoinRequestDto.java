package com.example.cwp.dto;

import com.example.cwp.entity.Group;
import com.example.cwp.entity.GroupMember;
import com.example.cwp.entity.JoinRequest;
import com.example.cwp.entity.User;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
public class JoinRequestDto {
    private Long id;
    private User user;

    private Group group;

    public JoinRequestDto(JoinRequest joinRequest) {
        this.id = joinRequest.getId();
        this.user = joinRequest.getUser();
        this.group = joinRequest.getGroup();
    }
}
