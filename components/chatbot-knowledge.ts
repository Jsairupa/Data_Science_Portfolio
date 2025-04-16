// Knowledge base for the resume chatbot
export const knowledgeBase = {
  skills: [
    "Python",
    "SQL",
    "R",
    "PySpark",
    "Machine Learning",
    "Deep Learning",
    "NLP",
    "Data Visualization",
    "Statistical Analysis",
    "TensorFlow",
    "PyTorch",
    "Pandas",
    "NumPy",
    "Scikit-learn",
    "Power BI",
    "Tableau",
  ],
  education: [
    "Master of Science in Data Science from Rochester Institute of Technology (2023-2025)",
    "Bachelor of Engineering in Computer Science from Amrita Vishwa Vidyapeetham (2019-2023)",
  ],
  experience: [
    "Data Science Intern at Sree Rayalaseema Hi-Strength Hypo Ltd. (June 2022 – April 2023)",
    "Designed predictive sales models improving demand accuracy by 15%",
    "Developed BI dashboards reducing manual reporting by 30%",
    "Performed customer segmentation boosting conversion rates by 20%",
  ],
  projects: [
    "Political Polarization Analysis using NLP and LLMs",
    "Virtual Handwriting Smart Board with CNNs (98% accuracy)",
    "AI-Powered Data Assistant using Streamlit and LangChain",
    "Credit Card Fraud Detection with Machine Learning",
    "Socio-Economic Factors & Cancer Rates Analysis",
    "Housing Data Analysis in Ames, Iowa",
  ],
  certifications: ["IBM Data Science Professional Certificate", "Generative AI Course with Langchain and Huggingface"],
  publications: ["Virtual Handwriting Based Smart Board Using Deep Learning (2023, IEEE)"],
  contact: [
    "Email: sj7740@rit.edu",
    "Location: Rochester, NY",
    "Phone: 585-557-9083",
    "LinkedIn: linkedin.com/in/sairupajhade",
    "GitHub: github.com/Jsairupa",
  ],
}

// Conversational greetings with variety
const greetings = [
  "Hi there! I'm Sai's digital twin. How can I help you learn about her skills and experience today?",
  "Hello! I'd be happy to tell you all about Sai's data science expertise. What would you like to know?",
  "Hey! I'm here to represent Sai and her professional journey. What aspects of her background interest you?",
  "Greetings! I can share insights about Sai's projects, skills, or education. What are you curious about?",
]

// Conversational follow-ups to keep the chat engaging
const followUps = [
  "Is there anything specific about that you'd like to know more about?",
  "What else would you like to learn about Sai's background?",
  "Anything else you're curious about regarding Sai's experience?",
  "Would you like to know about any other skills or projects?",
  "Is there another aspect of Sai's profile you'd like to explore?",
]

// Get a random item from an array
const getRandomItem = (array: string[]) => {
  return array[Math.floor(Math.random() * array.length)]
}

// Add a follow-up question to responses sometimes
const maybeAddFollowUp = (response: string): string => {
  // 40% chance to add a follow-up
  return Math.random() < 0.4 ? `${response} ${getRandomItem(followUps)}` : response
}

