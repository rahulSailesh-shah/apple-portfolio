export const PROJECTS = [
  {
    name: "Conversense",
    description:
      "A platform to build AI agents that users can interact with in real-time via video calls, enabling dynamic Q&A on specific topics, and automatic post-meeting summarization.",
    fullDescription: `Conversense is a real-time AI collaboration platform that allows users to interact with intelligent agents over video calls. It supports question-answering and topic-specific discussions during the meeting. After the session, a background pipeline processes the meeting by fetching transcripts, recordings, and generating summaries for review. Additionally, a chat interface allows users to query the agent asynchronously about what happened during the meeting.

Key Features:
- Real-time AI agent interaction via video calls for topic-specific Q&A
- Automatic meeting transcript and recording retrieval after sessions
- Summarization engine that condenses the meeting discussion into actionable insights
- Persistent chat interface to ask follow-up questions post-meeting
- Background job processing for transcript, recording, and summary generation
- Modular architecture to integrate multiple AI models for conversation, summarization, and retrieval
- Supports multiple simultaneous meetings and agents with stateful memory`,
    tech: [
      "Python",
      "TypeScript / React",
      "WebRTC or video streaming tech",
      "FastAPI / Node.js backend",
      "PostgreSQL or other database",
      "Celery / Background Job Queue",
      "Generative AI / LLMs",
      "Summarization AI models",
    ],
    github: "https://github.com/rahulSailesh-shah/conversense",
    demo: null,
    period: "Not specified",
    impact: [
      "Enables interactive learning or discussion through AI agents",
      "Automates meeting documentation, reducing manual note-taking",
      "Allows users to query past meetings via chat interface",
      "Supports knowledge retention and accessibility for team discussions",
    ],
    technicalHighlights: [
      "Implemented real-time video call integration with AI agent interaction",
      "Designed asynchronous background processing for transcripts, recordings, and summarization",
      "Built chat interface to allow post-meeting queries on meeting content",
      "Integrated multiple AI models for conversation, context retention, and summarization",
      "Ensured stateful memory for agents across meetings",
    ],
  },
  {
    name: "Vistruct",
    description:
      "A full-stack educational video platform that revolutionizes how educational content is created and delivered. Currently used by 20+ professors from my undergraduate university for creating engaging educational videos.",
    fullDescription: `Vistruct is an AI-powered educational video creation platform that automates the entire video production workflow. The platform enables educators to transform their ideas into professional educational videos through a conversational interface.
    Key Features:
    - Real-time chat-based script development where educators can iteratively refine video scripts through natural conversation
    - AI voice-over synthesis that converts scripts into natural-sounding narration
    - Seamless integration with Manim (Mathematical Animation Engine) for creating professional mathematical and scientific animations
    - Automated content generation pipeline that handles script-to-video transformation
    - Full-stack architecture with React/TypeScript frontend and FastAPI backend
    - PostgreSQL database for storing user data, projects, and video metadata
    - Dockerized deployment for consistent development and production environments

    The platform significantly reduces the time and technical expertise required to create high-quality educational videos, democratizing video content creation for educators.`,
    tech: [
      "React",
      "TypeScript",
      "FastAPI",
      "PostgreSQL",
      "Docker",
      "GenAI",
      "Manim",
      "AI Voice Synthesis",
    ],
    github: "https://github.com/rshah107/vistruct",
    demo: "https://vistruct-demo.com",
    period: "Jul 2025 - Aug 2025",
    impact: [
      "Adopted by 20+ professors for educational content creation",
      "Reduces video production time from hours to minutes",
      "Eliminates need for complex video editing software",
      "Makes professional educational videos accessible to non-technical educators",
    ],
    technicalHighlights: [
      "Built real-time WebSocket-based chat system for interactive script editing",
      "Integrated multiple AI models for script generation and voice synthesis",
      "Designed asynchronous video rendering pipeline using task queues",
      "Implemented user authentication and project management system",
      "Created responsive UI with TypeScript for type-safe development",
    ],
  },
  {
    name: "ASU Technical Foundation / CreateAI Platform",
    description:
      "A secure, scalable AI infrastructure at Arizona State University designed to empower non‑technical users (faculty, students, and staff) to build and experiment with AI tools.",
    fullDescription: `ASU's Technical Foundation provides the backbone for enterprise-scale AI innovation across the university. The vision is to make AI development accessible to a broad community, not just highly technical teams. At its core is the **CreateAI Platform**, which supports the creation, testing, and deployment of custom AI-powered tools at scale.

    Key Components:
    - **CreateAI Platform**: A model-agnostic and cloud-flexible environment where users can build AI assistants, learning tools, chatbots, and more — without needing deep engineering experience
    - **CreateAI Builder**: A no-code / low-code interface to turn ideas into AI experiences. Users can upload content, define goals, and shape responses using plain language rather than code.
    - **Ethical AI Engine**: A framework to evaluate and filter AI model outputs for bias, fairness, accuracy, hallucinations, and other ethical dimensions.
    - **Governance & Ethics Oversight**: A Faculty Ethics Committee advises on responsible AI development, establishing guardrails, and reviewing AI-enabled solutions.
    - **Scalability & Security**: The platform is built to support enterprise usage across ASU, enabling rapid prototyping and deployment in a secure, governed environment.

    Impact / Goals:
    - Democratizes AI: Empowers faculty, staff, and students across disciplines to build AI tools without needing to be engineers.
    - Accelerates Innovation: Facilitates rapid prototyping of AI solutions tailored to educational needs, research, and administrative challenges.
    - Ethical AI First: Prioritizes fairness and safety through built-in evaluation mechanisms and oversight.
    - Flexible Infrastructure: Cloud-agnostic design allows ASU to pick the best technology stack while maintaining institutional controls.`,
    tech: [
      "Generative AI",
      "Cloud Infrastructure",
      "Model‑Agnostic Architecture",
      "Ethical AI Evaluation",
      "Low‑Code / No‑Code Tooling",
    ],
    github: "Academic Project can't be shared",
    details: "https://ai.asu.edu/technical-foundation",
    demo: "CreateAI Builder (ASU internal platform) — described on ASU site",
    period: "Ongoing",
    impact: [
      "Enables non-technical stakeholders to build AI assistants",
      "Supports scalable AI experimentation across ASU",
      "Improves access to AI-powered tools for learning, research, and operations",
      "Establishes ethical guardrails for generative AI at an institutional scale",
    ],
    technicalHighlights: [
      "Model-agnostic, vendor-flexible AI infrastructure",
      "No-code builder interface tailored for non-engineers",
      "Ethical AI Engine to assess and filter AI output",
      "Governance via a faculty-led ethics committee",
      "Enterprise-grade security and scalability",
    ],
  },
  {
    name: "InfoFetchBot",
    description:
      "An intelligent Discord bot that automates information gathering and organization through AI-powered web searches and content processing.",
    fullDescription: `InfoFetchBot is a sophisticated Discord automation tool that acts as a research assistant within Discord servers. The bot leverages AI agents to understand user queries, conduct web research, and deliver organized summaries directly into Notion databases.
    Architecture:
    - Multi-agent system using AutoGen framework for coordinated AI workflows
    - Web scraping capabilities to extract relevant content from search results
    - OpenAI integration for natural language understanding and summarization
    - Notion API integration for structured data storage and organization
    - Discord API integration for seamless bot interactions

    Workflow:
    1. User sends a query in Discord
    2. Bot processes the message using OpenAI to understand intent
    3. AutoGen agents trigger web searches and scrape relevant websites
    4. Content is analyzed and summarized using AI
    5. Structured summaries are automatically saved to Notion
    6. User receives concise response in Discord with Notion link

    This creates a seamless information pipeline from Discord conversations to organized knowledge bases.`,
    tech: [
      "Python",
      "Discord API",
      "OpenAI",
      "AutoGen",
      "Notion API",
      "Web Scraping",
      "AI Agents",
    ],
    github: "https://github.com/rshah107/infofetchbot",
    period: "Sep 2024 - Oct 2024",
    impact: [
      "Automates research and information gathering workflow",
      "Eliminates context switching between Discord, browser, and Notion",
      "Enables team knowledge sharing through centralized Notion databases",
      "Reduces time spent on manual research and note-taking",
    ],
    technicalHighlights: [
      "Implemented multi-agent orchestration using AutoGen framework",
      "Built custom web scraping logic to extract clean content from websites",
      "Designed asynchronous message processing to handle concurrent requests",
      "Created Notion database schema for structured information storage",
      "Integrated OpenAI for intelligent query understanding and summarization",
      "Handled Discord bot lifecycle management and event handling",
    ],
  },
  {
    name: "AutoDeploy",
    description:
      "An automated deployment platform that builds and deploys React applications directly from GitHub URLs with zero configuration required.",
    fullDescription: `AutoDeploy is a Platform-as-a-Service (PaaS) solution that simplifies React application deployment. Users simply provide a GitHub repository URL, and the platform handles the entire build and deployment pipeline automatically.

System Architecture:
- Node.js backend orchestrating the deployment workflow
- AWS ECS (Elastic Container Service) for containerized build servers
- Amazon ECR (Elastic Container Registry) for Docker image storage
- Amazon S3 for static file hosting
- Redis for caching and job queue management
- WebSockets for real-time build status updates
- Reverse proxy for routing custom URLs to S3-hosted content

Deployment Flow:
1. User submits GitHub repository URL through API
2. Backend validates repository and queues build job in Redis
3. ECS spins up isolated build container from ECR image
4. Container clones repository, installs dependencies, and runs build
5. Build artifacts uploaded to S3 bucket
6. Custom subdomain generated and mapped via reverse proxy
7. Real-time build logs streamed to user via WebSockets
8. User receives deployment URL upon completion

The platform provides a Vercel-like experience with full control over infrastructure.`,
    tech: [
      "Node.js",
      "AWS S3",
      "AWS ECR",
      "AWS ECS",
      "Redis",
      "WebSockets",
      "Docker",
      "Reverse Proxy",
      "GitHub API",
    ],
    github: "https://github.com/rshah107/autodeploy",
    period: "Sep 2024 - Oct 2024",
    impact: [
      "Enables instant React app deployment without manual configuration",
      "Provides isolated build environments for security and consistency",
      "Generates custom URLs for each deployment",
      "Reduces deployment time from manual process to automated minutes",
    ],
    technicalHighlights: [
      "Architected scalable build system using AWS ECS for parallel builds",
      "Implemented Redis-based job queue for managing build requests",
      "Built WebSocket server for real-time build log streaming",
      "Designed reverse proxy to route custom domains to S3 static sites",
      "Created Docker images for reproducible build environments",
      "Implemented security measures for isolating user code execution",
      "Built API for programmatic deployment triggers",
      "Handled GitHub API integration for repository cloning and validation",
    ],
    challenges: [
      "Managing concurrent builds across multiple ECS containers",
      "Ensuring build isolation and security for user-provided code",
      "Optimizing build times through caching strategies",
      "Handling WebSocket connections at scale for real-time updates",
    ],
  },
  {
    name: "Simple Redis in Go",
    description:
      "A minimalist, in-memory Redis-compatible server implemented in Go, supporting basic string and hash operations over the RESP protocol.",
    fullDescription: `Simple Redis in Go is a lightweight Redis-compatible server built from scratch using Go. It implements the Redis Serialization Protocol (RESP) to allow interaction via standard Redis clients like redis-cli or any RESP-compatible tool. The project demonstrates core principles of in-memory data stores, concurrency handling, and TCP server design.

Key Features:
- RESP protocol parsing and serialization for communication
- Thread-safe in-memory key-value store (\`SET\` / \`GET\`)
- Thread-safe hash map store (\`HSET\` / \`HGET\` / \`HGETALL\`)
- Easy build and run using a Makefile or Go build commands
- Compatible with redis-cli, telnet, and other RESP clients
- Demonstrates core concurrency patterns using sync.RWMutex`,
    tech: [
      "Go",
      "TCP Networking",
      "Concurrency (sync.RWMutex)",
      "RESP Protocol",
      "Makefile",
    ],
    github: "https://github.com/rahulSailesh-shah/redis",
    demo: null,
    period: "Not specified",
    impact: [
      "Serves as a learning tool for understanding Redis internals and TCP servers",
      "Demonstrates thread-safe in-memory data storage",
      "Supports educational exploration of RESP protocol and hash data structures",
    ],
    technicalHighlights: [
      "Implemented a TCP server to handle multiple client connections",
      "Developed RESP parser and serializer from scratch for Redis compatibility",
      "Designed thread-safe in-memory stores for strings and hashes",
      "Built with modular Go files: main.go, server.go, resp.go, store.go",
      "Included Makefile for easy building and running",
    ],
  },
];

