import React from 'react';
import mypic from './mypic.jpg';
import WhatsappNotification from './WhatsappNotification';
import { FaGraduationCap } from 'react-icons/fa';

const HomePage = () => {
  return (
    <div className="bg-gray-800 min-h-screen flex flex-col items-center text-gray-800 pb-16">

      {/* Profile Section */}
      <div className="flex flex-col items-center mt-10 animate__animated animate__fadeIn animate__delay-1s">

        <img
          src={mypic}
          alt="Profile"
          className="w-52 h-52 rounded-full border-4 border-yellow-500 hover:scale-105 transform transition-all duration-300 ease-in-out"
        />

        <h1 className="text-4xl text-white font-extrabold mt-4 flex flex-col items-center hover:scale-105 transform transition-all duration-300 ease-in-out">
          SIVANRAJMANI K

          <div className="flex flex-col items-center">
            <FaGraduationCap className="text-yellow-500 text-4xl" />

            <span className="text-yellow-500 text-xl">
              MCA
            </span>
          </div>
        </h1>

        <br />

        <p className="text-xl font-medium text-yellow-500 hover:scale-105 transform transition-all duration-300 ease-in-out">
          Human Resources Professional
        </p>
      </div>


      {/* Animated Content Boxes */}
      <div className="w-full max-w-6xl mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 pb-12">

        {/* About Me */}
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300 ease-in-out animate__animated animate__fadeIn animate__delay-2s">

          <h3 className="text-2xl font-bold text-yellow-500 text-center">
            About Me
          </h3>

          <p className="text-white mt-2 text-justify leading-relaxed">
            I am a passionate Human Resources professional with 3+ years of
            experience in HR, building my career since 2023. Over the years,
            I have developed practical experience in HR operations, talent
            acquisition, employee relations, employee engagement, and
            people management.

            <br />
            <br />

            I enjoy working with people, understanding workplace needs, and
            creating a positive and productive employee experience. I am known
            for being organized, approachable, adaptable, and committed to
            maintaining professionalism and confidentiality in every aspect
            of my work.

            <br />
            <br />

            With a continuous-learning mindset, I am focused on expanding my
            HR expertise and taking on new challenges that allow me to
            contribute to both people development and organizational success.
          </p>

        </div>


        {/* Skills */}
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300 ease-in-out animate__animated animate__fadeIn animate__delay-2s">

          <h3 className="text-2xl font-bold text-yellow-500 text-center">
            Skills
          </h3>

          <ul className="list-disc list-inside text-white mt-4 space-y-2">

 <ul className="list-disc list-inside text-white mt-4 space-y-2">

  <li>
    Recruitment & Talent Acquisition
  </li>

  <li>
    Employee Onboarding & Induction
  </li>

  <li>
    Employee Data & HR Record Management
  </li>

  <li>
    Attendance & Leave Management
  </li>

  <li>
    Payroll Processing & Coordination
  </li>

  <li>
    Employee Relations & Grievance Handling
  </li>

  <li>
    Employee Engagement
  </li>

  <li>
    HR Documentation & Administration
  </li>

  <li>
    HR Policies & Procedures
  </li>

  <li>
    Interview Scheduling & Candidate Shortlisting
  </li>

  <li>
    HR Metrics & Workforce Reporting
  </li>

  <li>
    Microsoft Excel
  </li>

  <li>
    Microsoft Word
  </li>

  <li>
    Microsoft PowerPoint
  </li>

  <li>
    Microsoft Outlook
  </li>

  <li>
    Power BI
  </li>

  <li>
    Google Sheets & Google Drive
  </li>

</ul>

          </ul>

        </div>


        {/* Projects */}
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300 ease-in-out animate__animated animate__fadeIn animate__delay-2s">

          <h3 className="text-2xl font-bold text-yellow-500 text-center">
            Projects
          </h3>

          <p className="text-white mt-2 text-justify leading-relaxed">
            I developed an{" "}
            Android-based HR Management Application {" "}
            focused on employee data management, recruitment, interview
            scheduling, candidate shortlisting, interview candidate tracking,
            and employee attendance management. The application was designed
            to simplify day-to-day HR activities and improve the efficiency
            of recruitment and employee management processes.
          </p>

        </div>

      </div>


      {/* Footer / WhatsApp Notification */}
      <div className="w-full bg-gray-900 text-white mt-8 py-6">
        <WhatsappNotification />
      </div>

    </div>
  );
};

export default HomePage;