let button = document.getElementById("test");

button.addEventListener('click', testValue)

function testValue() {
    
    num = document.getElementById('nb').value;

    paragraph = document.getElementById('msg')

    try {
        if ((isNaN(num)) || (num == '')) {
            throw 'entrez un nombre valide'
        }

        else if ((num < 0) || (num > 10)) {
            throw 'ce nombre est trop grand ou trop petit'
        }

        else {
           msg.textContent = 'ce nombre est valide'
        }
    }
    catch (error) {
        msg.textContent = error;
       
    }

}
