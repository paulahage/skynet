package com.skynet.shopapi;

import org.springframework.stereotype.Service;
import org.springframework.context.annotation.Profile;

@Service
@Profile("dev")
public class MockApiService implements ApiService {

  @Override
  public Address getAddress(String postcode) {
    if (isValidPostcode(postcode)) {
      Address address = new Address();
      address.setStreet("Zuidplein");
      address.setCity("Rotterdam");
      address.setCountry("Netherlands");

      return address;
    } else {
      return null;
    }
  }

  @Override
  public DataPlans[] getDataPlans(String postcode) {
    if (isValidPostcode(postcode)) {
      DataPlans dataPlans1 = new DataPlans();
      dataPlans1.setId("01");
      dataPlans1.setName("Smart");
      dataPlans1.setDownload("10");
      dataPlans1.setUpload("2");
      dataPlans1.setPrice("39.00");

      DataPlans dataPlans2 = new DataPlans();
      dataPlans2.setId("02");
      dataPlans2.setName("Advanced");
      dataPlans2.setDownload("50");
      dataPlans2.setUpload("10");
      dataPlans2.setPrice("49.00");

      DataPlans dataPlans3 = new DataPlans();
      dataPlans3.setId("03");
      dataPlans3.setName("Complete");
      dataPlans3.setDownload("100");
      dataPlans3.setUpload("30");
      dataPlans3.setPrice("75.50");

      DataPlans dataPlans4 = new DataPlans();
      dataPlans4.setId("04");
      dataPlans4.setName("UltraMax");
      dataPlans4.setDownload("300");
      dataPlans4.setUpload("45");
      dataPlans4.setPrice("99.99");

      DataPlans[] dataPlansList = { dataPlans1, dataPlans2, dataPlans3, dataPlans4 };

      return dataPlansList;
    } else {
      return null;
    }
  }

  public boolean isValidPostcode(String postcode){
    return postcode != null && postcode.matches("\\d{5}") && postcode.compareTo("00000") >= 0 && postcode.compareTo("99999") <= 0;
  }
}
