package com.datastorage.datastorage.beans.postcontruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;

@Component
public class NewsHeaderPostConstructor {

    @Autowired
    private DebugUserInserter debugUserInserter;

    @Autowired
    private DebugRecipiesInserter debugRecipiesInserter;

    @PostConstruct
    public void insertTestData(){
        debugUserInserter.insertUsers();
        debugRecipiesInserter.insertRecipies();
    }
}
