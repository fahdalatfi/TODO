function Adding(){
    let li = document.createElement('li')
    let value = document.getElementById('text').value;

    if(value === ""){
        alert("Don't leave the box empty!");
    } else {
        li.innerText = value;
        document.getElementById('list').appendChild(li);
        li.setAttribute("id", "lil");
    }

}


let btn = document.getElementById('btn');
btn.addEventListener('click', Adding)



function removing(){
    let li = document.getElementById('lil');
    li.remove();
}

let btn1 = document.getElementById('btn1')
btn1.addEventListener('click', removing)



