
// 1 // enlarge nav links

const navLink = document.querySelectorAll('.nav-link');

navLink.forEach(function(navLink){ 
    navLink.addEventListener('mousemove', function (){
        navLink.style.transform = 'scale(1.5)'})
    navLink.addEventListener('mouseleave', function (){
        navLink.style.transform = 'scale(1)'})
});


// 2 // destination photo change when hovering

const destinationImg = document.querySelector('.content-destination img');
destinationImg.addEventListener('mouseenter', () => {
    destinationImg.style.transform = 'scale(1.1)';
    adventureImg.style.transition = 'transform 1s';
});

destinationImg.addEventListener('mouseleave', () => {
    destinationImg.style.transform = 'scale(1)';
    destinationImg.style.transition = 'transform 1s';
});


// 3 // body background color change on click

const body = document.querySelector("body");
body.addEventListener("click", (e) => {
    body.style.backgroundColor = "#bbf1c8";
});


// 4 // adventure image changes to a new image when clicked

const adventureImg = document.querySelector('.content-section img');
adventureImg.addEventListener('click', () => {
    adventureImg.src = 'https://images.unsplash.com/photo-1530521954074-e64f6810b32d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80';
});


// 5 // changing header color once mouse hovers

const textContent = document.querySelector('.logo-heading');
textContent.addEventListener('mouseenter', () => {
    textContent.style.color = '#fbc687';
});


// 6 //

body.addEventListener("keydown", (e) => {
    if (e.key === "k") { // k for kelli :) //
        body.style.color = "#1b6ca8";
    }
});


// 7 // changing first destination title under destination img

const destinationTitles = document.querySelectorAll('.destination h4');
const firstTitle = destinationTitles[0];
firstTitle.addEventListener('mouseenter', () => {
    firstTitle.textContent = 'Aruba';
});


// 8 // changing second destination title under destination img

const secondTitle = destinationTitles[1];
secondTitle.addEventListener('mouseenter', () => {
    secondTitle.textContent = "Jamaica";
});


// 9 // changing third destination title under destination img

const thirdTitle = destinationTitles[2];
thirdTitle.addEventListener('mouseenter', () => {
    thirdTitle.textContent = "OOO I wanna take ya";
});


// 10 // change footer background color

const footer = document.querySelector('footer');
footer.addEventListener('mouseenter', () => {
    footer.style.backgroundColor = '#dbc6eb';
});


// preventDefault //

const navA = document.querySelector('.nav-link');
navA.addEventListener('click', function(event){
    event.preventDefault();
});




