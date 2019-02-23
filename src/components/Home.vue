<template lang="pug">
	div
		v-layout(row='')
			v-flex(xs12='', sm6='', offset-sm3='')
				v-card.card-container
					v-toolbar(color='cyan', dark='').card__header
						div
							v-toolbar-title Github Users
						v-layout.search-block
							v-text-field(v-model="search" placeholder="Search Github Users" prepend-inner-icon="search")
					v-card-text.list-container 
						v-list(v-if="dataExist" two-line='')
							template(v-for='(user, i) in users')
								v-list-tile(:key='i', avatar='', @click='goUserDetail(user.userName)')
									v-list-tile-avatar
										img(:src='user.avatarUrl')
									v-list-tile-content
										v-list-tile-title {{ user.name }}, {{ user.location }}
										v-list-tile-sub-title {{ user.userName }}
								v-divider
						div.not-found(v-else)
							p We couldn’t find any users matching "{{ search }}"
							img(src="../assets/images/no-data.jpg")

</template>

<script>
	import { mapState } from 'vuex'

	export default {
		name: 'Home',
		data() {
			return {
				title: "Github Users",
				search: '',
				itemsPerPage: 10,
				dataExist: true
			}
		},
		methods: {
			goUserDetail(userName) {
				this.$router.push(userName)
			}
		},
		computed: {
			...mapState({
				users: state => state.usersList
			})
		},
		watch: {
			async search(val) {
				if(val.length >= 3) {
					try {
						await this.$store.dispatch('getUsers', {
							name: String(val),
							count: this.itemsPerPage 
						})
						this.dataExist = this.users.length
					} catch(error) {
						console.log(error)
					}
				}
			}
		},
		created() {
			
		}
	}
</script>

<style lang="sass">
	.card__header
		.v-toolbar__content
			height: 130px !important
			flex-direction: column;
			padding: 30px 30px 20px
			align-items: baseline;
			display: flex;
		.v-toolbar__title
			font-size: 24px;
			font-weight: 600;
		
	.search-block
		align-items: center
		width: 100%
		padding: 0
		.v-input__slot
			margin-bottom: 0
		input 
			font-size: 14px
	.search-block__btn 
		margin-right: 0
		padding-top: 5px
	.not-found 
		padding-top: 40px
		padding-bottom: 40px
		img 
			width: 300px
		p 
			font-size: 16px

	.list-container 
		min-height: calc(100vh - 180px)
		display: flex
		align-items: center
		justify-content: center
		overflow: auto
		.v-list 
			align-self: flex-start
			width: 100%
			padding-top: 0
</style> 
