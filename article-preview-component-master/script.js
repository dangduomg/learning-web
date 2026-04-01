const infoBar = document.getElementById('info');
const shareButton = document.getElementById('share-btn');
const authorInfo = document.getElementById('author');
const shareMenu = document.getElementById('share-menu');

const infoBarOrgBgColor = infoBar.style.backgroundColor;
const infoBarOrgPaddingBlock = infoBar.style.paddingBlock;
const shareButtonOrgBgColor = shareButton.style.backgroundColor;
const authorInfoOrgDisplay = authorInfo.style.display;
const shareMenuOrgDisplay = shareMenu.style.display;

// 'author' or 'menu'
let mode = 'author';

shareButton.addEventListener('click', () => {
    switch (mode) {
        case 'author':
            switchToMenu();
            break;
        case 'menu':
            switchToAuthor();
            break;
        default:
            throw new Error('invalid mode');
    }
})

function switchToMenu() {
    mode = 'menu';
    infoBar.style.paddingBlock = '1em';
    infoBar.style.backgroundColor = 'var(--very-dark-grayish-blue)';
    shareButton.style.backgroundColor = 'var(--desat-dark-blue)';
    authorInfo.style.display = 'none';
    shareMenu.style.display = 'flex';
}

function switchToAuthor() {
    mode = 'author';
    infoBar.style.paddingBlock = infoBarOrgPaddingBlock;
    infoBar.style.backgroundColor = infoBarOrgBgColor;
    shareButton.style.backgroundColor = shareButtonOrgBgColor;
    authorInfo.style.display = authorInfoOrgDisplay;
    shareMenu.style.display = shareMenuOrgDisplay;
}