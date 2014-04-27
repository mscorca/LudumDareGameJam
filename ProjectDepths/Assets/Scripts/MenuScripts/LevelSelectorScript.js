#pragma strict

var level1:GUITexture;
var level2:GUITexture;
var level3:GUITexture;
var level4:GUITexture;
var data:GameObject;
private var hasSelected = false;


function Start () {

}

function Update () {

	if (!hasSelected){
	if (Input.GetKeyDown (KeyCode.UpArrow) || Input.GetKeyDown (KeyCode.W)){
		guiTexture.pixelInset.y = level1.pixelInset.y;
	} else if (Input.GetKeyDown (KeyCode.DownArrow) || Input.GetKeyDown (KeyCode.S)){
		guiTexture.pixelInset.y = level3.pixelInset.y;
	} else if (Input.GetKeyDown (KeyCode.LeftArrow) || Input.GetKeyDown (KeyCode.A)){
		guiTexture.pixelInset.x = level1.pixelInset.x;
	} else if (Input.GetKeyDown (KeyCode.RightArrow) || Input.GetKeyDown (KeyCode.D)){
		guiTexture.pixelInset.x = level2.pixelInset.x;
	} else if (Input.GetKeyDown (KeyCode.Space) || Input.GetKeyDown (KeyCode.Return)){
		hasSelected = true;
		data.GetComponent(GameDataScript).levelSelected = true;
		if (guiTexture.pixelInset.x == level1.pixelInset.x && guiTexture.pixelInset.y == level1.pixelInset.y){
			data.GetComponent(GameDataScript).selectedLevel == level1;
			level2.transform.position.z = -2;
			level3.transform.position.z = -2;
			level4.transform.position.z = -2;
		} else if (guiTexture.pixelInset.x == level2.pixelInset.x && guiTexture.pixelInset.y == level2.pixelInset.y){
			data.GetComponent(GameDataScript).selectedLevel == level2;
			level1.transform.position.z = -2;
			level3.transform.position.z = -2;
			level4.transform.position.z = -2;
		} else if (guiTexture.pixelInset.x == level3.pixelInset.x && guiTexture.pixelInset.y == level3.pixelInset.y){
			data.GetComponent(GameDataScript).selectedLevel == level3;
			level1.transform.position.z = -2;
			level2.transform.position.z = -2;
			level4.transform.position.z = -2;
		} else if (guiTexture.pixelInset.x == level4.pixelInset.x && guiTexture.pixelInset.y == level4.pixelInset.y){
			data.GetComponent(GameDataScript).selectedLevel == level4;
			level1.transform.position.z = -2;
			level2.transform.position.z = -2;
			level3.transform.position.z = -2;
		}
	}
	} else if (Input.GetKeyDown (KeyCode.Escape) || Input.GetKeyDown (KeyCode.Backspace)){
		hasSelected = false;
		level1.transform.position.z = 0;
		level2.transform.position.z = 0;
		level3.transform.position.z = 0;
		level4.transform.position.z = 0;
	}
}