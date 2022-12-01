const createGame = async () => {
    const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/', {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
    }
    ).then(resp => resp.json()).catch(err => err);
    return response;
}