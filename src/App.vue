<template lang="pug">
	#app
		v-app 
			v-content
				v-container
					router-view
</template>

<script>
	export default {
		name: 'App',
		created() {
		}
	}
</script>

<style <style lang="sass">
	#app 
		font-family: 'Avenir', Helvetica, Arial, sans-serif
		-webkit-font-smoothing: antialiased
		-moz-osx-font-smoothing: grayscale
		text-align: center
		color: #2c3e50
		.card-container 
			min-height: calc(100vh - 50px)
</style>
