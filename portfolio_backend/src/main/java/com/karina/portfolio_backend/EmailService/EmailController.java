package com.karina.portfolio_backend.EmailService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/email")
@CrossOrigin(origins = {"http://localhost:3000", "https://portfolio-5y9harmty-youssef-chahbounes-projects.vercel.app"})
public class EmailController {
    private final EmailService emailService;

    @Autowired
    public EmailController(EmailService emailService) {
        this.emailService = emailService;
    }

    @PostMapping("/send-email")
    public String sendEmail(@RequestBody EmailRequest emailRequest) {
        String customerFullName = emailRequest.getFullName();
        emailService.sendEmail("Karinaevang@hotmail.com", emailRequest.getFullName(),emailRequest.getEmail(), customerFullName + " has sent you a message", emailRequest.getBody());
        return "Email sent successfully!";
    }

}
