import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import useLocalStorage from "./hooks/useLocalStorage";
import { Footer, Navbar } from "./components/layout";
import { Spinner, Toast } from "./components/common";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import CourseDetails from "./pages/CourseDetails";
import Dashboard from "./pages/Dashboard";
import Lesson from "./pages/Lesson";
import NotFound from "./pages/NotFound";

export default function App() {
  const [enrolled, setEnrolled] = useLocalStorage("learnhub_enrolled", []);
  const [progress, setProgress] = useLocalStorage("learnhub_progress", {});
  const [toast, setToast] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 650);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!toast) return undefined;
    const timer = window.setTimeout(() => setToast(""), 3000);
    return () => window.clearTimeout(timer);
  }, [toast]);

  const enroll = courseId => {
    setEnrolled(current => current.includes(courseId) ? current : [...current, courseId]);
    setToast("You are enrolled successfully!");
  };

  const completeLesson = (courseId, lessonId) => {
    setProgress(current => ({
      ...current,
      [courseId]: current[courseId]?.includes(lessonId)
        ? current[courseId]
        : [...(current[courseId] || []), lessonId]
    }));
    setToast("Lesson marked as complete!");
  };

  if (loading) {
    return <><Navbar /><Spinner /><Footer /></>;
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:courseId" element={<CourseDetails enrolled={enrolled} progress={progress} onEnroll={enroll} />} />
        <Route path="/dashboard" element={<Dashboard enrolled={enrolled} progress={progress} />} />
        <Route path="/learn/:courseId/:lessonId" element={<Lesson enrolled={enrolled} progress={progress} onComplete={completeLesson} onEnroll={enroll} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <Toast message={toast} />
    </div>
  );
}
