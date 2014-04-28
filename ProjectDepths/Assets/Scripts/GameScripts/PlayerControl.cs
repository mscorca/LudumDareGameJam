using UnityEngine;
using System.Collections;

public class PlayerControl : MonoBehaviour {

	public float dirForceVert = 5.0f;
	public float dirForceHoriz = .0f;
	public Rigidbody2D rigidbody2d;
	static public bool gameOver = false;
	public bool stopped = false;

	void FixedUpdate () {
		// If game over, halt movement
		if (!gameOver) {
			if (this.tag == "Player1") {
				if (Input.GetKey ("a")) {
					this.rigidbody2D.AddForce ((new Vector2 (-dirForceHoriz, 0.0f)) * this.rigidbody2D.mass / Time.fixedDeltaTime);
					//Debug.Log("A pressed");
				}

				if (Input.GetKey ("d")) {
					this.rigidbody2D.AddForce (new Vector2 (dirForceHoriz, 0.0f) * this.rigidbody2D.mass / Time.fixedDeltaTime);
					//Debug.Log("d pressed");
				}

				if (Input.GetKey ("w")) {
					this.rigidbody2D.AddForce (new Vector2 (0.0f, dirForceVert/2) * this.rigidbody2D.mass / Time.fixedDeltaTime);
					//Debug.Log("w pressed");
				}

				if (Input.GetKey ("s")) {
					this.rigidbody2D.AddForce (new Vector2 (0.0f, -dirForceVert) * this.rigidbody2D.mass / Time.fixedDeltaTime);
					//Debug.Log("s pressed");
				}
				//Debug.Log("Velocity in x: " + this.rigidbody2d.velocity.x);
				//Debug.Log("Velocity in y: " + this.rigidbody2d.velocity.y);
			} else if (this.tag == "Player2") {
				if (Input.GetKey ("left")) {
					this.rigidbody2D.AddForce (new Vector2 (-dirForceHoriz, 0.0f) * this.rigidbody2D.mass / Time.fixedDeltaTime);
					//Debug.Log("A pressed");
				}

				if (Input.GetKey ("right")) {
					this.rigidbody2D.AddForce (new Vector2 (dirForceHoriz, 0.0f) * this.rigidbody2D.mass / Time.fixedDeltaTime);
					//Debug.Log("d pressed");
				}

				if (Input.GetKey ("up")) {
					this.rigidbody2D.AddForce (new Vector2 (0.0f, dirForceVert) * this.rigidbody2D.mass / Time.fixedDeltaTime);
					//Debug.Log("w pressed");
				}

				if (Input.GetKey ("down")) {
					this.rigidbody2D.AddForce (new Vector2 (0.0f, -dirForceVert) * this.rigidbody2D.mass / Time.fixedDeltaTime);
					//Debug.Log("s pressed");
				}
			}
		}
		//------
	}

	void OnCollisionEnter2D(Collision2D collision){
		if (collision.gameObject.tag == "TheExit") {
			gameOver = true;
		}
		if (collision.gameObject.tag == "Pillow") {
			stopped = true;
		}
	}
}
