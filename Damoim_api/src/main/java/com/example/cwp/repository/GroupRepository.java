package com.example.cwp.repository;

import com.example.cwp.dto.Category;
import com.example.cwp.dto.Transport;
import com.example.cwp.entity.Group;
import com.example.cwp.entity.GroupMember;
import com.example.cwp.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

@Repository
public interface GroupRepository extends JpaRepository<Group, Long> {

    List<Group> findByTitle(String title);

    List<Group> findByCategory(Category category);

    List<Group> findByGroupMemberUserId(Long id);

    List<Group> findByGroupMemberUserIdAndDate(Long id, Date date);



}
