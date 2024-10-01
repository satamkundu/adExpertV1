// Get elements
const popup = document.getElementById('popup-form');
const popupviewdoc = document.getElementById('popup-form-view-doc');

const backdrop = document.getElementById('backdrop');
const workWithUsBtn = document.getElementById('work1');
const workWithUsBtn1 = document.getElementById('work2');
const workWithUsBtn2 = document.getElementById('work3');
const closeBtn = document.getElementById('close-btn');
const closeBtnviewdoc = document.getElementById('close-btn-view-doc');
// Function to show popup
function showPopup(e) {
    console.log(e);
    popup.classList.remove('hidden');
    backdrop.classList.remove('hidden');
}

function showPopupviewdoc(e) {
    document.getElementById('case-study-content').innerHTML = '<iframe src="https://docs.google.com/gview?url=http://ieee802.org/secmail/docIZSEwEqHFr.doc&embedded=true" frameborder="0"></iframe>'
    console.log(e);
    popupviewdoc.classList.remove('hidden');
    backdrop.classList.remove('hidden');
}

document.querySelectorAll('.case-study').forEach(function(element) {
    element.addEventListener('click', showPopupviewdoc)
});

// Attach event listeners to buttons
workWithUsBtn.addEventListener('click', showPopup);
workWithUsBtn1.addEventListener('click', showPopup);
workWithUsBtn2.addEventListener('click', showPopup);

// Hide popup
closeBtn.addEventListener('click', function() {
    popup.classList.add('hidden');
    backdrop.classList.add('hidden');
});

closeBtnviewdoc.addEventListener('click', function() {
    popupviewdoc.classList.add('hidden');
    backdrop.classList.add('hidden');
});

// Hide popup when clicking outside the form
backdrop.addEventListener('click', function() {
    popup.classList.add('hidden');
    backdrop.classList.add('hidden');
});