export const SOCIAL_LINKS = [
  {
    platform: "GitHub",
    url: "https://github.com/rshah107",
    username: "@rshah107",
  },
  {
    platform: "LinkedIn",
    url: "https://linkedin.com/in/rshah107",
    username: "Rahul Shah",
  },
  {
    platform: "Email",
    url: "mailto:rshah107@asu.edu",
    username: "rshah107@asu.edu",
  },
  {
    platform: "Portfolio",
    url: "https://rahulshah.dev",
    username: "rahulshah.dev",
  },
  {
    platform: "Phone",
    url: "tel:+15169795019",
    username: "+1 (516) 979-5019",
  },
];

export const EXPERIENCE = [
  {
    role: "Software Engineer",
    company: "Solutions Unified LLC",
    location: "Califon, NJ",
    period: "May 2024 - Present",
    duration: "8+ months",
    type: "Full-time",
    description:
      "Leading the development of scalable cloud infrastructure and full-stack applications for enterprise clients, focusing on AWS-native solutions and automation.",
    details: [
      "Designed scalable file upload pipeline with S3 pre-signed URLs and Lambda triggers, improving latency by 35%.",
      "Automated multi-service deployment using AWS CDK, reducing setup time by 75%.",
      "Developed admin dashboard with React, Tailwind, and Go for real-time monitoring, cutting debugging time by 60%.",
      "Built notification service with SNS, SQS, and Stripe integration, reducing billing errors by 25%.",
    ],
    keyTechnologies: [
      "AWS (S3, Lambda, CDK, CloudFormation, SNS, SQS)",
      "React",
      "Go",
      "Node.js",
      "Stripe API",
      "DynamoDB",
    ],
    teamSize: "5-person engineering team",
    responsibilities: [
      "Full-stack development of cloud-native applications",
      "AWS infrastructure design and implementation",
      "Code reviews and technical mentorship",
      "Deployment automation and DevOps practices",
      "Client requirement gathering and technical documentation",
    ],
  },
  {
    role: "AI Full-Stack Developer",
    company:
      "Enterprise Technology (Mastercard Foundation), Arizona State University",
    location: "Tempe, AZ",
    period: "Jan 2024 - Jan 2025",
    duration: "1 year",
    type: "Full-time",
    description:
      "Architected and developed multiple AI-powered platforms leveraging Large Language Models to serve thousands of university users, focusing on accessibility and innovative human-AI interaction.",
    details: [
      "Architected three full-stack platforms serving 10,000+ users for LLM interaction using AWS Bedrock and OpenSearch.",
      "Engineered voice-enabled assistant with Whisper and Amazon Polly for accessible bi-directional audio interaction.",
      "Built modular backend supporting plug-and-play LLM provider integration without downtime.",
      "Created multi-agent orchestration system with LangGraph and FastAPI, reducing user interaction steps by 50%.",
    ],
    detailedAccomplishments: [
      {
        title: "LLM Interaction Platforms",
        description:
          "Built three distinct full-stack applications enabling students and faculty to interact with various Large Language Models.",
        technicalDetails: [
          "Platform 1: Chat interface for comparing responses from multiple LLMs side-by-side (GPT-4, Claude, Llama)",
          "Platform 2: Document analysis tool using RAG (Retrieval Augmented Generation) with OpenSearch vector database",
          "Platform 3: Multimodal AI assistant supporting text, image, and audio inputs",
          "Implemented Llamaindex for efficient document indexing and retrieval",
          "Created user authentication with SSO integration for university accounts",
          "Implemented usage tracking and rate limiting per user",
          "Added conversation history with export functionality",
        ],
        technologies: [
          "OpenSearch",
          "Llamaindex",
          "React",
          "FastAPI",
          "Python",
          "PostgreSQL",
        ],
        impact:
          "10,000+ active users, enhanced learning experiences, democratized AI access for education",
        challenges:
          "Managing costs with high user volume, ensuring low latency for real-time interactions, handling context window limitations",
      },
      {
        title: "Voice-Enabled AI Assistant",
        description:
          "Created accessible voice interface for hands-free AI interaction targeting visually impaired users and mobile scenarios.",
        technicalDetails: [
          "Integrated OpenAI Whisper for accurate speech-to-text transcription",
          "Implemented Amazon Polly for natural text-to-speech synthesis with multiple voices",
          "Built real-time audio streaming pipeline with WebRTC",
          "Implemented noise cancellation preprocessing for better transcription accuracy",
        ],
        technologies: [
          "Whisper",
          "Amazon Polly",
          "WebRTC",
          "FastAPI",
          "React",
          "Web Audio API",
        ],
        impact:
          "Made AI accessible to visually impaired users, enabled hands-free operation, improved mobile user experience",
        challenges:
          "Minimizing latency in speech-to-text-to-speech pipeline, handling accents and background noise, synchronizing audio with text display",
      },
      {
        title: "Modular LLM Backend Architecture",
        description:
          "Designed flexible backend system enabling rapid integration of new LLM providers without service disruption.",
        technicalDetails: [
          "Created plugin architecture with standardized provider interface",
          "Implemented adapter pattern for each LLM API (OpenAI, Anthropic, Cohere, local models)",
          "Built configuration system for API keys and model parameters",
          "Added automatic retry with exponential backoff for failed requests",
          "Implemented request/response logging for debugging",
          "Created fallback mechanism to alternative providers on failure",
          "Built cost tracking per provider and model",
          "Implemented A/B testing framework for comparing providers",
          "Added health checks and circuit breakers for provider availability",
        ],
        technologies: [
          "FastAPI",
          "Python",
          "Design Patterns",
          "Redis",
          "PostgreSQL",
        ],
        impact:
          "Zero-downtime provider additions, reduced vendor lock-in, enabled cost optimization through provider switching",
        challenges:
          "Normalizing different API formats, handling varying rate limits, managing API key rotation",
      },
    ],
    keyTechnologies: [
      "AWS Bedrock",
      "OpenSearch",
      "Llamaindex",
      "Whisper",
      "Amazon Polly",
      "LangGraph",
      "FastAPI",
      "React",
      "Python",
    ],
    teamSize: "3-person development team",
    responsibilities: [
      "Full-stack AI application development",
      "LLM integration and prompt engineering",
      "User research and accessibility testing",
      "Performance optimization for AI workloads",
      "Technical documentation and user training",
    ],
  },
  {
    role: "Software Engineer II (Full-Stack)",
    company: "Allegion (Schlage)",
    location: "Bengaluru, India",
    period: "June 2020 - July 2023",
    duration: "3 years 1 month",
    type: "Full-time",
    description:
      "Led critical infrastructure modernization and developer productivity initiatives for smart lock platform serving millions of users globally.",
    details: [
      "Migrated internal API from REST to GraphQL, improving developer efficiency by 35%.",
      "Led CI/CD pipeline integration with Jenkins, Docker, and Kubernetes, reducing deployment cycles by 40%.",
      "Developed onboarding workflow with React and Redux, cutting onboarding time by 60%.",
      "Built middleware-based request tracing system with OpenTelemetry, reducing debugging time by 40%.",
      "Implemented end-to-end testing framework with Selenium, reducing manual QA efforts by 70%.",
    ],
    detailedAccomplishments: [
      {
        title: "REST to GraphQL API Migration",
        description:
          "Led the architectural transformation of core API layer to improve developer experience and reduce over-fetching.",
        technicalDetails: [
          "Analyzed existing REST endpoints and designed unified GraphQL schema",
          "Implemented Apollo Server with Node.js backend",
          "Created data loaders for batching and caching database queries",
          "Built field-level resolvers for complex nested data relationships",
          "Implemented pagination using cursor-based approach",
          "Added real-time subscriptions using WebSockets for live updates",
          "Created GraphQL playground for API exploration",
          "Built automated schema documentation generation",
          "Implemented query complexity analysis to prevent abuse",
          "Created migration guides and held training sessions for frontend teams",
        ],
        technologies: [
          "GraphQL",
          "Apollo Server",
          "Node.js",
          "DataLoader",
          "WebSockets",
        ],
        impact:
          "35% improvement in developer efficiency, 50% reduction in API calls, improved mobile app performance on slow networks",
        challenges:
          "Maintaining backward compatibility during migration, handling N+1 query problems, educating team on GraphQL best practices",
      },

      {
        title: "User Onboarding Workflow",
        description:
          "Built comprehensive onboarding system to streamline new user account setup and product configuration.",
        technicalDetails: [
          "Designed multi-step wizard interface with React and Redux",
          "Implemented form validation with Formik and Yup schemas",
          "Created progress indicator showing completion percentage",
          "Built conditional logic for personalized onboarding paths",
          "Integrated with backend REST APIs using Axios with custom hooks",
          "Implemented auto-save functionality with debouncing",
          "Added helpful tooltips and contextual help",
          "Created onboarding analytics to track drop-off points",
          "Built admin interface to customize onboarding flows",
          "Implemented A/B testing framework for onboarding variations",
        ],
        technologies: [
          "React",
          "Redux",
          "Formik",
          "Axios",
          "React Router",
          "CSS Modules",
        ],
        impact:
          "60% reduction in onboarding time (from 20 minutes to 8 minutes), 40% improvement in task completion rate, reduced support tickets by 30%",
        challenges:
          "Handling complex form state across steps, maintaining state during page refreshes, optimizing performance with large forms",
      },
      {
        title: "Distributed Tracing System",
        description:
          "Implemented observability solution for debugging issues across microservices architecture.",
        technicalDetails: [
          "Integrated OpenTelemetry SDK into Node.js services",
          "Created custom middleware to generate trace IDs and propagate context",
          "Instrumented database queries, HTTP calls, and Redis operations",
          "Set up Jaeger backend for trace collection and visualization",
          "Built custom exporters for sending traces to multiple backends",
          "Implemented sampling strategies to control trace volume",
          "Added custom spans for business-critical operations",
          "Created correlation between logs and traces using trace IDs",
          "Built alerting on high latency traces",
          "Created trace analysis dashboards in Grafana",
        ],
        technologies: [
          "OpenTelemetry",
          "Node.js",
          "Jaeger",
          "Grafana",
          "Redis",
        ],
        impact:
          "40% reduction in debugging time, improved visibility into service dependencies, faster root cause analysis for production issues",
        challenges:
          "Managing performance overhead of instrumentation, handling trace context across async boundaries, dealing with high cardinality data",
      },
      {
        title: "End-to-End Testing Framework",
        description:
          "Built comprehensive automated testing infrastructure for critical user workflows.",
        technicalDetails: [
          "Set up Selenium WebDriver test infrastructure with Grid for parallel execution",
          "Created Page Object Model (POM) for maintainable test code",
          "Implemented test suites with Mocha test framework",
          "Built custom test utilities for common operations (login, navigation, assertions)",
          "Integrated with CI pipeline for automated regression testing",
          "Created screenshot capture on test failures for debugging",
          "Implemented retry logic for flaky tests",
          "Built test data management system with database fixtures",
          "Created test reports with detailed execution metrics",
          "Implemented cross-browser testing (Chrome, Firefox, Safari, Edge)",
          "Built mobile web testing with device emulation",
        ],
        technologies: [
          "Selenium WebDriver",
          "Mocha",
          "Chai",
          "Node.js",
          "Jenkins",
        ],
        impact:
          "70% reduction in manual QA effort, caught 85% of bugs before production, enabled confident releases",
        challenges:
          "Handling timing issues and race conditions, maintaining tests as UI changed, managing test data dependencies",
      },
    ],
    keyTechnologies: [
      "GraphQL",
      "Node.js",
      "React",
      "Redux",
      "Docker",
      "Kubernetes",
      "Jenkins",
      "OpenTelemetry",
      "Selenium",
    ],
    teamSize: "15-person engineering team",
    responsibilities: [
      "Full-stack feature development",
      "API design and implementation",
      "DevOps and infrastructure automation",
      "Code review and mentorship of junior developers",
      "Technical documentation and architecture decisions",
    ],
  },
];

