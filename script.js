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

// get word details
const getWordDetails = (id) => {
  fetch(`https://openapi.programming-hero.com/api/word/${id}`)
    .then((res) => res.json())
    .then((data) => {
      displayWordDetails(data.data);
    });
};

// active button functionalities

const handleLessonClick = (button, levelNo) => {
  // remove active from all buttons
  const allButtons = document.querySelectorAll(".lesson-btn");

  allButtons.forEach((btn) => {
    btn.classList.remove("bg-indigo-700", "text-white");
  });

  // add active to clicked button
  button.classList.add("bg-indigo-700", "text-white");

  // load words
  getWordsByLesson(levelNo);
};

// speck word functionalities
function pronounceWord(word) {
  const utterance = new SpeechSynthesisUtterance(word);
  utterance.lang = "en-EN"; // English
  utterance.rate = 0.4;
  utterance.pitch = 2;
  window.speechSynthesis.speak(utterance);
}

// display buttons
const displayButtons = (data) => {
  const buttonsContainer = document.getElementById("buttonsContainer");
  buttonsContainer.innerHTML = ``;

  data.forEach((elem) => {
    buttonsContainer.innerHTML += `
      <button
        onclick="handleLessonClick(this, ${elem.level_no})"
        class="lesson-btn flex items-center border-2 text-indigo-700 border-indigo-700 px-2 sm:px-4 py-0.5 sm:py-1 gap-0.5 rounded-md hover:bg-indigo-700 hover:text-white transition duration-300 cursor-pointer"
      >
        <i class="fa-solid fa-book-open text-xs sm:text-base"></i>
        <span class="text-sm sm:text-lg font-medium">Lesson-${elem.level_no}</span>
      </button>
    `;
  });
};

// display words
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
                  <p class="text-sm text-center font-bold">"${word.meaning ? word.meaning : "মিনিং পাওয়া যায় নি"} / ${word.pronunciation}"</p>
                </div>

                <div class="flex mt-8 w-full justify-between">
                  <!-- details button -->
                  <div id="detailsBtn" onclick="getWordDetails(${word.id})" class="p-2 bg-blue-200 rounded-md cursor-pointer">
                    <i class="fa-solid fa-circle-info text-lg"></i>
                  </div>
                  <!-- speaker button -->
                  <div onclick ="pronounceWord('${word.word}')" class="p-2 bg-blue-200 rounded-md cursor-pointer">
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
              class="col-span-12 p-10 sm:p-20 flex flex-col justify-center items-center bg-gray-200 rounded-md"
            >
              <img src="./assets/alert-error.png" alt="error-image">
              <p class="text-xs sm:text-sm text-gray-500 font-medium mb-1">
                এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।
              </p>
              <h3 class="text-xl sm:text-2xl md:text-4xl font-bold">নেক্সট Lesson এ যান</h3>
            </div>
    `;
  }
};

// display word details

const displayWordDetails = (wordDetails) => {
  const modalContainer = document.getElementById("modalContainer");
  const synonymsHTML = wordDetails.synonyms?.length
    ? wordDetails.synonyms
        .map(
          (synonym) => `
          <p class="text-sm rounded-md capitalize px-4 py-1.5 bg-blue-200">
            ${synonym}
          </p>
        `,
        )
        .join("")
    : `<p class="text-sm rounded-md px-4 py-1.5 bg-red-200">
          কোনো সমার্থক শব্দ পাওয়া যায় নি
        </p>`;

  modalContainer.innerHTML = `
    <dialog id="wordDetailsModal" class="modal">
              <div class="modal-box space-y-4">
                <!-- word-title -->
                <div>
                  <h2 class="sm:text-3xl text-xl font-bold uppercase">( ${wordDetails.word} | ${wordDetails.pronunciation} )</h2>
                </div>
                <!-- meaning -->
                <div>
                  <h2 class="sm:text-2xl text-lg font-bold capitalize">Meaning</h2>
                  <p class="text-base">${wordDetails.meaning ? wordDetails.meaning : "মিনিং পাওয়া যায় নি।"}</p>
                </div>
                <!-- example -->
                <div>
                  <h2 class="sm:text-2xl text-lg font-bold capitalize">example</h2>
                  <p class="text-base capitalize">${wordDetails.sentence}</p>
                </div>
                <!-- supportive words -->
                <div>
                  <h2 class="sm:text-2xl text-lg font-bold capitalize">
                    সমার্থক শব্দ গুলো
                  </h2>
                  <div class="flex flex-wrap gap-2 mt-2">
                    ${synonymsHTML}
                  </div>
                </div>
                <!-- complete btn -->
                <button
                  id="completeBtn"
                  onclick="document.getElementById('wordDetailsModal').close()"
                  class="px-4 py-2 bg-blue-500 text-white text-base rounded-md mt-4 cursor-pointer"
                >
                  Complete Learning
                </button>
              </div>
              <form method="dialog" class="modal-backdrop">
                <button>close</button>
              </form>
            </dialog>
  `;

  const detailsModal = document.getElementById("wordDetailsModal");

  if (detailsModal) {
    detailsModal.showModal();
  } else {
    console.log("Modal not found");
  }
};

// name password validation
const namePasswordValidation = () => {
  const nameInput = document.getElementById("name");
  const passwordInput = document.getElementById("password");

  if (nameInput.value.length) {
    if (passwordInput.value.length) {
      if (parseInt(passwordInput.value) === 123456) {
        const navbar = document.getElementById("navbar");
        const banner = document.getElementById("banner");
        const learnSection = document.getElementById("learnSection");
        const faqSection = document.getElementById("faqSection");

        banner.classList.add("hidden");
        learnSection.classList.remove("hidden");
        faqSection.classList.remove("hidden");
        navbar.classList.remove("hidden");
      } else {
        alert("Wrong Password! Please enter your right password");
      }
    } else {
      alert("Please enter your password");
    }
  } else {
    alert("Please enter your name first");
  }
};

// handle logout functionalities
const handleLogout = () => {
  const navbar = document.getElementById("navbar");
  const banner = document.getElementById("banner");
  const learnSection = document.getElementById("learnSection");
  const faqSection = document.getElementById("faqSection");

  banner.classList.remove("hidden");
  learnSection.classList.add("hidden");
  faqSection.classList.add("hidden");
  navbar.classList.add("hidden");
};
// call get functions
getLessonButtons();
// call display functions
