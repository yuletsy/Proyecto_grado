export class HttpClient {

    async get(url: string, headers: any) {
      const requestOptions = {
        headers: headers.headers,
      };
      return fetch(url, requestOptions);
    }
  
    async post(url: string, headers: any, body: any) {
      const requestOptions = {
        method: "POST",
        headers: headers.headers,
        body: JSON.stringify(body.body),
      };
      return fetch(url, requestOptions);
    }
    
  
  }