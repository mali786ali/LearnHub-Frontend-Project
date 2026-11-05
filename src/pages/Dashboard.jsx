import { Link } from "react-router-dom";
import { courses } from "../data/courses";
import { getNextLesson, progressPercent } from "../utils/helpers";
import { Button, CourseCard, EmptyState, SectionHeading } from "../components/common";

export default function Dashboard({ enrolled, progress }) {
  const myCourses = courses.filter(course => enrolled.includes(course.id));

  return (
    <main className="container-page py-12">
      <SectionHeading eyebrow="My learning" title="Your learning dashboard" description="Pick up where you left off and keep moving towards your goals." />
      {myCourses.length === 0 ? (
        <EmptyState title="Your learning space is empty" message="Enroll in a course to see it here and track your lesson progress." action="Browse Courses" />
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {myCourses.map(course => {
            const completed = progress[course.id] || [];
            const percent = progressPercent(course, completed);
            const nextLesson = getNextLesson(course, completed);
            const targetLesson = nextLesson || course.lessons[0];

            return (
              <div key={course.id} className="overflow-hidden rounded-2xl bg-white card-shadow">
                <CourseCard course={course} progress={percent} enrolled />
                <div className="flex flex-wrap items-center justify-between gap-3 px-5 pb-5">
                  <p className="text-xs text-slate-500">{completed.length} of {course.lessons.length} lessons completed · {course.lessons.length - completed.length} lessons remaining</p>
                  <Link to={`/learn/${course.id}/${targetLesson.id}`}>
                    <Button variant={nextLesson ? "primary" : "light"} className="px-3 py-2 text-sm">{nextLesson ? "Continue Learning" : "Review Course"}</Button>
                  </Link>
                </div>
                {!nextLesson && <p className="px-5 pb-4 text-sm font-semibold text-emerald-700">✓ Completed</p>}
              </div>
            );
          })}
        </div>
      )}
    </main>
  );
}
