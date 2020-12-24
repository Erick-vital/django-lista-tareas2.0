var boton = document.getElementById('btn')

boton.addEventListener('click', function () {
    var checkbox = document.getElementsByClassName('cajita')
    let ids = []

    console.log('presionando boton')
    for (var i = 0; i < checkbox.length; i++) {
        if (checkbox[i].checked == true) {
            var id = checkbox[i].getAttribute('value')
            ids.push(id)
        }
    }
    console.log(ids)
    borrarElementos(ids)
})

function borrarElementos(ids) {
    var url = 'borrar/'

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrftoken,
        },
        body: JSON.stringify({ 'ids': ids })
    })

        .then((response) => {
            return response.json()
        })
        .then((data) => {
            console.log('data: ', data)
            // recarga la pagina
            location.reload()
        })

}

function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}
const csrftoken = getCookie('csrftoken');