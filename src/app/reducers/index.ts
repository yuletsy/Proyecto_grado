import authReducer from "./AuthReducer";
import questionReducer from "./QuestionReducer";
import companyReducer from "./CompanyReducer";

const reducers = {
    auth: authReducer,
    question: questionReducer,
    company: companyReducer
}

export default reducers;