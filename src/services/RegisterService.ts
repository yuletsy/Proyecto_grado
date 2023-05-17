import { HttpClient } from "./HttpClient";

export class RegisterService {
  private API_Consultorio;

  constructor(private http: HttpClient) {
    this.API_Consultorio = 'https://consultoriounac.azurewebsites.net';
  }

  async registerAuth(body: any) {
    const response = await this.http.post(
      `${this.API_Consultorio}/api/empresas/empPost`,
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
