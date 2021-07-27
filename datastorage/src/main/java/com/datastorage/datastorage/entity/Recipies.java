package com.datastorage.datastorage.entity;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Table(name = "TDC_RECIPIES")
public class Recipies {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long userId;
    //TODO Join to another table which contains all the images For now an id will do
    private Long imageid;

    private String headerText;
    private String description;
    private String recipiesId;

    private Long timeToCreate;

    private String originCategory;
    private String dietCategory;
    private String typeOfMeal;

    public boolean isPublic;

    private Date createdOn;
    private Date updatedOn;

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

    public Long getImageid() {
        return imageid;
    }

    public void setImageid(Long imageid) {
        this.imageid = imageid;
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

    public String getRecipiesId() {
        return recipiesId;
    }

    public void setRecipiesId(String recipiesId) {
        this.recipiesId = recipiesId;
    }

    public Long getTimeToCreate() {
        return timeToCreate;
    }

    public void setTimeToCreate(Long timeToCreate) {
        this.timeToCreate = timeToCreate;
    }

    public String getOriginCategory() {
        return originCategory;
    }

    public void setOriginCategory(String originCategory) {
        this.originCategory = originCategory;
    }

    public String getDietCategory() {
        return dietCategory;
    }

    public void setDietCategory(String dietCategory) {
        this.dietCategory = dietCategory;
    }

    public String getTypeOfMeal() {
        return typeOfMeal;
    }

    public void setTypeOfMeal(String typeOfMeal) {
        this.typeOfMeal = typeOfMeal;
    }

    public boolean isPublic() {
        return isPublic;
    }

    public void setPublic(boolean aPublic) {
        isPublic = aPublic;
    }

    public Date getCreatedOn() {
        return createdOn;
    }

    public void setCreatedOn(Date createdOn) {
        this.createdOn = createdOn;
    }

    public Date getUpdatedOn() {
        return updatedOn;
    }

    public void setUpdatedOn(Date updatedOn) {
        this.updatedOn = updatedOn;
    }
}
