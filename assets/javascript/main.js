const img = document.getElementById('img');
const loading = document.querySelector('.loading');
const section = document.querySelector('.section');
const conten = document.querySelector('.conten');


img.onclick = () => {
    img.style.display = 'none';
    loading.classList.add('loading--active');
    setTimeout(() => {
        loading.classList.remove('loading--active');
        section.classList.add('section--active');
    }, 3000)
}

conten.onclick = () => {
    img.style.display = 'block';
    loading.classList.remove('loading--active');
    section.classList.remove('section--active');
}