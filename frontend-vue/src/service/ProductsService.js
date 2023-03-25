import axios from "axios";

const PRODUCT_API_URL =
  "https://webbalo.online/data/Controllers/ProductsController.php";

class ProductsService {

  getAll() {
    return axios.get(`${PRODUCT_API_URL}`, {
      params: { action: "getAll" },
    });
  }

  getByID(productID) {
    return axios.get(`${PRODUCT_API_URL}`, {
      params: {
        action: "getByID",
        productID: productID,
      },
    });
  }

  getByCategoryID(catId) {
    return axios.get(`${PRODUCT_API_URL}`, {
      params: {
        action: "getByCategoryID",
        catId: catId,
      },
    });
  }

  insertProduct(productName, description, createDate, price, shortDescription, image_1, image_2, image_3, image_4, amount, dateChange, catId) {
    return axios.get(`${PRODUCT_API_URL}`, {
      params: {
        action: "insertProduct",
        productName: productName,
        description: description,
        createDate: createDate,
        price: price,
        shortDescription: shortDescription,
        image_1: image_1,
        image_2: image_2,
        image_3: image_3,
        image_4: image_4,
        amount: amount,
        dateChange: dateChange,
        catId: catId,
      },
    });
  }

  deleteProduct(productID) {
    return axios.get(`${PRODUCT_API_URL}`, {
      params: {
        action: "deleteProduct",
        productID: productID,
      },
    });
  }

  updateProduct(productName, description, createDate, price, shortDescription, image_1, image_2, image_3, image_4, amount, dateChange, catId, productID) {
    return axios.get(`${PRODUCT_API_URL}`, {
      params: {
        action: "updateProduct",
        productID: productID,
        productName: productName,
        description: description,
        createDate: createDate,
        price: price,
        shortDescription: shortDescription,
        image_1: image_1,
        image_2: image_2,
        image_3: image_3,
        image_4: image_4,
        amount: amount,
        dateChange: dateChange,
        catId: catId,
      },
    });
  }
}

export default new ProductsService();
