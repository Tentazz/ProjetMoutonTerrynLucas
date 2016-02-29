#pragma strict

var point1 : Transform;
var point2 : Transform;

var anim : Transform;

var stop : boolean = false;

var smoothTime : float = 1.0;
private var yVelocity = 1000.0;

function Start () {
	
	yield WaitForSeconds (10);
	stop = true;
}


function Update () {
	//var newPosition : float = Mathf.SmoothDamp(77.6, 7.4, yVelocity, smoothTime);
	//print (newPosition);
	//transform.position = Vector3(transform.position.x, newPosition, transform.position.z);
	if (stop == false){
		transform.position = anim.transform.position;
	}

}

