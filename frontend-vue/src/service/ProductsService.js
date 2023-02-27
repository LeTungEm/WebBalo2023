import axios from "axios";

const PRODUCT_API_URL =
  "https://webbalo2023.000webhostapp.com/Controllers/ProductsController.php";

  class ProductsController{

    getAll(){
        return axios.get(`${PRODUCT_API_URL}`, {
            params: { action: "getAll" },
          });
    }

    getByID(id){
      return axios.get(`${PRODUCT_API_URL}`, {
          params: { 
            action: "getByID",
            productID: id,
          },
        });
    }

    getByCategoryID(catId){
      return axios.get(`${PRODUCT_API_URL}`, {
          params: { 
            action: "getByCategoryID",
            catId: catId,
          },
        });
    }
  }

  export default new ProductsController();
