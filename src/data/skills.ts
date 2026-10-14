export interface SkillGroup {
  title: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Automation and API testing',
    items: [
      'Selenium',
      'Playwright',
      'Cucumber',
      'TestNG',
      'WebdriverIO',
      'Data Driven / BDD Framework',
      'SoapUI',
      'Postman',
      'GraphQL',
      'RestAssured (Basics)',
    ],
  },
  {
    title: 'Programming',
    items: ['Core Java', 'TypeScript (Basics)', 'SQL'],
  },
  {
    title: 'Test management and methodologies',
    items: ['Test Case Preparation', 'Defect Tracking and Reporting', 'JIRA', 'Agile Methodologies'],
  },
  {
    title: 'Version control and CI/CD',
    items: ['GitLab', 'GitHub', 'Jenkins'],
  },
  {
    title: 'AI tools and productivity',
    items: [
      'AI-Assisted Scripting (GitHub Copilot, Claude Code)',
      'Atlassian Rovo AI',
      'Model Context Protocol',
    ],
  },
  {
    title: 'Certifications',
    items: [
      'Selenium WebDriver MasterClass with Java & Cucumber BDD + Automation Framework Design (Udemy)',
      'GenAI & AI Agents for QA Test Automation: Copilot & Claude (Udemy)',
      'AZ-900: Microsoft Azure Fundamentals',
    ],
  },
];
