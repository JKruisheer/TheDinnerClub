package com.datastorage.datastorage.controller;

import com.datastorage.datastorage.config.JWTTokenHelper;
import com.datastorage.datastorage.entity.User;
import com.datastorage.datastorage.entity.requests.AuthenticationRequest;
import com.datastorage.datastorage.entity.requests.LoginResponse;
import com.datastorage.datastorage.entity.requests.SignupForm;
import com.datastorage.datastorage.entity.requests.UserInfo;
import com.datastorage.datastorage.repository.UserDetailsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.security.NoSuchAlgorithmException;
import java.security.Principal;
import java.security.spec.InvalidKeySpecException;
import java.time.LocalDate;
import java.util.Calendar;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin
public class AuthenticationController {

    private final Long uniqueKey = 99999L;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    JWTTokenHelper jwtTokenHelper;

    @Autowired
    private UserDetailsRepository userDetailsRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping("/auth/login")
    public ResponseEntity<?> login(@RequestBody AuthenticationRequest authenticationRequest) throws InvalidKeySpecException, NoSuchAlgorithmException {
        final Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(authenticationRequest.getUsername(), authenticationRequest.getPassword())
        );
        SecurityContextHolder.getContext().setAuthentication(authentication);
        User user = (User) authentication.getPrincipal();
        String jwtToken = jwtTokenHelper.generateToken(user.getUsername());
        LoginResponse response = new LoginResponse();
        response.setToken(jwtToken);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/auth/userinfo")
    public ResponseEntity<?> getUserInfo(Principal user){
        User userObj = userDetailsRepository.findByUserName(user.getName());
        System.out.println(userObj.getFirstName());
        UserInfo userInfo=new UserInfo();
        userInfo.setFirstName(userObj.getFirstName());
        userInfo.setLastName(userObj.getLastName());
        userInfo.setRank(userObj.getRank());
        return ResponseEntity.ok(userInfo);
    }

    @PostMapping("/auth/signup")
    public ResponseEntity<?> signup(@RequestBody SignupForm form){
        if(form.getUniqueKey() == null || !form.getUniqueKey().equals(this.uniqueKey)){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("The key that you are trying to use is not valid!");
        }
        User userObj = userDetailsRepository.findByUserName(form.getUsername());
        if(userObj != null){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("This username has already been taken!");
        }

        if(form.getFirstName() == null || form.getFirstName().isEmpty()){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Please fill your first name!");
        }

        if(form.getLastName() == null || form.getLastName().isEmpty()){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Please fill your last name!");
        }

        if(form.getPassword() == null || form.getPassword().isEmpty()){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Please fill your password!");
        }

        User user = new User();
        user.setUserName(form.getUsername());
        user.setPassword(passwordEncoder.encode(form.getPassword()));
        user.setFirstName(form.getFirstName());
        user.setLastName(form.getLastName());
        user.setCreatedAt(new java.sql.Date(Calendar.getInstance().getTime().getTime()));
        user.setRank("Fresh");
        userDetailsRepository.save(user);
        return ResponseEntity.ok(String.format("User: %s has been created! You can now login with this account!", form.getUsername()));
    }
}
