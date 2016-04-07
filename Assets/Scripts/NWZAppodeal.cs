using UnityEngine;
using System.Collections;
using AppodealAds.Unity.Api;
using AppodealAds.Unity.Common;

public class NWZAppodeal : MonoBehaviour {

	// Use this for initialization
	public void ShowAd(){
		
		if(PlayerPrefs.HasKey("showads")){
			if(PlayerPrefs.GetString("showads") != "false"){

				if(Appodeal.isLoaded(Appodeal.NON_SKIPPABLE_VIDEO)){
					Appodeal.show(Appodeal.NON_SKIPPABLE_VIDEO);
				} else {
					Appodeal.show(Appodeal.INTERSTITIAL);
				}
				
			} else {
				print("no ads has been purchased, skipping advert");
			}
		} else {
			if(Appodeal.isLoaded(Appodeal.NON_SKIPPABLE_VIDEO)){
				Appodeal.show(Appodeal.NON_SKIPPABLE_VIDEO);
			} else {
				Appodeal.show(Appodeal.INTERSTITIAL);
			}
		}

	}

	public void DisableAds(){
		Appodeal.hide(Appodeal.BANNER);
	}

	void Start () {
		#if UNITY_ANDROID
			string appKey = "a6a21a3e6f7bdde903c3527e1ed2289045afb564d45a1f26";
	    #elif UNITY_IPHONE
			string appKey = "1d5aae85dd5fb3bd4709160f61f6d2db62f6609ea984c725";
	    #else
			string appKey = "UNKNOWN_PLATFORM";
	    #endif
		Appodeal.initialize(appKey, Appodeal.INTERSTITIAL | Appodeal.NON_SKIPPABLE_VIDEO | Appodeal.BANNER);
		Appodeal.show(Appodeal.BANNER_BOTTOM);
		Appodeal.show(Appodeal.INTERSTITIAL);
	}
	
	// Update is called once per frame
	void Update () {
	
	}
}
