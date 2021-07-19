package com.datastorage.datastorage.controller;

import com.datastorage.datastorage.config.JWTTokenHelper;
import com.datastorage.datastorage.entity.User;
import com.datastorage.datastorage.entity.requests.AuthenticationRequest;
import com.datastorage.datastorage.entity.requests.LoginResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.*;

import java.security.NoSuchAlgorithmException;
import java.security.spec.InvalidKeySpecException;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin
public class AuthenticationController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    JWTTokenHelper jwtTokenHelper;

    @Autowired
    private UserDetailsService userDetailsService;

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

    


}
