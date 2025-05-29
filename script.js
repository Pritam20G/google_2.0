function search(event) {
    event.preventDefault();
    
    const query = document.getElementById('searchInput').value;
    const engine = document.getElementById('searchEngine').value;
    let url = '';

    if (query == null || query === "") {
        alert("Enter something!");
        return; // Prevent further execution if the query is empty
    }

    switch (engine) {
        case 'google':
            url = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
            break;
        case 'Youtube':
            url = `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;
            break;
        case 'Hianime':
            url = `https://hianime.sx/search?keyword=${encodeURIComponent(query)}`;
            break;
        case 'bing':
            url = `https://www.bing.com/search?q=${encodeURIComponent(query)}`;
            break;
        case 'yahoo':
            url = `https://search.yahoo.com/search?p=${encodeURIComponent(query)}`;
            break;
        case 'duckduckgo':
            url = `https://duckduckgo.com/?q=${encodeURIComponent(query)}`;
            break;
        case 'yandex':
            url = `https://yandex.com/search/?text=${encodeURIComponent(query)}`;
            break;
        case 'AI':
            url = `https://copilot.microsoft.com/?form=CPUBG1&showconv=1&sendquery=1&q=${encodeURIComponent(query)}`;
            break;
        case 'ChatAI':
            url = `https://chat.openai.com/chat?input=${encodeURIComponent(query)}`;
            break;

        case 'Direct':  
            url = "https://" + query; 
            break;
        default:
            alert("Please select a valid search engine.");
            return; // Exit if no valid engine is selected
    }

    window.open(url, '_blank'); // Open the URL in a new blank window/tab
}
