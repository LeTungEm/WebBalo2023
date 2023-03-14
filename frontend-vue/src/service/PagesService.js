import axios from "axios";

const PRODUCT_API_URL =
  "https://webbalo2023.000webhostapp.com/Controllers/PagesController.php";

  class PagesService{

    getAll(){
        return axios.get(`${PRODUCT_API_URL}`, {
            params: { action: "getAll" },
          });
    }

    getByID(blogId){
        return axios.get(`${PRODUCT_API_URL}`, {
            params: {
                action: "getByID",
                blogId: blogId,
            },
          });
    }

    insertPage(blogName, content, image, createDate, author, published){
      return axios.get(`${PRODUCT_API_URL}`, {
        params: {
            action: "insertPage",
            blogName: blogName,
            content: content,
            image: image,
            createDate: createDate,
            author: author, 
            published: published
        },
      });
    }

    deletePage(blogId){
      return axios.get(`${PRODUCT_API_URL}`, {
        params: {
            action: "deletePage",
            blogId: blogId,
        },
      });
    }
  }

export default new PagesService();