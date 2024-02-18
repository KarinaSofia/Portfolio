package com.karina.portfolio_backend.EmailService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.mail.MessagingException;

@RestController
@RequestMapping("/email")
@CrossOrigin(origins = {"http://localhost:3000", "https://portfolio-ten-rose-31.vercel.app"})
public class EmailController {
    private final EmailService emailService;

    @Autowired
    public EmailController(EmailService emailService) {
        this.emailService = emailService;
    }

    @CrossOrigin(origins = "https://portfolio-ten-rose-31.vercel.app")
    @PostMapping("/send-email")
    public void sendEmail(@RequestBody EmailRequest emailRequest) throws MessagingException {
        emailService.sendEmailToKarina(emailRequest);
    }

}
