package com.datastorage.datastorage.beans.postcontruct;

import com.datastorage.datastorage.entity.Recipe;
import com.datastorage.datastorage.repository.RecipiesRespository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class DebugRecipiesInserter {

    @Autowired
    private RecipiesRespository recipiesRespository;

    protected void insertRecipies(){
        Recipe recipe = new Recipe();
        recipe.setUserId(1L);
        recipe.setHeaderText("Bloemkool soep");
        recipe.setDescription("Lekkere soep");
        recipiesRespository.save(recipe);

        Recipe recipe2 = new Recipe();
        recipe2.setUserId(1L);
        recipe2.setHeaderText("Ertsen soep");
        recipe2.setDescription("minder lekkere soep");
        recipiesRespository.save(recipe2);

        Recipe recipe3 = new Recipe();
        recipe3.setUserId(1L);
        recipe3.setHeaderText("Tomatensoep soep");
        recipe3.setDescription("De lekkerste soep");
        recipiesRespository.save(recipe3);

    }
}
