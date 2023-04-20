package com.API.foodiesAPI.services;

import com.API.foodiesAPI.models.Notification;
import com.API.foodiesAPI.repositories.NotificationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NotificationService {

    @Autowired
    private NotificationRepository notificationRepository;

    public List<Notification> getNotificationsByReceiverId(String receiverId) {
        return notificationRepository.findByReceiverId(receiverId);
    }

    public Notification addNotification(Notification notification) {
        return notificationRepository.save(notification);
    }
}
