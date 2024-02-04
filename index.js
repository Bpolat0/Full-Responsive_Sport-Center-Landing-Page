window.onload = function () {
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

    mobileMenu.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
            menuBtn.classList.remove('is-active');
            mobileMenu.classList.remove('is-active');
        }
    });
};

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

btn2.addEventListener("click", (e) => {
    btn2.classList.add("active");
    btn1.classList.remove("active");
    btn3.classList.remove("active");
    btn4.classList.remove("active");
    document.querySelector(".classes-content").innerHTML = content2;
});

btn3.addEventListener("click", (e) => {
    btn3.classList.add("active");
    btn1.classList.remove("active");
    btn2.classList.remove("active");
    btn4.classList.remove("active");
    document.querySelector(".classes-content").innerHTML = content3;
});

btn4.addEventListener("click", (e) => {
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
const galaxyFold = window.matchMedia("(max-width: 360px)");

function calculateBMI() {
    let bmi = yourWeight.value / ((yourHeight.value / 100) * (yourHeight.value / 100));
    

    let bmiRanges = [
        {min: 0, max: 18.5, text: "Underweight", minPercentage: 9, maxPercentage: 24},
        {min: 18.5, max: 24.9, text: "Normal", minPercentage: 25, maxPercentage: 40},
        {min: 25, max: 29.9, text: "Overweight", minPercentage: 42, maxPercentage: 57},
        {min: 30, max: 35, text: "Obese", minPercentage: 58, maxPercentage: 73},
        {min: 35, max: 40, text: "Extremely Obese", minPercentage: 75, maxPercentage: 89},
        {min: 40, max: 100, text: "Dead", minPercentage: 89, maxPercentage: 89}
    ];

    let bmiRangesForMax360px = [
        { min: 0, max: 18, text: "Underweight", minPercentage: 24, maxPercentage: 34 },
        { min: 18.5, max: 24.9, text: "Normal", minPercentage: 35, maxPercentage: 44 },
        { min: 25, max: 29.9, text: "Overweight", minPercentage: 45, maxPercentage: 54 },
        { min: 30, max: 35, text: "Obese",  minPercentage: 55, maxPercentage: 64 },
        { min: 35, max: 40, text: "Extremely Obese", minPercentage: 66, maxPercentage: 75 },
        { min: 40, max: 100, text: "Dead", minPercentage: 75, maxPercentage: 75 }
    ];

    if (galaxyFold.matches) {
        bmiRanges.forEach((range, index) => {
            range.min = bmiRangesForMax360px[index].min;
            range.max = bmiRangesForMax360px[index].max;
            range.minPercentage = bmiRangesForMax360px[index].minPercentage;
            range.maxPercentage = bmiRangesForMax360px[index].maxPercentage;
        });
    }else{
        bmiRanges.forEach((range, index) => {
            range.min = bmiRanges[index].min;
            range.max = bmiRanges[index].max;
            range.minPercentage = bmiRanges[index].minPercentage;
            range.maxPercentage = bmiRanges[index].maxPercentage;
        });
    }

    if  (bmi < 0 || bmi > 100){
        bmiText.innerHTML = "Please enter a valid weight and height";
    }
    else{
    let bmiRange = bmiRanges.find(range => bmi >= range.min && bmi < range.max);
    let leftPercentage = ((bmi - bmiRange.min) / (bmiRange.max - bmiRange.min)) * (bmiRange.maxPercentage - bmiRange.minPercentage) + bmiRange.minPercentage;

    bmiText.innerHTML = Math.round(bmi) + " " + bmiRange.text;
    triangle.style.setProperty('--bmi-position', leftPercentage + '%');
    }

}

yourHeight.addEventListener("input", calculateBMI);
yourWeight.addEventListener("input", calculateBMI);


document.querySelectorAll('a[href^="#"]').forEach(anchor => { 
    anchor.addEventListener('click', function (e) { 
        e.preventDefault(); 
        const targetElement =  
              document.querySelector(this.getAttribute('href')); 
        window.scrollTo({ 
            top: targetElement.offsetTop, 
            behavior: 'smooth' 
        }); 
    }); 
}); 














