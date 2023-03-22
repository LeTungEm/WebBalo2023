import axios from "axios";

const PRODUCT_API_URL =
  "https://webbalo2023.000webhostapp.com/Controllers/AboutController.php";

  class AboutService{

    getAll(){
        return axios.get(`${PRODUCT_API_URL}`, {
            params: { action: "getAll" },
          });
    }

    getByID(aboutId){
        return axios.get(`${PRODUCT_API_URL}`, {
            params: {
                action: "getByID",
                aboutId: aboutId,
            },
          });
    }

    insertAbout(title, image, description){
      return axios.get(`${PRODUCT_API_URL}`, {
        params: {
            action: "insertAbout",
            title: title,
            image: image,
            description: description,
        },
      });
    }

    deleteAbout(aboutId){
      return axios.get(`${PRODUCT_API_URL}`, {
        params: {
            action: "deleteAbout",
            aboutId: aboutId,
        },
      });
    }

    updateAbout(title, image, description, aboutId){
      return axios.get(`${PRODUCT_API_URL}`, {
        params: {
            action: "updateAbout",
            aboutId: aboutId,
            title: title,
            image: image,
            description: description,
        },
      });
    }
  }

export default new AboutService();