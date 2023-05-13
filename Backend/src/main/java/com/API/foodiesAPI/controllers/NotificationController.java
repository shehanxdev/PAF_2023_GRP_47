package com.API.foodiesAPI.controllers;

import com.API.foodiesAPI.models.Notification;
import com.API.foodiesAPI.services.NotificationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/api/notifications")
public class NotificationController {

    @Autowired
    private NotificationService notificationService;
    @GetMapping("/")
    public ResponseEntity<?> getHealth() {
        return ResponseEntity.ok().build();
    }
    @GetMapping("/{receiverId}")
    public List<Notification> getNotificationsByReceiverId(@PathVariable String receiverId) {
        return notificationService.getNotificationsByReceiverId(receiverId);
    }

    @PostMapping("/")
    public Notification addNotification(@RequestBody Notification notification) {
        return notificationService.addNotification(notification);
    }

    @DeleteMapping("/{receiverId}")
    public ResponseEntity<?> deleteNotification(@PathVariable String receiverId) {
        System.out.println("Inside delte contro");
        try {
            notificationService.deleteNotification(receiverId);
            return ResponseEntity.ok().build();
        } catch (Exception exception) {
            System.out.println("Database operation failed "+exception);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }
}
