export function slugify(groupName: string): string {
  return groupName === "#define" // for special case `#define`
    ? "define"
    : groupName === "GGS(S)" // for special case `GGS(S)`
      ? "ggs-s"
      : groupName
          .replace(/\s+/g, "-") // replace spaces with -
          .toLowerCase() // convert to lowercase
}
