// `behavior` defaults to a smooth scroll; pass 'instant' to jump straight to
// the section (e.g. right after a page transition).
export const scrollToSection = (id, behavior = 'smooth') => {
  const element = document.getElementById(id);
  if (!element) return false;
  element.scrollIntoView({ behavior });
  return true;
};
