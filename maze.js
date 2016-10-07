window.onload = function(){
	//Exercize 2
	var boundaries = document.querySelectorAll(".boundary");

	//Exercize 5
	var status = document.querySelector("#status");

    //Function to change all walls to class youlose
	var changeAll = function(){
		for(var i=0; i < boundaries.length; i++){
			if(boundaries[i].className == "boundary"){
		        boundaries[i].className += " youlose";
		    }
		    status.innerHTML = "You Lose!";
	    }
	}

	for(var i=0; i < boundaries.length; i++){
		boundaries[i].onmouseover = function(){
		    changeAll();
		};
	}

	//Exercize 3
	var end = document.querySelector("#end");

	end.onmouseover = function(){
		if(boundaries[0].className !== "boundary youlose"){
			status.innerHTML = "You Win!";
		}
	}

	//Exercize 4
	var start = document.querySelector("#start");

	var reset = function(){
		for(var i=0; i < boundaries.length; i++){
		    boundaries[i].className = "boundary";
	    }
	    status.innerHTML = 'Move your mouse over the "S" to begin.';
	}

	start.onclick = function(){
		reset();
	}
};