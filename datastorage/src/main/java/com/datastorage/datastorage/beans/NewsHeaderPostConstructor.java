package com.datastorage.datastorage.beans;

import com.datastorage.datastorage.entity.User;
import com.datastorage.datastorage.repository.NewsHeadlinesRepository;
import com.datastorage.datastorage.entity.NewsDetails;
import com.datastorage.datastorage.entity.NewsHeadline;
import com.datastorage.datastorage.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.List;

@Component
public class NewsHeaderPostConstructor {
    @Autowired
    NewsHeadlinesRepository newsHeadlinesRepository;

    @Autowired
    UserRepository userRepository;

    @PostConstruct
    public void insertSomeStuff(){
        NewsHeadline newLine = new NewsHeadline("This is a sample", Timestamp.valueOf(LocalDateTime.now()), "Jesse Kruisheer", "1");
        NewsDetails details = new NewsDetails("This is added by JK");
        newLine.setNewsDetails(details);
        details.setNewsHeadline(newLine);
        List<NewsHeadline> headers = newsHeadlinesRepository.findByHeaderDetails(newLine.getHeaderDetails());
        if(headers.size() > 0){
            System.out.println("There is something in the database, so we are not going to insert anything");
        } else {
            newsHeadlinesRepository.save(newLine);
            System.out.println("Nothing in the database so we are inserting " + newLine);
        }

        this.userRepository.save(new User("Ramesh", "Fadatare", "test@Test.com"));
        this.userRepository.save(new User("Jesse", "Kruisheer", "kruisheer@Test.com"));

    }
}
