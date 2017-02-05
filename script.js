// function that builds a grid in the "container"
function createGrid(x) {
    for (var rows = 0; rows < x; rows++) {
        for (var columns = 0; columns < x; columns++) {
            $("#container").append("<div class='unit'></div>");
        };
    };
    $(".unit").width(480/x);
    $(".unit").height(480/x);
};

// function that clears the grid
function clearGrid(){
    $(".unit").remove();
};  

function again(){
	$(".unit").css("background-color","white");
}

// function that prompts the user to select the number of boxes in a new grid
// the function then also creates that new grid
function refreshGrid(){
    var z = prompt("How many boxes per side?");
    clearGrid();
    createGrid(z);
};


// create a 16x16 grid when the page loads
$(document).ready(function() {
    createGrid(16);
    $(".unit").mouseover(function() {
        $(this).css("background-color", "black");
        });
//Create a new grid asking the number of squares
    $(".newGrid").click(function() {
        refreshGrid();
        $(".unit").mouseover(function() {
        $(this).css("background-color", "black");
        });
    });

 //No idea how erases without getting the margins smaller
    $(".eraser").click(function(){
    	$(".unit").mouseover(function(){
    		var r= Math.floor((Math.random() * 255) + 1);
    		var g= Math.floor((Math.random() * 255) + 1);
    		var b= Math.floor((Math.random() * 255) + 1);
    		$(this).css("background-color","rgb(r,g,b)");
    	});
    });

//Uses black color
    $(".normal").click(function(){
    	$(".unit").mouseover(function(){
    	$(this).css("background-color","black")
    	});
    });

//Toggles on the grid
    $(".toggleOn").click(function(){
    	$('.unit').css({"outline": "0.5px solid black"});
    	});

//Toggles off the grid
    $(".toggleOff").click(function(){
    	$(".unit").css("outline","none");
    	});

//Uses random colors
    $(".rainbow").click(function(){
    	var op=0
    	$(".unit").mouseover(function(){
    	var newcol = '#' + ("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6);
		/* Above generates a random hex value - full disclosure, I have very little idea how it works but promise I will someday learn */
		$(this).css("background-color",newcol);
    	});
    });

//delete the current grid without asking for size
    $(".reset").click(function(){
    	again();
    });
});
