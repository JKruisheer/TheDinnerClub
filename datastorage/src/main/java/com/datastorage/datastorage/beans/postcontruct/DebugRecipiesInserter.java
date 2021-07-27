package com.datastorage.datastorage.beans.postcontruct;

import com.datastorage.datastorage.entity.Recipe;
import com.datastorage.datastorage.repository.RecipiesRespository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.nio.charset.Charset;
import java.util.Random;

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

        Recipe recipe4 = new Recipe();
        recipe4.setUserId(1L);
        recipe4.setHeaderText("Chinese tomaten soep");
        recipe4.setDescription("De lekkerste soep");
        recipiesRespository.save(recipe4);

        Recipe recipe5 = new Recipe();
        recipe5.setUserId(1L);
        recipe5.setHeaderText("Hartige taart");
        recipe5.setDescription("De lekkerste soep");
        recipiesRespository.save(recipe5);

    }
}
