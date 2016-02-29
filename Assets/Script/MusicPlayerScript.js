#pragma strict

var changeTime : boolean = false;
var change : boolean = false;

var audioLength : float;

var mus1 : AudioClip ;
var mus2 : AudioClip ;
var mus3 : AudioClip ;
var mus4 : AudioClip ;
var mus5 : AudioClip ;
var mus6 : AudioClip ;
var mus7 : AudioClip ;
var mus8 : AudioClip ;
var mus9 : AudioClip ;
var mus10 : AudioClip ;
var mus11 : AudioClip ;
var mus12 : AudioClip ;
var mus13 : AudioClip ;
var mus14 : AudioClip ;
var mus15 : AudioClip ;

var count : int = 1;


function Start () {
var audio : AudioSource = GetComponent.<AudioSource>();
//PlayingMusic = "mus" + count;
audio.clip = mus1;
audio.Play();
WaitToPlay();
changeTime = false;
change = false;
}

function WaitToPlay () {
	yield WaitForSeconds (audioLength);
	//changeTime = true;
	PlayMusic();
	//WaitToPlay2();
}

/*function WaitToPlay2 () {
	//changeTime = false;
	WaitToPlay();
}*/

function PlayMusic (){
	
	if(change == true){
		//change = false;
		count++;

						if (count == 1) {
						GetComponent.<AudioSource>().clip = mus1;
						GetComponent.<AudioSource>().loop = true;
						audioLength = mus1.length;
						change = false;
						WaitToPlay();
					}

					if (count == 2) {
						GetComponent.<AudioSource>().clip = mus2;
						GetComponent.<AudioSource>().loop = true;
						audioLength = mus2.length;
						change = false;
						WaitToPlay();
						Go();
					}

					if (count == 3) {
						GetComponent.<AudioSource>().clip = mus3;
						GetComponent.<AudioSource>().loop = true;
						audioLength = mus3.length;
						WaitToPlay();
						change = false;
					}

					if (count == 4) {
						GetComponent.<AudioSource>().clip = mus4;
						GetComponent.<AudioSource>().loop = true;
						audioLength = mus4.length;
						WaitToPlay();
						change = false;

					}

					if (count == 5) {
						/*GetComponent.<AudioSource>().clip = mus5;
						GetComponent.<AudioSource>().loop = true;
						audioLength = mus5.length;
						change = false;
						Go();*/
						PlayMusic();
					}

					if (count == 6) {
						GetComponent.<AudioSource>().clip = mus6;
						GetComponent.<AudioSource>().loop = true;
						audioLength = mus6.length;
						change = false;
						WaitToPlay();
						Go();
					}

					if (count == 7) {
						GetComponent.<AudioSource>().clip = mus7;
						GetComponent.<AudioSource>().loop = true;
						audioLength = mus7.length;
						change = false;
						WaitToPlay();
						Go();
					}

					if (count == 8) {
						GetComponent.<AudioSource>().clip = mus8;
						GetComponent.<AudioSource>().loop = true;
						audioLength = mus8.length;
						change = false;
						WaitToPlay();
					}

					if (count == 9) {
						GetComponent.<AudioSource>().clip = mus9;
						GetComponent.<AudioSource>().loop = true;
						audioLength = mus9.length;
						change = false;
						WaitToPlay();
						Go();
					}

					if (count == 10) {
						/*GetComponent.<AudioSource>().clip = mus10;
						GetComponent.<AudioSource>().loop = true;
						audioLength = mus10.length;
						change = false;
						Go();*/
						PlayMusic();

					}

					if (count == 11) {
						/*GetComponent.<AudioSource>().clip = mus11;
						GetComponent.<AudioSource>().loop = true;
						audioLength = mus11.length;
						change = false;*/
						PlayMusic();

					}

					if (count == 12) {
						GetComponent.<AudioSource>().clip = mus12;
						GetComponent.<AudioSource>().loop = true;
						audioLength = mus12.length;
						change = false;
						WaitToPlay();
						Go();
					}

					if (count == 13) {
						GetComponent.<AudioSource>().clip = mus13;
						GetComponent.<AudioSource>().loop = true;
						audioLength = mus13.length;
						change = false;
						WaitToPlay();
						Go();
					}

					if (count == 14) {
						GetComponent.<AudioSource>().clip = mus14;
						GetComponent.<AudioSource>().loop = true;
						audioLength = mus14.length;
						change = false;
						WaitToPlay();
					}

					if (count == 15) {
						GetComponent.<AudioSource>().clip = mus15;
						GetComponent.<AudioSource>().loop = false;
						audioLength = mus15.length;
						change = false;
						WaitToPlay();
					}

		//var audio : AudioSource = GetComponent.<AudioSource>();

		print ("change is false");
		//Wait();
		print(count);

		GetComponent.<AudioSource>().Play();
	}
}


function Go (){
yield WaitForSeconds (2);
change = true;
} 



function Update () {
	if(Input.anyKeyDown) {
		//change = true;
		print ("change is true");
	}
}

function Play (count2 : int){
count = count2;
PlayMusic();
}

function PlayDirect (count3 : int){
count = count3-1;
change = true;
PlayMusic();
}


