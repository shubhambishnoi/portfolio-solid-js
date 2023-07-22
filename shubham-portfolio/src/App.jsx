import { createEffect } from "solid-js";
import { linkedin,twitter,website,github } from "./config";

function App() {

  const socialMedia = [website,linkedin,github,twitter]
  
  createEffect(()=>{
    const body = document.querySelector("body");

    body.addEventListener("click",()=>{
      const image = document.querySelector(".profile-image");

      if(image.classList.contains("circle")){
        image.classList.remove("circle");
        image.classList.add("square")
      } else{
        image.classList.remove("square");
        image.classList.add("circle")
      }
    })
  })
  return (
    <div class="container">
      <div class="avatar">
        <img src={"/src/assets/photo.jpg"} alt="shubham-picture" class="profile-image circle"/>
      </div>
      <h1 class="name-heading">Shubham Bishnoi</h1>
      <h3 class="email-heading">shubhambishnoi78@gmail.com</h3>

      <p>Follow me on:</p>
      <div class="link-container">
      {socialMedia.map((platform) => <a href={platform.link}>{platform.icon}</a>)}
      </div>
   
    </div>
  );
}

export default App;
