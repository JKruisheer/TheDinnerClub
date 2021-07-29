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

    //    private Long timeToCreate;
//
//    private String originCategory;
//    private String dietCategory;
//    private String typeOfMeal;
//
//    public boolean isPublic;
//
//    private Date createdOn;
//    private Date updatedOn;
//
//    //TODO Join to another table which contains all the images For now an id will do
//    private Long imageId;


}
