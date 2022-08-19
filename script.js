const topicDropdown = document.querySelector("#topicButton");
const sendRequestButton = document.querySelector("#sendRequestButton");
const sendRequest = function(){
    alert("Request Sent!");
}
sendRequestButton.addEventListener('click', sendRequest);
const changeTopic = function(e){
    topicDropdown.innerText = e.target.innerText;
}
const topics = document.querySelectorAll(".dropdownTopic");
for(topic of topics){
    topic.addEventListener("click", changeTopic);
}

const summerCards = document.querySelectorAll("#welcomeSummer .card");
for(card of summerCards){
    const tag = document.createElement("div");
    tag.setAttribute("class", "badge badge-danger tagPlacer");
    tag.innerText= "HOT";
    card.append(tag);
    
}

const deleteCards = function(){
    const allCards = document.querySelectorAll(".card");
    for(card of allCards){
        card.remove()
    }
}
const deleteButton = document.querySelector("#cardDeleter");
deleteButton.onclick = function(){ deleteCards()};
