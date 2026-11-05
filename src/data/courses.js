const makeLessons = (prefix, names) =>
  names.map((title, index) => ({
    id: `${prefix}-${index + 1}`,
    title,
    duration: `${8 + index * 3} min`,
    description: `In this lesson, you will understand ${title.toLowerCase()} and practise the ideas with a small guided example.`,
    resources: [
      { title: `${title} — MDN learning guide`, type: "Documentation", url: "https://developer.mozilla.org/" },
      { title: "Practice notes and examples", type: "Reading", url: "https://developer.mozilla.org/" }
    ]
  }));

export const courses = [
  {
    id: "react-basics",
    title: "React Fundamentals",
    category: "Web Development",
    level: "Beginner",
    duration: "4h 20m",
    instructor: "Ayesha Khan",
    thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=900",
    featured: true,
    description: "Build a strong foundation in React by learning components, JSX, props, state and hooks.",
    outcomes: ["Understand React and component-based UI", "Write JSX and reusable components", "Pass data with props", "Manage UI with useState and useEffect", "Render lists and handle events"],
    lessons: makeLessons("rb", ["Introduction to React", "Your First Component", "JSX and Expressions", "Props and Reusable Components", "State with useState", "Events and Forms", "useEffect Basics", "Build a Mini App"])
  },
  {
    id: "javascript-core",
    title: "Modern JavaScript",
    category: "Web Development",
    level: "Beginner",
    duration: "5h 10m",
    instructor: "Hamza Malik",
    thumbnail: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=900",
    featured: true,
    description: "Learn modern JavaScript syntax and the fundamentals used in real web applications.",
    outcomes: ["Use variables and data types", "Write functions and conditions", "Work with arrays and objects", "Understand promises and asynchronous code"],
    lessons: makeLessons("js", ["JavaScript Setup", "Variables and Data Types", "Conditions and Loops", "Functions", "Arrays and Objects", "Array Methods", "Promises", "Async and Await"])
  },
  {
    id: "ui-design",
    title: "UI Design Essentials",
    category: "Design",
    level: "Beginner",
    duration: "3h 45m",
    instructor: "Sara Ahmed",
    thumbnail: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=900",
    featured: true,
    description: "Learn the foundations of clean interfaces, visual hierarchy, colour and spacing.",
    outcomes: ["Apply visual hierarchy", "Choose useful colour palettes", "Use spacing consistently", "Create simple wireframes"],
    lessons: makeLessons("ui", ["What Is UI Design?", "Visual Hierarchy", "Colour Fundamentals", "Typography", "Spacing Systems", "Wireframes"])
  },
  {
    id: "python-data",
    title: "Python for Data Analysis",
    category: "Data Science",
    level: "Intermediate",
    duration: "6h 00m",
    instructor: "Bilal Raza",
    thumbnail: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=900",
    featured: true,
    description: "Explore data analysis workflows with Python, structured data and practical exercises.",
    outcomes: ["Work with Python data structures", "Load and inspect datasets", "Clean missing values", "Summarise data"],
    lessons: makeLessons("pd", ["Python Refresher", "Working with Data", "Reading CSV Files", "Cleaning Data", "Filtering and Sorting", "Summary Statistics"])
  },
  {
    id: "spring-boot",
    title: "Spring Boot API Development",
    category: "Backend",
    level: "Advanced",
    duration: "7h 30m",
    instructor: "Omar Farooq",
    thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=900",
    featured: false,
    description: "Design REST APIs with Spring Boot, validation, exception handling and persistence concepts.",
    outcomes: ["Create REST controllers", "Use DTOs and validation", "Handle application errors", "Connect an application to a database"],
    lessons: makeLessons("sb", ["Spring Boot Overview", "Project Structure", "REST Controllers", "DTOs", "Validation", "Global Exception Handling", "JPA Basics"])
  },
  {
    id: "figma-prototype",
    title: "Figma Prototyping",
    category: "Design",
    level: "Intermediate",
    duration: "3h 15m",
    instructor: "Noor Fatima",
    thumbnail: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=900",
    featured: false,
    description: "Turn interface ideas into interactive prototypes and shareable design flows.",
    outcomes: ["Navigate Figma tools", "Create reusable components", "Build prototype interactions", "Prepare a handoff"],
    lessons: makeLessons("fg", ["Figma Workspace", "Frames and Layout", "Components", "Variants", "Prototype Links"])
  },
  {
    id: "sql-database",
    title: "SQL and Database Basics",
    category: "Backend",
    level: "Beginner",
    duration: "4h 05m",
    instructor: "Usman Tariq",
    thumbnail: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=900",
    featured: false,
    description: "Understand relational databases and retrieve information using practical SQL queries.",
    outcomes: ["Understand tables and relationships", "Write SELECT queries", "Filter and sort records", "Use joins"],
    lessons: makeLessons("sql", ["Database Concepts", "Tables and Keys", "SELECT Queries", "WHERE and ORDER BY", "Aggregate Functions", "JOIN Fundamentals"])
  },
  {
    id: "ml-intro",
    title: "Introduction to Machine Learning",
    category: "Data Science",
    level: "Advanced",
    duration: "5h 50m",
    instructor: "Hira Shah",
    thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=900",
    featured: false,
    description: "Explore machine learning workflows, model training and evaluation at a beginner-friendly pace.",
    outcomes: ["Explain supervised learning", "Prepare training data", "Understand model evaluation", "Recognise overfitting"],
    lessons: makeLessons("ml", ["Machine Learning Overview", "Training Data", "Supervised Learning", "Model Training", "Evaluation Metrics"])
  }
];

export const categories = ["Web Development", "Design", "Data Science", "Backend"];

export const instructors = [
  { id: 1, name: "Ayesha Khan", role: "Frontend Instructor", bio: "Makes modern frontend concepts practical.", photo: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400" },
  { id: 2, name: "Hamza Malik", role: "JavaScript Instructor", bio: "Focuses on strong programming fundamentals.", photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400" },
  { id: 3, name: "Sara Ahmed", role: "Product Designer", bio: "Helps learners design clear digital experiences.", photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400" },
  { id: 4, name: "Bilal Raza", role: "Data Instructor", bio: "Turns data concepts into hands-on exercises.", photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400" }
];
