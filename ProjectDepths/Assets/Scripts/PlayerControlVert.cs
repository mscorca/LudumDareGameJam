using UnityEngine;
using System.Collections;

public class PlayerControlVert : MonoBehaviour {

	public float jumpPower = 10.0f;
	public Rigidbody2D rigidbody2d;
	private bool isGrounded = false;

	// Use this for initialization
	void Start () {
		rigidbody2d = gameObject.GetComponent<Rigidbody2D>();
	}
	
	// Update is called once per frame
	void Update () {
/*		if(rigidbody2d.velocity.y == 0){
			isGrounded = true;
		}

		if(Input.GetButtonDown("Jump") && isGrounded){
			rigidbody2d.AddForce(transform.up * jumpPower);
			isGrounded = false;
		}
	
	}
*/

		if(Input.GetKey("a")){
			this.rigidbody2D.AddForce(new Vector2(-2.0f, 0.0f));
			Debug.Log("input received");
		}
	}
}