<template>
	<div class="theme-switcher">
		<div class="" />

		<Icon
			v-if="store.seasonalTheme"
			v-tooltip="t('nav.theme', [t('nav.theme_dark')])"
			v-tooltip:position="'bottom'"
			class="unselectable"
			icon="moon"
			@click="() => [store.setSeasonalTheme(false), changeTheme('dark')]"
		/>
		<Icon
			v-else-if="theme === 'dark'"
			v-tooltip="t('nav.theme', [t('nav.theme_light')])"
			v-tooltip:position="'bottom'"
			class="unselectable"
			icon="sun-bright"
			@click="() => changeTheme('light')"
		/>
		<Icon
			v-else-if="theme === 'light'"
			v-tooltip="t('nav.theme', [t('nav.theme_seasonal')])"
			v-tooltip:position="'bottom'"
			class="unselectable"
			icon="pumpkin"
			@click="store.setSeasonalTheme(true)"
		/>
	</div>
</template>

<script setup lang="ts">
import { Theme, useStore } from "@/store/main";
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import Icon from "./Icon.vue";

const { t } = useI18n();
const store = useStore();

const theme = computed(() => store.getTheme);

const changeTheme = (theme: Theme) => {
	store.setTheme(theme);
};
</script>
