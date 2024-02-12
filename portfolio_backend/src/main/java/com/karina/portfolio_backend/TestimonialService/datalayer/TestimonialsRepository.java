package com.karina.portfolio_backend.TestimonialService.datalayer;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface TestimonialsRepository extends MongoRepository<Testimonial,String> {

}
