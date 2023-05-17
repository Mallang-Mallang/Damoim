package com.example.cwp.service;

import com.example.cwp.dto.Category;
import com.example.cwp.entity.Group;
import com.example.cwp.repository.GroupRepository;
import org.junit.Assert;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.time.LocalDateTime;
import java.util.ArrayList;

@SpringBootTest
class PostServiceTest {

    @Autowired
    private GroupRepository groupRepository;


    @Test
    void write() {


        Group group = new Group();
        group.setTitle("Test");
        group.setCategory(Category.STUDY);
        group.setLocation("집");
        group.setContent("집");
        group.setGroupMember(new ArrayList<>());
        groupRepository.save(group);
        Group result = groupRepository.findById(group.getId()).get();

        Assert.assertEquals(result, group);


    }
}