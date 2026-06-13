export default function sitemap() {
  const base = "https://thegroovemedia.in";
  const now = new Date();
  const page = (path, priority) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority,
  });
  return [
    page("", 1),
    page("/advertising", 0.9),
    page("/weddings", 0.9),
    page("/films", 0.9),
    page("/portfolio", 0.8),
    page("/collaborate", 0.7),
    page("/about", 0.7),
    page("/contact", 0.7),
  ];
}
