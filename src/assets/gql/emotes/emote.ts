import { Emote } from "@/structures/Emote";
import gql from "graphql-tag";

export const GetEmote = gql`
	query Emote($id: ObjectID!) {
		emote(id: $id) {
			id
			created_at
			name
			lifecycle
			listed
			trending
			tags
			owner {
				id
				username
				display_name
				avatar_url
				style {
					color
				}
			}
			flags
			host {
				url
			}
			versions {
				id
				name
				description
				created_at
				lifecycle
				listed
				host {
					url
					files {
						name
						format
						width
						height
						size
					}
				}
			}
			animated
		}
	}
`;

export const GetEmotes = gql`
	query EmotesByID($list: [ObjectID!]!, $formats: [ImageFormat!]) {
		emotesByID(list: $list) {
			id
			name
			flags
			listed
			tags
			owner {
				id
				display_name
				style {
					color
				}
			}
			host {
				url
				files(formats: $formats) {
					name
					format
					width
					height
					size
				}
			}
		}
	}
`;

export const GetEmoteStatistics = gql`
	query GetEmoteStatistics($id: ObjectID!) {
		emote(id: $id) {
			id
			common_names {
				name
				count
			}
		}
	}
`;

export const WatchEmote = gql`
	subscription WatchEmote($id: ObjectID!) {
		emote(id: $id) {
			id
			created_at
			name
			lifecycle
			listed
			tags
			owner {
				id
				username
				display_name
				avatar_url
				style {
					color
				}
			}
			flags
			versions {
				id
				name
				description
				created_at
				lifecycle
				listed
				host {
					url
					files {
						name
						format
						width
						height
						size
					}
				}
			}
		}
	}
`;

export const GetEmoteChannels = gql`
	query GetEmoteChannels($id: ObjectID!, $page: Int, $limit: Int) {
		emote(id: $id) {
			id
			channels(page: $page, limit: $limit) {
				total
				items {
					id
					username
					display_name
					avatar_url
					style {
						color
					}
				}
			}
		}
	}
`;

export const GetEmoteActivity = gql`
	query GetEmoteActivity($id: ObjectID!, $limit: Int) {
		emote(id: $id) {
			id
			activity(limit: $limit) {
				id
				kind
				created_at
				target_id
				target_kind
				actor {
					id
					username
					display_name
					style {
						color
					}
					avatar_url
				}
				changes {
					format
					key
					value
					array_value {
						added
						updated
						removed
					}
				}
			}
		}
	}
`;

export const GetMinimalEmote = gql`
	query GetMinimalEmote($id: ObjectID!, $formats: [ImageFormat!]) {
		emote(id: $id) {
			id
			name
			host {
				url
				files(formats: $formats) {
					name
					format
				}
			}
		}
	}
`;

export interface GetEmote {
	emote: Emote;
}
