"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Sliding from "./Sliding";
import { useState, useEffect } from "react";
import { getProjects } from "@/actions/projects";
import { Project } from "@prisma/client";
import InfoCard from "./InfoCard";
const ScrollingShowcase = () => {
  const [projects, setProjects] = useState<Project[]>();
  useEffect(() => {
    fetchProjects();
  }, []);
  const fetchProjects = async () => {
    setProjects(await getProjects());
  };
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], ["-100%", "40%"]);
  return (
    <div className="h-[500vh] w-full bg-primary-400/20">
      <div
        className="h-[100vh] w-full  sticky top-0 flex justify-start items-center backdrop-opacity-40 overflow-hidden"
        style={{
          background: `linear-gradient( 45deg, #2e0800 0% 35%, transparent 35% 65%, #2e0800 65% 100%) center / 50px 50px, linear-gradient( -45deg, transparent 0% 47.5%, #2e0800 47.5% 52.5%, transparent 52.5% 100%) center / 100px 100px`,
        }}
      >
        <h1 className="judson text-7xl p-10 self-start font-semibold text-primary-100 tracking-tight">
          <Sliding>Projects</Sliding>
        </h1>
        <motion.div
          className="flex gap-5 absolute"
          style={{ x, willChange: "transform" }}
        >
          {projects?.map((project) => {
            return (
              <InfoCard
                key={project.project_id}
                heading={project.name}
                content={project.description}
                image={project.image_url}
                github={project.github_url}
                codepen="codepen"
                hosting={project.hosted_url}
              />
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};
export default ScrollingShowcase;
