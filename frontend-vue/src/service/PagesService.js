import axios from "axios";

const PRODUCT_API_URL =
  "https://data.webbalo.online/Controllers/PagesController.php";

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
    updatePage(blogName, content, image, createDate, author, published, blogId){
      return axios.get(`${PRODUCT_API_URL}`, {
        params: {
            action: "updatePage",
            blogId: blogId,
            content: content,
            image: image,
            blogName: blogName,
            createDate: createDate,
            author: author,
            published: published,
        },
      });
    }



  }

export default new PagesService();