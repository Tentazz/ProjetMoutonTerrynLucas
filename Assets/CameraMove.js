#pragma strict

var x : float;
var y : float;


function Start () {

}

function Update () {

x = Input.mousePosition.x;
y = Input.mousePosition.y;



transform.localPosition = new Vector3((((-Screen.width/2 + x)/Screen.width)*3),(((-Screen.height/2 + y)/Screen.height)*1),0);
//print(Input.mousePosition);
}