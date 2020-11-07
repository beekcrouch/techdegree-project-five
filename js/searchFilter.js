
function filter() {
    
    var input, ul, li, a, i;
        input = document.getElementById("search");
        addEventListener("keyup");
        filter = input.value.toUpperCase();
        ul = document.getElementById("gallery");
        li = ul.getElementsByTagName("li");
        
        for (i = 0 ; i < li.length ; i++){
            a = li[i].getElementsByTagName("a")[0];

            if(a.innerHTML.toUpperCase().indexOf(filterValue) > -1){
                li[i].style.display = "";
                
            } else {
                li[i].style.display = "none";
            }
        }
    }

    console.log(search);