// Skill-specific detailed responses
export const skillResponses: Record<string, string[]> = {
  Python: [
    "Yes, Sai is quite proficient in Python! It's her primary programming language for data science and machine learning projects. She's been using it for several years now.",
    "Python is Sai's go-to language. She's used it extensively in all her data science projects, from data cleaning to model deployment.",
    "Definitely! Python is one of Sai's core skills. She's comfortable with advanced Python concepts and libraries like Pandas, NumPy, and scikit-learn.",
  ],
  R: [
    "Yes, Sai is skilled in R. She's used it for statistical analysis and data visualization in several academic projects, especially for statistical modeling.",
    "Sai has good experience with R, particularly for statistical analysis. She's used it alongside Python in her data science toolkit.",
    "R is definitely in Sai's skillset. She's applied it for statistical testing and creating visualizations in her academic work.",
  ],
  SQL: [
    "Yes, Sai is quite comfortable with SQL. She uses it regularly for database querying, data extraction, and manipulation in her data science workflows.",
    "SQL is one of Sai's strong skills. She's worked with various database systems and can write complex queries for data analysis.",
    "Sai has solid SQL skills and has used it extensively for data extraction and transformation in her projects.",
  ],
  PySpark: [
    "Yes, Sai has hands-on experience with PySpark! She's used it for big data processing and distributed computing tasks, particularly in her cloud computing and big data analytics coursework.",
    "PySpark is definitely in Sai's toolkit. She's worked with it to process large datasets efficiently and has applied it in distributed computing environments.",
    "Sai has worked with PySpark for handling large-scale data processing. She's familiar with RDDs, DataFrames, and Spark SQL components.",
  ],
  TensorFlow: [
    "Yes, Sai is quite skilled with TensorFlow. She used it extensively in her Virtual Handwriting Smart Board project where she achieved an impressive 98% accuracy with CNN models.",
    "TensorFlow is one of Sai's strengths. She's built and trained various neural network architectures with it, including CNNs for her handwriting recognition project.",
    "Sai has solid experience with TensorFlow. She's implemented both simple and complex neural network architectures for various machine learning tasks.",
  ],
  PyTorch: [
    "Yes, Sai is familiar with PyTorch and has used it for implementing deep learning models, particularly for NLP tasks and transformer-based architectures.",
    "PyTorch is part of Sai's deep learning toolkit. She's used it for building and training neural networks, especially for natural language processing projects.",
    "Sai has good working knowledge of PyTorch. She's implemented various neural network architectures with it and appreciates its dynamic computation graph.",
  ],
  "Machine Learning": [
    "Machine Learning is definitely one of Sai's core strengths! She has implemented various ML algorithms including Random Forests, XGBoost, and neural networks for classification, regression, and clustering tasks.",
    "Sai has extensive experience with Machine Learning. From traditional algorithms to deep learning approaches, she's applied ML to solve various real-world problems.",
    "Yes, Machine Learning is central to Sai's skill set. She's worked on diverse ML projects, from predictive modeling to computer vision and NLP applications.",
  ],
  "Deep Learning": [
    "Yes, Sai has solid experience with Deep Learning. She's built CNN models for image recognition and transformer models for NLP tasks with impressive results.",
    "Deep Learning is an area where Sai has developed strong expertise. She's implemented various neural network architectures for different applications.",
    "Sai has worked extensively with Deep Learning techniques. Her Virtual Handwriting project using CNNs achieved 98% accuracy, showcasing her skills in this area.",
  ],
  NLP: [
    "Yes, Sai has worked extensively with NLP techniques and Large Language Models in her Political Polarization Analysis project. She's familiar with sentiment analysis, text classification, and working with transformer models.",
    "NLP is definitely one of Sai's areas of expertise. She's applied various natural language processing techniques and worked with models like GPT-4o, Llama 3.2, and Mistral AI.",
    "Natural Language Processing is an area Sai has explored deeply. Her political polarization project involved advanced NLP methods and large language models for analyzing text data.",
  ],
  "Data Visualization": [
    "Yes, Sai is skilled in data visualization using tools like Tableau, Power BI, Matplotlib, Seaborn, and Plotly. She has experience creating interactive dashboards that reduced manual reporting by 30% in her previous role.",
    "Data visualization is one of Sai's strengths. She can transform complex data into clear, insightful visualizations that tell a compelling story.",
    "Sai has strong data visualization skills across multiple tools and libraries. She believes in the power of effective visualization to communicate insights.",
  ],
}

// Project-specific detailed responses
export const projectResponses: Record<string, string[]> = {
  "Political Polarization": [
    "Sai's Political Polarization Analysis project is fascinating! She applied advanced NLP techniques and Large Language Models (GPT-4o, Llama 3.2, Mistral AI) to analyze political polarization in YouTube news comments. The project revealed interesting patterns in how different political viewpoints are expressed online.",
    "The Political Polarization project was one of Sai's most innovative works. She used cutting-edge NLP and multiple LLMs to analyze how political discourse manifests in social media comments, with a focus on YouTube news channels.",
  ],
  "Virtual Handwriting": [
    "The Virtual Handwriting Smart Board project was quite impressive! Sai formulated a CNN-based handwriting recognition system using TensorFlow and OpenCV, achieving 98% accuracy and reducing latency by 30% for real-time performance. It's a great showcase of her deep learning skills.",
    "Sai's Virtual Handwriting project combined computer vision and deep learning techniques to create a real-time handwriting recognition system. The CNN model she built achieved remarkable 98% accuracy while maintaining low latency for a smooth user experience.",
  ],
  "AI Data Assistant": [
    "Sai built an innovative AI-Powered Data Assistant using Streamlit and LangChain. The app analyzes user-uploaded CSVs and uses LLMs to auto-generate Python code for data cleaning, EDA, and model building with clear, step-by-step explanations. It's a great example of applied AI for data science workflows.",
    "The AI Data Assistant project showcases Sai's ability to combine multiple technologies. She created a Streamlit app that leverages LangChain and various LLMs to help users analyze their data and generate appropriate Python code for different data science tasks.",
  ],
  "Credit Card Fraud": [
    "For her Credit Card Fraud Detection project, Sai developed a machine learning solution for detecting fraudulent transactions in an imbalanced dataset. She improved model accuracy by 15% through clever data preprocessing and achieved an impressive F1-Score of 0.92 with 20% reduction in false positives.",
    "Sai's Credit Card Fraud Detection project tackled the challenging problem of imbalanced classification. She implemented various techniques to handle the class imbalance and feature engineering approaches that significantly improved the model's performance.",
  ],
}

