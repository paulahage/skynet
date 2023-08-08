package com.skynet.shopapi;

public interface ApiService {

  Address getAddress(String postcode);

  DataPlans[] getDataPlans(String postcode);
}
