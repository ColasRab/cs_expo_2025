import { AwardProps } from "../types/hof.types"
import groupsData from "@/data/groups"
// placeholder data to be used in Awardee section
export const AwardData: AwardProps[] = [
  // Award 1
  {
    title: "BEST THESIS OVERALL",
    //sample data with multiple awardees of the same rank
    top1: [
      // group 1
      {
        groupName: groupsData[30].group_name,
        thesisTitle: groupsData[30].thesis_title || "Thesis Title",
        members: groupsData[30].members || ["Member 1", "Member 2", "Member 3"],
        mentor: groupsData[30].thesis_mentor || "Mentor",
        img: groupsData[30].group_picture_url.at(0) || "/HOF/placeholder.jpg",
        tags: groupsData[30].category || "Category",
      },
      // group 2
      {
        groupName: groupsData[0].group_name,
        thesisTitle: groupsData[0].thesis_title || "Thesis Title",
        members: groupsData[0].members || ["Member 1", "Member 2", "Member 3"],
        mentor: groupsData[0].thesis_mentor || "Mentor",
        img: groupsData[0].group_picture_url.at(1) || "/HOF/placeholder.jpg",
        tags: groupsData[0].category || "Category",
      },
    ],
    top2: {
      groupName: groupsData[1].group_name,
      thesisTitle: groupsData[1].thesis_title || "Thesis Title",
      members: groupsData[1].members || ["Member 1", "Member 2", "Member 3", "Member 4"],
      mentor: groupsData[1].thesis_mentor || "Mentor",
      img: groupsData[1].group_picture_url.at(0) || "/HOF/placeholder.jpg",
      tags: groupsData[1].category || "Category",
    },
    top3: {
      groupName: groupsData[2].group_name,
      thesisTitle: groupsData[2].thesis_title || "Thesis Title",
      members: groupsData[2].members || ["Member 1", "Member 2", "Member 3"],
      mentor: groupsData[2].thesis_mentor || "Mentor",
      img: groupsData[2].group_picture_url.at(0) || "/HOF/placeholder.jpg",
      tags: groupsData[2].category || "Category",
    },
  },

  // Award 2
  {
    title: "Most Innovative",
    top1: {
      groupName: groupsData[3].group_name,
      thesisTitle: groupsData[3].thesis_title || "Thesis Title",
      members: groupsData[3].members || ["Member 1", "Member 2", "Member 3"],
      mentor: groupsData[3].thesis_mentor || "Mentor",
      img: groupsData[3].group_picture_url.at(0) || "/HOF/placeholder.jpg",
      tags: groupsData[3].category || "Category",
    },
    top2: {
      groupName: groupsData[4].group_name,
      thesisTitle: groupsData[4].thesis_title || "Thesis Title",
      members: groupsData[4].members || ["Member 1", "Member 2", "Member 3"],
      mentor: groupsData[4].thesis_mentor || "Mentor",
      img: groupsData[4].group_picture_url.at(0) || "/HOF/placeholder.jpg",
      tags: groupsData[4].category || "Category",
    },
    top3: {
      groupName: groupsData[5].group_name,
      thesisTitle: groupsData[5].thesis_title || "Thesis Title",
      members: groupsData[5].members || ["Member 1", "Member 2", "Member 3", "Member 4"],
      mentor: groupsData[5].thesis_mentor || "Mentor",
      img: groupsData[5].group_picture_url.at(0) || "/HOF/placeholder.jpg",
      tags: groupsData[5].category || "Category",
    },
  },

  // Award 3
  {
    title: "BEST PRESENTER",
    top1: {
      presenter: groupsData[9].members.at(0) || "Presenter", //placeholder
      groupName: groupsData[9].group_name,
      thesisTitle: groupsData[9].thesis_title || "Thesis Title",
      members: groupsData[9].members || ["Member 1", "Member 2", "Member 3"],
      mentor: groupsData[9].thesis_mentor || "Mentor",
      img: groupsData[9].group_picture_url.at(0) || "/HOF/placeholder.jpg",
      tags: groupsData[9].category || "Category",
    },
    top2: {
      presenter: groupsData[10].members.at(0) || "Presenter", //placeholder
      groupName: groupsData[10].group_name,
      thesisTitle: groupsData[10].thesis_title || "Thesis Title",
      members: groupsData[10].members || ["Member 1", "Member 2", "Member 3", "Member 4"],
      mentor: groupsData[10].thesis_mentor || "Mentor",
      img: groupsData[10].group_picture_url.at(0) || "/HOF/placeholder.jpg",
      tags: groupsData[10].category || "Category",
    },
    top3: {
      presenter: groupsData[11].members.at(0) || "Presenter", //placeholder
      groupName: groupsData[11].group_name,
      thesisTitle: groupsData[11].thesis_title || "Thesis Title",
      members: groupsData[11].members || ["Member 1", "Member 2", "Member 3"],
      mentor: groupsData[11].thesis_mentor || "Mentor",
      img: groupsData[11].group_picture_url.at(0) || "/HOF/placeholder.jpg",
      tags: groupsData[11].category || "Category",
    },
  },
  // Award 4
  {
    title: "BEST AVP",
    top1: {
      groupName: groupsData[6].group_name,
      thesisTitle: groupsData[6].thesis_title || "Thesis Title",
      members: groupsData[6].members || ["Member 1", "Member 2", "Member 3"],
      mentor: groupsData[6].thesis_mentor || "Mentor",
      img: groupsData[6].group_picture_url.at(0) || "/HOF/placeholder.jpg",
      tags: groupsData[6].category || "Category",
    },
    top2: {
      groupName: groupsData[7].group_name,
      thesisTitle: groupsData[7].thesis_title || "Thesis Title",
      members: groupsData[7].members || ["Member 1", "Member 2", "Member 3"],
      mentor: groupsData[7].thesis_mentor || "Mentor",
      img: groupsData[7].group_picture_url.at(0) || "/HOF/placeholder.jpg",
      tags: groupsData[7].category || "Category",
    },
    top3: {
      groupName: groupsData[8].group_name,
      thesisTitle: groupsData[8].thesis_title || "Thesis Title",
      members: groupsData[8].members || ["Member 1", "Member 2", "Member 3"],
      mentor: groupsData[8].thesis_mentor || "Mentor",
      img: groupsData[8].group_picture_url.at(1) || "/HOF/placeholder.jpg",
      tags: groupsData[8].category || "Category",
    },
  },
  // Award 5
  {
    title: "BEST POSTER",
    top1: {
      groupName: groupsData[6].group_name,
      thesisTitle: groupsData[6].thesis_title || "Thesis Title",
      members: groupsData[6].members || ["Member 1", "Member 2", "Member 3"],
      mentor: groupsData[6].thesis_mentor || "Mentor",
      img: groupsData[6].group_picture_url.at(0) || "/HOF/placeholder.jpg",
      tags: groupsData[6].category || "Category",
    },
    top2: {
      groupName: groupsData[7].group_name,
      thesisTitle: groupsData[7].thesis_title || "Thesis Title",
      members: groupsData[7].members || ["Member 1", "Member 2", "Member 3"],
      mentor: groupsData[7].thesis_mentor || "Mentor",
      img: groupsData[7].group_picture_url.at(0) || "/HOF/placeholder.jpg",
      tags: groupsData[7].category || "Category",
    },
    top3: {
      groupName: groupsData[8].group_name,
      thesisTitle: groupsData[8].thesis_title || "Thesis Title",
      members: groupsData[8].members || ["Member 1", "Member 2", "Member 3"],
      mentor: groupsData[8].thesis_mentor || "Mentor",
      img: groupsData[8].group_picture_url.at(1) || "/HOF/placeholder.jpg",
      tags: groupsData[8].category || "Category",
    },
  },
  // add more awards accordingly if needed...
]
