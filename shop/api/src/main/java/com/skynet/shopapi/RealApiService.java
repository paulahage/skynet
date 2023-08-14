package com.skynet.shopapi;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Profile;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;


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

    HttpHeaders headers = new HttpHeaders();
    headers.set("Authorization", "Bearer 0b48d594-288e-11ee-be56-0242ac120002");

    HttpEntity<Void> requestEntity = new HttpEntity<>(headers);

    ResponseEntity<Address> address = restTemplate.exchange(getAddressUrl, HttpMethod.GET, requestEntity, Address.class);
    return address.getBody();
  }

  @Override
  public DataPlans[] getDataPlans(String postcode) {
    String getDataPlansUrl = apiDataPlansBaseUrl + "getPlans?postcode=" + postcode;

    HttpHeaders headers = new HttpHeaders();
    headers.set("Authorization", "Bearer 04fd1df-598c-4529-b02e-acfe053a1249");

    HttpEntity<Void> requestEntity = new HttpEntity<>(headers);

    ResponseEntity<DataPlans[]> dataPlansList = restTemplate.exchange(getDataPlansUrl,HttpMethod.GET, requestEntity, DataPlans[].class);
    return dataPlansList.getBody();
  }
}
