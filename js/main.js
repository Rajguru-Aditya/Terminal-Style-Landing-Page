const about = document.querySelector('#about');
const contact = document.querySelector('#contact');
const aboutContent = document.querySelector('#about-content');
const contactContent = document.querySelector('#contact-content');

const aboutBox = function(){
    new WinBox({
        title: "About Us",
        background: "#00aa00",
        width: "400px",
        height: "400px",
        top: 50, // These values prevent the box from touching the edges of the page
        right: 50,
        bottom: 50,
        left: 50,
        mount: aboutContent, // Adding the about-me content in WinBox
        onfocus: function(){
            this.setBackground("#00aa00")
        },
        onblur: function(){
            this.setBackground("#777")
        },
    })
}

const contactBox = function(){
    new WinBox({
        title: "Contact Us",
        background: "#00aa00",
        width: "400px",
        height: "400px",
        top: 150, // These values prevent the box from touching the edges of the page
        right: 50,
        bottom: 50,
        left: 250,
        mount: contactContent, // Adding the contact-me content in WinBox
        onfocus: function(){
            this.setBackground("#00aa00")
        },
        onblur: function(){
            this.setBackground("#777")
        },
    })
}

// Adding event listners and adding respective functions to call the boxes
about.addEventListener('click', aboutBox)
contact.addEventListener('click', contactBox)