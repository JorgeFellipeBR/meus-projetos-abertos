// Filme favoritos
let reiLeao = document.getElementById('reiLeao');
let reiLeao2 = document.getElementById('reiLeao2');
let deadpool = document.getElementById('deadpool');
let deadpool2 = document.getElementById('deadpool2');
let deadpool3 = document.getElementById('deadpool3');
let ratatouille = document.getElementById('ratatouille');
let homemAranha2 = document.getElementById('homemAranha2');
let aranhaverso = document.getElementById('aranhaverso');
let aranhaverso2 = document.getElementById('aranhaverso2');
let panteraNegra = document.getElementById('panteraNegra');
let menu = document.getElementById('menu');
let pobresCriaturas = document.getElementById('pobresCriaturas');
let cisneNegro = document.getElementById('cisneNegro');
let vbsa = document.getElementById('vbsa');
let alita = document.getElementById('alita');
let sextaFeira = document.getElementById('sextaFeira');
let rivais = document.getElementById('rivais');
let eternos = document.getElementById('eternos');

// Séries favoritas
let heartstopper = document.getElementById('heartstopper');
let fleabag = document.getElementById('fleabag');
let entrevistaVampiro = document.getElementById('entrevistaVampiro');
let southPark = document.getElementById('southPark');
let xmen97 = document.getElementById('xmen97');
let jujutsuKaisen = document.getElementById('jujutsuKaisen');
let given = document.getElementById('given');
let incrivelGumball = document.getElementById('incrivelGumball');
let ben10 = document.getElementById('ben10');
let chris = document.getElementById('chris');

// Outros recursos
let cardSinopse = document.getElementById('cardSinopse');
let nomeFilme = document.getElementById('nomeFilme');
let iframe = document.getElementById('iframe');
let sinopseFilme = document.getElementById('sinopseFilme');
let fechar = document.getElementById('fechar');
let audio = document.getElementById('audio');

// Interações com as imagens
reiLeao.addEventListener('click', function() {
    cardSinopse.classList.add('aparecer');
    cardSinopse.classList.remove('cardSinopse');
    nomeFilme.innerHTML = 'Rei Leão';
    iframe.src = 'https://www.youtube.com/embed/qRbjMur9Xjo?si=XXej-XUByaVnSkdT';
    sinopseFilme.innerHTML = 'Este desenho animado da Disney mostra as aventuras de um leão jovem de nome Simba, o herdeiro de seu pai, Mufasa. O tio malvado de Simba, Scar, planeja roubar o trono de Mufasa atraindo pai e filho para uma emboscada. Simba consegue escapar e somente Mufasa morre. Com a ajuda de seus amigos,Timon e Pumba, ele reaparece como adulto para recuperar sua terra, que foi roubada por seu tio Scar.';
});

reiLeao2.addEventListener('click', function() {
    cardSinopse.classList.add('aparecer');
    cardSinopse.classList.remove('cardSinopse');
    nomeFilme.innerHTML = 'Rei Leão 2';
    iframe.src = 'https://www.youtube.com/embed/A-P7GNU52Eg?si=8CaD_kFxLYQ6Z0ED';
    sinopseFilme.innerHTML = 'Kiara, a filha de Simba e herdeira do reino, desobedece o pai quando ele tenta impedi-la de se meter em confusões. Entretanto, Kiara acaba conhecendo Kovu e, juntos, se envolvem em algumas situações complicadas.';
});

deadpool.addEventListener('click', function() {
    cardSinopse.classList.add('aparecer');
    cardSinopse.classList.remove('cardSinopse');
    nomeFilme.innerHTML = 'DeadPool';
    iframe.src = 'https://www.youtube.com/embed/Q9X-bAE8KTc?si=sXxMw5YJeJwB4YMU';
    sinopseFilme.innerHTML = 'Wade Wilson é um ex-agente especial que passou a trabalhar como mercenário. Seu mundo é destruído quando um cientista maligno o tortura e o desfigura completamente. O experimento brutal transforma Wade em Deadpool, que ganha poderes especiais de cura e uma força aprimorada. Com a ajuda de aliados poderosos e um senso de humor mais desbocado e cínico do que nunca, o irreverente anti-herói usa habilidades e métodos violentos para se vingar do homem que quase acabou com a sua vida.';
});