// Define topic-specific response functions for better organization
const getExperienceResponse = (): string => {
  return `Sai's professional experience includes working as a Data Science Intern at Sree Rayalaseema Hi-Strength Hypo Ltd. from June 2022 to April 2023. During this role, she:

1. Designed and deployed predictive sales models using ARIMA, XGBoost, and Prophet, improving demand accuracy by 15% and optimizing supply chain forecasting to reduce stockouts.

2. Developed interactive business intelligence dashboards (Tableau, Power BI) to monitor real-time sales performance, cutting manual reporting by 30% and enabling faster decision-making.

3. Performed customer segmentation using K-Means clustering and DBSCAN, enabling targeted marketing campaigns, which boosted conversion rates by 20% and optimized pricing strategies, leading to a 5% increase in revenue.

This experience has given her practical skills in applying data science techniques to real-world business problems.`
}

const getEducationResponse = (): string => {
  return `Regarding Sai's education:

• She is currently pursuing a Master of Science in Data Science from Rochester Institute of Technology (2023-2025) with a GPA of 3.49/4.0.

• Her coursework includes Applied Statistics, Foundation of Data Science, Database Design Implementation, Data Warehousing, Applied Data Science, Advanced Political Data Science, Cloud Computing, and Big Data Analytics.

• She holds a Bachelor of Engineering in Computer Science and Engineering from Amrita Vishwa Vidyapeetham (2019-2023) with a GPA of 8.23/10.0.

Her educational background has provided her with a strong foundation in both theoretical concepts and practical applications of data science and machine learning.`
}

const getSkillsResponse = (): string => {
  return `Sai has a diverse set of data science and technical skills including:

• Programming Languages: Python, PySpark, SQL, R, SAS
• Technologies & Tools: PyTorch, scikit-learn, Linux, Tableau, Excel, Git, Docker, JIRA
• Cloud & Databases: SQL Server Management Studio, MySQL, NoSQL (MongoDB), AWS Fundamentals, Microsoft Azure (Databricks, Data Factory, Data Lake Storage), Kafka, Kinesis, OpenSearch
• Core Competencies: Statistical Data Analysis, Data Visualization, Machine Learning, Natural Language Processing, Deep Learning, Conversational AI

She's particularly strong in Python, Machine Learning, and Data Visualization, with demonstrated expertise in applying these skills to solve complex data problems.`
}

const getProjectsResponse = (): string => {
  return `Sai has worked on several impressive projects including:

1. Political Polarization Analysis - Applied advanced NLP techniques and Large Language Models (GPT-4o, Llama 3.2, Mistral AI) to analyze political polarization in YouTube news comments.

2. Virtual Handwriting Smart Board - Formulated a CNN-based virtual handwriting recognition system using TensorFlow and OpenCV, achieving 98% accuracy and reducing latency by 30% for real-time performance.

3. AI-Powered Data Assistant - Built a Streamlit app that analyzes user-uploaded CSVs and uses LLMs to auto-generate Python code for data cleaning, EDA, and model building with clear, step-by-step explanations.

4. Credit Card Fraud Detection - Developed ML solution for detecting fraudulent transactions in an imbalanced dataset, improving model accuracy by 15% and achieving an F1-Score of 0.92.

5. Socio-Economic Factors & Cancer Rates Analysis - Analyzed correlations between income, poverty, and cancer incidence/mortality in U.S. counties.

6. Housing Data Analysis in Ames, Iowa - Analyzed 1,460 homes to identify factors affecting house prices using T-tests, ANOVA, and linear regression.

Each project showcases different aspects of her technical skills and problem-solving abilities.`
}

