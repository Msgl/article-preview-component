const  shareBtn = document.querySelector('.share-btn');
const  shareContainer = document.querySelector('.share-container');
const  svgSharePath = document.querySelector('.svg-share-path');

shareBtn.addEventListener('click',function() {
    if (shareContainer.style.display === 'flex') {
        shareContainer.style.display = 'none';
        shareBtn.style.backgroundColor = '';
        svgSharePath.style.fill = '';
       
    } else {
        shareContainer.style.display = 'flex';
        shareBtn.style.backgroundColor = 'hsl(214, 17%, 51%)';
        svgSharePath.style.fill = 'white';
    }
})