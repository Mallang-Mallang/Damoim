package com.example.cwp.service;

import com.example.cwp.dto.Category;
import com.example.cwp.entity.Group;
import com.example.cwp.entity.GroupMember;
import com.example.cwp.repository.GroupMemberRepository;
import com.example.cwp.repository.GroupRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class SearchService {

    @Autowired
    private GroupRepository groupRepository;

    @Autowired
    private GroupMemberRepository groupMemberRepository;

    public SearchService(GroupRepository groupRepository, GroupMemberRepository groupMemberRepository){
        this.groupRepository = groupRepository;
        this.groupMemberRepository = groupMemberRepository;
    }

    @Transactional
    public List<Group> findAll() {
        List<Group> groupList = groupRepository.findAll();
        return groupList;
    }

    @Transactional
    public List<Group> findByTitle(String title){
        List<Group> groupList = groupRepository.findByTitle(title);
        return groupList;
    }

    @Transactional
    public List<Group> findByCategory(Category category){
        List<Group> groupList = groupRepository.findByCategory(category);
        return groupList;
    }


    @Transactional
    public List<Group> findByUserId(Long id){
        List<Group> groupList= groupRepository.findByGroupMemberUserId(id);

        return  groupList;
    }


    @Transactional
    public List<Group> findByDate(Long id, Date date) {
        List<Group> groupList = groupRepository.findByGroupMemberUserIdAndDate(id, date);

        return groupList;
    }
}
