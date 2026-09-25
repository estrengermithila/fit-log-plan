# 🏋️ FitLog — Workout Library

FitLog is a modern workout library web application built with **Next.js, TypeScript, Tailwind CSS, and React Context API**.

Users can explore different exercises, view workout details, add exercises to today's workout plan, save workouts, and manage their personal workout plan.

---

 //Live Demo

🔗 Live Website: [Add your live link here]

🔗 GitHub Repository: [Add your GitHub repository link here]

---

## 📌 Features

- 🏋️ Browse workout/exercise library
- 🔍 Explore workout details
- 📅 Add exercises to Today's Plan
- 💾 Save workouts for later
- ❌ Remove exercises from Today's Plan
- ❌ Remove saved workouts
- 🔔 Toast notifications for workout actions
- ⭐ Workout ratings
- 🔥 Calories burned information
- ⏱️ Workout duration
- 💪 Muscle group information
- 📊 Today's workout statistics
- 📱 Fully responsive design
- 🧭 Active navbar navigation
- 🎨 Modern dark fitness-themed UI
- ⚡ Built with Next.js App Router
- 🟢 Neon green fitness-style design

---

## 🛠️ Technologies Used

### Frontend

- Next.js
- React
- TypeScript
- Tailwind CSS
- DaisyUI
- React Icons
- React Toastify

### State Management

- React Context API
- useState
- useContext

### Other

- Next.js Image
- Next.js Link
- usePathname
- Local JSON workout data

---

## 📂 Project Structure

```text
fitlog/
│
├── public/
│   └── ...
│
├── src/
│   │
│   ├── app/
│   │   ├── page.tsx
│   │   ├── plan/
│   │   │   └── page.tsx
│   │   └── library/
│   │       └── [id]/
│   │           └── page.tsx
│   │
│   ├── assets/
│   │   └── logo.png
│   │
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── ActiveLink.tsx
│   │   ├── PlanBtn.tsx
│   │   ├── SaveBtn.tsx
│   │   ├── TodaysPlanBtn.tsx
│   │   ├── TodaysPlanCard.tsx
│   │   └── RemoveBtn.tsx
│   │
│   ├── context/
│   │   └── FitProvider.tsx
│   │
│   └── type/
│       └── libraryType.ts
│
├── package.json
├── tsconfig.json
├── next.config.ts
└── README.md