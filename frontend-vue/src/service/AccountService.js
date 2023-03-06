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

    checkEmailExisted(email){
      return axios.get(`${PRODUCT_API_URL}`, {
        params: {
          action: "checkEmailExisted",
          email: email,
      },
        });
    }

    registerAccount(firstName, lastName, email, passWord){
      return axios.get(`${PRODUCT_API_URL}`, {
        params: {
          action: "insertAccount",
          first_name: firstName,
          last_name: lastName,
          email: email,
          password: passWord,
          image: '',
          gender: 1,
          phone: '',
          address: '', 
      },
        });
    }
  }
// https://webbalo2023.000webhostapp.com/Controllers/AccountController.php?action=insertAccount&first_name=test&last_name=testLast&email=&password=&image=&gender=2&phone=&address=
export default new AccountService();