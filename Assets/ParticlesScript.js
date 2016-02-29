#pragma strict

private var myCamera : GameObject;

public var petiteFumeeGO: GameObject;
public var grandeFumeeGO: GameObject;
public var shardGO: GameObject;

public var petiteFumeeDO: GameObject;
public var grandeFumeeDO: GameObject;
public var shardDO: GameObject;


public var mainG: GameObject;
public var MainD: GameObject;
public var MainGchoc: GameObject;
public var MainDchoc: GameObject;
public var Corne: GameObject;

var shakeIntensity : float = 0.05;

function Start () {
myCamera = GameObject.FindWithTag ("MainCamera");

mainG.SetActive(false);
MainD.SetActive(false);
MainGchoc.SetActive(false);
MainDchoc.SetActive(false);
Corne.SetActive(false);
}




function PetitGauche () {
petiteFumeeGO.GetComponent.<ParticleSystem>().Emit(100);
myCamera.SendMessage ("DoShake",0.02 );
petiteFumeeGO.GetComponent.<AudioSource>().Play();
}

function GrandGauche () {
grandeFumeeGO.GetComponent.<ParticleSystem>().Emit(200);
shardGO.GetComponent.<ParticleSystem>().Emit(100);
myCamera.SendMessage ("DoShake",0.1 );
}

function PetitDroit () {
petiteFumeeDO.GetComponent.<ParticleSystem>().Emit(100);
myCamera.SendMessage ("DoShake",0.02 );
petiteFumeeDO.GetComponent.<AudioSource>().Play();
}

function GrandDroit () {
grandeFumeeDO.GetComponent.<ParticleSystem>().Emit(200);
shardDO.GetComponent.<ParticleSystem>().Emit(100);
myCamera.SendMessage ("DoShake",0.1 );
shardDO.GetComponent.<AudioSource>().Play();
}




function MainGActive () {
mainG.SetActive(true);
}

function MainGDesactive () {
mainG.SetActive(false);
}

function CorneActive () {
Corne.SetActive(true);
}

function CorneDesactive () {
Corne.SetActive(false);
}

function DeuxMainsActive () {
mainG.SetActive(true);
MainD.SetActive(true);
}

function DeuxMainsDesactive () {
mainG.SetActive(false);
MainD.SetActive(false);
}

function OndeDeChocActive () {
MainGchoc.SetActive(true);
MainDchoc.SetActive(true);
}

function OndeDeChocDesactive () {
MainGchoc.SetActive(false);
MainDchoc.SetActive(false);
}