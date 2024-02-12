package com.example.portfolio.Testimonials.presentationlayer;

import lombok.*;

@Builder
@Data
@AllArgsConstructor()
@NoArgsConstructor
public class TestimonialResponseModel {
    String fullName;
    String email;
    String message;
}
