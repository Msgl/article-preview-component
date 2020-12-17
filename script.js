const  shareBtn = document.querySelector('.share-btn');
const  shareContainer = document.querySelector('.share-container');

shareBtn.addEventListener('click',function() {
    if(shareContainer.style.display === 'flex') {
        shareContainer.style.display = 'none';
    }   else {
        shareContainer.style.display = 'flex';
    }
})