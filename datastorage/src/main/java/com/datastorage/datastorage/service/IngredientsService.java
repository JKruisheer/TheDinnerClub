package com.datastorage.datastorage.service;

import com.datastorage.datastorage.repository.IngredientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class IngredientsService {

    @Autowired
    IngredientRepository ingredientRepository;

}
