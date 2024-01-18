////
function addAll(){
  const textTitle = document.getElementById("textTitle").value
  const dateTitle = document.getElementById("dateTitle").value


  if (textTitle.trim() === "" || dateTitle ==="") {
      alert("Вы не ввели текст!")
      return
  }
  
  if (textTitle && dateTitle) {
    const textList = document.getElementById("textList");
    const textEl = document.createElement("div");
    textEl.classList.add("home");
    textEl.innerHTML = 
    `<strong>${textTitle}</strong> - Дедлайн: ${dateTitle}
    <button onclick="deleteText(event)">Удалить</button>`;
    textEl.addEventListener("click", toggleSt);
    
    textList.appendChild(textEl);
  }

  document.getElementById("textTitle").value = ""
  document.getElementById("dateTitle").value = ""

}


function deleteText(event) {
  event.stopPropagation();
  const textEl = event.target.parentNode;
  textEl.remove();
}

function toggleSt(event) {
  event.stopPropagation();
  const textEl = event.currentTarget;
  textEl.classList.toggle("ending");
}

function deleteAll() {
  const textList = document.getElementById("textList");
  textList.innerHTML = "";
}

function changeAdd() {
  const tasks = document.querySelectorAll(".home");
  tasks.forEach(task => task.classList.toggle("ending"));
}