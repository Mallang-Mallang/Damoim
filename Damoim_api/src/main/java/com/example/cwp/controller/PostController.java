package com.example.cwp.controller;


import com.example.cwp.dto.Category;
import com.example.cwp.dto.GroupDto;
import com.example.cwp.dto.UserDto;
import com.example.cwp.entity.Group;
import com.example.cwp.repository.GroupRepository;
import com.example.cwp.repository.UserRepository;
import com.example.cwp.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class PostController {

    @Autowired
    private PostService postService;


    @PostMapping("/group")
    public void write(@RequestBody Group group){
        System.out.println(group);
        postService.write(group);

    }

    @PutMapping("/group/{id}")
    public void update(@PathVariable Long id, @RequestBody GroupDto requestGroupDto){
        postService.update(id, requestGroupDto);

    }

    @DeleteMapping("/group/{id}")
    public void delete(@PathVariable Long id){
        postService.delete(id);

    }

    @PutMapping("/category/{id}")
    public void updateCategory(@PathVariable Long id, @RequestBody GroupDto groupDto){
        postService.updateCategory(id, groupDto.getCategory());
    }
    
}
