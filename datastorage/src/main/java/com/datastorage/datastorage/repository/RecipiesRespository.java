package com.datastorage.datastorage.repository;

import com.datastorage.datastorage.entity.Recipe;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RecipiesRespository extends JpaRepository<Recipe, Long> {
    List<Recipe> findByUserId(long userId);

}
