package com.example.cwp.controller;

import com.example.cwp.dto.Category;
import com.example.cwp.dto.GroupDto;
import com.example.cwp.entity.Group;
import com.example.cwp.repository.GroupRepository;
import com.example.cwp.service.SearchService;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@RestController
public class SearchController {

    private final SearchService searchService;

    private final GroupRepository groupRepository;

    public SearchController(SearchService searchService, GroupRepository groupRepository) {
        this.searchService = searchService;
        this.groupRepository = groupRepository;
    }


    @GetMapping("/")
    public void main(){

    }

//    @GetMapping("/all")
//    public List<GroupDto> findAll() {
//        List<Group> groupList = searchService.findAll();
//        List<GroupDto> groupDtoList = new ArrayList<>();
//        for (Group group : groupList) {
//            groupDtoList.add(new GroupDto(group));
//        }
//
//        return groupDtoList;
// }
//
//    @GetMapping("/search/title")
//    public List<GroupDto> findByTitle(String title) {
//        List<Group> groupList = searchService.findByTitle(title);
//        List<GroupDto> groupDtoList = new ArrayList<>();
//        for (Group group : groupList) {
//            groupDtoList.add(new GroupDto(group));
//        }
//
//        return groupDtoList;
//
//    }


    @GetMapping("/category/{category}")
    public List<GroupDto> findByCategory(@PathVariable Category category) {
        List<Group> groupList = searchService.findByCategory(category);
        List<GroupDto> groupDtoList = new ArrayList<>();
        for (Group group : groupList) {
            groupDtoList.add(new GroupDto(group));
        }

        return groupDtoList;
    }

    @GetMapping("/id/{id}")
    public List<GroupDto> findByUserId(@PathVariable Long id){
        List<Group> groupList = searchService.findByUserId(id);
        List<GroupDto> groupDtoList = new ArrayList<>();
        for (Group group : groupList) {
            groupDtoList.add(new GroupDto(group));
        }

        return groupDtoList;
    }

    @GetMapping("/date/{id}/{date}")
    public List<GroupDto> findByDate(@PathVariable Long id, @PathVariable Date date){
        List<Group> groupList = searchService.findByDate(id, date);
        List<GroupDto> groupDtoList = new ArrayList<>();
        for (Group group : groupList) {
            groupDtoList.add(new GroupDto(group));
        }

        return groupDtoList;
    }



}

