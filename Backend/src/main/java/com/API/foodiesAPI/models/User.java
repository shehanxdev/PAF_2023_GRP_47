//package com.API.foodiesAPI.models;
//
//
////import org.bson.types.ObjectId;
//import org.springframework.data.annotation.Id;
//import org.springframework.data.mongodb.core.mapping.Document;
//
////import java.util.Date;
//
//
//import java.util.HashSet;
//import java.util.Set;
//
//// import javax.validation.constraints.Email;
//// import javax.validation.constraints.NotBlank;
//// import javax.validation.constraints.Size;
//
//
//import org.springframework.data.mongodb.core.mapping.DBRef;
//
//
//@Document(collection = "users")
//
//
//public class User {
//
//    @Id
//    private String id;
//
//    //@NotBlank
//    //@Size(max = 20)
//    private String username;
//
//   // @NotBlank
//   // @Size(max = 50)
//   // @Email
//    private String email;
//
//   // @NotBlank
//   // @Size(max = 120)
//    private String password;
//
//    @DBRef
//    private Set<Role> roles = new HashSet<>();
//
//    public User() {
//    }
//
//    public User(String username, String email, String password) {
//      this.username = username;
//      this.email = email;
//      this.password = password;
//    }
//
//    public String getId() {
//      return id;
//    }
//
//    public void setId(String id) {
//      this.id = id;
//    }
//
//    public String getUsername() {
//      return username;
//    }
//
//    public void setUsername(String username) {
//      this.username = username;
//    }
//
//    public String getEmail() {
//      return email;
//    }
//
//    public void setEmail(String email) {
//      this.email = email;
//    }
//
//    public String getPassword() {
//      return password;
//    }
//
//    public void setPassword(String password) {
//      this.password = password;
//    }
//
//    public Set<Role> getRoles() {
//      return roles;
//    }
//
//    public void setRoles(Set<Role> roles) {
//      this.roles = roles;
//    }
//  }
//
//
//
//
//
//
//
//
////     @Id
////     private ObjectId id;
//
////     private String name;
////     private String userid;
////     private String username;
////     private String email;
////     private String password;
////     private Date createdAt;
////     private Date updatedAt;
//
////     public ObjectId getId() {
////         return id;
////     }
//
////     public void setId(ObjectId id) {
////         this.id = id;
////     }
//
////     public String getName() {
////         return name;
////     }
//
////     public void setName(String name) {
////         this.name = name;
////     }
//
////     public String getuserId() {
////         return userid;
////     }
//
////     public void setuserId(String userid) {
////         this.userid = userid;
////     }
//
////     public String getuserName() {
////         return username;
////     }
//
////     public void setuserName(String username) {
////         this.username = username;
////     }
//
////     public String getEmail() {
////         return email;
////     }
//
////     public void setEmail(String email) {
////         this.email = email;
////     }
//
////     public String getPassword() {
////         return password;
////     }
//
////     public void setPassword(String password) {
////         this.password = password;
////     }
//
////     public Date getCreatedAt() {
////         return createdAt;
////     }
//
////     public void setCreatedAt(Date createdAt) {
////         this.createdAt = createdAt;
////     }
//
////     public Date getUpdatedAt() {
////         return updatedAt;
////     }
//
////     public void setUpdatedAt(Date updatedAt) {
////         this.updatedAt = updatedAt;
////     }
//
////     public User(String name, String userid, String username, String email, String password) {
////         this.name = name;
////         this.userid = userid;
////         this.username = username;
////         this.email = email;
////         this.password = password;
////         this.createdAt = new Date();
////         this.updatedAt = new Date();
////     }
//
//
//
//// }
