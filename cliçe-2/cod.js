var titleElement = clip.querySelector('h2');
if (titleElement) {
    var title = titleElement.innerText.toLowerCase();
    // Restante do código para verificar o título e mostrar/ocultar o vídeo
}
var searchText = document.getElementById('search-input').value.trim().toLowerCase();
var title = titleElement.innerText.trim().toLowerCase();
if (searchText === '') {
    clips.forEach(function(clip) {
        clip.style.display = 'block'; // ou aplicar uma classe para mostrar
    });
    return; // Sair da função para evitar a iteração abaixo
}
var clips = document.querySelectorAll('.clip');
for (var i = 0; i < clips.length; i++) {
    var clip = clips[i];
    // restante do código
}
