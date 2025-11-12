let urlInput = new URLSearchParams(window.location.search);
if ((urlInput.get("url")) && (urlInput.get("url") != "")) {
    window.location.replace(urlInput.get("url"));
}