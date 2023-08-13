let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.nav__list');
let menuItem = document.querySelectorAll('.nav__link');

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})


menuItem.forEach (function(menuItem) {
  menuItem.addEventListener('click',function(){
          menuBtn.classList.toggle('active');
          menu.classList.toggle('active');
  })
})
console.log(123)

const pl = navigator.userAgent;
const device = navigator.userAgentData.platform;

const form = document.querySelector("form")


form.addEventListener("submit", (event) => {
  // event.preventDefault();

  let name = form.elements.name.value;
  const phone = form.elements.phone.value;
  const message = form.elements.message.value;



  const messageMail = `
  Name: ${name}
  Phone: ${phone}
  Messege: ${message}
  Device: ${device}
  `;
  console.log(messageMail);

  const TOKEN = "6014843720:AAHEkSz57Cq-xUOt26zOQLu_YDOkYgZxFz4";
  const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
  const ID = "-1001985432283";

  axios
    .post(URI_API, {
      chat_id: ID,
      parse_mode:"html",
      text:messageMail,
    }
  )
  .then((res)=>{
    console.log(res);
  }
  )
  .catch((error)=>{
    console.log(error);
  }
  );
});