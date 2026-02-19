export const PROJECTS = [
  {
    name: "Vistruct",
    description:
      "AI-powered educational video platform that lets educators create professional videos with chat-based script editing, AI voice-over, and Manim animations.",
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
      "Python",
      "React",
      "TypeScript",
      "FastAPI",
      "PostgreSQL",
      "Docker",
      "Manim",
      "GenAI",
    ],
    github: "https://github.com/rahulSailesh-shah/Vistruct",
    demo: "https://portfolio-assets-rshah107.s3.us-east-2.amazonaws.com/videos/Integration_Demo.mov",
    period: "Not specified",
    impact: [
      "Enables educators to create professional educational videos without video editing expertise",
      "Reduces video production time from hours to minutes",
      "Makes mathematical and scientific animations accessible through Manim integration",
      "Democratizes video content creation for non-technical educators",
    ],
    technicalHighlights: [
      "Built real-time chat-based script editing system",
      "Integrated AI models for script generation and voice synthesis",
      "Designed asynchronous video rendering pipeline",
      "Implemented user authentication and project management",
      "Created responsive UI with TypeScript for type-safe development",
    ],
  },
  {
    name: "Conversense",
    description:
      "Platform to create AI agents for real-time video call Q&A with in-call emotion analysis, live meeting summaries, and post-meeting chat-based follow-up.",
    fullDescription: `Conversense is a real-time AI collaboration platform that allows users to interact with intelligent agents over video calls. It supports question-answering and topic-specific discussions during the meeting with in-call emotion analysis. After the session, a background pipeline processes the meeting by fetching transcripts, recordings, and generating summaries for review. Additionally, a chat interface allows users to query the agent asynchronously about what happened during the meeting.

Key Features:
- Real-time AI agent interaction via video calls for topic-specific Q&A
- In-call emotion analysis for enhanced interaction understanding
- Automatic meeting transcript and recording retrieval after sessions
- Live meeting summaries during the call
- Summarization engine that condenses the meeting discussion into actionable insights
- Persistent chat interface to ask follow-up questions post-meeting
- Background job processing for transcript, recording, and summary generation
- Modular architecture to integrate multiple AI models for conversation, summarization, and retrieval
- Supports multiple simultaneous meetings and agents with stateful memory`,
    tech: [
      "Golang",
      "React",
      "TypeScript",
      "PostgreSQL",
      "Livekit",
      "Gemini Live API",
      "GenAI",
    ],
    github: "https://github.com/rahulSailesh-shah/conversense",
    demo: "https://portfolio-assets-rshah107.s3.us-east-2.amazonaws.com/videos/Integration_Demo.mov",
    period: "Not specified",
    impact: [
      "Enables interactive learning or discussion through AI agents",
      "Automates meeting documentation, reducing manual note-taking",
      "Allows users to query past meetings via chat interface",
      "Supports knowledge retention and accessibility for team discussions",
      "Provides real-time emotion analysis for better interaction understanding",
    ],
    technicalHighlights: [
      "Implemented real-time video call integration with AI agent interaction using Livekit",
      "Designed asynchronous background processing for transcripts, recordings, and summarization",
      "Built chat interface to allow post-meeting queries on meeting content",
      "Integrated Gemini Live API for real-time AI interactions",
      "Ensured stateful memory for agents across meetings",
      "Implemented emotion analysis during video calls",
    ],
  },
  {
    name: "CreateAI",
    description:
      "CreateAI is a platform that enables anyone to build and deploy AI agents and chatbots on private knowledge bases with support for 40+ models, with built-in guardrails for privacy and ethical AI use.",
    fullDescription: `CreateAI is a platform that enables anyone to build and deploy AI agents and chatbots on private knowledge bases with support for 40+ models. It emphasizes safe sharing, compliance, and extensibility for secure, transparent AI assistants.

Key Features:
- Model-agnostic platform supporting 40+ AI models (OpenAI, Anthropic, Gemini, AWS Bedrock)
- Private knowledge base integration for custom AI assistants
- Built-in guardrails for privacy and ethical AI use
- No-code/low-code interface for building AI agents
- Secure sharing and compliance features
- Extensible architecture for custom integrations
- Enterprise-grade security and scalability

The platform democratizes AI development by allowing non-technical users to build sophisticated AI assistants while maintaining security and ethical standards.`,
    tech: [
      "Python",
      "React",
      "AWS Bedrock",
      "AWS Lambda",
      "AWS S3",
      "AWS DynamoDB",
      "LangChain",
      "OpenAI",
      "Anthropic",
      "Gemini",
    ],
    github: "",
    demo: "https://ai.asu.edu/technical-foundation/createai-builder",
    period: "Ongoing",
    impact: [
      "Enables non-technical users to build AI assistants and chatbots",
      "Supports 40+ AI models for flexibility and vendor independence",
      "Provides built-in privacy and ethical AI guardrails",
      "Facilitates secure sharing and collaboration on AI agents",
      "Democratizes AI development for educational and enterprise use",
    ],
    technicalHighlights: [
      "Model-agnostic architecture supporting multiple AI providers",
      "Built knowledge base integration with vector databases",
      "Implemented privacy and ethical AI evaluation frameworks",
      "Created no-code builder interface for non-technical users",
      "Designed serverless architecture using AWS Lambda and DynamoDB",
      "Integrated LangChain for orchestration and tool use",
    ],
  },
  {
    name: "VoicePad",
    description:
      "VoicePad is a real-time app that lets you talk directly to an AI language model and control a shared whiteboard by giving spoken instructions. Collaborate by describing what you want drawn, and see the AI turn your words into visual ideas instantly.",
    fullDescription: `VoicePad is a real-time collaborative application that combines voice interaction with AI and visual whiteboard capabilities. Users can speak directly to an AI language model and control a shared whiteboard through spoken instructions, enabling instant visual representation of ideas.

Key Features:
- Real-time voice-to-AI interaction using Gemini Live API
- Shared whiteboard control through voice commands
- Collaborative editing with multiple users
- Instant visual generation from spoken descriptions
- Speech-to-text processing using Whisper
- Real-time synchronization across all connected clients
- gRPC-based communication for low-latency interactions

The platform enables natural, hands-free collaboration where users can describe visual concepts and see them appear on a shared canvas in real-time.`,
    tech: [
      "Golang",
      "Python",
      "React",
      "TypeScript",
      "Gemini Live API",
      "gRPC",
      "Whisper",
      "Livekit",
    ],
    github: "https://github.com/rahulSailesh-shah/VoicePad",
    demo: "https://voicepad.com",
    period: "Not specified",
    impact: [
      "Enables hands-free visual collaboration through voice commands",
      "Makes AI-powered visual generation accessible via natural speech",
      "Facilitates real-time collaborative whiteboard sessions",
      "Reduces barriers to visual ideation and brainstorming",
    ],
    technicalHighlights: [
      "Integrated Gemini Live API for real-time voice-to-AI interaction",
      "Built real-time whiteboard synchronization using Livekit",
      "Implemented speech-to-text processing with Whisper",
      "Designed gRPC-based communication for low-latency interactions",
      "Created collaborative editing system with conflict resolution",
      "Built responsive UI for voice and visual interaction",
    ],
  },
  {
    name: "Ch8n",
    description:
      "Ch8n is a platform that lets you create n8n style workflows with AI. It allows you to create workflows that can be used to automate tasks and processes.",
    fullDescription: `Ch8n is an AI-powered workflow automation platform inspired by n8n. It enables users to create complex automation workflows using AI assistance, making workflow creation more intuitive and accessible.

Key Features:
- Visual workflow builder similar to n8n
- AI-assisted workflow creation and optimization
- Support for various integrations and connectors
- Task automation capabilities
- Process orchestration
- User authentication and workflow management
- Dockerized deployment for easy setup

The platform combines the power of visual workflow builders with AI assistance to make automation more accessible and intelligent.`,
    tech: [
      "Go",
      "React",
      "TypeScript",
      "Better Auth",
      "PostgreSQL",
      "Docker",
      "GenAI",
    ],
    github: "https://github.com/rahulSailesh-shah/ch8n_go",
    demo: "https://portfolio-assets-rshah107.s3.us-east-2.amazonaws.com/videos/Integration_Demo.mov",
    period: "Not specified",
    impact: [
      "Makes workflow automation more accessible through AI assistance",
      "Enables visual workflow creation without extensive technical knowledge",
      "Facilitates task and process automation",
      "Provides intuitive interface for complex automation scenarios",
    ],
    technicalHighlights: [
      "Built visual workflow builder with drag-and-drop interface",
      "Integrated AI for workflow creation assistance",
      "Implemented Better Auth for secure user authentication",
      "Designed workflow execution engine",
      "Created integration system for various services and APIs",
      "Built Dockerized deployment for consistent environments",
    ],
  },
  {
    name: "Shell",
    description:
      "A simple POSIX-compliant shell implementation in Go. Supports built-in commands (exit, echo, type, pwd, cd), executes external programs, handles single and double quotes, and supports ~ in cd",
    fullDescription: `Shell is a POSIX-compliant shell implementation written in Go. It provides core shell functionality including built-in commands, external program execution, and proper handling of quotes and special characters.

Key Features:
- Built-in commands: exit, echo, type, pwd, cd
- External program execution
- Single and double quote handling
- Tilde expansion in cd command (~)
- POSIX-compliant behavior
- Command parsing and execution
- Environment variable support

This project demonstrates low-level system programming, process management, and command-line interface design in Go.`,
    tech: ["Go"],
    github: "https://github.com/rahulSailesh-shah/go-shell",
    demo: null,
    period: "Not specified",
    impact: [
      "Educational tool for understanding shell internals",
      "Demonstrates process management and system programming",
      "Shows POSIX compliance implementation",
      "Useful for learning Go system programming",
    ],
    technicalHighlights: [
      "Implemented command parsing and tokenization",
      "Built process execution and management system",
      "Handled quote parsing and expansion",
      "Implemented built-in command execution",
      "Created environment variable management",
      "Designed POSIX-compliant command handling",
    ],
  },
  {
    name: "Redis",
    description:
      "A minimalist, in-memory Redis-compatible server written in Go. It implements the RESP protocol and supports basic commands like PING, SET/GET, and hash operations (HSET, HGET, HGETALL).",
    fullDescription: `Redis is a minimalist, in-memory Redis-compatible server implemented in Go. It implements the Redis Serialization Protocol (RESP) to allow interaction via standard Redis clients like redis-cli or any RESP-compatible tool.

Key Features:
- RESP protocol parsing and serialization for communication
- Thread-safe in-memory key-value store (SET / GET)
- Thread-safe hash map store (HSET / HGET / HGETALL)
- PING command for connection testing
- TCP server for handling multiple client connections
- Compatible with redis-cli, telnet, and other RESP clients
- Demonstrates core concurrency patterns using sync.RWMutex

This project demonstrates core principles of in-memory data stores, concurrency handling, and TCP server design.`,
    tech: ["Go", "TCP Networking"],
    github: "https://github.com/rahulSailesh-shah/redis",
    demo: null,
    period: "Not specified",
    impact: [
      "Serves as a learning tool for understanding Redis internals and TCP servers",
      "Demonstrates thread-safe in-memory data storage",
      "Supports educational exploration of RESP protocol and hash data structures",
      "Shows network programming and protocol implementation",
    ],
    technicalHighlights: [
      "Implemented a TCP server to handle multiple client connections",
      "Developed RESP parser and serializer from scratch for Redis compatibility",
      "Designed thread-safe in-memory stores for strings and hashes",
      "Built concurrent request handling",
      "Created command routing and execution system",
      "Implemented proper error handling and protocol compliance",
    ],
  },
  {
    name: "Load Balancer",
    description:
      "A simple round-robin HTTP load balancer written in Go. Incoming requests are proxied to a pool of backend servers, health-checked periodically, and automatically removed from rotation when unreachable.",
    fullDescription: `Load Balancer is a round-robin HTTP load balancer implemented in Go. It distributes incoming HTTP requests across a pool of backend servers using round-robin scheduling, with built-in health checking and automatic server removal.

Key Features:
- Round-robin request distribution across backend servers
- Periodic health checking of backend servers
- Automatic removal of unhealthy servers from rotation
- Reverse proxy functionality using net/http/httputil
- Configuration via YAML files using Viper
- HTTP request forwarding and response handling
- Server pool management

The load balancer ensures high availability by automatically detecting and removing unhealthy servers while distributing load evenly across available backends.`,
    tech: ["Go", "net/http", "httputil", "Viper", "YAML"],
    github: "https://github.com/rahulSailesh-shah/go-loadbalancer",
    demo: null,
    period: "Not specified",
    impact: [
      "Demonstrates load balancing concepts and implementation",
      "Shows reverse proxy and HTTP forwarding techniques",
      "Provides example of health checking and failover",
      "Useful for learning distributed systems concepts",
    ],
    technicalHighlights: [
      "Implemented round-robin scheduling algorithm",
      "Built health checking system with periodic monitoring",
      "Created reverse proxy using net/http/httputil",
      "Designed server pool management with automatic failover",
      "Integrated Viper for YAML configuration",
      "Implemented request forwarding and response handling",
    ],
  },
  {
    name: "Logger",
    description:
      "A high-performance, structured logging library for Go that provides a context-aware abstraction over zerolog for enterprise-grade observability. It features native support for multi-destination transports like AWS CloudWatch and local files, alongside built-in trace ID propagation and custom event hooks.",
    fullDescription: `Logger is a high-performance, structured logging library for Go built on top of zerolog. It provides enterprise-grade observability features with context-aware logging, multi-destination transports, and built-in trace ID propagation.

Key Features:
- Context-aware logging abstraction over zerolog
- Multi-destination transports (AWS CloudWatch, local files)
- Built-in trace ID propagation for distributed tracing
- Custom event hooks for extensibility
- High-performance structured logging
- Enterprise-grade observability features
- Configurable log levels and formatting

The library simplifies logging in distributed systems by providing a unified interface with built-in support for cloud logging services and trace correlation.`,
    tech: ["Go", "Zerolog", "AWS CloudWatch", "Local Files"],
    github: "https://github.com/rahulSailesh-shah/go-logger",
    demo: null,
    period: "Not specified",
    impact: [
      "Simplifies logging in Go applications",
      "Provides enterprise-grade observability features",
      "Enables distributed tracing through trace ID propagation",
      "Supports multiple logging destinations for flexibility",
    ],
    technicalHighlights: [
      "Built context-aware logging abstraction",
      "Implemented multi-destination transport system",
      "Created trace ID propagation mechanism",
      "Designed extensible hook system for custom events",
      "Integrated AWS CloudWatch logging",
      "Optimized for high-performance logging",
    ],
  },
  {
    name: "FigPro",
    description:
      "A real-time live collaboration tool and alternative to Figma.",
    fullDescription: `FigPro is a real-time collaborative whiteboard tool inspired by Figma. It enables multiple users to work together on a shared canvas with real-time synchronization, making it ideal for design collaboration and brainstorming sessions.

Key Features:
- Real-time collaborative editing with multiple users
- Live synchronization across all connected clients
- Drawing and design tools using Fabric.js
- User presence and cursor tracking
- Real-time updates using Liveblocks
- Modern UI built with Next.js and Tailwind CSS
- Responsive design for various screen sizes

The platform provides a Figma-like experience with real-time collaboration capabilities, making it suitable for remote design teams and creative workflows.`,
    tech: ["Next.js", "Liveblocks", "Fabric.js", "Tailwind CSS"],
    github: "https://github.com/rahulSailesh-shah/Figma-Clone",
    demo: "https://figma-clone-coral.vercel.app/",
    period: "Not specified",
    impact: [
      "Enables real-time collaborative design work",
      "Provides alternative to commercial design tools",
      "Facilitates remote team collaboration",
      "Demonstrates real-time synchronization techniques",
    ],
    technicalHighlights: [
      "Integrated Liveblocks for real-time collaboration",
      "Built drawing tools using Fabric.js",
      "Implemented user presence and cursor tracking",
      "Created real-time synchronization system",
      "Designed responsive UI with Tailwind CSS",
      "Built with Next.js for optimal performance",
    ],
  },
  {
    name: "Route Tracker",
    description:
      "Mobile app tracks routes using GPS capabilities. Stores recorded routes in MongoDB for review. User authentication and data privacy included.",
    fullDescription: `Route Tracker is a mobile application that enables users to track and record their routes using GPS capabilities. The app stores recorded routes in MongoDB for later review and analysis, with built-in user authentication and privacy features.

Key Features:
- GPS-based route tracking
- Route recording and storage
- MongoDB database for route persistence
- User authentication system
- Data privacy and security features
- Route review and history
- Mobile-first design with React Native

The application is useful for fitness tracking, travel logging, and location-based services, providing users with a way to record and review their movement patterns.`,
    tech: ["React Native", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/rahulSailesh-shah/Route-Tracker",
    demo: null,
    period: "Not specified",
    impact: [
      "Enables GPS-based route tracking for mobile users",
      "Provides route history and review capabilities",
      "Demonstrates mobile app development with React Native",
      "Shows integration of GPS and database storage",
    ],
    technicalHighlights: [
      "Implemented GPS tracking using React Native",
      "Built RESTful API with Express and Node.js",
      "Designed MongoDB schema for route storage",
      "Created user authentication system",
      "Implemented data privacy and security measures",
      "Built mobile-first UI with React Native",
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



