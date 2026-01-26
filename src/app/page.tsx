"use client";

import { useMutation, useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { Button } from "@/components/ui/button";

const x = () =>{
  const projects = useQuery(api.projects.get)
  const createProject = useMutation(api.projects.create)

  return(
    <div className="flex flex-col gap-2">
      <Button onClick={()=>createProject({
        name: "New Project 123"
      })}>
        Add New
      </Button>
      {projects?.map((project)=>(
        <div className="border rounded p-4 flex flex-col" key={project._id}>
          <p>{project.name}</p>
          <p> owner Id: {project.ownerId} </p>
        </div> 
      ))}
    </div>
  )
}

export default x