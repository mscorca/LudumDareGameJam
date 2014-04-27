#pragma strict

var lastPos : float;
var gameEnded : boolean;
//var gameOver : boolean = false;

function Start () {
	gameEnded = GameObject.Find("LevelManager").GetComponent(ManageLevel).gameOver;
}

function Update () {
	if (gameEnded){
		this.gameObject.transform.position.y = lastPos;
	}
	gameEnded = GameObject.Find("LevelManager").GetComponent(ManageLevel).gameOver;
}

function OnCollisionEnter2D(coll: Collision2D) {
	if (coll.gameObject.tag == "Player1" || coll.gameObject.tag == "Player2"){
		lastPos = this.gameObject.transform.position.y;
		gameEnded = true;
		GameObject.Find("LevelManager").GetComponent(ManageLevel).gameOver = true;
	}
}