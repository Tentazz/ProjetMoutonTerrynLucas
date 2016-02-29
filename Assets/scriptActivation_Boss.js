#pragma strict

var boss : GameObject;

var musicPlayer : GameObject;

function Start () {

}

function OnTriggerEnter (other : Collider) {
	if (other.tag == "Player") {
		boss.SendMessage ("Activate");
		musicPlayer.SendMessage ("PlayDirect",2);
		Destroy (this, 2);
	}
}