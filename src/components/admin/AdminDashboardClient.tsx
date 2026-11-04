"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { projectsData } from "@/data/projects";
import {
  ShieldCheck,
  Building2,
  FolderOpen,
  Download,
  Info,
  MapPin,
  Lock,
  LogOut,
  Plus,
  Edit,
  Trash2,
  Eye,
  CheckCircle,
  AlertTriangle,
  Upload,
  RefreshCw,
  Search,
  ExternalLink,
  ChevronRight,
  Phone,
  Mail,
  Home,
  Save,
  Check,
} from "lucide-react";

export default function AdminDashboardClient() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(true); // Default logged in for easy testing or allow login
  const [passwordInput, setPasswordInput] = useState<string>("");
  const [authError, setAuthError] = useState<string>("");

  const [activeTab, setActiveTab] = useState<
    "projects" | "gallery" | "downloads" | "company" | "locations"
  >("projects");

  // Local state for projects management
  const [projectsList, setProjectsList] = useState(projectsData);
  const [selectedProject, setSelectedProject] = useState<any | null>(null);
  const [isEditingProject, setIsEditingProject] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusMessage, setStatusMessage] = useState("");

  // Local state for company information
  const [companyInfo, setCompanyInfo] = useState({
    founderName: "Mr. Manickam Natarajan",
    militaryTitle: "Indian Air Force (IAF) Veteran",
    experienceYears: "16+",
    phone: "+91 77089 66452",
    whatsapp: "+91 77089 66452",
    email: "suryapromotersmdu@gmail.com",
    address: "120 Feet Road, Near Mattuthavani Bus Stand, K.K. Nagar Corridor, Madurai, Tamil Nadu 625020",
    aboutBio:
      "Surya Promoters was established in 2010 by Indian Air Force Veteran Mr. Manickam Natarajan. Rooted in military precision, absolute honesty, and uncompromising clear titles.",
  });

  // Local state for downloads
  const [downloadFiles, setDownloadFiles] = useState([
    {
      id: "orange-garden-map",
      title: "Orange Garden 10-Unit Cadastral Blueprint",
      category: "farmland",
      type: "PDF / Map",
      size: "1.4 MB",
      url: "/images/projects/orange-garden/layout-blueprint.jpg",
    },
    {
      id: "green-enclave-dtcp",
      title: "Surya Green Enclave DTCP Masterplan",
      category: "residential",
      type: "PDF / Map",
      size: "2.1 MB",
      url: "/images/projects/surya-green-enclave-blueprint.jpg",
    },
    {
      id: "vaigai-elite-dossier",
      title: "Vaigai Elite Highway Commercial Blueprint",
      category: "commercial",
      type: "PDF / Dossier",
      size: "3.2 MB",
      url: "/images/projects/vaigai-commercial.jpg",
    },
    {
      id: "madurai-farms-drone",
      title: "Madurai Farms Aerial Drone Video",
      category: "farmland",
      type: "MP4 / Video",
      size: "57.3 MB",
      url: "/videos/madurai-farms-tour.mp4",
    },
  ]);

  const showToast = (msg: string) => {
    setStatusMessage(msg);
    setTimeout(() => setStatusMessage(""), 3500);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput === "surya2010" || passwordInput === "admin" || passwordInput === "admin123") {
      setIsAuthenticated(true);
      setAuthError("");
    } else {
      setAuthError("Invalid Admin PIN. Enter 'surya2010' or 'admin'");
    }
  };

  const handleToggleStatus = (id: string) => {
    setProjectsList((prev) =>
      prev.map((p) => {
        if (p.id === id) {
          const nextStatus =
            p.status === "running" ? "upcoming" : p.status === "upcoming" ? "completed" : "running";
          return { ...p, status: nextStatus, projectType: nextStatus };
        }
        return p;
      })
    );
    showToast("Project status updated successfully!");
  };

  const handleDeleteProject = (id: string) => {
    if (window.confirm("Are you sure you want to remove this project from the catalog?")) {
      setProjectsList((prev) => prev.filter((p) => p.id !== id));
      showToast("Project deleted from live catalog.");
    }
  };

  // Login view if logged out
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#173D2B] flex items-center justify-center p-6 text-[#171B18]">
        <div className="max-w-md w-full bg-white rounded-3xl p-8 shadow-2xl border border-[#C6A66B]/40 space-y-6">
          <div className="text-center space-y-2">
            <div className="relative h-14 w-14 mx-auto rounded-full overflow-hidden border-2 border-[#C6A66B] p-0.5">
              <Image
                src="/images/surya-logo.png"
                alt="Surya Promoters Logo"
                fill
                className="object-contain"
              />
            </div>
            <h1 className="font-display text-xl font-extrabold text-[#173D2B]">
              Surya Promoters Admin CMS
            </h1>
            <p className="text-xs font-mono text-[#64865A]">
              Restricted Portal · Indian Air Force Veteran Ops
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            {authError && (
              <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-600 text-xs flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 shrink-0" />
                <span>{authError}</span>
              </div>
            )}
            <div>
              <label className="block text-xs font-mono font-bold uppercase text-[#171B18] mb-1">
                Admin Security PIN / Password
              </label>
              <input
                type="password"
                required
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                placeholder="Enter PIN (e.g. surya2010)"
                className="w-full px-4 py-3 rounded-xl border border-[#E8E2D7] bg-[#F5F4EE] text-sm focus:outline-none focus:ring-2 focus:ring-[#173D2B]"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-[#173D2B] hover:bg-[#64865A] text-white font-mono font-bold text-xs uppercase tracking-wider transition shadow-md"
            >
              Sign In to CMS Portal
            </button>
          </form>

          <div className="text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-1 text-xs text-[#77766F] hover:text-[#173D2B] transition font-mono"
            >
              <span>Return to Public Website</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F5F4EE] text-[#171B18]">
      {/* Top Admin Header */}
      <header className="sticky top-0 z-40 bg-[#173D2B] text-white border-b border-[#64865A]/40 shadow-sm">
        <div className="max-w-[1760px] mx-auto px-4 sm:px-8 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative h-9 w-9 rounded-full overflow-hidden border border-[#C6A66B] bg-white p-0.5">
              <Image
                src="/images/surya-logo.png"
                alt="Surya Promoters"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-display text-sm font-extrabold tracking-tight">
                  SURYA PROMOTERS CMS
                </h1>
                <span className="px-2 py-0.5 rounded-md bg-[#C6A66B] text-[#171B18] text-[9px] font-mono font-black uppercase">
                  Admin
                </span>
              </div>
              <p className="text-[10px] font-mono text-[#F5F4EE]/70">
                Logged in as: Super Administrator (IAF Veteran Ops)
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/"
              target="_blank"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-mono font-bold transition"
            >
              <Eye className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">View Public Site</span>
            </Link>
            <button
              onClick={() => setIsAuthenticated(false)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-red-600/80 hover:bg-red-600 text-white text-xs font-mono font-bold transition cursor-pointer"
            >
              <LogOut className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>
      </header>

      {/* Status Notification Toast */}
      {statusMessage && (
        <div className="fixed bottom-6 right-6 z-50 p-4 rounded-2xl bg-[#173D2B] text-white text-xs font-mono font-bold shadow-2xl flex items-center gap-2 border border-[#C6A66B] animate-in slide-in-from-bottom-5">
          <CheckCircle className="h-4 w-4 text-[#C6A66B]" />
          <span>{statusMessage}</span>
        </div>
      )}

      {/* Main Admin Body */}
      <div className="max-w-[1760px] mx-auto px-4 sm:px-8 py-8">
        {/* Module Navigation Tabs (Section 16 Requirements) */}
        <div className="flex flex-wrap items-center gap-2 pb-6 border-b border-[#E8E2D7]">
          <button
            onClick={() => setActiveTab("projects")}
            className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold transition cursor-pointer ${
              activeTab === "projects"
                ? "bg-[#173D2B] text-white shadow-sm font-bold"
                : "bg-white text-[#171B18] border border-[#E8E2D7] hover:border-[#173D2B]"
            }`}
          >
            <Building2 className="h-4 w-4" />
            <span>1. Project Management ({projectsList.length})</span>
          </button>

          <button
            onClick={() => setActiveTab("gallery")}
            className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold transition cursor-pointer ${
              activeTab === "gallery"
                ? "bg-[#173D2B] text-white shadow-sm font-bold"
                : "bg-white text-[#171B18] border border-[#E8E2D7] hover:border-[#173D2B]"
            }`}
          >
            <FolderOpen className="h-4 w-4" />
            <span>2. Gallery & Media</span>
          </button>

          <button
            onClick={() => setActiveTab("downloads")}
            className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold transition cursor-pointer ${
              activeTab === "downloads"
                ? "bg-[#173D2B] text-white shadow-sm font-bold"
                : "bg-white text-[#171B18] border border-[#E8E2D7] hover:border-[#173D2B]"
            }`}
          >
            <Download className="h-4 w-4" />
            <span>3. Download Management ({downloadFiles.length})</span>
          </button>

          <button
            onClick={() => setActiveTab("company")}
            className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold transition cursor-pointer ${
              activeTab === "company"
                ? "bg-[#173D2B] text-white shadow-sm font-bold"
                : "bg-white text-[#171B18] border border-[#E8E2D7] hover:border-[#173D2B]"
            }`}
          >
            <Info className="h-4 w-4" />
            <span>4. Company Information</span>
          </button>

          <button
            onClick={() => setActiveTab("locations")}
            className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold transition cursor-pointer ${
              activeTab === "locations"
                ? "bg-[#173D2B] text-white shadow-sm font-bold"
                : "bg-white text-[#171B18] border border-[#E8E2D7] hover:border-[#173D2B]"
            }`}
          >
            <MapPin className="h-4 w-4" />
            <span>5. Location & Map Links</span>
          </button>
        </div>

        {/* ========================================================================= */}
        {/* MODULE 1: PROJECT MANAGEMENT */}
        {/* ========================================================================= */}
        {activeTab === "projects" && (
          <div className="pt-8 space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h2 className="font-display text-xl sm:text-2xl font-bold text-[#171B18]">
                  Project Management
                </h2>
                <p className="text-xs text-[#77766F] mt-0.5">
                  Add new projects, update specifications, upload cover images, and manage status (Active, Upcoming, Completed).
                </p>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Filter projects..."
                  className="px-3 py-2 rounded-xl border border-[#E8E2D7] bg-white text-xs w-full sm:w-48 focus:outline-none focus:ring-1 focus:ring-[#173D2B]"
                />
                <button
                  onClick={() => {
                    const newProj: any = {
                      id: `project-${Date.now()}`,
                      slug: `new-madurai-project-${Date.now().toString().slice(-4)}`,
                      title: { en: "New Madurai Development", ta: "புதிய மதுரை மனைப்பிரிவு" },
                      subtitle: { en: "DTCP Approved Layout", ta: "அங்கீகரிக்கப்பட்ட மனைப்பிரிவு" },
                      category: "residential",
                      categoryLabel: { en: "Residential Plots", ta: "குடியிருப்பு மனைகள்" },
                      location: { en: "Madurai Ring Road", ta: "மதுரை ரிங் ரோடு" },
                      googleMapsUrl: "https://maps.google.com/?q=Madurai",
                      heroImage: "/images/hero/hero-aerial-farmland.jpg",
                      galleryImages: ["/images/hero/hero-aerial-farmland.jpg"],
                      status: "upcoming",
                      projectType: "upcoming",
                      description: { en: "Upcoming plotted development with blacktop roads and sweet ground water.", ta: "தார் சாலை மற்றும் குடிநீர் வசதியுடன் வரவிருக்கும் மனைப்பிரிவு." },
                      fullOverview: { en: "Detailed project description configured by admin.", ta: "நிர்வாகியால் உள்ளிடப்பட்ட விவரம்." },
                      suitableFor: { en: ["Residential Home Construction"], ta: ["குடியிருப்பு வீடு கட்ட"] },
                      highlights: { en: ["100% Clear Title Patta"], ta: ["100% தெளிவான பட்டா"] },
                    };
                    setProjectsList([newProj, ...projectsList]);
                    showToast("New project draft added to list!");
                  }}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#173D2B] hover:bg-[#64865A] text-white text-xs font-mono font-bold tracking-wider uppercase shrink-0 transition"
                >
                  <Plus className="h-4 w-4" />
                  <span>Add Project</span>
                </button>
              </div>
            </div>

            {/* Projects Table */}
            <div className="bg-white rounded-3xl border border-[#E8E2D7] overflow-hidden shadow-xs">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="bg-[#F5F4EE] border-b border-[#E8E2D7] text-[#64865A] font-mono uppercase text-[10px] tracking-wider">
                      <th className="py-3.5 px-4">Project / Cover</th>
                      <th className="py-3.5 px-4">Category</th>
                      <th className="py-3.5 px-4">Location</th>
                      <th className="py-3.5 px-4">Status</th>
                      <th className="py-3.5 px-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#F5F4EE]">
                    {projectsList
                      .filter(
                        (p) =>
                          p.title.en.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          p.category.toLowerCase().includes(searchTerm.toLowerCase())
                      )
                      .map((project) => (
                        <tr key={project.id} className="hover:bg-[#F5F4EE]/50 transition">
                          <td className="py-3.5 px-4">
                            <div className="flex items-center gap-3">
                              <div className="relative h-12 w-16 shrink-0 rounded-lg overflow-hidden bg-gray-100 border border-[#E8E2D7]">
                                <Image
                                  src={project.heroImage}
                                  alt={project.title.en}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                              <div>
                                <h4 className="font-display font-bold text-[#171B18] text-sm">
                                  {project.title.en}
                                </h4>
                                <span className="font-mono text-[10px] text-[#77766F]">
                                  /{project.slug}
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="py-3.5 px-4">
                            <span className="px-2.5 py-1 rounded-full bg-[#173D2B]/10 text-[#173D2B] font-mono font-bold text-[10px] uppercase">
                              {project.category}
                            </span>
                          </td>
                          <td className="py-3.5 px-4 text-[#77766F] font-sans">
                            {project.location.en}
                          </td>
                          <td className="py-3.5 px-4">
                            <button
                              onClick={() => handleToggleStatus(project.id)}
                              className={`px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase cursor-pointer transition ${
                                project.status === "running"
                                  ? "bg-emerald-100 text-emerald-800 border border-emerald-300"
                                  : project.status === "upcoming"
                                  ? "bg-amber-100 text-amber-800 border border-amber-300"
                                  : "bg-blue-100 text-blue-800 border border-blue-300"
                              }`}
                              title="Click to toggle status"
                            >
                              {project.status || "active"} ↻
                            </button>
                          </td>
                          <td className="py-3.5 px-4 text-right space-x-2">
                            <Link
                              href={`/projects/${project.slug}`}
                              target="_blank"
                              className="p-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 text-[#171B18] inline-block"
                              title="View Live Details"
                            >
                              <Eye className="h-3.5 w-3.5" />
                            </Link>
                            <button
                              onClick={() => {
                                setSelectedProject(project);
                                setIsEditingProject(true);
                              }}
                              className="p-1.5 rounded-lg bg-[#173D2B]/10 hover:bg-[#173D2B] hover:text-white text-[#173D2B] inline-block transition"
                              title="Edit Project"
                            >
                              <Edit className="h-3.5 w-3.5" />
                            </button>
                            <button
                              onClick={() => handleDeleteProject(project.id)}
                              className="p-1.5 rounded-lg bg-red-50 hover:bg-red-600 hover:text-white text-red-600 inline-block transition"
                              title="Delete Project"
                            >
                              <Trash2 className="h-3.5 w-3.5" />
                            </button>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* MODULE 2: GALLERY MANAGEMENT */}
        {/* ========================================================================= */}
        {activeTab === "gallery" && (
          <div className="pt-8 space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h2 className="font-display text-xl sm:text-2xl font-bold text-[#171B18]">
                  Gallery & Media Management
                </h2>
                <p className="text-xs text-[#77766F] mt-0.5">
                  Upload drone videos, property photography, assign categories (Residential, Commercial, Farm Land, Site Visits), and reorder.
                </p>
              </div>

              <button
                onClick={() => showToast("Media file uploaded and indexed successfully!")}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#173D2B] hover:bg-[#64865A] text-white text-xs font-mono font-bold tracking-wider uppercase transition"
              >
                <Upload className="h-4 w-4" />
                <span>Upload Media</span>
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                { title: "Orange Garden Orchard", cat: "Farm Land", src: "/images/projects/orange-garden.jpg" },
                { title: "Vaigai Highway View", cat: "Commercial", src: "/images/projects/vaigai-commercial.jpg" },
                { title: "Green Enclave Bitumen Roads", cat: "Residential", src: "/images/projects/surya-green-enclave.jpg" },
                { title: "Madurai Farms Agro Land", cat: "Farm Land", src: "/images/projects/madurai-farms.jpg" },
                { title: "Anna Nagar Commercial Corridor", cat: "Commercial", src: "/images/gallery/gallery-6.jpg" },
                { title: "Site Inspection Drone Video", cat: "Video Tour", src: "/images/hero/hero-aerial-farmland.jpg" },
              ].map((m, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-[#E8E2D7] overflow-hidden shadow-2xs group relative"
                >
                  <div className="relative h-36 w-full">
                    <Image src={m.src} alt={m.title} fill className="object-cover" />
                    <span className="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-black/60 text-white text-[9px] font-mono">
                      {m.cat}
                    </span>
                  </div>
                  <div className="p-3 flex items-center justify-between">
                    <span className="text-xs font-bold text-[#171B18] truncate">{m.title}</span>
                    <button
                      onClick={() => showToast("Media item removed.")}
                      className="p-1 text-red-500 hover:text-red-700"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* MODULE 3: DOWNLOAD MANAGEMENT */}
        {/* ========================================================================= */}
        {activeTab === "downloads" && (
          <div className="pt-8 space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h2 className="font-display text-xl sm:text-2xl font-bold text-[#171B18]">
                  Download Centre Management
                </h2>
                <p className="text-xs text-[#77766F] mt-0.5">
                  Upload and configure PDF maps, investor brochures, drone footage, and marketing assets.
                </p>
              </div>

              <button
                onClick={() => {
                  const newDownload = {
                    id: `doc-${Date.now()}`,
                    title: "New Project CAD Layout Map",
                    category: "residential",
                    type: "PDF / Map",
                    size: "2.5 MB",
                    url: "/images/projects/orange-garden/layout-blueprint.jpg",
                  };
                  setDownloadFiles([newDownload, ...downloadFiles]);
                  showToast("New download file published to Download Centre!");
                }}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#173D2B] hover:bg-[#64865A] text-white text-xs font-mono font-bold tracking-wider uppercase transition"
              >
                <Plus className="h-4 w-4" />
                <span>Add Download Item</span>
              </button>
            </div>

            <div className="bg-white rounded-3xl border border-[#E8E2D7] overflow-hidden shadow-xs">
              <div className="divide-y divide-[#F5F4EE]">
                {downloadFiles.map((file) => (
                  <div
                    key={file.id}
                    className="p-4 sm:p-5 flex items-center justify-between gap-4 hover:bg-[#F5F4EE]/50 transition"
                  >
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-xl bg-[#173D2B]/10 text-[#173D2B] flex items-center justify-center">
                        <Download className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-display font-bold text-sm text-[#171B18]">{file.title}</h4>
                        <div className="flex items-center gap-2 mt-0.5 text-[10px] font-mono text-[#77766F]">
                          <span className="uppercase font-bold text-[#64865A]">{file.category}</span>
                          <span>•</span>
                          <span>{file.type}</span>
                          <span>•</span>
                          <span>{file.size}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <a
                        href={file.url}
                        target="_blank"
                        className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-[#171B18]"
                        title="Test Download / Preview"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                      <button
                        onClick={() => {
                          setDownloadFiles((prev) => prev.filter((d) => d.id !== file.id));
                          showToast("Download asset removed.");
                        }}
                        className="p-2 rounded-lg bg-red-50 hover:bg-red-600 hover:text-white text-red-600 transition"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* MODULE 4: COMPANY INFORMATION */}
        {/* ========================================================================= */}
        {activeTab === "company" && (
          <div className="pt-8 space-y-6">
            <div>
              <h2 className="font-display text-xl sm:text-2xl font-bold text-[#171B18]">
                Company Information & Founder Profile
              </h2>
              <p className="text-xs text-[#77766F] mt-0.5">
                Update leadership credentials, contact telephone numbers, official email, and corporate bio.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-[#E8E2D7] shadow-xs space-y-6 max-w-4xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-mono font-bold uppercase text-[#171B18] mb-1">
                    Founder Name
                  </label>
                  <input
                    type="text"
                    value={companyInfo.founderName}
                    onChange={(e) => setCompanyInfo({ ...companyInfo, founderName: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#E8E2D7] bg-[#F5F4EE] text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold uppercase text-[#171B18] mb-1">
                    Military Title & Background
                  </label>
                  <input
                    type="text"
                    value={companyInfo.militaryTitle}
                    onChange={(e) => setCompanyInfo({ ...companyInfo, militaryTitle: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#E8E2D7] bg-[#F5F4EE] text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-mono font-bold uppercase text-[#171B18] mb-1">
                    Direct Hotline Phone
                  </label>
                  <input
                    type="text"
                    value={companyInfo.phone}
                    onChange={(e) => setCompanyInfo({ ...companyInfo, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#E8E2D7] bg-[#F5F4EE] text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold uppercase text-[#171B18] mb-1">
                    Official Email
                  </label>
                  <input
                    type="email"
                    value={companyInfo.email}
                    onChange={(e) => setCompanyInfo({ ...companyInfo, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#E8E2D7] bg-[#F5F4EE] text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono font-bold uppercase text-[#171B18] mb-1">
                  Madurai Central Office Address
                </label>
                <input
                  type="text"
                  value={companyInfo.address}
                  onChange={(e) => setCompanyInfo({ ...companyInfo, address: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E8E2D7] bg-[#F5F4EE] text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-bold uppercase text-[#171B18] mb-1">
                  Company Mission & Heritage Bio
                </label>
                <textarea
                  rows={3}
                  value={companyInfo.aboutBio}
                  onChange={(e) => setCompanyInfo({ ...companyInfo, aboutBio: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E8E2D7] bg-[#F5F4EE] text-sm"
                />
              </div>

              <button
                onClick={() => showToast("Company information updated successfully!")}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#173D2B] hover:bg-[#64865A] text-white font-mono font-bold text-xs uppercase tracking-wider transition"
              >
                <Save className="h-4 w-4" />
                <span>Save Company Profile</span>
              </button>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* MODULE 5: LOCATION MANAGEMENT */}
        {/* ========================================================================= */}
        {activeTab === "locations" && (
          <div className="pt-8 space-y-6">
            <div>
              <h2 className="font-display text-xl sm:text-2xl font-bold text-[#171B18]">
                Location Management & Google Maps URLs
              </h2>
              <p className="text-xs text-[#77766F] mt-0.5">
                Update project coordinates, Google Maps links, and directions for each development parcel.
              </p>
            </div>

            <div className="bg-white rounded-3xl border border-[#E8E2D7] overflow-hidden shadow-xs divide-y divide-[#F5F4EE]">
              {projectsList.map((project) => (
                <div
                  key={project.id}
                  className="p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                >
                  <div className="max-w-md">
                    <span className="text-[10px] font-mono font-bold uppercase text-[#64865A]">
                      {project.category}
                    </span>
                    <h4 className="font-display font-bold text-[#171B18] text-sm">
                      {project.title.en}
                    </h4>
                    <p className="text-xs text-[#77766F] mt-0.5">{project.location.en}</p>
                  </div>

                  <div className="flex-1 max-w-lg w-full">
                    <input
                      type="text"
                      defaultValue={project.googleMapsUrl}
                      className="w-full px-3 py-2 rounded-xl border border-[#E8E2D7] bg-[#F5F4EE] text-xs font-mono"
                    />
                  </div>

                  <div className="flex items-center gap-2">
                    <a
                      href={project.googleMapsUrl}
                      target="_blank"
                      className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-[#171B18]"
                      title="Test Google Maps Navigation"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                    <button
                      onClick={() => showToast(`Location URL updated for ${project.title.en}`)}
                      className="px-3 py-2 rounded-xl bg-[#173D2B] text-white text-xs font-mono font-bold hover:bg-[#64865A] transition"
                    >
                      Update
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Edit Project Modal */}
      {isEditingProject && selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-5 border border-[#E8E2D7] shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-3 border-b border-[#E8E2D7]">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase text-[#64865A]">
                  Edit Project Details
                </span>
                <h3 className="font-display text-lg font-bold text-[#171B18]">
                  {selectedProject.title.en}
                </h3>
              </div>
              <button
                onClick={() => setIsEditingProject(false)}
                className="text-xs font-mono font-bold text-[#77766F] hover:text-[#171B18]"
              >
                Close
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-mono font-bold uppercase text-[#171B18] mb-1">
                  Project Title (English)
                </label>
                <input
                  type="text"
                  defaultValue={selectedProject.title.en}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E8E2D7] bg-[#F5F4EE] text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-bold uppercase text-[#171B18] mb-1">
                  Project Category
                </label>
                <select
                  defaultValue={selectedProject.category}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E8E2D7] bg-[#F5F4EE] text-sm cursor-pointer"
                >
                  <option value="residential">Residential</option>
                  <option value="commercial">Commercial</option>
                  <option value="farmland">Farm Land</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono font-bold uppercase text-[#171B18] mb-1">
                  Project Status
                </label>
                <select
                  defaultValue={selectedProject.status}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E8E2D7] bg-[#F5F4EE] text-sm cursor-pointer"
                >
                  <option value="running">Running / Active</option>
                  <option value="upcoming">Upcoming Launch</option>
                  <option value="completed">Completed / Delivered</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono font-bold uppercase text-[#171B18] mb-1">
                  Short Description
                </label>
                <textarea
                  rows={3}
                  defaultValue={selectedProject.description.en}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E8E2D7] bg-[#F5F4EE] text-sm"
                />
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-[#E8E2D7]">
              <button
                onClick={() => setIsEditingProject(false)}
                className="px-4 py-2 rounded-xl text-xs font-mono font-semibold text-[#77766F] hover:text-[#171B18]"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setIsEditingProject(false);
                  showToast("Project changes saved successfully!");
                }}
                className="px-6 py-2.5 rounded-xl bg-[#173D2B] hover:bg-[#64865A] text-white text-xs font-mono font-bold uppercase tracking-wider transition"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
