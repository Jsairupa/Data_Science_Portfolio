"use client"

import Link from "next/link"
import { ArrowLeft } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto py-8 px-4 max-w-4xl">
        <div className="mb-6">
          <Button variant="outline" size="sm" asChild>
            <Link href="/" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" /> Back to Portfolio
            </Link>
          </Button>
        </div>

        <div className="print:shadow-none shadow-lg border rounded-lg p-8 bg-white">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold">Sai Rupa Jhade</h1>
            <div className="flex flex-wrap justify-center gap-3 mt-2 text-sm text-gray-600">
              <span>585-557-9083</span>
              <span>•</span>
              <a href="mailto:sj7740@rit.edu" className="text-blue-600 hover:underline">
                sj7740@rit.edu
              </a>
              <span>•</span>
              <a
                href="https://linkedin.com/in/sairupajhade"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                linkedin.com/in/sairupajhade
              </a>
              <span>•</span>
              <a
                href="https://github.com/Jsairupa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                github.com/Jsairupa
              </a>
            </div>
          </div>

          <section className="mb-6">
            <h2 className="text-xl font-bold border-b-2 border-gray-300 pb-1 mb-3">EDUCATION</h2>
            <div className="mb-4">
              <div className="flex justify-between">
                <h3 className="font-bold">Rochester Institute of Technology</h3>
                <span>Rochester, NY</span>
              </div>
              <div className="flex justify-between">
                <p className="italic">Master of Science in Data Science, GPA: 3.49/4.0</p>
                <span>Aug 2023 – Dec 2025</span>
              </div>
              <p className="text-sm mt-1">
                Courses: Applied Statistics, Foundation of Data Science, Database Design Implementation, Data
                Warehousing, Applied Data Science, Advanced Political Data Science, Cloud Computing, Big Data Analytics
              </p>
            </div>
            <div>
              <div className="flex justify-between">
                <h3 className="font-bold">Amrita Vishwa Vidyapeetham</h3>
                <span>Coimbatore, India</span>
              </div>
              <div className="flex justify-between">
                <p className="italic">Bachelor of Engineering, Computer Science and Engineering, GPA: 8.23/10.0</p>
                <span>Aug 2019 – May 2023</span>
              </div>
              <p className="text-sm mt-1">
                Courses: Computer Science Fundamentals, Data Structures & Algorithms, Machine Learning
              </p>
            </div>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-bold border-b-2 border-gray-300 pb-1 mb-3">SKILLS</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
              <div className="font-bold">Languages</div>
              <div className="md:col-span-3">Python, PySpark, SQL, R, SAS</div>

              <div className="font-bold">Technologies & Tools</div>
              <div className="md:col-span-3">PyTorch, scikit-learn, Linux, Tableau, Excel, Git, Docker, JIRA</div>

              <div className="font-bold">Cloud & Databases</div>
              <div className="md:col-span-3">
                SQL Server Management Studio, MySQL, NoSQL (MongoDB), AWS Fundamentals, Microsoft Azure (Databricks,
                Data Factory, Data Lake Storage), Kafka, Kinesis, OpenSearch
              </div>

              <div className="font-bold">Core Competencies</div>
              <div className="md:col-span-3">
                Statistical Data Analysis, Data Visualization, Machine Learning, Natural Language Processing, Deep
                Learning, Conversational AI
              </div>
            </div>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-bold border-b-2 border-gray-300 pb-1 mb-3">RELEVANT EXPERIENCE</h2>
            <div>
              <div className="flex justify-between">
                <h3 className="font-bold">Rochester Institute of Technology - GCCIS</h3>
                <span>Rochester, NY</span>
              </div>
              <div className="flex justify-between">
                <p className="italic">Technical Operations Assistant</p>
                <span>July 2023 – Present</span>
              </div>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>
                  Resolved 100+ technical support tickets related to data science tools and environments (JupyterHub, Python, SQL,
                  AWS, Azure), enhancing system uptime and tool accessibility for students and faculty.
                </li>
                <li>
                  Automated diagnostic workflows using Python, reducing response time for common support requests by 40% and
                  minimizing manual intervention.
                </li>
                <li>
                  Analyzed support ticket metadata using SQL and Python to identify recurring issues, leading to a 25% drop in repeat
                  incidents through targeted optimizations.
                </li>
                <li>
                  Created internal dashboards to track system usage and recurring issues, enabling faster ticket resolution and better
                  capacity planning.
                </li>
                <li>
                  Collaborated with faculty and IT staff to test and troubleshoot new tool integrations, ensuring compatibility with
                  course delivery and lab environments.
                </li>
                <li>
                  Documented standard operating procedures (SOPs) for tool setup, user onboarding, and issue resolution, improving
                  team efficiency and knowledge transfer.
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-bold border-b-2 border-gray-300 pb-1 mb-3">PROJECTS</h2>

            <div className="mb-4">
              <h3 className="font-bold">Political Polarization Analysis Using Machine Learning</h3>
              <p className="italic">
                Tools: Python, Scikit-learn, NLP (spaCy, NLTK), VADER, RoBERTa, YouTube API, Tableau
              </p>
              <ul className="list-disc pl-5 mt-1 space-y-1">
                <li>
                  Applied advanced NLP techniques and Large Language Models (GPT-4o, Llama 3.2, Mistral AI) to analyze
                  political polarization in YouTube news comments
                </li>
                <li>
                  Conducted AI-driven sentiment and stance analysis to classify user political affiliations and study
                  engagement trends during electoral periods.
                </li>
                <li>
                  Performed comparative evaluation of multiple AI models to assess their effectiveness in detecting
                  political bias, echo chambers, and media influence on public opinion.
                </li>
              </ul>
            </div>

            <div className="mb-4">
              <h3 className="font-bold">Virtual Handwriting Based Smart Board using Deep Learning</h3>
              <p className="italic">Tools: Python, TensorFlow, OpenCV, CNNs</p>
              <ul className="list-disc pl-5 mt-1 space-y-1">
                <li>
                  Formulated a CNN-based virtual handwriting recognition system using TensorFlow and OpenCV, achieving
                  98% accuracy and reducing latency by 30% for real-time performance.
                </li>
                <li>
                  Created a Python-based user interface with Tkinter and OpenCV, enhancing accessibility and improving
                  user satisfaction by 25% across diverse user groups.
                </li>
                <li>
                  Enhanced virtual handwriting productivity and accessibility for users with disabilities by 40%,
                  ensuring a user-friendly experience.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold">AI-Powered Data Assistant using LangChain & LLMs</h3>
              <p className="italic">Tools: Streamlit, OpenAI, LangChain, Ollama, Pandas</p>
              <ul className="list-disc pl-5 mt-1 space-y-1">
                <li>
                  Built a Streamlit app that analyzes user-uploaded CSVs and uses LLMs to auto-generate Python code for
                  data cleaning, EDA, and model building with clear, step-by-step explanations.
                </li>
                <li>
                  Integrated OpenAI and Ollama (Mistral, Gemma) via LangChain to support both cloud-based and local
                  inference pipelines.
                </li>
                <li>
                  Engineered dynamic prompts and retrieval-aware chaining logic to transform tabular data and user goals
                  into actionable ML workflows.
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold border-b-2 border-gray-300 pb-1 mb-3">CERTIFICATIONS & PUBLICATIONS</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>IBM Data Science Professional Certificate</li>
              <li>Generative AI Course with Langchain and Huggingface - Udemy</li>
              <li>
                Jhade, S.R., et al. (2023). "Virtual Handwriting Based Smart Board Using Deep Learning," 2023 i-PACT.
                IEEE.
              </li>
            </ul>
          </section>

          <div className="mt-8 text-center print:hidden">
            <Button onClick={() => window.print()}>Print Resume</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