const getCertificationsResponse = (): string => {
  return `Sai has earned valuable certifications including:

• IBM Data Science Professional Certificate - A comprehensive certification covering data analysis, visualization, machine learning, and data science methodologies.

• Generative AI Course with Langchain and Huggingface - Advanced course on building generative AI applications using Langchain and Huggingface transformers.

She also has a publication: "Virtual Handwriting Based Smart Board Using Deep Learning" (2023) in IEEE, which demonstrates her technical expertise and research capabilities in the field of deep learning and computer vision.`
}

const getContactResponse = (): string => {
  return `You can contact Sai through:

• Email: sj7740@rit.edu
• Phone: 585-557-9083
• LinkedIn: linkedin.com/in/sairupajhade
• GitHub: github.com/Jsairupa
• Location: Rochester, NY

She's currently open to discussing potential opportunities and collaborations in data science and machine learning.`
}

// Add these specific contact information response functions after the existing topic-specific response functions

// Modify the specific contact information response functions to return only the raw data
const getPhoneResponse = (): string => {
  return "585-557-9083"
}

const getEmailResponse = (): string => {
  return "sj7740@rit.edu"
}

const getLinkedInResponse = (): string => {
  return "linkedin.com/in/sairupajhade"
}

const getGitHubResponse = (): string => {
  return "github.com/Jsairupa"
}

const getLocationResponse = (): string => {
  return "Rochester, NY"
}

// Add these new functions for extracting specific resume data points
const getGpaResponse = (): string => {
  return "3.49/4.0"
}

const getUniversityResponse = (): string => {
  return "Rochester Institute of Technology"
}

const getGraduationYearResponse = (): string => {
  return "2025"
}

const getJobTitleResponse = (): string => {
  return "Data Science Intern"
}

const getCompanyResponse = (): string => {
  return "Sree Rayalaseema Hi-Strength Hypo Ltd."
}

const getWorkPeriodResponse = (): string => {
  return "June 2022 – April 2023"
}

