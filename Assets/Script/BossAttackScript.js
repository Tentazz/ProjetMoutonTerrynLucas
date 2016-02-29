#pragma strict

public var damagePoint : int;

function Start () {

}

function OnTriggerEnter (other : Collider) {
	if (other.tag == "Player") {
		other.SendMessage ("Damage", damagePoint );
	}
}