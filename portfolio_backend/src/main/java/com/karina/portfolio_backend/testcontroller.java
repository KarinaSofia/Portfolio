package com.karina.portfolio_backend;

import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@RequestMapping("test")
public class testcontroller {

    @GetMapping("/hello")
    public String hello() {
        return "Hello World!";
    }
}
