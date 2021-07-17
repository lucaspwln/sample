function menu()
{
    var links = document.getElementsByClassName("nav-link");
    var disp = links[0].style.display;
    if(disp==""||disp=="none"){
        for (var i = 0; i < links.length; i++) {
           display(links[i]);            
        }
    }
    else{
        for (var i = 0; i < links.length; i++) {
            hide(links[i]);            
         }
    }
}

function display(e){
    e.style.display="block";
}

function hide(e){
    e.style.display="none";
}