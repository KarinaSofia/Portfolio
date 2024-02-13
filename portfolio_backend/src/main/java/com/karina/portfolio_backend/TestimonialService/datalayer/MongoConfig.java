package com.karina.portfolio_backend.TestimonialService.datalayer;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@Configuration
@EnableMongoRepositories(basePackages = "com.example.portfolio.Testimonials.datalayer")
public class MongoConfig {
}