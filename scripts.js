let addTitle = () => {
    // let header = document.getElementsByTagName("h1");
    let header = document.querySelector("h1");
    console.log(header);
    header.innerText = "Harry Potter Character Selection";
}
addTitle();

let flexIt = () => {
    document.querySelector(".needFlex").classList.toggle("flexIt"); // no need to add pre-emptively since toggle adds it on
} 

let addHouses = () => {
    // finding all elements of the array of "description"
    let description = document.getElementsByClassName("description");
    console.log(description);

    // for each element of the array, add Hogwarts house as the second class .add
    // description[0].classList.add("gryffindor"); // THIS IS A DUMB WAY

    // loop through array 
    for (i=0; i<description.length;i++){
        // access previous sibling's text
        let text = description[i].previousElementSibling.innerText; 
        text = text.toLowerCase();
        // set a new class to that text via .add
        description[i].classList.add(text);
    }
}
addHouses();

let emphasize = (house) => {
    let members = document.getElementsByClassName(house);
    for (member of members){
        member.classList.toggle("emphasis");
    }
}

let hideTheSnitch = () => {
    document.querySelector("#golden").classList.toggle("snitch"); 
}