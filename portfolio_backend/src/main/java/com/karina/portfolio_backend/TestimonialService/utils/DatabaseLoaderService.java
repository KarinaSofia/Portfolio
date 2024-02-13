package com.karina.portfolio_backend.TestimonialService.utils;

import com.karina.portfolio_backend.TestimonialService.datalayer.Testimonial;
import com.karina.portfolio_backend.TestimonialService.datalayer.TestimonialsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoaderService implements CommandLineRunner {


    @Autowired
    TestimonialsRepository testimonialsRepository;

    @Override
    public void run(String... args) throws Exception {
        //test data
        testimonialsRepository.save(new Testimonial("1","Karina","Karinaevang@hotmail.com", "This is a test message"));
        testimonialsRepository.save(new Testimonial("2","Karina","Karinaevang@hotmail.com", "This is a test message"));
    }

}
