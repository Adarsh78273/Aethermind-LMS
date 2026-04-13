# Aethermind - Learning Dashboard

Aethermind is a complete learning management system (LMS) built with React and Tailwind CSS. It provides students and instructors with a modern interface for course discovery, learning, course creation, AI-powered tutoring, and progress tracking.[file:1]

## ✨ Features

- **Student Experience**
  - Browse and enroll in department-specific courses
  - Interactive course player with notes and knowledge quizzes
  - Progress tracking and completion certificates
  - Personalized learning dashboard with stats
  - 24/7 AI Tutor for instant help

- **Instructor Experience**
  - Create courses with rich notes and custom quizzes
  - Target courses to specific departments
  - Manage and delete published courses
  - View teaching impact statistics

- **Technical Features**
  - Responsive design with modern UI/UX
  - Local-first storage with Trickle DB sync support
  - Sarvam AI integration for intelligent tutoring
  - Error boundaries and loading states
  - Toast notifications and form validation

## 🏗️ Tech Stack

| Component | Technology |
|-----------|------------|
| Framework | React 18 (UMD/CDN) |
| Styling | Tailwind CSS + Custom CSS vars |
| Icons | Lucide Icons |
| Storage | LocalStorage |
| AI | Sarvam AI API (configurable) |
| Build | Babel standalone transpilation |

## 📁 File Structure
├── index.html # Main HTML entrypoint
├── app.js # Root App component + ErrorBoundary
├── components/ # Reusable UI components
│ ├── Sidebar.js
│ ├── StatCard.js
│ ├── CourseCard.js
| ├── ErrorState.js
| ├── DashboardLayout.js
| ├── AlertToast.js
| ├── AIGeneratedQuizModal.js
│ └── PaymentModal.js
| 
├── pages/ # Page components
│ ├── Landing.js
│ ├── Login.js
│ ├── Dashboard.js
│ ├── BrowseCourses.js
│ ├── CreateCourse.js
│ ├── AITutor.js
│ ├── PracticeQuiz.js
│ ├── Recommendations.js
│ ├── CoursePlayer.js
│ └── Settings.js
|
├── layout 
| ├── DashboardLayout.js
|
└── utils/ # Business logic
├── storage.js # Database layer
└── aiClient.js # AI service abstraction


## 🚀 Quick Start (Demo Mode)

1. **Serve the files** - Open `index.html` directly in browser or use any static server
2. **No setup required** - Uses CDN dependencies and local storage
3. **Demo accounts** - Uses school code `DEMO123`


## 🎮 User Flows

### Students
Landing → Login → Dashboard → Create Course → Publish → Manage
↓
Browse (own courses) 


## 💾 Data Model

```javascript
// Course
{
  id: Number,
  title: String,
  description: String,
  category: String,
  targetDepartment: String,
  schoolCode: String,
  notes: String,
  quiz: Array<{question, options[], correctIndex}>
}

// User
{
  name: String,
  email: String,
  role: 'student'|'instructor',
  department: String,
  schoolCode: String
}
```

## 🔧 Configuration

### AI Provider (Settings)
- **Default**: Sarvam AI (`sarvam-m` model)
- **Custom**: OpenAI-compatible endpoints
- **API Key**: Stored securely in localStorage
- **Base URL**: Configurable per provider

### Storage
Primary: LocalStorage 


## 🎨 Design System

- **Primary**: Indigo-500 (`#6366f1`)
- **Background**: Slate-50 (`#f8fafc`)
- **Typography**: System fonts
- **Components**: Rounded-xl (24px radius)
- **Shadows**: Subtle, modern elevation

## 📱 Responsive Design

| Breakpoint | Layout |
|------------|--------|
| Mobile | Single column, stacked cards |
| Tablet | 2-column courses |
| Desktop | 3-column + sidebar |

## 🧪 Sample Courses (Pre-loaded)

- **Development**: Computer Science, ML, Web Dev, DSA
- **Design**: UI/UX, Typography, Prototyping
- **Business**: Strategy, Marketing, Accounting
- **Engineering**: Mechanics, Thermodynamics, Circuits

## 🔒 Security Notes

- Passwords stored in plaintext (demo only)
- No network calls except AI API
- All data stored client-side
- School codes filter course access
- Department targeting prevents cross-department enrollment


## 🤝 Contributing

1. Add new course categories in `app.js` SAMPLE_COURSES
2. Extend AI providers in `utils/aiClient.js`
3. New pages follow existing pattern in `pages/`
4. Components in `components/` with Tailwind + Lucide

## 📄 License

Educational project - MIT License