import axios from "axios";
import { backend_url } from "../config";

export async function deleteContent(title: string, link: string) {
  console.log("delete function call")
  return axios.delete(`${backend_url}/content/delete/`, {
    params: { title, link },
    headers: {
      "authorization": localStorage.getItem("authorization"),
    },
  });
}
