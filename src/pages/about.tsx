import Layout from '../components/Layout';

export default function About() {
  return (
    <Layout>
      {/* About Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About Me</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-pink-400 mx-auto"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Summary</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Aspiring Data Analyst and Web Developer passionate about building impactful digital solutions. 
                Strong interest in IT, development, and data-driven problem solving with hands-on experience 
                in software development, data science, and full-stack projects.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                I&apos;m currently pursuing my Bachelor&apos;s degree in Computer Science and Engineering with a GPA of 8.72/10, 
                while actively working on innovative projects that combine my passion for technology and problem-solving.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 card-hover">
              <h2 className="text-2xl font-bold text-white mb-6">Education</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Bachelor of Engineering in Computer Science</h3>
                  <p className="text-emerald-300 font-semibold mb-1">KLN College of Engineering, Madurai</p>
                  <p className="text-gray-300 mb-2">2022 – 2026</p>
                  <p className="text-gray-300">GPA: 8.72/10</p>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-white mb-4">Extra-Curricular Activities</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-teal-400 pl-4">
                    <h4 className="text-white font-semibold">President – GDSC State-Level Project Expo (GDG 2025)</h4>
                    <p className="text-gray-300 text-sm">Managed 100+ participants, event logistics and showcased student innovations</p>
                  </div>
                  <div className="border-l-4 border-teal-400 pl-4">
                    <h4 className="text-white font-semibold">President – National-level Symposium</h4>
                    <p className="text-gray-300 text-sm">Led a team of 100+ members for event management</p>
                  </div>
                  <div className="border-l-4 border-teal-400 pl-4">
                    <h4 className="text-white font-semibold">Research Intern – KLN Research Park</h4>
                    <p className="text-gray-300 text-sm">Built Flutter app for industry weighing scale automation using Raspberry Pi, developed offline voice-controlled home automation system</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
