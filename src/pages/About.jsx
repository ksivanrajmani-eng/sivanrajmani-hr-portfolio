import React from 'react';
import WhatsappNotification from './WhatsappNotification';

const AboutPage = () => {
  return (
    <div className="bg-gray-800 min-h-screen text-gray-800 flex flex-col items-center py-10 overflow-x-hidden">

      {/* Page Title */}
      <h1 className="text-4xl text-white font-extrabold text-center mb-8 animate__animated animate__fadeIn">
        About Me
      </h1>

      {/* Main Content Container */}
      <div className="w-full max-w-screen-md mx-auto px-4 sm:px-6">

        {/* Who I Am */}
        <div
          className="bg-gray-900 p-4 sm:p-6 rounded-lg shadow-lg mb-8
          transition-all duration-300 ease-in-out
          hover:shadow-xl hover:scale-[1.01]
          animate__animated animate__fadeIn animate__delay-1s"
        >
          <h3 className="text-2xl font-bold text-yellow-500">
            Who I Am
          </h3>

          <p className="text-white mt-2 leading-relaxed text-justify">
            Hi! I'm K. Sivanrajmani, a dedicated Human Resources professional
            with 3+ years of experience in HR. I have developed practical
            experience in recruitment, employee onboarding, payroll,
            employee relations, HR operations, and employee engagement.

            <br />
            <br />

            I enjoy working with people, understanding workplace needs, and
            contributing to a positive and productive work environment. I am
            organized, approachable, adaptable, and committed to maintaining
            professionalism and confidentiality in every aspect of my work.

            <br />
            <br />

            With a continuous-learning mindset, I am focused on strengthening
            my HR expertise, improving employee experiences, and contributing
            to organizational growth and success.
          </p>
        </div>


        {/* Professional Skills */}
        <div
          className="bg-gray-900 p-4 sm:p-6 rounded-lg shadow-lg
          transition-all duration-300 ease-in-out
          hover:shadow-xl hover:scale-[1.01]
          animate__animated animate__fadeIn animate__delay-2s"
        >

          <h3 className="text-2xl font-bold text-yellow-500 text-center">
            Professional Skills
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">

            {/* Recruitment */}
            <div className="bg-gray-800 p-4 rounded-lg shadow-md flex flex-col items-center hover:scale-105 transform transition-all duration-300 ease-in-out">
              <div className="text-yellow-500 text-4xl mb-3">👥</div>

              <p className="text-white text-center break-words">
                <strong>Recruitment:</strong> End-to-end recruitment,
                candidate sourcing, screening, and selection.
              </p>
            </div>


            {/* Interview Management */}
            <div className="bg-gray-800 p-4 rounded-lg shadow-md flex flex-col items-center hover:scale-105 transform transition-all duration-300 ease-in-out">
              <div className="text-yellow-500 text-4xl mb-3">📅</div>

              <p className="text-white text-center break-words">
                <strong>Interview Management:</strong> Interview scheduling,
                coordination, candidate tracking, and follow-up.
              </p>
            </div>


            {/* Employee Management */}
            <div className="bg-gray-800 p-4 rounded-lg shadow-md flex flex-col items-center hover:scale-105 transform transition-all duration-300 ease-in-out">
              <div className="text-yellow-500 text-4xl mb-3">👨‍💼</div>

              <p className="text-white text-center break-words">
                <strong>Employee Management:</strong> Employee data,
                records, onboarding, and HR administration.
              </p>
            </div>


            {/* Attendance & Leave */}
            <div className="bg-gray-800 p-4 rounded-lg shadow-md flex flex-col items-center hover:scale-105 transform transition-all duration-300 ease-in-out">
              <div className="text-yellow-500 text-4xl mb-3">🕒</div>

              <p className="text-white text-center break-words">
                <strong>Attendance & Leave:</strong> Attendance monitoring,
                leave management, and payroll coordination.
              </p>
            </div>


            {/* Payroll */}
            <div className="bg-gray-800 p-4 rounded-lg shadow-md flex flex-col items-center hover:scale-105 transform transition-all duration-300 ease-in-out">
              <div className="text-yellow-500 text-4xl mb-3">💰</div>

              <p className="text-white text-center break-words">
                <strong>Payroll:</strong> Payroll processing, salary
                coordination, and statutory deductions.
              </p>
            </div>


            {/* Employee Relations */}
            <div className="bg-gray-800 p-4 rounded-lg shadow-md flex flex-col items-center hover:scale-105 transform transition-all duration-300 ease-in-out">
              <div className="text-yellow-500 text-4xl mb-3">🤝</div>

              <p className="text-white text-center break-words">
                <strong>Employee Relations:</strong> Grievance handling,
                employee engagement, and workplace support.
              </p>
            </div>


            {/* HR Documentation */}
            <div className="bg-gray-800 p-4 rounded-lg shadow-md flex flex-col items-center hover:scale-105 transform transition-all duration-300 ease-in-out">
              <div className="text-yellow-500 text-4xl mb-3">📋</div>

              <p className="text-white text-center break-words">
                <strong>HR Documentation:</strong> Offer letters,
                appointment letters, employee records, and HR documentation.
              </p>
            </div>


            {/* Microsoft Excel */}
            <div className="bg-gray-800 p-4 rounded-lg shadow-md flex flex-col items-center hover:scale-105 transform transition-all duration-300 ease-in-out">
              <div className="text-yellow-500 text-4xl mb-3">📊</div>

              <p className="text-white text-center break-words">
                <strong>Microsoft Excel:</strong> Employee data management,
                attendance tracking, reporting, and HR data analysis.
              </p>
            </div>


            {/* Google Sheets */}
            <div className="bg-gray-800 p-4 rounded-lg shadow-md flex flex-col items-center hover:scale-105 transform transition-all duration-300 ease-in-out">
              <div className="text-yellow-500 text-4xl mb-3">📑</div>

              <p className="text-white text-center break-words">
                <strong>Google Sheets:</strong> HR data tracking,
                recruitment tracking, attendance records, and reporting.
              </p>
            </div>


            {/* HR Metrics */}
            <div className="bg-gray-800 p-4 rounded-lg shadow-md flex flex-col items-center hover:scale-105 transform transition-all duration-300 ease-in-out">
              <div className="text-yellow-500 text-4xl mb-3">📈</div>

              <p className="text-white text-center break-words">
                <strong>HR Metrics:</strong> Tracking and analyzing
                recruitment, attendance, employee turnover, and workforce data.
              </p>
            </div>


            {/* Microsoft Outlook */}
            <div className="bg-gray-800 p-4 rounded-lg shadow-md flex flex-col items-center hover:scale-105 transform transition-all duration-300 ease-in-out">
              <div className="text-yellow-500 text-4xl mb-3">📧</div>

              <p className="text-white text-center break-words">
                <strong>Microsoft Outlook:</strong> Professional email
                communication, interview scheduling, calendar management,
                and HR coordination.
              </p>
            </div>


            {/* Microsoft PowerPoint */}
            <div className="bg-gray-800 p-4 rounded-lg shadow-md flex flex-col items-center hover:scale-105 transform transition-all duration-300 ease-in-out">
              <div className="text-yellow-500 text-4xl mb-3">📊</div>

              <p className="text-white text-center break-words">
                <strong>Microsoft PowerPoint:</strong> Creating professional
                HR presentations, reports, training materials, and management
                presentations.
              </p>
            </div>


            {/* Microsoft Word */}
            <div className="bg-gray-800 p-4 rounded-lg shadow-md flex flex-col items-center hover:scale-105 transform transition-all duration-300 ease-in-out">
              <div className="text-yellow-500 text-4xl mb-3">📝</div>

              <p className="text-white text-center break-words">
                <strong>Microsoft Word:</strong> Preparing HR documents,
                employee letters, policies, reports, and professional
                documentation.
              </p>
            </div>


            {/* Power BI */}
            <div className="bg-gray-800 p-4 rounded-lg shadow-md flex flex-col items-center hover:scale-105 transform transition-all duration-300 ease-in-out">
              <div className="text-yellow-500 text-4xl mb-3">📈</div>

              <p className="text-white text-center break-words">
                <strong>Power BI:</strong> Creating HR dashboards,
                visualizing workforce data, and analyzing HR metrics
                and reports.
              </p>
            </div>

          </div>
        </div>


        {/* Career Journey */}
        <div
          className="w-full min-w-0 bg-gray-900 p-4 sm:p-6 rounded-lg
          shadow-lg mt-8 overflow-hidden
          transition-all duration-300 ease-in-out
          hover:shadow-xl hover:scale-[1.01]
          animate__animated animate__fadeIn animate__delay-3s"
        >

          <h3 className="text-2xl font-bold text-yellow-500 mb-4">
            My Career Journey
          </h3>

          <ul className="text-white space-y-6">

            {/* BCA */}
            <li className="flex items-start gap-2 min-w-0">
              <span className="flex-shrink-0">📌</span>

              <p className="min-w-0 break-words leading-relaxed">
                <strong>2021:</strong> Completed my{" "}
                <strong>Bachelor of Computer Applications (BCA)</strong>{" "}
                from{" "}
                <strong>Srinivasan College of Arts and Science</strong>,
                building a strong foundation in computer applications,
                technology, and problem-solving.
              </p>
            </li>


            {/* MCA */}
            <li className="flex items-start gap-2 min-w-0">
              <span className="flex-shrink-0">📌</span>

              <p className="min-w-0 break-words leading-relaxed">
                <strong>2023:</strong> Earned my{" "}
                <strong>Master of Computer Applications (MCA)</strong>{" "}
                from{" "}
                <strong>Srinivasan College of Arts and Science</strong>,
                further strengthening my analytical, technical, and
                professional skills.
              </p>
            </li>


            {/* PrimeCode Technologies */}
            <li className="flex items-start gap-2 min-w-0">
              <span className="flex-shrink-0">📌</span>

              <p className="min-w-0 break-words leading-relaxed">
                <strong>May 2023 – April 2025:</strong> Started my
                professional career at{" "}
                <strong>PrimeCode Technologies, Chennai</strong>{" "}
                as an{" "}
                <strong>HR Junior Executive</strong>.
                Gained hands-on experience in recruitment, employee
                onboarding, payroll processing, employee records,
                HR documentation, employee relations, and HR operations,
                while also supporting accounting and statutory compliance
                activities.
              </p>
            </li>


            {/* TVS TS */}
            <li className="flex items-start gap-2 min-w-0">
              <span className="flex-shrink-0">📌</span>

              <p className="min-w-0 break-words leading-relaxed">
                <strong>April 2025 – December 2025:</strong> Joined{" "}
                <strong>TVS TS, Chennai</strong> as an{" "}
                <strong>HR Junior Executive</strong> and continued
                developing my career in Human Resources.
                Handled recruitment, employee onboarding, attendance
                and leave management, payroll coordination, employee
                records, grievance handling, employee engagement,
                and HR policy implementation.
              </p>
            </li>

          </ul>
        </div>

      </div>


      {/* WhatsApp Notification */}
      <div className="text-white mt-8 mb-16">
        <WhatsappNotification />
      </div>

    </div>
  );
};

export default AboutPage;