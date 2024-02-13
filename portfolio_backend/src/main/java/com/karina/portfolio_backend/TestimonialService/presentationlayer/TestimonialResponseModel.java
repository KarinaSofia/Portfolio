package com.karina.portfolio_backend.TestimonialService.presentationlayer;

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
