const request = (options) => {
    const headers = new Headers({
        'Content-Type': 'application/json',
    })

    const defaults = {headers: headers};
    options = Object.assign({}, defaults, options);

    return fetch(options.url, options)
        .then(response =>
            response.json().then(json => {
                if(!response.ok) {
                    return Promise.reject(json);
                }
                return json;
            })
        );
};

export function getData(){
    console.log('altceva');
    return request({
        url: 'https://api.jsonbin.io/b/5c9cabce7dad4063ba917d2b/2',
        method: 'GET'
    });
}