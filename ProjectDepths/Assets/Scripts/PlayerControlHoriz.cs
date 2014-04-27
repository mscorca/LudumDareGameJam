using UnityEngine;
using System.Collections;

public class PlayerControlHoriz : MonoBehaviour {

	public float speed = 1.0f;
	public string axisName = "Horizontal";

	// Update is called once per frame
	void Update () {
		transform.position += transform.right * Input.GetAxis(axisName) * speed * Time.deltaTime;	
	}
}
