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

    insertPages(blogName, content, image, createDate, author, published){
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

    deletePages(blogId){
      return axios.get(`${PRODUCT_API_URL}`, {
        params: {
            action: "deletePage",
            blogId: blogId,
        },
      });
    }
    updatePages(blogName, content, image, blogId, createDate, author,published){
      return axios.get(`${PRODUCT_API_URL}`, {
        params: {
            action: "updatePages",
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