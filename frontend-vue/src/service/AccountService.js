import axios from "axios";

const PRODUCT_API_URL =
  "https://webbalo2023.000webhostapp.com/Controllers/AccountController.php";

  class CategoriesController{

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
  }

export default new CategoriesController();