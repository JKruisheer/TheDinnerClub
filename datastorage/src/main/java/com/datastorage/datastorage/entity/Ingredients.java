package com.datastorage.datastorage.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "TDC_INGREDIENTS")
public class Ingredients implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "TDC_INGREDIENT_ID")
    private int id;

    @Column(name = "TDC_INGREDIENT_NAME")
    private String ingredientName;

    @ManyToOne()
    @JoinColumn(name = "tdc_recipe_id", nullable = false)
    @JsonBackReference
    private Recipe recipe;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getIngredientName() {
        return ingredientName;
    }

    public void setIngredientName(String ingredientName) {
        this.ingredientName = ingredientName;
    }

    public Recipe getRecipe() {
        return recipe;
    }

    public void setRecipe(Recipe recipe) {
        this.recipe = recipe;
    }
}
