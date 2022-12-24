var navLinks = document.getElementById("sideNav")
        var shown = false
        function toggleSideNav(){
            navLinks.style.left ="0"
            if(shown == true){
                navLinks.style.left ="-200px"
                shown = false
                return
            }
            shown = true
        }