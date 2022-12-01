export const postLikes = async (id) => {
  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/9j4T0EvloyUNWKzzonxh/likes/', {
    method: 'POST',
    body: JSON.stringify({ item_id: id }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  return response;
};

export const getLikes = async () => {
  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/9j4T0EvloyUNWKzzonxh/likes/');
  const data = await response.json();
  return data;
};