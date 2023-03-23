import axios from "axios";

const PRODUCT_API_URL =
  "https://webbalo2023.000webhostapp.com/Controllers/RolesController.php";

  class RolesService{

    getAll(){
        return axios.get(`${PRODUCT_API_URL}`, {
            params: { action: "getAll" },
          });
    }

    getByID(roleID){
        return axios.get(`${PRODUCT_API_URL}`, {
            params: {
                action: "getByID",
                roleID: roleID,
            },
          });
    }
    insertRole(roleName){
      return axios.get(`${PRODUCT_API_URL}`, {
        params: {
            action: "insertRole",
            roleName: roleName
        },
      });
    }

    deleteRole(roleID){
      return axios.get(`${PRODUCT_API_URL}`, {
        params: {
            action: "deleteRole",
            roleID: roleID,
        },
      });
    }
    updateRole(roleName, roleID){
      return axios.get(`${PRODUCT_API_URL}`, {
        params: {
            action: "updateRole",
            roleID: roleID,
            roleName: roleName
          
        },
      });
    }

  }

export default new RolesService();