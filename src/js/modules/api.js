const apiCall = async () => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    .then((response) => response.json()).then(data => data)
    .catch((err) => err);
  return response;
};

module.exports = apiCall;