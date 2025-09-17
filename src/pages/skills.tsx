import Layout from '../components/Layout';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Skills() {
  const { ref: skillsRef, isVisible: skillsVisible } = useScrollAnimation(0.1);
  const { ref: certsRef, isVisible: certsVisible } = useScrollAnimation(0.1);
  
  return (
    <Layout>
      {/* Skills Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Skills</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-pink-400 mx-auto"></div>
          </div>
          
          <div ref={skillsRef} className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 ${skillsVisible ? 'opacity-100' : 'opacity-0'}`}>
            {/* Programming Languages */}
            <div className={`bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 card-hover touch-ripple ${skillsVisible ? 'card-entrance' : ''}`}>
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <svg className="w-6 h-6 text-teal-400 icon-bounce" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                </svg>
                Programming
              </h2>
              <div className="flex flex-wrap gap-3">
                <span className="bg-cyan-600/30 text-cyan-300 px-4 py-2 rounded-full text-sm font-semibold skill-badge-hover cursor-pointer">Python</span>
                <span className="bg-emerald-600/30 text-emerald-300 px-4 py-2 rounded-full text-sm font-semibold skill-badge-hover cursor-pointer">C</span>
                <span className="bg-teal-600/30 text-teal-300 px-4 py-2 rounded-full text-sm font-semibold skill-badge-hover cursor-pointer">Java</span>
                <span className="bg-slate-600/30 text-slate-300 px-4 py-2 rounded-full text-sm font-semibold skill-badge-hover cursor-pointer">SQL</span>
              </div>
            </div>

            {/* Data Science Tools */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 card-hover">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <svg className="w-6 h-6 text-teal-400 icon-bounce" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"/>
                </svg>
                Data Science
              </h2>
              <div className="flex flex-wrap gap-3">
                <span className="bg-teal-600/30 text-teal-300 px-4 py-2 rounded-full text-sm font-semibold skill-badge-hover cursor-pointer">Pandas</span>
                <span className="bg-emerald-600/30 text-emerald-300 px-4 py-2 rounded-full text-sm font-semibold skill-badge-hover cursor-pointer">NumPy</span>
                <span className="bg-cyan-600/30 text-cyan-300 px-4 py-2 rounded-full text-sm font-semibold skill-badge-hover cursor-pointer">Matplotlib</span>
                <span className="bg-slate-600/30 text-slate-300 px-4 py-2 rounded-full text-sm font-semibold skill-badge-hover cursor-pointer">Scikit-learn</span>
              </div>
            </div>

            {/* Frameworks & Technologies */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 card-hover">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <svg className="w-6 h-6 text-teal-400 icon-bounce" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"/>
                </svg>
                Frameworks
              </h2>
              <div className="flex flex-wrap gap-3">
                <span className="bg-slate-600/30 text-slate-300 px-4 py-2 rounded-full text-sm font-semibold skill-badge-hover cursor-pointer">Flask</span>
                <span className="bg-cyan-600/30 text-cyan-300 px-4 py-2 rounded-full text-sm font-semibold skill-badge-hover cursor-pointer">React.js</span>
                <span className="bg-emerald-600/30 text-emerald-300 px-4 py-2 rounded-full text-sm font-semibold skill-badge-hover cursor-pointer">Next.js</span>
                <span className="bg-teal-600/30 text-teal-300 px-4 py-2 rounded-full text-sm font-semibold skill-badge-hover cursor-pointer">HTML/CSS</span>
              </div>
            </div>

            {/* Databases */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 card-hover">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <svg className="w-6 h-6 text-teal-400 icon-bounce" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm3 1h2v4H7V5zm8 8v2h1v-2h-1zm-2-2H7v2h6v-2z" clipRule="evenodd"/>
                </svg>
                Databases
              </h2>
              <div className="flex flex-wrap gap-3">
                <span className="bg-cyan-600/30 text-cyan-300 px-4 py-2 rounded-full text-sm font-semibold skill-badge-hover cursor-pointer">MySQL</span>
                <span className="bg-emerald-600/30 text-emerald-300 px-4 py-2 rounded-full text-sm font-semibold skill-badge-hover cursor-pointer">MongoDB</span>
                <span className="bg-teal-600/30 text-teal-300 px-4 py-2 rounded-full text-sm font-semibold skill-badge-hover cursor-pointer">Supabase</span>
              </div>
            </div>

            {/* Tools */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 card-hover">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <svg className="w-6 h-6 text-teal-400 icon-bounce" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"/>
                </svg>
                Tools
              </h2>
              <div className="flex flex-wrap gap-3">
                <span className="bg-cyan-600/30 text-cyan-300 px-4 py-2 rounded-full text-sm font-semibold skill-badge-hover cursor-pointer">Google Colab</span>
                <span className="bg-teal-600/30 text-teal-300 px-4 py-2 rounded-full text-sm font-semibold skill-badge-hover cursor-pointer">PyCharm</span>
                <span className="bg-emerald-600/30 text-emerald-300 px-4 py-2 rounded-full text-sm font-semibold skill-badge-hover cursor-pointer">VS Code</span>
                <span className="bg-slate-600/30 text-slate-300 px-4 py-2 rounded-full text-sm font-semibold skill-badge-hover cursor-pointer">Jupyter</span>
                <span className="bg-cyan-700/30 text-cyan-300 px-4 py-2 rounded-full text-sm font-semibold skill-badge-hover cursor-pointer">IntelliJ IDEA</span>
                <span className="bg-teal-700/30 text-teal-300 px-4 py-2 rounded-full text-sm font-semibold skill-badge-hover cursor-pointer">Eclipse</span>
                <span className="bg-emerald-700/30 text-emerald-300 px-4 py-2 rounded-full text-sm font-semibold skill-badge-hover cursor-pointer">Android Studio</span>
              </div>
            </div>

            {/* Version Control & Database Tools */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 card-hover">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <svg className="w-6 h-6 text-teal-400 icon-bounce" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"/>
                </svg>
                Version Control & Database Tools
              </h3>
              <div className="flex flex-wrap gap-3">
                <span className="bg-teal-600/30 text-teal-300 px-4 py-2 rounded-full text-sm font-semibold skill-badge-hover cursor-pointer">Git</span>
                <span className="bg-slate-600/30 text-slate-300 px-4 py-2 rounded-full text-sm font-semibold skill-badge-hover cursor-pointer">GitHub</span>
                <span className="bg-emerald-600/30 text-emerald-300 px-4 py-2 rounded-full text-sm font-semibold skill-badge-hover cursor-pointer">MongoDB Compass</span>
              </div>
            </div>

            {/* Other Skills */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 card-hover">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <svg className="w-6 h-6 text-teal-400 icon-bounce" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h2zm3-4a1 1 0 011 1v1H8V3a1 1 0 011-1zm2 2H9V3a1 1 0 112 0v1z" clipRule="evenodd"/>
                </svg>
                Other Skills
              </h2>
              <div className="flex flex-wrap gap-3">
                <span className="bg-emerald-600/30 text-emerald-300 px-4 py-2 rounded-full text-sm font-semibold skill-badge-hover cursor-pointer">Git/GitHub</span>
                <span className="bg-cyan-600/30 text-cyan-300 px-4 py-2 rounded-full text-sm font-semibold skill-badge-hover cursor-pointer">Data Analysis</span>
                <span className="bg-teal-600/30 text-teal-300 px-4 py-2 rounded-full text-sm font-semibold skill-badge-hover cursor-pointer">Linear Regression</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Certifications</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-pink-400 mx-auto"></div>
          </div>
          
          <div ref={certsRef} className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 ${certsVisible ? 'opacity-100' : 'opacity-0'}`}>
            {/* Research Park Internship */}
            <a href="https://www.linkedin.com/posts/thiravidan_automation-innovation-klnirp-activity-7289446108425043968-qHnQ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEQIc3IBZhgPNoWZRwt3Y5uZWUJqzvH9cBY" target="_blank" rel="noopener noreferrer" className={`bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 certification-card touch-ripple block ${certsVisible ? 'card-entrance' : ''}`}>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-teal-600/30 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-emerald-300 icon-bounce" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Research Park Internship</h3>
                  <p className="text-emerald-300 text-sm">KLN Research Park</p>
                </div>
              </div>
            </a>

            {/* Java Full Stack UpGrad */}
            <a href="https://upgradcampus.certificate.givemycertificate.com/c/2fa15406-dcd3-4da0-a71b-1b5a2ab988fb" target="_blank" rel="noopener noreferrer" className={`bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 certification-card touch-ripple block ${certsVisible ? 'card-entrance' : ''}`}>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-600/30 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-300 icon-bounce" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Java Full Stack Development</h3>
                  <p className="text-blue-300 text-sm">UpGrad Bootcamp</p>
                </div>
              </div>
            </a>

            {/* Data Science Internshala */}
            <a href="https://www.linkedin.com/posts/thiravidan_datascience-certification-nsdc-activity-7282985897061466112-a_7c/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEQIc3IBZhgPNoWZRwt3Y5uZWUJqzvH9cBY" target="_blank" rel="noopener noreferrer" className={`bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 certification-card touch-ripple block ${certsVisible ? 'card-entrance' : ''}`}>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-green-600/30 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-300 icon-bounce" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Data Science Course</h3>
                  <p className="text-green-300 text-sm">Internshala</p>
                </div>
              </div>
            </a>

            {/* ChatGPT GUVI Course */}
            <a href="https://www.linkedin.com/posts/thiravidan_chatgpt-ai-nlp-activity-7221758750376837120-3nEf?utm_source=share&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className={`bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 certification-card touch-ripple block ${certsVisible ? 'card-entrance' : ''}`}>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-red-600/30 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-red-300 icon-bounce" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">ChatGPT for Everyone</h3>
                  <p className="text-red-300 text-sm">GUVI Course</p>
                </div>
              </div>
            </a>

            {/* ChatGPT Udemy Course */}
            <a href="https://www.linkedin.com/posts/thiravidan_excited-to-share-my-latest-achievement-activity-7278606312358256640-vCAp?utm_source=share&utm_medium=member_desktop" target="_blank" rel="noopener noreferrer" className={`bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 certification-card touch-ripple block ${certsVisible ? 'card-entrance' : ''}`}>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-orange-600/30 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-orange-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">ChatGPT Course</h3>
                  <p className="text-orange-300 text-sm">Udemy</p>
                </div>
              </div>
            </a>

            {/* Technical Quiz Google Developers */}
            <a href="https://www.linkedin.com/posts/thiravidan_technicalquiz-googledeveloperstudentsclub-activity-7223145144802324480-uJpA?utm_source=share&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className={`bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 certification-card touch-ripple block ${certsVisible ? 'card-entrance' : ''}`}>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-yellow-600/30 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Technical Quiz</h3>
                  <p className="text-yellow-300 text-sm">Google Developers</p>
                </div>
              </div>
            </a>

            {/* SIH Participation */}
            <a href="https://www.linkedin.com/posts/thiravidan_smartindiahackathon2023-pythondevelopment-activity-7225146699705393152-TB9g?utm_source=share&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className={`bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 certification-card touch-ripple block ${certsVisible ? 'card-entrance' : ''}`}>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-indigo-600/30 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-indigo-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Smart India Hackathon</h3>
                  <p className="text-indigo-300 text-sm">Participation Certificate</p>
                </div>
              </div>
            </a>

            {/* Data Science Codsoft */}
            <a href="https://www.linkedin.com/posts/thiravidan_datascience-internship-codsoft-activity-7236165325862354944-0eSK?utm_source=share&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className={`bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 certification-card touch-ripple block ${certsVisible ? 'card-entrance' : ''}`}>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-cyan-600/30 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-cyan-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Data Science Tasks</h3>
                  <p className="text-cyan-300 text-sm">Codsoft</p>
                </div>
              </div>
            </a>

            {/* Data Science Prodigy */}
            <a href="https://www.linkedin.com/posts/thiravidan_datascience-internship-prodigyhrtechnology-activity-7236908342349029376-GJ2g?utm_source=share&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className={`bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 certification-card touch-ripple block ${certsVisible ? 'card-entrance' : ''}`}>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-teal-600/30 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-teal-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Data Science Tasks</h3>
                  <p className="text-teal-300 text-sm">Prodigy</p>
                </div>
              </div>
            </a>

            {/* Data Science Cognifyz */}
            <a href="https://www.linkedin.com/posts/thiravidan_datascience-internship-cognifyztechnologies-activity-7237633107028254720-5Xii?utm_source=share&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className={`bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 certification-card touch-ripple block ${certsVisible ? 'card-entrance' : ''}`}>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-pink-600/30 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-pink-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Data Science Tasks</h3>
                  <p className="text-pink-300 text-sm">Cognifyz Technologies</p>
                </div>
              </div>
            </a>

            {/* Python GUVI Course */}
            <a href="https://www.linkedin.com/posts/thiravidan_python-codingjourney-activity-7278358497417699329-FXve?utm_source=share&utm_medium=member_desktop" target="_blank" rel="noopener noreferrer" className={`bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 certification-card touch-ripple block ${certsVisible ? 'card-entrance' : ''}`}>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-600/30 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-300 icon-bounce" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Python Course</h3>
                  <p className="text-blue-300 text-sm">GUVI</p>
                </div>
              </div>
            </a>

            {/* Data Science Roadmap */}
            <a href="https://www.linkedin.com/posts/thiravidan_thrilled-to-complete-the-best-roadmap-for-activity-7278637998273974272-uc6g?utm_source=share&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className={`bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 certification-card touch-ripple block ${certsVisible ? 'card-entrance' : ''}`}>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-emerald-600/30 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-emerald-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Data Science Roadmap</h3>
                  <p className="text-emerald-300 text-sm">Professional Development</p>
                </div>
              </div>
            </a>

            {/* Data Analysis Project */}
            <a href="https://www.linkedin.com/posts/thiravidan_excited-to-share-my-accomplishment-of-completing-activity-7278638339925139456-bQx5?utm_source=share&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className={`bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 certification-card touch-ripple block ${certsVisible ? 'card-entrance' : ''}`}>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-violet-600/30 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-violet-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Data Analysis Project</h3>
                  <p className="text-violet-300 text-sm">Python Analytics</p>
                </div>
              </div>
            </a>

            {/* Java OOP and DSA */}
            <a href="https://www.linkedin.com/posts/thiravidan_successfully-completed-a-java-course-on-activity-7278638738681839616-T2gN?utm_source=share&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className={`bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 certification-card touch-ripple block ${certsVisible ? 'card-entrance' : ''}`}>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-red-600/30 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-red-300 icon-bounce" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Java OOP & DSA</h3>
                  <p className="text-red-300 text-sm">Programming Course</p>
                </div>
              </div>
            </a>

            {/* Internship and Job Preparation */}
            <a href="https://www.linkedin.com/posts/thiravidan_internship-jobpreparation-careergrowth-activity-7298943736753836032-FWvg/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEQIc3IBZhgPNoWZRwt3Y5uZWUJqzvH9cBY" target="_blank" rel="noopener noreferrer" className={`bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 certification-card touch-ripple block ${certsVisible ? 'card-entrance' : ''}`}>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-slate-600/30 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-slate-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Internship & Job Preparation</h3>
                  <p className="text-slate-300 text-sm">Career Development</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
