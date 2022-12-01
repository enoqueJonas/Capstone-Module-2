const apiCall = async () => {
  const response = fetch('https://pokeapi.co/api/v2/pokemon')
    .then((response) => response.json())
    .catch((err) => err);
  return response;
};

export default apiCall;