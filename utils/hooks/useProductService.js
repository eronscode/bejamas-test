import api from "../api";

async function fetchProducts(setLoading, setError, setData) {
  setLoading(true);
  try {
    const response = await api.get("/api/products");
    setData(response);
    console.log(response);
  } catch (error) {
    console.log(error);
    setError(true);
  }
  setLoading(false);
}

export default {
  fetchProducts,
};
