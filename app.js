function Adding(){
    let li = document.createElement('li')
    let inputValue = document.getElementById('text').value;
    let t = document.createTextNode(inputValue);
    document.getElementById('list').appendChild(li);
    document.getElementById('list').appendChild(t);
    
}

let btn = document.getElementById('btn');
btn.addEventListener('click', Adding)

