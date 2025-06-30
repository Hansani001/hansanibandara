
import React from 'react';
import Navigation from '../components/Navigation';
import HomePage from '../components/HomePage';
import ExperiencePage from '../components/ExperiencePage';
import SkillsPage from '../components/SkillsPage';
import ProjectsPage from '../components/ProjectsPage';
import EducationPage from '../components/EducationPage';
import ReferencesPage from '../components/ReferencesPage';
import ThemeToggle from '../components/ThemeToggle';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../components/ui/carousel";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <ThemeToggle />
      
      {/* Desktop View - Vertical scrolling */}
      <div className="hidden md:block">
        <HomePage />
        <ExperiencePage />
        <SkillsPage />
        <ProjectsPage />
        <EducationPage />
        <ReferencesPage />
      </div>

      {/* Mobile View - Horizontal swiping */}
      <div className="md:hidden">
        <Carousel className="w-full" opts={{ align: "start", loop: true }}>
          <CarouselContent className="-ml-0">
            <CarouselItem className="pl-0 basis-full">
              <HomePage />
            </CarouselItem>
            <CarouselItem className="pl-0 basis-full">
              <ExperiencePage />
            </CarouselItem>
            <CarouselItem className="pl-0 basis-full">
              <SkillsPage />
            </CarouselItem>
            <CarouselItem className="pl-0 basis-full">
              <ProjectsPage />
            </CarouselItem>
            <CarouselItem className="pl-0 basis-full">
              <EducationPage />
            </CarouselItem>
            <CarouselItem className="pl-0 basis-full">
              <ReferencesPage />
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default Index;
