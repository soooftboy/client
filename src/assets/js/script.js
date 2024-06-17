const toggleThemeBtn = document.querySelector('#toggle-theme-button');

    const toggleTheme = () => {
        const body = document.body;

        if (!toggleThemeBtn.checked) {
            document.body.classList.add('theme-white');
            document.body.classList.remove('theme-black');
            localStorage.setItem('theme', 'theme-white');
        } else {
            document.body.classList.add('theme-black');
            document.body.classList.remove('theme-white');
            localStorage.setItem('theme', 'theme-black');
        }
    };

    const getTheme = () => {
        if (localStorage.getItem('theme') === 'theme-black') {
            toggleThemeBtn.checked = true;
            document.body.classList.add('theme-black');
        } else {
            document.body.classList.add('theme-white');
        }
    };

$('.releases__slider').slick({
    infinite: false,
    accessibility: false,
    draggable: false,
    slidesToShow: 5,
    slidesToScroll: 5,
    appendArrows: $('.releases__arrows'),
    prevArrow: '<button class="releases__prev releases__arrow"><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 1L10.5 7.5L4 14" stroke="#FF3D6A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
    nextArrow: '<button class="releases__next releases__arrow"><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 1L10.5 7.5L4 14" stroke="#FF3D6A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>'
});

if( $(document).height() <= $(window).height() ){
    $(".footer").addClass("fixed-bottom");
}

toggleThemeBtn.addEventListener('change', () => {
    toggleTheme();
});

getTheme();


