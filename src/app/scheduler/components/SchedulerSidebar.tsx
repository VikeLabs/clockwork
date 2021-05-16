import { Button } from '@chakra-ui/button';
import { Box, Flex, Heading, VStack } from '@chakra-ui/layout';
import { useCallback, useState } from 'react';

import { MeetingTimes } from '../../../shared/fetchers';
import { useSavedCourses } from '../../../shared/hooks/useSavedCourses';

import { SectionsCardContainer } from './SchedulerSections';

// GREEN, RED, YELLOW, BLUE, PURPLE, ORANGE
export const COLORS = ['#32a852', '#b33127', '#e8e523', '#247fe0', '#971dcc', '#cc7d1d'];

export function SchedulerSidebar(): JSX.Element {
  const { deleteCourse, setSection, courses } = useSavedCourses();
  const [counter, setCounter] = useState(0);

  const handleChange = useCallback(
    (
      sectionType: string,
      sectionCode: string,
      meetingTimes: MeetingTimes[],
      code: string,
      subject: string,
      pid: string,
      term: string
    ) => {
      setSection(
        sectionType,
        {
          sectionCode,
          meetingTimes,
        },
        { code, subject, term, pid, sections: [] }
      );
      console.log(counter, COLORS[counter]);
      setCounter(counter + 1);
    },
    [counter, setSection]
  );

  return (
    <Flex minW="25%" maxW="25%" bg="white" overflowY="auto" direction="column">
      {courses.map((course, key) => {
        return (
          <VStack key={key}>
            <Heading bg="white">{`${course.subject} ${course.code}`}</Heading>
            <Box w="100%">
              <SectionsCardContainer course={course} handleChange={handleChange} />
              {/* {course.sections.map(({ sectionCode, sectionType, meetingTimes }) => {
                    return (
                      <Button
                        onClick={() =>
                          handleChange(
                            sectionType,
                            sectionCode,
                            meetingTimes,
                            course.code,
                            course.subject,
                            course.pid,
                            course.term
                          )
                        }
                      >
                        {sectionCode}
                      </Button>
                    );
                  })} */}
            </Box>
            <Button
              style={{
                backgroundColor: 'red',
              }}
              onClick={() =>
                deleteCourse({
                  code: course.code,
                  pid: course.pid,
                  subject: course.subject,
                  term: course.term,
                  sections: [],
                })
              }
            >
              remove
            </Button>
          </VStack>
        );
      })}
    </Flex>
  );
}
