import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Award, Clock, PlayCircle } from "lucide-react";
import { categories, courses, instructors } from "../data/courses";
import { Button, CourseCard, SearchBar, SectionHeading } from "../components/common";

export default function Home() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const submitSearch = event => {
    event.preventDefault();
    navigate(`/courses?search=${encodeURIComponent(search.trim())}`);
  };

  return (
    <main>
      <section className="overflow-hidden bg-gradient-to-br from-indigo-950 via-indigo-900 to-slate-900 py-20 text-white md:py-28">
        <div className="container-page grid items-center gap-12 md:grid-cols-2">
          <div>
            <span className="rounded-full border border-indigo-300/30 bg-white/10 px-4 py-2 text-sm">Learn something meaningful today</span>
            <h1 className="mt-7 text-5xl font-black leading-tight md:text-6xl">Build skills.<br /><span className="text-indigo-300">Shape your future.</span></h1>
            <p className="mt-6 max-w-xl leading-7 text-indigo-100">Explore practical courses, learn from clear lessons and keep track of every step of your progress.</p>
            <div className="mt-8 max-w-xl"><SearchBar value={search} onChange={setSearch} onSubmit={submitSearch} /></div>
            <p className="mt-4 text-sm text-indigo-200">Explore web development, design, data science and more.</p>
          </div>
          <div className="relative">
            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1000" alt="Students learning together" className="h-80 w-full rounded-[2rem] object-cover shadow-2xl md:h-[430px]" />
            <div className="absolute -bottom-5 -left-5 rounded-2xl bg-white p-4 text-slate-900 shadow-xl">
              <div className="flex items-center gap-3"><span className="rounded-xl bg-indigo-100 p-3 text-indigo-700"><PlayCircle /></span><div><p className="font-bold">Learn at your pace</p><p className="text-xs text-slate-500">One lesson at a time</p></div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-page py-16">
        <SectionHeading eyebrow="Handpicked for you" title="Featured courses" description="Start with a course selected to help you build useful, practical skills." />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{courses.filter(course => course.featured).map(course => <CourseCard key={course.id} course={course} />)}</div>
      </section>

      <section className="bg-indigo-50/70 py-16">
        <div className="container-page">
          <SectionHeading eyebrow="Find your direction" title="Explore popular categories" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category, index) => (
              <button key={category} onClick={() => navigate(`/courses?category=${encodeURIComponent(category)}`)} className="rounded-2xl border border-indigo-100 bg-white p-6 text-left transition hover:-translate-y-1 hover:shadow-lg">
                <span className="text-2xl">{["💻", "🎨", "📊", "⚙️"][index]}</span>
                <h3 className="mt-4 font-bold">{category}</h3>
                <p className="mt-1 text-sm text-slate-500">Explore courses <ArrowRight className="inline" size={14} /></p>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-16">
        <SectionHeading eyebrow="Why LearnHub" title="Learning that fits your life" />
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { icon: <Clock />, title: "Learn at your own pace", text: "Move through lessons whenever it suits your schedule." },
            { icon: <Award />, title: "Track your progress", text: "See completed lessons and your course progress on one dashboard." },
            { icon: <PlayCircle />, title: "Practical lessons", text: "Follow structured lessons and useful learning resources." }
          ].map(item => (
            <div key={item.title} className="rounded-2xl bg-white p-7 card-shadow">
              <div className="mb-5 inline-flex rounded-xl bg-indigo-50 p-3 text-indigo-700">{item.icon}</div>
              <h3 className="text-lg font-bold">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-500">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page py-8">
        <SectionHeading eyebrow="Meet the educators" title="Learn from passionate instructors" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {instructors.map(person => (
            <div key={person.id} className="rounded-2xl bg-white p-5 text-center card-shadow">
              <img src={person.photo} alt={person.name} className="mx-auto h-20 w-20 rounded-full object-cover" loading="lazy" />
              <h3 className="mt-4 font-bold">{person.name}</h3>
              <p className="text-sm text-indigo-600">{person.role}</p>
              <p className="mt-2 text-sm text-slate-500">{person.bio}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
