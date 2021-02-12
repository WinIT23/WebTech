var imageCount = 14;
var images;

var container = document.querySelector(".container");
var overlay = document.querySelector("#overlay");
var postCount = document.querySelector("#posts");

init();

function init() {
	addImages();
	loadImages();
	setupImages();
	overlayClickEvent();
	updatePostCount();
}

function updatePostCount() {
	postCount.textContent = imageCount;
}


function addImages() {
	var addImageDiv = function() {
		var str = "";
		for(var i = 1; i <= imageCount; i++) {
			if((i-1) % 3 == 0) {
				str += '<div class="row">'
			}
			str += '<div class="image" id="ins' + i + '" ></div>';
			if((i-1) % 3 == 2) {
				str += '</div> <div></div>';
			}
		}
		return str;
	};
	container.innerHTML = addImageDiv();
}

function loadImages() {
	for(var i = 1; i <= imageCount; i++) {
		var tag = "#ins" + i;
		document.querySelector(tag).style.backgroundImage = "url('res/" + i + ".jpg')";
	}
	images = document.querySelectorAll(".image");
}

function setupImages() {
	for(var i = 0; i < images.length; i++) {
		images[i].addEventListener("click", function() {
			overlay.style.backgroundImage = this.style.backgroundImage;
			overlay.classList.toggle('open');
			overlay.classList.toggle('close');
		});
	}
}

function overlayClickEvent() {
	overlay.addEventListener("click", function() {
		this.classList.toggle("close");
		this.classList.toggle("open");
	})
}
