import axios from 'axios';

const apiUrl = import.meta.env.VITE_API_URL;

export async function getItems() {
  try {
    const response = await axios.get(`${apiUrl}/items`);
    return response.data;
  } catch (error) {
    console.error("Erro", error);
    return [];
  }
}
