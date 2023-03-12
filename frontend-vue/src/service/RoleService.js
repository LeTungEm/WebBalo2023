import axios from "axios";

const PRODUCT_API_URL =
  "https://webbalo2023.000webhostapp.com/Controllers/RolesController.php";

  class RolesService{

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

export default new RolesService();