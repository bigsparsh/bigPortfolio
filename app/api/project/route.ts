import { NextRequest, NextResponse } from "next/server";
import { createProject, getProjects } from "@/actions/projects";

export async function GET() {
  return NextResponse.json({
    message: "Here is the list of projects",
    projects: await getProjects(),
  });
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const newProject = await createProject(body);
  return NextResponse.json({
    message: "Project created successfully",
    project: newProject,
  });
}
