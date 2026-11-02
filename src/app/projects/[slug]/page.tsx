import { Suspense } from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProjectDetails from "@/components/projects/ProjectDetails";
import MobileActionBar from "@/components/layout/MobileActionBar";
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

async function ProjectContent({ params }: Props) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetails project={project} />;
}

export default function ProjectPage({ params }: Props) {
  return (
    <main className="min-h-screen bg-[#FFFFFF] text-[#242820]">
      <Navbar />
      <Suspense
        fallback={
          <div className="mx-auto flex min-h-[60vh] max-w-[1760px] items-center justify-center px-6">
            <div className="flex flex-col items-center gap-3">
              <div className="h-9 w-9 animate-spin rounded-full border-3 border-[#C6A15B] border-t-transparent" />
              <span className="font-mono text-xs uppercase tracking-widest text-[#77766F]">
                Loading Project...
              </span>
            </div>
          </div>
        }
      >
        <ProjectContent params={params} />
      </Suspense>
      <Footer />
      <MobileActionBar />
    </main>
  );
}
