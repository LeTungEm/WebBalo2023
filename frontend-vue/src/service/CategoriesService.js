import axios from "axios";

const PRODUCT_API_URL =
  "https://webbalo2023.000webhostapp.com/Controllers/CategoriesController.php";

  class CategoriesController{

    getAll(){
        return axios.get(`${PRODUCT_API_URL}`, {
            params: { action: "getAll" },
          });
    }

    getByID(catID){
        return axios.get(`${PRODUCT_API_URL}`, {
            params: {
                action: "getByID",
                catID: catID,
            },
          });
    }
  }

export default new CategoriesController();