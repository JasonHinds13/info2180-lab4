window.onload = function(){
	var win = null;

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
		    win = false;
	    }
	};

	for(var i=0; i < boundaries.length; i++){
		boundaries[i].onmouseover = function(){
		    if (win != true){ changeAll(); }
		};
	}

	//Exercize 3
	var end = document.querySelector("#end");

	end.onmouseover = function(){
		if(boundaries[0].className !== "boundary youlose"){
			status.innerHTML = "You Win!";
			win = true;
		}
	};

	//Exercize 4
	var start = document.querySelector("#start");

	var reset = function(){
		for(var i=0; i < boundaries.length-1; i++){
			//This ignores boundary example, hence the -1
		    boundaries[i].className = "boundary";
	    }
	    status.innerHTML = 'Move your mouse over the "S" to begin.';
	    win = null;
	};

	start.onclick = function(){
		reset();
		cheatCheck();
	};

	//Exercize 6
	var cheatCheck = function(){
		window.onmousemove = function(event){
		    var maze = document.querySelector("#maze");
		    if((event.clientX < maze.offsetLeft) && win != true){
		        changeAll();
		    }
	    };
	};

	start.onmouseover = function(){
		cheatCheck();
	};
};