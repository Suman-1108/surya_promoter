import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProjectDetails from "@/components/projects/ProjectDetails";
import { projectsData } from "@/data/projects";


interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found | Surya Promoters",
    };
  }

  return {
    title: `${project.title.en} | Surya Promoters Madurai`,
    description: project.description.en,
    openGraph: {
      title: `${project.title.en} - Surya Promoters`,
      description: project.description.en,
      images: [project.heroImage],
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#FFFFFF] text-[#242820]">
      <Navbar />
      <ProjectDetails project={project} />
      <Footer />
    </main>
  );
}
