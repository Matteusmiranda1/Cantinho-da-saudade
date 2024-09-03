document.getElementById("nameForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const nome = document.getElementById("nome").value.trim();
    if (nome) {
        mostrarFotos(nome);
    } else {
        alert("Por favor, digite um nome.");
    }
});

function mostrarFotos(nome) {
    const album = document.getElementById("album");
    const albumTitle = document.getElementById("albumTitle");
    const fotosContainer = document.getElementById("fotosContainer");

    const fotos = {
        "João": ["fotos/joao1.jpg", "fotos/joao2.jpg"],
        "Matteus": ["fotos/matteus1.jpg", "fotos/matteus2.jpg"]
        // Adicione mais nomes e fotos conforme necessário
    };

    const nomeNormalizado = nome.charAt(0).toUpperCase() + nome.slice(1).toLowerCase();
    
    albumTitle.textContent = `Fotos de ${nome}`;
    fotosContainer.innerHTML = ""; // Limpa fotos anteriores

    if (fotos[nomeNormalizado]) {
        fotos[nomeNormalizado].forEach(foto => {
            const imgElement = document.createElement("img");
            imgElement.src = foto;
            imgElement.alt = `Foto de ${nome}`;
            fotosContainer.appendChild(imgElement);
        });
        album.style.display = "block";
    } else {
        albumTitle.textContent = "Nome não encontrado.";
    }
}
