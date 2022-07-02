import React from 'react';

import { Pagination } from 'ui';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Pagination',
  component: Pagination,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Pagination {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: 'Pagination',
};

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Pagination',
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Pagination',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Pagination',
// };
