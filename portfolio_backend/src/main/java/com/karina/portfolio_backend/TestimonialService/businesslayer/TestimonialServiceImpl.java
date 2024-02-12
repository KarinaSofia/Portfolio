package com.karina.portfolio_backend.TestimonialService.businesslayer;


import com.example.portfolio.Testimonials.presentationlayer.TestimonialResponseModel;
import com.karina.portfolio_backend.TestimonialService.DataMapperLayer.TestimonialRequestMapper;
import com.karina.portfolio_backend.TestimonialService.DataMapperLayer.TestimonialResponseMapper;
import com.karina.portfolio_backend.TestimonialService.datalayer.Testimonial;
import com.karina.portfolio_backend.TestimonialService.datalayer.TestimonialsRepository;
import com.karina.portfolio_backend.TestimonialService.presentationlayer.TestimonialRequestModel;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Random;

@Slf4j
@RequiredArgsConstructor
@Service
public class TestimonialServiceImpl implements TestimonialService{
    private final TestimonialsRepository testimonialsRepository;

    private final TestimonialRequestMapper testimonialRequestMapper;

    private final TestimonialResponseMapper testimonialResponseMapper;

    @Override
    public TestimonialResponseModel getOneRandomTestimonial() {
        List<Testimonial> allTestimonials = testimonialsRepository.findAll();

        int sizeOfList = allTestimonials.size();

        if(sizeOfList == 0){
            return null;
        } else {
            Random random = new Random();
            int randomIndex = random.nextInt(sizeOfList);
            Testimonial testimonialPicked = allTestimonials.get(randomIndex);
            return testimonialResponseMapper.entityToResponseModel(testimonialPicked);
        }
    }

    @Override
    public TestimonialResponseModel acceptAndAddTestimonial(TestimonialRequestModel testimonialRequestModel) {

        log.debug(testimonialRequestModel.toString());

        Testimonial newTestimonial = Testimonial.builder()
                .fullName(testimonialRequestModel.getFullName())
                .email(testimonialRequestModel.getEmail())
                .message(testimonialRequestModel.getMessage())
                .build();

        Testimonial testimonialAdded = testimonialsRepository.save(newTestimonial);

        log.debug(testimonialAdded.toString());

        return testimonialResponseMapper.entityToResponseModel(testimonialAdded);
    }
}
