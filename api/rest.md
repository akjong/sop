# Rest API Standard

## API management Tool

- <https://apidog.com/> - You can use web version or Win/macOS client version(client version has more features).
- When we publish the API doc, we can export the OpenAPI spec and Markdown version to a public web.

## API Response Standard

### Success Response

- Get: response data directly. http.status: 200
- Post/Delete/Put: empty response or response data directly. http.status: 200

### Fail Response

- Fail: Client side reason. http.status: 40x

```json
{
  "code": 40x,
  "message": "client request params wrong"
}
```

- Fail: Server side reason. http.status: 50x

```json
{
  "code": 50x,
  "message": "server interal error"
}
```