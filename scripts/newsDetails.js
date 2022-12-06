let urlString = window.location.href;
let url = new URL(urlString);
const baseUrl = "https://61924d4daeab5c0017105f1a.mockapi.io/credo/v1";

const getId = () => {
    return url.searchParams.get("id");
};

const getSingleNews = async (id) => {

    try{
      const response = await fetch(`${baseUrl}/news/${id}`);
      const newsData = await response.json();
      displayNewsDetails(newsData);
    }catch (error){
      console.log(error);
      alert(error);
    }
  
};

const displayNewsDetails = (data) => {
    let title = document.getElementById("title");
    let url = document.getElementById("url");
    let author = document.getElementById("author");

    title.innerText = data.title;
    author.innerText = `Published by ${data.author}`;
    url.innerText = data.url;
  };

window.onload = getSingleNews(getId());