package com.datastorage.datastorage.repository;

import com.datastorage.datastorage.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserDetailsRepository extends JpaRepository<User, Long> {
    User findByUserName(String username);

}
