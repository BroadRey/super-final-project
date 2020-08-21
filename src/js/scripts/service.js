export let servicesMoreText = document.querySelector('.services__more-text');
export let servicesReadMore = document.querySelector('.services__read-more');

servicesReadMore.addEventListener('click', function(evt) {
    evt.preventDefault();
    if (servicesMoreText.classList.contains('services__more-text--show')) {
        document.querySelector('.services__more-text').classList.remove('services__more-text--show');
        servicesReadMore.textContent = "Читать далее";
    } else { 
        document.querySelector('.services__more-text').classList.add('services__more-text--show');
        servicesReadMore.textContent = "Скрыть";
    }
});