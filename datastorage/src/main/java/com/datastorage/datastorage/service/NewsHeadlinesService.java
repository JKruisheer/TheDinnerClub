package com.datastorage.datastorage.service;

import com.datastorage.datastorage.dao.NewsHeadlinesDao;
import com.datastorage.datastorage.entity.NewsHeadline;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NewsHeadlinesService {

    @Autowired
    NewsHeadlinesDao newsHeadlinesDao;

    public List<NewsHeadline> getAllNewsHeadlines(){
        return this.newsHeadlinesDao.findAll();
    }

}
