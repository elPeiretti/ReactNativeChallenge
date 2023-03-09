const checkResponseStatus = (response) => {
    if (response.ok){
        return response;
    }
    throw new Error(response.statusText);
}

const getEasyLeaderboard = async () => {
    var top10 = fetch('127.0.0.1:8000/ranking/easy/')
        .then(checkResponseStatus)
        .then(data => JSON.parse(data))
        .catch(err => console.log('request failed', err));

        return top10;
}