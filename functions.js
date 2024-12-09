const checkBox = document.querySelector('#agree');

checkBox.addEventListener('click', () => {
    if (checkBox.checked === true){
        document.querySelector('.check-image').style.display = "block";
        document.querySelector('.custom-check').style.display = "none";
    } else {
        document.querySelector('.check-image').style.display = "none";
        document.querySelector('.custom-check').style.display = "block";
    }
})

document.querySelector('.custom-check').onclick = (event) => {
    event.preventDefault();
    checkBox.checked = true;
    document.querySelector('.check-image').style.display = "block";
    document.querySelector('.custom-check').style.display = "none";
}

document.querySelector('.check-image').onclick = (event) => {
    event.preventDefault();
    checkBox.checked = false;
    document.querySelector('.check-image').style.display = "none";
    document.querySelector('.custom-check').style.display = "block";
}


const radioContainers = document.querySelectorAll('.radio-label');

radioContainers.forEach(cont => {
    cont.onclick = () => {
        const parentContainer = cont.parentElement;
        parentContainer.querySelector('.radio-image').style.display = 'block';
        cont.classList.add('radio-check');
        parentContainer.querySelector('.custom-radio').style.display = 'none';

        radioContainers.forEach(radcont => {
            if (radcont != cont){
                radcont.classList.remove('radio-check');
                radcont.parentElement.querySelector('.radio-image').style.display = 'none';
                radcont.parentElement.querySelector('.custom-radio').style.display = 'block';
            }
        })
    }
})

const customRadios = document.querySelectorAll('.custom-radio');

customRadios.forEach(customRad => {
    customRad.onclick = () => {
        customRad.style.display = 'none';
        customRad.parentElement.querySelector('.radio-label').classList.add('radio-check');
        customRad.parentElement.querySelector('.radio-image').style.display = 'block';
        
        customRadios.forEach(rad =>{
            if (rad != customRad){
                rad.parentElement.querySelector('.radio-label').classList.remove('radio-check');
                rad.style.display = 'block';
                rad.parentElement.querySelector('.radio-image').style.display = 'none';
            }
        })
    }

})

