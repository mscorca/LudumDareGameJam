#pragma strict

public static var gameOver : boolean = false;

public var counter : int = 0;
public var numWalls : int = 0;

var exitMade : boolean = false; 
var exit : GameObject;

private var exitClone : GameObject;

// Here will control making the exit appear after a certain number of walls have been created

function Update () {
	if (counter == 35 && !exitMade) {
		CreateExit();
	}
	if (exitMade){
		UpdateExit();
	}
}

function CreateExit(){
	exitClone = Instantiate(exit, 
								Vector3(Camera.main.transform.position.x, 
								 Camera.main.transform.position.y - 20,
								 0), 
								transform.rotation);
	exitMade = true;
}

function UpdateExit () {
	exitClone.transform.position.y += .2;
}