function search() {
    const searchBar = document.getElementById("searchBar");
    const searchBarValue = searchBar.value.trim(); // Trim leading/trailing spaces

    // Check if searchBarValue starts with a URL-like syntax (including protocol-less domains)
    if (isURL(searchBarValue)) {
        window.location.href = addProtocol(searchBarValue.replace(" ", "+")); // Redirect with added protocol
    } else {
        // Not a URL, perform Google search
        search(searchBarValue);
    };

    if (searchBarValue === "" || " ") {
        console.log("Please search for a phrase or type an URL.");
        return; // Exit the function if searchBarValue is empty
    };

    if (searchBarValue.toLowerCase() === "see code") {
        go("github.com/devsujay19/google-search-clone", "blank");
        setTimeout(go("gscapp.vercel.app", "self"), 0);
        return; // Exit the function after redirect
    };

    // Search functionality
    function search(query) {
        window.open("https://www.google.com/search?q=" + query + "&&client=GoogleSearchClone&&utm_source=GoogleSearchClone", "_self");
    };
};

// Function to check if the string is a URL-like syntax (including protocol-less domains)
function isURL(str) {
    const urlRegex = /^(?:(http|https):\/\/)?(?:[\w-]+\.)+[a-zA-Z]{2,}$/;
    return urlRegex.test(str);
};

// Function to add "https://" protocol if missing
function addProtocol(url) {
    if (!/^(http|https):\/\//.test(url)) {
        return "https://" + url; // Add https:// if not present
    };
    return url; // Return the url as-is if already has protocol
};

function go(url, mode) {
    window.open("https://" + url, "_" + mode);
};