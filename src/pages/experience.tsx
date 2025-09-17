import Layout from '../components/Layout';

export default function Experience() {
  return (
    <Layout>
      {/* Experience Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Experience</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-pink-400 mx-auto"></div>
          </div>
          
          <div className="space-y-12">
            {/* Adishtu Tec Lab Internship */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 card-hover">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">Intern – Software Product Development</h2>
                  <p className="text-emerald-300 font-semibold text-lg">Adishtu Tec Lab · Part-time</p>
                  <p className="text-gray-400">Sep 2025 – Dec 2025</p>
                </div>
                <div className="mt-4 md:mt-0">
                  <span className="bg-teal-600/30 text-emerald-300 px-4 py-2 rounded-full text-sm font-semibold">
                    Software Development
                  </span>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-teal-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">Contributing to the development of salestracklive.com</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-teal-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">Working with React, React Native, Supabase, and Canva to design and implement user-friendly solutions</p>
                </div>
              </div>
              
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-white mb-3">Skills</h3>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-blue-600/30 text-blue-300 px-3 py-1 rounded-full text-sm font-semibold skill-badge-hover cursor-pointer">Next.js</span>
                  <span className="bg-green-600/30 text-green-300 px-3 py-1 rounded-full text-sm font-semibold skill-badge-hover cursor-pointer">Supabase</span>
                  <span className="bg-cyan-600/30 text-cyan-300 px-3 py-1 rounded-full text-sm font-semibold skill-badge-hover cursor-pointer">React Native</span>
                  <span className="bg-blue-600/30 text-blue-300 px-3 py-1 rounded-full text-sm font-semibold skill-badge-hover cursor-pointer">React.js</span>
                </div>
              </div>
            </div>

            {/* Free Will Technologies Internship */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 card-hover">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">Web Development Intern</h2>
                  <p className="text-emerald-300 font-semibold text-lg">Free Will Technologies</p>
                  <p className="text-gray-400">August 2025 - Ongoing</p>
                </div>
                <div className="mt-4 md:mt-0">
                  <span className="bg-teal-600/30 text-emerald-300 px-4 py-2 rounded-full text-sm font-semibold">
                    Web Development
                  </span>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-teal-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">Developing web applications using modern technologies and frameworks</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-teal-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">Collaborating on UI/UX design and implementation projects</p>
                </div>
              </div>
              
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-white mb-3">Skills</h3>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-pink-600/30 text-pink-300 px-3 py-1 rounded-full text-sm font-semibold skill-badge-hover cursor-pointer">Figma</span>
                  <span className="bg-blue-600/30 text-blue-300 px-3 py-1 rounded-full text-sm font-semibold skill-badge-hover cursor-pointer">React</span>
                  <span className="bg-green-600/30 text-green-300 px-3 py-1 rounded-full text-sm font-semibold skill-badge-hover cursor-pointer">ML</span>
                  <span className="bg-yellow-600/30 text-yellow-300 px-3 py-1 rounded-full text-sm font-semibold skill-badge-hover cursor-pointer">Python</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
