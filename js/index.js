const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png",
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io",
  },
  footer: {
    copyright: "Copyright Great Idea! 2018",
  },
};

// NAVIGATION AND ANCHORS WITH THE FOREACH
// const navLinks = document.querySelectorAll("a");
// navLinks.forEach((navLinks, index) => {
//   navLinks.textContent = siteContent[`nav`][`nav-item-${index + 1}`];
//   navLinks.style.color = "green";
// });

// BASIC METHOD WITHOUT THE FOREACH
// navLinks[0].textContent = siteContent["nav"]["nav-item-1"];
// navLinks[1].textContent = siteContent["nav"]["nav-item-2"];
// navLinks[2].textContent = siteContent["nav"]["nav-item-3"];
// navLinks[3].textContent = siteContent["nav"]["nav-item-4"];
// navLinks[4].textContent = siteContent["nav"]["nav-item-5"];
// navLinks[5].textContent = siteContent["nav"]["nav-item-6"];

// METHOD WITH THE FOR LOOP
// Object.values(siteContent.nav) retrieves the values
// Object.keys(siteContent.nav) retrieves the keys
const navLinks = document.querySelectorAll("a");
const aValues = Object.values(siteContent.nav);
for (let i = 0; i < navLinks.length; i++) {
  // navLinks[i].textContent = Object.values(siteContent.nav)[i];
  navLinks[i].textContent = aValues[i];
  // navLinks[1].textContent = "goodbye";
  // navLinks[1].style.color = "magenta";
  navLinks[i].style.color = "green";
}

// ADD NEW ANCHORS
const addNav = document.querySelector("nav");
const newNav1 = document.createElement("a");
newNav1.textContent = "Login";
newNav1.style.color = "magenta";

const newNav2 = document.createElement("a");
newNav2.textContent = "Register";
newNav2.style.color = "magenta";

addNav.prepend(newNav2);
addNav.appendChild(newNav1);

// LOGO
// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

// can also do it this way:
// logo.src = "img\\logo.png";

//HEADER SLOGAN
const header1 = document.querySelector("h1");
header1.innerHTML = "DOM <br> Is <br> Awesome";

// HEADER BUTTON
const button = document.querySelector("button");
button.textContent = siteContent.cta.button;

// HEADER IMAGE
const image1 = document.getElementById("cta-img");
image1.src = siteContent.cta["img-src"];

// CONTENT HEADERS THE BASIC WAY
// const header4 = document.querySelectorAll(".main-content h4");
// header4[0].textContent = siteContent["main-content"]["features-h4"];
// header4[1].textContent = siteContent["main-content"]["about-h4"];
// header4[2].textContent = siteContent["main-content"]["services-h4"];
// header4[3].textContent = siteContent["main-content"]["product-h4"];
// header4[4].textContent = siteContent["main-content"]["vision-h4"];

// CONTENT USING FOREACH LOOP
const header4 = document.querySelectorAll(".main-content h4");
// console.log(header4);
// make an array that the items can be used to call the subitems of main-content
const content = ["features", "about", "services", "product", "vision"];
// console.log(content);
header4.forEach((heading, index) => {
  heading.textContent = siteContent["main-content"][content[index] + "-h4"];
});

// CONTENT IMAGE
const middleimage = document.getElementById("middle-img");
middleimage.src = siteContent["main-content"]["middle-img-src"];

// CONTENT PARAGRAPHS
const paragraphs = document.querySelectorAll(".text-content p");
paragraphs.forEach((heading, index) => {
  heading.textContent =
    siteContent["main-content"][content[index] + "-content"];
  heading.style.backgroundColor = "#cceef7";
});

// CONTACT HEADER
const contactheader = document.querySelector(".contact h4");
contactheader.textContent = siteContent.contact["contact-h4"];

//CONTACT ADDRESS
// const contact = document.querySelectorAll(".contact p");
// contact[0].innerHTML = "123 Way 456 Street<br>Somewhere, USA";
// contact[1].textContent = siteContent.contact.phone;
// contact[2].textContent = siteContent.contact.email;

// ANOTHER WAY TO GET CONTACT ADDRESS
const contactinfo = document.querySelectorAll(".contact p");
const contactarray = ["address", "phone", "email"];
contactinfo.forEach((key, index) => {
  key.textContent = siteContent.contact[contactarray[index]];
});

// COPYRIGHT
const copyright = document.querySelectorAll("footer p");
copyright.textContent = siteContent.footer.copyright;
