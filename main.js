let avatar = document.querySelector(".contact-info__block");
let resume__block = document.querySelector('.resume__block');
let img = document.querySelector('.contact-info__block img');
let toggle = true;
console.log(resume__block);

avatar.addEventListener('mouseover', () => {
    if (toggle) {
        resume__block.classList.add('reverse');
        setTimeout(() => {
            img.src = 'assets/avatar_mirror.png';
        }, 1000)
        
    } else {
        resume__block.classList.remove('reverse');
        setTimeout(() => {
            img.src = 'assets/avatar.png';
        }, 1000)
        
    }

    toggle = !toggle

});
