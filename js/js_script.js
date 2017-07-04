(function() {

			//HTML-objekter
	var universellUtforming, kodestandarder1, kodestandarder2, bilder1, bilder2, universellText;

	/* start init */
	var init = function() {

		/* start setHTMLObjects */
		var setHTMLObjects = function(){

			universellUtforming = document.getElementById("universellUtforming");
			kodestandarder1 = document.getElementById("kodestandarder1");
			kodestandarder2 = document.getElementById("kodestandarder2");
			bilder1 = document.getElementById("bilder1");
			bilder2 = document.getElementById("bilder2");
			universellText = document.getElementById("universellText");

		}(); /* slutt setHTMLObjects */

		/* start setEvents */
		var setEvents = function(){


			kodestandarder1.onmouseover = function(){
				flyttKodestandard1();
			}

			bilder1.onmouseover = function(){
				flyttBilder1();
			}

			kodestandarder2.onmouseover = function(){
				flyttKodestandard2();
			}

			bilder2.onmouseover = function(){
				flyttBilder2();
			}

			kodestandarder1.onmouseleave = function(){
				normal();
			}

			kodestandarder2.onmouseleave = function(){
				normal();
			}

			bilder1.onmouseleave = function(){
				normal();
			}

			bilder2.onmouseleave = function(){
				normal();
			}

			window.onload = function(){
				normal();
			}

		}(); /* slutt setEvents */
	}(); /* slutt init */


	function flyttKodestandard1(){

		universellText.innerHTML = "Alle elementer ved HTML-koder skal ha korrekte start- og avslutningstagger.";

	}

	function flyttKodestandard2(){

		universellText.innerHTML = "CSS-koden må være så korrekt som mulig.";

	}

	function flyttBilder1(){

		universellText.innerHTML = "Rent dekorative bilder skal ha en alt-attributt.";

	}

	function flyttBilder2(){

		universellText.innerHTML = "Dersom du skal presentere tekst i form av bilde bør du tilby et høytoppløst bilde for svaksynte.";

	}

	function normal(){
		universellText.innerHTML = "Universell Utforming handler om å lage ting som kan brukes av alle, uansett om du har en funksjonshemning eller ikke. Universell utforming gjør det enklere og bedre for alle, samt gjør det mulig for flere å bruke en løsning.";
		universellText.style.textAlign = "center";
		universellText.style.fontSize = "20px";
	}

}());