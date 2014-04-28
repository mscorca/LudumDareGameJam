#pragma strict

private var myTime : float;

var text1 : GameObject;
var text2 : GameObject;
var text3 : GameObject;
var text4 : GameObject;

function Start () {
	text1.renderer.enabled = true;
	text2.renderer.enabled = false;
	text3.renderer.enabled = false;
	text4.renderer.enabled = false;
}

function Update () {
	myTime += Time.deltaTime;
	
	if (myTime > 5) {
		text1.renderer.enabled = false;
		text2.renderer.enabled = true;
	}
	
	if (myTime > 12) {
		text2.renderer.enabled = false;
		text3.renderer.enabled = true;
	}
	
	if (myTime > 14) {
		text3.renderer.enabled = false;
		text4.renderer.enabled = true;
	}
	
	if (myTime > 17) {
		Application.LoadLevel("Depths");
	}
}