export const SKILLS = {
  "Languages & Frameworks": {
    primary: ["TypeScript", "JavaScript", "Python", "Go"],
    secondary: ["Java"],
    frontend: ["React", "Redux", "Next.js", "HTML5", "CSS3", "Tailwind CSS"],
    backend: ["Node.js", "FastAPI", "Express.js", "Spring Boot"],
    proficiencyDetails: {
      "TypeScript/JavaScript":
        "5+ years, expert level - full-stack development, type-safe codebases, advanced async patterns",
      Python:
        "4+ years, expert level - AI/ML applications, FastAPI backends, data processing, automation",
      Go: "2+ years, intermediate level - high-performance services, concurrent systems, CLI tools",
      React:
        "5+ years, expert level - complex state management, custom hooks, performance optimization, SSR",
      "Node.js":
        "5+ years, expert level - microservices, real-time applications, event-driven architecture",
    },
  },
  "Cloud & Infrastructure": {
    aws: [
      "EC2",
      "Lambda",
      "S3",
      "ECS",
      "Fargate",
      "API Gateway",
      "CloudFormation",
      "CDK",
      "Bedrock",
      "CloudWatch",
      "SNS",
      "SQS",
      "DynamoDB",
      "RDS",
    ],
    containerization: ["Docker", "Kubernetes", "Helm", "ECR"],
    cicd: ["Jenkins", "GitHub Actions", "GitLab CI"],
    iac: ["AWS CDK", "Terraform", "CloudFormation"],
    proficiencyDetails: {
      AWS: "4+ years, advanced level - architected solutions using 15+ AWS services, cost optimization, security best practices, serverless architectures",
      Docker:
        "5+ years, expert level - multi-stage builds, optimization, orchestration, security scanning",
      Kubernetes:
        "3+ years, intermediate level - deployments, services, ingress, persistent storage, auto-scaling",
    },
  },
  "Databases & Messaging": {
    sql: ["PostgreSQL", "MySQL"],
    nosql: ["DynamoDB", "MongoDB", "Redis"],
    search: ["OpenSearch", "Elasticsearch"],
    messaging: ["Kafka", "RabbitMQ", "SQS", "SNS", "Redis Pub/Sub"],
    proficiencyDetails: {
      PostgreSQL:
        "5+ years - complex queries, indexing strategies, performance tuning, replication",
      Redis:
        "4+ years - caching strategies, pub/sub, job queues, session storage",
      DynamoDB:
        "3+ years - single-table design, GSIs, streams, capacity planning",
    },
  },
  "AI & Machine Learning": {
    frameworks: [
      "LangGraph",
      "Llamaindex",
      "AutoGen",
      "OpenAI API",
      "Anthropic API",
    ],
    models: ["GPT-4", "Claude", "Llama", "Whisper", "DALL-E"],
    platforms: ["AWS Bedrock", "OpenAI Platform", "Hugging Face"],
    techniques: [
      "RAG",
      "Prompt Engineering",
      "Vector Embeddings",
      "Fine-tuning",
      "Multi-agent Systems",
    ],
    proficiencyDetails: {
      "LLM Integration":
        "2+ years - production applications serving 10,000+ users, prompt optimization, cost management",
      "RAG Systems":
        "Built multiple document analysis tools with vector databases and semantic search",
      "Multi-agent Systems":
        "Architected complex workflows with LangGraph, agent coordination, tool use",
    },
  },
  "DevOps & Tools": {
    versionControl: ["Git", "GitHub", "GitLab"],
    monitoring: [
      "Grafana",
      "Prometheus",
      "CloudWatch",
      "Jaeger",
      "OpenTelemetry",
    ],
    testing: ["Jest", "Mocha", "Selenium", "Cypress", "Pytest"],
    other: ["Postman", "Swagger", "WebSockets", "GraphQL", "REST APIs"],
    proficiencyDetails: {
      Git: "Expert - branching strategies, conflict resolution, Git workflows (GitFlow, trunk-based)",
      Testing: "Unit testing, integration testing, E2E testing, TDD practices",
      Monitoring:
        "Distributed tracing, metrics collection, alerting, dashboard creation",
    },
  },
  "Software Engineering Practices": {
    architecture: [
      "Microservices",
      "Event-Driven Architecture",
      "RESTful APIs",
      "GraphQL",
      "Serverless",
    ],
    patterns: [
      "Design Patterns",
      "SOLID Principles",
      "DDD",
      "Clean Architecture",
    ],
    methodologies: [
      "Agile",
      "Scrum",
      "Code Reviews",
      "Pair Programming",
      "TDD",
    ],
    documentation: [
      "Technical Writing",
      "API Documentation",
      "Architecture Diagrams",
      "Confluence",
    ],
  },
};

