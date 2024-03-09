const https = require('https');

const client_id = '';
const client_secret = '';
const track_id = 'Ella';

async function getAccessToken() {
    const endpoint = 'https://accounts.spotify.com/api/token';
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'grant_type=client_credentials&client_id=${client_id}&client_secret=${client_secret}'
    };
    const response = await fetch(endpoint_spotify, requestOptions);
    return response.json().then(data => data.access_token);
}

async function getTrackInfo(track_id, access_token) {
    const endpoint_search_spotify = `https://api.spotify.com/v1/search?q=${track_id}&type=track&limit=1`;
    const requestOptions = {
        headers: {
            'Authorization': `Bearer ${access_token}`
        }
    };

    const response = await fetch(endpoint_search_spotify, requestOptions);
    return response.json();
}

const server = https.createServer(
    async function(req, res){
        const access_token = await getAccessToken();
        const trackInfo = await getTrackInfo(track_id, access_token);
        res.write(JSON.stringify(trackInfo, null, 2));
        console.log(trackInfo);
        res.end();
    }
);
server.listen(3000, '127.0.0.1',function(){
    console.log('servidor escuchando')

});