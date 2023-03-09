import axios from "axios";

const PRODUCT_API_URL =
  "https://webbalo2023.000webhostapp.com/Controllers/RolesController.php";

  class AdminService{

    getAll(){
        return axios.get(`${PRODUCT_API_URL}`, {
            params: { action: "getAll" },
          });
    }

    getByID(adminId){
        return axios.get(`${PRODUCT_API_URL}`, {
            params: {
                action: "getByID",
                adminId: adminId,
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

    registerAdmin(email, passWord){
      return axios.get(`${PRODUCT_API_URL}`, {
        params: {
          action: "insertAdmin",
          email: email,
          password: passWord,
      },
        });
    }
  }
// https://webbalo2023.000webhostapp.com/Controllers/AccountController.php?action=insertAccount&first_name=test&last_name=testLast&email=&password=&image=&gender=2&phone=&address=
export default new AdminService();