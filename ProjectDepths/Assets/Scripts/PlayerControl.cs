using UnityEngine;
using System.Collections;

public class PlayerControl : MonoBehaviour {

	public float maxSpeed = 5.0f;
	public Rigidbody2D rigidbody2d;

	void FixedUpdate () {
		if(this.tag == "Player1"){
			if(Input.GetKey("a")){
				this.rigidbody2D.AddForce(new Vector2(-20.0f, 0.0f));
				Debug.Log("A pressed");
			}

			if(Input.GetKey("d")){
				this.rigidbody2D.AddForce(new Vector2(20.0f, 0.0f));
				Debug.Log("d pressed");
			}

			if(Input.GetKey("w")){
				this.rigidbody2D.AddForce(new Vector2(0.0f, 20.0f));
				Debug.Log("w pressed");
			}

			if(Input.GetKey("s")){
				this.rigidbody2D.AddForce(new Vector2(0.0f, -20.0f));
				Debug.Log("s pressed");
			}
			Debug.Log("Velocity in x: " + this.rigidbody2d.velocity.x);
			//Debug.Log("Velocity in y: " + this.rigidbody2d.velocity.y);
		} else if(this.tag == "Player2"){
			if(Input.GetKey("left")){
				this.rigidbody2D.AddForce(new Vector2(-20.0f, 0.0f));
				Debug.Log("A pressed");
			}

			if(Input.GetKey("right")){
				this.rigidbody2D.AddForce(new Vector2(20.0f, 0.0f));
				Debug.Log("d pressed");
			}

			if(Input.GetKey("up")){
				this.rigidbody2D.AddForce(new Vector2(0.0f, 20.0f));
				Debug.Log("w pressed");
			}

			if(Input.GetKey("down")){
				this.rigidbody2D.AddForce(new Vector2(0.0f, -20.0f));
				Debug.Log("s pressed");
			}
		}
	}
}
