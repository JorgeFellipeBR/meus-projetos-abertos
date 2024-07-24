let botao = document.getElementById('botao');
let campoInput = document.getElementById('texto');
let capaJogo = document.getElementById('capa-jogo');
let nomeJogo = document.getElementById('nome-jogo');

botao.addEventListener('click', function() {
    fetch('jogosZerados.json')
     .then(response => {
        return response.json();
     })
     .then(data => {
        let campoInputValor = campoInput.value;
        let converterCampoInput = campoInputValor.toLowerCase();

        if (converterCampoInput === data.assassinsCreedIv) {
            capaJogo.src = 'images/assassins-creed4.jpg';
            nomeJogo.innerHTML = "Assassin's Creed Black Flag";
            campoInput.value = '';
        } else if (converterCampoInput === data.assassinsCreedRogue) {
         capaJogo.src = 'images/assassins-creedRogue.jpg';
         nomeJogo.innerHTML = "Assassin's Creed Rogue";
         campoInput.value = '';
        } else if (converterCampoInput === data.alanWake) {
         capaJogo.src = 'images/alan-wake.jpg';
         nomeJogo.innerHTML = "Alan Wake";
         campoInput.value = '';
        } else if (converterCampoInput === data.callOfDutyBo) {
         capaJogo.src = 'images/cod-blackOps2.jpg';
         nomeJogo.innerHTML = "Call of Duty Black Ops 2";
         campoInput.value = '';
        } else if (converterCampoInput === data.gtaiv) {
         capaJogo.src = 'images/gta4.jpg';
         nomeJogo.innerHTML = "GTA 4 (Melhor GTA da franquia)";
         campoInput.value = '';
        } else if (converterCampoInput === data.gtav) {
         capaJogo.src = 'images/gta5.jpg';
         nomeJogo.innerHTML = "GTA 5";
         campoInput.value = '';
        } else if (converterCampoInput === data.gtaSa) {
         capaJogo.src = 'images/gtasa.jpg';
         nomeJogo.innerHTML = "GTA San Andreas";
         campoInput.value = '';
        } else if (converterCampoInput === data.nfsHp) {
         capaJogo.src = 'images/nfs-hotPursuit.jpg';
         nomeJogo.innerHTML = "Need for Speed Hot Pursuit";
         campoInput.value = '';
        } else if (converterCampoInput === data.diablo) {
         capaJogo.src = 'images/diablo3.jpg';
         nomeJogo.innerHTML = "Diablo 3";
         campoInput.value = '';
        } else if (converterCampoInput === data.tombRaider) {
         capaJogo.src = 'images/tomb-raider.jpg';
         nomeJogo.innerHTML = "Tomb Raider";
         campoInput.value = '';
        } else if (converterCampoInput === data.bioshock) {
         capaJogo.src = 'images/bioshock-infinite.jpg';
         nomeJogo.innerHTML = "Bioshock Infinite";
         campoInput.value = '';
        } else if (converterCampoInput === data.redDeadRedemption) {
         capaJogo.src = 'images/red-dead.jpg';
         nomeJogo.innerHTML = "Red Dead Redemption";
         campoInput.value = '';
        } else if (converterCampoInput === data.watchDogs) {
         capaJogo.src = 'images/watch-dogs.jpg';
         nomeJogo.innerHTML = "Watch Dogs";
         campoInput.value = '';
        }  else if (converterCampoInput === data.farCry) {
         capaJogo.src = 'images/far-cry3.jpg';
         nomeJogo.innerHTML = "Far Cry 3";
         campoInput.value = '';
        } else if (converterCampoInput === data.farCryIv) {
         capaJogo.src = 'images/far-cry4.jpg';
         nomeJogo.innerHTML = "Far Cry 4";
         campoInput.value = '';
        } else if (converterCampoInput === data.zeldaMinish) {
         capaJogo.src = 'images/zelda-minish.jpg';
         nomeJogo.innerHTML = "The Legend of Zelda The Minish Cap";
         campoInput.value = '';
        } else if (converterCampoInput === data.batman) {
         capaJogo.src = 'images/batman-arkhamCity.jpg';
         nomeJogo.innerHTML = "Batman Arkham City";
         campoInput.value = '';
        }  else if (converterCampoInput === data.deadpool) {
         capaJogo.src = 'images/deadpool.jpg';
         nomeJogo.innerHTML = "Deadpool";
         campoInput.value = '';
        } else if (converterCampoInput === data.tasm) {
         capaJogo.src = 'images/tasm1.jpg';
         nomeJogo.innerHTML = "The Amazing Spider-man";
         campoInput.value = '';
        } else if (converterCampoInput === data.tasmII) {
         capaJogo.src = 'images/tasm2.jpg';
         nomeJogo.innerHTML = "The Amazing Spider-man 2";
         campoInput.value = '';
        } else if (converterCampoInput === data.legoMarvel) {
         capaJogo.src = 'images/lego-marvel.jpg';
         nomeJogo.innerHTML = "Lego Marvel Super Heroes";
         campoInput.value = '';
        } else if (converterCampoInput === data.legoStarWars) {
         capaJogo.src = 'images/lego-starWars.jpg';
         nomeJogo.innerHTML = "Lego Star Wars The Force Awakens";
         campoInput.value = '';
        } else if (converterCampoInput === data.starWars) {
         capaJogo.src = 'images/star-warsUnleashed2.jpg';
         nomeJogo.innerHTML = "Star Wars Unleashed 2";
         campoInput.value = '';
        } else if (converterCampoInput === data.forzaHorizon) {
         capaJogo.src = 'images/forza-horizon1.jpg';
         nomeJogo.innerHTML = "Forza Horizon";
         campoInput.value = '';
        } else if (converterCampoInput === data.forzaHorizonII) {
         capaJogo.src = 'images/forza-horizon2.jpg';
         nomeJogo.innerHTML = "Forza Horizon 2";
         campoInput.value = '';
        } else if (converterCampoInput === data.sleepingDogs) {
         capaJogo.src = 'images/sleeping-Dogs.jpg';
         nomeJogo.innerHTML = "Sleeping Dogs";
         campoInput.value = '';
        } else if (converterCampoInput === data.mortalKombat) {
         capaJogo.src = 'images/mortal-kombat9.jpg';
         nomeJogo.innerHTML = "Mortal Kombat 9";
         campoInput.value = '';
        } else if (converterCampoInput === data.injustice) {
         capaJogo.src = 'images/injustice-godsAmongUs.jpg';
         nomeJogo.innerHTML = "Injustice Gods Among Us";
         campoInput.value = '';
        } else if (converterCampoInput === data.kof) {
         capaJogo.src = 'images/kof2002.jpg';
         nomeJogo.innerHTML = "The King of Fighters 2002";
         campoInput.value = '';
        }  else if (converterCampoInput === data.ben10) {
         capaJogo.src = 'images/ben10-protectorOfEarth.jpg';
         nomeJogo.innerHTML = "Ben 10 Protector of Earth";
         campoInput.value = '';
        } else {
         campoInput.value = '';
         capaJogo.src = 'images/imagem-base.jpg';
         nomeJogo.innerHTML = 'Esse jogo o Jorge não zerou!';
         nomeJogo.style.color = 'red';
        };
     })
     .catch(error => {
        console.log('Erro encontrado!', error);
     })
});