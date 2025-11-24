import { BestProjectsProps } from "../types/hof.types"
import groupsData from "@/data/groups"

// placeholder data to be used in BestThesisCategory section
export const BestProjects: BestProjectsProps[] = [
  //category 1
  {
    title: "Agriculture",
    groupName: groupsData[11].group_name,
    thesisTitle: groupsData[11].thesis_title || "Thesis Title",
    members: groupsData[11].members || ["Member 1", "Member 2", "Member 3"],
    mentor: groupsData[11].thesis_mentor || "Mentor",
    desc: groupsData[11].thesis_description || "Description",
    tags: groupsData[11].category || "Category",
    img: "https://sdeirkuuvtttfxftgpdc.supabase.co/storage/v1/object/public/pics/3/IMG_7181.jpg",
  },
  //category 2
  {
    title: "Computer Vision",
    groupName: groupsData[35].group_name,
    thesisTitle: groupsData[35].thesis_title || "Thesis Title",
    members: groupsData[35].members || ["Member 1", "Member 2", "Member 3"],
    mentor: groupsData[35].thesis_mentor || "Mentor",
    desc: groupsData[35].thesis_description || "Description",
    tags: groupsData[35].category || "Category",
    img: "https://sdeirkuuvtttfxftgpdc.supabase.co/storage/v1/object/public/pics/3/IMG_7165.jpg",
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
    img: "https://sdeirkuuvtttfxftgpdc.supabase.co/storage/v1/object/public/pics/3/IMG_7168.jpg",
  },
  {
    title: "Environment",
    groupName: groupsData[4].group_name,
    thesisTitle: groupsData[4].thesis_title || "Thesis Title",
    members: groupsData[4].members || ["Member 1", "Member 2", "Member 3"],
    mentor: groupsData[4].thesis_mentor || "Mentor",
    desc: groupsData[4].thesis_description || "Description",
    tags: groupsData[4].category || "Category",
    img: "https://sdeirkuuvtttfxftgpdc.supabase.co/storage/v1/object/public/pics/3/IMG_7175.jpg",
  },
  {
    title: "Medicine & Health",
    groupName: groupsData[37].group_name,
    thesisTitle: groupsData[37].thesis_title || "Thesis Title",
    members: groupsData[37].members || ["Member 1", "Member 2", "Member 3"],
    mentor: groupsData[37].thesis_mentor || "Mentor",
    desc: groupsData[37].thesis_description || "Description",
    tags: groupsData[37].category || "Category",
    img: "https://sdeirkuuvtttfxftgpdc.supabase.co/storage/v1/object/public/pics/3/IMG_7190.jpg",
  },
  {
    title: "Natural Language Processing",
    groupName: groupsData[36].group_name,
    thesisTitle: groupsData[36].thesis_title || "Thesis Title",
    members: groupsData[36].members || ["Member 1", "Member 2", "Member 3"],
    mentor: groupsData[36].thesis_mentor || "Mentor",
    desc: groupsData[36].thesis_description || "Description",
    tags: groupsData[36].category || "Category",
    img: "https://sdeirkuuvtttfxftgpdc.supabase.co/storage/v1/object/public/pics/3/IMG_7186.jpg",
  },
  // add more category accordingly if needed...
]
