import axios from "axios";

const PRODUCT_API_URL =
  "https://webbalo.online/data/Controllers/CategoriesController.php";

  class CategoriesService{

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

export default new CategoriesService();