export const EDUCATION = {
  degree: "Master of Science in Computer Science",
  university: "Arizona State University",
  location: "Tempe, AZ",
  period: "Aug 2023 - May 2025",
  gpa: "4.0/4.0",
  status: "Completed",
  relevantCoursework: [
    "Distributed Systems",
    "Machine Learning",
    "Cloud Computing",
    "Software Engineering",
    "Database Management Systems",
    "Algorithms and Data Structures",
    "Artificial Intelligence",
    "Computer Networks",
  ],
  academicProjects: [
    {
      name: "Distributed Key-Value Store",
      description:
        "Built a fault-tolerant distributed database with Raft consensus",
      technologies: ["Go", "gRPC", "Raft Algorithm"],
    },
    {
      name: "Image Classification with CNNs",
      description:
        "Implemented and trained convolutional neural networks for multi-class image classification",
      technologies: ["Python", "TensorFlow", "Keras", "OpenCV"],
    },
  ],
  achievements: [
    "Perfect 4.0 GPA",
    "Graduate Teaching Assistant for Cloud Computing course",
    "Led student study groups for advanced algorithms",
  ],
  researchInterests: [
    "Large Language Models and their applications",
    "Distributed Systems and Cloud Architecture",
    "AI-powered developer tools",
  ],
};