// Function to generate response based on user input
export function generateResponse(userInput: string): string {
  // Convert input to lowercase for easier matching
  const input = userInput.toLowerCase().trim()

  // Define topic detection patterns
  const patterns = {
    greeting: /\b(hi|hello|hey|greetings|howdy|what's up|hola)\b/i,
    thanks: /\b(thank you|thanks|thx|thank)\b/i,
    goodbye: /\b(bye|goodbye|see you|farewell|later)\b/i,

    // Core resume topics
    experience:
      /\b(experience|work|job|career|intern|internship|professional|company|employment|position|role|responsibility|duties|tasks|accomplishment|achievement)\b/i,
    education:
      /\b(education|degree|university|college|school|study|studied|academic|course|gpa|grade|major|minor|graduate|undergraduate|bachelor|master|phd|doctorate)\b/i,
    skills:
      /\b(skills|technologies|tools|programming|languages|frameworks|what can you do|what does she know|abilities|competencies|proficiencies|expertise|capabilities)\b/i,
    projects:
      /\b(projects|portfolio|work|built|created|developed|make|made|implemented|designed|application|app|system|solution)\b/i,
    certifications: /\b(certifications|certificates|certified|qualifications|credentials|accreditation|diploma)\b/i,
    publications: /\b(publications|published|papers|research|journal|conference|article|author)\b/i,
    contact: /\b(contact|email|phone|reach|connect|get in touch|call|message|text)\b/i,

    // Modify the patterns object to include specific contact information patterns
    phone: /\b(phone|call|mobile|cell|telephone|number)\b/i,
    email: /\b(email|e-mail|mail|electronic mail)\b/i,
    linkedin_specific: /\b(linkedin|linked in)\b/i,
    github_specific: /\b(github|git|repository|repo)\b/i,
    location_specific: /\b(location|address|where|city|state|country|live|based)\b/i,

    // Specific skills
    python: /\bpython\b/i,
    sql: /\bsql\b/i,
    r_language: /\b(r programming|r language|programming in r)\b/i,
    pyspark: /\b(pyspark|py spark)\b/i,
    tensorflow: /\b(tensorflow|tensor flow)\b/i,
    pytorch: /\bpytorch\b/i,
    machine_learning: /\b(machine learning|ml)\b/i,
    deep_learning: /\b(deep learning|neural network)\b/i,
    nlp: /\b(nlp|natural language processing)\b/i,
    data_visualization: /\b(data visualization|visualize|charts|graphs|tableau|power bi|dashboard)\b/i,

    // Specific projects
    political_polarization: /\b(political polarization)\b/i,
    virtual_handwriting: /\b(virtual handwriting|handwriting|smart board)\b/i,
    ai_data_assistant: /\b(ai data assistant|data assistant)\b/i,
    credit_card_fraud: /\b(credit card fraud|fraud detection)\b/i,

    // Other topics
    linkedin: /\b(linkedin|linked in|social media profile|professional profile)\b/i,
    github: /\bgithub\b/i,
    availability: /\b(available|hire|hiring|job|opportunity|looking for work|employment)\b/i,
    strengths: /\b(strength|specialty|best at|excel|good at|specialize)\b/i,
    interests: /\b(interest|passion|enjoy|like|love|favorite)\b/i,
    about_chatbot: /\b(who are you|what are you|your name|chatbot|assistant|ai)\b/i,

    // More specific contact patterns
    phone_only: /\b(phone|number|phone number|contact number|cell|mobile)\b/i,
    email_only: /\b(email|e-mail|mail)\b/i,
    linkedin_only: /\b(linkedin|linked in)\b/i,
    github_only: /\bgithub\b/i,
    location_only: /\b(location|where|city|address)\b/i,

    // Academic information patterns
    gpa: /\b(gpa|grade point|grade point average)\b/i,
    university: /\b(university|college|school|institute|rit)\b/i,
    graduation_year: /\b(graduation|graduate|graduating|grad year|when.*graduate)\b/i,

    // Employment information patterns
    job_title: /\b(job title|position|role|title)\b/i,
    company: /\b(company|employer|organization|firm|where.*work)\b/i,
    work_period: /\b(work period|employment period|work duration|how long|when.*work)\b/i,
  }

  // Update the generateResponse function to check for these specific data point requests
  // Add these specific data point checks at the beginning of the function, before other checks

  // Check for specific data point requests (highest priority)
  if (patterns.phone_only.test(input)) {
    return getPhoneResponse()
  }

  if (patterns.email_only.test(input)) {
    return getEmailResponse()
  }

  if (patterns.linkedin_only.test(input)) {
    return getLinkedInResponse()
  }

  if (patterns.github_only.test(input)) {
    return getGitHubResponse()
  }

  if (patterns.location_only.test(input)) {
    return getLocationResponse()
  }

  if (patterns.gpa.test(input)) {
    return getGpaResponse()
  }

  if (patterns.university.test(input)) {
    return getUniversityResponse()
  }

  if (patterns.graduation_year.test(input)) {
    return getGraduationYearResponse()
  }

  if (patterns.job_title.test(input)) {
    return getJobTitleResponse()
  }

  if (patterns.company.test(input)) {
    return getCompanyResponse()
  }

  if (patterns.work_period.test(input)) {
    return getWorkPeriodResponse()
  }

  // Check for exact matches first (highest priority)

  // LinkedIn specific check (highest priority)
  if (patterns.linkedin.test(input)) {
    return "Sai's LinkedIn profile can be found at: linkedin.com/in/sairupajhade. Feel free to connect with her there for professional networking!"
  }

  // Check for professional experience (high priority)
  if (patterns.experience.test(input)) {
    return maybeAddFollowUp(getExperienceResponse())
  }

  // Check for education
  if (patterns.education.test(input)) {
    return maybeAddFollowUp(getEducationResponse())
  }

  // Check for skills
  if (patterns.skills.test(input)) {
    return maybeAddFollowUp(getSkillsResponse())
  }

  // Check for projects
  if (patterns.projects.test(input)) {
    return maybeAddFollowUp(getProjectsResponse())
  }

  // Check for certifications
  if (patterns.certifications.test(input)) {
    return maybeAddFollowUp(getCertificationsResponse())
  }

  // Check for publications
  if (patterns.publications.test(input)) {
    return maybeAddFollowUp(
      `Sai has published research work including "${knowledgeBase.publications[0]}" in IEEE. This publication demonstrates her technical expertise and research capabilities in the field of deep learning and computer vision.`,
    )
  }

  // Check for contact information
  if (patterns.contact.test(input)) {
    return maybeAddFollowUp(getContactResponse())
  }

  // Add these specific contact checks after the general contact check in the function
  // Place this code after the "Check for contact information" section

  // Check for specific contact information requests
  if (patterns.phone.test(input)) {
    return getPhoneResponse()
  }

  if (patterns.email.test(input)) {
    return getEmailResponse()
  }

  if (patterns.linkedin_specific.test(input)) {
    return getLinkedInResponse()
  }

  if (patterns.github_specific.test(input)) {
    return getGitHubResponse()
  }

  if (patterns.location_specific.test(input)) {
    return getLocationResponse()
  }

  // Check for greetings
  if (patterns.greeting.test(input)) {
    return getRandomItem(greetings)
  }

  // Check for thank you
  if (patterns.thanks.test(input)) {
    return getRandomItem([
      "You're welcome! I'm happy to help share information about Sai's background and skills.",
      "Anytime! Feel free to ask if you have any other questions about Sai.",
      "No problem at all! Is there anything else you'd like to know about Sai?",
      "Glad I could help! Let me know if you need any other information about Sai's experience or projects.",
    ])
  }

  // Check for goodbye
  if (patterns.goodbye.test(input)) {
    return getRandomItem([
      "Goodbye! Feel free to chat again if you have more questions about Sai's qualifications.",
      "Take care! I'm here anytime you want to learn more about Sai's skills and experience.",
      "Bye for now! Don't hesitate to return if you need more information about Sai.",
      "Until next time! I'm always available to discuss Sai's professional background.",
    ])
  }

  // Check for specific skills (if not caught by general skills check)
  if (patterns.python.test(input)) {
    return maybeAddFollowUp(getRandomItem(skillResponses["Python"]))
  }

  if (
    patterns.r_language.test(input) ||
    (input.includes("r") &&
      (input.includes("code") ||
        input.includes("program") ||
        input.includes("script") ||
        input.includes("language") ||
        input.includes("statistical")))
  ) {
    return maybeAddFollowUp(getRandomItem(skillResponses["R"]))
  }

  if (patterns.sql.test(input)) {
    return maybeAddFollowUp(getRandomItem(skillResponses["SQL"]))
  }

  if (patterns.pyspark.test(input) || (input.includes("spark") && !input.includes("tensorflow"))) {
    return maybeAddFollowUp(getRandomItem(skillResponses["PySpark"]))
  }

  if (patterns.tensorflow.test(input)) {
    return maybeAddFollowUp(getRandomItem(skillResponses["TensorFlow"]))
  }

  if (patterns.pytorch.test(input)) {
    return maybeAddFollowUp(getRandomItem(skillResponses["PyTorch"]))
  }

  if (patterns.machine_learning.test(input)) {
    return maybeAddFollowUp(getRandomItem(skillResponses["Machine Learning"]))
  }

  if (patterns.deep_learning.test(input)) {
    return maybeAddFollowUp(getRandomItem(skillResponses["Deep Learning"]))
  }

  if (patterns.nlp.test(input)) {
    return maybeAddFollowUp(getRandomItem(skillResponses["NLP"]))
  }

  if (patterns.data_visualization.test(input)) {
    return maybeAddFollowUp(getRandomItem(skillResponses["Data Visualization"]))
  }

  // Check for specific projects
  if (patterns.political_polarization.test(input)) {
    return maybeAddFollowUp(getRandomItem(projectResponses["Political Polarization"]))
  }

  if (patterns.virtual_handwriting.test(input)) {
    return maybeAddFollowUp(getRandomItem(projectResponses["Virtual Handwriting"]))
  }

  if (patterns.ai_data_assistant.test(input)) {
    return maybeAddFollowUp(getRandomItem(projectResponses["AI Data Assistant"]))
  }

  if (patterns.credit_card_fraud.test(input)) {
    return maybeAddFollowUp(getRandomItem(projectResponses["Credit Card Fraud"]))
  }

  // Check for GitHub
  if (patterns.github.test(input)) {
    return "Sai's GitHub profile can be found at: github.com/Jsairupa. You can check out her code repositories and projects there!"
  }

  // Check for availability
  if (patterns.availability.test(input)) {
    return "Sai is currently open to new opportunities and collaborations in data science and machine learning. She's particularly interested in roles that involve machine learning, NLP, or data analytics. Feel free to reach out to her at sj7740@rit.edu to discuss potential roles or projects."
  }

  // Check for strengths
  if (patterns.strengths.test(input)) {
    return maybeAddFollowUp(
      "Sai's greatest strengths are in machine learning, particularly in applying deep learning to real-world problems. She excels at extracting insights from complex datasets and building models that deliver tangible results. Her combination of technical skills and business understanding allows her to bridge the gap between data science and practical applications.",
    )
  }

  // Check for interests
  if (patterns.interests.test(input)) {
    return maybeAddFollowUp(
      "Professionally, Sai is particularly interested in the intersection of machine learning and natural language processing. She enjoys working on projects that have real-world impact and solving complex problems with data. She's passionate about using AI to derive meaningful insights that drive decision-making.",
    )
  }

  // Check for questions about the chatbot
  if (patterns.about_chatbot.test(input)) {
    return "I'm Sai's virtual assistant, designed to help share information about her skills, experience, and projects. While I'm not Sai herself, I can tell you all about her professional background and qualifications. What would you like to know about her?"
  }

  // If no specific pattern matches, try to determine the most likely topic
  // This is a fallback mechanism for when the specific patterns don't catch the intent

  // Count keyword occurrences to determine the most likely topic
  const topicScores = {
    experience: 0,
    education: 0,
    skills: 0,
    projects: 0,
    certifications: 0,
    contact: 0,
  }

  // Experience keywords
  const experienceKeywords = ["work", "job", "career", "professional", "company", "role", "position"]
  experienceKeywords.forEach((keyword) => {
    if (input.includes(keyword)) topicScores.experience += 1
  })

  // Education keywords
  const educationKeywords = ["study", "degree", "university", "college", "school", "course"]
  educationKeywords.forEach((keyword) => {
    if (input.includes(keyword)) topicScores.education += 1
  })

  // Skills keywords
  const skillsKeywords = ["skill", "know", "able", "can", "proficient", "expert", "knowledge"]
  skillsKeywords.forEach((keyword) => {
    if (input.includes(keyword)) topicScores.skills += 1
  })

  // Projects keywords
  const projectsKeywords = ["project", "build", "create", "develop", "implement", "design"]
  projectsKeywords.forEach((keyword) => {
    if (input.includes(keyword)) topicScores.projects += 1
  })

  // Certifications keywords
  const certificationsKeywords = ["certificate", "certification", "credential", "qualified"]
  certificationsKeywords.forEach((keyword) => {
    if (input.includes(keyword)) topicScores.certifications += 1
  })

  // Contact keywords
  const contactKeywords = ["contact", "email", "phone", "reach", "connect", "touch"]
  contactKeywords.forEach((keyword) => {
    if (input.includes(keyword)) topicScores.contact += 1
  })

  // Find the topic with the highest score
  const topTopic = Object.entries(topicScores).reduce(
    (max, [topic, score]) => (score > max[1] ? [topic, score] : max),
    ["", 0],
  )[0]

  // If we have a clear winner with a score > 0, use that topic
  if (topTopic && topicScores[topTopic as keyof typeof topicScores] > 0) {
    switch (topTopic) {
      case "experience":
        return maybeAddFollowUp(getExperienceResponse())
      case "education":
        return maybeAddFollowUp(getEducationResponse())
      case "skills":
        return maybeAddFollowUp(getSkillsResponse())
      case "projects":
        return maybeAddFollowUp(getProjectsResponse())
      case "certifications":
        return maybeAddFollowUp(getCertificationsResponse())
      case "contact":
        return maybeAddFollowUp(getContactResponse())
    }
  }

  // Default response for unrecognized questions - more conversational
  return getRandomItem([
    "I'd be happy to tell you about Sai's background. You can ask about her experience, education, skills, projects, or contact information. What would you like to know?",
    "I can provide information about various aspects of Sai's professional profile. Feel free to ask about her work experience, education, technical skills, or projects she's worked on.",
    "I'm here to share details about Sai's qualifications. You can ask specific questions about her data science skills, work history, or educational background. What are you interested in learning?",
    "I can tell you about Sai's professional journey, including her internship experience, academic background, technical expertise, and project portfolio. What would you like to know more about?",
  ])
}
