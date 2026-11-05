import { Link, useNavigate, useParams } from "react-router-dom";
import { Check, ChevronLeft, ChevronRight, ExternalLink, FileText, Play } from "lucide-react";
import { courses } from "../data/courses";
import { Button, EmptyState, ProgressBar } from "../components/common";
import { progressPercent } from "../utils/helpers";

export default function Lesson({ enrolled, progress, onComplete, onEnroll }) {
  const { courseId, lessonId } = useParams();
  const navigate = useNavigate();
  const course = courses.find(item => item.id === courseId);

  if (!course) {
    return <main className="container-page py-16"><EmptyState title="Course not found" message="We could not find this course." /></main>;
  }

  if (!enrolled.includes(courseId)) {
    return (
      <main className="container-page py-16">
        <div className="mx-auto max-w-xl text-center">
          <EmptyState title="Enroll to access lessons" message="You need to enroll in this free course before opening its lessons." action="View Course" to={`/courses/${courseId}`} />
          <Button className="mt-4" onClick={() => onEnroll(courseId)}>Enroll Now</Button>
        </div>
      </main>
    );
  }

  const lessonIndex = course.lessons.findIndex(item => item.id === lessonId);
  if (lessonIndex < 0) {
    return <main className="container-page py-16"><EmptyState title="Lesson not found" message="This lesson link is invalid." action="Back to Course" to={`/courses/${courseId}`} /></main>;
  }

  const lesson = course.lessons[lessonIndex];
  const completed = progress[courseId] || [];
  const isCompleted = completed.includes(lesson.id);
  const percent = progressPercent(course, completed);
  const goToLesson = index => navigate(`/learn/${courseId}/${course.lessons[index].id}`);

  return (
    <main className="container-page py-10">
      <Link to={`/courses/${courseId}`} className="text-sm font-semibold text-indigo-700">← {course.title}</Link>
      <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_320px]">
        <section>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm font-semibold text-indigo-700">Lesson {lessonIndex + 1} of {course.lessons.length}</p>
            <p className="text-sm text-slate-500">{percent}% course completed</p>
          </div>
          <div className="mt-3"><ProgressBar value={percent} /></div>
          <h1 className="mt-6 text-3xl font-black">{lesson.title}</h1>
          <div className="mt-6 flex aspect-video items-center justify-center rounded-3xl bg-gradient-to-br from-slate-950 to-indigo-950 text-white">
            <div className="text-center">
              <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-white/15"><Play size={30} fill="currentColor" /></span>
              <p className="mt-4 font-semibold">Lesson video area</p>
              <p className="mt-1 px-4 text-sm text-slate-300">Video placeholder — add a licensed sample video if required.</p>
            </div>
          </div>
          <h2 className="mt-8 text-xl font-bold">About this lesson</h2>
          <p className="mt-3 leading-7 text-slate-600">{lesson.description}</p>
          <h2 className="mt-8 text-xl font-bold">Learning resources</h2>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            {lesson.resources.map((resource, index) => (
              <a key={`${resource.title}-${index}`} href={resource.url} target="_blank" rel="noreferrer" className="flex items-center justify-between rounded-xl border bg-white p-4 text-sm hover:border-indigo-300">
                <span className="flex items-center gap-2"><FileText className="text-indigo-600" size={18} /><span><strong className="block">{resource.title}</strong><small className="text-slate-500">{resource.type}</small></span></span>
                <ExternalLink size={15} />
              </a>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-between gap-3">
            <Button variant="secondary" disabled={lessonIndex === 0} onClick={() => goToLesson(lessonIndex - 1)}><ChevronLeft size={17} /> Previous Lesson</Button>
            <Button disabled={isCompleted} onClick={() => onComplete(courseId, lesson.id)}>{isCompleted ? <><Check size={17} /> Completed</> : "Mark as Complete"}</Button>
            <Button variant="secondary" disabled={lessonIndex === course.lessons.length - 1} onClick={() => goToLesson(lessonIndex + 1)}>Next Lesson <ChevronRight size={17} /></Button>
          </div>
        </section>

        <aside className="h-fit rounded-2xl bg-white p-5 card-shadow">
          <h2 className="font-bold">Course lessons</h2>
          <p className="mt-1 text-xs text-slate-500">{completed.length} of {course.lessons.length} completed</p>
          <div className="mt-4 space-y-2">
            {course.lessons.map((item, index) => (
              <button key={item.id} onClick={() => goToLesson(index)} className={`flex w-full items-start gap-3 rounded-xl p-3 text-left text-sm ${index === lessonIndex ? "bg-indigo-50 text-indigo-800" : "hover:bg-slate-50"}`}>
                <span className="mt-0.5">{completed.includes(item.id) ? <Check size={16} className="text-emerald-600" /> : <span className="text-xs text-slate-400">{index + 1}.</span>}</span>
                <span className="min-w-0 flex-1"><strong className="block">{item.title}</strong><small className="text-slate-500">{item.duration}</small></span>
              </button>
            ))}
          </div>
        </aside>
      </div>
    </main>
  );
}
