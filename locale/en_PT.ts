export default {
	locale: "English (Pirate)",
	// Common / Repeated words and phrases
	common: {
		appName: "7TV",
		appHost: "7tv.app",
		supportEmail: "kathy{'@'}7tv.app",
		learnMore: "Learn Moarr",
		more: "Moarr",
		retry: "Retry",
		back: "Back",
		download: "Download | Downloads",
		features: "Featurrr-es",
		comments: "Comments",
		search: "Searrrch",
		update: "Update",
		report: "Report",
		delete: "Delete",
		cancel: "Cancel",
		submit: "Submit",
		activity: "Activity",
		loading: "Loading",
		save_changes: "Save Changes",
		reset: "Reset",
		object: {
			user: "Pirate",
			emote_set: "Emote Set",
			emote: "Emote",
		},
	},
	// Text that appears on the home page
	home: {
		slogan: "The Emote Platform for All",
		app_description: "Manage hundreds of emotes for your Twitch or YouTube channels with ease",
		why_app: "Why @:common.appName{'?'}",
		download_browser: "Browser Extension",
		download_mobile: "Mobile Apps",
		download_misc: "Other Apps",
		features: {
			emote_sets: {
				name: "Emote Sets",
				detail: "Group emotes in customizable sets that can be shared with other users or quickly swapped onto your channel.",
			},
			many_emote_slots: {
				name: "Hundreds of emote slots",
				detail: "Start with {0} slots, with a possible maximum of {1} and no paywall.",
			},
			channel_emote_names: {
				name: "Per-channel emote names",
				detail: "Don't like the name given to an emote by its author? That's fine, you can change it for your channel only.",
			},
			real_time: {
				name: "Real-Time",
				detail: "Changing emotes in your channel happens instantly, for all viewers. No F5 required.",
			},
			emote_versions: {
				name: "Emote Versioning",
				detail: "Swap between themed variants or update an emote to an improved version.",
			},
			userbase: {
				name: "Large Community",
				detail: "@:common.appName serves {0}+ daily unique users and has a library of over {1} public emotes",
			},
			next_gen: {
				name: "Next-gen image formats like WEBP and AVIF",
				detail: "We use newer, more optimized image formats to reduce bandwidth usage.",
			},
			source_available: {
				name: "Source-Available",
				detail: "Arr entire blueprint be available on GitHub wit' a source-available letter o' marque. Any pirate can view 'n contribute.",
			},
		},
		socials: {
			discord: "Join @:common.appName on Discord",
			discord_online_count: "{0} sailers online",
			twitter: "Follow us on Twitter",
			github: "Contribute",
		},
		legal: {
			terms: "Terms of Service",
			privacy: "Privacy Policy",
			unaffiliated: "@:common.appName is not affiliated with Twitch Interactive",
		},
	},
	// Nav Bar
	nav: {
		home: "Main Deck",
		about: "About",
		emotes: "Emotes",
		store: "Brothel",
		admin: "Captain's Quarters",
		sign_in: "Join Aboard",
		user_search: "Search Profiles",
		locale_contribute: "Translate @:common.appName{'!'}",
		wip_notice: {
			heading: "Welcome to the new @:common.appName website",
			text1: "This is an early preview of the next way to experience @:common.appName{'.'}",
			text2: "Explore what's new and give us some feedback! Note it will be undergoing rapid changes and may break frequently.",
		},
	},
	activity: {
		emote_created: "Created {T}",
		emote_renamed: "Renamed {T} from {O} to {N}",
		emote_listing_approved: "Approved {T} for public listing",
		emote_listing_revoked: "Removed {T} from public listing",
		emote_merged: "Merged {T} into {0}",
		emote_ownership_transferred: "Transferred ownership of {T} to {U}",
		emote_restored: "Restored {T}",
		emote_updated: "Changed properties for {T}",
		emote_deleted: "Deleted {T}",
		emote_tags_updated: "Set tags for {T}: {N}",
		emote_processed: "Executed a new processing job for {T}",
		emote_version_created: "Created version '{VER}' for {T}",
		emote_version_renamed: "Renamed version '{VER}' for {T} from {1} to {2}",
		emote_version_approved: "Approved version '{VER}' for {T} for public listing",
		emote_version_restored: "Restored version '{VER}' for {T}",
		emote_version_deleted: "Deleted version '{VER}' for {T}",
		emote_flag_added: "Added flag {FLAG} to {T}",
		emote_flag_removed: "Removed flag {FLAG} from {T}",
		user_created: "Created {T}",
		user_deleted: "Deleted {T}",
		user_editor_added: "Added {U} as an editor",
		user_editor_added_other: "Added {U1} as an editor of {U2}",
		user_editor_updated: "Updated editor privileges for {U}",
		user_editor_updated_other: "Updated editor privileges for {U1}, an editor of {U2}",
		user_editor_removed: "Revoked {U}'s editor privileges",
		user_editor_removed_other: "Revoked {U1}'s editor privileges to {U2}",
		user_banned: "Banned {T}",
		user_unbanned: "Unbanned {T}",
		user_updated: "Changed properties for {T}",
		user_sign_in: "{T} has signed in",
		user_sign_out: "{T} has logged out",
		user_forbidden: "{T} was denied access to {0}",
		emote_set_created: "Created {T}",
		emote_set_emote_added: "Added the emote {AE} to {T}",
		emote_set_emote_removed: "Removed the emote {AE} from {T}",
		emote_set_emote_renamed: "Renamed the emote {AE} from {O} to {N} in {T}",
		emote_set_updated: "Changed properties for {T}",
	},
	// Text that is relevant to emotes
	emote: {
		add: "Add Emote",
		author: "Added by",
		created_at: "Forged",
		versions: "Versions",
		preview_loading: "Loading previews... {'('}{0}{'/'}{1}{')'}",
		preview_failed: "Failed to load previews",
		processing: "Processing Emote - this may take some time.",
		processing_failed: "Processing failed: {0}",
		use: "Use Emote",
		use_menu: "Add this emote to...",
		switch_version: "Switch to 'tis version",
		in_n_sets: "be in {0} set | be in {0} sets",
		disable: "Let th' Emote walk the plank",
		properties: "Properties",
		new_version: "New Version",
		report: "Report Emote",
		Privacy: "Privacy",
		comments: "Comments",
		channels: "Channels",
		common_names: "Other names for this emote",
		usage_stats: "Emote Statistics",
		no_longer_available: "This emote is no longer available",
		tags: "Tags",
		add_tag: "Add Tag",
		trending_rank: "#{0} on Trending",
		avif_no_support:
			"Sorry, {BROWSER} does not support the AVIF format. Try updating to a newer version or try with a different browser.",
		delete_prompt: {
			heading: "Delete {0}",
			heading_versions: "Delete version '{0}' of {1}",
			notice: "Are you sure you want to delete the emote {0}{'?'}",
			notice_versions: "Are you sure you want to delete the version '{0}' from {1}{'?'}",
			reason: "Reason for deletion",
		},
		properties_prompt: {
			heading: "Edit {0}",
		},
		unlisted: {
			heading: "Heads up!",
			warning: "This emote is not publicly listed.",
			warning_flagged: "This emote has been unlisted for the following reasons: {FLAG_LIST}",
			notice: "It can be added to your channel, but we cannot verify if it is safe to show on a livestream.",
			notice_flagged: "It can be added to your channel, however we believe it is unsafe to show on a livestream.",
			show_button: "Show Emote",
			flag_sexual_content: "Sexual or sexually suggestive content",
			flag_epilepsy: "Rapid flashing / seizure-inducing",
			flag_edgy: "Edgy or distasteful",
			flag_twitch_banned: "Disallowed on Twitch",
		},
		list: {
			searching: "Searrrchin'",
			emote_count: "{0} emotes",
			no_emotes_listed: "No emotes found",
			fetching_slowly: "Arrgh, 'tis be takin' a while",
			category: {
				name: "Category",
				top: "Top",
				trending: "Trending",
				featured: "Featured",
				global: "Global",
				new: "New",
			},
			filters: {
				case_sensitive: "Case Sensitive",
				exact_match: "Exact Match",
				ignore_tags: "Ignore Tags",
			},
		},
		upload: {
			emote_name: "Emote Name",
			version_name: "Version Name",
			version_description: "Version Description",
			submit_emote: "Submit Emote",
			create_emote_version: "Create Emote Version",
			image_upload: "Image Upload",
			accepted_formats: "Accepted Formats",
			filetype: "File",
			animation: "Animation",
			transparency: "Transparency",
			emote_details: "Emote Details",
			version_details: "Version Details",
			attribution: "Attribution",
			original_creator: "Original Creator",
			as_child: "Yar be creatin' a {IS_DIVERGED} version o' {0}. ",
			content_moderation: "Content Moderation",
			half_transparency_tooltip:
				"Pixels can only be fully transparent or fully opaque (no variable transparency)",
		},
	},
	emote_set: {
		create: "New @:common.object.emote_set",
		select: "Select @:common.object.emote_set",
		explain: {
			section: "What are Emote Sets?",
			hint: "Emote Sets be a collection o' emotes which can be bound t' yer channels or shared wit' other pirates.",
		},
		no_space: "Slots Full",
		none_selected: "No Set Selected",
		editing: "Editing {0}",
		owner: "{USER}'s Emote Set",
		owned: "Owned Emote Set",
		label_renamed: "Renamed",
		label_conflict: "Conflict",
		label_default: "Default",
		label_actor: "Enabled by {0}",
		// "enabled by <display_name of actor>"
		context_emote_add: "Add to {SET_NAME}",
		context_emote_remove: "Remove from {SET_NAME}",
		modal: {
			selected_channel_count: "no channel selected | {0} channel selected | {0} channels selected",
			create_button: "Create @:common.object.emote_set",
			rename_in_set: "Rename in {0}",
			context_rename: "Customize Emote Name",
			context_set_default: "Assign As Default",
			context_unset_default: "Unassign As Default",
		},
	},
	// Text that is relevant to users
	user: {
		emote_sets: "Emote Sets",
		channel_emotes: "Channel Emotes",
		joined_at: "Joined {0}",
		editors: "Crew",
		roles: "Jobs",
		connections: "Channels | Channels & Accounts",
		new_connections: "Link accounts...",
		add_editor: "Add Editor",
		editor_modal_heading: "Modify {0}'s Editors",
		editor_modal_user_search: "Who would you like to add as an editor?",
		editor_modal_user_update: "Editor",
		no_channel_emotes: "{0} has nay emotes on ther {1} channel",
		no_channels: "{0} nay has any ships fastened!",
		card: {
			view_full_profile: "View Yer-self",
		},
		settings: {
			button: "Edit Profile",
			section_profile: "Profile",
			username: "Username",
			display_name: "Display Name",
			profile_picture: "Profile Picture",
			section_badges: "Badges",
			section_paints: "Paints",
			no_badges: "You do not own any badges",
			no_paints: "You do not own any paints",
			sign_out: "Sign Out",
			cosmetics_updated: "Cosmetics Updated",
			cosmetics_updated_message: "It may take between 10 to 30 minutes for your changes to appear in chat.",
		},
		editor_permissions: {
			modify_emotes: "Modify Channel Emotes",
			use_private_emotes: "Use Private Emotes",
			manage_profile: "Manage Profile",
			manage_owned_emotes: "Manage Owned Emotes",
			manage_emote_sets: "Manage Emote Sets",
			manage_billing: "Manage Billing",
			manage_editors: "Manage Editors",
			view_messages: "View Messages",
		},
	},
	store: {
		subscribe_cta: "Become a @:common.appName Subscriber!",
		subscribed: "Thank you for subscribing",
		button_self: "Subscribe",
		button_gift: "Gift a sub",
		billing_information_heading: "Billing Information",
		payment_information_heading: "Payment Information",
		payment_gift_heading: "Select the recipient for this gift",
		payment_methods: "Payment Methods",
		payment_methods_hint: "Choose a payment method",
		payment_method_paypal: "PayPal",
		payment_method_stripe: "Credit Card",
		payment_popup_cta: "Complete the transaction in the new window",
		pay_button: "Pay via {0}",
		product_type_subscription: "Subscription",
		purchase_success: {
			heading: "Purchase Successful",
			text1: "We've received your payment and your subscription has been activated.",
			text2: "Thank you for your support! If you have any questions, please contact us via the methods provided on this page.",
		},
		sub: {
			incentive: "You'll get...",
			creator_tier: "Extras for creators",
			creator_tier_desc: "Upgrade to the Creator tier and get extra coolness for your channel",
			feature_t1_badge: "Subscriber Badge",
			feature_t1_paints: "Nametag Paints",
			feature_t1_animated_profile_picture: "Animated Profile Picture",
			feature_t1_zero_width: "Zero Width Emotes",
			feature_t1_global_raffle: "Global Emote Raffle Ticket",
			feature_t1_personal_emotes: "Personal Emotes",
			feature_t2_animated_profile_banner: "Animated Profile Banner",
			feature_t2_animated_offline_screen: "Animated Offline Screen",
			feature_t2_extended_sub_emotes: "Extended Sub Emotes",
			current_plan: "Your Plan",
			cancel: "Do Not Renew",
			update_payment: "Update Payment Method",
			reactivate: "Reactivate Subscription",
			cancel_prompt: "Are you sure you want to cancel your subscription?",
			state_heading: "Your Subscription",
			state_badge_progress: "Badge Progress",
			state_paints: "Paints",
			state_anniversary:
				"Your Sub anniversary is today | Your next anniversary is in {0} day | Your next Sub anniversary is in {0} days",
			state_age:
				"You subscribed today | You've been subscribed for {0} day | You've been subscribed for {0} days",
			state_ending: "Your sub ends today | Your sub ends in {0} day | Your sub ends in {0} days",
			state_collection_heading: "Collection",
			state_paints_heading: "Unlocked Paints ({0})",
			state_raffle: "Global Emote Raffle",
			state_leaderboards: "Top Gifters",
			raffle: {
				starts_at: "{0} days",
				starts_at_hint: "The next sub raffle begins on {0}",
			},
		},
	},
	// Text that is relating to the reporting system
	reporting: {
		report: "Report",
		emote_reason: {
			i_made_this: "Me made 'tis emote but it be uploaded by another gentleman o' fortune",
			duplicate: "'Tis emote be a forgery",
			pornographic: "'Tis emote holds pornographic or overly sexualized imagery",
			violence_gore: "'Tis emote exhibits' extreme violence or gore",
			i_appear_there: "'Tis emote depicts me n' I nay like it",
			offensive: "Me find 'tis emote offensive",
			other: "Somethin' else",
		},
		uncategorized_prompt: "What be the matter?",
		details: "Details (additional info an'/or evidence fer yer report)",
		success: "Report be victoriously submitted",
		notify: "You will be notified via the inbox once your report is handled or further information is requested.",
		complete_step_one: "Continue",
		abuse_notice: "Abuse of the report feature may lead to your access being revoked.",
	},
	// Text that is relevant to the inbox
	inbox: {
		inbox: "Inbox",
		tabs: {
			all: "All Messages",
			unread: "Unread",
			important: "Important",
		},
		unread_tag: "Unread",
		// System inbox messages
		generic: {
			emote_listed: {
				subject: "Yer emote be found worthy to set sail fer the seas",
				content: `
# Yer emote "{EMOTE_NAME}" be found sanctioned to set sail \n
It will now be found on the Emote Directory 'n begin appearin' on @:common.appHost{'.'}
`,
			},
			emote_not_listed: {
				subject: "Yer emote be unsuit for sailing the seas, matey",
				content: `
# Yer emote "{EMOTE_NAME}" be unworthy to set sail. 
It will nah be available via the public Emote Directory or seen on @:common.appHost,
but will remain available fer users wit' the link.
`,
			},
			emote_ownership_claim_request: {
				subject: "Invitation to become th' captain of an emote",
				content: `
## {OWNER_DISPLAY_NAME} wants ye t' be the captain of '{EMOTE_NAME}'

[View Emote]({EMOTE_URL})

**[Accept Request]({EMOTE_CLAIM_URL})** | [Decline Request]({EMOTE_DECLINE_URL})`,
			},
			client_banned: {
				subject: "Yar've been banished to Davy Jones' Locker",
				reason: {
					pornographic_content: "",
				},
				content: `
# Account Banished
Your sailor status to @:common.appName is now limited.<br/><br/>
### Reason for this action
{BAN_REASON} <br/><br/>
### Restrictions Applied<br/>
{EFFECT_NO_PERMISSIONS}
{EFFECT_NO_AUTH}
{EFFECT_NO_OWNERSHIP}
{EFFECT_MEMORY_HOLE}

<br/>This decision expires **{BAN_EXPIRE_AT}**.
_If you believe thi' a drunkened decision, send a messenger bird @:common.supportEmail{'.'}_
 
en_US.inbox.generic.client_banned.content.0
`,
				effect: {
					no_permissions: "* Ye shall no longer interact wit' th' app ye scurvy",
					no_auth: "* You may no longer sign in",
					no_ownership: "* Any content ye made shall no longer be found ye scurvy",
					memory_hole: "* Ye won't be seen by other pirates",
					ip_blocked: "* Yar IP be blocked from accessin' all @:common.appName services",
				},
			},
			report_closed: {
				subject: "Report closed",
				content: `
Thank you for notifying us, your report {'#'}{CASE_ID} has been handled.
				`,
			},
		},
	},
	// 404 Messages
	notFound: {
		troll_despair: "We could nah find th' treasure, matey",
		doctor_wtf: "What in Davy Jones's this?",
		pot_friend: "Me be a pot, matey",
	},
};
