function sayJoke(apiUrl, jokeId){
    // use mocked `fetch(url)`

    let promise = fetch(apiUrl)

    promise
        .then( result => console.log(result.data))
        .then( error => console.log(error.data))
}