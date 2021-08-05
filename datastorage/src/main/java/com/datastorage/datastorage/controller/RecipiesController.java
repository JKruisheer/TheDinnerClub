package com.datastorage.datastorage.controller;


import com.datastorage.datastorage.entity.Recipe;
import com.datastorage.datastorage.entity.User;
import com.datastorage.datastorage.entity.requests.SignupForm;
import com.datastorage.datastorage.entity.requests.recipies.RecipeForm;
import com.datastorage.datastorage.repository.UserDetailsRepository;
import com.datastorage.datastorage.service.RecipiesServices;
import org.apache.coyote.Response;
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

    @PostMapping("/recipe/add")
    public ResponseEntity<?> addARecipe(Principal user, @RequestBody RecipeForm form){
        User currentUser = userDetailsRepository.findByUserName(user.getName());
        if(form.getTitle() == null || form.getTitle().isEmpty()){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Please provide a title");
        }
        if(form.getDescription() == null || form.getDescription().isEmpty()){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Please provide a description");
        }
        Recipe recipe = new Recipe();
        recipe.setUserId(currentUser.getId());
        recipe.setHeaderText(form.getTitle());
        recipe.setDescription(form.getDescription());
        recipe.setImageLink(form.getImageLink());
        recipiesServices.insertARecipe(recipe);
        return ResponseEntity.ok("Recipe has been added!");
    }

}
