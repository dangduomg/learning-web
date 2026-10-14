const form = document.getElementById('form');
const successMsg = document.getElementById('success');
const emailDisplay = document.getElementById('email-display');
const dismissBtn = document.getElementById('dismiss');

form.addEventListener('submit', e => {
    e.preventDefault();
    form.classList.add('hidden');
    successMsg.classList.remove('hidden');

    const formdata = new FormData(form);
    emailDisplay.textContent = formdata.get('email');
})

dismissBtn.addEventListener('click', () => {
    form.classList.remove('hidden');
    form.reset();
    successMsg.classList.add('hidden');
})