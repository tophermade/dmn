#pragma strict

var manager 			: GameObject;
var body 				: Rigidbody2D;
var exploder 			: GameObject;

var playing 			: boolean 		= true;
var canJump 			: boolean 		= false;

var initialPosition 	: Vector3;
var jumpPower 			: float 		= 7;
var lastPressStart 		: float 		= 0;



function Jump(){
	body.velocity.y = jumpPower;
}


function BeginRound(){
	transform.position = initialPosition;
	gameObject.GetComponent(SpriteRenderer).enabled = true;

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
	FinishRound();
	gameObject.GetComponent(SpriteRenderer).enabled = false;
	var explosion = Instantiate(exploder, transform.position, Quaternion.identity);
	manager.SendMessage("EndRound");
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
		manager.SendMessage("PlayHit");
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
	// if(playing){
	// 	if(Input.GetMouseButtonDown(0)){
	// 		Jump();
	// 	}
	// }

	if(playing){

		// if(Input.GetMouseButton(0)){
		// 	canJump = true;	
		// } else {
		// 	canJump = false;
		// }

		
	}
	if(Input.GetMouseButtonDown(0)){
		lastPressStart = Time.time;
		canJump = true;
		if(playing){
			manager.SendMessage("PlayJump");
		}
	}

	if(Input.GetMouseButtonUp(0)){
		lastPressStart = 0;
		canJump = false;
	}

}

function FixedUpdate(){
	if(playing){
		if(lastPressStart +.45 > Time.time && canJump){
			GetComponent(Rigidbody2D).velocity.y = jumpPower;		
		} else {
			canJump = false;
		}
	}
}