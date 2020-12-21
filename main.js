var pvKaezh = document.getElementById("pvp1");
var manaKaezh = document.getElementById("manap1");
var atkKaezh = 7;
var soinKaezh = 6;
var pvMonstre1 = document.getElementById("viem1");
var choixAttaque = document.getElementById("attaquer");
var choixSoin = document.getElementById("soigner");
var choixDefense = document.getElementById ("defendre")
var monstre1 = document.getElementById("imgMonstre");
var defenseKaezh = document.getElementById("scoredefenseKaezh");
var bouclier = document.getElementById("defense");

function attaque(pvMonstre, scoreAttaque, pvJoueur,defenseJoueur){
	pvMonstre.innerHTML = pvMonstre.innerHTML - scoreAttaque
	if (pvMonstre.innerHTML < 1) {
		alert ("Vous avez gagné ! ")
		document.getElementById("imgMonstre").style.visibility = "hidden"
	} else {
		attaqueMonstre(defenseJoueur, pvJoueur)
	}
}
	
function checkPv(pvJoueur){
	if(pvJoueur.innerHTML<15){
		pvJoueur.innerHTML = 15
	}
}

function soin(mana, heal, pvJoueur, defenseJoueur){
	if (mana.innerHTML >0){
		for(let i = 0; i< heal; i++){
			pvJoueur.innerHTML ++
		}
		attaqueMonstre(defenseJoueur, pvJoueur)
		mana.innerHTML = mana.innerHTML-1
	}else { 
		alert ("Vous n'avez pas assez de Mana ! Le monstre en profite pour attaquer !")
		attaqueMonstre(defenseJoueur, pvJoueur)
	}
}
function checkDefense(defense){
	if (defense = 0){
		defense.style.visibility = "hidden";
		bouclier.style.visibility = "hidden";
	}
}

function defense (defense, imgBouclier){
	defense.innerHTML ++
	defense.style.visibility = "visible";
	imgBouclier.style.visibility = "visible";
}
function attaqueMonstre (defenseJoueur, pvJoueur){
	if (defenseJoueur.innerHTML > 0){
		defenseJoueur.innerHTML = defenseJoueur.innerHTML - 1
	} else {
		pvJoueur.innerHTML = pvJoueur.innerHTML - 5
		if (pvJoueur.innerHTML < 1){
			alert ("Vous êtes mort")
		}
	}
}

monstre1.addEventListener("mouseover", () => {pvMonstre1.style.visibility = "visible";})
monstre1.addEventListener("mouseout", () => {pvMonstre1.style.visibility = "hidden";})

choixAttaque.onclick = function(){attaque(pvMonstre1, atkKaezh, pvKaezh,defenseKaezh)}
choixSoin.onclick = function(){soin(manaKaezh,soinKaezh, pvKaezh, defenseKaezh)}
choixDefense.onclick = function(){defense(defenseKaezh,bouclier)}