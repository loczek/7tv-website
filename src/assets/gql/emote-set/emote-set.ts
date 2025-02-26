import { EmoteSet } from "@/structures/EmoteSet";
import { gql } from "graphql-tag";

export const GetEmoteSet = gql`
	query GetEmoteSet($id: ObjectID!, $formats: [ImageFormat!]) {
		emoteSet(id: $id) {
			id
			name
			capacity
			emotes {
				id
				name
				data {
					id
					name
					flags
					listed
					host {
						url
						files(formats: $formats) {
							name
							format
						}
					}
					owner {
						id
						display_name
						style {
							color
						}
						roles
					}
				}
			}
			owner {
				id
				username
				display_name
				style {
					color
				}
				avatar_url
				roles
				connections {
					emote_capacity
				}
			}
		}
	}
`;

export const GetEmoteSetMin = gql`
	query GetEmoteSetMin($id: ObjectID!) {
		emoteSet(id: $id) {
			id
			name
			capacity
			emotes {
				id
				name
				data {
					name
				}
			}
			owner {
				id
				display_name
				style {
					color
				}
				avatar_url
				connections {
					id
					username
					platform
				}
			}
		}
	}
`;

export interface GetEmoteSet {
	emoteSet: EmoteSet;
}
