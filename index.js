const { hash } = window.location;
const message = atob(hash.replace('#', ''));

if (message) {
    document.querySelector('#input').classList.add('hide');
    document.querySelector('#message-show').classList.remove('hide');
    document.querySelector('h1').innerText = message;
}

const card = document.querySelector('form');
card.addEventListener('submit', e => {
    e.preventDefault();

    document.querySelector('#input').classList.add('hide');
    document.querySelector('#link').classList.remove('hide');
    
    const input = document.querySelector('#message-input');
    const encrypted = btoa(input.value);
    
    const linkInput = document.querySelector('#link-input')
    linkInput.value = `${document.location}#${encrypted}`;
    linkInput.select();
    
});
