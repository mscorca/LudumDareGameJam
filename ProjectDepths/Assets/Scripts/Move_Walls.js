#pragma strict

public var wall : GameObject;
var gameEnded : boolean = false;

//private var counter = 0;
private var finishSpawned : boolean;

function Start () {
	++GameObject.Find("LevelManager").GetComponent(ManageLevel).numWalls;
	//visible = renderer.isVisible;
	finishSpawned = false;
}

function Update () {
	//to check if game over
	gameEnded  = GameObject.Find("LevelManager").GetComponent(ManageLevel).gameOver;
	//Only Update moving "animation" if not game over
	if (!gameEnded){
		this.gameObject.transform.position.y -= -.5;
		//this.gameObject.transform.position.y = lastPos;
	} else {
		this.gameObject.transform.position.y = 0;
	}
		
	//if (this.gameObject.transform.position.y > Camera.main.transform.position.y ){
	if (this.transform.position.y > (Camera.main.transform.position.y+6) && GameObject.Find("LevelManager").GetComponent(ManageLevel).numWalls < 4){
		var wallClone = Instantiate(wall, Vector3(this.transform.position.x, Camera.main.transform.position.y - 20, 0), transform.rotation);
		++GameObject.Find("LevelManager").GetComponent(ManageLevel).counter;
		//Debug.Log(GameObject.Find("LevelManager").GetComponent(ManageLevel).counter);
	}
	//Check when we destroy it
	if (wall.transform.position.y > Camera.main.transform.position.y+20){
		--GameObject.Find("LevelManager").GetComponent(ManageLevel).numWalls;
		Destroy(wall);
	}
	
}