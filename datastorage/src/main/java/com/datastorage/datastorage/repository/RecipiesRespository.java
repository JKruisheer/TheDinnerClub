package com.datastorage.datastorage.repository;

import com.datastorage.datastorage.entity.Recipies;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RecipiesRespository extends JpaRepository<Recipies, Long> {
}
