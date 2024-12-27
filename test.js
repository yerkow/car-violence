
function watch() {
    // Function to get the scroll position from query parameters
    function getScrollPositionFromQuery() {
        const params = new URLSearchParams(window.location.search);
        const scroll = params.get("scroll"); // Look for the `scroll` parameter
        return scroll ? parseInt(scroll, 10) : 0; // Default to 0 if not found
    }
    const scroll = getScrollPositionFromQuery();
    console.log(scroll, "LOADED")
    window.scrollTo(0, scroll);
};
watch()

