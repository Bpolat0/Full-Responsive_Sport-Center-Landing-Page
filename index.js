window.onload = function() {
    const menuBtn = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-nav');
    const nav = document.querySelector('.navigation');
    
    window.onscroll = function () { 
        if (document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50) {
            nav.style.backgroundColor = "rgb(53, 85, 146)";
            nav.style.transition = "0.5s";
            nav.style.width = "100%";
        } else {
            nav.style.backgroundColor = "rgba(53, 85, 146, 0)";
        }
    
};

    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('is-active'); 
        mobileMenu.classList.toggle('is-active');
    });

    


}



const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const btn4 = document.querySelector("#btn4");

const content1 = document.querySelector(".classes-content").innerHTML;
const content2 = `
<div id="btn2-content" class="classes-hero">

<div class="info-img">
    <img src="Resimler/group.webp" alt="">
</div>

<div class="info-yoga">
    
    <h1>Yoga with our group</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur possimus voluptatum impedit odit perferen</p>

    <h1>Our group meeting hours</h1>
    <p id="week-program">Saturday-Sunday: 8:00am -10:00am <br> Monday-Tuesday: 10:00am -12:00pm <br> Wednesday-Friday: 3:00pm - 6:00pm
    </p> 
    
</div>

</div>`;
const content3 = `<div id="btn3" class="classes-hero">

<div class="info-yoga">
    
    <h1>For those who want to work solo</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur possimus voluptatum impedit odit perferendis</p>

    <h1>When comes Yoga Your Time.</h1>
    <p id="week-program">Saturday-Sunday: 8:00am -10:00am <br> Monday-Tuesday: 10:00am -12:00pm <br> Wednesday-Friday: 3:00pm - 6:00pm
    </p> 
    
</div>

<div class="info-img">
    <img src="Resimler/solo.jpg" alt="">
</div>
</div>`;

const content4 = `<div id="btn4" class="classes-hero">

<div class="info-img">
    <img src="Resimler/stret.webp" alt="">
</div>

<div class="info-yoga">
    
    <h1>Streching</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur possimus voluptatum impedit odit perferen</p>

    <h1>Our group meeting hours</h1>
    <p id="week-program">Saturday-Sunday: 8:00am -10:00am <br> Monday-Tuesday: 10:00am -12:00pm <br> Wednesday-Friday: 3:00pm - 6:00pm
    </p> 
    
</div>

</div>`;


btn1.addEventListener("click", (e) => {
    btn1.classList.add("active");
    btn2.classList.remove("active");
    btn3.classList.remove("active");
    btn4.classList.remove("active");
    document.querySelector(".classes-content").innerHTML = content1;
});

btn2.addEventListener("click",(e) => {
    btn2.classList.add("active");
    btn1.classList.remove("active");
    btn3.classList.remove("active");
    btn4.classList.remove("active");
    document.querySelector(".classes-content").innerHTML = content2;
});

btn3.addEventListener("click",(e) => {
    btn3.classList.add("active");
    btn1.classList.remove("active");
    btn2.classList.remove("active");
    btn4.classList.remove("active");
    document.querySelector(".classes-content").innerHTML = content3;
});

btn4.addEventListener("click",(e) => {
    btn4.classList.add("active");
    btn1.classList.remove("active");
    btn2.classList.remove("active");
    btn3.classList.remove("active");
    document.querySelector(".classes-content").innerHTML = content4;
});

const yourWeight = document.querySelector(".input-weight");
const yourHeight = document.querySelector(".input-height");
const triangle = document.querySelector(".bmi-img");
const bmiText = document.querySelector("#your-bmi");

function calculateBMI() {
    let minBmi, maxBmi, minPercentage, maxPercentage, leftPercentage;
    let bmi = yourWeight.value / ((yourHeight.value / 100) * (yourHeight.value / 100));

    bmiText.innerHTML = bmi;

    if (bmi < 18) {
        minBmi = 0;
        maxBmi = 18;
        minPercentage = 9;
        maxPercentage = 24;
        leftPercentage = ((bmi - minBmi) / (maxBmi - minBmi)) * (maxPercentage - minPercentage) + minPercentage;
        bmiText.innerHTML += " Underweight";
    } else if (bmi < 25) {
        minBmi = 18.5;
        maxBmi = 24.9;
        minPercentage = 25;
        maxPercentage = 40;
        leftPercentage = ((bmi - minBmi) / (maxBmi - minBmi)) * (maxPercentage - minPercentage) + minPercentage;
        bmiText.innerHTML += " Normal";
    } else if (bmi < 30) {
        minBmi = 25;
        maxBmi = 29.9;
        minPercentage = 42;
        maxPercentage = 57;
        leftPercentage = ((bmi - minBmi) / (maxBmi - minBmi)) * (maxPercentage - minPercentage) + minPercentage;
        bmiText.innerHTML += " Overweight";      
    } else if (bmi < 35) {
        minBmi = 30;
        maxBmi = 35;
        minPercentage = 58;
        maxPercentage = 73;
        leftPercentage = ((bmi - minBmi) / (maxBmi - minBmi)) * (maxPercentage - minPercentage) + minPercentage;
        bmiText.innerHTML += " Obese";
    } else if (bmi < 40) {
        minBmi = 35;
        maxBmi = 40;
        minPercentage = 75;
        maxPercentage = 89;
        leftPercentage = ((bmi - minBmi) / (maxBmi - minBmi)) * (maxPercentage - minPercentage) + minPercentage;
        bmiText.innerHTML += " Extremely Obese";
    } else if (bmi >= 40) {
        minBmi = 40;
        maxBmi = 100;
        minPercentage = 89;
        maxPercentage = 89;
        leftPercentage = ((bmi - minBmi) / (maxBmi - minBmi)) * (maxPercentage - minPercentage) + minPercentage;
        bmiText.innerHTML += " Extremely Obese";
    }

    triangle.style.setProperty('--bmi-position', leftPercentage + '%');
}

yourHeight.addEventListener("input", calculateBMI);
yourWeight.addEventListener("input", calculateBMI);













 


