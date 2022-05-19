const $ = document.querySelector.bind(document)


// Show login and register function
const loginBtn = document.querySelector('.header__navbar-item-Login')
const modalLg =document.querySelector('.modal.modal-login')
const closeLoginTab = document.querySelector('.auth-form__controls-back')
const RgBtnOnLgTab = document.querySelector('.auth-form__switch-btn-Lg')

function showLogIn () {

    loginBtn.onclick = function () {
        modalLg.classList.add('modal__active');
    }

    RgBtnOnLgTab.onclick = function () {
        modalLg.classList.remove('modal__active')
        modalRg.classList.add('modal__active');
    }

    closeLoginTab.onclick = function () {
        modalLg.classList.remove('modal__active')
    }
}

const registerBtn = document.querySelector('.header__navbar-item-Register')
const modalRg =document.querySelector('.modal.modal-Register')
const closeRgTab = document.querySelector('.auth-form__controls-back-rg')
const loginBtnOnRgTab = document.querySelector('.auth-form__switch-btn-Rg')

function showRegister () {
    

    registerBtn.onclick = function () {
        modalRg.classList.add('modal__active');
    }

    loginBtnOnRgTab.onclick = function () {
        modalRg.classList.remove('modal__active')
        modalLg.classList.add('modal__active');
    }

    closeRgTab.onclick = function () {
        modalRg.classList.remove('modal__active')
    }
}

showLogIn();
showRegister();


// Search option change active function

    const selectLabel = document.querySelector('.header__search-select-label')
    const optionsSelect = document.querySelectorAll('.header__search-option-item')

    for(value of optionsSelect) {

        value.onclick = function () {
            selectLabel.innerText = this.innerText
            $('.header__search-option-item.header__search-option-item--active').classList.remove('header__search-option-item--active')
            this.classList.add('header__search-option-item--active')
        }

    }




//Category's check icon change

const categoryItems = document.querySelectorAll('.category-item')



for(var i =0; i < categoryItems.length; i++) {

    categoryItems[i].onclick = function (e) {
        e.preventDefault();
        $('.category-item.category-item--active').classList.remove('category-item--active');
        this.classList.add('category-item--active')
    }

}

// Home__filter-btn active check

const HomeFilterBtns = document.querySelectorAll('.home-filter__btn')

for(var value of HomeFilterBtns) {
    value.onclick = function () {
        $('.home-filter__btn.btn--primary').classList.remove('btn--primary');
        this.classList.add('btn--primary')
    }
}


// Show like in product item

const productItems = document.querySelectorAll('.home-product-item-link')

for (var value of productItems) {

    value.onclick = function(e) {
        e.preventDefault()

        if(e.target.closest('.home-product-item__like')){

           if(this.querySelector('.home-product-item__action').classList.contains('home-product-item__liked')) {
                this.querySelector('.home-product-item__action').classList.remove('home-product-item__liked')
           } else {
                this.querySelector('.home-product-item__action').classList.add('home-product-item__liked')
           }
                
        }
    }

}

// Filter search history function

function filterFunction () {
    let searchInput = document.querySelector('.header__search-input')
    let filter = searchInput.value.toUpperCase()
    let historyItems = document.querySelectorAll('.header__search-history-item a')
    
    for (var i = 0; i < historyItems.length; i ++) {
        textValue = historyItems[i].textContent || historyItems[i].innerText
        if(textValue.toUpperCase().indexOf(filter) > -1) {
            historyItems[i].parentElement.style.display = ""
        } else {
            historyItems[i].parentElement.style.display = "none"
        }
    }
}

// add origin class for product function
// if origin'address is "Anh", add "eng" class for parent element
// if origin'address is "Mỹ", add "ame" class for parent element
// if origin'address is "Pháp", add "fra" class for parent element

var products = document.querySelectorAll('.product__item')

for(let i = 0; i < products.length; i++) {
    let originAdd = products[i].querySelector('.home-product-item__origin-name').innerText
    if(originAdd == "Anh") {
        products[i].classList.add('eng')
    } else if(originAdd == "Pháp") {
        products[i].classList.add('fra')
    } else if(originAdd == "Mỹ") {
        products[i].classList.add('ame')
    }
}



// product filter

filterSelection("all")

    // FIlter function
function filterSelection (c) {
    var productsArea = document.querySelector('.home-product')
    var products = productsArea.querySelectorAll('.product__item')
    if( c == "all") c =""

    for(var i = 0; i < products.length; i++) {
        RemoveClass(products[i], "show")
        if (products[i].className.indexOf(c) > -1) AddClass(products[i], "show");
    }
}
    //Addclass function
function AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
    }
  }

   //Removeclass function
function RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
  
      while (arr1.indexOf(arr2[i]) > -1) {
        arr1.splice(arr1.indexOf(arr2[i]), 1);     
      }
  
    }
    element.className = arr1.join(" ");
  }


  // Add event for slect input

const inputSelectorList = document.querySelector('.select-input__list')
const inputSelectors = inputSelectorList.querySelectorAll('.select-input__item')

for(let value of inputSelectors) {
    value.onclick = function (e) {
        e.preventDefault();
        $('.select-input__item.select-input__item--active').classList.remove('select-input__item--active');
        this.classList.add('select-input__item--active')
        if(this.innerText == "Tất cả") {
            filterSelection("all")
        } else if (this.innerText == "Pháp") {
            filterSelection("fra")
        } else if (this.innerText == "Anh") {
            filterSelection("eng")
        } else {
            filterSelection("ame")
        }
    }
}

// pagination active function

let paginationList = document.querySelectorAll('.pagination-item-num')

for(let value of paginationList) {
    value.onclick = function (e) {
        e.preventDefault();
        $('.pagination-item-num.pagination-item--active').classList.remove('pagination-item--active')
        this.classList.add('pagination-item--active')

        let currentPageNumber = this.querySelector('a').innerText
        let homeProduct = document.querySelector('.home-product')
        let productActive = homeProduct.querySelector('.product-active')

        if(productActive) {
            productActive.classList.remove('product-active')
        }
        
        if($('.home-product-page-' + currentPageNumber)) {

            $('.home-product-page-' + currentPageNumber).classList.add('product-active')
        }
    }
}







