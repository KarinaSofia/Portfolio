package com.karina.portfolio_backend.EmailService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.mail.MessagingException;

@RestController
@RequestMapping("/email")
@CrossOrigin(origins = {"http://localhost:3000"})
public class EmailController {
    private final EmailService emailService;

    @Autowired
    public EmailController(EmailService emailService) {
        this.emailService = emailService;
    }

    @PostMapping("/send-email")
    public String sendEmail(@RequestBody EmailRequest emailRequest) throws MessagingException {
        String customerFullName = emailRequest.getFullName();

        emailService.sendEmail("Karinaevang@hotmail.com", emailRequest.getFullName(),"Text");
        return "Email sent successfully!";
    }

}
