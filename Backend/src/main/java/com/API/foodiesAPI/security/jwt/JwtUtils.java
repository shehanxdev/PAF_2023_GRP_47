package com.API.foodiesAPI.security.jwt;

import java.util.Date;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.*;
//import javax.servlet.http.Cookie;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseCookie;
import org.springframework.stereotype.Component;
import org.springframework.web.util.WebUtils;

import com.API.foodiesAPI.security.services.UserDetailsImpl;

//import io.jsonwebtoken.*;

 import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
 import io.jsonwebtoken.security.Keys;



 import java.security.SignatureException;
 import io.jsonwebtoken.MalformedJwtException;
 import io.jsonwebtoken.ExpiredJwtException;
 import io.jsonwebtoken.UnsupportedJwtException;
 import io.jsonwebtoken.SignatureAlgorithm;
 //import io.jsonwebtoken.Jwts;





 @Component
 public class JwtUtils {
   private static final Logger logger = LoggerFactory.getLogger(JwtUtils.class);
 
   @Value("${bezkoder.app.jwtSecret}")
   private String jwtSecret;
 
   @Value("${bezkoder.app.jwtExpirationMs}")
   private int jwtExpirationMs;
 
   @Value("${bezkoder.app.jwtCookieName}")
   private String jwtCookie;
 
   public String getJwtFromCookies(HttpServletRequest request) {
     Cookie cookie = WebUtils.getCookie(request, jwtCookie);
     if (cookie != null) {
       return cookie.getValue();
     } else {
       return null;
     }
   }
 

  //  public static Cookie getCookie(HttpServletRequest req,String name) {
  //   Cookie[] cookies = req.getCookies();
  //   if(cookies!=null) {
  //     for (Cookie cookie : cookies) {
  //       if(cookie.getName().equals(name)) {
  //         return cookie;
  //       }
  //     }
  //   }
  //   return null;
  // }
  

   public ResponseCookie generateJwtCookie(UserDetailsImpl userPrincipal) {
     String jwt = generateTokenFromUsername(userPrincipal.getUsername());
     ResponseCookie cookie = ResponseCookie.from(jwtCookie, jwt).path("/api").maxAge(24 * 60 * 60).httpOnly(true).build();
     return cookie;
   }
 
   public ResponseCookie getCleanJwtCookie() {
     ResponseCookie cookie = ResponseCookie.from(jwtCookie, null).path("/api").build();
     return cookie;
   }
 
   public String getUserNameFromJwtToken(String token) {
     return Jwts.parser().setSigningKey(jwtSecret).parseClaimsJws(token).getBody().getSubject();
   }
 
   public boolean validateJwtToken(String authToken) {
     try {
       Jwts.parser().setSigningKey(jwtSecret).parseClaimsJws(authToken);
       return true;
     }  catch (MalformedJwtException e) {
       logger.error("Invalid JWT token: {}", e.getMessage());
     } catch (ExpiredJwtException e) {
       logger.error("JWT token is expired: {}", e.getMessage());
     } catch (UnsupportedJwtException e) {
       logger.error("JWT token is unsupported: {}", e.getMessage());
     } catch (IllegalArgumentException e) {
       logger.error("JWT claims string is empty: {}", e.getMessage());
     }
 
     return false;
   }
   
   public String generateTokenFromUsername(String username) {
     return Jwts.builder()
         .setSubject(username)
         .setIssuedAt(new Date())
         .setExpiration(new Date((new Date()).getTime() + jwtExpirationMs))
         .signWith(SignatureAlgorithm.HS512, jwtSecret)
         .compact();
   }
 }