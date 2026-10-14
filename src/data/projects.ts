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
}

// Placeholders: none of these are presented as finished. Fill in `repoUrl` and
// refine `summary` when the actual project material is ready.
export const projects: Project[] = [
  {
    id: 'playwright-framework',
    title: 'Playwright Automation Framework',
    summary:
      'A Playwright and TypeScript framework for regression testing of business workflows. The project write-up and code will be added here.',
    focus: ['Playwright', 'TypeScript', 'Regression testing'],
    relatedExperience:
      'Customized and enhanced a Playwright + TypeScript framework at SAIF Zone.',
    glyph: 'framework',
  },
  {
    id: 'graphql-api-automation',
    title: 'GraphQL/API Automation',
    summary:
      'API test automation covering GraphQL and REST services with BDD-style scenarios. Details and code will be added here.',
    focus: ['GraphQL', 'Playwright', 'BDD', 'Postman'],
    relatedExperience:
      'Built a BDD Playwright framework for GraphQL API testing at UST Global and automated 300 APIs with Karate at Cognizant.',
    glyph: 'api',
  },
  {
    id: 'ai-assisted-quality-engineering',
    title: 'AI-Assisted Quality Engineering',
    summary:
      'Using AI tools to speed up test design, defect analysis and documentation. Examples and a write-up will be added here.',
    focus: ['Claude Code', 'Model Context Protocol', 'GitHub Copilot', 'Atlassian Rovo AI'],
    relatedExperience:
      'Introduced AI-driven QA workflows with Claude Code and MCP at SAIF Zone.',
    glyph: 'ai',
  },
];
