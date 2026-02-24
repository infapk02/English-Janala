// get lesson buttons
const getLessonButtons = () => {
  fetch("https://openapi.programming-hero.com/api/levels/all")
    .then((res) => res.json())
    .then((data) => displayButtons(data.data));
};

// get words by lesson level
const getWordsByLesson = (id) => {
  fetch(`https://openapi.programming-hero.com/api/level/${id}`)
    .then((res) => res.json())
    .then((data) => displayWordsByLesson(data.data));
};

// display buttons
const displayButtons = (data) => {
  const buttonsContainer = document.getElementById("buttonsContainer");
  buttonsContainer.innerHTML = ``;
  data.forEach((elem) => {
    buttonsContainer.innerHTML += `<button id="${elem.id}" onclick="getWordsByLesson(${elem.level_no})"
              class="flex items-center border-2 text-indigo-700 border-indigo-700 px-4 py-1 gap-0.5 rounded-md hover:bg-indigo-700 hover:text-white transition duration-300 cursor-pointer"
            >
              <i class="fa-solid fa-book-open"></i>
              <span class="text-lg font-medium">Lesson-${elem.level_no}</span>
            </button>`;
  });
};

const displayWordsByLesson = (words) => {
  const wordsContainer = document.getElementById("wordsContainer");
  wordsContainer.innerHTML = ``;

  if (words.length) {
    words.forEach((word) => {
      wordsContainer.innerHTML += `
        <div id="${word.id}" class="p-5 rounded-md bg-gray-200">
              <div class="p-3 bg-white rounded-md">
                <div
                  class="flex flex-col justify-center items-center space-y-3 mt-4"
                >
                  <h3 class="font-bold capitalize text-2xl">${word.word}</h3>
                  <p class="text-lg font-bold">Meaning /Pronunciation</p>
                  <p class="text-lg font-bold">"${word.meaning} / ${word.pronunciation}"</p>
                </div>

                <div class="flex mt-8 w-full justify-between">
                  <!-- details button -->
                  <div class="p-2 bg-blue-200 rounded-md cursor-pointer">
                    <i class="fa-solid fa-circle-info text-lg"></i>
                  </div>
                  <!-- speaker button -->
                  <div class="p-2 bg-blue-200 rounded-md cursor-pointer">
                    <i class="fa-solid fa-volume-low text-lg"></i>
                  </div>
                </div>
              </div>
            </div>
      `;
    });
  } else {
    wordsContainer.innerHTML = `
            <div
              class="col-span-12 p-20 flex flex-col justify-center items-center bg-gray-200 rounded-md"
            >
              <img src="./assets/alert-error.png" alt="error-image">
              <p class="text-sm text-gray-500 font-medium mb-1">
                এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।
              </p>
              <h3 class="text-4xl font-bold">নেক্সট Lesson এ যান</h3>
            </div>
    `;
  }
};

// call get functions
getLessonButtons();
// call display functions
