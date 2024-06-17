const setBannerImage = () => {
    let banner = document.querySelector('#author-banner');
    let authorName = banner.dataset.authorName;
    banner.style.backgroundImage = `url("../../assets/img/authors/${authorName}/banner.png")`;
};

setBannerImage();