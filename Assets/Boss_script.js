#pragma strict

//@script RequireComponent(NavMeshAgent)


public var bossAnimator : Animator; 
var musicPlayer : GameObject;

public var VieBoss : int;

private var player : Transform;
private var boss : GameObject;
private var AIBoss : MonoBehaviour;

public var myTarget : Transform;
public var distance : float;

public var fury : boolean = false;
public var hit : boolean = false; 

public var currentTurnPoint : GameObject;
public var numberofPointChange : int = 0;


var cooldownAttack : boolean = true;
var aPortee : boolean = false;
var activated : boolean = false;


var point1 : GameObject;
var point2 : GameObject;
var point3 : GameObject;
var point4 : GameObject;
var point5 : GameObject;
var point6 : GameObject;



function Start () {
	boss = GameObject.Find("Boss");
	player = GameObject.Find("Player").transform;


	//Damage(10);
	//target = player;
	//AIBoss = boss.GetComponent.<UnityStandardAssets.Characters.ThirdPerson.AICharacterControl>();
	//myTarget = AIBoss.target;
	//AIBoss.enabled = false;
	//Destroy (GetComponent.<Rigidbody>());
	cooldownAttack = true;
	//myTarget = player;
}

function Update () {

distance = Vector3.Distance (player.position, gameObject.transform.position);
//print (distance);

		if (activated == false) {
		boss.SendMessage ("SetTarget",boss.transform );
		}

		else {
				if (hit == true) {
				//Turn();

				myTarget = currentTurnPoint.transform;
				boss.SendMessage ("SetTarget",myTarget );
				}

				if (cooldownAttack == true && hit == false && distance <= 20){
				Attack();
				cooldownAttack = false;
				}

				if (VieBoss <= 20){
				boss.SendMessage ("SetTarget",myTarget );
				bossAnimator.SetFloat ("Weak", -0.306);
				}

				else {
				boss.SendMessage ("SetTarget",myTarget );
				} 
		}




}

function OnTriggerEnter (other : Collider) {

		

		if (other.tag == "Player" && hit == false) {
			aPortee = true;
			if (cooldownAttack == true){

			Attack();
			cooldownAttack = false;
			}

		}



		if (other.tag == "Turnpoint") {

		//int.Parse(other.name)

			var turnpointvalue : int = int.Parse(other.name);
			turnpointvalue = turnpointvalue + 1;

			if (turnpointvalue >= 7) {
			turnpointvalue = 1;
			}

			currentTurnPoint = GameObject.Find(turnpointvalue.ToString());
			myTarget = currentTurnPoint.transform;
			numberofPointChange = numberofPointChange + 1;

			if (numberofPointChange >= 2) {

			numberofPointChange = 0;
			hit = false;
			myTarget = player;
			bossAnimator.SetTrigger ("Corne");
			}
		}
	}

function OnTriggerExit (other : Collider) {

		if (other.tag == "Player" && hit == false) {
			aPortee = false;
			}
	}


function Attack() {
	
	var r : int =  Random.Range(0,100);

	var i : int = 0;

	if (r <= 30) {
		bossAnimator.SetTrigger ("Corne");
		i = i + 1;

	if (fury == false){
			Fatigue();
		}

		if (i == 3){
			Fatigue();
			i = 0;
		}

		else {
			cooldownAttack = true;
		}
		yield WaitForSeconds (5);
	}

	if (r >= 31 && r <= 70) {
		bossAnimator.SetTrigger ("main");
		if (fury == false){
			Fatigue();
		}

		if (i == 3){
			Fatigue();
			i = 0;
		}

		else {
			cooldownAttack = true;
		}
		yield WaitForSeconds (5);


	}

	if (r >= 71 && r <= 100) {
		bossAnimator.SetTrigger ("Poings");

		if (fury == false){
			Fatigue();
		}

		if (i == 3){
			Fatigue();
			i = 0;
		}

		else {
		cooldownAttack = true;
		}

		yield WaitForSeconds (5);


	}


}

function Fatigue() {
	print("plusfatigué");
	myTarget = boss.transform;
	//boss.SendMessage ("SetTarget",boss.transform );
	yield WaitForSeconds (8);
	myTarget = player;
	cooldownAttack = true;
	print("plusfatigué");
	//boss.SendMessage ("SetTarget",player );
}

function Turn() {
	//jump en arriere
	//get le turnpoint le plus proche
	//
	
}



function Damage (damagepoint : int) {

	VieBoss = VieBoss - damagepoint;
	bossAnimator.SetTrigger ("Poings");
	GetComponent.<AudioSource>().Play();

	if (VieBoss == 40){
	musicPlayer.SendMessage ("PlayDirect",5);
	}


	if (VieBoss == 20){
	musicPlayer.SendMessage ("PlayDirect",9);
	}

	if (VieBoss == 0){
	musicPlayer.SendMessage ("PlayDirect",15);
	}

	yield WaitForSeconds (3);
	bossAnimator.SetTrigger ("JumpArriere");
	yield WaitForSeconds (2);
	hit = true;
	FindNearestPoint();
}



function Activate () {
	activated = true;
}

function FindNearestPoint () {
	var distance1 = Vector3.Distance (transform.position, point1.transform.position );
	var distance2 = Vector3.Distance (transform.position, point2.transform.position );
	var distance3 = Vector3.Distance (transform.position, point3.transform.position );
	var distance4 = Vector3.Distance (transform.position, point4.transform.position );
	var distance5 = Vector3.Distance (transform.position, point5.transform.position );
	var distance6 = Vector3.Distance (transform.position, point6.transform.position );

		if (distance1 <= distance2 && distance1 <= distance3 && distance1 <= distance4 && distance1 <= distance5 && distance1 <= distance6){
			currentTurnPoint = point1;
		}

		if (distance2 <= distance1 && distance2 <= distance3 && distance2 <= distance4 && distance2 <= distance5 && distance2 <= distance6){
			currentTurnPoint = point2;
		}

		if (distance3 <= distance2 && distance3 <= distance1 && distance3 <= distance4 && distance3 <= distance5 && distance3 <= distance6){
			currentTurnPoint = point3;
		}

		if (distance4 <= distance2 && distance4 <= distance3 && distance4 <= distance1 && distance4 <= distance5 && distance4 <= distance6){
			currentTurnPoint = point4;
		}

		if (distance5 <= distance2 && distance5 <= distance3 && distance5 <= distance4 && distance5 <= distance1 && distance5 <= distance6){
			currentTurnPoint = point5;
		}

		if (distance6 <= distance2 && distance6 <= distance3 && distance6 <= distance4 && distance6 <= distance5 && distance6 <= distance1){
			currentTurnPoint = point6;
		}
}