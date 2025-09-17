import Layout from '../components/Layout';

export default function Projects() {
  return (
    <Layout>
      {/* Projects Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Projects</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-pink-400 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Movie Rating Prediction */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 card-hover group">
              <div className="mb-4">
                <h2 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                  Movie Rating Prediction
                </h2>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-cyan-600/30 text-cyan-300 px-3 py-1 rounded-full text-xs font-semibold skill-badge-hover cursor-pointer">Python</span>
                  <span className="bg-emerald-600/30 text-emerald-300 px-3 py-1 rounded-full text-xs font-semibold skill-badge-hover cursor-pointer">Scikit-learn</span>
                  <span className="bg-teal-600/30 text-teal-300 px-3 py-1 rounded-full text-xs font-semibold skill-badge-hover cursor-pointer">Machine Learning</span>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Built a predictive model using linear regression for movie ratings. Applied data preprocessing, 
                feature selection, and supervised learning techniques.
              </p>
              
              <div className="flex gap-4">
                <a 
                  href="https://github.com/Thiravidan/Codsoft/blob/main/Task_2.ipynb" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-teal-600/20 text-emerald-300 px-4 py-2 rounded-lg hover:bg-teal-600/40 hover:scale-105 transition-all duration-300 hover:shadow-lg"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.30 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub
                </a>
              </div>
            </div>

            {/* ELISA Assistant */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 card-hover group">
              <div className="mb-4">
                <h2 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                  ELISA Assistant
                </h2>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-cyan-600/30 text-cyan-300 px-3 py-1 rounded-full text-xs font-semibold skill-badge-hover cursor-pointer">Python</span>
                  <span className="bg-teal-600/30 text-teal-300 px-3 py-1 rounded-full text-xs font-semibold skill-badge-hover cursor-pointer">Gemini API</span>
                  <span className="bg-emerald-600/30 text-emerald-300 px-3 py-1 rounded-full text-xs font-semibold skill-badge-hover cursor-pointer">AI Assistant</span>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Created AI-powered personal assistant for desktop automation tasks. Integrated generative AI 
                and voice command features.
              </p>
              
              <div className="flex gap-4">
                <a 
                  href="https://github.com/Thiravidan/ELISA" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-teal-600/20 text-emerald-300 px-4 py-2 rounded-lg hover:bg-teal-600/40 hover:scale-105 transition-all duration-300 hover:shadow-lg"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.30 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/posts/thiravidan_ai-machinelearning-python-activity-7225413098826842112-e58h?utm_source=share&utm_medium=member_android" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-cyan-600/20 text-cyan-300 px-4 py-2 rounded-lg hover:bg-cyan-600/40 hover:scale-105 transition-all duration-300 hover:shadow-lg"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </a>
              </div>
            </div>

            {/* Doctor Listing Web App */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 card-hover group">
              <div className="mb-4">
                <h2 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                  Doctor Listing Web App
                </h2>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-black/30 text-white px-3 py-1 rounded-full text-xs font-semibold skill-badge-hover cursor-pointer">Next.js</span>
                  <span className="bg-emerald-600/30 text-emerald-300 px-3 py-1 rounded-full text-xs font-semibold skill-badge-hover cursor-pointer">MongoDB</span>
                  <span className="bg-cyan-600/30 text-cyan-300 px-3 py-1 rounded-full text-xs font-semibold skill-badge-hover cursor-pointer">Postman</span>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Developed a full-stack doctor listing platform with SSR for performance. Integrated backend APIs 
                and database using MongoDB.
              </p>
              
              <div className="flex gap-4">
                <a 
                  href="https://github.com/Thiravidan/doctor-listing" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-teal-600/20 text-emerald-300 px-4 py-2 rounded-lg hover:bg-teal-600/40 hover:scale-105 transition-all duration-300 hover:shadow-lg"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.30 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub
                </a>
              </div>
            </div>

            {/* Titanic Dataset Analysis */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 card-hover group">
              <div className="mb-4">
                <h2 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                  Titanic Dataset Analysis
                </h2>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-cyan-600/30 text-cyan-300 px-3 py-1 rounded-full text-xs font-semibold skill-badge-hover cursor-pointer">Python</span>
                  <span className="bg-emerald-600/30 text-emerald-300 px-3 py-1 rounded-full text-xs font-semibold skill-badge-hover cursor-pointer">Data Analysis</span>
                  <span className="bg-teal-600/30 text-teal-300 px-3 py-1 rounded-full text-xs font-semibold skill-badge-hover cursor-pointer">Machine Learning</span>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Performed data analysis and visualization to predict survival outcomes on the Titanic dataset using Python.
                Applied statistical techniques and machine learning models to derive insights.
              </p>
              
              <div className="flex gap-4">
                <a 
                  href="https://github.com/Thiravidan/Codsoft/blob/main/Task_1.ipynb" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-teal-600/20 text-emerald-300 px-4 py-2 rounded-lg hover:bg-teal-600/40 hover:scale-105 transition-all duration-300 hover:shadow-lg"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.30 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub
                </a>
              </div>
            </div>

            {/* Iris Flower Classification */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 card-hover group">
              <div className="mb-4">
                <h2 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                  Iris Flower Classification
                </h2>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-cyan-600/30 text-cyan-300 px-3 py-1 rounded-full text-xs font-semibold skill-badge-hover cursor-pointer">Python</span>
                  <span className="bg-emerald-600/30 text-emerald-300 px-3 py-1 rounded-full text-xs font-semibold skill-badge-hover cursor-pointer">Classification</span>
                  <span className="bg-teal-600/30 text-emerald-300 px-3 py-1 rounded-full text-xs font-semibold skill-badge-hover cursor-pointer">Supervised Learning</span>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Built a classification model to identify iris flower species using supervised learning techniques.
                Applied machine learning algorithms to classify flower species based on features.
              </p>
              
              <div className="flex gap-4">
                <a 
                  href="https://github.com/Thiravidan/Codsoft/blob/main/Task_3.ipynb" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-teal-600/20 text-emerald-300 px-4 py-2 rounded-lg hover:bg-teal-600/40 hover:scale-105 transition-all duration-300 hover:shadow-lg"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.30 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub
                </a>
              </div>
            </div>

            {/* Gender Classification */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 card-hover group">
              <div className="mb-4">
                <h2 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                  Gender Classification
                </h2>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-cyan-600/30 text-cyan-300 px-3 py-1 rounded-full text-xs font-semibold skill-badge-hover cursor-pointer">Python</span>
                  <span className="bg-red-600/30 text-red-300 px-3 py-1 rounded-full text-xs font-semibold skill-badge-hover cursor-pointer">Classification</span>
                  <span className="bg-emerald-600/30 text-emerald-300 px-3 py-1 rounded-full text-xs font-semibold skill-badge-hover cursor-pointer">Feature Extraction</span>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Implemented a model to classify gender using extracted features and supervised learning techniques.
                Demonstrated practical application of machine learning algorithms for classification tasks.
              </p>
              
              <div className="flex gap-4">
                <a 
                  href="https://github.com/Thiravidan/PRODIGY_Trackcode_1" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-teal-600/20 text-emerald-300 px-4 py-2 rounded-lg hover:bg-teal-600/40 hover:scale-105 transition-all duration-300 hover:shadow-lg"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.30 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}