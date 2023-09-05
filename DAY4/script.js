var selectedDiv = document.getElementById("para") //selecting the paragraph
var words = selectedDiv.innerHTML.split(" ") // getting the words in array that is in the div

//mouseover event listner
selectedDiv.addEventListener("mouseover",()=>{
    selectedDiv.innerHTML = ""
    words.map((item)=>{
        if (item.match(/[A-Z]/)) //checking if each word contain capital
        {
            item = `<span style="color:#e2b714">${item}</span>` // adding style that is capital
        }
        selectedDiv.innerHTML += item+" "; //updaing div
    })
})

//mouseout event listner
selectedDiv.addEventListener("mouseout",()=>{
    selectedDiv.innerHTML = ""
    words.map((item)=>{
        if (item.match(/[A-Z]/))
        {
            item = `<span style="color:#646669">${item}</span>` //removing the style (default color)
        }

        selectedDiv.innerHTML += item+" ";
    })
})