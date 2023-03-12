import axios from "axios";

const PRODUCT_API_URL =
  "https://webbalo2023.000webhostapp.com/Controllers/uploadImage.php";

  class UploadImageService{

    uploadImage(formData){
        return axios.post(`${PRODUCT_API_URL}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )
    }
  }

export default new UploadImageService();