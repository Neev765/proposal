const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');
const wrapperRect = wrapper.getBoundingClientRect();
const noBtnRect = noBtn.getBoundingClientRect();
const cta = document.querySelector('.btn-group')
yesBtn.addEventListener('click', () => {
    question.innerHTML = 'I know you wanna say yess ;)';
});
noBtn.addEventListener('mouseenter', () => {
    const yesIndex = Array.from(cta.children).
    indexOf(yesBtn);
    const noIndex = Array.from(cta.children).
    indexOf(noBtn);
    if (yesIndex < noIndex) {
        cta.insertBefore(noBtn, yesBtn);
    } else {
        cta.insertBefore(yesBtn, noBtn)
    }    
})