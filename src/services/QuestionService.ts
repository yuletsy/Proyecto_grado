import { HttpClient } from "./HttpClient";

export class QuestionService {
    private API_Consultorio;
    
    constructor(private http: HttpClient) {
        
        this.API_Consultorio = 'https://consultoriounac.azurewebsites.net';
    }
    
    async QuestionAuth (){
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
    
}