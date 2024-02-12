package com.karina.portfolio_backend.TestimonialService.businesslayer;
import com.example.portfolio.Testimonials.presentationlayer.TestimonialResponseModel;
import com.karina.portfolio_backend.TestimonialService.presentationlayer.TestimonialRequestModel;

public interface TestimonialService {

    TestimonialResponseModel getOneRandomTestimonial();
    TestimonialResponseModel acceptAndAddTestimonial(TestimonialRequestModel testimonialRequestModel);
}
