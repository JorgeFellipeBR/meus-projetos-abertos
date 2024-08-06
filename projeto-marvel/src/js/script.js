let sinopsePersonagem = document.getElementById('sinopsePersonagem');
let nomePersonagem = document.getElementById('nomePersonagem')
let descricaoPersonagem = document.getElementById('descricaoPersonagem');
let capitaMarvel = document.getElementById('capitaMarvel');
let capitaoAmerica = document.getElementById('capitaoAmerica');
let ciclope = document.getElementById('ciclope');
let deadpool = document.getElementById('deadpool');
let feiticeiraEscarlate = document.getElementById('feiticeiraEscarlate');
let gambit = document.getElementById('gambit');
let jeanGrey = document.getElementById('jeanGrey');
let panteraNegra = document.getElementById('panteraNegra');
let tempestade = document.getElementById('tempestade');
let wolverine = document.getElementById('wolverine');
let audio = document.getElementById('audio');

capitaMarvel.addEventListener('click', function() {
    document.body.style.backgroundImage = `url('images/capita-marvel.jpg')`;
    sinopsePersonagem.classList.add('aparecer');
    sinopsePersonagem.classList.remove('sinopse-personagem');
    nomePersonagem.innerHTML = 'Capitã Marvel';
    descricaoPersonagem.innerHTML = "Em sua origem, Carol Danvers é descrita como um ser híbrido, ou seja, ela possui genes humanos e também de uma raça alienígena chamada Kree. A personagem surgiu pela primeira vez em 1968 em 'Marvel Super-Heroes #13' onde foi apresentada como um oficial de destaque da Força Aérea dos Estados Unidos.";
});

capitaoAmerica.addEventListener('click', function() {
    document.body.style.backgroundImage = `url('images/capitao-america.jpg')`;
    sinopsePersonagem.classList.add('aparecer');
    sinopsePersonagem.classList.remove('sinopse-personagem');
    nomePersonagem.innerHTML = 'Capitão América';
    descricaoPersonagem.innerHTML = "Capitão América é um super-herói de histórias em quadrinhos americanos publicado pela Marvel Comics. Criado por Joe Simon e Jack Kirby, o primeiro personagem apareceu em Captain America Comics # 1 da Timely Comics, antecessora da Marvel Comics.";
});

ciclope.addEventListener('click', function() {
    document.body.style.backgroundImage = `url('images/ciclope.jpg')`;
    sinopsePersonagem.classList.add('aparecer');
    sinopsePersonagem.classList.remove('sinopse-personagem');
    nomePersonagem.innerHTML = 'Ciclope';
    descricaoPersonagem.innerHTML = "Scott Summers, mais conhecido por Ciclope, é um personagem americano pertencente ao Universo Marvel Comics. Líder da equipe conhecida como X-Men, foi criado por Stan Lee e Jack Kirby. Sua estreia nos quadrinhos foi em Uncanny X-Men #1.";
});

deadpool.addEventListener('click', function() {
    document.body.style.backgroundImage = `url('images/deadpool.jpg')`;
    sinopsePersonagem.classList.add('aparecer');
    sinopsePersonagem.classList.remove('sinopse-personagem');
    nomePersonagem.innerHTML = 'Deadpool';
    descricaoPersonagem.innerHTML = "Deadpool (Wade Winston Wilson) é um personagem fictício do universo Marvel, que atua geralmente como anti-herói e ocasionalmente como vilão. Deadpool, cujo nome verdadeiro é Wade Winston Wilson, é um mercenário canadense marcado por ser falastrão, violento e principalmente por ser comediante e a partir disso ficou conhecido como o 'mercenário tagarela'. Tem também o fator de cura que o faz sobreviver aos piores ferimentos.";
});

feiticeiraEscarlate.addEventListener('click', function() {
    document.body.style.backgroundImage = `url('images/feiticeira-escarlate.jpg')`;
    sinopsePersonagem.classList.add('aparecer');
    sinopsePersonagem.classList.remove('sinopse-personagem');
    nomePersonagem.innerHTML = 'Feiticeira Escarlate';
    descricaoPersonagem.innerHTML = "Feiticeira Escarlate é uma super-heroína que aparece nos quadrinhos americanos publicados pela Marvel Comics. A personagem foi criada pelo roteirista Stan Lee e pelo desenhista Jack Kirby. Sua primeira aparição foi em 'X-Men' # 4 na Era de prata das histórias em quadrinhos americanas.";
});

