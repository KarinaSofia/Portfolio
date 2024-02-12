package com.karina.portfolio_backend.TestimonialService.DataMapperLayer;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;
import com.karina.portfolio_backend.TestimonialService.datalayer.Testimonial;
import com.example.portfolio.Testimonials.presentationlayer.TestimonialResponseModel;

@Mapper(componentModel = "spring")
public interface TestimonialResponseMapper {

    @Mappings({
            @Mapping(expression = "java(testimonial.getFullName())", target = "fullName"),
            @Mapping(expression = "java(testimonial.getEmail())", target = "email"),
            @Mapping(expression = "java(testimonial.getMessage())", target = "message")
    })
    TestimonialResponseModel entityToResponseModel(Testimonial testimonial);
}