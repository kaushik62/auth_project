let para_danger = document.querySelector(".para_danger");
let para_success = document.querySelector(".para_success");


function signup() {
  if (username.value == "" || email.value == "" || password.value == "") {
   
  }
   else {
    setTimeout(() => {
      username.value = "";
      email.value = "";
      password.value = "";
    }, 2000);

    // para_success.style.display = "block";
  }

  setTimeout(() => {
    para_danger.style.display = "none";
    para_success.style.display = "none";
  }, 3000);
}


let popup_signup = document.getElementById("popup_signup");

let front_page = document.querySelector(".front_page");
let choose_container_outer = document.querySelector(".choose_container_outer");


front_page.addEventListener("click", function(){
    popup_signin.style.display = 'none'
    popup_signup.style.display = 'none'
})
choose_container_outer.addEventListener('click', ()=>{
    popup_signin.style.display = 'none'
    popup_signup.style.display = 'none'
})

    let popup_signin = document.getElementById("popup_signin");

    function show_signup(){
        popup_signin.style.display = 'none';
        popup_signup.style.display = 'block';
    }
    function show_signin(){
        popup_signup.style.display = 'none';
        popup_signin.style.display = 'block';
    }