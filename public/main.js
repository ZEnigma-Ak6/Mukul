const date= document.getElementById("DOB");
const submit= document.getElementById("submit").addEventListener("click",display);


function display(event){
    event.preventDefault();
    console.log("hello");
    console.log(date.value)
    const [year,month,day] = date.value.split("-");
    console.log(year,month,day);
    
    const url = "http://localhost:3300/age";
    const data = {
        year, month, day
    }


    fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },

        body: JSON.stringify(data)
    }).then((res)=> res.stringify())
    .then(data => console.log(data))
    .catch(err => console.log(err))

    
}
