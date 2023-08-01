# API Data Plans
API for getting the data plans based in a postcode

## Endpoints:
- [GET] `/getPlans`
  - Header parameter:
    - Bearer token: `a04fd1df-598c-4529-b02e-acfe053a1249`
  - Query parameter:
    - `postCode`:
      - numbers between `00000` and `99999`
  - Response:
    ```javascript
    {
        id: string,
        name: string,
        download: string,
        upload: string,
        price: string
    }
    ```