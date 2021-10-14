<template>
	<div class="form-container">
		<h2 class="registration-title"> Регистрация </h2>
		<div class="enter-box">
			<span class="enter-span">Уже есть аккаунт</span>
			<a href="#" class="enter-link">Войти</a>
		</div>
		<form action="#" class="form">
			<label for="name" class="label">
				<span class="label-span">Имя</span>
				<input type="text" class="input" id="name" placeholder="Введите Ваше имя">
			</label>
			<label for="email" class="label">
				<span class="label-span">Email</span>
				<input type="email" class="input" id="email" placeholder="Введите ваш email">
			</label>
			<label for="phone" class="label">
				<span class="label-span">Номер телефона</span>
				<input type="tel" class="input" id="phone" placeholder="Введите номер телефона">
			</label>
			<label for="accept" @click="isChecked = !isChecked" class="checkbox-label">
				<input type="checkbox" class="checkbox"> <span class="fake" :class="{ checked: isChecked}"></span> Принимаю условия использования {{isChecked}}
			</label>
			<button type="button" class="form-btn">Зарегестрироваться</button>
		</form>
	</div>
</template>

<script>

	export default {
		name: 'VForm',
		data() {
			return {
				isChecked: false,
			}
		}
	};

</script>