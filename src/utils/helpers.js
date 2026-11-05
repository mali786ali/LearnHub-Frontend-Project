export function progressPercent(course, completedLessons = []) {
  const total = course?.lessons?.length ?? 0;
  return total === 0 ? 0 : Math.round((completedLessons.length / total) * 100);
}

export function getNextLesson(course, completedLessons = []) {
  return course?.lessons?.find(lesson => !completedLessons.includes(lesson.id)) ?? null;
}

export function filterCourses(list, search, category, level) {
  const term = search.trim().toLowerCase();

  return list.filter(course => {
    const searchableText = [
      course.title,
      course.instructor,
      course.category,
      course.description
    ].join(" ").toLowerCase();

    const matchesSearch = !term || searchableText.includes(term);
    const matchesCategory = !category || course.category === category;
    const matchesLevel = !level || course.level === level;

    return matchesSearch && matchesCategory && matchesLevel;
  });
}
