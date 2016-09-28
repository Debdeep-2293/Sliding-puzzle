$(document).ready(function(){
$(".SlidingPuzzle").append('<li class="Tile Tile9" value=""></li>');

var upval, downval, leftval, rightval, txt, bVal;

$(".Tile").click(function(){
    txt = $(this).text();
								
                                            
    bVal = $(this).attr('class').split(' ')[1].slice(4);		
      					
  
 
    if(txt != ""){
        if((bVal != 1) && (bVal != 2) &&(bVal != 3)){
            upval = eval(eval(bVal)-eval(3));           
            var upTxt = $(".Tile"+upval).text();            
            if(upTxt == ""){            
                
		$(".Tile"+upval).text(txt);
		$(this).text("");
            }
        }
        if((bVal != 7) && (bVal != 8) &&(bVal != 9)){
            downval = eval(eval(bVal)+ eval(3)); 
		
            var downTxt = $(".Tile"+downval).text();					
		
            if(downTxt == ""){          
                
		$(".Tile"+downval).text(txt);
		$(this).text("");
            }
        }
        if((bVal != 1) && (bVal != 4) &&(bVal != 7)){
            leftval = eval(eval(bVal)-eval(1));         
            var leftTxt = $(".Tile"+leftval).text();
            if(leftTxt == ""){          
               
		$(".Tile"+leftval).text(txt);
		
		$(this).text("");
            }
        }
        if((bVal != 3) && (bVal != 6) &&(bVal != 9)){
            rightval = eval(eval(bVal)+ eval(1)); 						
		          
            var rightTxt = $(".Tile"+rightval).text();    
										      
            if(rightTxt == ""){    
		
		$(".Tile"+rightval).text(txt);
		$(this).text("");

		}
        }
        var one = $(".Tile1").text();
        var two = $(".Tile2").text();
        var three = $(".Tile3").text();
        var four = $(".Tile4").text();
        var five = $(".Tile5").text();
        var six = $(".Tile6").text();
        var seven = $(".Tile7").text();
        var eight = $(".Tile8").text();
        var nine = $(".Tile9").text();
		
		
        if((one == "1")&&(two == "2")&&(three == "3")&&(four == "4")&&(five == "5")&&(six == "6")&&(seven == "7")&&(eight == "8")&&(nine == "")){           
			
            alert("Congratulations!");
			$(".Tile").unbind('click'); 
        }               
    }   
});

});
