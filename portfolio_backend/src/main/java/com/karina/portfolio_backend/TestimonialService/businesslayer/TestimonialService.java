package com.karina.portfolio_backend.TestimonialService.businesslayer;

import com.karina.portfolio_backend.TestimonialService.presentationlayer.TestimonialRequestModel;
import com.karina.portfolio_backend.TestimonialService.presentationlayer.TestimonialResponseModel;

public interface TestimonialService {

    TestimonialResponseModel getOneRandomTestimonial();
    TestimonialResponseModel acceptAndAddTestimonial(TestimonialRequestModel testimonialRequestModel);
}
