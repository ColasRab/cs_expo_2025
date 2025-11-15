// Award Winner Types
export type AwardProps = {
  title: string
  top1: AwardeeProps | AwardeeProps[]
  top2: AwardeeProps | AwardeeProps[]
  top3: AwardeeProps | AwardeeProps[]
}

export type AwardeeProps = {
  presenter?: string // for Best Presenter Award
  groupName: string
  thesisTitle: string
  members: string[]
  mentor: string
  img: string
  tags: string
}

// Best Project By Category Types
export type BestProjectsProps = {
  title: string
  groupName: string
  thesisTitle?: string
  members?: string[]
  mentor?: string
  desc: string
  tags: string
  img: string
}
