package com.karina.portfolio_backend.TestimonialService.presentationlayer;

import com.karina.portfolio_backend.TestimonialService.businesslayer.TestimonialService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.data.mongodb.repository.Update;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.portfolio.Testimonials.presentationlayer.TestimonialResponseModel;

@Slf4j
@RestController
@RequestMapping("/api/v1/testimonials")
@RequiredArgsConstructor
@CrossOrigin(origins = {"http://localhost:3000"})
//@CrossOrigin(origins = {"http://localhost:3000", "https://portfolio-5y9harmty-youssef-chahbounes-projects.vercel.app"})
public class TestimonialController {

    private final TestimonialService testimonialService;

    @GetMapping("/random")
    public ResponseEntity<TestimonialResponseModel> getOneRandomTestimonial(){
        return ResponseEntity.status(HttpStatus.OK).body(testimonialService.getOneRandomTestimonial());
    }

    @PostMapping()
    public ResponseEntity<TestimonialResponseModel> acceptAndAddTestimonial(@RequestBody TestimonialRequestModel testimonialRequestModel){
        return ResponseEntity.status(HttpStatus.CREATED).body(testimonialService.acceptAndAddTestimonial(testimonialRequestModel));
    }

}
