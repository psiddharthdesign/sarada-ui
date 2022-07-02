import React from 'react';

import { Table } from 'ui';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Table',
  component: Table,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Table {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: 'Table',
};

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Table',
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Table',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Table',
// };
