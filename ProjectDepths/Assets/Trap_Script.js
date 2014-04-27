#pragma strict

var rigidBody2D: Rigidbody2D;
var collided : boolean = false;
//var player : GameObject;
//var fired: boolean = false;
//var objectToFollow: GameObject;

function Start () {

}

function Update () {
	rigidBody2D.gravityScale = 1;
	if (!collided)
		rigidbody2D.velocity.x = 10;
		
}

function FixedUpdate () {
	//rigidbody2D.AddForce(Vector2.right * 10);
}

function OnCollisionEnter2D(collision : Collision2D ){
	Debug.Log(collision.gameObject.tag + " ");
    if(collision.gameObject.tag == "Cube"){
    	collided = true;
     	rigidbody2D.velocity.x = 0;
    }
}