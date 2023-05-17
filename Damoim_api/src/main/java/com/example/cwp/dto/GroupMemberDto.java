package com.example.cwp.dto;

import com.example.cwp.entity.GroupMember;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
public class GroupMemberDto {
    private Long id;
    private UserDto userDto;

    public GroupMemberDto(GroupMember groupMember) {
        this.id = groupMember.getId();
        this.userDto = new UserDto(groupMember.getUser());
    }
}
