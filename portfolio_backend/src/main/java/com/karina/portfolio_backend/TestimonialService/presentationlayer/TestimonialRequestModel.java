package com.karina.portfolio_backend.TestimonialService.presentationlayer;

import lombok.*;

@Value
@Builder
@AllArgsConstructor(access = AccessLevel.PUBLIC)
public class TestimonialRequestModel {
    private String fullName;
    private String email;
    private String message;

    @Override
    public String toString() {
        return "Testimonial{" +
                ", fullName='" + fullName + '\'' +
                ", email='" + email + '\'' +
                ", message='" + message + '\'' +
                '}';
    }
}
