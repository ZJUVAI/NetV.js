// if site is from zjvis, remove 镜像
window.onload = window.onhashchange = function() {
    if (window.location.href.indexOf('zjvis') >= 0) {
        document
            .querySelector('a[rel="chinese-mirror"]')
            .parentElement.setAttribute('style', 'display: none;')
    }
}
