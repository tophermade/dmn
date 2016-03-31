#pragma strict

//GameObject / AudioClip / Transform
var focusObject			: GameObject;

// boolean
var initial 			: Vector3;
var heightLimit 		: float 		= 3;

// float / int
var damp 				: float 		= .1;
var velocity		 	: Vector3		= Vector3.zero;

var playing 			: boolean 		= false;


// String


//StandardFunction

function BeginRound(){
	playing = true;
}


function FinishRound(){
	playing = false;
}

function Awake(){
	initial = transform.position;
}


function Update(){
	if(playing){
		transform.position = Vector3(focusObject.transform.position.x+initial.x, focusObject.transform.position.y + initial.y-1.4, focusObject.transform.position.z + initial.z);
		if(transform.position.y > heightLimit){
			transform.position.y = heightLimit;
		}
	}
}


function FixedUpdate(){

}