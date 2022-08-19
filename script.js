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


