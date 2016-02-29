#pragma strict

var Boss : GameObject;
var DamagePoint : int;

function Start () {

}

function Damage () {
Boss.SendMessage ("Damage", DamagePoint);
}

