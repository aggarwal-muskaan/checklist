
		var enterbtn=document.getElementById("enter");
        var input=document.getElementById("second");
		var ol=document.querySelector("#todos");
        var ul=document.querySelector("#completed");
        var items=document.getElementsByTagName("li");

         function inputlength()
        {
			if(input.value.trim() === "")
			return 0;
			else
        	return input.value.length;
        }

                  function createlist()
                {
                  	var li= document.createElement("li");
                   // const button = document.createElement("button");
                  	li.appendChild(document.createTextNode(input.value));
                    //li.appendChild(button);
        	        ol.appendChild(li);
                	input.value="";

                	li.addEventListener("dblclick",imp);
                	   function imp()
                	  {
                	  	li.classList.toggle("tap");
                	  }

                	var cross=document.createElement("button");
                	cross.appendChild(document.createTextNode("X"));
                	li.appendChild(cross);
                     
                
                	var leftbtn=document.createElement("input");
                    leftbtn.type="checkbox";
                    // leftbtn.value="checked";
                	li.appendChild(leftbtn);    

                	
                	function deleted()
                	{
                		li.classList.add("delete");
                	}
                     cross.addEventListener("click",deleted);
                	 
                	function checked()
                	{
                		if(leftbtn.checked===true){
                             ol.removeChild(li);
                             ul.appendChild(li);
                		}
                		else{
                			ul.removeChild(li);
                			ol.appendChild(li);
                		}
                	}
                    leftbtn.addEventListener("click",checked);
                }
           
            
        function additems()
        {
        	if(inputlength()!=0)
				createlist();
		}
		

          enterbtn.addEventListener("click",additems);
			
		  
        function enteritems(event)
        {
        	if(inputlength()>0 && event.which===13)
        		createlist();
        }
             input.addEventListener("keypress",enteritems);
 	