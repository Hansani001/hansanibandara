import React from "react";

const EducationPage = () => {
  const education = [
    {
      id: 1,
      degree: "Bachelor of Science (Honours) in Information Systems Engineering",
      institution: "Sri Lanka Institute Of Information Technology (SLIIT)",
      year: "2025",
      location: "Colombo, Sri Lanka",
      description:
        "Information Technology (IT) degree specialized in Information Systems Engineering (ISE).",
      activitiesAndSocieties: [
        "Committee Member of Information Systems Engineering Student Community [2023 – 2024]",
        "Active Member of Media Unit of Faculty of Computing [Content Writing]",
        "Active Member of Student Community of Faculty of Computing",
      ],
      positionsHeld: [],
      level: "Degree",
    },
    {
      id: 2,
      degree: "Advanced Level Examination",
      institution: "Musaeus College, Colombo 07",
      year: "2020",
      location: "Colombo, Sri Lanka",
      description: "",
      activitiesAndSocieties: [
        "Active Member of Media Unit",
        "Active Member of Commerce and Bank Society",
        "Active Member of Buddhist Society",
      ],
      positionsHeld: [
        "Editor of School Newspaper (Miyusara)",
        "Main Organizer of Drug Prevention Club",
      ],
      level: "School",
    },
  ];

  const getBadge = (item) => {
    if (item.level) return item.level;
    if (item.degree?.toLowerCase().includes("certified") ||
        item.degree?.toLowerCase().includes("bootcamp") ||
        item.degree?.toLowerCase().includes("certificate")) {
      return "Certificate";
    }
    return "Degree";
  };

  return (
    <section id="education" className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="section-title">Education &amp; Certifications</h2>

        <div className="space-y-8">
          {education.map((item) => (
            <div
              key={item.id}
              className="glass-card p-6 hover:bg-white/25 dark:hover:bg-white/15 transition-all duration-300 hover:scale-[1.01] glow-effect group"
            >
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2 space-y-3">
                  <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">
                    {item.degree}
                  </h3>
                  {(item.institution || item.location) && (
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {item.institution}
                    </h4>
                  )}
                  {item.description && (
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {item.description}
                    </p>
                  )}

                  {item.positionsHeld?.length > 0 && (
                    <div className="mt-3">
                      <h5 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-1">
                        Positions held:
                      </h5>
                      <ul className="text-gray-600 dark:text-gray-400 text-sm list-disc ml-5 space-y-1">
                        {item.positionsHeld.map((pos, i) => (
                          <li key={i}>{pos}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {item.activitiesAndSocieties?.length > 0 && (
                    <div className="mt-3">
                      <h5 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-1">
                        Activities and societies:
                      </h5>
                      <ul className="text-gray-600 dark:text-gray-400 text-sm list-disc ml-5 space-y-1">
                        {item.activitiesAndSocieties.map((act, i) => (
                          <li key={i}>{act}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="space-y-3 md:text-right">
                  <div className="space-y-1">
                    <div className="text-blue-600 dark:text-blue-400 font-semibold">
                      {item.year}
                    </div>
                    {item.location && (
                      <div className="text-gray-600 dark:text-gray-400 text-sm">
                        {item.location}
                      </div>
                    )}
                  </div>

                  <div className="inline-block px-3 py-1 bg-blue-200 dark:bg-blue-600/20 text-blue-800 dark:text-blue-400 rounded-full text-sm font-medium">
                    {getBadge(item)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationPage;
