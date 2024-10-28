export const scrollToSection = (id: string, navHeight: number = 80) => {
  const section = document.getElementById(id);
  if (section) {
    const elementPosition = section.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - navHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};
