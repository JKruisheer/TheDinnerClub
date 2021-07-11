package com.datastorage.datastorage.beans;

import com.datastorage.datastorage.dao.NewsHeadlinesDao;
import com.datastorage.datastorage.entity.NewsHeadline;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.List;

@Component
public class NewsHeaderPostConstructor {
    @Autowired
    NewsHeadlinesDao newsHeadlinesDao;

    @PostConstruct
    public void insertSomeStuff(){
        NewsHeadline newLine = new NewsHeadline("This is a sample", Timestamp.valueOf(LocalDateTime.now()), "Jesse Kruisheer", "1");
        List<NewsHeadline> headers = newsHeadlinesDao.findByHeaderDetails(newLine.getHeaderDetails());
        if(headers.size() > 0){
            System.out.println("There is something in the database, so we are not going to insert anything");
        } else {
            newsHeadlinesDao.save(newLine);
            System.out.println("Nothing in the database so we are inserting " + newLine);
        }
    }
}
