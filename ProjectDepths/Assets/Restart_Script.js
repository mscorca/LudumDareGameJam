#pragma strict

function Start () {
	//Destroy(GameObject.Find("LevelManager"));
}

function Update () {

	if (Input.GetKeyDown("enter")){
		Application.LoadLevel("Depths");
	}
	
}