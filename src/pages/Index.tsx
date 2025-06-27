
import React from 'react';
import Navigation from '../components/Navigation';
import HomePage from '../components/HomePage';
import ExperiencePage from '../components/ExperiencePage';
import ProjectsPage from '../components/ProjectsPage';
import EducationPage from '../components/EducationPage';
import ReferencesPage from '../components/ReferencesPage';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HomePage />
      <ExperiencePage />
      <ProjectsPage />
      <EducationPage />
      <ReferencesPage />
    </div>
  );
};

export default Index;
