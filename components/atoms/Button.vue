<script lang="ts" setup>
type ButtonStyleVariant = 'text' | 'filled' | 'outline';

type ButtonProps = {
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

button {
	@include fontType;
	&:hover {
		cursor: pointer;
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

.textBtn {
	$border: none;
	@include btnTheme($primary, $text-dark, $border);
}

.filledBtn {
	@include btnTheme($primary, $text-white);
}

.outlineBtn {
	@include btnTheme(none, $text-dark);
}
</style>
