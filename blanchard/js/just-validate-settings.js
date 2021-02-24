document.addEventListener('DOMContentLoaded', () => {
	new JustValidate('.contacts-form', {
		rules: {
			name: {
				required: true,
			},
			tel: {
				required: true,
			},
		},

		messages: {
			name: {
				required: 'Как вас зовут?'
			},
			tel: {
				required: 'Укажите ваш телефон'
			},
		}
	});
});
