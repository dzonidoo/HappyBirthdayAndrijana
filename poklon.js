var to = 'Anrijana';
var gift_url = cao;
var gift_image_url = cao;



var nametag = document.getElementById("nametag");
var present = document.getElementById("present");
var presentImage = document.getElementById("present-image");


function init() {

    var _giftLink,
        _giftImg;

    if (gift_url) {
        _giftLink = document.createElement("a");
        _giftLink.target = "_blank";
        presentImage.appendChild(_giftLink);
    }

    if (gift_image_url) {
        _giftImg = document.getElementById("cao");
        _giftImg.src = gift_image_url;
        if (_giftLink) {
            _giftLink.appendChild(_giftImg);
        } else {
            presentImage.appendChild(_giftImg);
        }
    }

    present.addEventListener("click", function(e) {
        present.classList.toggle("open");
    }, false);



    nametag.innerText = to;
}

init();