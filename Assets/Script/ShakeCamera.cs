using UnityEngine; using System.Collections;

public class ShakeCamera : MonoBehaviour { 

	public bool Shaking; 
	private float ShakeDecay; 
	private float ShakeIntensity;
	private Vector3 OriginalPos;
	private Quaternion OriginalRot;
	public float Intensity = 0.05f;
	private bool reset = false;

	private float x; 
	private float y; 
	private float z; 
	private float w; 

	void Start()
	{
		Shaking = false;
		//OriginalRot = transform.rotation;
		OriginalRot = transform.localRotation ;

	}
	
	
	// Update is called once per frame
	void Update ()
	{
		if(ShakeIntensity > 0)
		{

			/*transform.rotation = new Quaternion(OriginalRot.x + Random.Range(-ShakeIntensity, ShakeIntensity)*.2f,
			                                    OriginalRot.y + Random.Range(-ShakeIntensity, ShakeIntensity)*.2f,
			                                    OriginalRot.z + Random.Range(-ShakeIntensity, ShakeIntensity)*.2f,
			                                    OriginalRot.w + Random.Range(-ShakeIntensity, ShakeIntensity)*.2f);*/
			transform.localRotation = new Quaternion(OriginalRot.x + Random.Range(-ShakeIntensity, ShakeIntensity)*.2f,
				OriginalRot.y + Random.Range(-ShakeIntensity, ShakeIntensity)*.2f,
				OriginalRot.z + Random.Range(-ShakeIntensity, ShakeIntensity)*.2f,
				OriginalRot.w + Random.Range(-ShakeIntensity, ShakeIntensity)*.2f);
			
			ShakeIntensity -= ShakeDecay;
			Reset ();
		}

		else if (Shaking)
		{
			Shaking = false;
		}

		if (reset == true) {
			/*x = 0 - transform.rotation.x;
			y = 0 - transform.rotation.x;
			z = 0 - transform.rotation.x;
			w = 0 - transform.rotation.x;
			transform.rotation = new Quaternion(transform.rotation.x + (x*1000),
				transform.rotation.y + (y*1000),
				transform.rotation.z + (z*1000),
				transform.rotation.w + (w*1000));*/
			
		}

	}


	/*void OnGUI() {
		
		if (GUI.Button(new Rect(10, 200, 50, 30), "Shake"))
			DoShake(Intensity);
	} */



	public void Reset()
	{
		
		StartCoroutine(Example());
	}

	IEnumerator Example() {
		yield return new WaitForSeconds(1);
		//transform.rotation = new Quaternion (0, 0, 0, 0);
		reset = true;
		yield return new WaitForSeconds(1);
		reset = false;

	}


	public void DoShake(float Intensity)
	{


		
		ShakeIntensity = Intensity;
		ShakeDecay = 0.001f;
		Shaking = true;
	}
	
}