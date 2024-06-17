
    document.body.onload = function() {
        let loaderFirst = document.querySelector('#loader-first');
        let loaderSecond = document.querySelector('#loader-second');
        loaderFirst.style.display = 'none';
        loaderSecond.play();

        setTimeout(function () {
            let preloader = document.querySelector('.preloader');
            if (!preloader.classList.contains('done')) {
                preloader.classList.add('done');
            }
        }, 700)
    }

// let loaderFirst = document.querySelector('#loader-first');
// let loaderSecond = document.querySelector('#loader-second');
// loaderFirst.style.display = 'none';
// loaderSecond.play();
//
// let preloader = document.querySelector('.preloader');
// if (!preloader.classList.contains('done')) {
//     preloader.classList.add('done');
// }