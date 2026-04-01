const infoBar = document.getElementById('info');
const shareButton = document.getElementById('share-btn');

shareButton.addEventListener('click', () => {
    infoBar.classList.toggle('show-menu');
})