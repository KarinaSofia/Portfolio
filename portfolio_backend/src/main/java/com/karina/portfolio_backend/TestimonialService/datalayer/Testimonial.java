package com.karina.portfolio_backend.TestimonialService.datalayer;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.example.portfolio.Testimonials.datalayer.TestimonialIdentifier;

@Data
@Document("testimonials")
@Builder
@AllArgsConstructor
public class Testimonial {

    @Id
    private String id;
    private String fullName;
    private String email;
    private String message;

    public Testimonial(){

    }

    public Testimonial(TestimonialIdentifier testimonialIdentifier, String fullName, String email, String message) {
        super();
        this.id = id;
        this.fullName = fullName;
        this.email = email;
        this.message = message;
    }

    @Override
    public String toString() {
        return "Testimonial{" +
                "id='" + id + '\'' +
                ", fullName='" + fullName + '\'' +
                ", email='" + email + '\'' +
                ", message='" + message + '\'' +
                '}';
    }


}


