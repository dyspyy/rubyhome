// script.js

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.property-card__like').forEach(function(likeIcon) {
        likeIcon.addEventListener('click', function() {
            this.classList.toggle('liked');

            
            this.classList.add('clicked');

            
            setTimeout(() => {
                this.classList.remove('clicked');
            }, 300);
        });
    });
});



let lastScrollY = window.scrollY;
const header = document.querySelector('.header');
const triggerPoint = 200; 

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    
    if (currentScrollY > triggerPoint && currentScrollY > lastScrollY) {
        header.classList.add('hide');
    } else {
        
        header.classList.remove('hide');
    }

    
    lastScrollY = currentScrollY;
});

const tabs = document.querySelectorAll(".accordion-tab");
const items = document.querySelectorAll(".accordion-item");

function toggleShow() {
    const target = this;
    const group = target.dataset.actabGroup;
    const id = target.dataset.actabId;

    tabs.forEach(function(tab) {
        if (tab.dataset.actabGroup === group) {
            tab.classList.toggle("accordion-active", tab.dataset.actabId === id);
        }
    });

    items.forEach(function(item) {
        if (item.dataset.actabGroup === group) {
            item.classList.toggle("accordion-active", item.dataset.actabId === id);
        }
    });
}


tabs.forEach(function(tab) {
    tab.addEventListener("click", toggleShow);
});



const dropdownButtons = document.querySelectorAll('.dropdown-button');

dropdownButtons.forEach(button => {
    button.addEventListener('click', function() {
        
        const dropdownContent = this.nextElementSibling;
        
        
        document.querySelectorAll('.dropdown-content').forEach(content => {
            if (content !== dropdownContent) {
                content.classList.remove('show');
            }
        });

       
        dropdownContent.classList.toggle('show');
    });
});


window.addEventListener('click', function(e) {
    if (!e.target.matches('.dropdown-button') && !e.target.matches('.dropdown-label') && !e.target.matches('.dropdown-img')) {
        document.querySelectorAll('.dropdown-content').forEach(content => {
            content.classList.remove('show');
        });
    }
});

const minSlider = document.getElementById("minPriceRange");
const maxSlider = document.getElementById("maxPriceRange");
const minOutput = document.getElementById("minPriceValue");
const maxOutput = document.getElementById("maxPriceValue");

minOutput.innerHTML = minSlider.value;
maxOutput.innerHTML = maxSlider.value;

minSlider.oninput = function() {
    if (parseInt(minSlider.value) > parseInt(maxSlider.value)) {
        minSlider.value = maxSlider.value;
    }
    minOutput.innerHTML = minSlider.value;
}

maxSlider.oninput = function() {
    if (parseInt(maxSlider.value) < parseInt(minSlider.value)) {
        maxSlider.value = minSlider.value;
    }
    maxOutput.innerHTML = maxSlider.value;
}




  