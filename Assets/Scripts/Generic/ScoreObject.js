#pragma strict

function SetScore(score : int){
	gameObject.GetComponent(TextMesh).text = "SCORE: " + score.ToString();
	gameObject.transform.Find("TextShadow").transform.gameObject.GetComponent(TextMesh).text = "SCORE: " + score.ToString();
}
