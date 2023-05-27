package com.example.cwp.controller;

import com.example.cwp.dto.GroupDto;
import com.example.cwp.dto.GroupMemberDto;
import com.example.cwp.dto.JoinRequestDto;
import com.example.cwp.entity.Group;
import com.example.cwp.entity.GroupMember;
import com.example.cwp.entity.JoinRequest;
import com.example.cwp.service.MemberService;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class MemberController {

    private final MemberService memberService;

    public MemberController(MemberService memberService) {
        this.memberService = memberService;
    }

    @PostMapping("/join_request")
    public void saveJoinRequest(@RequestBody JoinRequest joinRequest){
        JoinRequestDto joinRequestDto = new JoinRequestDto(joinRequest);
        memberService.saveJoinRequest(joinRequestDto);
    }

    @GetMapping("/notice/{id}")
    public List<JoinRequestDto> findByWriter(@PathVariable Long id){
        List<JoinRequest> joinRequestList = memberService.findByWriter(id);
        List<JoinRequestDto> joinRequestDtoList = new ArrayList<>();
        for (JoinRequest joinRequest : joinRequestList) {
            joinRequestDtoList.add(new JoinRequestDto(joinRequest));
        }

        return joinRequestDtoList;
    }

    @PostMapping("/group_member")
    public void saveGroupMember(@RequestBody GroupMember groupMember){
        GroupMemberDto groupMemberDto = new GroupMemberDto(groupMember);
        memberService.saveGroupMember(groupMemberDto);

    }

    @DeleteMapping("/join_request/{id}")
    public void deleteJoinRequest(@PathVariable Long id){
        memberService.deleteJoinRequest(id);
    }
}
