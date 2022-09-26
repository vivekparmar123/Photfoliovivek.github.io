
        var menubtn = document.getElementById("menubtn")
        var aside = document.getElementById("aside")
        var menu = document.getElementById("menu")
        


         function scroller() {
            if (aside.style.left == "-270px") {
                aside.style.left = "0";
                menu.src = "images/close.png";

            }

            else {
                aside.style.left = "-270px";
                homesection.style.left="0px"
                menu.src = "images/menu.png";

            }
        }

       

        function popup(){
            document.getElementById("A").style.display="none";
            document.getElementById("A").style.display="block";
            

        }

        setTimeout(popup,3000)


        
        function dismis(){
            document.getElementById("A").style.display="none";
        }
