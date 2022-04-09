const api_url = 'https://speech.zeit.de/api/feeds/playlist/neue-nachrichten-test'
async function getAudio(){
    const response = await fetch(api_url);
    const data = await response.json();
    console.log(data);
}

getAudio();