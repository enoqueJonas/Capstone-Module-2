const baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';
//const gameID = 'tys9LI3zLoPh9SclNQrX';
const gameID = process.env.API_KEY
export const postLikes = async (id) => {
  const response = await fetch(`${baseUrl}apps/${gameID}/likes/`, {
    method: 'POST',
    body: JSON.stringify({ item_id: id }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  return response;
};

export const getLikes = async () => {
  const response = await fetch(`${baseUrl}apps/${gameID}/likes/`);
  const data = await response.json();
  return data;
};