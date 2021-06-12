import { Flex } from '@chakra-ui/layout';
import { useParams } from 'react-router';

import { SidebarTemplate } from '../../common/sidebar/';
import { Term } from '../../lib/fetchers';

import { SchedulerSidebar } from './components/SchedulerSidebar';
import { SchedulerContainer } from './containers/SchedulerContainer';

export function Scheduler(): JSX.Element {
  const { term } = useParams();

  return (
    <SidebarTemplate title="Scheduler" term={term as Term}>
      <Flex flexGrow={1}>
        <SchedulerContainer />
        <SchedulerSidebar term={term} />
      </Flex>
    </SidebarTemplate>
  );
}
