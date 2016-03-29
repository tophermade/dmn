#pragma strict

var body 				: Rigidbody2D;

var playing 			: boolean 		= true;

var jumpPower 			: float 		= 7;


function Jump(){
	body.velocity.y = jumpPower;
}


function Start () {
	body = GetComponent(Rigidbody2D);

}

function Update () {
	if(playing){
		if(Input.GetMouseButtonDown(0)){
			Jump();
		}
	}
}