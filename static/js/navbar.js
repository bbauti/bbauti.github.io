document.addEventListener('DOMContentLoaded', () => {
    let navbarBurger = document.querySelector('.navbar-burger');
	let navbarMenu = document.querySelector('.navbar-menu');
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0)
    $navbarBurgers.forEach( el => {
        el.addEventListener('click', () => {
            // Get the target from the "data-target" attribute
            const target = el.dataset.target;
            const $target = document.getElementById(target);
            // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
            el.classList.toggle('is-active');
            $target.classList.toggle('is-active');
        });
    });
});
if (document.querySelectorAll('.navbar-dropdown')) {
    [].forEach.call(document.querySelectorAll('.navbar-dropdown'), function(elDrop) {
        elDrop.style.display = 'none';
    });
}
if (document.querySelectorAll('.navbar-link','.dropm')) {
    [].forEach.call(document.querySelectorAll('.navbar-link','.dropm'), function(elLink) {
        if (elLink.classList.contains('is-active')) elLink.classList.toggle('is-active');
        if (elLink.nextElementSibling.classList.contains('navbar-dropdown') && elLink.nextElementSibling.hasChildNodes()) {
            elLink.addEventListener('click', function() {
                elLink.classList.toggle('is-active');
                if (elLink.classList.contains('is-active') && elLink.nextElementSibling.style.display === 'none') elLink.nextElementSibling.style.display = 'block';
                else if (!elLink.classList.contains('is-active') && elLink.nextElementSibling.style.display === 'block') elLink.nextElementSibling.style.display = 'none';
                [].forEach.call(elLink.nextElementSibling.childNodes, function(siblingChild) {
                    siblingChild.addEventListener('click', function() {
                        siblingChild.parentNode.style.display = 'none';
                        if (elLink.classList.contains('is-active')) elLink.classList.toggle('is-active');
                    });
                });
            });
            elLink.nextElementSibling.addEventListener('mouseleave', function() {
                elLink.nextElementSibling.style.display = 'none';
                if (elLink.classList.contains('is-active')) elLink.classList.toggle('is-active');
            });
        }
    });
}