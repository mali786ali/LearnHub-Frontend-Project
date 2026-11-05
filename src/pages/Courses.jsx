import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { categories, courses } from "../data/courses";
import { filterCourses } from "../utils/helpers";
import { Button, CourseCard, EmptyState, SectionHeading } from "../components/common";

export default function Courses() {
  const [params, setParams] = useSearchParams();
  const [search, setSearch] = useState(params.get("search") || "");
  const [category, setCategory] = useState(params.get("category") || "");
  const [level, setLevel] = useState(params.get("level") || "");

  const filteredCourses = useMemo(
    () => filterCourses(courses, search, category, level),
    [search, category, level]
  );

  const resetFilters = () => {
    setSearch("");
    setCategory("");
    setLevel("");
    setParams({});
  };

  return (
    <main className="container-page py-12">
      <SectionHeading eyebrow="Course library" title="Find your next course" description="Search by keyword and combine category and difficulty filters." />
      <div className="mb-8 grid gap-4 rounded-2xl bg-white p-5 card-shadow md:grid-cols-4">
        <label className="md:col-span-2">
          <span className="mb-2 block text-sm font-semibold">Search courses</span>
          <input aria-label="Search courses" value={search} onChange={event => setSearch(event.target.value)} placeholder="Title, instructor or keyword" className="w-full rounded-xl border border-slate-200 px-4 py-3" />
        </label>
        <label>
          <span className="mb-2 block text-sm font-semibold">Category</span>
          <select aria-label="Filter by category" value={category} onChange={event => setCategory(event.target.value)} className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3">
            <option value="">All categories</option>
            {categories.map(item => <option key={item} value={item}>{item}</option>)}
          </select>
        </label>
        <label>
          <span className="mb-2 block text-sm font-semibold">Difficulty</span>
          <select aria-label="Filter by difficulty" value={level} onChange={event => setLevel(event.target.value)} className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3">
            <option value="">All levels</option>
            {["Beginner", "Intermediate", "Advanced"].map(item => <option key={item} value={item}>{item}</option>)}
          </select>
        </label>
        <div className="flex items-center justify-between gap-3 md:col-span-4">
          <p className="text-sm text-slate-500">Showing <strong className="text-slate-900">{filteredCourses.length}</strong> of {courses.length} courses</p>
          <Button variant="secondary" onClick={resetFilters}>Reset Filters</Button>
        </div>
      </div>

      {filteredCourses.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{filteredCourses.map(course => <CourseCard key={course.id} course={course} />)}</div>
      ) : (
        <div className="space-y-4">
          <EmptyState title="No courses found" message="Try another keyword or reset the filters to see all available courses." action="Browse Courses" />
          <div className="text-center"><Button variant="secondary" onClick={resetFilters}>Reset Filters</Button></div>
        </div>
      )}
    </main>
  );
}
