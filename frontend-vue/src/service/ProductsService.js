import axios from "axios";

const PRODUCT_API_URL =
  "https://webbalo2023.000webhostapp.com/Controllers/ProductsController.php";

class ProductsService {

  getAll() {
    return axios.get(`${PRODUCT_API_URL}`, {
      params: { action: "getAll" },
    });
  }

  getByID(id) {
    return axios.get(`${PRODUCT_API_URL}`, {
      params: {
        action: "getByID",
        productID: id,
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
}

export default new ProductsService();
