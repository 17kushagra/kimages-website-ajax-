var btn = document.querySelector('.clkme')




document.querySelector('body')
.addEventListener('keypress', (e) => {
    if(e.key==='Enter'){
    var username = document.querySelector('.txtarea').value
    console.log(username)

    const xhr = new XMLHttpRequest()
    const url = `https://pixabay.com/api/?key=21409111-dd82488f6336847a5130dc5f8&q=${username}&image_type=photo&pretty=true`

    xhr.open('GET', url)

    xhr.onreadystatechange = () => {
        if(xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText)

            console.log(response)
            
            let output = ``

            for(let i=0; i < response.hits.length; i++) {
                const image = `<img style="margin: 10px; border-radius:20px;" src="${response.hits[i].largeImageURL}" >`
                output += ` <b> <u> </u> </b><a id="download_image" href="${response.hits[i].largeImageURL}" download> ${image} </a> `
            }

            const container = document.querySelector('.parent')
            container.innerHTML = output

        }
    }

    xhr.send()}
})

btn.addEventListener('click', () => {
    
    var username = document.querySelector('.txtarea').value
    console.log(username)

    const xhr = new XMLHttpRequest()
    const url = `https://pixabay.com/api/?key=21409111-dd82488f6336847a5130dc5f8&q=${username}&image_type=photo&pretty=true`

    xhr.open('GET', url)

    xhr.onreadystatechange = () => {
        if(xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText)

            console.log(response)
            
            let output = ``

            for(let i=0; i < response.hits.length; i++) {
                const image = `<img style="margin: 10px; border-radius:20px;" src="${response.hits[i].largeImageURL}" >`
                output += ` <b> <u> </u> </b><a id="download_image" href="${response.hits[i].largeImageURL}" download> ${image} </a> `
            }

            const container = document.querySelector('.parent')
            container.innerHTML = output

        }
    }

    xhr.send()
})