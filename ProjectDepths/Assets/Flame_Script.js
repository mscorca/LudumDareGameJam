#pragma strict

function Start () {
	//GetComponent(SpriteRenderer).color.a = 0.001;
	Debug.Log("in start of flame script");
}

function Update () {
	Debug.Log("Updating flame script");
	GetComponent(SpriteRenderer).color.a = 0.4;
	if (this.transform.position.y > 4.4 /*|| Input.GetKeyDown("space")*/){
		Application.LoadLevel("VictoryScene");
	}
	else{
		this.transform.position.y += .01;
	}
	Debug.Log(this);
}