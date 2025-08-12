let html_body1=document.getElementById("body")
new_h1=document.createElement("h1")
new_h1.innerText="MY BIODATA USING IN DOM"
html_body1.append(new_h1)


let html_body=document.getElementById("body")
let my_img=document.createElement("img")
my_img.setAttribute("src",`./WhatsApp Image 2025-04-11 at 6.17.59 PM.jpeg`)
my_img.setAttribute("width", "200");
my_img.setAttribute("height", "250");
html_body.append(my_img)
new_h1=document.createElement("h2")
new_h1.innerText="Personal Details"
html_body1.append(new_h1)
let details = [
  "Name: JHANSI NAGA BHAVANI",
  "Age: 22",
  "Email: jhansi@gamil.com",
  "Phone: +91*********",
  "Address:TANUKU,WEST GODAVARI(Andhra Pradesh), India"
];

details.forEach(info => {
  let p = document.createElement("p");
  p.textContent = info;
  html_body.append(p);
});

let html_body2=document.getElementById("body")
edu_h1=document.createElement("h2")
edu_h1.innerText="Educational Details"
html_body2.append(edu_h1)

let education = [
  "SSC - ZPP BOYS High School,(TANUKU) 2020",
  "Intermediate - S.K.S.D MAHILAKALASALA Junior College,(TANUKU)2022",
  "B.A [H.E.P]-S.K.S.D MAHILAKALASALA UG&PG (TANUKU) 2025"
];

let ul = document.createElement("ul");
education.forEach(course => {
  let li = document.createElement("li");
  li.textContent = course;
  ul.append(li);
});
html_body.append(ul);

let html_body3=document.getElementById("body")
skills_h1=document.createElement("h2")
skills_h1.innerText="Technical Skills"
html_body2.append(skills_h1)

let skillsTitle = document.createElement("h2");
skillsTitle.textContent = "";
html_body.append(skillsTitle);

let skills = [
  "HTML, CSS, JavaScript",
  "React.js & Node.js",
  "Python & Java",
  "MySQL & MongoDB",
  "Git & GitHub"
];
let skillsList = document.createElement("ul");
skills.forEach(skill => {
  let li = document.createElement("li");
  li.textContent = skill;
  skillsList.append(li);
});
html_body.append(skillsList);
  skillsList.style.listStyle="none"


new_h1=document.createElement("marquee")
new_h1.innerText="THIS MY BIODATA THANK YOU "
html_body1.append(new_h1)



