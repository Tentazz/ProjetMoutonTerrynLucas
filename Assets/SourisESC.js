#pragma strict

function Start () {
 Cursor.visible = false;
}

function Update () {
		if (Input.GetKeyDown ("escape"))
			Application.Quit();
	}