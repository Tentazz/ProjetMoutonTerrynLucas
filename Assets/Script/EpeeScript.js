#pragma strict

var Epee : GameObject;

private var myCamera : GameObject;
var shakeIntensity : float = 0.05;

public var PartSang: GameObject;

function Start () {
myCamera = GameObject.FindWithTag ("MainCamera");
}

function OnTriggerEnter (other : Collider) {
	if (other.tag == "Boss") {
		other.SendMessage ("Damage");
		PartSang.GetComponent.<ParticleSystem>().Emit(100);
		Epee.SetActive (false);
		myCamera.SendMessage ("DoShake",0.05);


	}
}

