import { Link, useParams } from "react-router-dom";
import { ArrowLeft, BookOpen, CheckCircle2, Clock, UserRound } from "lucide-react";
import { courses } from "../data/courses";
import { Badge, Button, EmptyState, ProgressBar } from "../components/common";
import { progressPercent } from "../utils/helpers";

export default function CourseDetails({ enrolled, progress, onEnroll }) {
  const { courseId } = useParams();
  const course = courses.find(item => item.id === courseId);

  if (!course) {
    return <main className="container-page py-16"><EmptyState title="Course not found" message="The course link may be incorrect or the course may not exist." action="Back to Courses" /></main>;
  }

  const isEnrolled = enrolled.includes(course.id);
  const completed = progress[course.id] || [];
  const percent = progressPercent(course, completed);
  const firstIncomplete = course.lessons.find(lesson => !completed.includes(lesson.id));
  const lessonToOpen = firstIncomplete || course.lessons[0];

  return (
    <main className="container-page py-10">
      <Link to="/courses" className="mb-7 inline-flex items-center gap-2 text-sm font-semibold text-indigo-700"><ArrowLeft size={16} /> Back to Courses</Link>
      <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr]">
        <div>
          <img src={course.thumbnail} alt={course.title} className="h-72 w-full rounded-3xl object-cover" />
          <div className="mt-7 flex flex-wrap gap-2"><Badge>{course.category}</Badge><Badge>{course.level}</Badge></div>
          <h1 className="mt-4 text-4xl font-black">{course.title}</h1>
          <p className="mt-4 leading-7 text-slate-600">{course.description}</p>
          <div className="mt-5 flex flex-wrap gap-5 text-sm text-slate-500">
            <span className="flex items-center gap-2"><UserRound size={16} />{course.instructor}</span>
            <span className="flex items-center gap-2"><Clock size={16} />{course.duration}</span>
            <span className="flex items-center gap-2"><BookOpen size={16} />{course.lessons.length} lessons</span>
          </div>
          <h2 className="mt-10 text-2xl font-bold">What you will learn</h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {course.outcomes.map(outcome => <li key={outcome} className="flex gap-2 text-sm text-slate-600"><CheckCircle2 className="shrink-0 text-emerald-600" size={18} />{outcome}</li>)}
          </ul>
        </div>

        <aside className="h-fit rounded-3xl bg-white p-6 card-shadow">
          <h2 className="text-xl font-bold">Your learning journey</h2>
          <p className="mt-2 text-sm text-slate-500">This course is free. Enroll to access lessons and track your progress.</p>
          {isEnrolled ? (
            <>
              <div className="mt-6">
                <div className="mb-2 flex justify-between text-sm"><span>Course progress</span><strong>{percent}%</strong></div>
                <ProgressBar value={percent} />
              </div>
              <Link to={`/learn/${course.id}/${lessonToOpen.id}`}><Button className="mt-6 w-full">{percent === 100 ? "Review Course" : "Open Lessons"}</Button></Link>
            </>
          ) : (
            <Button className="mt-6 w-full" onClick={() => onEnroll(course.id)}>Enroll Now — Free</Button>
          )}
          <div className="mt-7 border-t pt-5">
            <h3 className="font-bold">Course curriculum</h3>
            <ol className="mt-4 space-y-3">
              {course.lessons.map((lesson, index) => (
                <li key={lesson.id} className="flex items-start justify-between gap-3 text-sm">
                  <span><strong className="mr-2 text-indigo-600">{String(index + 1).padStart(2, "0")}</strong>{lesson.title}</span>
                  <span className="shrink-0 text-slate-400">{lesson.duration}</span>
                </li>
              ))}
            </ol>
          </div>
        </aside>
      </div>
    </main>
  );
}
