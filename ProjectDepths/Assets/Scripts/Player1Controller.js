#pragma strict

//Public Variables
var moveSpeed : float = 25; 			// Movement Speed
var jumpForce : float = 300;			// Jump Force
var allowDoubleJump : boolean = true;	// Allow Double Jump

//Private Variables
private var horizontalInput : float;
private var verticalInput : float;

private var isFacingRight : boolean = true;
public var isGrounded : boolean = false;
private var isMoving : boolean = false;
private var jumpCount = 0;

private var velX : float;
//private var animator : Animator;

function Update () {
	//animator = GetComponent("Animator"); 	// Get the "Animator" component and set it to "animator" var
	velX = rigidbody2D.velocity.x; 			// Store the x velocity in "vel" var
	 	
	HandleInput(); 			// Handles Input
	HandleMovement(); 		// Handles Movement
	HandleJump();
	SetIsGrounded();		// Sets "isGrounded"
	SetIsFacingRight(); 	// Sets "isFacingRight"
	SetIsMoving(); 			// Sets "isMoving"
}

function HandleInput() {
	horizontalInput = Input.GetAxis("Horizontal"); 		// Set "horiztonalInput" equal to the Horizontal Axis Input
	verticalInput = Input.GetAxis("Vertical"); 			// Set "verticallInput" equal to the Vertical Axis Inpu
}

function HandleMovement() {
	rigidbody2D.velocity.x = horizontalInput * moveSpeed * Time.deltaTime; // Moves gameObject based on the "moveSpeed" var
}

function HandleJump() {
	if(Input.GetButtonDown("Jump")) {
		//Debug.Log("IM JUMPING"); 											// When "Jump" button is pressed
		jumpCount++;														// Add 1 to jumpCount
		if(isGrounded || (allowDoubleJump && jumpCount < 2)) {				// if the character is on the ground OR if double jump is allow and the "jumpCount" is below 2
			rigidbody2D.velocity.y = 0;										// Set the y velocity to 0
			rigidbody2D.AddForce(Vector2.up * jumpForce * Time.deltaTime); 	// Add y force set by "jumpForce"
		}
	}
}

function Flip() {
	isFacingRight = !isFacingRight; 				// Toggles between "true" and "false"
	gameObject.transform.localScale.x *= -1; 		// Flip the gameObject based on localScale
}

function SetIsFacingRight() {	
	if(velX > 0 && !isFacingRight) { 			// If velocity is positive and gameObject isn't facing right
		Flip();
	} else if(velX < 0 && isFacingRight) { 		// If velocity is negative and gameObject is facing right
		Flip();
	}
}

function SetIsMoving() {
	if(velX != 0) { 								// If velocity isn't 0, set "isMoving" to true
		isMoving = true;	
	} else { 									// If velocity is 0, set "isMoving" to false
		isMoving = false;
	}
	//animator.SetBool("isMoving", isMoving); 	// Set the "isMoving" bool parameter to equal "isMoving" var	
}

function SetIsGrounded() {
	var raycastHit : RaycastHit2D = Physics2D.Raycast(transform.position, -Vector2.up);	// Create a ray from the character to check for the ground
	if(raycastHit.collider != null) {															// If the ray hit isn't null
		if(raycastHit.collider.tag == "Ground") {												// Check if the collider is in the "ground" tag
			isGrounded = true;																	// Set "isGrounded" to true
			jumpCount = 0;					
			Debug.Log("Im grounded " + jumpCount);													// Reset the "jumpCount" to 0
		}
	} else {
		isGrounded = false;																		// Set "isGrounded" to false if not colliding with "ground" tag
		Debug.Log("Im not grounded " + jumpCount);													// Reset the "jumpCount" to 0
	}
	Debug.Log("isGrounded is " + isGrounded);													// Reset the "jumpCount" to 0
}