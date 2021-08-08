package com.datastorage.datastorage.entity;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Table(name = "TDC_RECIPIES")
public class Recipe {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "RECIPE_USER_ID")
    private Long userId;

    @Column(name = "RECIPE_HEADER_TEXT")
    private String headerText;

    @Column(name = "RECIPE_DESCRIPTION")
    private String description;

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
}
