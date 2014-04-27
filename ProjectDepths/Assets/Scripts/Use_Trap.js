#pragma strict

var fired : boolean = false;
public var trap : GameObject;
var fireRate : float = 3;
private var nextFire : float = 0.0;

function Start () {
	
}

function Update () {
	if (Input.GetKey("e") && Time.time > nextFire){
		nextFire = Time.time + fireRate;
		var trapClone = Instantiate(trap, transform.position, transform.rotation);
	}
}