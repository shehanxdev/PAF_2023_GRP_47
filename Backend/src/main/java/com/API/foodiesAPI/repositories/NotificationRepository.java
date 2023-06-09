package com.API.foodiesAPI.repositories;

import com.API.foodiesAPI.models.Notification;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface NotificationRepository extends MongoRepository<Notification,String> {
    List<Notification> findByReceiverId(String receiverId);
    void deleteByReceiverId(String receiverId);
}
