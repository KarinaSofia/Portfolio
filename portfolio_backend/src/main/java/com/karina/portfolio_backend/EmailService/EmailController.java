package com.karina.portfolio_backend.EmailService;

import com.karina.portfolio_backend.TestimonialService.presentationlayer.TestimonialRequestModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.thymeleaf.context.Context;

@RestController
@RequestMapping("/email")
@CrossOrigin(origins = {"http://localhost:3000"})
//@CrossOrigin(origins = {"http://localhost:3000", "https://portfolio-5y9harmty-youssef-chahbounes-projects.vercel.app"})
public class EmailController {
    private final EmailService emailService;

    @Autowired
    public EmailController(EmailService emailService) {
        this.emailService = emailService;
    }

    @PostMapping("/send-email")
    public String sendEmail(@RequestBody EmailRequest emailRequest) {
        emailService.sendEmail("Chahbouney2000@outlook.fr", emailRequest.getFullName(),emailRequest.getEmail(), emailRequest.getSubject(), emailRequest.getBody());
        return "Email sent successfully!";
    }

    @PostMapping("/send-html-email")
    public String sendHtmlEmail(@RequestBody TestimonialRequestModel testimonialRequestModel) {
        Context context = new Context();
        context.setVariable("fullName", testimonialRequestModel.getFullName());
        context.setVariable("email", testimonialRequestModel.getEmail());
        context.setVariable("message", testimonialRequestModel.getMessage());

        emailService.sendEmailWithHtmlTemplate("Chahbouney2000@outlook.fr", "New Testimonial", "testimonial-email-template", context);
        return "HTML email sent successfully!";
    }
}