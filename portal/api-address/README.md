# API Address
API for getting address based in a postcode

## Endpoints:
- [GET] `/getAddress`
  - Header parameter:
    - Bearer token: `0b48d594-288e-11ee-be56-0242ac120002`
  - Query parameter:
    - `postCode`:
      - numbers between `00000` and `99999`
  - Response:
    ```javascript
    {
        street: string,
        city: string,
        country: string
    }
    ```