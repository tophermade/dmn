#pragma strict

var waitToDestroy 	: float 		= 6;

function Start () {
	yield WaitForSeconds(waitToDestroy);
	Destroy(gameObject);
}

function Update () {

}