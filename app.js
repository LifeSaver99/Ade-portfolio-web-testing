var button = document.querySelector("button");

button.addEventListener("click", function () {
    document.body.style.backgroundColor = "red";
});

// })

let myFunction = () => {
    document.getElementById('body').style.backgroundColor = 'red';
}
// document.getElementById('button').innerHTML.backgroundColor = 'red';
// }

function Submit() {
    alert("Name must be filled out");
    return remove();
}

// let x = document.forms["myForm"]["fname"].value;
// if (x == "fname") {

/*remove() {
    var myobj = document.getElementsByClassName('form1');
    ;
    return alert('form has been submitted');
}*/
/* function changeColor() {
    document.body.style.backgroundColor = 'red';
}*/