import apiCall from './api.js';
const getAllItemsCount = async () => {
  const allItems = await apiCall();
  return allItems.results.length;
};
export default getAllItemsCount;
