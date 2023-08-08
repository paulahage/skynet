package com.skynet.shopapi;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ApiController {

    private final ApiService apiService;

    @Autowired
    public ApiController(ApiService apiService) {
        this.apiService = apiService;
    }

    @GetMapping("/getAddress")
    public Address getAddress(@RequestParam("postcode") String postcode) {
        return apiService.getAddress(postcode);
    }

    @GetMapping("/getPlans")
    public DataPlans[] getDataPlans(@RequestParam("postcode") String postcode){
        return apiService.getDataPlans(postcode);
    }
}
