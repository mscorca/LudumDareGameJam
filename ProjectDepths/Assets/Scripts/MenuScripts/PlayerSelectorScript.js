#pragma strict

var attribute:GUIText;
var trap:GUIText;
var otherPlayer:GameObject;
var data:GameObject;
private var playerReady = false;

function Start () {

}

function Update () {
	if (data.GetComponent(GameDataScript).levelSelected == true){
	if ((Input.GetKeyDown (KeyCode.W) && gameObject.name  == "P1Selector") || (Input.GetKeyDown (KeyCode.UpArrow)  && gameObject.name  == "P2Selector")){
		guiTexture.pixelInset.y = 376;
	} else if ((Input.GetKeyDown (KeyCode.S) && gameObject.name  == "P1Selector") || (Input.GetKeyDown (KeyCode.DownArrow)  && gameObject.name  == "P2Selector")){
		guiTexture.pixelInset.y = 376 - 128;
	} else if ((Input.GetKeyDown (KeyCode.A) || Input.GetKeyDown (KeyCode.D)) && gameObject.name  == "P1Selector"){
		if (guiTexture.pixelInset.y == 376){
			if (data.GetComponent(GameDataScript).p1attr == 0){
				attribute.text = "Jump";
				data.GetComponent(GameDataScript).p1attr = 1;
			} else if (data.GetComponent(GameDataScript).p1attr == 1){
				attribute.text = "Speed";
				data.GetComponent(GameDataScript).p1attr = 0;
			}
		} else {
			if (data.GetComponent(GameDataScript).p1trap == 0){
				trap.text = "Trap 2";
				data.GetComponent(GameDataScript).p1trap = 1;
			} else if (data.GetComponent(GameDataScript).p1trap == 1){
				trap.text = "Trap 1";
				data.GetComponent(GameDataScript).p1trap = 0;
			}
		}
	} else if ((Input.GetKeyDown (KeyCode.LeftArrow) || Input.GetKeyDown (KeyCode.RightArrow))  && gameObject.name  == "P2Selector"){
		if (guiTexture.pixelInset.y == 376){
			if (data.GetComponent(GameDataScript).p2attr == 0){
				attribute.text = "Jump";
				data.GetComponent(GameDataScript).p2attr = 1;
			} else if (data.GetComponent(GameDataScript).p2attr == 1){
				attribute.text = "Speed";
				data.GetComponent(GameDataScript).p2attr = 0;
			}
		} else {
			if (data.GetComponent(GameDataScript).p2trap == 0){
				trap.text = "Trap 2";
				data.GetComponent(GameDataScript).p2trap = 1;
			} else if (data.GetComponent(GameDataScript).p2trap == 1){
				trap.text = "Trap 1";
				data.GetComponent(GameDataScript).p2trap = 0;
			}
		}
	} else if ((Input.GetKeyDown (KeyCode.Space) && gameObject.name  == "P1Selector") || (Input.GetKeyDown (KeyCode.Return) && gameObject.name  == "P2Selector")){
		playerReady = true;
		if (otherPlayer.GetComponent(PlayerSelectorScript).playerReady){
			Application.LoadLevel ("Depths");
		}
	}
	}
}