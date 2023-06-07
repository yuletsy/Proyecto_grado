import jwt_decode from "jwt-decode";

export const isLoginActive = ()=>{

  const token = localStorage.getItem("token");
  if (token) {
    try {
      const decodedToken:any = jwt_decode(token);

      if (decodedToken.exp * 1000 > Date.now()) {
        return true;
      } else {
        localStorage.removeItem('token');
        return false;
      }
    } catch (error) {
      localStorage.removeItem('token');
      return false;
    }
  } else {
    return false;
  }
}

export const logOut =(refresh:any)=>{
  refresh("/")
  return localStorage.removeItem('token');
}