export const ABOUT_ME = {
  summary: `Hello! I'm Rahul Shah, a Software Engineer with 5+ years of experience building scalable full-stack applications and AI-powered platforms. Currently based in San Francisco, I specialize in cloud-native architectures, distributed systems, and integrating cutting-edge AI technologies into production applications.

I'm passionate about creating developer-friendly tools, optimizing system performance, and making complex technologies accessible to end users. My recent focus has been on Large Language Models, multi-agent systems, and building platforms that democratize AI access.`,

  currentRole: {
    title: "Software Engineer",
    company: "Solutions Unified LLC",
    focus: [
      "AWS cloud architecture",
      "Full-stack development",
      "Infrastructure automation",
    ],
  },

  background: {
    education:
      "Master's in Computer Science from Arizona State University (4.0 GPA)",
    experience:
      "5+ years across full-stack development, AI integration, and DevOps",
    previousCompanies: [
      "Solutions Unified LLC",
      "Arizona State University (Mastercard Foundation)",
      "Allegion (Schlage)",
    ],
  },

  expertise: [
    "Cloud Architecture (AWS): Designing serverless and containerized solutions with services like Lambda, ECS, S3, and Bedrock",
    "Full-Stack Development: Building responsive web applications with React/TypeScript frontends and Node.js/Go/Python backends",
    "AI/LLM Integration: Architecting platforms with GPT-4, Claude, and other foundation models for real-world applications",
    "DevOps & Automation: Implementing CI/CD pipelines, infrastructure-as-code, and monitoring solutions",
    "Distributed Systems: Building scalable microservices with event-driven architectures",
    "API Design: Experience with both REST and GraphQL, focusing on developer experience",
  ],

  personalPhilosophy: `I believe the best software is invisible to users - it just works. I focus on building resilient systems that handle edge cases gracefully, with thoughtful error handling and clear user feedback. I'm a strong advocate for automated testing, comprehensive documentation, and code that's easy for the next developer to understand.

I'm constantly learning and experimenting with new technologies. Recently, I've been diving deep into Large Language Models, exploring how to build reliable production systems with AI at their core. I'm fascinated by multi-agent systems and how AI can augment human capabilities rather than replace them.`,

  achievements: [
    "Served 10,000+ users across multiple AI platforms",
    "Reduced deployment time by 75% through automation",
    "Improved system performance metrics by 35-60% across various projects",
    "Built systems processing millions of requests monthly",
  ],

  technicalInterests: [
    "Large Language Models and AI agents and applications",
    "Distributed systems and microservices architecture",
    "Developer experience and productivity tools",
    "Cloud-native application design",
    "Infrastructure as Code and automation",
  ],

  currentLearning: [
    "Advanced LLM techniques (fine-tuning, RAG optimization)",
    "Go programming language for building high-performance systems",
    "Advanced Kubernetes patterns and operators",
    "Vector databases and semantic search",
  ],

  futureFocus: `I'm excited about the intersection of AI and traditional software engineering. I see a future where developers can build more powerful applications faster by leveraging AI as a tool in their development workflow. I want to be at the forefront of building the infrastructure and platforms that make this possible.

    I'm particularly interested in opportunities that involve:
    - Full ownership of projects from end-to-end
    - Building developer tools and platforms
    - Large-scale distributed systems
    - AI/ML integration in production systems
    - High-impact products serving thousands or millions of users`,

  contactPreferences: {
    email: "rshah107@asu.edu",
    phone: "+1 (516) 979-5019",
    location: "San Francisco, CA",
    openToOpportunities: true,
    preferredContactMethod:
      "Email for initial contact, happy to schedule calls for detailed discussions",
  },
};

