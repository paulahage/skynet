package com.skynet.shopapi;

public interface ApiService {

  Address getAddressClass(String postcode);

  DataPlans[] getDataPlansClass(String postcode);
}
