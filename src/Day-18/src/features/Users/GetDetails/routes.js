import { getRequest } from "../../../services/network";

export const getUserDetails = async (id) => {
  const URL = `https://jsonplaceholder.typicode.com/users/${id}`;
  const response = getRequest(URL);
  return response === null ? {} : response;
};
