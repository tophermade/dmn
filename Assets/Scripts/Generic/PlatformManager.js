#pragma strict


var hideOnAndroid 		: GameObject[];
var hideOnIOS 			: GameObject[];
var hideOnWeb 			: GameObject[];
var hideOnDesktop 		: GameObject[];


function Awake(){
	var hideThese : GameObject[];
	
	#if UNITY_ANDROID
		hideThese = hideOnAndroid;
	#endif
	
	#if UNITY_IPHONE
		hideThese = hideOnIOS;
	#endif
	
	#if UNITY_WEBGL
		hideThese = hideOnWeb;
	#endif
	
	#if UNITY_STANDALONE_WIN
		hideThese = hideOnDesktop;
	#endif

	for (var i = 0; i < hideThese.length; i++) {
		hideThese[i].SetActive(false);
	}
}


function Start () {

}

function Update () {

}