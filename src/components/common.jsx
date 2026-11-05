import { Link } from "react-router-dom";
import { BookOpen, GraduationCap, Search } from "lucide-react";

export function Button({ children, variant = "primary", className = "", ...props }) {
  const variants = {
    primary: "bg-indigo-600 text-white hover:bg-indigo-700",
    secondary: "border border-slate-200 bg-white text-slate-700 hover:bg-slate-50",
    light: "bg-indigo-50 text-indigo-700 hover:bg-indigo-100"
  };

  return (
    <button
      className={`inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 font-semibold transition disabled:cursor-not-allowed disabled:opacity-40 ${variants[variant] ?? variants.primary} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export function Badge({ children }) {
  return <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">{children}</span>;
}

export function ProgressBar({ value }) {
  return (
    <div className="progress-track" role="progressbar" aria-valuenow={value} aria-valuemin="0" aria-valuemax="100">
      <div className="progress-fill" style={{ width: `${value}%` }} />
    </div>
  );
}

export function EmptyState({ title, message, action = "Browse Courses", to = "/courses" }) {
  return (
    <div className="rounded-3xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
      <BookOpen className="mx-auto mb-4 text-indigo-500" size={38} />
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="mx-auto mt-2 max-w-md text-slate-500">{message}</p>
      <Link to={to}><Button className="mt-6">{action}</Button></Link>
    </div>
  );
}

export function Spinner() {
  return (
    <div className="flex min-h-56 items-center justify-center">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-indigo-100 border-t-indigo-600" role="status" aria-label="Loading" />
    </div>
  );
}

export function Toast({ message }) {
  if (!message) return null;
  return <div role="status" className="fixed bottom-5 right-5 z-50 rounded-xl bg-slate-900 px-5 py-3 text-sm font-medium text-white shadow-xl">{message}</div>;
}

export function SearchBar({ value, onChange, onSubmit, placeholder = "Search courses..." }) {
  return (
    <form onSubmit={onSubmit} className="flex w-full gap-2 rounded-2xl bg-white p-2 shadow-lg">
      <Search className="ml-3 mt-3 shrink-0 text-slate-400" size={20} />
      <input aria-label="Search courses" value={value} onChange={event => onChange(event.target.value)} placeholder={placeholder} className="min-w-0 flex-1 bg-transparent px-2 py-2 text-slate-900 outline-none" />
      <Button type="submit">Search</Button>
    </form>
  );
}

export function CourseCard({ course, progress, enrolled = false }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-slate-100 bg-white card-shadow transition hover:-translate-y-1">
      <Link to={`/courses/${course.id}`} className="block">
        <img src={course.thumbnail} alt={`${course.title} course`} className="h-48 w-full object-cover" loading="lazy" />
        <div className="p-5">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <Badge>{course.category}</Badge>
            <span className="text-xs text-slate-500">{course.level}</span>
          </div>
          <h3 className="mt-4 text-lg font-bold text-slate-900">{course.title}</h3>
          <p className="mt-2 line-clamp-2 text-sm text-slate-500">{course.description}</p>
          <div className="mt-5 flex items-center justify-between text-sm text-slate-500">
            <span>{course.instructor}</span><span>{course.duration}</span>
          </div>
          {enrolled && (
            <div className="mt-4">
              <ProgressBar value={progress} />
              <p className="mt-2 text-xs font-semibold text-indigo-700">{progress}% complete</p>
            </div>
          )}
        </div>
      </Link>
    </article>
  );
}

export function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mb-8">
      <p className="text-sm font-bold uppercase tracking-widest text-indigo-600">{eyebrow}</p>
      <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900">{title}</h2>
      {description && <p className="mt-2 max-w-2xl text-slate-500">{description}</p>}
    </div>
  );
}

export function Brand() {
  return (
    <Link to="/" className="flex items-center gap-2 text-xl font-extrabold tracking-tight text-slate-900">
      <span className="rounded-xl bg-indigo-600 p-2 text-white"><GraduationCap size={20} /></span>
      LearnHub
    </Link>
  );
}
