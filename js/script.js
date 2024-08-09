const nome = document.querySelector("#nome");
const button = document.querySelector("button");
const lista = document.querySelector(".lista");
const email = document.querySelector("#email");
const telefone = document.querySelector("#telefone");

button.addEventListener("click", (event) => {
  event.preventDefault();

  const inputNameValue = nome.value;
  const inputEmailValue = email.value;
  const inputTelefoneValue = telefone.value;

  if (inputNameValue === "" || inputEmailValue === "" || inputTelefoneValue === "") {
    alert("Por favor preencha todos os campos!");
    return false;
  }

  const contato = document.createElement("div");
  contato.classList.add("contato");

  const infoContato = document.createElement("div");
  infoContato.classList.add("info-contato");

  const nomeContato = document.createElement("li");
  nomeContato.textContent = inputNameValue;

  const emailContato = document.createElement("li");
  emailContato.textContent = inputEmailValue;

  const telefoneContato = document.createElement("li");
  telefoneContato.textContent = inputTelefoneValue;

  infoContato.appendChild(nomeContato);
  infoContato.appendChild(emailContato);
  infoContato.appendChild(telefoneContato);

  const excluirBtn = document.createElement("button");
  excluirBtn.classList.add("excluir-btn");
  excluirBtn.textContent = "Excluir";

  excluirBtn.addEventListener("click", () => {
    contato.remove();
  });

  contato.appendChild(infoContato);
  contato.appendChild(excluirBtn);

  lista.appendChild(contato);

  nome.value = "";
  email.value = ""; 
  telefone.value = "";
});