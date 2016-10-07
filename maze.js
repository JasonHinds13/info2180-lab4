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

	//Exercize 3
	var end = document.querySelector("#end");

	end.onmouseover = function(){
		if(boundaries[0].className !== "boundary youlose"){
			alert("You Win");
		}
	}
};