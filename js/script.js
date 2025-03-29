// Captura os elementos corretamente
const ligar = document.getElementById("ligar");
const desligar = document.getElementById("desligar");
const volumeup = document.getElementById("volumeup");
const volumedown = document.getElementById("volumedown");
const canal1 = document.getElementById("canal1");
const canal3 = document.getElementById("canal3");
const canal5 = document.getElementById("canal5");
const canal7 = document.getElementById("canal7");
const canal11 = document.getElementById("canal11");
const controleatotal = document.getElementById("controleatotal");
const volumeDisplay = document.getElementById("volume-display"); // Adiciona o display de volume

// Variável para acompanhar o estado da TV
let tvLigada = false; // Inicialmente a TV está desligada

// Event Listeners corretos
ligar.addEventListener('click', ligartv);
desligar.addEventListener('click', desligartv);
volumeup.addEventListener('click', aumentarVolume);
volumedown.addEventListener('click', diminuirVolume);
canal1.addEventListener('click', () => mudarCanal(1));
canal3.addEventListener('click', () => mudarCanal(3));
canal5.addEventListener('click', () => mudarCanal(5));
canal7.addEventListener('click', () => mudarCanal(7));
canal11.addEventListener('click', () => mudarCanal(11));

// Função para ligar a TV
function ligartv() {
    tvLigada = true; // Marca que a TV foi ligada
    controleatotal.src = "images/branco.jpg"; // Altere a imagem da TV ligada
    console.log("TV Ligada");
}

// Função para desligar a TV
function desligartv() {
    tvLigada = false; // Marca que a TV foi desligada
    controleatotal.src = "images/preto.png"; // Volta a imagem para desligada
    console.log("TV Desligada");
}

// Funções de volume
let volume = 0; // Volume inicial
function aumentarVolume() {
    if (tvLigada) { // Só aumenta o volume se a TV estiver ligada
        if (volume < 100) {
            volume += 10;
            console.log(`Volume: ${volume}`);
            volumeDisplay.textContent = `Volume: ${volume}`; // Atualiza o display de volume
        }
    } else {
        alert("A TV está desligada! Ligue a TV primeiro.");
    }
}

function diminuirVolume() {
    if (tvLigada) { // Só diminui o volume se a TV estiver ligada
        if (volume > 0) {
            volume -= 10;
            console.log(`Volume: ${volume}`);
            volumeDisplay.textContent = `Volume: ${volume}`; // Atualiza o display de volume
        }
    } else {
        alert("A TV está desligada! Ligue a TV primeiro.");
    }
}

// Função para mudar de canal
function mudarCanal(canal) {
    if (!tvLigada) { // Verifica se a TV está ligada
        alert("A TV está desligada! Ligue a TV primeiro.");
        return; // Se a TV estiver desligada, não faz nada
    }

    console.log(`Mudando para o Canal ${canal}`);
    
    // Mudanças de imagem baseadas no canal
    switch (canal) {
        case 1:
            controleatotal.src = "images/duna.jpg"; // Imagem do Canal 1
            break;
        case 3:
            controleatotal.src = "images/mine.jpg"; // Imagem do Canal 3
            break;
        case 5:
            controleatotal.src = "images/rdr.jpg"; // Imagem do Canal 5
            break;
        case 7:
            controleatotal.src = "images/The-Last-of-Us™-Part-I_20240528191104.jpg"; // Imagem do Canal 7
            break;
        case 11:
            controleatotal.src = "images/ss_e6babaab52581f81df91e50768cee6a9334ef6ec.1920x1080.jpg"; // Imagem do Canal 11
            break;
        default:
            console.log("Canal inválido");
            break;
    }
}
