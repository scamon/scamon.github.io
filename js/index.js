const wrapper = document.querySelector(".wrapper");
const btn = document.querySelector(".btn");
const desc = document.querySelector(".desc");

function renderScam() {
  const markup = `
    <p class="text2">   Ваш смартфон не захищено!! Виявлено понад ${randomScamNumber()} заражених файлів, негайно зверніться в сервісний центр для усунення загрози!</p>
    `;

  wrapper.insertAdjacentHTML("beforeend", markup);
}

btn.addEventListener("click", () => {
  desc.style.display = "none";
  document.querySelector(".text2").style.display = "none";
  document.body.style.backgroundColor = "green";
  document.querySelector(".text1").style.color = "#ffffff";
  renderSuccess();
  document.querySelector(".text3").style.color = "#ffffff";
});

function renderSuccess() {
  const markup = `<svg class='img-scam' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" enable-background="new 0 0 64 64"><path d="M32,2C15.431,2,2,15.432,2,32c0,16.568,13.432,30,30,30c16.568,0,30-13.432,30-30C62,15.432,48.568,2,32,2z M25.025,50  l-0.02-0.02L24.988,50L11,35.6l7.029-7.164l6.977,7.184l21-21.619L53,21.199L25.025,50z" fill="#BAFF9F "/></svg>
    <p class="text3">Ваш смартфон зараз функціонує належним чином і вільний від шкідливих програм та загроз безпеці.</p>`;

  wrapper.insertAdjacentHTML("beforeend", markup);
}

function randomScamNumber() {
  return Math.floor(Math.random() * 301) + 200;
}

renderScam();