gambit.addEventListener('click', function() {
    document.body.style.backgroundImage = `url('images/gambit.jpg')`;
    sinopsePersonagem.classList.add('aparecer');
    sinopsePersonagem.classList.remove('sinopse-personagem');
    nomePersonagem.innerHTML = 'Gambit';
    descricaoPersonagem.innerHTML = "Gambit, o alter ego de Remy Etienne LeBeau, é um personagem fictício da Marvel Comics e um integrante dos X-Men. Criado por Chris Claremont e Jim Lee, o personagem teve sua primeira aparição em Uncanny X-Men #266. Sendo um mutante de nivel beta, Gambit possui a habilidade de manipular energia cinética.";
});

jeanGrey.addEventListener('click', function() {
    document.body.style.backgroundImage = `url('images/jean-grey.jpg')`;
    sinopsePersonagem.classList.add('aparecer');
    sinopsePersonagem.classList.remove('sinopse-personagem');
    nomePersonagem.innerHTML = 'Jean Grey';
    descricaoPersonagem.innerHTML = "Jean Grey é uma personagem fictícia das histórias em quadrinhos publicadas pela Marvel Comics. Sua estreia nos quadrinhos foi em Uncanny X-Men #1 (1963). Ela não só é um dos membros originais que fundaram os X-Men, como também foi a primeira mulher a integrar a equipe, sendo hoje uma das personagens mais populares e poderosas dos quadrinhos.";
});

panteraNegra.addEventListener('click', function() {
    document.body.style.backgroundImage = `url('images/pantera-negra.jpg')`;
    sinopsePersonagem.classList.add('aparecer');
    sinopsePersonagem.classList.remove('sinopse-personagem');
    nomePersonagem.innerHTML = 'Pantera Negra';
    descricaoPersonagem.innerHTML = "Pantera Negra é um super-herói das histórias em quadrinhos publicadas pela Marvel Comics, cuja identidade secreta é a de T'Challa, rei de Wakanda, um reino fictício na África. O personagem foi criado pelo escritor e editor Stan Lee e pelo escritor e ilustrador Jack Kirby, aparecendo pela primeira vez em Fantastic Four nº 52 (julho de 1966) na Era de Prata das histórias em quadrinhos.";
});

tempestade.addEventListener('click', function() {
    document.body.style.backgroundImage = `url('images/tempestade.jpg')`;
    sinopsePersonagem.classList.add('aparecer');
    sinopsePersonagem.classList.remove('sinopse-personagem');
    nomePersonagem.innerHTML = 'Tempestade';
    descricaoPersonagem.innerHTML = "Tempestade é uma personagem fictícia de história em quadrinhos do Universo Marvel Comics, alter-ego de Ororo Munroe, e membro dos X-Men. Sua primeira aparição foi em Giant-Size X-Men #1. A personagem foi criado pelo roteirista Len Wein e pelo desenhista Dave Cockrum.";
});

wolverine.addEventListener('click', function() {
    document.body.style.backgroundImage = `url('images/wolverine.jpg')`;
    sinopsePersonagem.classList.add('aparecer');
    sinopsePersonagem.classList.remove('sinopse-personagem');
    nomePersonagem.innerHTML = 'Wolverine';
    descricaoPersonagem.innerHTML = "Wolverine (também conhecido com Logan) é um personagem fictício que aparece em quadrinhos americanos publicados pela Marvel Comics, principalmente em associação aos X-Men. Ele é um mutante que possui sentidos afiados, capacidades físicas aprimoradas, habilidade regenerativa poderosa conhecida como fator de cura e três garras ósseas retráteis ​​em cada mão.";
});

document.addEventListener('DOMContentLoaded', function() {
    audio.muted = true;
    audio.play();

    document.addEventListener('click', function() {
        audio.muted = false;
        audio.play();
        audio.volume = 0.05;
    });
});