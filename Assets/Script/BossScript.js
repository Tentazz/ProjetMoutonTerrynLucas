#pragma strict

public var VieBoss : int;
//private var damagepoint : int;

function Start () {

}

function Damage (damagepoint : int) {
VieBoss = VieBoss - damagepoint;
}