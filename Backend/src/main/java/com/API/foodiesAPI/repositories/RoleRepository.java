package com.API.foodiesAPI.repositories;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.API.foodiesAPI.models.ERole;
import com.API.foodiesAPI.models.Role;


//import org.bson.types.ObjectId;



public interface RoleRepository extends MongoRepository<Role, String> {
  Optional<Role> findByName(ERole name);
}