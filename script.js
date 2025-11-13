const darkmodeBtn = document.getElementById('darkmode');
const draggable = document.querySelectorAll('.draggable');
const droppable = document.querySelectorAll('.droppable');
const dragZone = document.querySelectorAll('.dragzone');

darkmodeBtn.addEventListener('click', () => {
    document.body.classList.toggle('background-darkmode');
    document.getElementById('title').classList.toggle('text-darkmode');

    document.getElementById('totalCard').classList.toggle('totalCard-darkmode');

    const sections = document.querySelectorAll('.sectionCard');
    for(let section of sections){
        section.classList.toggle('cardSection-darkmode');
    }
})

draggable.forEach(element => {
    element.addEventListener('dragstart', (event) => {
        event.dataTransfer.setData('text/plain', event.target.id);
        element.classList.add('dragging');
    })
})

let removedChild = null;
draggable.forEach(element => {
    element.addEventListener('dragend', () => {
       element.classList.remove('dragging');
    })
})

droppable.forEach(element => {
    element.addEventListener('dragover', (event) => {
        event.preventDefault();
    })

    element.addEventListener('drop', (event) => {
        event.preventDefault();
        
        const data = event.dataTransfer.getData('text/plain');
        const el = document.getElementById(data);

        if(el){
            element.appendChild(el);
        }
    })
})