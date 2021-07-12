package com.datastorage.datastorage.controller;

import com.datastorage.datastorage.entity.User;
import com.datastorage.datastorage.repository.UserRepository;
import com.datastorage.datastorage.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/")
public class UserController {

    @Autowired
    private UserService userService;

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("users")
    public List<User> getUsers(){
        return this.userService.getUsers();
    }
}
