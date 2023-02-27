import axios from "axios";

const PRODUCT_API_URL =
  "https://webbalo2023.000webhostapp.com/Controllers/PagesController.php";

  class PagesService{

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

export default new PagesService();