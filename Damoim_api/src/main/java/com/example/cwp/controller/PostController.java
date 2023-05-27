package com.example.cwp.controller;


import com.example.cwp.dto.GroupDto;
import com.example.cwp.entity.Group;
import com.example.cwp.service.PostService;
import org.springframework.web.bind.annotation.*;

@RestController
public class PostController {

    private final PostService postService;

    public PostController(PostService postService) {
        this.postService = postService;
    }


    @PostMapping("/group")
    public void write(@RequestBody Group group){
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
