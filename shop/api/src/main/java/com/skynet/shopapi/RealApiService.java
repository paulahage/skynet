package com.skynet.shopapi;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Profile;


@Service
@Profile({ "prod", "wiremock" })
public class RealApiService implements ApiService {
  @Autowired
  private RestTemplate restTemplate;
  private final String apiAddressBaseUrl;
  private final String apiDataPlansBaseUrl;

  public RealApiService( @Value("${api-address-url}") String apiAddressBaseUrl, @Value("${api-data-plans-url}") String apiDataPlansBaseUrl) {
    this.apiAddressBaseUrl = apiAddressBaseUrl;
    this.apiDataPlansBaseUrl = apiDataPlansBaseUrl;
  }

  @Override
  public Address getAddress(String postcode) {
    String getAddressUrl = apiAddressBaseUrl + "getAddress?postcode=" + postcode;
    System.out.println(getAddressUrl);
    Address address = restTemplate.getForObject(getAddressUrl, Address.class);
    return address;
  }

  @Override
  public DataPlans[] getDataPlans(String postcode) {
    String getDataPlansUrl = apiDataPlansBaseUrl + "getPlans?postcode=" + postcode;
    DataPlans[] dataPlansList = restTemplate.getForObject(getDataPlansUrl, DataPlans[].class);
    return dataPlansList;
  }
}
