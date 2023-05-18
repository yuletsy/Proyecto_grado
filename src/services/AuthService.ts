import { HttpClient } from "./HttpClient";

export class AuthService {
  private API_Consultorio;

  constructor(private http: HttpClient) {
    this.API_Consultorio = 'https://consultoriounac.azurewebsites.net';
  }

  async loginAuth(body: any) {
    const response = await this.http.post(
      `${this.API_Consultorio}/api/auth`,
      {
        headers: {
          Accept: "aplication/json",
          "Content-Type": "application/json",
        },
      },
      { body: body }
    );
    return response.json();
  }
  
}