deadpool2.addEventListener('click', function() {
    cardSinopse.classList.add('aparecer');
    cardSinopse.classList.remove('cardSinopse');
    nomeFilme.innerHTML = 'DeadPool 2';
    iframe.src = 'https://www.youtube.com/embed/Z_TC1T8MS9g?si=HkXM06tDMX7H0ucv';
    sinopseFilme.innerHTML = 'O supersoldado Cable vem do futuro com a missão de assassinar o jovem mutante Russel e o mercenário Deadpool precisa aprender o que é ser herói de verdade para salvá-lo. Para isso, ele recruta seu velho amigo Colossus e forma o novo grupo X-Force, sempre com o apoio do fiel escudeiro Dopinder.';
});

deadpool3.addEventListener('click', function() {
    cardSinopse.classList.add('aparecer');
    cardSinopse.classList.remove('cardSinopse');
    nomeFilme.innerHTML = 'DeadPool e Wolverine';
    iframe.src = 'https://www.youtube.com/embed/dEbe0rS4Z2A?si=DR8CfwbSdt9Irco8';
    sinopseFilme.innerHTML = 'Wolverine está se recuperando quando cruza seu caminho com Deadpool. Juntos, eles formam uma equipe e enfrentam um inimigo em comum.';
});

ratatouille.addEventListener('click', function() {
    cardSinopse.classList.add('aparecer');
    cardSinopse.classList.remove('cardSinopse');
    nomeFilme.innerHTML = 'Ratatouille';
    iframe.src = 'https://www.youtube.com/embed/FRYs81phWZo?si=4rhczdBF3sck1S5y';
    sinopseFilme.innerHTML = 'Remy reside em Paris e possui um sofisticado paladar. Seu sonho é se tornar um chef de cozinha e desfrutar as diversas obras da arte culinária. O único problema é que ele é um rato. Quando se acha dentro de um dos restaurantes mais finos de Paris, Remy decide transformar seu sonho em realidade.';
});

homemAranha2.addEventListener('click', function() {
    cardSinopse.classList.add('aparecer');
    cardSinopse.classList.remove('cardSinopse');
    nomeFilme.innerHTML = 'Homem-Aranha 2';
    iframe.src = 'https://www.youtube.com/embed/fRQ67zp1dlg?si=pfiyNpf2LgYaqrkj';
    sinopseFilme.innerHTML = 'O Dr. Otto Octavius é transformado em Doutor Octopus quando uma falha em uma experiência de fusão nuclear resulta em uma explosão que mata sua esposa. Ele culpa o Homem-Aranha pelo acidente e deseja vingança. Enquanto isso, o alter ego do herói, Peter Parker, perde seus poderes. Para complicar as coisas, o seu melhor amigo odeia o Homem-Aranha e sua amada fica noiva.';
});

aranhaverso.addEventListener('click', function() {
    cardSinopse.classList.add('aparecer');
    cardSinopse.classList.remove('cardSinopse');
    nomeFilme.innerHTML = 'Homem-Aranha no Aranhaverso';
    iframe.src = 'https://www.youtube.com/embed/SS6ABPkfmBE?si=RY2lzNpB8ieIVT6L';
    sinopseFilme.innerHTML = 'Após ser atingido por uma teia radioativa, Miles Morales, um jovem negro do Brooklyn, se torna o Homem-Aranha, inspirado no legado do já falecido Peter Parker. Entretanto, ao visitar o túmulo de seu ídolo em uma noite chuvosa, ele é surpreendido com a presença do próprio Peter, vestindo o traje do herói por baixo de um sobretudo. A surpresa fica ainda maior quando Miles descobre que ele veio de uma dimensão paralela, assim como outras versões do Homem-Aranha.';
});

