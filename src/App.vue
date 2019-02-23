<template lang="pug">
	#app
		img(src="./assets/logo.png")
		h1 {{ title }}
		router-view
</template>

<script>
	export default {
		name: 'App',
		data() {
			return {
				title: "GraphQL App"
			}
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
		margin-top: 180px

</style>
