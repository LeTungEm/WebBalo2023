import axios from "axios";

const PRODUCT_API_URL =
  "https://webbalo2023.000webhostapp.com/Controllers/ContactController.php";

  class ContactService{

    getAll(){
        return axios.get(`${PRODUCT_API_URL}`, {
            params: { action: "getAll" },
          });
    }

    getByID(contactId){
        return axios.get(`${PRODUCT_API_URL}`, {
            params: {
                action: "getByID",
                contactId: contactId,
            },
          });
    }
  }

export default new ContactService();