const urlInput = new URLSearchParams(window.location.search);
const urlIdData = [
    {
        "id": "Cnr86tLMyW84bE3O0a",
        "url": "https://google.com"
    }
]
if ((urlInput.get("url")) && (urlInput.get("url") != "")) {
    window.location.replace(urlInput.get("url"));
} else if ((urlInput.get("id")) && (urlInput.get("id") != "")) {
    for (let i = 0; i < urlIdData.length; i = i + 1) {
        if (urlInput.get("id") == urlIdData[i].id) {
            window.location.replace(urlIdData[i].url)
        }
    }
}