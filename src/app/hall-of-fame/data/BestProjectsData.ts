import { BestProjectsProps } from "../types/hof.types"
import groupsData from "@/data/groups"

// placeholder data to be used in BestThesisCategory section
export const BestProjects: BestProjectsProps[] = [
  //category 1
  {
    title: "Agriculture",
    groupName: groupsData[0].group_name,
    thesisTitle: groupsData[0].thesis_title || "Thesis Title",
    members: groupsData[0].members || ["Member 1", "Member 2", "Member 3"],
    mentor: groupsData[0].thesis_mentor || "Mentor",
    desc: groupsData[0].thesis_description || "Description",
    tags: groupsData[0].category || "Category",
    img: groupsData[0].group_picture_url.at(0) || "/HOF/placeholder.jpg",
  },
  //category 2
  {
    title: "Computer Vision",
    groupName: groupsData[1].group_name,
    thesisTitle: groupsData[1].thesis_title || "Thesis Title",
    members: groupsData[1].members || ["Member 1", "Member 2", "Member 3"],
    mentor: groupsData[1].thesis_mentor || "Mentor",
    desc: groupsData[1].thesis_description || "Description",
    tags: groupsData[1].category || "Category",
    img: groupsData[1].group_picture_url.at(1) || "/HOF/placeholder.jpg",
  },
  //category 3
  {
    title: "Education",
    groupName: groupsData[33].group_name,
    thesisTitle: groupsData[33].thesis_title || "Thesis Title",
    members: groupsData[33].members || ["Member 1", "Member 2", "Member 3"],
    mentor: groupsData[33].thesis_mentor || "Mentor",
    desc: groupsData[33].thesis_description || "Description",
    tags: groupsData[33].category || "Category",
    img: groupsData[33].group_picture_url.at(1) || "/HOF/placeholder.jpg",
  },
  {
    title: "Environment",
    groupName: groupsData[4].group_name,
    thesisTitle: groupsData[4].thesis_title || "Thesis Title",
    members: groupsData[4].members || ["Member 1", "Member 2", "Member 3"],
    mentor: groupsData[4].thesis_mentor || "Mentor",
    desc: groupsData[4].thesis_description || "Description",
    tags: groupsData[4].category || "Category",
    img: groupsData[4].group_picture_url.at(1) || "/HOF/placeholder.jpg",
  },
  {
    title: "Medicine & Health",
    groupName: groupsData[11].group_name,
    thesisTitle: groupsData[11].thesis_title || "Thesis Title",
    members: groupsData[11].members || ["Member 1", "Member 2", "Member 3"],
    mentor: groupsData[11].thesis_mentor || "Mentor",
    desc: groupsData[11].thesis_description || "Description",
    tags: groupsData[11].category || "Category",
    img: groupsData[11].group_picture_url.at(0) || "/HOF/placeholder.jpg",
  },
  {
    title: "NLP",
    groupName: groupsData[30].group_name,
    thesisTitle: groupsData[30].thesis_title || "Thesis Title",
    members: groupsData[30].members || ["Member 1", "Member 2", "Member 3"],
    mentor: groupsData[30].thesis_mentor || "Mentor",
    desc: groupsData[30].thesis_description || "Description",
    tags: groupsData[30].category || "Category",
    img: groupsData[30].group_picture_url.at(1) || "/HOF/placeholder.jpg",
  },
  // add more category accordingly if needed...
]
