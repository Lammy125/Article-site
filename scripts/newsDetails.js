let urlString = window.location.href;
let url = new URL(urlString);
let nameFlag = document.getElementById("name");
let commentValue = document.getElementById("commentValue");
let sendComment = document.getElementById("sendComment");
let commentHeader = document.getElementById("commentHeader");
let form = document.getElementById("form");
let editFlag = false;
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

const getComment = async () => {

  if (!editFlag) {
    commentHeader.innerHTML = "Add comment";
    nameFlag.value = "";
    commentValue = "";
    sendComment.innerHTML = "Comment";
    commentID = "";
  }

  try{
    const res = await fetch(`${baseUrl}/news/${id}/comments`);
    const comments = await res.json();
    displayNewsComment(comments);
  }catch (error){
    console.log(error);
    alert(error);
  }

}

const displayNewsComment = (comments) => {
  let commentList = document.getElementById("comment-list");
  let addComments = document.getElementById("addComments");
  removeAllChildNodes(addComments);

  comments.map((cm, index) => {
    var aside = document.createElement("aside");
    var commentAvatar = document.createElement("img");
    var article = document.createElement("article");
    var commentTitle = document.createElement("h4");
    var commentText = document.createElement("p");

    commentAvatar.width = "70";

    aside.appendChild(commentAvatar);
    article.appendChild(commentTitle);
    article.appendChild(commentText);
    aside.appendChild(article);
    comments.appendChild(aside);
  });
};


window.onload = getSingleNews(getId());