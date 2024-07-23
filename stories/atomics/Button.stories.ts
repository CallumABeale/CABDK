import { fn } from '@storybook/test';
import Button from '../../components/atoms/Button.vue';
import type { ButtonProps } from '../../components/atoms/Button.vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
	title: 'Atomics/Button',
	component: Button,
	tags: ['autodocs'],
	argTypes: {
		size: {
			control: { type: 'select' },
			options: ['small', 'medium', 'large'],
		},
		backgroundColor: { control: 'color' },
		variant: {
			control: { type: 'select' },
			options: ['filled', 'text', 'outline'],
		},
	},
	// Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
	args: { onClick: fn() },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

type ButtonArgs = {
	args: ButtonProps;
};

export const Filled: ButtonArgs = {
	args: {
		// primary: true,
		label: 'Click me!',
	},
};

export const Text: ButtonArgs = {
	args: {
		label: 'Click me!',
		// variant: 'text',
	},
};

export const Outline: ButtonArgs = {
	args: {
		label: 'Click me!',
		variant: 'outline',
	},
};

// export const Secondary = {
// 	args: {
// 		label: 'Button',
// 	},
// };

// export const Large = {
// 	args: {
// 		size: 'large',
// 		label: 'Button',
// 	},
// };

// export const Small = {
// 	args: {
// 		size: 'small',
// 		label: 'Button',
// 	},
// };
