#pragma strict



function BeginRound(){
	gameObject.GetComponent(Collider2D).enabled = true;

}


function Disable(){
	gameObject.GetComponent(Collider2D).enabled = false;
}


function Start () {
	gameObject.GetComponent(Collider2D).enabled = true;
}

function Update () {

}