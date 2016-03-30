#pragma strict

var player 					: GameObject;

var initialPosition 		: Vector3;

var followPlayer 			: boolean 		= false;


function BeginRound(){
}

function FinishRound(){
	transform.position = initialPosition;
}


function Start () {
	initialPosition = transform.position;
}


function Update () {
	if(!followPlayer && player.transform.position.y < -14){
		followPlayer = true;
	}

	if(followPlayer){
		transform.position.y = player.transform.position.y + 8.25;

		if(transform.position.y > initialPosition.y){
			transform.position = initialPosition;			
		}
	}
}