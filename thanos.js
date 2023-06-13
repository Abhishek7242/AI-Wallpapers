let i =0
let first =document.getElementById('container')

let images =new Image('thanos.jpg')
images=[
   
    {filepath:`thanos.jpg`},
    {filepath:`thanos${1}.jpg`},
    {filepath:`thanos${2}.jpg`},
    {filepath:`thanos${3}.jpg`}


]

for(i;i<images.length;i++){
    
    let div = document.createElement('div')
    div.classList.add('divbox')
    let img = document.createElement('img')
    img.id='first'+i
    
    img.style.maxWidth='400px'
    img.style.maxHeight='600px'
    img.src=images[i].filepath
    let btn = document.createElement('button')
    btn.id='btn'+i
    btn.classList.add('btncss')
    btn.innerText='Download'
     
    btn.addEventListener('click', function() {
        let a = document.createElement('a');
        a.href = img.src;
        a.download = 'image';
        a.click();
    });
    first.appendChild(div)
    div.appendChild(img)
    div.appendChild(btn)
}