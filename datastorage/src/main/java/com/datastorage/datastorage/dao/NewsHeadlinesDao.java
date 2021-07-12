package com.datastorage.datastorage.dao;

import com.datastorage.datastorage.entity.NewsHeadline;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface NewsHeadlinesDao extends JpaRepository<NewsHeadline, Long> {
    List<NewsHeadline> findByHeaderDetails(String headerdetails);
}
