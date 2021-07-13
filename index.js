// Menu Bar code

const hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", () => {
    const navToggle = document.getElementById("nav-toggle");

    if (navToggle.style.display == "block") {
        navToggle.style.display = "none";
    } else {
        navToggle.style.display = "block";
    }
});

// Portfolio Tab Code
const portfolioAll = document.getElementById("portfolio-all-images");
const portfolioWeb = document.getElementById("portfolio-web-images");
const portfolioGraphics = document.getElementById("portfolio-graphics-images");
const portfolioPhotography = document.getElementById(
    "portfolio-photography-images"
);
const portfolioApps = document.getElementById("portfolio-apps-images");

const portfolioAllDisplay = document.getElementById("portfolio-display1");
const portfolioWebDisplay = document.getElementById("portfolio-display2");
const portfolioGraphicsDisplay = document.getElementById("portfolio-display3");
const portfolioPhotoDisplay = document.getElementById("portfolio-display4");
const portfolioAppsDisplay = document.getElementById("portfolio-display5");

portfolioAll.addEventListener("click", () => {
    console.log("clicked1");

    portfolioAllDisplay.style.display = "block";
    portfolioWebDisplay.style.display = "none";
    portfolioGraphicsDisplay.style.display = "none";
    portfolioPhotoDisplay.style.display = "none";
    portfolioAppsDisplay.style.display = "none";
});

portfolioWeb.addEventListener("click", () => {
    console.log("clicked2");

    portfolioWebDisplay.style.display = "block";
    portfolioAllDisplay.style.display = "none";
    portfolioGraphicsDisplay.style.display = "none";
    portfolioPhotoDisplay.style.display = "none";
    portfolioAppsDisplay.style.display = "none";
});

portfolioGraphics.addEventListener("click", () => {
    console.log("clicked3");

    portfolioGraphicsDisplay.style.display = "block";
    portfolioAllDisplay.style.display = "none";
    portfolioWebDisplay.style.display = "none";
    portfolioPhotoDisplay.style.display = "none";
    portfolioAppsDisplay.style.display = "none";
});

portfolioPhotography.addEventListener("click", () => {
    console.log("clicked4");
    portfolioPhotoDisplay.style.display = "block";
    portfolioWebDisplay.style.display = "none";
    portfolioAllDisplay.style.display = "none";
    portfolioGraphicsDisplay.style.display = "none";
    portfolioAppsDisplay.style.display = "none";
});

portfolioApps.addEventListener("click", () => {
    console.log("clicked5");
    portfolioAppsDisplay.style.display = "block";
    portfolioPhotoDisplay.style.display = "none";
    portfolioWebDisplay.style.display = "none";
    portfolioAllDisplay.style.display = "none";
    portfolioGraphicsDisplay.style.display = "none";
});

// Blog post Read More

const readMoreBtnArray = document.querySelectorAll(".read-more-btn");

for (let i = 0; i < readMoreBtnArray.length; i++) {
    const readMoreBtn = document.querySelectorAll(".read-more-btn")[i];
    const text = document.querySelectorAll(".card-text")[i];

    readMoreBtn.addEventListener("click", (e) => {
        text.classList.toggle("show-more");
        if (readMoreBtn.innerText === "READ MORE..") {
            readMoreBtn.innerText = "READ LESS";
        } else {
            readMoreBtn.innerText = "READ MORE..";
        }
    });
}

// Blog Post More Blog
const moreBlogBtn = document.querySelector(".blog-btn");
const showBlogToggle = document.getElementById("show-blog-hide-blog");

moreBlogBtn.addEventListener("click", (e) => {
    const blog = document.getElementById("moreBlog");

    if (blog.style.display == "none") {
        blog.style.display = "block";
        showBlogToggle.innerText = "SHOW LESS";
    } else {
        blog.style.display = "none";
        showBlogToggle.innerText = "SHOW MORE";
    }
});

// Slider

photos = ["../image/banner.png", "./image/banner4.jpg", "./image/banner2.jpg"];
let i = 0;
for (let i = 0; i < photos.length; i++) {
    const headerDot = document.querySelectorAll(".header-main-dot")[i];

    headerDot.addEventListener("click", () => {
        const background = document.getElementById("header-main");
        background.style.background = `linear-gradient(rgba(59, 74, 90, 0.342), #344750), url(${photos[i]})`;
        background.style.backgroundSize = "cover";
        background.style.backgroundPosition = "center";
        background.style.backgroundRepeat = "no-repeat";
    });
}

const slides = () => {
    const background = document.getElementById("header-main");
    background.style.background = `linear-gradient(rgba(59, 74, 90, 0.342), #344750), url(${photos[i]})`;
    background.style.backgroundSize = "cover";
    background.style.backgroundPosition = "center";
    background.style.backgroundRepeat = "no-repeat";
    if (i < photos.length - 1) {
        i++;
    } else {
        i = 0;
    }

};

setInterval(slides, 4000);