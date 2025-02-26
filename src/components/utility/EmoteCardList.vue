<template>
	<div class="emote-card-list">
		<Lazy v-for="(emote, i) in items" :key="i">
			<div
				:key="emote.id"
				:ref="(el) => setCardRef(el as HTMLElement)"
				class="emote-card-wrapper"
				:visible="loaded[emote.id]"
				:emote-id="emote.id"
			>
				<EmoteCard
					:unload="unload || !loaded[emote.id]"
					:emote="(emote as ActiveEmote).data ?? emote"
					:emote-actor="(emote as ActiveEmote).actor"
					:alias="emote.name"
					:spooky="seasonalTheme"
				/>
			</div>
		</Lazy>
	</div>
</template>

<script setup lang="ts">
import { useStore } from "@/store/main";
import { Emote } from "@/structures/Emote";
import { ActiveEmote } from "@/structures/EmoteSet";
import { storeToRefs } from "pinia";
import { onBeforeUnmount, reactive } from "vue";
import EmoteCard from "./EmoteCard.vue";
import Lazy from "./Lazy.vue";

defineProps<{
	items: (Emote | ActiveEmote)[];
	unload?: boolean;
}>();

const { seasonalTheme } = storeToRefs(useStore());

const refs = [] as HTMLElement[];
const loaded = reactive<Record<string, number>>({});
const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		entry.isIntersecting
			? (loaded[entry.target.getAttribute("emote-id") as string] = 1)
			: (loaded[entry.target.getAttribute("emote-id") as string] = 0);
	});
});

// gather all card elements and observe them
const setCardRef = (el: HTMLElement) => {
	if (el instanceof Element) {
		refs.push(el as HTMLElement);

		observer.observe(el);
	}
};

onBeforeUnmount(() => {
	observer.disconnect();
});
</script>

<style scoped lang="scss">
.emote-card-list {
	list-style: none;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 1em;

	.emote-card-wrapper[visible="0"] {
		visibility: hidden;
	}
}
</style>
