(function(global){
	function Creator(elem){
		var tempEl = document.createElement(elem);
		return tempEl;
	}
	document.addEventListener('scroll',function(){
	if(window.pageYOffset > 300)
		document.getElementById("header").className = "change-bg";
	else{
		if(document.getElementsByClassName("change-bg")){
			document.getElementById("header").className = "";
		}
	}
})
function showTooltip(e) {
	var tipNow = true;
	if(e.target.nodeName === 'A' && e.target.className === 'plain-name'){
		var toolText = e.target.nodeName.href;
		var tipDiv = document.createElement('div');
		tipDiv.className = "name-tooltip";
		tipDiv.appendChild(document.createTextNode(toolText));
		
		e.target.parentNode.appendChild(tipDiv);
		e.target.addEventListener('mouseout',function(){
			if(tipNow){
			e.target.parentNode.removeChild(tipDiv);
			tipNow = false;
			}
		});
	}
	
}
function toggleFollow(e){
	var listClass = Array.from(e.target.classList);
	
	if(listClass.indexOf('fav-btn') !== -1){
		if(listClass.indexOf('following-user') !== -1){
			e.target.className = "fav-btn";
			e.target.innerHTML = "Follow"
		}
		else {
			e.target.className += " following-user";
			e.target.innerHTML = "Following";
		}
	
	}
}
function showDp(e) {
	if(e.target.parentNode.nodeName === 'A' && e.target.parentNode.className === 'tn-link'){
		var divi = Creator('div');
		var closeView = Creator('button');
		var profilePic = Creator('img');
		profilePic.src = e.target.parentNode.href;
		closeView.id = 'close-view';
		closeView.textContent = "X";
		closeView.className = "align-right "
		divi.appendChild(profilePic);
		divi.appendChild(closeView);
		divi.className = "light-box group";
		divi.id = "light-box";
		document.body.appendChild(divi);
		e.preventDefault();
	}
	

}
var validate = function(){
	var emailVal = document.loginForm.username.value;
	var passVal = document.loginForm.password.value;
	var atPos = emailVal.indexOf('@');
	var dotPos = emailVal.lastIndexOf('.');
	if(emailVal === ""){
		alert("Enter a valid email address");
		document.loginForm.username.focus();
		return false;
	}
	if(passVal === ""){
		alert("Enter password");
		document.loginForm.password.focus();
		return false;
	}
	if(emailVal.indexOf('@') === -1 || emailVal.indexOf('.') === -1 || emailVal.indexOf('@') === 0 || emailVal.indexOf('.') === 0 || (dotPos - atPos < 2)){
		alert("Invalid email address");
		document.loginForm.username.focus();
		return false;
	}
	return true;
};
document.addEventListener('click',toggleFollow,false);
document.addEventListener('click',function(e){
	if(e.target.nodeName === "BUTTON" && e.target.id === "close-view"){
	var closeView = document.getElementById('close-view');
	var hideDp = document.getElementById("light-box");
	document.body.removeChild(hideDp);
}});
document.addEventListener('click',showDp,false);
document.addEventListener('mouseover',showTooltip,false);
global.$validate = validate;

 })(window);
