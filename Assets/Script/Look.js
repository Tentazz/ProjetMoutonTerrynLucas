#pragma strict

public var target: Transform;
public var player: Transform;
public var Camposition : GameObject;
var coll : boolean = false;
var a : float;
var distanceCamera : float;

var hauteurCamera : float = 2.8;

public var vitesseCollision : float = 0.1;

function Start () {

}


function FixedUpdate() {

	var fwd = transform.TransformDirection (Vector3.forward);
	var bck = transform.TransformDirection (Vector3.back);
	var diff = player.position - target.position;

	Camposition.transform.position = player.position - diff/50 + fwd * a + bck * distanceCamera;
	Camposition.transform.position.y = hauteurCamera;
	
	// Rotate the camera every frame so it keeps looking at the target 
	transform.LookAt(target);


	if (coll ==  true) {
		a = a + vitesseCollision ; 
		transform.position = Camposition.transform.position;
	}





	else {
		if (Physics.Raycast (transform.position, bck,1)) { 
			transform.position = Camposition.transform.position;
		}

		else {
		transform.position = Camposition.transform.position;
		a = Mathf.Clamp((a - vitesseCollision), 0, 100) ;
		}
	

	}

}

function OnCollisionEnter (collision : Collision) {
	coll = true;
}

function OnCollisionExit (collision : Collision) {
	coll = false;
}
//Physics.Raycast (transform.position, fwd,1)