package com.datastorage.datastorage.service;

import com.datastorage.datastorage.entity.Recipe;
import com.datastorage.datastorage.repository.RecipiesRespository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RecipiesServices {

    @Autowired
    RecipiesRespository recipiesRespository;

    public List<Recipe> fetchAllRecipies(long userId){
        return recipiesRespository.findByUserId(userId);
    }

    /**
     *  Delete a record by first finding it then calling delete on it.
     */
    public void deleteARecordById(Long id){
        recipiesRespository.findById(id).ifPresent((rec) -> recipiesRespository.delete(rec));
    }

    public void insertARecipe(Recipe rec){
        recipiesRespository.save(rec);
    }

    public boolean findRecipeByIdAndIncrease(Long id){
        Optional<Recipe> rec = recipiesRespository.findById(id);
        if(rec.isPresent()){
            Recipe recipe = rec.get();
            recipe.setLikes(recipe.getLikes() + 1);
            recipiesRespository.save(recipe);
            return true;
        }
        return false;
    }


}
