import React from 'react';

import { Avatars } from 'ui';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Avatars',
  component: Avatars,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Avatars {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: 'Avatars',
};

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Avatars',
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Avatars',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Avatars',
// };

