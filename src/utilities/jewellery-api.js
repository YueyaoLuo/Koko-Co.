import sendRequest from "./send-request";
const BASE_URL = '/api/jewellery';

export async function getAll() {
  return sendRequest(BASE_URL);
}

export async function getCategoryProducts(categoryName){
  return sendRequest(`${BASE_URL}/${categoryName}`);
}