package com.example.cwp.service;

import com.example.cwp.dto.GroupMemberDto;
import com.example.cwp.dto.JoinRequestDto;
import com.example.cwp.entity.Group;
import com.example.cwp.entity.GroupMember;
import com.example.cwp.entity.JoinRequest;
import com.example.cwp.entity.User;
import com.example.cwp.repository.GroupMemberRepository;
import com.example.cwp.repository.JoinRequestRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

import static org.hibernate.engine.jdbc.Size.LobMultiplier.G;

@Service
public class MemberService {

    private final JoinRequestRepository joinRequestRepository;
    private final GroupMemberRepository groupMemberRepository;

    public MemberService(JoinRequestRepository joinRequestRepository, GroupMemberRepository groupMemberRepository) {
        this.joinRequestRepository = joinRequestRepository;
        this.groupMemberRepository = groupMemberRepository;
    }



    @Transactional
    public void saveJoinRequest(JoinRequestDto joinRequestDto){
        JoinRequest joinRequest = new JoinRequest(joinRequestDto);
        joinRequestRepository.save(joinRequest);
    }

    @Transactional
    public List<JoinRequest> findByWriter(Long id){
        List<JoinRequest> JoinRequestList = joinRequestRepository.findByGroupUserId(id);
        return  JoinRequestList;
    }

    @Transactional
    public void deleteJoinRequest(Long id){
        joinRequestRepository.deleteById(id);
    }

    @Transactional
    public void saveGroupMember(GroupMemberDto groupMemberDto) {
        GroupMember groupMember = new GroupMember(groupMemberDto);
        groupMemberRepository.save(groupMember);
    }
}
