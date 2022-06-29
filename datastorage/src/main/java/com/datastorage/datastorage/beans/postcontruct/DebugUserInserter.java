package com.datastorage.datastorage.beans.postcontruct;

import com.datastorage.datastorage.entity.User;
import com.datastorage.datastorage.repository.UserDetailsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Configurable;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
public class DebugUserInserter {

    @Autowired
    UserDetailsRepository userDetailsRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    /**
     *  Insert the main users Jesse and Dewy
     */
    protected void insertUsers(){
        User jessesUser = userDetailsRepository.findByUserName("Jesse");
        if(jessesUser == null){
            User user = new User();
            user.setUserName("Jesse");
            user.setPassword(passwordEncoder.encode("test"));
            user.setFirstName("Jesse");
            user.setLastName("Kruisheer");
            user.setRank("Admin");
            user.setAvatarLink("https://media-exp1.licdn.com/dms/image/C5603AQFyly3fPFRTww/profile-displayphoto-shrink_200_200/0/1591002076403?e=1654128000&v=beta&t=qAdVwPSHeWTmezL6CEOTm0f3FyavYtJqljBnLG0AMKo");
            userDetailsRepository.save(user);
        } else {
            System.out.println("Jesse already exists");
        }
        User dewyUser = userDetailsRepository.findByUserName("Dewy");
        if(dewyUser == null){
            User user = new User();
            user.setUserName("Dewy");
            user.setPassword(passwordEncoder.encode("test"));
            user.setFirstName("Dewy");
            user.setLastName("Atteveld");
            user.setRank("Design specialist");
            user.setAvatarLink("http://www.werkenaandetoekomst.nl/wp-content/uploads/Dewy200x320.png");
            userDetailsRepository.save(user);
        } else {
            System.out.println("Dewy already exists");
        }
    }
}
