/* Buttons */
const followButton = document.getElementById('follow-button');
const messageButton = document.getElementById('message-button');

/* Modal elements */
const overlay = document.querySelector('.overlay');
const modalWrapper = document.querySelector('.modal-wrapper');
const modalCloseButton = document.getElementById('modal-close-button');

/* Text nodes */
const modalMessage = document.querySelector('.modal-message');
const followMessageText = document.querySelector('.follow-message-text');


followButton.addEventListener('click', () => showFollowMessageText('You are now following Marcus Doe!'));
messageButton.addEventListener('click', () => openModal('This feature is not implemented yet!'));

modalCloseButton.addEventListener('click',  () => {
    overlay.classList.add('close')
    modalWrapper.classList.add('close')
});


function showFollowMessageText(message){
    followMessageText.innerHTML = message;
    setTimeout(()=> {
        followMessageText.innerHTML = ''
    },3000)
}

function openModal(message){
    overlay.classList.remove('close')
    modalWrapper.classList.remove('close')
    modalMessage.innerHTML = message;
    modalWrapper.classList.add('animate__rubberBand');
}
