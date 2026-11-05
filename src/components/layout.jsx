import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, GraduationCap } from "lucide-react";
import { Brand } from "./common";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navClass = ({ isActive }) =>
    `block rounded-lg px-3 py-2 text-sm font-semibold ${isActive ? "bg-indigo-50 text-indigo-700" : "text-slate-600 hover:text-indigo-700"}`;

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-100 bg-white/95 backdrop-blur">
      <div className="container-page flex min-h-20 items-center justify-between">
        <Brand />
        <button className="rounded-lg p-2 md:hidden" onClick={() => setMenuOpen(open => !open)} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen}>
          {menuOpen ? <X /> : <Menu />}
        </button>
        <nav className={`${menuOpen ? "absolute left-0 right-0 top-20 block border-b bg-white p-4" : "hidden"} md:flex md:items-center md:gap-2`} aria-label="Main navigation">
          <NavLink to="/" end className={navClass} onClick={closeMenu}>Home</NavLink>
          <NavLink to="/courses" className={navClass} onClick={closeMenu}>Courses</NavLink>
          <NavLink to="/dashboard" className={navClass} onClick={closeMenu}>My Learning</NavLink>
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <div className="grid h-10 w-10 place-items-center rounded-full bg-amber-100 font-bold text-amber-800">MA</div>
          <div><p className="text-sm font-bold">Muhammad Ali</p><p className="text-xs text-slate-500">Learner</p></div>
        </div>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="mt-20 bg-slate-950 py-12 text-slate-300">
      <div className="container-page grid gap-8 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2 text-xl font-bold text-white"><GraduationCap />LearnHub</div>
          <p className="mt-3 max-w-sm text-sm leading-6 text-slate-400">A simple place to explore practical courses, learn at your own pace and track your progress.</p>
        </div>
        <div>
          <h3 className="font-bold text-white">Quick links</h3>
          <div className="mt-3 flex flex-col gap-2 text-sm"><Link to="/">Home</Link><Link to="/courses">Courses</Link><Link to="/dashboard">My Learning</Link></div>
        </div>
        <div>
          <h3 className="font-bold text-white">Keep learning</h3>
          <p className="mt-3 text-sm text-slate-400">Explore free learning content and build skills one lesson at a time.</p>
        </div>
      </div>
      <div className="container-page mt-10 border-t border-slate-800 pt-6 text-xs text-slate-500">© {new Date().getFullYear()} LearnHub. Educational portfolio project.</div>
    </footer>
  );
}
