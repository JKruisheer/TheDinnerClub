package com.datastorage.datastorage.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.io.Serializable;
import java.sql.Date;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "TDC_RECIPIES")
public class Recipe implements Serializable {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "RECIPE_USER_ID")
    private Long userId;

    @Column(name = "RECIPE_HEADER_TEXT")
    private String headerText;

    @Column(name = "RECIPE_DESCRIPTION")
    private String description;

    @Column(name = "RECIPE_PREP_METHOD")
    private String preparationMethod;

    @Column(name = "IMAGE_LINK")
    private String imageLink;
    
    @Column(name = "PREPARATION_TIME")
    private int preparationTime;

    @Column(name = "RECIPE_DIFFICULTY")
    private int difficulty;

    @Column(name = "IS_PUBLIC")
    private boolean isRecipePublic;

    @Column(name = "RECIPE_LIKES")
    private int likes;

    @JsonManagedReference
    @OneToMany(mappedBy = "recipe",
            cascade = CascadeType.ALL,
            fetch = FetchType.LAZY)
    private Set<Ingredients> ingredients;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public String getHeaderText() {
        return headerText;
    }

    public void setHeaderText(String headerText) {
        this.headerText = headerText;
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

    public boolean isRecipePublic() {
        return isRecipePublic;
    }

    public void setRecipePublic(boolean recipePublic) {
        isRecipePublic = recipePublic;
    }

    public int getLikes() {
        return likes;
    }

    public void setLikes(int likes) {
        this.likes = likes;
    }

    public String getPreparationMethod() {
        return preparationMethod;
    }

    public void setPreparationMethod(String preparationMethod) {
        this.preparationMethod = preparationMethod;
    }

    public Set<Ingredients> getIngredients() {
        return ingredients;
    }

    public void setIngredients(Set<Ingredients> ingredients) {
        this.ingredients = ingredients;
    }
}
