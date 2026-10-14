export interface ExperienceEntry {
  company: string;
  role: string;
  period: string;
  location: string;
  project: string;
  projectSummary: string;
  achievements: string[];
}

// Content taken from the resume. Keep wording factual; update here, not in components.
export const experience: ExperienceEntry[] = [
  {
    company: 'Sharjah Airport International Free Zone (SAIF Zone)',
    role: 'Quality Assurance Engineer',
    period: 'May 2026 \u2013 Present',
    location: 'Sharjah, UAE',
    project: 'SAIF Zone Management Information System (MIS)',
    projectSummary:
      'A large-scale Government ERP and Investor Services platform developed for SAIF Zone, enabling digital investor services through a self-service portal and integrated ERP. Built as a web-based enterprise application with REST APIs, role-based workflows, and centralized business processes for visa, licensing, compliance, finance, and operations.',
    achievements: [
      'Introduced AI-driven QA workflows using Claude Code and MCP to streamline epic creation, test design, and defect management, significantly reducing documentation effort, and accelerating delivery cycles.',
      'Customized and enhanced a Playwright + TypeScript automation framework to automate key business workflows across investor and internal ERP applications, enabling scalable regression testing.',
      'Worked closely with business stakeholders to shape requirements, clarify business workflows, and define acceptance criteria before development, while identifying and reporting 150+ functional defects that improved product quality.',
    ],
  },
  {
    company: 'UST Global',
    role: 'Quality Software Engineer',
    period: 'June 2025 \u2013 May 2026',
    location: 'Trivandrum, India',
    project: 'Castorama \u2013 Kingfisher Plc',
    projectSummary:
      'A native iOS and Android retail e-commerce application supporting end-to-end shopping for DIY, home improvement, and household products, enabling customers to browse products, check availability, and place orders across multiple banners, backed by GraphQL APIs.',
    achievements: [
      'Designed and implemented a BDD-based Playwright automation framework focused on GraphQL API testing, resulting in a 50% increase in automation coverage across multiple banners and environments.',
      'Actively participated in code reviews, collaborating with developers to improve unit test quality and strengthen overall E2E test coverage.',
      'Worked within the application\u2019s development repository to manage local deployments, configure environment specific data, and support CI/CD pipelines to ensure accurate deployments across environments.',
      'Collaborated closely with Product Owners to review user stories, provide test effort estimations, identify risks early, and define quality acceptance criteria before development.',
      'Leveraged AI-assisted development tools (GitHub Copilot, Claude Code) to accelerate test script development and enhance automation productivity.',
      'Performed cross-platform mobile UI validations on Android/iOS by correlating user interactions with GraphQL API execution and identifying backend integration and data consistency issues.',
      'Performed functional and integration testing of AI-powered chatbot features, validating conversation workflows, response accuracy, and API interactions.',
    ],
  },
  {
    company: 'Edgeverve Systems Limited',
    role: 'Test Engineer',
    period: 'January 2025 \u2013 June 2025',
    location: 'Chennai, India',
    project: 'Wealth Management System',
    projectSummary:
      'The Wealth Management System simplifies portfolio management by integrating financial modules like Bonds, Equity, Mutual Funds, and Payments. It provides users with an intuitive interface for tracking investments and generating reports.',
    achievements: [
      'Performed end-to-end testing and integration validation for financial systems, ensuring accurate data flow, correct display of financial data, and seamless transactions across banking platforms.',
      'Extended an existing BDD framework by automating test scripts, leveraging GitHub Copilot in VS Code for efficiency, configured Jenkins pipelines for end-to-end testing, and integrated multiple test suites.',
      'Applied risk-based testing strategies to prioritize high-impact financial scenarios, reducing the likelihood of critical defects in production releases.',
    ],
  },
  {
    company: 'Cognizant Technology Solutions',
    role: 'Test Automation Associate',
    period: 'July 2022 \u2013 December 2024',
    location: 'Coimbatore, India',
    project: 'Billing \u2013 Aetna, CVS Health',
    projectSummary:
      'A billing application that simplifies monthly premium payments with an intuitive UI for viewing invoice details through features and interactive charts, enabling users to efficiently manage employee plans, rates, and generate quotes.',
    achievements: [
      'Implemented a Hybrid Test Automation Framework using Selenium WebDriver, Java, and TestNG, resulting in a 40% increase in test automation coverage across multiple applications.',
      'Led API testing for a large-scale migration project and automated it using the Karate BDD framework, successfully delivering 300 APIs within three months while significantly reducing manual effort.',
      'Managed and enhanced the automation framework, developed 1000+ regression test cases, maintained the GitHub repository and logged defects with over 95% accuracy.',
      'Analyzed business requirements and collaborated with stakeholders to define test scope, prepare test strategies, and ensure comprehensive coverage.',
      'Provided training and guidance to team members on automation tools and framework usage, improving overall team productivity.',
    ],
  },
];
