#pragma strict

var lastPos : float;
var gameEnded : boolean;
public static var collided : int = 0;

function Start () {
	gameEnded = GameObject.Find("LevelManager").GetComponent(ManageLevel).gameOver;
}

function Update () {
	if (gameEnded && collided > 2){
		this.gameObject.transform.position.y = lastPos;
		//Time.timeScale = 0.00;
	/*
		GameObject.Find("Finish_Line(Clone)").transform.position.y = lastPos;
		GameObject.Find("pillow1").transform.position.y = lastPos;
		GameObject.Find("pillow2").transform.position.y = lastPos;
		*/
	}
	gameEnded = GameObject.Find("LevelManager").GetComponent(ManageLevel).gameOver;
}

function OnCollisionEnter2D(coll: Collision2D) {
	
	if ((coll.gameObject.tag == "Player1" || coll.gameObject.tag == "Player2") && collided <= 2){
		//lastPos = this.gameObject.transform.position.y;
		lastPos = coll.gameObject.transform.position.y;
		++collided;
		//GameObject.Find("Finish_Line(Clone)").transform.position.y;
		gameEnded = true;
		GameObject.Find("LevelManager").GetComponent(ManageLevel).gameOver = true;
		if (coll.gameObject.tag == "Player1" && this.gameObject.tag == "TheExit"){
				GameObject.Find("Winner_Keeper").GetComponent(Winner_Keeper_Script).winner = "US";
				//coll.gameObject.transform.position.y += 1000;
				//Time.timeScale = 0.1;
		} else if (coll.gameObject.tag == "Player2" && this.gameObject.tag == "TheExit"){
				GameObject.Find("Winner_Keeper").GetComponent(Winner_Keeper_Script).winner = "Soviet";
				//Time.timeScale = 0.1;
				//coll.gameObject.transform.position.y += 1000;
		} else {
			GameObject.Find("Winner_Keeper").GetComponent(Winner_Keeper_Script).winner = "Mars";
			//coll.gameObject.transform.position.y += 1000;
		}
	}
}