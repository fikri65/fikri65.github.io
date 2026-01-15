function addItem() {
  const input = document.getElementById("gearName");
  const tier = document.getElementById("tierSelect").value;
  const text = input.value.trim();

  if (text === "") {
    alert("Masukkan nama gear!");
    return;
  }

  const itemDiv = document.createElement("div");
  itemDiv.className = "item";
  itemDiv.innerHTML = `
                ${text}
                <button class="btn-del" onclick="this.parentElement.remove()">×</button>
            `;

  document.getElementById(`items-${tier}`).appendChild(itemDiv);
  input.value = "";
  input.focus();
}


