package com.karina.portfolio_backend.TestimonialService.datalayer;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TestimonialsRepository extends MongoRepository<Testimonial,String> {

}
