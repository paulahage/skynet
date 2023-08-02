package com.skynet.shopapi;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Profile;


@Service
@Profile("prod")
public class RealApiService implements ApiService {

  private final RestTemplate restTemplate;
  private final String apiAddressBaseUrl;
  private final String apiDataPlansBaseUrl;

  public RealApiService(RestTemplate restTemplate, @Value("${api-address-url}") String apiAddressBaseUrl, @Value("${api-data-plans-url}") String apiDataPlansBaseUrl) {
    this.restTemplate = restTemplate;
    this.apiAddressBaseUrl = apiAddressBaseUrl;
    this.apiDataPlansBaseUrl = apiDataPlansBaseUrl;
  }

  @Override
  public Address getAddressClass(String postcode) {
    String getAddressUrl = apiAddressBaseUrl + "getAddress?postcode=" + postcode;
    Address address = restTemplate.getForObject(getAddressUrl, Address.class);
    return address;
  }

  @Override
  public DataPlans[] getDataPlansClass(String postcode) {
    String getDataPlansUrl = apiDataPlansBaseUrl + "getPlans?postcode=" + postcode;
    DataPlans[] dataPlansList = restTemplate.getForObject(getDataPlansUrl, DataPlans[].class);
    return dataPlansList;
  }
}
