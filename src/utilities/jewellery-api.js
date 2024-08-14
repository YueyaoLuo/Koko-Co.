import sendRequest from "./send-request";
const BASE_URL = '/api/jewellery';

// get all jewellery
export async function getAll() {
  return sendRequest(BASE_URL);
}

// get all jewellery of one specific category
export async function getCategoryProducts(categoryName){
  return sendRequest(`${BASE_URL}/${categoryName}`);
}

//get a category
export async function getCategoryName(categoryId){
  return sendRequest(`${BASE_URL}/${categoryId}`);
}

//get a specific jewellery
export async function getOneJewellery(categoryName, jewelleryId){
  return sendRequest(`${BASE_URL}/${categoryName}/${jewelleryId}`)
}