package com.karina.portfolio_backend.EmailService;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class EmailRequest {
    private String fullName;
    private String email;
    private String subject;
    private String body;
}