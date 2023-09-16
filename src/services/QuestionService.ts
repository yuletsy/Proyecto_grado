import { HttpClient } from "./HttpClient";

export class QuestionService {
    private API_Consultorio;
    
    constructor(private http: HttpClient) {
        
        this.API_Consultorio = 'https://consultoriounac.azurewebsites.net';
    }
    
    async getQuestionList (){
        const response = await this.http.get(
            `${this.API_Consultorio}/api/preguntas/prgList`,
            {
                headers: {
                    Accept: "aplication/json","Content-Type": "application/json",
                    auth : localStorage.getItem("token"), 
                },
                
            },
            
        );
        return response.json();
    }
      
    async saveQuestionList (body:any, token:any){
        const response = await this.http.post(
            `${this.API_Consultorio}/api/calificacion/calPost`,
            {
              headers: {
                Accept: "aplication/json",
                "Content-Type": "application/json",
                auth: token
              },
            },
            { body: body }
          );
          return response.json();
    }
    async resultCalification() {
        const response = await this.http.get(
          `${this.API_Consultorio}/api/calificacion/calGet/1`,
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