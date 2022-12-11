const baseUrl = "https://61924d4daeab5c0017105f1a.mockapi.io/credo/v1";

const createForm = document.getElementById("createForm");
const author = document.getElementById("author");
const newsTitle = document.getElementById("newsTitle");
const newsUrl = document.getElementById("newsUrl");
const avatarLink = document.getElementById("avatarLink");

const submitNews = async () => {
    let body = {
        author: author.value.trim(),
        title: newsTitle.value.trim(),
        url: newsUrl.value.trim(),
        avatar: avatarLink.value.trim()
    };
    try {
        let response = await fetch(`${baseUrl}/news`, {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json"
            }
        });

        let jsonRes = await response.json();
        console.log(jsonRes);
        alert("News created successfully");
        window.location.replace("/");
    } catch (error) {
        alert(error);
    }
};

createForm.addEventListener("submit", function(e) {
    e.preventDefault();
    submitNews();
})