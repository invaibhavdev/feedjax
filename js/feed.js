document.addEventListener('DOMContentLoaded',function(){
setTimeout(getData,3000);

function getData() { $ajaxUtils.sendGetRequest('./data/feedBase.json',function(ajax){
    var x = JSON.parse(ajax.responseText);
  for(var i = 0;i<x.main.length;i++){
        creator(x.main[i]);
      }

ticking = false;
  })}
var ticking = false;
  window.addEventListener('scroll', function(){
  if((window.scrollY + window.innerHeight) >= (document.body.scrollHeight-100)){
    if(!ticking){
      window.requestAnimationFrame(getData)
    }
    ticking = true;
  }
  })/*function(){
    if(!ticking){
      window.requestAnimationFrame(function({
        getData();
        ticking = true;
      }))}*/



  function creator(obj) {
    var feedBox = document.createElement('article');
    feedBox.className = "feed-box";
    var feedPoster = document.createElement('h1');
	
    var posterName = document.createElement('a');
	posterName.href = "#";
	posterName.className = "plain-name";
	var posterText = document.createTextNode(obj.name);
	posterName.appendChild(posterText);
	var tnPic = document.createElement('a');
	tnPic.className = "tn-link";
	tnPic.href = "images/avatar.png";
	var posterImg = document.createElement('img');
	posterImg.className = "user-avatar";
	posterImg.src = "images/avatar.png";
	tnPic.appendChild(posterImg)
	var addBtn = document.createElement("button");
	addBtn.className = "fav-btn";
	addBtn.id = "follow-btn-" + obj.id;
	var btnText = document.createTextNode("Follow");
	addBtn.appendChild(btnText);
    //Append text to heading
	feedPoster.className = "feed-head group"
	feedPoster.appendChild(tnPic);
    feedPoster.appendChild(posterName);
	feedPoster.appendChild(addBtn);
    //create a story
    var story = document.createTextNode("Hi I belong to "+obj.type+" family. I am " +obj.age+ " years old. I love "+obj.loves+" but I hate "+obj.hates)
    //create an element and append the story to it
    var feedStory = document.createElement('p');
    feedStory.className = "feed-story";
    feedStory.appendChild(story);
	
	
    //Now append elements to feedbox and then feedbox to feed holder
    feedBox.appendChild(feedPoster);
    feedBox.appendChild(feedStory);
    document.getElementById('feed-holder').appendChild(feedBox);
  }


});
