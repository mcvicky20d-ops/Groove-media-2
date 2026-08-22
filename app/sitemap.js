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
    page("/about", 0.7),
    page("/contact", 0.7),
    page("/careers", 0.6),
    page("/work-with-us", 0.6),
    page("/updates", 0.6),
  ];
}
