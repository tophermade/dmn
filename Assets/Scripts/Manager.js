#pragma strict

var notify 				: GameObject[];
var potentialBlocks 	: GameObject[];
var noise 				: GameObject;
var playBlockParent 	: GameObject;

var indexPanel 			: GameObject;
var gameOverPanel 		: GameObject;
var firstSpikes 		: GameObject;

var scoreObject			: GameObject;
var gameOverScoreObject	: GameObject;
var highScoreObject		: GameObject;

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


function RemovePanels(){
	lastSpawn = -7;
	for(var platform : Transform in playBlockParent.transform){
        Destroy(platform.gameObject);
    }
}


function BeginRound(){
	score = 0;
	scoreObject.GetComponent(TextMesh).text = score.ToString();
	firstSpikes.transform.Find("RowRoot/Tracker").gameObject.SendMessage("BeginRound");
	Notify(notify, "BeginRound");
}


function FinishRound(){
	yield WaitForSeconds(.75);
	gameOverPanel.SetActive(true);
	highScoreObject.SendMessage("SetHighScore", score);
	gameOverScoreObject.SendMessage("SetScore", score);
}


function RestartRound(){
	gameOverPanel.SetActive(false);
	RemovePanels();
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
	var newBlock : GameObject = Instantiate(potentialBlocks[Random.Range(0, potentialBlocks.length)], transform.position, Quaternion.identity);
		newBlock.transform.position.y = lastSpawn;
		newBlock.transform.position.x = Random.Range(-3.01,3.01);
		newBlock.transform.parent = playBlockParent.transform;

	spawnGap = Random.Range(spawnGapMin, spawnGapMax);

	if(Random.Range(0,3) == 2){
		var newNoise : GameObject = Instantiate(noise, newBlock.transform.position, Quaternion.identity);
			newNoise.transform.parent = playBlockParent.transform;
	}
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