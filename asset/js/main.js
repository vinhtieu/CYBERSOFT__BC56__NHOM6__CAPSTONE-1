
const body = document.body;
const switch_mode = document.querySelector('#switchButton i');
const navbar_toggler = document.getElementById('navbar-toggler');

let mode = localStorage.getItem('darkmode');
if (mode == 'true') {
    body.classList.add('dark');
    switch_mode.className = "bi bi-brightness-high"
}
switch_mode.addEventListener('click', () => {
    let mode = body.classList.toggle('dark');
    switch_mode.classList.toggle('bi-moon');
    switch_mode.classList.toggle('bi-brightness-high');
    //save mode
    localStorage.setItem('darkmode', mode);
});

function showmenu() {
    if (body.classList.toggle('showmenu')) {
        body.classList.add('showmenu');
        // không cho scroll khi mở menu ở media 992px
        $('html, body').css({
            overflow: 'hidden',
            height: 'auto'
        });
    } else {
        // cho phép scroll khi tắt menu
        $('html, body').css({
            overflow: 'auto',
            height: 'auto'
        });

    }

}








