export default {
	locale: "Русский (Россия)",
	// Common / Repeated words and phrases
	common: {
		appName: "7TV",
		appHost: "7tv.app",
		supportEmail: "kathy{'@'}7tv.app",
		learnMore: "Узнать больше",
		more: "Ещё",
		retry: "Повторить попытку",
		back: "Назад",
		download: "Скачать | Загрузки\n",
		features: "Особенности",
		comments: "Комментарии",
		search: "Поиск",
		update: "Обновить",
		report: "Жалоба",
		delete: "Удалить",
		cancel: "Отмена",
		submit: "Загрузить",
		activity: "Активность",
		loading: "Загрузка",
		save_changes: "Сохранить изменения",
		reset: "Сбросить",
		object: {
			user: "Пользователь",
			emote_set: "набор смайлов",
			emote: "Смайл",
		},
	},
	// Text that appears on the home page
	home: {
		slogan: "Платформа смайлов, доступная каждому",
		app_description: "Легко управляйте сотнями смайлов для ваших каналов Twitch или YouTube",
		why_app: "Почему @:common.appName{'?'}",
		download_browser: "Расширение для браузера",
		download_mobile: "Мобильные приложения",
		download_misc: "Другие приложения",
		features: {
			emote_sets: {
				name: "Наборы смайлов",
				detail: "Переключайтесь между настраиваемыми наборами смайлов на вашем канале и делитесь ими с другими пользователями.",
			},
			many_emote_slots: {
				name: "Сотни слотов для смайлов",
				detail: "Начните с {0}-ю слотами с возможностью увеличения их количества до {1} бесплатно.",
			},
			channel_emote_names: {
				name: "Уникальные названия смайлов для каждого канала",
				detail: "Не нравится данное автором название смайла? Ничего страшного, вы можете переименовать его индивидуально для своего канала.",
			},
			real_time: {
				name: "Мгновенное обновление",
				detail: "Изменение смайлов на вашем канале происходит мгновенно для всех зрителей. Обновлять страницу не нужно.",
			},
			emote_versions: {
				name: "Версии смайлов",
				detail: "Переключайтесь между разными тематическими вариантами смайлов или обновляйте их до улучшенных версий.",
			},
			userbase: {
				name: "Большое сообщество",
				detail: "@:common.appName обслуживает {0}+ ежедневных уникальных пользователей и имеет библиотеку из более {1} доступных смайлов",
			},
			next_gen: {
				name: "Форматы изображений нового поколения — WEBP и AVIF",
				detail: "Мы используем новые, более оптимизированные форматы изображений для уменьшения использования пропускной способности.",
			},
			source_available: {
				name: "Открытый исходный код",
				detail: "Весь наш код доступен на GitHub с исходной лицензией. Любой может просмотреть его и внести свой вклад.",
			},
		},
		socials: {
			discord: "Присоединяйтесь к @:common.appName в Discord",
			discord_online_count: "{0} сейчас в сети",
			twitter: "Читайте нас в Twitter",
			github: "Внести свой вклад",
		},
		legal: {
			terms: "Условия предоставления услуг",
			privacy: "Политика конфиденциальности",
			unaffiliated: "@:common.appName не связан с Twitch Interactive",
		},
	},
	// Nav Bar
	nav: {
		home: "Главная",
		about: "О сервисе",
		emotes: "Смайлы",
		store: "Подписка",
		admin: "Модерация",
		sign_in: "Войти",
		user_search: "Поиск пользователей",
		locale_contribute: "Перевести @:common.appName{'!'}",
		wip_notice: {
			heading: "Добро пожаловать на новый сайт @:common.appName",
			text1: "Это раннее знакомство с новой версией @:common.appName{'.'}",
			text2: "Узнайте, что нового, и дайте нам отзыв! Обратите внимание, что сайт часто будет меняться, из-за чего могут возникнуть неполадки в его работе.",
		},
	},
	activity: {
		emote_created: "Смайл {T} создан",
		emote_renamed: "Смайл {T} переименован из {O} в {N}",
		emote_listing_approved: "Смайл {T} одобрен для публичного каталога",
		emote_listing_revoked: "Смайл {T} убран из публичного каталога",
		emote_merged: "Смайл {T} объединён в {0}",
		emote_ownership_transferred: "Владение смайлом {T} передано пользователю {U}",
		emote_restored: "Смайл {T} восстановлен",
		emote_updated: "Изменены свойства смайла {T}",
		emote_deleted: "Смайл {T} удалён",
		emote_tags_updated: "Добавлены теги для смайла {T}: {N}",
		emote_processed: "Запущен новый процесс обработки смайла {T}",
		emote_version_created: "Создана версия '{VER}' смайла {T}",
		emote_version_renamed: "Версия '{VER}' смайла {T} была переименована из {1} в {2}",
		emote_version_approved: "Версия '{VER}' смайла {T} была одобрена для публичного каталога",
		emote_version_restored: "Восстановлена версия '{VER}' смайла {T}",
		emote_version_deleted: "Удалена версия '{VER}' смайла {T}",
		emote_flag_added: "Добавлено свойство {FLAG} к смайлу {T}",
		emote_flag_removed: "Удалено свойство {FLAG} смайла {T}",
		user_created: "Пользователь {T} создан",
		user_deleted: "Пользователь {T} удалён",
		user_editor_added: "Пользователь {U} добавлен в качестве редактора",
		user_editor_added_other: "Пользователь {U1} добавлен в качестве редактора {U2}",
		user_editor_updated: "Обновлены права редактирования пользователя {U}",
		user_editor_updated_other: "Обновлены права редактирования пользователя {U1}, редактора {U2}",
		user_editor_removed: "Отозваны права редактирования пользователя {U}",
		user_editor_removed_other: "Отозваны права редактирования пользователя {U1}, редактора {U2}",
		user_banned: "Пользователь {T} заблокирован",
		user_unbanned: "Пользователь {T} разблокирован",
		user_updated: "Изменены свойства пользователя {T}",
		user_sign_in: "{T} входит в систему",
		user_sign_out: "{T} выходит из системы",
		user_forbidden: "Пользователю {T} запрещён доступ к {0}",
		emote_set_created: "Набор {T} создан",
		emote_set_emote_added: "Смайл {AE} добавлен в набор {T}",
		emote_set_emote_removed: "Смайл {AE} удалён из набора {T}",
		emote_set_emote_renamed: "Смайл {AE} переименован из {O} в {N} в наборе {T}",
		emote_set_updated: "Изменены свойства набора {T}",
	},
	// Text that is relevant to emotes
	emote: {
		add: "Добавить",
		author: "Автор",
		created_at: "Создано",
		versions: "Версии",
		preview_loading: "Загрузка превью... {'('}{0}{'/'}{1}{')'}",
		preview_failed: "Не удалось загрузить превью",
		processing: "Обработка смайла — это может занять некоторое время.",
		processing_failed: "При обработке смайла произошла ошибка: {0}",
		use: "Использовать смайл",
		use_menu: "Добавить смайл в...",
		switch_version: "Использовать эту версию",
		in_n_sets: "в {0} наборе | в {0} наборах",
		disable: "Убрать смайл",
		properties: "Свойства",
		new_version: "Новая версия",
		report: "Пожаловаться на смайл",
		Privacy: "Приватность",
		comments: "Комментарии",
		channels: "Каналы",
		common_names: "Другие названия этого смайла",
		usage_stats: "Статистика смайла",
		no_longer_available: "Этот смайл больше недоступен",
		tags: "Теги",
		add_tag: "Добавить тег",
		trending_rank: "#{0} в Трендах",
		avif_no_support:
			"Извините, {BROWSER} не поддерживает формат AVIF. Попробуйте обновиться до новой версии или использовать другой браузер.",
		delete_prompt: {
			heading: "Удалить смайл {0}",
			heading_versions: "Удалить версию '{0}' смайла {1}",
			notice: "Вы уверены, что хотите удалить смайл {0}{'?'}",
			notice_versions: "Вы уверены, что хотите удалить версию {0} смайла {1}{'?'}",
			reason: "Причина удаления",
		},
		properties_prompt: {
			heading: "Редактировать смайл {0}",
		},
		unlisted: {
			heading: "Внимание!",
			warning: "Этого смайла нет в публичном каталоге.",
			warning_flagged: "Этот смайл был убран из публичного каталога по следующим причинам: {FLAG_LIST}",
			notice: "Смайл можно добавить на ваш канал, но мы не можем проверить, безопасно ли его показывать на стриме.",
			notice_flagged:
				"Смайл можно добавить на ваш канал, но мы считаем, что его небезопасно показывать на стриме.",
			show_button: "Показать смайл",
			flag_sexual_content: "Сексуальный или непристойный контент",
			flag_epilepsy: "Быстрое мерцание, может вызвать эпилепсию",
			flag_edgy: "Грубый или неприятный",
			flag_twitch_banned: "Запрещённый на Twitch",
		},
		list: {
			searching: "Поиск",
			emote_count: "Количество смайлов: {0}",
			no_emotes_listed: "Смайлы не найдены",
			fetching_slowly: "Извините, это может занять некоторое время",
			category: {
				name: "Категория",
				top: "Топ",
				trending: "Тренды",
				featured: "Смайл дня",
				global: "Общедоступные",
				new: "Новые",
			},
			filters: {
				case_sensitive: "С учётом регистра",
				exact_match: "Точное совпадение",
				ignore_tags: "Игнорировать теги",
			},
		},
		upload: {
			emote_name: "Название смайла",
			version_name: "Название версии",
			version_description: "Описание версии",
			submit_emote: "Отправить смайл",
			create_emote_version: "Создать версию смайла",
			image_upload: "Загрузка изображения",
			accepted_formats: "Допустимые форматы",
			filetype: "Файл",
			animation: "Анимация",
			transparency: "Прозрачность",
			emote_details: "Информация о смайле",
			version_details: "Описание версии",
			attribution: "Атрибуты",
			original_creator: "Автор оригинала",
			as_child: "Вы создаёте {IS_DIVERGED}-версию смайла {0}. ",
			content_moderation: "Модерация контента",
			half_transparency_tooltip:
				"Пиксели могут быть полностью прозрачными или полностью непрозрачными (частичная прозрачность не поддерживается)",
		},
	},
	emote_set: {
		create: "Новый @:common.object.emote_set",
		select: "Выбрать @:common.object.emote_set",
		explain: {
			section: "Что такое наборы смайлов?",
			hint: "Наборы смайлов — это коллекции смайлов, которые можно добавить на ваш канал или поделиться ими с другими пользователями.",
		},
		no_space: "Слоты заполнены",
		none_selected: "Набор не выбран",
		editing: "Редактирование {0}",
		owner: "Набор смайлов {USER}",
		owned: "Принадлежащий набор смайлов",
		label_renamed: "Переименованный",
		label_conflict: "Конфликт",
		label_default: "По умолчанию",
		label_actor: "Добавлено пользователем {0}",
		// "enabled by <display_name of actor>"
		context_emote_add: "Добавить в набор {SET_NAME}",
		context_emote_remove: "Удалить из набора {SET_NAME}",
		modal: {
			selected_channel_count: "нет выбранных каналов | выбран {0} канал | выбрано {0} каналов",
			create_button: "Создать @:common.object.emote_set",
			rename_in_set: "Переименовать в наборе {0}",
			context_rename: "Изменить название смайла",
			context_set_default: "Назначить по умолчанию",
			context_unset_default: "Отменить назначение по умолчанию",
		},
	},
	// Text that is relevant to users
	user: {
		emote_sets: "Наборы смайлов",
		channel_emotes: "Смайлы канала",
		joined_at: "Пользователь зарегистрирован {0}",
		editors: "Редакторы",
		roles: "Роли",
		connections: "Каналы | Каналы и аккаунты",
		new_connections: "Привязать аккаунты...",
		add_editor: "Добавить редактора",
		editor_modal_heading: "Управление редакторами пользователя {0}",
		editor_modal_user_search: "Кого вы хотите добавить в качестве редактора?",
		editor_modal_user_update: "Редактор",
		no_channel_emotes: "У {0} нет смайлов на канале {1}",
		no_channels: "У {0} нет подключённых каналов!",
		card: {
			view_full_profile: "Открыть профиль",
		},
		settings: {
			button: "Редактировать профиль",
			section_profile: "Профиль",
			username: "Имя пользователя",
			display_name: "Отображаемое имя",
			profile_picture: "Изображение профиля",
			section_badges: "Значки",
			section_paints: "Стили",
			no_badges: "У вас нет ни одного значка",
			no_paints: "У вас нет ни одного стиля",
			sign_out: "Выйти",
			cosmetics_updated: "Стиль обновлён",
			cosmetics_updated_message: "Может потребоваться от 10 до 30 минут, чтобы изменения появились в чате.",
		},
		editor_permissions: {
			modify_emotes: "Изменение смайлов канала",
			use_private_emotes: "Использование приватных смайлов",
			manage_profile: "Управление профилем",
			manage_owned_emotes: "Управление смайлами, принадлежащими пользователю",
			manage_emote_sets: "Управление наборами смайлов",
			manage_billing: "Управление платёжной информацией",
			manage_editors: "Управление редакторами",
			view_messages: "Просмотр сообщений",
		},
	},
	store: {
		subscribe_cta: "Станьте подписчиком @:common.appName!",
		subscribed: "Спасибо за подписку",
		button_self: "Подписаться",
		button_gift: "Подарить подписку",
		billing_information_heading: "Платёжная информация",
		payment_information_heading: "Информация об оплате",
		payment_gift_heading: "Выберите, кому отправить этот подарок",
		payment_methods: "Способы оплаты",
		payment_methods_hint: "Выберите способ оплаты",
		payment_method_paypal: "PayPal",
		payment_method_stripe: "банковской карты",
		payment_popup_cta: "Завершить транзакцию в новом окне",
		pay_button: "Оплатить с помощью {0}",
		product_type_subscription: "Подписка",
		purchase_success: {
			heading: "Покупка совершена успешно",
			text1: "Мы получили ваш платёж, и ваша подписка была активирована.",
			text2: "Благодарим вас за поддержку! Если у вас возникли вопросы, пожалуйста, свяжитесь с нами способами, указанными на этой странице.",
		},
		sub: {
			incentive: "Вы получите...",
			creator_tier: "Особый бонус для создателей контента",
			creator_tier_desc:
				'Улучшите свой план до уровня "Стример" и получите дополнительные плюшки для своего канала',
			feature_t1_badge: "Значок подписчика",
			feature_t1_paints: "Стили имени пользователя",
			feature_t1_animated_profile_picture: "Анимированное изображение профиля",
			feature_t1_zero_width: "Накладывающиеся смайлы",
			feature_t1_global_raffle: "Ежемесячный шанс сделать ваш смайл общедоступным",
			feature_t1_personal_emotes: "Личные смайлы",
			feature_t2_animated_profile_banner: "Анимированный баннер канала",
			feature_t2_animated_offline_screen: "Анимированная оффлайн-заставка",
			feature_t2_extended_sub_emotes: "Смайлы подписчика",
			current_plan: "Ваш план",
			cancel: "Не продлевать",
			update_payment: "Обновить способ оплаты",
			reactivate: "Возобновить подписку",
			cancel_prompt: "Вы уверены, что хотите отменить подписку?",
			state_heading: "Ваша подписка",
			state_badge_progress: "Прогресс значка",
			state_paints: "Стили",
			state_anniversary:
				"Сегодня юбилей вашей подписки | Ваш следующий юбилей наступит через {0} день | Ваш следующий юбилей наступит через {0} дн.",
			state_age: "Вы подписались сегодня | Вы подписаны {0} день | Вы подписаны {0} дн.",
			state_ending:
				"Ваша подписка истекает сегодня | Ваша подписка истечёт через {0} день | Ваша подписка истечёт через {0} дн.",
			state_collection_heading: "Коллекция",
			state_paints_heading: "Доступные стили ({0})",
			state_raffle: "Розыгрыш общедоступного смайла",
			state_leaderboards: "Лидеры по подаркам",
			raffle: {
				starts_at: "{0} дн.",
				starts_at_hint: "Следующий розыгрыш начнётся {0}",
			},
		},
	},
	// Text that is relating to the reporting system
	reporting: {
		report: "Пожаловаться",
		emote_reason: {
			i_made_this: "Я создатель этого смайла, но он был загружен кем-то другим",
			duplicate: "Это копия существующего смайла",
			pornographic: "Этот смайл содержит порнографический или излишне откровенный контент",
			violence_gore: "Этот смайл содержит чрезмерное насилие или жестокость",
			i_appear_there: "На смайле изображён я, и мне это не нравится",
			offensive: "Я считаю этот смайл оскорбительным",
			other: "Что-то другое",
		},
		uncategorized_prompt: "Что случилось?",
		details: "Подробности (дополнительная информация и/или доказательства для вашей жалобы)",
		success: "Жалоба успешно отправлена",
		notify: "Вы будете уведомлены через сообщения, когда ваша жалоба будет обработана или потребуется дополнительная информация.",
		complete_step_one: "Продолжить",
		abuse_notice: "Злоупотребление жалобами может привести к лишению вас доступа к ним.",
	},
	// Text that is relevant to the inbox
	inbox: {
		inbox: "Входящие",
		tabs: {
			all: "Все сообщения",
			unread: "Непрочитанные",
			important: "Важные",
		},
		unread_tag: "Непрочитанные",
		// System inbox messages
		generic: {
			emote_listed: {
				subject: "Смайл одобрен для публикации",
				content: `
# Ваш смайл "{EMOTE_NAME}" был одобрен для публикации \n
Теперь он доступен в публичном Каталоге Смайлов и будет отображаться на @:common.appHost{'.'}
`,
			},
			emote_not_listed: {
				subject: "Смайлу отказано в публикации",
				content: `
# Ваш смайл "{EMOTE_NAME}" был отклонен
Он не будет доступен в публичном Каталоге Смайлов или отображаться на @:common.appHost, 
но останется доступным для пользователей по ссылке.
`,
			},
			emote_ownership_claim_request: {
				subject: "Предложение стать владельцем смайла",
				content: `
## {OWNER_DISPLAY_NAME} хочет, чтобы вы стали владельцем смайла '{EMOTE_NAME}'

[Посмотреть смайл]({EMOTE_URL})

**[Принять запрос]({EMOTE_CLAIM_URL})** | [Отклонить запрос]({EMOTE_DECLINE_URL})
				`,
			},
			client_banned: {
				subject: "Вы заблокированы",
				reason: {
					pornographic_content: "",
				},
				content: `
# Аккаунт заблокирован
Ваш доступ к @:common.appName ограничен.<br/><br/>
### Причина:
{BAN_REASON} <br/><br/>
### Применены ограничения<br/>
{EFFECT_NO_PERMISSIONS}
{EFFECT_NO_AUTH}
{EFFECT_NO_OWNERSHIP}
{EFFECT_MEMORY_HOLE}

<br/>Срок данного решения истекает **{BAN_EXPIRE_AT}**.
_Если вы считаете, что это ошибка, пожалуйста, напишите нам на почту @:common.supportEmail{'.'}_
`,
				effect: {
					no_permissions: "* Вы больше не можете взаимодействовать с сервисом",
					no_auth: "* Вы больше не можете войти",
					no_ownership: "* Любой созданный вами контент будет недоступен",
					memory_hole: "* Вы не будете видны другим пользователям",
					ip_blocked: "* Ваш IP-адрес заблокирован на всех сервисах @:common.appName",
				},
			},
			report_closed: {
				subject: "Жалоба закрыта",
				content: `
Спасибо за уведомление, ваша жалоба {'#'}{CASE_ID} рассмотрена.`,
			},
		},
	},
	// 404 Messages
	notFound: {
		troll_despair: "Мы не смогли найти это",
		doctor_wtf: "Это чё за херь?",
		pot_friend: "Я — горшочек, друг",
	},
};
