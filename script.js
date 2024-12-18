let url = 'https://picsum.photos/300?random=5';
let imgContainer = document.querySelector('.img-container');
console.log(imgContainer);


let getimge = () => {
    let newCreatedDiv = [];
    for (let i = 0; i < 10; i++) {
        let newDiv = document.createElement('div');
        newDiv.classList.add('w-[250px]', 'h-[250px]', 'bg-[rgb(198,198,198)]', 'rounded-2xl', 'overflow-hidden');
        newCreatedDiv.push(newDiv);
    };
    newCreatedDiv.forEach((div) => {
        imgContainer.append(div);
    });
    newCreatedDiv.forEach((div) => {
        fetch(url)
            .then((res) => { return res.blob() })
            .then((data) => {
                let imgUrl = URL.createObjectURL(data);
                let img = document.createElement('img');
                img.src = imgUrl;
                img.classList.add('w-full', 'h-full', 'object-cover');
                div.append(img)
            })
            .catch(error => {
                console.log(error);
            })
    })
}
getimge();