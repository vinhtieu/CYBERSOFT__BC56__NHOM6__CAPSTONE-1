
const body = document.body;
const switch_mode = document.querySelector('#switchButton i');
let mode = localStorage.getItem('darkmode');
if (mode == 'true') {
    body.classList.add('dark');
    console.log("🚀 ~ file: main.js:7 ~ body:", body)

    switch_mode.className = "bi bi-brightness-high"
}
switch_mode.addEventListener('click', () => {
    let mode = body.classList.toggle('dark');
    switch_mode.classList.toggle('bi-moon');
    switch_mode.classList.toggle('bi-brightness-high');
    //save mode
    localStorage.setItem('darkmode', mode);
    console.log("🚀 ~ file: main.js:15 ~ switch_mode.addEventListener ~ mode:", mode)
});
