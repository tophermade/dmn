#pragma strict

var highscore 		: int;

function SetHighScore(score : int){
	if(PlayerPrefs.HasKey("highscore")){
		highscore = PlayerPrefs.GetInt("highscore");

		if(score > highscore){
			PlayerPrefs.SetInt("highscore", score);
			highscore = score;
		}
	} else {
		PlayerPrefs.SetInt("highscore", score);
	}

	gameObject.GetComponent(TextMesh).text = "BEST: " + highscore.ToString();
	gameObject.transform.Find("TextShadow").transform.gameObject.GetComponent(TextMesh).text = "BEST: " + highscore.ToString();
}




function Start () {

}

function Update () {

}