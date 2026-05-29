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
    page("/work", 0.9),
    page("/services", 0.9),
    page("/weddings", 0.8),
    page("/about", 0.7),
    page("/contact", 0.7),
  ];
}
