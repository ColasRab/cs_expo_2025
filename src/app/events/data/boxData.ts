import groupsData from '@/data/groups';

export type Group = typeof groupsData[0];

// Category mapping to match your requirements
const CATEGORY_MAPPING: Record<string, string[]> = {
  'Natural Language Processing': ['Processing'],
  'Computer Vision': ['Computer Vision'],
  'Medicine and Health': ['Medicine and Health'],
  'Education': ['Education'],
  'Environment': ['Environment'],
  'Agriculture': ['Agriculture'],
  'ML': ['ML']
};

// Normalize category names from JSON
function normalizeCategory(category: string): string {
  const normalized = category.trim();
  
  // Map variations to standard names
  const categoryMap: Record<string, string> = {
    'Medicine and Health': 'Medicine and Health',
    'Medicine & Health': 'Medicine and Health',
    'Environment': 'Environment',
    'Agriculture': 'Agriculture',
    'Computer Vision': 'Computer Vision',
    'CV': 'Computer Vision',
    'Natural Language Processing': 'Natural Language Processing',
    'Education': 'Education'
  };
  
  return categoryMap[normalized] || normalized;
}

/**
 * Get all teams grouped by category
 */
export function getTeamsByCategory() {
  const categorized: Record<string, Group[]> = {
    'Natural Language Processing': [],
    'Computer Vision': [],
    'Medicine and Health': [],
    'Education': [],
    'Environment': [],
    'Agriculture': [],
  };

  groupsData.forEach((group: any) => {
    const normalizedCategory = normalizeCategory(group.category);
    if (categorized[normalizedCategory]) {
      categorized[normalizedCategory].push(group);
    }
  });

  return categorized;
}

/**
 * Get team names for a specific category
 */
export function getTeamNamesByCategory(category: string): string[] {
  const normalizedCategory = normalizeCategory(category);
  return groupsData
    .filter((group: any) => normalizeCategory(group.category) === normalizedCategory)
    .map((group: any) => group.group_name);
}

/**
 * Get full team data for a specific category
 */
export function getTeamsBySpecificCategory(category: string): Group[] {
  const normalizedCategory = normalizeCategory(category);
  return groupsData.filter(
    (group: any) => normalizeCategory(group.category) === normalizedCategory
  );
}

/**
 * Get all available categories
 */
export function getAllCategories(): string[] {
  const categories = new Set<string>(
    groupsData.map((group: any) => normalizeCategory(group.category))
  );
  return Array.from(categories);
}

/**
 * Get team count per category
 */
export function getTeamCountByCategory() {
  const counts: Record<string, number> = {};
  
  groupsData.forEach((group: any) => {
    const category = normalizeCategory(group.category);
    counts[category] = (counts[category] || 0) + 1;
  });
  
  return counts;
}

/**
 * Structure for Box 1 (NLP + Medicine & Health)
 */
export function getBox1Data() {
  const nlpTeams = getTeamsBySpecificCategory('Natural Language Processing');
  const medicineTeams = getTeamsBySpecificCategory('Medicine and Health');
  
  return {
    categories: ['Natural Language Processing', 'Medicine and Health'],
    teams: [
      ...nlpTeams.map(team => ({
        id: team.id,
        name: team.group_name,
        category: 'Natural Language Processing',
        logo: team.group_logo,
        poster: team.thesis_poster_url,
        members: team.members
      })),
      ...medicineTeams.map(team => ({
        id: team.id,
        name: team.group_name,
        category: 'Medicine and Health',
        logo: team.group_logo,
        poster: team.thesis_poster_url,
        members: team.members
      }))
    ]
  };
}

/**
 * Structure for Box 2 (CV + Education + Environment & Agriculture)
 */
export function getBox2Data() {
  const cvTeams = getTeamsBySpecificCategory('Computer Vision');
  const educationTeams = getTeamsBySpecificCategory('Education');
  const environmentTeams = getTeamsBySpecificCategory('Environment');
  const agricultureTeams = getTeamsBySpecificCategory('Agriculture');
  
  return {
    categories: ['Computer Vision', 'Education', 'Environment', 'Agriculture'],
    teams: [
      ...cvTeams.map(team => ({
        id: team.id,
        name: team.group_name,
        category: 'Computer Vision',
        logo: team.group_logo,
        poster: team.thesis_poster_url,
        members: team.members
      })),
      ...educationTeams.map(team => ({
        id: team.id,
        name: team.group_name,
        category: 'Education',
        logo: team.group_logo,
        poster: team.thesis_poster_url,
        members: team.members
      })),
      ...environmentTeams.map(team => ({
        id: team.id,
        name: team.group_name,
        category: 'Environment',
        logo: team.group_logo,
        poster: team.thesis_poster_url,
        members: team.members
      })),
      ...agricultureTeams.map(team => ({
        id: team.id,
        name: team.group_name,
        category: 'Agriculture',
        logo: team.group_logo,
        poster: team.thesis_poster_url,
        members: team.members
      }))
    ]
  };
}