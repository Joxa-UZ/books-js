let siteList = document.querySelector(".list");
let siteForm = document.querySelector(".site-form");
let siteInput = document.querySelector(".site-input");
let siteSelect = document.querySelector(".site-select");
let siteInputValue = siteInput.value;

var fragment = new DocumentFragment();
let arrLang = [];




function showBooks(books, regax = ""){
    siteList.innerHTML = "";
    for (const book of books) {
        // console.log(book);
        
        let newItem = document.createElement("li");
        let newImg = document.createElement("img");
        let newSpan = document.createElement("div");
        let newLang = document.createElement("span");
        let newCountry = document.createElement("span");
        let newTitle = document.createElement("h3");
        let newPages = document.createElement("span");
        let newYear = document.createElement("div");
        let newLink = document.createElement("a");
        let forImg = document.createElement("div");
        let itemUp = document.createElement("div");
        let infoBox = document.createElement("div");
        
        
        newItem.classList.add("col-3", "p-2", "item");
        newImg.setAttribute("src", book.imageLink);
        newImg.classList.add("item-img");
        newTitle.classList.add("site-item");
        forImg.classList.add("for-img");
        newSpan.classList.add("author");
        itemUp.classList.add("item-up");
        newYear.classList.add("item-year");
        infoBox.classList.add("info");
        newCountry.classList.add("country");
        newLang.classList.add("lang");
        newPages.classList.add("pages");
        newLink.classList.add("link");
        newSpan.textContent = book.author;
        newTitle.textContent = book.title;
        newYear.textContent = book.year;
        newCountry.textContent = book.country;
        newLang.textContent = book.language;
        newPages.textContent = book.pages;
        newLink.textContent = "Wikipedia link";
        newLink.href = book.link;
        
        
        newItem.appendChild(itemUp);
        itemUp.appendChild(newSpan);
        itemUp.appendChild(newYear);
        newItem.appendChild(forImg);
        forImg.appendChild(newImg);
        newItem.appendChild(newTitle);
        infoBox.appendChild(newCountry);
        infoBox.appendChild(newLang);
        infoBox.appendChild(newPages);
        infoBox.appendChild(newLink);
        newItem.appendChild(infoBox);
        fragment.appendChild(newItem);
        
    }
    
    siteList.appendChild(fragment);
}
showBooks(books);


function showSearchBooks(items){
    
}


siteForm.addEventListener("submit", function(evt){
    evt.preventDefault();

    const elSearch = new RegExp(siteInput.value.trim(), "gi");

    const filterArr = books.filter((item) => String(item.title).match(elSearch));

    showBooks(filterArr);
    if(filterArr.length > 0){
        showBooks(filterArr,elSearch); 
    } else{
        alert("error");
    }

})

function langFilter(){
    books.forEach(function (item){
        if(!arrLang.includes(item.language)){
            arrLang.push(item.language)
        }
    })
    arrLang.sort()
    arrLang.forEach(function (item){
        let newOption = document.createElement("option")
        newOption.value = item;
        newOption.textContent = item;
        siteSelect.appendChild(newOption);

    })
    showBooks(arrLang , elSearch); 
}
langFilter();