aranhaverso2.addEventListener('click', function() {
    cardSinopse.classList.add('aparecer');
    cardSinopse.classList.remove('cardSinopse');
    nomeFilme.innerHTML = 'Homem-Aranha: Através do Aranhaverso';
    iframe.src = 'https://www.youtube.com/embed/uhkDkurK0Zg?si=4yVLTqSyvCfL_DIC';
    sinopseFilme.innerHTML = 'Depois de se reunir com Gwen Stacy, Homem-Aranha é jogado no multiverso. Lá, o super-herói aracnídeo encontra uma numerosa equipe encarregada de proteger sua própria existência.';
});

panteraNegra.addEventListener('click', function() {
    cardSinopse.classList.add('aparecer');
    cardSinopse.classList.remove('cardSinopse');
    nomeFilme.innerHTML = 'Pantera Negra';
    iframe.src = 'https://www.youtube.com/embed/wL4a4MafSjQ?si=t01h58UAULcIpA5q';
    sinopseFilme.innerHTML = 'Em Pantera Negra, após a morte do rei TChaka, o príncipe TChalla retorna a Wakanda para a cerimônia de coroação. Nela são reunidas as cinco tribos que compõem o reino, sendo que uma delas, os Jabari, não apoia o atual governo. TChalla logo recebe o apoio de Okoye, a chefe da guarda de Wakanda, da irmã Shuri, que coordena a área tecnológica do reino, e também de Nakia, a grande paixão do atual Pantera Negra, que não quer se tornar rainha. Juntos, eles estão à procura de Ulysses Klaue, que roubou de Wakanda um punhado de vibranium, alguns anos atrás.';
});

menu.addEventListener('click', function() {
    cardSinopse.classList.add('aparecer');
    cardSinopse.classList.remove('cardSinopse');
    nomeFilme.innerHTML = 'O Menu';
    iframe.src = 'https://www.youtube.com/embed/lfbYsIIFYaw?si=8npznh1mjEFviizL';
    sinopseFilme.innerHTML = 'Um jovem casal visita um restaurante exclusivo em uma ilha remota onde o aclamado chef prepara um delicioso menu e algumas surpresas chocantes.';
});

pobresCriaturas.addEventListener('click', function() {
    cardSinopse.classList.add('aparecer');
    cardSinopse.classList.remove('cardSinopse');
    nomeFilme.innerHTML = 'Pobres Criaturas';
    iframe.src = 'https://www.youtube.com/embed/9DEOJkmZLd8?si=uSHXf6JQW3DCqiJz';
    sinopseFilme.innerHTML = 'A jovem Bella Baxter é trazida de volta à vida pelo cientista Dr. Godwin Baxter. Querendo ver mais do mundo, ela foge com um advogado e viaja pelos continentes. Livre dos preconceitos de sua época, Bella exige igualdade e libertação.';
});

cisneNegro.addEventListener('click', function() {
    cardSinopse.classList.add('aparecer');
    cardSinopse.classList.remove('cardSinopse');
    nomeFilme.innerHTML = 'Cisne Negro';
    iframe.src = 'https://www.youtube.com/embed/wXIm2ORApss?si=AqOomrznKHvTtEPF';
    sinopseFilme.innerHTML = 'Uma bailarina perde a compreensão da realidade quando uma sensual bailarina ameaça sua posição de dançarina protagonista em "O Lago dos Cisnes".';
});

