let generoCorrida = document.getElementById('genero-corrida');
let generoFutebol = document.getElementById('genero-futebol');
let generoLuta = document.getElementById('genero-luta');
let generoRpg = document.getElementById('genero-rpg');
let generoSoulslike = document.getElementById('genero-soulslike');
let generoTiro = document.getElementById('genero-tiro');
let imagem = document.getElementById('imagem');
let descricaoJogo = document.getElementById('descricao-jogo');

generoCorrida.addEventListener('click', function() {
    imagem.src = 'genero-corrida.jpg';
    descricaoJogo.innerHTML = 'Forza Horizon 5 é um jogo eletrônico de corrida desenvolvido pela Playground Games em associação com Turn 10 Studios, e publicado pela Xbox Game Studios. É o quinto jogo da série Forza Horizon e o décimo segundo título principal da franquia Forza. O jogo se passa em uma representação ficcional do México.';
});

generoFutebol.addEventListener('click', function() {
    imagem.src = 'genero-futebol.jpg';
    descricaoJogo.innerHTML = 'EA Sports FC 24 é um videojogo de futebol desenvolvido pela EA Canadá e EA Roménia, e publicado pela EA Sports. Este jogo marca o início da série EA Sports FC após a conclusão da parceria da EA com a FIFA, sendo o 31º título lançado da franquia ao todo.';
});

generoLuta.addEventListener('click', function() {
    imagem.src = 'genero-luta.jpg';
    descricaoJogo.innerHTML = 'Mortal Kombat 1 é um jogo eletrônico de luta desenvolvido pela NetherRealm Studios e publicado pela Warner Bros.. Foi lançado em 19 de setembro de 2023 para PlayStation 5, Xbox Series X/S, Nintendo Switch e Windows. Mortal Kombat 1 é um reboot da série Mortal Kombat.';
});

generoRpg.addEventListener('click', function() {
    imagem.src = 'genero-rpg.jpg';
    descricaoJogo.innerHTML = 'Diablo IV é um RPG de ação desenvolvido pela empresa Blizzard Entertainment, sendo o quarto título da série Diablo. Em 1 de novembro de 2019, durante a Blizzcon, o jogo foi oficialmente anunciado para PC e plataformas.';
});

generoSoulslike.addEventListener('click', function() {
    imagem.src = 'genero-soulslike.jpg';
    descricaoJogo.innerHTML = 'Elden Ring é um jogo eletrônico de RPG de ação em terceira pessoa, desenvolvido pela FromSoftware e publicado pela Bandai Namco Entertainment. O jogo é um projeto colaborativo entre o diretor Hidetaka Miyazaki e o romancista de fantasia George R. R. Martin.';
});

generoTiro.addEventListener('click', function() {
    imagem.src = 'genero-tiro.jpg';
    descricaoJogo.innerHTML = 'Call of Duty é uma série de jogos eletrônicos de tiro em primeira pessoa e franquia de mídia publicada pela Activision. O primeiro título da série foi lançado em 2003 exclusivamente para computadores. Mais tarde a série se expandiu para os mais variados sistemas, consoles, portáteis e smartphones.';
});