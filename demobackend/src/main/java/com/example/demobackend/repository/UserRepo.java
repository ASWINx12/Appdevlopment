package com.example.demobackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demobackend.model.User;

public interface UserRepo extends JpaRepository<User,Integer>{
    
}

