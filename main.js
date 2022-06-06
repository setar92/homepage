let toggle = true;

function mirror() {
    const avatar = document.querySelector(".contact-info__block");
    const resume__block = document.querySelector('.resume__block');
    const img = document.querySelector('.contact-info__block img');
    const pashal = document.querySelector('.pashal');

    const resume = document.querySelector('.resume');
    let coordResume = resume.getBoundingClientRect();
    let pashalCoordinate = pashal.getBoundingClientRect();

    avatar.addEventListener('mouseover', () => {
        let step = (coordResume.right - coordResume.left) / 100;
        let start = 0;
        if (toggle) {
            resume__block.classList.add('reverse');
            setTimeout(() => {
                img.src = 'assets/avatar_mirror.png';
            }, 500)


            let timer = setInterval(() => {
                pashal.style.marginRight = start + 'px';
                start += step;
                if (coordResume.left >= (coordResume.right - start)) {
                    clearInterval(timer);
                    pashal.style.marginRight = (coordResume.width - 11) + 'px';

                }
            }, 10);



        } else {
            start = coordResume.width;
            resume__block.classList.remove('reverse');
            setTimeout(() => {
                img.src = 'assets/avatar.png';
            }, 500)
            let timer = setInterval(() => {
                pashal.style.marginRight = start + 'px';
                start -= step;
                console.log(pashal.style.marginRight);
                if (parseInt(pashal.style.marginRight) <= 0) {
                    clearInterval(timer);
                    pashal.style.marginRight = 0 + 'px'

                }
            }, 10);

        }

        toggle = !toggle
    });
}
mirror();

