const addBtn = document.querySelector(".add");

//添加笔记函数
const addNewNote = (text = "") => {
  const note = document.createElement("div");
  note.classList.add("note");

  note.innerHTML = `
    <div class="tools">
        <button class="edit"><i class="fas fa-edit"></i></button>
        <button class="delete"><i class="fas fa-trash"></i></button>
        </div>

      <div class="main ${text ? "" : "hidden"}"></div>
      <textarea class="${text ? "hidden" : ""}"></textarea>
      `;

  const editBtn = note.querySelector(".edit");
  const deleteBtn = note.querySelector(".delete");
  const main = note.querySelector(".main");
  const textArea = note.querySelector("textarea");

  textArea.value = text;
  main.innerHTML = marked(text);

  deleteBtn.addEventListener("click", () => {
    note.remove();

    updateLS();
  });

  editBtn.addEventListener("click", () => {
    main.classList.toggle("hidden");
    textArea.classList.toggle("hidden");
  });

  //添加markdown
  textArea.addEventListener("input", (e) => {
    const { value } = e.target;
    main.innerHTML = marked(value);
    updateLS();
  });

  document.body.appendChild(note);
};

//获取本地存储的笔记
const notes = JSON.parse(localStorage.getItem("notes"));

//如果本地存储有笔记，则添加笔记
if (notes) {
  notes.forEach((note) => {
    addNewNote(note);
  });
}

//添加新笔记
addBtn.addEventListener("click", () => addNewNote());

//更新本地存储函数
const updateLS = () => {
  const noteText = document.querySelectorAll("textarea");

  const notes = [];

  noteText.forEach((note) => {
    notes.push(note.value);
  });

  localStorage.setItem("notes", JSON.stringify(notes));
};
