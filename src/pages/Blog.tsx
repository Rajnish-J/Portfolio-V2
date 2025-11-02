import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import API from "../assets/blob/API.png"
import BrowserUse from "../assets/blob/browser-use.png"
import RiseOfLowCode from "../assets/blob/rise-of-low-code.jpg"
import LearningWhileCoding from "../assets/blob/learning-while-coding.jpg"

const Blog = () => {
  const mainBlog = {
    id: 1,
    title: "The Power of APIs in Modern Software Development",
    date: "Jan 26, 2025",
    author: "Rajnish J",
    icon: API,
    description:
      "APIs enable seamless communication between applications, integrating web, mobile, and third-party services. They break silos, ensuring smooth interoperability and enhancing functionality across digital systems.",
    url: "https://dev.to/rajnishjaisankar/the-power-of-apis-in-modern-software-development-5cf6",
  };

  const relatedBlogs = [
    {
      id: 2,
      title: "Learning While Building: The Best Way to Master Coding",
      date: "Jan 29, 2025",
      author: "Rajnish J",
      icon: LearningWhileCoding,
      url: "https://dev.to/rajnishjaisankar/learning-while-building-the-best-way-to-master-coding-2p83",
    },
    {
      id: 3,
      title: "The Rise of Low-Code & No-Code: Should Developers Be Worried?",
      date: "Feb 08, 2025",
      author: "Rajnish J",
      icon: RiseOfLowCode,
      url: "https://dev.to/rajnishjaisankar/the-rise-of-low-code-no-code-should-developers-be-worried-4ghh",
    },
    {
      id: 4,
      title:
        "Exploring Browser Use Agent: The Future of AI-Powered Web Automation",
      date: "March 02, 2025",
      author: "Rajnish J",
      icon: BrowserUse,
      url: "https://dev.to/rajnishjaisankar/exploring-browser-use-agent-the-future-of-ai-powered-web-automation-3gkd",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Technical <span className="text-tech-gradient">Blogs</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Insights and experiences from my software development journey
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Main Featured Blog */}
          <Card className="lg:col-span-7 bg-card overflow-hidden border-border">
            <a
              href={mainBlog.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={mainBlog.icon}
                  alt={mainBlog.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <span>{mainBlog.date}</span>
                  <span>•</span>
                  <span>{mainBlog.author}</span>
                </div>
                <h3 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {mainBlog.title}
                </h3>
                <p className="text-muted-foreground line-clamp-3">
                  {mainBlog.description}
                </p>
              </div>
            </a>
          </Card>

          {/* Related Blogs */}
          <div className="lg:col-span-5 space-y-8">
            {relatedBlogs.map((blog) => (
              <Card key={blog.id} className="bg-card border-border">
                <a
                  href={blog.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-6 p-4 group"
                >
                  <div className="w-32 h-24 flex-shrink-0 overflow-hidden rounded-md">
                    <img
                      src={blog.icon}
                      alt={blog.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <div className="text-sm text-muted-foreground mb-2">
                      {blog.date}
                    </div>
                    <h4 className="font-semibold group-hover:text-primary transition-colors line-clamp-2">
                      {blog.title}
                    </h4>
                  </div>
                </a>
              </Card>
            ))}
          </div>
        </div>

        {/* View More Button */}
        <div className="flex justify-center mt-12">
          <Button asChild className="group">
            <a
              href="https://dev.to/rajnishjaisankar"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <span>View more articles</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
