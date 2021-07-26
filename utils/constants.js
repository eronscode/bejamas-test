export const ITEMS_PER_PAGE = 6
//export const BASE_URL = 'http://localhost:3000'
export const BASE_URL = process.env.NODE_ENV === "production" ? "https://poc-ecommerce-test.herokuapp.com" : "http://localhost:3000";
