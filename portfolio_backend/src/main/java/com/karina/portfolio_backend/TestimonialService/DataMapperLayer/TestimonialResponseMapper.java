package com.karina.portfolio_backend.TestimonialService.DataMapperLayer;

import com.karina.portfolio_backend.TestimonialService.presentationlayer.TestimonialResponseModel;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;
import com.karina.portfolio_backend.TestimonialService.datalayer.Testimonial;


@Mapper(componentModel = "spring")
public interface TestimonialResponseMapper {

    @Mappings({
            @Mapping(expression = "java(testimonial.getFullName())", target = "fullName"),
            @Mapping(expression = "java(testimonial.getEmail())", target = "email"),
            @Mapping(expression = "java(testimonial.getMessage())", target = "message")
    })
    TestimonialResponseModel entityToResponseModel(Testimonial testimonial);
}