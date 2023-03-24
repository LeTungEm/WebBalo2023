import axios from "axios";

const PRODUCT_API_URL =
  "https://data.webbalo.online/Controllers/ContactController.php";

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

    insertContact(contactName, email, author){
      return axios.get(`${PRODUCT_API_URL}`, {
        params: {
            action: "insertContact",
            contactName: contactName,
            email: email,
            author: author,
        },
      });
    }

    deleteContact(contactId){
      return axios.get(`${PRODUCT_API_URL}`, {
        params: {
            action: "deleteContact",
            contactId: contactId,
        },
      });
    }
  }

export default new ContactService();