package com.datastorage.datastorage.beans.postcontruct;

import com.datastorage.datastorage.entity.Ingredients;
import com.datastorage.datastorage.entity.Recipe;
import com.datastorage.datastorage.repository.IngredientRepository;
import com.datastorage.datastorage.repository.RecipiesRespository;
import com.datastorage.datastorage.service.IngredientsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.persistence.criteria.CriteriaBuilder;
import java.nio.charset.Charset;
import java.util.Arrays;
import java.util.HashSet;
import java.util.Random;
import java.util.Set;

@Component
public class DebugRecipiesInserter {

    @Autowired
    private RecipiesRespository recipiesRespository;

    @Autowired
    private IngredientRepository ingredientRepository;

    protected void insertRecipies(){


        Recipe recipe = new Recipe();
        recipe.setUserId(1L);
        recipe.setHeaderText("Bloemkool soep");
        recipe.setDescription("Lekkere soep");
        recipe.setImageLink("https://www.leukerecepten.nl/wp-content/uploads/2020/02/bloemkoolsoep_v.jpg");
        recipe.setPreparationTime(30);
        recipe.setDifficulty(1);
        recipiesRespository.save(recipe);

        Ingredients ingredients = new Ingredients();
        ingredients.setRecipe(recipe);
        ingredients.setIngredientName("Zulke grote bloemkolen");
        ingredientRepository.save(ingredients);


        Recipe recipe2 = new Recipe();
        recipe2.setUserId(1L);
        recipe2.setHeaderText("Ertsen soep");
        recipe2.setDescription("minder lekkere soep");
        recipe2.setImageLink("https://www.leukerecepten.nl/wp-content/uploads/2019/12/erwtensoep_v.jpg");
        recipe2.setPreparationTime(20);
        recipe2.setDifficulty(2);
        recipiesRespository.save(recipe2);

        Recipe recipe3 = new Recipe();
        recipe3.setUserId(1L);
        recipe3.setHeaderText("Tomatensoep soep");
        recipe3.setDescription("De lekkerste soep");
        recipe3.setImageLink("https://www.leukerecepten.nl/wp-content/uploads/2020/01/basis-tomatensoep.jpg");
        recipe3.setPreparationTime(50);
        recipe3.setDifficulty(3);
        recipiesRespository.save(recipe3);

        Recipe recipe4 = new Recipe();
        recipe4.setUserId(1L);
        recipe4.setHeaderText("Chinese tomaten soep");
        recipe4.setDescription("De lekkerste soep");
        recipe4.setImageLink("https://www.leukerecepten.nl/wp-content/uploads/2018/04/chinese-tomatensoep.jpg");
        recipe4.setPreparationTime(20);
        recipe4.setDifficulty(2);
        recipiesRespository.save(recipe4);

        Recipe recipe5 = new Recipe();
        recipe5.setUserId(1L);
        recipe5.setHeaderText("Hartige taart");
        recipe5.setDescription("De lekkerste soep");
        recipe5.setImageLink("https://www.koopmans.com/Recepten/K/image-thumb__1448__heading-block/Koopmans_hartige_taartdeeg.webp");
        recipe5.setPreparationTime(10);
        recipe5.setDifficulty(1);
        recipiesRespository.save(recipe5);

    }
}
