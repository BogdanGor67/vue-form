<template>
	<div class="form-container">
		<h2 class="registration-title"> Регистрация </h2>
		<div class="enter-box">
			<span class="enter-span">Уже есть аккаунт?</span>
			<a href="#" class="enter-link">Войти</a>
		</div>
		<form action="#" class="form">
			<label for="name" class="label">
				<span class="label-span">Имя</span>
				<input type="text" class="input" v-model.lazy="name" id="name" placeholder="Введите Ваше имя">
				<span class="wrong-value" ref="nameError">Введено некоректное значение</span>
			</label>
			<label for="email" class="label">
				<span class="label-span">Email</span>
				<input type="email" class="input" v-model.lazy="email" id="email" placeholder="Введите ваш email">
				<span class="wrong-value" ref="emailError">Введено некоректное значение</span>
			</label>
			<label for="phone" class="label">
				<span class="label-span">Номер телефона</span>
				<input type="tel" class="input" v-model.lazy="phone" id="phone" placeholder="Введите номер телефона">
				<span class="wrong-value" ref="phoneError">Введено некоректное значение</span>
			</label>
			<v-select :languages="languages" @selectLanguage="selectLang" />
			<label for="accept" @click="userData.isChecked = !userData.isChecked" class="checkbox-label">
				<input type="checkbox" class="checkbox"> <span class="fake" :class="{ checked: userData.isChecked}"></span> Принимаю <a href="#" class="enter-link enter-link--second">условия</a> использования
			</label>
			<button type="button" :disabled="!formReady" class="form-btn">Зарегестрироваться</button>
		</form>
	</div>
</template>

<script>

	import VSelect from '@/components/VSelect';

	export default {
		name: 'VForm',
		components: {
			VSelect
		},
		data() {
			return {
				languages: ['Русский', 'Английский', 'Китайский', 'Испанский'],
				language: '',
				name: '',
				email: '',
				phone: '',
				userData: {
					isChecked: false,
					correctName: false,
					correctEmail: false,
					correctPhone: false
				},
				nameRegExp: /^([а-яё\s]+|[a-z\s]+)$/iu,
				emailRegExp: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
				phoneRegExp: /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){11}(\s*)?$/,

			}
		},
		computed: {
			formReady() {
				return Object.values(this.userData).every(item => item === true);
			}
		},
		watch: {
			name() {
				if (this.nameRegExp.test(this.name) && this.name !== '') {
					this.userData.correctName = true;
					this.$refs.nameError.classList.remove('activated');
				} else if (!this.nameRegExp.test(this.name) || this.name === '') {
					this.userData.correctName = false;
					this.$refs.nameError.classList.add('activated');
				}
			},
			email() {
				if (this.emailRegExp.test(this.email)) {
					this.userData.correctEmail = true;
					this.$refs.emailError.classList.remove('activated');
				} else if (!this.emailRegExp.test(this.email)) {
					this.userData.correctEmail = false;
					this.$refs.emailError.classList.add('activated');
				}
			},
			phone() {
				if (this.phoneRegExp.test(this.phone)) {
					this.userData.correctPhone = true;
					this.$refs.phoneError.classList.remove('activated');
				} else if (!this.phoneRegExp.test(this.phone)) {
					this.userData.correctPhone = false;
					this.$refs.phoneError.classList.add('activated');
				}
			}
		},
		methods: {
			selectLang(value) {
				this.language = value;
			}
		}
	};

</script>