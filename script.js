// get lesson buttons
const getLessonButtons = () => {
  fetch("https://openapi.programming-hero.com/api/levels/all")
    .then((res) => res.json())
    .then((data) => displayButtons(data.data));
};

// display buttons
const displayButtons = (data) => {
  const buttonsContainer = document.getElementById("buttonsContainer");
  buttonsContainer.innerHTML = ``;
  data.forEach((elem) => {
    buttonsContainer.innerHTML += `<button id="${elem.id}"
              class="flex items-center border-2 text-indigo-700 border-indigo-700 px-4 py-1 gap-0.5 rounded-md hover:bg-indigo-700 hover:text-white transition duration-300 cursor-pointer"
            >
              <i class="fa-solid fa-book-open"></i>
              <span class="text-lg font-medium">Lesson-${elem.level_no}</span>
            </button>`;
  });
};

// call get functions
getLessonButtons();
// call display functions
