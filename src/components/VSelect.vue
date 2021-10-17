<template>
	<div class="v-select">
		<div class="select-top" @click="onSelect">{{value}} <img src="../assets/img/selectarrow.png" alt="arrow" class="select-arrow" ref="selectArrow"></div>
		<transition name="selectBody">
			<ul class="select-body" v-show="selectBodyShow">
				<li class="select-item" v-for="item in languages" :key="item" @click="selectChoise"> {{item}} </li>
			</ul>
		</transition>
	</div>
</template>
<script>

	export default {
		name: 'VSelect',
		props: {
			languages: {
				type: Array,
				required: true
			}
		},
		data() {
			return {
				value: 'Язык',
				selectBodyShow: false
			}
		},
		methods: {
			onSelect() {
				this.selectBodyShow = !this.selectBodyShow;
				this.$refs.selectArrow.classList.add('active');
			},
			selectChoise(e) {
				let content = e.target.textContent;
				this.value = content;
				this.$emit('selectLanguage', content);
				this.selectBodyShow = false;
				this.$refs.selectArrow.classList.remove('active');
			}
		}
	};

</script>