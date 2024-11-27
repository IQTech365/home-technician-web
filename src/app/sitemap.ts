import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://hometechnician.in",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://hometechnician.in/about-us",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://hometechnician.in/contact-us",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.4,
    },
    {
      url: "https://hometechnician.in//ac-repair-service",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.4,
    },
    {
      url: "https://hometechnician.in/ac-installation-service",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.4,
    },
    {
      url: "https://hometechnician.in/ac-gas-filling-service",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.4,
    },
    {
      url: "https://hometechnician.in/ac-servicing-service",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.4,
    },
    {
      url: "https://hometechnician.in/washing-machine-service",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.6,
    },
    {
      url: "https://hometechnician.in/gyser-repair-service",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.6,
    },
    {
      url: "https://hometechnician.in/chimney-repair-service",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.6,
    },
    {
      url: "https://hometechnician.in/ro-repair-service",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.6,
    },
  ];
}
