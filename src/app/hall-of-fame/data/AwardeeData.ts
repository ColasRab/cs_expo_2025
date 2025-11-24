import { AwardProps } from "../types/hof.types"
import groupsData from "@/data/groups"
// placeholder data to be used in Awardee section
export const AwardData: AwardProps[] = [
  // Award 1
  {
    title: "BEST THESIS OVERALL",
    top1: [
      {
        groupName: groupsData[4].group_name,
        thesisTitle: groupsData[4].thesis_title || "Thesis Title",
        members: groupsData[4].members || ["Member 1", "Member 2", "Member 3"],
        mentor: groupsData[4].thesis_mentor || "Mentor",
        img: "https://sdeirkuuvtttfxftgpdc.supabase.co/storage/v1/object/public/pics/3/IMG_7328.jpg",
        tags: groupsData[4].category || "Category",
      },
    ],
    top2: {
      groupName: groupsData[33].group_name,
      thesisTitle: groupsData[33].thesis_title || "Thesis Title",
      members: groupsData[33].members || ["Member 1", "Member 2", "Member 3", "Member 4"],
      mentor: groupsData[33].thesis_mentor || "Mentor",
      img: "https://sdeirkuuvtttfxftgpdc.supabase.co/storage/v1/object/public/pics/3/IMG_7321.jpg",
      tags: groupsData[33].category || "Category",
    },
    top3: {
      groupName: groupsData[11].group_name,
      thesisTitle: groupsData[11].thesis_title || "Thesis Title",
      members: groupsData[11].members || ["Member 1", "Member 2", "Member 3"],
      mentor: groupsData[11].thesis_mentor || "Mentor",
      img: "https://sdeirkuuvtttfxftgpdc.supabase.co/storage/v1/object/public/pics/3/IMG_7313.jpg",
      tags: groupsData[11].category || "Category",
    },
  },

  // Award 2
  {
    title: "Most Innovative",
    top1: {
      groupName: groupsData[22].group_name,
      thesisTitle: groupsData[22].thesis_title || "Thesis Title",
      members: groupsData[22].members || ["Member 1", "Member 2", "Member 3"],
      mentor: groupsData[22].thesis_mentor || "Mentor",
      img: "https://sdeirkuuvtttfxftgpdc.supabase.co/storage/v1/object/public/pics/3/IMG_7309.jpg",
      tags: groupsData[22].category || "Category",
    },
    top2: {
      groupName: groupsData[10].group_name,
      thesisTitle: groupsData[10].thesis_title || "Thesis Title",
      members: groupsData[10].members || ["Member 1", "Member 2", "Member 3"],
      mentor: groupsData[10].thesis_mentor || "Mentor",
      img: "https://sdeirkuuvtttfxftgpdc.supabase.co/storage/v1/object/public/pics/3/IMG_7301.jpg",
      tags: groupsData[10].category || "Category",
    },
    top3: {
      groupName: groupsData[5].group_name,
      thesisTitle: groupsData[5].thesis_title || "Thesis Title",
      members: groupsData[5].members || ["Member 1", "Member 2", "Member 3", "Member 4"],
      mentor: groupsData[5].thesis_mentor || "Mentor",
      img: "https://sdeirkuuvtttfxftgpdc.supabase.co/storage/v1/object/public/pics/3/IMG_7297.jpg",
      tags: groupsData[5].category || "Category",
    },
  },

  // Award 3
  {
    title: "BEST PRESENTER",
    top1: {
      presenter: "Dharmveer S. Sandhu",
      groupName: groupsData[4].group_name,
      thesisTitle: groupsData[4].thesis_title || "Thesis Title",
      members: groupsData[4].members || ["Member 1", "Member 2", "Member 3"],
      mentor: groupsData[4].thesis_mentor || "Mentor",
      img: "https://sdeirkuuvtttfxftgpdc.supabase.co/storage/v1/object/public/pics/3/IMG_7257.jpg",
      tags: groupsData[4].category || "Category",
    },
    top2: {
      presenter: "Ralph Clarence C. Bello",
      groupName: groupsData[33].group_name,
      thesisTitle: groupsData[33].thesis_title || "Thesis Title",
      members: groupsData[33].members || ["Member 1", "Member 2", "Member 3", "Member 4"],
      mentor: groupsData[33].thesis_mentor || "Mentor",
      img: "https://sdeirkuuvtttfxftgpdc.supabase.co/storage/v1/object/public/pics/3/IMG_7254.jpg",
      tags: groupsData[33].category || "Category",
    },
    top3: {
      presenter: "Jane Cristel A. Bohol", //placeholder
      groupName: groupsData[11].group_name,
      thesisTitle: groupsData[11].thesis_title || "Thesis Title",
      members: groupsData[11].members || ["Member 1", "Member 2", "Member 3"],
      mentor: groupsData[11].thesis_mentor || "Mentor",
      img: "https://sdeirkuuvtttfxftgpdc.supabase.co/storage/v1/object/public/pics/3/IMG_7243.jpg",
      tags: groupsData[11].category || "Category",
    },
  },
  // Award 4
  {
    title: "BEST AVP",
    top1: {
      groupName: groupsData[1].group_name,
      thesisTitle: groupsData[1].thesis_title || "Thesis Title",
      members: groupsData[1].members || ["Member 1", "Member 2", "Member 3"],
      mentor: groupsData[1].thesis_mentor || "Mentor",
      img: "https://sdeirkuuvtttfxftgpdc.supabase.co/storage/v1/object/public/pics/3/IMG_7238.jpg",
      tags: groupsData[1].category || "Category",
    },
    top2: {
      groupName: groupsData[15].group_name,
      thesisTitle: groupsData[15].thesis_title || "Thesis Title",
      members: groupsData[15].members || ["Member 1", "Member 2", "Member 3"],
      mentor: groupsData[15].thesis_mentor || "Mentor",
      img: "https://sdeirkuuvtttfxftgpdc.supabase.co/storage/v1/object/public/pics/3/IMG_7231.jpg",
      tags: groupsData[15].category || "Category",
    },
    top3: {
      groupName: groupsData[22].group_name,
      thesisTitle: groupsData[22].thesis_title || "Thesis Title",
      members: groupsData[22].members || ["Member 1", "Member 2", "Member 3"],
      mentor: groupsData[22].thesis_mentor || "Mentor",
      img: "https://sdeirkuuvtttfxftgpdc.supabase.co/storage/v1/object/public/pics/3/IMG_7225.jpg",
      tags: groupsData[22].category || "Category",
    },
  },
  // Award 5
  {
    title: "BEST POSTER",
    top1: [
      {
        groupName: groupsData[7].group_name,
        thesisTitle: groupsData[7].thesis_title || "Thesis Title",
        members: groupsData[7].members || ["Member 1", "Member 2", "Member 3"],
        mentor: groupsData[7].thesis_mentor || "Mentor",
        img: "https://sdeirkuuvtttfxftgpdc.supabase.co/storage/v1/object/public/pics/3/IMG_7207.jpg",
        tags: groupsData[7].category || "Category",
      },
      {
        groupName: groupsData[17].group_name,
        thesisTitle: groupsData[17].thesis_title || "Thesis Title",
        members: groupsData[17].members || ["Member 1", "Member 2", "Member 3"],
        mentor: groupsData[17].thesis_mentor || "Mentor",
        img: "https://sdeirkuuvtttfxftgpdc.supabase.co/storage/v1/object/public/pics/3/IMG_7214.jpg",
        tags: groupsData[17].category || "Category",
      },
    ],
    top2: {
      groupName: groupsData[4].group_name,
      thesisTitle: groupsData[4].thesis_title || "Thesis Title",
      members: groupsData[4].members || ["Member 1", "Member 2", "Member 3"],
      mentor: groupsData[4].thesis_mentor || "Mentor",
      img: "https://sdeirkuuvtttfxftgpdc.supabase.co/storage/v1/object/public/pics/3/IMG_7203.jpg",
      tags: groupsData[4].category || "Category",
    },
    top3: {
      groupName: groupsData[5].group_name,
      thesisTitle: groupsData[5].thesis_title || "Thesis Title",
      members: groupsData[5].members || ["Member 1", "Member 2", "Member 3"],
      mentor: groupsData[5].thesis_mentor || "Mentor",
      img: "https://sdeirkuuvtttfxftgpdc.supabase.co/storage/v1/object/public/pics/3/IMG_7198.jpg",
      tags: groupsData[5].category || "Category",
    },
  },
]
