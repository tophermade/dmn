#pragma strict

var notify 				: GameObject[];
var potentialBlocks 	: GameObject[];
var playBlockParent 	: GameObject;

var indexPanel 			: GameObject;
var gameOverPanel 		: GameObject;
var firstSpikes 		: GameObject;

var scoreObject			: GameObject;

var player 				: GameObject;

var lastSpawn 			: int 			= -6;
var spawnGap 			: float 		= 6.5;
var spawnGapMin 		: float 		= 6.5;
var spawnGapMax 		: float 		= 9;

var score 				: int 			= 0;



function Notify(notifyThese : GameObject[], theMessage : String){
	for (var item: GameObject in notifyThese) {
		item.SendMessage(theMessage);
	}
}


function BeginRound(){
	score = 0;
	scoreObject.GetComponent(TextMesh).text = score.ToString();
	firstSpikes.transform.Find("RowRoot/Tracker").gameObject.SendMessage("BeginRound");
	Notify(notify, "BeginRound");
}


function FinishRound(){

}


function RestartRound(){
	gameOverPanel.SetActive(false);
	BeginRound();
}


function StartRound(){
	indexPanel.SetActive(false);
	BeginRound();
}


function EndRound(){
	FinishRound();
	Notify(notify, "FinishRound");
}


function SpawnBlock(playerY : float){
	lastSpawn = lastSpawn - spawnGap;
	var newBlock : GameObject = Instantiate(potentialBlocks[0], transform.position, Quaternion.identity);
		newBlock.transform.position.y = lastSpawn;

	spawnGap = Random.Range(spawnGapMin, spawnGapMax);
}


function AddPoint(){
	score++;
	scoreObject.GetComponent(TextMesh).text = score.ToString();
}


function Start () {

}


function FixedUpdate () {
	var playerY : float = player.transform.position.y;
	if(playerY < lastSpawn + spawnGap){
		SpawnBlock(playerY);
	}
}