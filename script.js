document.getElementById('music-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const artist = document.getElementById('artist').value;
    const genre = document.getElementById('genre').value;
    const releaseDate = document.getElementById('releaseDate').value;
    const albumCover = document.getElementById('albumCover').files[0];
    const musicFile = document.getElementById('musicFile').files[0];

    const readerCover = new FileReader();
    readerCover.readAsDataURL(albumCover);
    readerCover.onload = function() {
        const coverUrl = readerCover.result;

        const readerMusic = new FileReader();
        readerMusic.readAsDataURL(musicFile);
        readerMusic.onload = function() {
            const musicUrl = readerMusic.result;

            const uniqueCode = generateUniqueCode();

            const musicItem = document.createElement('div');
            musicItem.className = 'music-item';
            musicItem.innerHTML = `
                <h3>${title}</h3>
                <p>Artista: ${artist}</p>
                <p>Gênero: ${genre}</p>
                <p>Data de Lançamento: ${releaseDate}</p>
                <img src="${coverUrl}" alt="Capa do Álbum" width="100">
                <audio controls>
                    <source src="${musicUrl}" type="audio/mpeg">
                    Seu navegador não suporta o elemento de áudio.
                </audio>
                <p>Código Único: ${uniqueCode}</p>
            `;

            document.getElementById('musics').appendChild(musicItem);

            document.getElementById('music-form').reset();
        };
    };
});

function generateUniqueCode() {
    return 'xxxx-xxxx-xxxx-xxxx-xxxx'.replace(/x/g, function() {
        return Math.floor(Math.random() * 16).toString(16);
    });
}

