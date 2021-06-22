// ------------ galleri --------------

let wrapper = document.querySelector('.grid-container');
wrapper.addEventListener('click', function(event){
    let targetSrc = event.target.attributes.src.nodeValue;
    let largeImage = document.querySelector('#large-image');
    largeImage.setAttribute('src', targetSrc);
});


// ---------- form -------------------

function valider (form) {
    if (form.navn.value.length == 0 ) {
        alert("Udfyld venligst navn.")
        form.navn.focus();
        return false;
    }

    if (form.email.value.length == 0 ) {
        alert("Udfyld venligst e-mailen.")
        form.email.focus();
        return false;
    }
    
    if (form.besked.value.length < 10 ) {
        alert ("Skriv venligst en besked på mere end 10 tegn")
        form.besked.focus();
        return false;
    }
}