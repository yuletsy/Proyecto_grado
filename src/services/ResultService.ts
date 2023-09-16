import { HttpClient } from "./HttpClient";

export class ResultService {
  private API_Consultorio;

  constructor(private http: HttpClient) {
    // this.API_Consultorio = 'http://192.168.51.107:3030';
    this.API_Consultorio = "https://consultoriounac.azurewebsites.net";
  }

  async resultAuth() {
    const response = await this.http.get(
      `${this.API_Consultorio}/api/actividades/actList`,
      {
        headers: {
          Accept: "aplication/json", "Content-Type": "application/json",
          auth : localStorage.getItem("token"), 
        },
      },
    );
    return response.json();
  }
 
}
