import axios from "axios";
import { api_base_url } from "../constant/config";

class ServicesServis {
  getServices() {
    return axios.get(api_base_url);
  }

  getService(id) {
    return axios.get(api_base_url + "api/" + id);
  }

  postService(data) {
    return axios.post(api_base_url, data);
  }
}

export default new ServicesServis();
