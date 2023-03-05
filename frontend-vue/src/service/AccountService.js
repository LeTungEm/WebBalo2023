import axios from "axios";

const PRODUCT_API_URL =
  "https://webbalo2023.000webhostapp.com/Controllers/AccountController.php";

  class AccountService{

    getAll(){
        return axios.get(`${PRODUCT_API_URL}`, {
            params: { action: "getAll" },
          });
    }

    getByID(accountId){
        return axios.get(`${PRODUCT_API_URL}`, {
            params: {
                action: "getByID",
                accountId: accountId,
            },
          });
    }

    checkLogin(email, password){
      return axios.get(`${PRODUCT_API_URL}`, {
        params: {
          action: "checkLogin",
          email: email,
          password: password,
      },
        });
  }
  }

export default new AccountService();