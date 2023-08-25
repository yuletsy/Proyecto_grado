import { AuthState } from "./AuthState"
import { QuestionState } from "./QuestionState"
import { CompanyState} from "./CompanyState"

export interface AplicationState{
    auth: AuthState,
    question:QuestionState,
    company:CompanyState
}