import axios from "axios";

const PRODUCT_API_URL =
  "https://webbalo.online/data/Controllers/AccountController.php";

class AccountService {
  getAll() {
    return axios.get(`${PRODUCT_API_URL}`, {
      params: { action: "getAll" },
    });
  }

  getByID(accountId) {
    return axios.get(`${PRODUCT_API_URL}`, {
      params: {
        action: "getByID",
        accountId: accountId,
      },
    });
  }

  checkLogin(email, password) {
    return axios.get(`${PRODUCT_API_URL}`, {
      params: {
        action: "checkLogin",
        email: email,
        password: password,
      },
    });
  }

  checkEmailExisted(email) {
    return axios.get(`${PRODUCT_API_URL}`, {
      params: {
        action: "checkEmailExisted",
        email: email,
      },
    });
  }

  registerAccount(firstName, lastName, email, passWord) {
    return axios.get(`${PRODUCT_API_URL}`, {
      params: {
        action: "insertAccount",
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: passWord,
        image: "",
        gender: 1,
        phone: "",
        address: "",
        Birthday: "2000-2-2",
        roleID: "2",
      },
    });
  }

  registerAccountFullInfo(firstName, lastName, email, passWord, image, gender, phone, address, Birthday, roleId) {
    return axios.get(`${PRODUCT_API_URL}`, {
      params: {
        action: "insertAccount",
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: passWord,
        image: image,
        gender: gender,
        phone: phone,
        address: address,
        Birthday: Birthday,
        roleID: roleId,
      },
    });
  }

  deleteAccount(accountId) {
    return axios.get(`${PRODUCT_API_URL}`, {
      params: {
        action: "deleteAccount",
        accountId: accountId,
      },
    });
  }

  updateAccount(firstName, lastName, email, passWord, image, gender, phone, address, Birthday, roleId, accountId) {
    return axios.get(`${PRODUCT_API_URL}`, {
      params: {
        action: "updateAccount",
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: passWord,
        image: image,
        gender: gender,
        phone: phone,
        address: address,
        Birthday: Birthday,
        roleID: roleId,
        accountId: accountId,
      },
    });
  }
}
// https://webbalo.online/data/Controllers/AccountController.php?action=insertAccount&first_name=test&last_name=testLast&email=&password=&image=&gender=2&phone=&address=
export default new AccountService();
