import React from 'react';

import { ListInput } from 'ui';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/ListInput',
  component: ListInput,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <ListInput {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: 'ListInput',
};

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'ListInput',
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'ListInput',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'ListInput',
// };

