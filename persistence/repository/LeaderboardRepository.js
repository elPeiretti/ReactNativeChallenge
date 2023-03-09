const checkResponseStatus = (response) => {
    if (response.ok){
        return response;
    }
    throw new Error(response.statusText);
}

export async function getEasyLeaderboard() {
    var top10 = fetch('http://127.0.0.1:8000/ranking/easy/')
        .then(checkResponseStatus)
        .catch(err => console.log('request failed', err))
        .then(r => {return r.json()});
        return top10;
}