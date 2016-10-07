window.onload = function(){

	//Exercize 1
	var boundary = document.getElementById("boundary1");

	boundary.onmouseover = function(){
		boundary.className += " youlose";
	};

	//Exercize 2
	/*var boundaries = document.querySelectorAll(".boundary");

	for(var i=0; i < boundaries.length; i++){
		boundaries[i].onmouseover = function(){
		    this.style.backgroundColor = "#ff8888";
		    //boundaries[i].setAttribute("class", "youlose");
		};
	}*/
};