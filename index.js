const formUser = document.getElementById("formUser");

const nav = document.getElementById("navDiv")
const btn = document.getElementById("darkModeBtn");
const displaySection = document.getElementById("displaySection");

const displayDiv = document.getElementById("displayDiv");
const formDiv = document.getElementById("formDiv");
const headerDiv = document.getElementById("headerDiv");
const statsSection = document.getElementById("statsSection");
const langSection = document.getElementById("langSection");
const footer = document.querySelector("footer");

// Evento de form submit
formUser.addEventListener("submit", (e) => {
  const formData = new FormData(e.target);
  const userName = formData.get("username");
  const password = formData.get("password");

  e.preventDefault();

  let xhr = new XMLHttpRequest();
  xhr.responseType = "json";
  xhr.open("get", "https://jsonplaceholder.typicode.com/users", true);
  xhr.onload = () => {
    let jsonResponse = xhr.response;

    if (
      [...jsonResponse].find(
        (element) => element.username === userName && element.id == password
      )
    ) {
      const greetingDiv = document.createElement("div");
      greetingDiv.classList.add("display-text");
      greetingDiv.innerHTML = `<h1>Bienvenido/a a BitCode ${userName}!</h1><p>Ya estas listo/a para preparar tu primer deploy!<p/>`;

      // esconder divs de pagina principal al inicio de sesion
      headerDiv.classList.add("hidden");
      formDiv.classList.add("hidden");
      statsSection.classList.add("hidden");

      // mostrar div de bienvenida
      displayDiv.appendChild(greetingDiv);

      // mostrar div de lenguajes de SDK
      langSection.classList.remove("hidden");
    }
  };
  xhr.send();
});

// boton de modo oscuro
btn.addEventListener("click", () => {
  if (
    (
      displaySection.classList.contains("bg-light") &&
      statsSection.classList.contains("bg-light") &&
      langSection.classList.contains("bg-light")
    )
  ) {
    displaySection.classList.remove("bg-light");
    statsSection.classList.remove("bg-light");
    langSection.classList.remove("bg-light");

    displaySection.classList.add("bg-mid");
    statsSection.classList.add("bg-mid");
    langSection.classList.add("bg-mid");

    btn.innerText = "Modo Claro"
  } else {
    displaySection.classList.remove("bg-mid");
    statsSection.classList.remove("bg-mid");
    langSection.classList.remove("bg-mid");

    displaySection.classList.add("bg-light");
    statsSection.classList.add("bg-light");
    langSection.classList.add("bg-light");

    btn.innerText = "Modo Oscuro"
  }
});
