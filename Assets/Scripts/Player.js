#pragma strict

var manager 			: GameObject;
var body 				: Rigidbody2D;

var playing 			: boolean 		= true;

var initialPosition 	: Vector3;
var jumpPower 			: float 		= 7;



function Jump(){
	body.velocity.y = jumpPower;
}


function BeginRound(){
	transform.position = initialPosition;

	yield WaitForSeconds(.25);
	body.isKinematic = false;
	playing = true;
}


function FinishRound(){	
	body.isKinematic = true;
	playing = false;
}


function GetPoint(){
	manager.SendMessage("AddPoint");
}


function HitBlock(){
	print("obstacle");
}


function OnTriggerEnter2D(other: Collider2D){
	var tag = other.transform.gameObject.tag;
	print(tag);

	if(tag == "Tracker"){
		other.gameObject.SendMessage("Disable");
		GetPoint();
	}
}


function OnCollisionEnter2D(other: Collision2D){
	var tag = other.transform.gameObject.tag;

	if(tag == "Obstacle"){
		HitBlock();
	}
}


function Awake(){
	manager = GameObject.Find("Manager");
}


function Start () {
	initialPosition = transform.position;
	body = GetComponent(Rigidbody2D);
}


function Update () {
	if(playing){
		if(Input.GetMouseButtonDown(0)){
			Jump();
		}
	}
}