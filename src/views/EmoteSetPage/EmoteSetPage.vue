<template>
	<main class="emote-set-page">
		<div class="emote-set-wrapper">
			<div selector="heading">
				<span v-if="set && set.owner" selector="set-owner">
					<i18n-t keypath="emote_set.managed_by" tag="p">
						<p />
						<template #USER>
							<UserTag :user="set.owner" scale="1em" :clickable="true" />
						</template>
					</i18n-t>
				</span>
				<div v-if="set">
					<h3>{{ set.name }}</h3>
					<span :class="{ overflow }"> {{ set.emotes.length }}</span>
					<span> / {{ set.capacity }} </span>
				</div>
				<div class="actions-wrapper">
					<div class="actions">
						<div v-if="editable" v-wave class="action-button" name="edit" @click="openProperties">
							<Icon icon="pen" />
						</div>

						<div v-if="editable" v-wave class="action-button" name="delete" @click="promptDelete">
							<Icon icon="trash" />
						</div>
					</div>
				</div>
			</div>

			<!-- Content -->
			<div selector="content">
				<div v-if="set" selector="card-list">
					<EmoteCardList :items="set.emotes" />
				</div>
			</div>
		</div>
	</main>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, ref } from "vue";
import { GetEmoteSet } from "@gql/emote-set/emote-set";
import { EmoteSet } from "@/structures/EmoteSet";
import { useQuery } from "@vue/apollo-composable";
import { useHead } from "@vueuse/head";
import { useActor } from "@/store/actor";
import { useModal } from "@/store/modal";
import { ObjectKind } from "@/structures/Common";
import { useMutationStore } from "@/store/mutation";
import { UpdateEmoteSet } from "@/assets/gql/mutation/EmoteSet";
import { useRouter } from "vue-router";
import { useObjectSubscription } from "@/composable/object-sub";
import UserTag from "@/components/utility/UserTag.vue";
import Icon from "@/components/utility/Icon.vue";
import EmoteSetPropertiesModal from "./EmoteSetPropertiesModal.vue";
import EmoteSetDeleteModal from "./EmoteSetDeleteModal.vue";
import EmoteCardList from "@/components/utility/EmoteCardList.vue";

const props = defineProps<{
	setID: string;
	setData?: string;
}>();

const actor = useActor();

const stoppers = [] as (() => void)[];
const set = ref<EmoteSet>(props.setData ? JSON.parse(props.setData) : null);

const { onResult, stop } = useQuery<GetEmoteSet>(GetEmoteSet, { id: props.setID });

const { watchObject } = useObjectSubscription();
onResult((res) => {
	if (!res.data?.emoteSet) {
		return;
	}
	set.value = res.data.emoteSet;

	// Subscribe to changes,
	watchObject(ObjectKind.EMOTE_SET, set.value);
});
stoppers.push(stop);

// Set page title
const title = computed(() => `${set.value?.name ?? "Emote Set"} - 7TV`);
useHead({ title });

// Actor can edit this set?
const editable = computed(() => actor.mayEditEmoteSet(set.value));
const overflow = computed(() => set.value && set.value.emotes.length >= set.value.capacity);

const modal = useModal();

const openProperties = () => {
	modal.open("emote-set-properties", {
		component: EmoteSetPropertiesModal,
		events: {
			update: (d) => doMutation(d),
		},
		props: {
			set: set.value,
		},
	});
};

const promptDelete = () => {
	modal.open("emote-set-delete", {
		component: EmoteSetDeleteModal,
		events: {
			delete: doDelete,
		},
		props: {
			set: set.value,
		},
	});
};

const m = useMutationStore();
const doMutation = (data: UpdateEmoteSet.Variables["data"]) => {
	m.editEmoteSet(set.value.id, data).catch(actor.showErrorModal);
};

const router = useRouter();

const doDelete = () => {
	m.deleteEmoteSet(set.value.id)
		.catch(actor.showErrorModal)
		.then(() => {
			if (set.value && set.value.owner) {
				router.replace({ name: "User", params: { userID: set.value.owner?.id } });
			} else {
				router.replace("/");
			}
		});
};

onBeforeUnmount(() => {
	stoppers.forEach((f) => f());
});
</script>

<style lang="scss" scoped>
@import "@scss/themes.scss";

main.emote-set-page {
	display: flex;
	align-items: center;
	justify-content: center;

	@include themify() {
		background-color: themed("navBackgroundColor");
		> div {
			background-color: themed("backgroundColor");
			> div[selector="heading"] {
				background-color: lighten(themed("backgroundColor"), 2);
				background-image: linear-gradient(145deg, themed("navBackgroundColor") 16vw, transparent 0),
					linear-gradient(-145deg, themed("navBackgroundColor") 16vw, transparent 0);

				@media screen and (max-width: 800px) {
					background-image: none;
				}

				.overflow {
					color: themed("warning");
				}
			}

			> div[selector="content"] {
				div[selector="card-placeholder"] {
					background-color: darken(themed("backgroundColor"), 2);
				}
			}

			.action-button[name="delete"] {
				color: themed("warning");
				background-color: transparentize(themed("warning"), 0.95);
			}
			.action-button[name="edit"] {
				color: themed("primary");
				background-color: transparentize(themed("primary"), 0.95);
			}
		}
	}
	> div {
		display: flex;
		flex-direction: column;
		width: calc(100% - 2.5em);
		height: calc(100% - 2.5em);
		padding-bottom: 3em;

		$contentHeight: 4em;

		clip-path: polygon(5% 0%, 95% 0%, 100% 5%, 100% 95%, 95% 100%, 5% 100%, 0% 95%, 0% 5%);

		@media screen and (max-width: 600px) {
			clip-path: none;
		}

		> div[selector="heading"] {
			display: flex;
			justify-content: space-between;
			align-items: center;
			height: $contentHeight;

			> span,
			div {
				width: 33%;
				font-size: 1.05em;
				text-align: center;

				&[selector="set-owner"] {
					display: grid;
					font-size: 0.88em;

					> p {
						display: grid;
						letter-spacing: 0.1em;
						font-weight: 300;
					}
				}
			}

			.actions-wrapper {
				display: grid;
				height: 100%;

				> .actions {
					display: flex;
					justify-content: center;
					align-items: center;
					width: 100%;
					gap: 0.5em;
					margin-top: 0.25em;
					margin-bottom: 0.25em;

					> .action-button {
						display: grid;
						place-items: center;
						border-radius: 50%;
						height: 2em;
						width: 2em;
						cursor: pointer;
					}
				}
			}
		}

		> div[selector="content"] {
			height: calc(100% - $contentHeight);
			padding: 3.5vh;
			margin-left: 3vh;
			margin-right: 3vh;
			display: flex;
			flex-direction: column;

			> div[selector="card-list"] {
				display: flex;
				flex-wrap: wrap;
				justify-content: center;
				gap: 1em;

				> div[selector="card-wrapper"] > div[selector="card-placeholder"] {
					height: 160px;
					width: 160px;
				}

				.emote-card.overflow {
					opacity: 0.25;
					pointer-events: none;
				}
			}
		}
	}
}
</style>
