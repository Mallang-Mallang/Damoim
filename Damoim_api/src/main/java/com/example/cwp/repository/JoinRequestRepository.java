package com.example.cwp.repository;

import com.example.cwp.entity.GroupMember;
import com.example.cwp.entity.JoinRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface JoinRequestRepository extends JpaRepository<JoinRequest, Long> {
    List<JoinRequest> findByGroupUserId(Long id);

}