vbsa.addEventListener('click', function() {
    cardSinopse.classList.add('aparecer');
    cardSinopse.classList.remove('cardSinopse');
    nomeFilme.innerHTML = 'Vermelho, Branco e Sangue Azul';
    iframe.src = 'https://www.youtube.com/embed/64e2oJteP7A?si=JpMr8gP55NXFr1-s';
    sinopseFilme.innerHTML = 'Alex, o filho da presidenta dos Estados Unidos, se envolve em uma confusão com o príncipe britânico Henry, o que gera uma crise internacional de imagem. Os dois são grandes rivais, mas fingem que são amigos pelo bem de seus países. Porém, essa relação fria começa a derreter e dá lugar a um sentimento intenso e novo para os dois.';
});

alita.addEventListener('click', function() {
    cardSinopse.classList.add('aparecer');
    cardSinopse.classList.remove('cardSinopse');
    nomeFilme.innerHTML = 'Alita: Anjo de Combate';
    iframe.src = 'https://www.youtube.com/embed/UgrCecj-XNU?si=yUQTnE9AYg-bghnD';
    sinopseFilme.innerHTML = 'Abandonada em um ferro-velho de Iron City, a ciborgue Alita é encontrada pelo cientista Dyson Ido. Revitalizada, ela acorda sem memória e reconhecimento do mundo em que se encontra. Determinada a conhecer seu passado e explorar suas habilidades surpreendentes de luta, Alita se torna uma poderosa caçadora de recompensas, combatendo forças mortais.';
});

sextaFeira.addEventListener('click', function() {
    cardSinopse.classList.add('aparecer');
    cardSinopse.classList.remove('cardSinopse');
    nomeFilme.innerHTML = 'Sexta-Feira Muito Louca';
    iframe.src = 'https://www.youtube.com/embed/kOSRUA-zhmA?si=NnkrFGGBZ9u00IQW';
    sinopseFilme.innerHTML = 'Tess é uma mãe que luta demais para se entender com a filha adolescente rebelde, Anna, de 15 anos. Decididas a acabar com as brigas, elas repentinamente trocam de corpos após comerem biscoitos da sorte em um restaurante chinês. Agora, cada uma precisa aprender a lidar com a vida da outra, com as confusões crescendo ainda mais pelo fato de Tess estar de casamento marcado.';
});

rivais.addEventListener('click', function() {
    cardSinopse.classList.add('aparecer');
    cardSinopse.classList.remove('cardSinopse');
    nomeFilme.innerHTML = 'Rivais';
    iframe.src = 'https://www.youtube.com/embed/5bpSCdI7KV4?si=U1cjxiJPqaRRkF3q';
    sinopseFilme.innerHTML = 'Um campeão de tênis do Grand Slam se vê do outro lado da rede do outrora promissor e agora esgotado Patrick, seu ex-melhor amigo e ex-namorado de sua esposa.';
});

eternos.addEventListener('click', function() {
    cardSinopse.classList.add('aparecer');
    cardSinopse.classList.remove('cardSinopse');
    nomeFilme.innerHTML = 'Eternos';
    iframe.src = 'https://www.youtube.com/embed/PJza3ZaFeAU?si=j8k-RSXh_BP8xf21';
    sinopseFilme.innerHTML = 'Eternos são seres super dotados com características como imortalidade e manipulação de energia cósmica, e eles são frutos de experiências fracassadas de seu próprio criador, o Celestial Arishem, desde a criação da Terra há milhões de anos. Destinados a salvar o mundo e a raça humana dos Deviantes, seres também criados pelo Celestial, os Eternos então derrotam tais seres e seguem caminhos diferentes, esperando que seu criador volte com boas novas. Mas após séculos e milênios aguardando ele, o grupo de heróis imortais agora precisa se preparar para uma nova ameaça, e precisam lutar contra os Deviantes novamente para garantir a segurança da humanidade. Muitos conflitos internos podem surgir, entre o amor que sentem pela Terra e a necessidade de protegê-la acima de tudo, e a fé naquilo que está acima deles.';
});


// Fechar card com sinopse do filme
fechar.addEventListener('click', function() {
    cardSinopse.classList.remove('aparecer');
    cardSinopse.classList.add('cardSinopse');
    iframe.src = null;
});