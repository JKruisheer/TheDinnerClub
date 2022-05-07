package com.datastorage.datastorage.repository;

import com.datastorage.datastorage.entity.Ingredients;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IngredientRepository  extends JpaRepository<Ingredients, Long> {
}
