const darkmodeBtn = document.getElementById('darkmode');

darkmodeBtn.addEventListener('click', () => {
    document.body.classList.toggle('background-darkmode');
    document.getElementById('title').classList.toggle('text-darkmode');

    document.getElementById('totalCard').classList.toggle('totalCard-darkmode');

    const sections = document.querySelectorAll('.sectionCard');
    for(let section of sections){
        section.classList.toggle('cardSection-darkmode');
    }
})