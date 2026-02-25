# 📘 English Janala — Interactive Vocabulary Learning Platform

An interactive English vocabulary learning web application where users can explore lessons, learn new words with pronunciation, view detailed meanings, and improve their vocabulary through an engaging UI.

This project was built using **HTML, Tailwind CSS, DaisyUI, and Vanilla JavaScript** with dynamic data fetched from external APIs.

---

## 🚀 Live Demo

🔗 Live Website: _https://english-jaanaalaa.netlify.app/_
(Example: deployed via Netlify)

---

## ✨ Features

- ✅ User login validation (name + password)
- ✅ Dynamic lesson buttons loaded from API
- ✅ Vocabulary cards based on selected lesson
- ✅ Word pronunciation using Speech Synthesis API
- ✅ Detailed modal with meaning, example, and synonyms
- ✅ Active lesson highlighting
- ✅ Smooth scrolling navigation
- ✅ Conditional UI (show/hide sections after login/logout)
- ✅ Loading and empty state handling
- ✅ Responsive design for all devices

---

## 🧠 Project Objectives

The goal of this project is to:

- Practice DOM manipulation and API integration
- Implement dynamic UI rendering
- Handle user interactions and state management
- Improve JavaScript problem-solving skills
- Build a real-world educational interface

---

## 🛠️ Technologies Used

- HTML5
- Tailwind CSS
- DaisyUI
- Font Awesome
- Vanilla JavaScript (ES6)
- Web Speech API (SpeechSynthesis)
- REST APIs

---

## ⚡ API Endpoints

All data is fetched from Programming Hero APIs:

- Levels →
  https://openapi.programming-hero.com/api/levels/all

- Words by Level →
  https://openapi.programming-hero.com/api/level/{id}

- Word Details →
  https://openapi.programming-hero.com/api/word/{id}

---

## 📂 Project Structure

```
english-janala/
│
├── index.html
├── script.js
├── assets/
│   ├── logo.png
│   ├── hero-student.png
│   ├── icons
│   └── images
└── README.md
```

---

## 🔐 Authentication Logic

The application includes a simple login system:

- Name must be entered
- Password must be **123456**
- After successful login:
  - Navbar appears
  - Vocabulary section appears
  - FAQ section appears
  - Banner is hidden

Logout restores the initial state.

---

## 🔊 Voice Pronunciation Feature

The project uses the browser **Speech Synthesis API** to pronounce vocabulary words.

Example:

```javascript
function pronounceWord(word) {
  const utterance = new SpeechSynthesisUtterance(word);
  utterance.lang = "en-EN";
  window.speechSynthesis.speak(utterance);
}
```

---

## 📖 Vocabulary Learning Flow

1. User logs in
2. Lesson buttons load automatically
3. User selects a lesson
4. Words appear dynamically
5. User can:
   - Hear pronunciation
   - Open details modal
   - Learn synonyms and examples

---

## 🎯 Challenges Implemented

- ✔ Custom navigation with smooth scrolling
- ✔ Conditional rendering (login/logout UI control)
- ✔ API error & empty state handling
- ✔ Dynamic modal creation
- ✔ Active state management
- ✔ Speech pronunciation integration

---

## 📱 Responsive Design

The UI is fully responsive and works across:

- Mobile devices
- Tablets
- Desktop screens

---

## 🔮 Future Improvements

- Search functionality for words
- User progress tracking
- Bookmark favorite vocabulary
- Dark mode support
- Authentication with database

---

## 👨‍💻 Author

**Infa Pramanik**
Frontend Developer / Web Designer

- GitHub: _https://github.com/infapk02_
- LinkedIn: _https://www.linkedin.com/in/infapramanik/_

---

## ⭐ Acknowledgements

Special thanks to the API provider and learning platform for providing structured endpoints for this project.

---

## 📜 License

This project is created for educational purposes and practice.

---

⭐ If you like this project, consider giving it a star!
