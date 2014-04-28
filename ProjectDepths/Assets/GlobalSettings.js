#pragma strict

var winner : String;
var waitForWin : float = 0;
var script : ManageLevel;

function Start () {
	//DontDestroyOnLoad(this.gameObject);
	winner = null;
	script = GetComponent("ManageLevel");
	//script = GetComponent(ManageLevel);
}

function FixedUpdate () {
//	Debug.Log(waitForWin);
	waitForWin += Time.deltaTime;
	winner = GameObject.Find("Winner_Keeper").GetComponent(Winner_Keeper_Script).winner;
	if ((winner == "US" || winner == "Soviet") && waitForWin > 19){
		script.enabled = false;
		if (winner == "US")
			Application.LoadLevel("VictorySceneUS");
		else
			Application.LoadLevel("VictorySceneSoviet");
	} else if (waitForWin > 19){
		//winner = "Mars";
		script.enabled = false;
		Application.LoadLevel("VictorySceneMars");
	}
}