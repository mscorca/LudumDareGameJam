#pragma strict

public static var gameOver : boolean = false;

public var counter : int = 0;
public var numWalls : int = 0;

var exitMade : boolean = false; 
var exit : GameObject;

private var exitClone : GameObject;

// Here will control making the exit appear after a certain number of walls have been created

function Update () {
	if (counter >= 50 && !exitMade) {
		CreateExit();
	}
	if (exitMade){
		UpdateExit();
	}
}

function CreateExit(){
	exitClone = Instantiate(exit, 
								Vector3(Camera.main.transform.position.x, 
								 Camera.main.transform.position.y - 15,
								 0), 
								transform.rotation);
	exitMade = true;
}

function UpdateExit () {
	exitClone.transform.position.y += .2;
}
 
private var startTime: float;
 
function Start () {
   bgColorShifter();
}
 
function bgColorShifter(){

    startTime = Time.time;
    var bgColor : Color; 
 
 
    bgColor = Color(.3, .1, 0, 1.0);
    Camera.main.backgroundColor = bgColor;
    
    while (true){ 
        bgColor = Color(1, 1, 0, 1.0);
 
        var t: float = 0f;
        var currentColor = Camera.main.backgroundColor;
 
        while( t < 10.0 ){
            Camera.main.backgroundColor = Color.Lerp(currentColor, bgColor, t/25 );
            yield;
            t += Time.deltaTime;
        }
    }
}