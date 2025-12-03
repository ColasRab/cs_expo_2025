// src/app/projects/data/ProjectsData.ts
import groupsData from "@/data/groups";

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

// Transform the groups data to match your project structure
export const projects = groupsData.map((group) => ({
  slug: slugify(group.group_name),
  appTitle: group.group_name,
  thesisTitle: group.thesis_title,
  poster: group.thesis_poster_url, // used in cards
  logo: group.group_logo,          // used in hero
  details: {
    groupName: group.group_name,
    groupMembers: group.members,
    mentor: group.thesis_mentor,
    category: Array.isArray(group.category)
      ? group.category
      : group.category
      ? [group.category]
      : [],
    thesisDescription: group.thesis_description,
    // prefer the newer `group_avp` field, fall back to legacy `avp_url` if present
    videoLink: group.group_avp || group.avp_url || undefined,
    photoshoot: group.group_picture_url,  // background / hero images
    memberPictures: group.member_picture, // individual member images
  },
}));

// Extract unique categories for filtering
export const allCategories = Array.from(
  new Set(projects.flatMap((project) => project.details.category))
).sort();
