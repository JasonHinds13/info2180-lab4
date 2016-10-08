window.onload = function(){
	var win = null;
	var sec = 0; //track time in seconds
	var first = true; //first play where you hover to start

	//timer function
	var timer = function(){
		var interval = setInterval(function(){
		    if (win == null){
			    sec++;
			    status.innerHTML = "Time Taken: "+sec+" seconds";
		    }
		    else{
		    	clearInterval(interval);
		    }
		}, 1000);
	};

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
	    }
	    status.innerHTML = "You Lose! "+ "("+sec+" seconds)";
		win = false;
		first = false;
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
			status.innerHTML = "You Win! "+"("+sec+" seconds)";
			win = true;
			first = false;
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
	    sec = 0;
	    win = null;
	};

	start.onclick = function(){
		reset();
		cheatCheck();
		timer();
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
		if(first == true){ timer(); }
	};
};