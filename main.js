//Déclaration des variables 
var pvKaezh = document.getElementById("pvp1");
var manaKaezh = document.getElementById("manap1");
var atkKaezh = 6;
var soinKaezh = 8;
var pvMonstre1 = document.getElementById("viem1");
var nomMonstre1 = document.getElementById("nomm1")
var choixAttaque = document.getElementById("attaquer");
var choixSoin = document.getElementById("soigner");
var choixDefense = document.getElementById ("defendre")
var monstre1 = document.getElementById("imgMonstre");
var defenseKaezh = document.getElementById("scoredefenseKaezh");
var bouclier = document.getElementById("defense");
var chargeKaezh = document.getElementById("speciale");
var choixAttaqueSpeciale = document.getElementById("specialatck")

//Fonction d'attaque du joueur
function attaque(pvMonstre, scoreAttaque, pvJoueur,defenseJoueur,charge){
	pvMonstre.innerHTML = pvMonstre.innerHTML - scoreAttaque
	if (pvMonstre.innerHTML < 1) {
		alert ("Vous avez gagné ! ")
		document.getElementById("imgMonstre").style.visibility = "hidden"
	} else {
		attaqueMonstre(defenseJoueur, pvJoueur)
	}
	resetBoutons()
	choixAttaque.disabled = true;
	charge.innerHTML ++ 
}
//Fonction surveillant que les pv du joueur n'excèdent pas 15 (WIP)
function checkPv(pvJoueur){
	if(pvJoueur<15){
		pvJoueur.innerHTML = pvJoueur.innerHTML - 15
		for (let i = 0; i < 15; i++){
			pvJoueur.innerHTML ++
		}
	}
}
//Fonction pour voir si le personnage peux déclencher son attaque spéciale
function checkSpe(charge){
	if (charge.innerHTML <2 ){
		choixAttaqueSpeciale.style.visibility = "visible"
	} else { choixAttaqueSpeciale.style.visibility = "hidden"

	}
}
//Fonction pour se soigner 
function soin(mana, heal, pvJoueur, defenseJoueur,pvMonstre,charge){
	if (mana.innerHTML > 0){
		for(let i = 0; i< heal; i++){
			pvJoueur.innerHTML ++
		}
		if (pvMonstre.innerHTML>0){
		attaqueMonstre(defenseJoueur, pvJoueur)
	}
	mana.innerHTML = mana.innerHTML-1
	checkPv(pvJoueur);
			
	}else { 
		alert ("Vous n'avez pas assez de Mana ! Le monstre en profite pour attaquer !")
		attaqueMonstre(defenseJoueur, pvJoueur)
	}
	resetBoutons()
	choixSoin.disabled = true;
	charge.innerHTML ++
}
//Fonction pour cacher le bouclier quand il n'est plus actif (WIP)
function checkDefense(defense){
	if (defense = 0){
		defense.style.visibility = "hidden";
		bouclier.style.visibility = "hidden";
	}
}
// Fonction permettant de se défendre
function defense (defense, imgBouclier, pvJoueur,charge ){

		defense.innerHTML ++
		defense.innerHTML ++
		defense.style.visibility = "visible";
		imgBouclier.style.visibility = "visible";
		resetBoutons()
		choixDefense.disabled = true;
		attaqueMonstre(defense, pvJoueur)
		charge.innerHTML++
}
//Fonction d'attaque du monstre
function attaqueMonstre (defenseJoueur, pvJoueur){
	if (defenseJoueur.innerHTML > 0) {
		defenseJoueur.innerHTML = defenseJoueur.innerHTML - 1
		pvJoueur.innerHTML = pvJoueur.innerHTML - 2
		if (pvJoueur.innerHTML < 1){
			alert ("Vous êtes mort")
		}
	} else {
		pvJoueur.innerHTML = pvJoueur.innerHTML - 5
		if (pvJoueur.innerHTML < 1){
			alert ("Vous êtes mort")
		}
	}
//Fonction pour réactiver les boutons 
}
function resetBoutons(){
	choixAttaque.disabled = false;
	choixDefense.disabled = false;
	choixSoin.disabled = false;
}
//Vie du monstre quand on passe la souris dessus 
monstre1.addEventListener("mouseover", () => {pvMonstre1.style.visibility = "visible";})
monstre1.addEventListener("mouseout", () => {pvMonstre1.style.visibility = "hidden";})
monstre1.addEventListener("mouseover", () => {nomMonstre1.style.visibility = "visible";})
monstre1.addEventListener("mouseout", () => {nomMonstre1.style.visibility = "hidden";})

choixAttaque.onclick = function(){attaque(pvMonstre1, atkKaezh, pvKaezh,defenseKaezh, chargeKaezh), checkSpe(chargeKaezh)}
choixSoin.onclick = function(){soin(manaKaezh,soinKaezh, pvKaezh, defenseKaezh, pvMonstre1,chargeKaezh), checkSpe(chargeKaezh)}
choixDefense.onclick = function(){defense(defenseKaezh,bouclier, pvKaezh,chargeKaezh),checkSpe(chargeKaezh)}
choixAttaqueSpeciale.onclick = function(){attaqueSpeciale()}