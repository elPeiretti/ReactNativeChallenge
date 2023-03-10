const checkResponseStatus = (response) => {
    if (response.ok){
        return response;
    }
    throw new Error(response.statusText);
}

export async function getLeaderboard(difficulty) {

    const objToArray = (obj) => {
        //ok this works
        var i=1;
        return Object.keys(obj).map((key) => {return {pos: i++, name: key, score: Object.keys(obj[key]).map(s => obj[key][s])[0]}});
    }

    var top10 = fetch('http://127.0.0.1:8000/ranking/'+difficulty+'/')
        .then(checkResponseStatus)
        .catch(err => console.log('request failed', err))
        .then(r => {return r.json()})
        .then(objToArray);
        return top10;
}

export async function uploadScore(difficulty, name, score) {
    fetch('http://127.0.0.1:8000/ranking/'+name+"?difficulty="+difficulty+"&score="+score,
    {method: 'POST', headers: {"accept": "application/json"}})
        .then(checkResponseStatus)
        .catch(err => console.log('request failed', err));
}