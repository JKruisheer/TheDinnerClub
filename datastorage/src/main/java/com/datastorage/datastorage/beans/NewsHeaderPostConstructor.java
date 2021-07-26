package com.datastorage.datastorage.beans;

import com.datastorage.datastorage.entity.User;
import com.datastorage.datastorage.repository.NewsHeadlinesRepository;
import com.datastorage.datastorage.entity.NewsDetails;
import com.datastorage.datastorage.entity.NewsHeadline;
import com.datastorage.datastorage.repository.UserDetailsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
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
    UserDetailsRepository userDetailsRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

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

        User jessesUser = userDetailsRepository.findByUserName("jesse");
        if(jessesUser == null){
            User user = new User();
            user.setUserName("jesse");
            user.setPassword(passwordEncoder.encode("test"));
            user.setFirstName("Jesse");
            user.setLastName("Kruisheer");
            user.setRank("Admin");
            userDetailsRepository.save(user);
        } else {
            System.out.println("Jesse already exists");
        }

        User dewyUser = userDetailsRepository.findByUserName("dewy");
        System.out.println("Haiii");
        if(dewyUser == null){
            User user = new User();
            user.setUserName("dewy");
            user.setPassword(passwordEncoder.encode("test"));
            user.setFirstName("Dewy");
            user.setLastName("Atteveld");
            user.setRank("Design specialist");
            userDetailsRepository.save(user);
        } else {
            System.out.println("Dewy already exists");
        }


    }
}
