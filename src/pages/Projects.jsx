import React from 'react';
import WhatsappNotification from './WhatsappNotification';

const ProjectsPage = () => {
  return (
    <div className="bg-gray-800 min-h-screen text-white py-10 overflow-x-hidden">

      {/* Page Title */}
      <h1 className="text-4xl font-extrabold text-center mb-8 animate__animated animate__fadeIn">
        My Projects
      </h1>

      {/* Projects Container */}
      <div className="w-full max-w-screen-md mx-auto px-4 sm:px-6">

        {/* HR Recruitment & Attendance Management App */}
        <div
          className="bg-gray-900 p-6 rounded-lg shadow-lg
          transition-all duration-300 ease-in-out
          hover:shadow-xl
          animate__animated animate__fadeIn animate__delay-1s"
        >

          <h3 className="text-2xl font-bold text-yellow-500">
            HR Recruitment & Attendance Management App
          </h3>

<p className="text-white mt-3 leading-relaxed">
  I developed an <strong>Android-based HR management application</strong>{" "}
  focused on simplifying recruitment, employee data, and attendance
  management. The application enables HR teams to maintain employee
  information, manage candidate details, schedule interviews, shortlist
  candidates, track total interview candidates, and maintain employee
  attendance records efficiently.
</p>

          {/* Key Features */}
          <div className="mt-5">

            <h4 className="text-xl font-semibold text-yellow-500">
              Key Features
            </h4>

            <ul className="list-disc list-inside mt-3 space-y-2 text-white">

              <li>
  Employee data management and record maintenance
</li>

<li>
  Candidate data registration and management
</li>

<li>
  Interview scheduling and interview tracking
</li>

<li>
  Candidate shortlisting and selection management
</li>

<li>
  Total interview candidate tracking and reporting
</li>

<li>
  Employee attendance and daily attendance tracking
</li>

<li>
  Recruitment progress and status monitoring
</li>

<li>
  User-friendly Android mobile interface
</li>

            </ul>
          </div>

          {/* Project Skills */}
          <div className="mt-5">

            <h4 className="text-xl font-semibold text-yellow-500">
              Project Focus
            </h4>

            <p className="text-white mt-2 leading-relaxed">
<strong>
  HR Operations | Employee Data Management | Recruitment |
  Interview Management | Candidate Tracking | Attendance Management |
  Android Application
</strong>
            </p>

          </div>

        </div>

      </div>


      {/* WhatsApp Notification */}
      <div className="bg-gray-900 text-white mt-8">
        <WhatsappNotification />
      </div>

    </div>
  );
};

export default ProjectsPage;