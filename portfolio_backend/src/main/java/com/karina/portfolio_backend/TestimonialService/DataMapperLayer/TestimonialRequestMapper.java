package com.karina.portfolio_backend.TestimonialService.DataMapperLayer;

import com.karina.portfolio_backend.TestimonialService.datalayer.Testimonial;
import com.karina.portfolio_backend.TestimonialService.presentationlayer.TestimonialRequestModel;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface TestimonialRequestMapper {

    @Mapping(ignore = true, target = "id")
    Testimonial requestModelToEntity(TestimonialRequestModel testimonialRequestModel);
}
