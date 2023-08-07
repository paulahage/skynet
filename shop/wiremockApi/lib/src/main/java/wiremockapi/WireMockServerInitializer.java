package wiremockapi;
import com.github.tomakehurst.wiremock.WireMockServer;
import static com.github.tomakehurst.wiremock.core.WireMockConfiguration.options;

import java.io.IOException;

public class WireMockServerInitializer {

  public static void main(String[] args) throws IOException {
    var options = options();
    options.port(7272);
    options.usingFilesUnderClasspath("mocks");

    WireMockServer wireMockServer = new WireMockServer(options);
    wireMockServer.start();
  }
}

