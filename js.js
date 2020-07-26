var d = 0;
var mb = 0;
var mbGlass = 0;
var mbMustache = 0;
var mbBeard = 0;
var mbTattoo = 0;

function darkmode(){
    
    if(d == 0){
        document.getElementById('dark_bg').style.backgroundColor = '#333';
        document.getElementById('dark_but').style.backgroundColor = '#d6e2ee';
        document.getElementById('dark_but_inside').style.top = '-30px';
		document.getElementById('me_glass').style.top = '0px';
        d = 1;
    }else{
        document.getElementById('dark_bg').style.backgroundColor = '#d6e2ee';
        document.getElementById('dark_but').style.backgroundColor = '#333';
        document.getElementById('dark_but_inside').style.top = '0px';
		document.getElementById('me_glass').style.top = '80px';
        d = 0;
    } 
    
}

function mebig(mb){
    
    if(mb == 1){
        if(mbGlass == 0){
            document.getElementById('me_big_glass').style.display = 'block'; 
            mbGlass = 1;
        }else{
            document.getElementById('me_big_glass').style.display = 'none'; 
            mbGlass = 0;
        }
    }
    
    if(mb == 2){
        if(mbMustache == 0){
            document.getElementById('me_big_mustache').style.display = 'block'; 
            mbMustache = 1;
        }else{
            document.getElementById('me_big_mustache').style.display = 'none'; 
            mbMustache = 0;
        }
    }
    
    if(mb == 3){
        if(mbBeard == 0){
            document.getElementById('me_big_beard').style.display = 'block';
            mbBeard = 1;
        }else{
            document.getElementById('me_big_beard').style.display = 'none';
            mbBeard = 0;
        }
    }
    
    if(mb == 4){
        if(mbTattoo == 0){
            document.getElementById('me_big_tattoo').style.display = 'block'; 
            mbTattoo = 1;
        }else{
            document.getElementById('me_big_tattoo').style.display = 'none'; 
            mbTattoo = 0;
        }
    }
}
