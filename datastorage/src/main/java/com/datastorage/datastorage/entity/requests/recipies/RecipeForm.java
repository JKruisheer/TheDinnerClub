package com.datastorage.datastorage.entity.requests.recipies;

import java.util.List;

public class RecipeForm {
    private String title;
    private String description;
    private String imageLink;
    private int preparationTime;
    private int difficulty;
    private String preparationMethod;
    private List<IngredientList> ingredients;

    public RecipeForm(String title, String description, String imageLink, int preparationTime, int difficulty) {
        this.title = title;
        this.description = description;
        this.imageLink = imageLink;
        this.preparationTime = preparationTime;
        this.difficulty = difficulty;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getImageLink() {
        return imageLink;
    }

    public void setImageLink(String imageLink) {
        this.imageLink = imageLink;
    }

    public int getPreparationTime() {
        return preparationTime;
    }

    public void setPreparationTime(int preparationTime) {
        this.preparationTime = preparationTime;
    }

    public int getDifficulty() {
        return difficulty;
    }

    public void setDifficulty(int difficulty) {
        this.difficulty = difficulty;
    }

    public String getPreparationMethod() {
        return preparationMethod;
    }

    public void setPreparationMethod(String preparationMethod) {
        this.preparationMethod = preparationMethod;
    }

    public List<IngredientList> getIngredients() {
        return ingredients;
    }

    public void setIngredients(List<IngredientList> ingredients) {
        this.ingredients = ingredients;
    }
}
