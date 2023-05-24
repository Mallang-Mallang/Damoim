package com.example.cwp.dto;

import com.example.cwp.entity.Group;
import com.example.cwp.entity.User;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
public class GroupDto {

    private Long id;
    private String title;
    private User user;

    private Double longitude;

    private Double latitude;

    private Category category;
    private String content;
    private List<GroupMemberDto> groupMemberDto;
    private LocalDateTime createdAt;
    private Date date;
    private LocalTime time;

    public GroupDto(Group group) {
        this.id = group.getId();
        this.title = group.getTitle();
        this.user = group.getUser();
        this.longitude = group.getLongitude();
        this.latitude = group.getLatitude();
        this.category = group.getCategory();
        this.content = group.getContent();
        this.groupMemberDto = group.getGroupMember().stream()
                .map(GroupMemberDto::new)
                .collect(Collectors.toList());
        this.createdAt = group.getCreatedAt();
        this.date = group.getDate();
        this.time = group.getTime();
    }
}
