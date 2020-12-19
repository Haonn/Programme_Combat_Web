var pvKaezh = document.getElementById("pvp1")
var atk = 6
var pvM1 = 20
var choixAttaque = document.getElementById("attaquer")

var combatEnCours = 1

function attaque(pvM1, atk){
	pvM1 = pvM1 - atk
}

function update (pvKaezh){
	pvp1.innerHTML = pvKaezh
}
choixAttaque.onclick = function(){attaque(pvM1, atk)}

