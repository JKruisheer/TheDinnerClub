package com.datastorage.datastorage.repository;

import com.datastorage.datastorage.entity.NewsHeadline;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface NewsHeadlinesRepository extends JpaRepository<NewsHeadline, Long> {
    List<NewsHeadline> findByHeaderDetails(String headerdetails);
}
