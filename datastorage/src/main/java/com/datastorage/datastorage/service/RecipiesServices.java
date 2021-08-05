package com.datastorage.datastorage.service;

import com.datastorage.datastorage.entity.Recipe;
import com.datastorage.datastorage.repository.RecipiesRespository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RecipiesServices {

    @Autowired
    RecipiesRespository recipiesRespository;

    public List<Recipe> fetchAllRecipies(long userId){
        return recipiesRespository.findByUserId(userId);
    }

    public void insertARecipe(Recipe rec){
        recipiesRespository.save(rec);
    }


}
