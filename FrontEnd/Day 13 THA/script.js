let input_data = document.querySelector('input');
let btn = document.querySelector('button');
let elem = document.querySelector('article');
btn.addEventListener('click', () => {
    elem.innerHTML = '';
    fetch(`https://dog.ceo/api/breed/${input_data.value}/images/random/10`)
        .then((res) => res.json())
        .then((data) => {
            getResponse(data)
        })
})

function getResponse(data) {
    if (data.status == "success") {
        data.message.forEach(element => {
            elem.innerHTML += `<img src=${element}>`
        });
    }
    else {
        // elem.innerHTML = '<h1>No Data Found ... try hound or shiba</h1>'
        const notFound = document.createElement("div");
        notFound.innerText = 'dog not found';
        notFound.className = 'notFound';
        elem.innerHTML = '';
        elem.append(notFound);
    }
}