import { Flex, Box } from '@chakra-ui/layout';
import { useParams } from 'react-router';

import { SchedulerContainer } from '../../app';
import { Term } from '../../shared/fetchers';
import { SidebarTemplate } from '../../shared/SidebarTemplate';

export function Scheduler(): JSX.Element {
  const { term } = useParams();

  return (
    <SidebarTemplate route="schedule" term={term as Term}>
      <Box flexGrow={1}>
        <SchedulerContainer />
      </Box>
    </SidebarTemplate>
  );
}
