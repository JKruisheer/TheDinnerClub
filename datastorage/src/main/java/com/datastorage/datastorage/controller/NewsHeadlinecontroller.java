package com.datastorage.datastorage.controller;

import com.datastorage.datastorage.entity.NewsHeadline;
import com.datastorage.datastorage.service.NewsHeadlinesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/headlines")
public class NewsHeadlinecontroller {

    @Autowired
    NewsHeadlinesService newsHeadlinesService;

    @GetMapping("/allHeaders")
    public List<NewsHeadline> getAllHeadlines(){
        return this.newsHeadlinesService.getAllNewsHeadlines();
    }
}
