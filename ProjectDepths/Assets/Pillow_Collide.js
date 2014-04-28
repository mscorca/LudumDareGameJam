#pragma strict

public var playerCount : int;

function Start () {

}

function Update () {

}

function OnCollisionEnter2D(col : Collision2D){
	if(col.gameObject.tag == "Player1" || col.gameObject.tag == "Player2"){
		++playerCount;
		Debug.Log("Count = " + playerCount);
	} 
}