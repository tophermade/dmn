#pragma strict

var url : String 			= "http://dontmakenuggets.tk";
var text : String 			= "I'm rocking it in Don't Make Nuggets for iOS and Android. You should too. ";

function ShareOnFacebook(){
	Application.OpenURL("http://www.facebook.com/sharer/sharer.php?u=" + url);
}

function ShareOnTwitter(){
	Application.OpenURL("https://twitter.com/intent/tweet?text=" + text + url);
}

function Start () {

}

function Update () {

}