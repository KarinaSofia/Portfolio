package com.karina.portfolio_backend.TestimonialService.DataMapperLayer;

import com.karina.portfolio_backend.TestimonialService.datalayer.Testimonial;
import com.karina.portfolio_backend.TestimonialService.presentationlayer.TestimonialRequestModel;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface TestimonialRequestMapper {

    
    Testimonial requestModelToEntity(TestimonialRequestModel testimonialRequestModel);
}
