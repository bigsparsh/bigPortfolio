import { NextRequest, NextResponse } from "next/server";
import { getProjects } from "@/actions/projects";
import db from "@/db";
import { ProjectTable } from "@/db/schema";

export async function GET() {
  return NextResponse.json({
    message: "Here is the list of projects",
    projects: await getProjects(),
  });
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  console.log(body);
  const newProject = await db
    .insert(ProjectTable)
    .values(body)
    .returning({ id: ProjectTable.id });
  return NextResponse.json({
    message: "Project created successfully",
    project: newProject,
  });
}
