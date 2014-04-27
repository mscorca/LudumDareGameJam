#pragma strict

var platformArray:GameObject;
var gravity:Number;
var velocityX = 0;
var velocityY = 0;

function Start () {

}

function Update () {
	if (Input.GetKeyDown (KeyCode.W)){
		velocityY = -2;
	}
	if (Input.GetKey (KeyCode.A)){
		if (Input.GetKey (KeyCode.D)){
			velocityX = 0;
		} else {
			velocityX = -.01;
		}
	} else if (Input.GetKey (KeyCode.D)){
		velocityX = .01;
	} else {
		velocityX = 0;
	}
	this.transform.position.x += velocityX;
	this.transform.position.y += velocityY;
}