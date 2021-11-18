function Adding(){
    let li = document.createElement('li')
    li.innerText =  document.getElementById('text').value;
    document.getElementById('list').appendChild(li);
    
}

let btn = document.getElementById('btn');
btn.addEventListener('click', Adding)

