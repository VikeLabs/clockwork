import { render } from '@testing-library/react';
import { axe } from 'jest-axe';

import { Landing } from 'pages/home/containers/Landing';

describe('Landing', () => {
  it('has no a11y violations', async () => {
    const { container } = render(<Landing />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
