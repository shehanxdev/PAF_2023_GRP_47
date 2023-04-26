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

    @GetMapping("/{receiverId}")
    public List<Notification> getNotificationsByReceiverId(@PathVariable String receiverId) {
        return notificationService.getNotificationsByReceiverId(receiverId);
    }

    @PostMapping("/")
    public Notification addNotification(@RequestBody Notification notification) {
        return notificationService.addNotification(notification);
    }

    @DeleteMapping("/{Id}")
    public ResponseEntity<?> deleteNotification(@PathVariable String Id) {
        try {
            notificationService.deleteNotification(Id);
            return ResponseEntity.ok().build();
        } catch (Exception exception) {
            System.out.println("Database operation failed "+exception);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }
}
