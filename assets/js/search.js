function searchPages() {
    const query = document.getElementById("searchBar").value.toLowerCase();
    const pages = [
        { name: "Home", url: "index.html" },
        { name: "About", url: "about.html" },
        { name: "Features", url: "features.html" },
        { name: "How to Use", url: "how-to-use.html" },
        { name: "FAQ", url: "faq.html" },
        { name: "Contact", url: "contact.html" }
    ].filter(page => page.name.toLowerCase().includes(query));

    document.getElementById("searchBar").value = pages.length ? pages[0].name : "";
}
