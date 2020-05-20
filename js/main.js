const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

// Fill Listener
fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

// Loop Through Empties
for (const emmpty of empties) {
    emmpty.addEventListener('dragover', dragOver);
    emmpty.addEventListener('dragenter', dragEnter);
    emmpty.addEventListener('dragleave', dragLeave);
    emmpty.addEventListener('drop', dragDrop);
}

// Drag Function
function dragStart() {
    this.className += ' hold';
    setTimeout(() => (this.className = 'invisible'), 0);
}

function dragEnd() {
    this.className = 'fill';
}

function dragOver(e) {
    e.preventDefault();
    console.log('Over');
}

function dragEnter(e) {
    e.preventDefault();
    this.className += ' hovered';
}

function dragLeave() {
    this.className = 'empty';
}

function dragDrop() {
    this.className = 'empty';
    this.append(fill);
}