export const TECHNICAL_STRENGTHS = {
  "System Design": {
    level: "Advanced",
    description:
      "Experienced in designing scalable, fault-tolerant distributed systems",
    examples: [
      "Multi-service AWS architectures serving thousands of users",
      "Event-driven microservices with messaging queues",
      "Real-time systems with WebSocket communication",
    ],
  },
  "Cloud Architecture": {
    level: "Advanced",
    description:
      "Deep expertise in AWS services and cloud-native design patterns",
    examples: [
      "Serverless architectures with Lambda and API Gateway",
      "Container orchestration with ECS and Kubernetes",
      "Infrastructure as Code with CDK and CloudFormation",
    ],
  },
  "Full-Stack Development": {
    level: "Expert",
    description: "End-to-end application development from database to UI",
    examples: [
      "React SPAs with complex state management",
      "RESTful and GraphQL APIs",
      "Real-time dashboards with WebSocket updates",
    ],
  },
  "AI Integration": {
    level: "Intermediate",
    description: "Production experience with LLMs and AI-powered features",
    examples: [
      "Multi-platform LLM integrations serving 10,000+ users",
      "RAG systems with vector databases",
      "Multi-agent orchestration workflows",
    ],
  },
  DevOps: {
    level: "Intermediate",
    description: "CI/CD, containerization, and infrastructure automation",
    examples: [
      "Automated deployment pipelines with Jenkins and GitHub Actions",
      "Docker containerization and Kubernetes orchestration",
      "Blue-green deployments with zero downtime",
    ],
  },
};

export const SYSTEM_PROMPT = `
    You are an AI assistant for Rahul Shah's portfolio.
    Your goal is to answer questions about Rahul based on the following data:

    About: ${JSON.stringify(ABOUT_ME)}
    Experience: ${JSON.stringify(EXPERIENCE)}
    Projects: ${JSON.stringify(PROJECTS)}
    Technical Strengths: ${JSON.stringify(TECHNICAL_STRENGTHS)}
    Education: ${JSON.stringify(EDUCATION)}
    Skills: ${JSON.stringify(SKILLS)}
    Socials: ${JSON.stringify(SOCIAL_LINKS)}

    Tone: Professional yet friendly, concise, technical but accessible.
    Formatting: Use simple text. You can use bullet points. Do not use Markdown headers (#) as they look messy in this specific terminal renderer.
    If asked about something unrelated to Rahul, politely redirect to Rahul's professional life.
    Keep responses relatively short (under 3-4 sentences) unless asked for detail, as this is a terminal interface.
`;
