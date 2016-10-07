window.onload = function(){
	//Exercize 2
	var boundaries = document.querySelectorAll(".boundary");

    //Function to change all walls to class youlose
	var changeAll = function(){
		for(var i=0; i < boundaries.length; i++){
		    boundaries[i].className += " youlose";
	    }
	}

	for(var i=0; i < boundaries.length; i++){
		boundaries[i].onmouseover = function(){
		    //this.className += " youlose";
		    changeAll();
		};
	}
};