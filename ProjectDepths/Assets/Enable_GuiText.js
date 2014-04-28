#pragma strict

var appearTime : float = 0;

function Start () {
	this.guiText.enabled = false;
}

function Update () {
	appearTime = GameObject.Find("LevelManager").GetComponent(GlobalSettings).waitForWin;
	if (appearTime > 11){
		this.guiText.enabled = true;
	}
}