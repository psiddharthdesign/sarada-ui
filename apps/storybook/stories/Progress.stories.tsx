import React from 'react';

import { Progress } from 'ui';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Progress',
  component: Progress,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Progress {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: 'Progress',
};

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Progress',
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Progress',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Progress',
// };
