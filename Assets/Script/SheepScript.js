#pragma strict

public var vie : int;
var AnimatorSheep : Animator;

var dead : boolean = false;

var cooldownDash : float = 2;
private var goDash : boolean = true;

var colliderEpee : GameObject;

private var myCamera : GameObject;



function Start () {
colliderEpee.SetActive (false);
myCamera = GameObject.FindWithTag ("MainCamera");
}

function Update () {
	if (Input.GetButtonDown("Fire1"))
		Attack();

	if (Input.GetButtonDown("Jump"))
		Dash();
	}

function Attack () {
	AnimatorSheep.SetBool ("Attack",true); 
	yield WaitForSeconds (1);
	colliderEpee.SetActive (true);
	AnimatorSheep.SetBool ("Attack",false);
	yield WaitForSeconds (1.1);
	colliderEpee.SetActive (false);
}

function Dash () {
	if (goDash == true) {
		goDash = false;
		AnimatorSheep.SetBool ("Dash",true); 
		yield WaitForSeconds (0.1);
		AnimatorSheep.SetBool ("Dash",false);
		yield WaitForSeconds (2);
		goDash = true ;
	}
}



function Hit () {
	print ("hit");
	AnimatorSheep.SetBool ("Hit",true);
}

function Damage (damagePoint : int) {
	myCamera.SendMessage ("DoShake",0.05 );
	vie = vie - damagePoint;
			 if (vie <= 0) {
			 dead = true;
			 AnimatorSheep.SetBool ("Dead",true);
			 }
	AnimatorSheep.SetBool ("Hit",true);
	yield WaitForSeconds (1);
	AnimatorSheep.SetBool ("Hit",false);
}