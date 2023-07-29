const getcolor = () =>{
    const randomnumber = Math.floor(Math.random() * 16777215 ); //if will generate the random number
    const randomcode = "#" + randomnumber.toString(16); //It will convert random number in to random hexadecimal code
    console.log(randomcode);
    console.log(randomnumber);
    document.body.style.backgroundColor = randomcode; //This will give the random code to background color
}

document.getElementById("btn").addEventListener(
    // Event listner call the get color function when we click on the click button
    "click",
    getcolor
)
// It will initially call the code and give the random color
getcolor();