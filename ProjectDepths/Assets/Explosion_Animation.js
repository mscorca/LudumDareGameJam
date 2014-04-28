#pragma strict

function Start () {
	GetComponent(SpriteRenderer).color.a = 0;
}

function Update () {
	//i += .01;
	GetComponent(SpriteRenderer).color.a += 0.001;
}