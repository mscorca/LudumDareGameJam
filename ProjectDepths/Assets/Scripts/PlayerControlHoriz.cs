using UnityEngine;
using System.Collections;

public class PlayerControlHoriz : MonoBehaviour {

	public float speed = 5.0f;
	//public string axisName = "Horizontal";
	public Rigidbody2D rigidbody2d;

	// Update is called once per frame
	void Update () {
		//transform.position += transform.right * Input.GetAxis(axisName) * speed * Time.deltaTime;	
		if(Input.GetKey("a")){
			//this.rigidbody2D.addForce(new Vector2(-2.0f, 0.0f));
		}
	}
}
