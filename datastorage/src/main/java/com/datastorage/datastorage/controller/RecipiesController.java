package com.datastorage.datastorage.controller;


import com.datastorage.datastorage.entity.Recipe;
import com.datastorage.datastorage.entity.User;
import com.datastorage.datastorage.repository.UserDetailsRepository;
import com.datastorage.datastorage.service.RecipiesServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping("/api/recipies")
@CrossOrigin
public class RecipiesController {

    @Autowired
    RecipiesServices recipiesServices;

    @Autowired
    UserDetailsRepository userDetailsRepository;

    @GetMapping("/all")
    public ResponseEntity<?> fetchAllRecipies(Principal user){
        User currentUser = userDetailsRepository.findByUserName(user.getName());
        if(currentUser == null){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("The user does not exists. Please try logging out/in again");
        } else {
            List<Recipe> recipies = recipiesServices.fetchAllRecipies(currentUser.getId());
            return ResponseEntity.ok(recipies);
        }
    }

}
