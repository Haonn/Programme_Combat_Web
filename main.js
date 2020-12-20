var pvKaezh = document.getElementById("pvp1");
var atkKaezh = 6;
var soinKaezh = 7;
var pvMonstre1 = document.getElementById("viem1");
var choixAttaque = document.getElementById("attaquer");
var choixSoin = document.getElementById("soigner");
var monstre1 = document.getElementById("imgMonstre");

function attaque(pvMonstre, scoreAttaque, pvJoueur){
	pvMonstre.innerHTML = pvMonstre.innerHTML - scoreAttaque
	if (pvMonstre.innerHTML < 1) {
		alert ("Vous avez gagné ! ")
		document.getElementById("imgMonstre").style.visibility = "hidden"
	} else {
		pvJoueur.innerHTML = pvJoueur.innerHTML - 5
		if (pvJoueur.innerHTML < 1){
			alert ("Vous êtes mort")
		}
	}
	
}
function soin(pvJoueur){
	pvJoueur.innerHTML = pvJoueur.innerHTML + 7

}
monstre1.addEventListener("mouseover", () => {pvMonstre1.style.visibility = "visible";})
monstre1.addEventListener("mouseout", () => {pvMonstre1.style.visibility = "hidden";})

choixAttaque.onclick = function(){attaque(pvMonstre1, atkKaezh, pvKaezh)}
choixSoin.onclick = function(){soin(pvKaezh)}