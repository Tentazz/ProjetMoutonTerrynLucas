#pragma strict

private var myCamera : GameObject;
var shakeIntensity : float = 0.05;

function Start () {
myCamera = GameObject.FindWithTag ("MainCamera");
}

function Shake () {
myCamera.SendMessage ("DoShake",shakeIntensity );
}