alert("préparez-vous au combat !");
let combatGagne = false;
let combatPerdu = false ;
let p1 = [15,false];

var pvMonstre = document.getElementById("pvMonstre");

var attaque = document.getElementById('attaquer');
var defense = document.getElementById('defendre');
var soin = document.getElementById('soigner');
function attaque (){
	pvMontre.innerHTML = pvMonstre.innerHTML - 6;
}
function defense (){
	p1[2] = true;
}
function soin (){
	p1[1]=+ 4;
}

while ("combatGagne"!== true & "combatPerdu "!== true ){
	
	attaque.onclick = function(){attaque(p1);}
	
	defense.onclick = function(){defense(p1);}

	soin.onclick = function(){soin(p1);}

	if (pvMonstre = 0){
		combatGagne = true;
	}
	if (p1[2] = false ){
		p1[1] = p1[1]-5;
	}
	if (p1[1] = 0){
		combatPerdu = true;
	}
	if (p1[1] < 0){
		combatPerdu = true;
	}

}
if (combatPerdu = true){
	alert("Vous avez perdu");
}
if (combatGagne = true){
	alert("vous avez gagné !");
}
