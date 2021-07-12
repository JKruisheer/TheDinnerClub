package com.datastorage.datastorage.service;

import com.datastorage.datastorage.repository.NewsHeadlinesRepository;
import com.datastorage.datastorage.entity.NewsHeadline;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NewsHeadlinesService {

    @Autowired
    NewsHeadlinesRepository newsHeadlinesRepository;

    public List<NewsHeadline> getAllNewsHeadlines(){
        return this.newsHeadlinesRepository.findAll();
    }

}
