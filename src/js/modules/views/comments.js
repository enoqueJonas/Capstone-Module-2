const getComments = async (event) => {
  const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/rGByQlRjNLg78HbvXRhV/comments?item_id=${event.target.id}`, {
    method: 'GET',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
  }).then((response) => response.json()).catch((err) => err);
  return response;
};

const getCommentsWithName = async (pokname) => {
  const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/rGByQlRjNLg78HbvXRhV/comments?item_id=${pokname}`, {
    method: 'GET',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
  }).then((response) => response.json()).catch((err) => err);
  return response;
};

export { getComments, getCommentsWithName };