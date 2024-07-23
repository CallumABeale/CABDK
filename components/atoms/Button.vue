<script lang="ts" setup>
type ButtonStyleVariant = 'text' | 'filled' | 'outline';

export type ButtonProps = {
	label: string;
	variant?: ButtonStyleVariant;
	disabled?: boolean;
};

const props = defineProps<ButtonProps>();
const variant = props.variant || 'filled';
</script>

<template>
	<button
		v-if="variant === 'text'"
		class="textBtn"
		:disabled="props.disabled">
		{{ props.label }}
	</button>

	<button
		v-if="variant === 'filled'"
		class="filledBtn"
		:disabled="props.disabled">
		{{ props.label }}
	</button>

	<button
		v-if="variant === 'outline'"
		class="outlineBtn"
		:disabled="props.disabled">
		{{ props.label }}
	</button>
</template>

<style lang="scss" scoped>
@import '@scss/app';

@function lighten-color($color, $percent) {
	@return lighten($color, $percent);
}

button {
	@include fontType;
	padding: 0.5rem 1rem;
	border-radius: 0.4rem;
	&:hover {
		cursor: pointer;
		transition: all 0.2s ease-in-out;
		color: $text-black;
		background-color: lighten-color($tertiary, 30%);
	}
}

@mixin btnTheme(
	$background: $primary,
	$color: $text-white,
	$border: 1px solid $secondary
) {
	background-color: $background;
	color: $color;
	border: $border;
}

@mixin gradientBtnTheme(
	$background: none,
	$color: $primary,
	$borderColorPrimary,
	$borderColorSecondary
) {
	background-color: $background;
	$color: $color;
	border-image-source: linear-gradient(
		to bottom right,
		$borderColorPrimary,
		$borderColorSecondary
	);
	border-image-slice: 1;
	transition: all 0.1s ease-in-out;
}

.textBtn {
	$border: none;
	@include btnTheme(none, $text-black);
}

.filledBtn {
	$border: 2px solid $text-black;
	@include btnTheme($mixed-tertiary, $text-white, $border);
}

.outlineBtn {
	background: none;
	box-sizing: border-box;
	padding: 1rem;
	border-image-source: linear-gradient(to bottom right, red, purple);
	border-image-slice: 1;
	transition: all 0.1s ease-in-out;
}

.outlineBtn:hover {
	cursor: pointer;
	border-image-source: linear-gradient(to bottom right, purple, red);
}
</style>
