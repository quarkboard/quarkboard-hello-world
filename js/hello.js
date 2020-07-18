(function() {
    'use strict';

    const middleCenter = document.querySelector('#middle-center');
    middleCenter.innerHTML = '<h1>Hello, World</h1>';

    setTimeout(() => {
        const topBar = document.querySelector('#top-bar');
        const bottomBar = document.querySelector('#bottom-bar');

        topBar.style.transform = 'scaleY(1)';
        bottomBar.style.transform = 'scaleY(1)';
    }, 1000);
})();
