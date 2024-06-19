let nomeDoPersonagem = document.getElementById('nome-personagem');
let imagemDoPersonagem = document.getElementById('imagem-personagem');
let descricaoDoPersonagem = document.getElementById('descricao-personagem');
let fundoDoCartao = document.getElementById('fundo');

function Franklin() {
    cartaoFranklin();
}

function cartaoFranklin() {
    nomeDoPersonagem.textContent = 'Franklin Clinton';
    imagemDoPersonagem.src = '../src/images/imagem-franklin.jpg';
    descricaoDoPersonagem.textContent = 'Franklin Clinton é um dos três protagonistas de GTA V. Um jovem gângster que está tentando crescer na vida, sua vida muda para sempre quando encontra Michael De Santa, durante um serviço que envolvia roubar seu carro. Ele começa a entrar e se aprofundar nas profundezas do crime, com escândalos políticos e governamentais o seguindo, enquanto é forçado a se afastar da própria gangue, as Famílias…';
    fundoDoCartao.style.backgroundImage = `url('../src/images/fundo-franklin.jpg')`;
}

function Luis() {
    cartaoLuis();
}

function cartaoLuis() {
    nomeDoPersonagem.textContent = 'Luis Fernando';
    imagemDoPersonagem.src = '../src/images/imagem-luis.jpg';
    descricaoDoPersonagem.textContent = 'Luis Fernando Lopez, é um personagem e protagonista do Grand Theft Auto IV: The Ballad of Gay Tony, é um homem de 25 anos, residente de Northwood. De descendência dominicana, Luis trabalha como guarda-costas de Tony Prince e como segurança das boates de Prince, Maisonette 9 e Hercules.';
    fundoDoCartao.style.backgroundImage = `url('../src/images/fundo-luis.jpg')`;
}

function Michael() {
    cartaoMichael();
}

function cartaoMichael() {
    nomeDoPersonagem.textContent = 'Michael de Santa';
    imagemDoPersonagem.src = '../src/images/imagem-michael.jpg';
    descricaoDoPersonagem.textContent = 'Michael De Santa, anteriormente chamado de Michael Townley, é um dos três protagonistas de Grand Theft Auto V, junto com Franklin Clinton e Trevor Philips. Michael é um ex-assaltante de banco e criminoso conhecido, que fingiu sua morte para se aposentar e viver uma vida pacífica com sua família em Los Santos. No entanto, ele sofre com seu relacionamento doentio com eles e logo é puxado de volta para sua vida criminosa, forçando-o a voltar aos velhos tempos. A história de Michael gira em torno de como seu estilo de vida aparentemente idílico e tranquilo é interrompido quando seus demônios do passado e erros moralmente comprometedores voltam para assombrá-lo.';
    fundoDoCartao.style.backgroundImage = `url('../src/images/fundo-michael.jpg')`;
}

function Niko() {
    cartaoNiko();
}

function cartaoNiko() {
    nomeDoPersonagem.textContent = 'Niko Bellic';
    imagemDoPersonagem.src = '../src/images/imagem-niko.jpg';
    descricaoDoPersonagem.textContent = 'Niko Bellic é um personagem da franquia de jogos eletrônicos Grand Theft Auto, da qual é o protagonista jogável do sexto principal jogo da série, Grand Theft Auto IV, de 2008. Ele é um ex-soldado da Guerra Civil Sérvia que se mudou para Liberty City para escapar de seu passado e viver o Sonho Americano.';
    fundoDoCartao.style.backgroundImage = `url('../src/images/fundo-niko.jpg')`;
}

function Tommy() {
    cartaoTommy();
}

function cartaoTommy() {
    nomeDoPersonagem.textContent = 'Tommy Vercetti';
    imagemDoPersonagem.src = '../src/images/imagem-tommy.jpg';
    descricaoDoPersonagem.textContent = 'Thomas "Tommy" Vercetti é um personagem fictício da franquia de jogos eletrônicos Grand Theft Auto, da qual é o protagonista jogável do quarto principal jogo da série, Grand Theft Auto: Vice City, de 2022. Sendo o primeiro protagonista da série capaz de falar, Tommy é dublado por Ray Liotta.';
    fundoDoCartao.style.backgroundImage = `url('../src/images/fundo-tommy.jpg')`;
}

function Trevor() {
    cartaoTrevor();
}

function cartaoTrevor() {
    nomeDoPersonagem.textContent = 'Trevor Philips';
    imagemDoPersonagem.src = '../src/images/imagem-trevor.jpg';
    descricaoDoPersonagem.textContent = 'Trevor Philips é um personagem da série Grand Theft Auto, aparecendo como um dos três protagonistas de Grand Theft Auto V, junto com Michael De Santa e FranklinClinton. Trevor é um criminoso conhecido e ex-ladrão de banco com um passado complicado, que mais tarde fundou sua própria empresa, Trevor Philips Enterprises, operando com tráfico de drogas e contrabando de armas no Blaine County. Ele é amigo de Ron Jakowski e Wade Hebert, que trabalham para sua empresa, bem como do melhor e mais antigo amigo de Michael, que ele acreditava estar morto por quase uma década depois que ele fingiu sua morte para se aposentar da vida criminosa. Trevor é conhecido por ter um comportamento geralmente imprudente e muito agressivo, mas ele também é muito leal e respeita profundamente todos aqueles próximos a ele. A história de Trevor se concentra em como suas ações têm consequências para ele e seus amigos, e para ele chegar a um acordo com as ações anteriores de Michael. Trevor mais tarde também torna-se amigo do terceiro protagonista, Franklin, tornando-se uma espécie de mentor para ele.';
    fundoDoCartao.style.backgroundImage = `url('../src/images/fundo-trevor.jpg')`;
}
    
window.addEventListener('load', function() {
    var audioElemento = document.getElementById('meuAudio');
    audioElemento.play();
    audioElemento.volume = 0.05;
})