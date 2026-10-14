export type ProjectGlyph = 'framework' | 'api' | 'ai';

export interface Project {
  id: string;
  title: string;
  summary: string;
  focus: string[];
  /** Real work from the resume that this project area builds on. */
  relatedExperience: string;
  glyph: ProjectGlyph;
  /** Add a real URL here once the repository is public. The card switches to a live link. */
  repoUrl?: string;
  repositoryLinks?: {
    label: string;
    url: string;
  }[];
  status?: 'Available' | 'Private Repository' | 'Placeholder' | 'Implemented';
}

// Placeholders: none of these are presented as finished. Fill in `repoUrl` and
// refine `summary` when the actual project material is ready.
export const projects: Project[] = [
  {
    id: 'playwright-framework',
    title: 'Framework Design & Development',
    summary:
      'Designed and developed Java-based UI automation frameworks using Selenium WebDriver and Cucumber BDD to automate key workflows across OrangeHRM, OneCognizant, and EaseMyTrip.',
      focus: [
    'Java',
    'Selenium',
    'Cucumber BDD',
    'TestNG',
    'Allure Reports',
    'Log4j',
     ],
    relatedExperience:
      'Implemented the Singleton design pattern, reusable components, dynamic element handling, centralized logging, and test execution reporting.',
    glyph: 'framework',
    repositoryLinks: [
    {
      label: 'OrangeHRM Automation Framework',
      url: 'https://github.com/arshad821/UI_BDDAutomationFramework_orangehrm.com',
    },
    {
      label: 'OneCognizant Workflow Automation',
      url: 'https://github.com/arshad821/OneCognizantWorkFlowAutomationBDDFramework',
    },
    {
      label: 'EaseMyTrip Booking',
      url: 'https://github.com/arshad821/BDD_SeleniumFrameworkEaseMyTrip.com_BookingWorkFlowsAutomation',
    },
  ]
  },
  {
  id: 'graphql-api-automation',
  title: 'Playwright BDD & API Automation',
  summary:
  'Developed and enhanced a Playwright and TypeScript BDD framework for GraphQL and REST API automation across Castorama France and Poland. Structured tests around reusable clients, queries, mutations, and maintainable BDD scenarios.',
focus: [
    'Playwright',
    'TypeScript',
    'GraphQL',
    'REST API',
    'Cucumber BDD',
    'GitLab CI/CD',
  ],
  relatedExperience:
  'Implemented reusable GraphQL and REST clients, environment-specific configurations, tenant-based test data, and Cucumber feature/step definitions. Integrated the framework with GitLab CI/CD for automated test execution.',
  glyph: 'api',
  
  status: 'Private Repository'
},
  {
  id: 'ai-assisted-quality-engineering',
  title: 'AI-Assisted Quality Engineering',
  summary:
    'Integrated AI tools and Model Context Protocol (MCP) into QA workflows to streamline test documentation, Jira defect creation, and SQL query generation, reducing repetitive manual effort.',
  focus: [
    'Claude Code',
    'MCP',
    'Rovo AI',
    'GitHub Copilot',
  ],
  relatedExperience:
    'Implemented AI-assisted workflows for test result documentation and Jira defect logging, and integrated MCP with Claude Enterprise to support SQL query generation for database investigation.',
  glyph: 'ai',
  status: 'Implemented',
},
];
