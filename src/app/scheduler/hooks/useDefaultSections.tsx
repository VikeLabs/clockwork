import { useEffect } from 'react';

import { useSavedCourses } from '../../../shared/hooks/useSavedCourses';
import { SectionListData } from '../../../shared/hooks/useSectionList';
import { getFirstSectionType, hasSectionType } from '../../../shared/utils/courses';

export const useDefaultSections = (courseList: SectionListData[]) => {
  const { courses, setSection } = useSavedCourses();

  useEffect(() => {
    if (courseList.length !== courses.length) return;
    courses.forEach((course, i) => {
      if (hasSectionType(courseList[i].sections, 'lecture') && !course.lecture) {
        const index = getFirstSectionType(courseList[i].sections, 'lecture');
        // console.log(course.subject, course.code, 'has lecture', yo, course.sections[yo]);
        setSection('lecture', courseList[i].sections[index], course);
      }
      if (hasSectionType(courseList[i].sections, 'lab') && !course.lab) {
        const index = getFirstSectionType(courseList[i].sections, 'lab');
        // console.log(course.subject, course.code, 'has lecture', yo, course.sections[yo]);
        setSection('lab', courseList[i].sections[index], course);
      }
      if (hasSectionType(courseList[i].sections, 'tutorial') && !course.lab) {
        const index = getFirstSectionType(courseList[i].sections, 'tutorial');
        // console.log(course.subject, course.code, 'has lecture', yo, course.sections[yo]);
        setSection('tutorial', courseList[i].sections[index], course);
      }
    });
  }, [courseList, courses, setSection]);
};
