<template lang="pug">
	div
		v-layout(row='')
			v-flex(xs12='', sm6='', offset-sm3='')
				v-card.card-container
					v-toolbar(color='cyan', dark='').card__header
						div
							v-toolbar-title Github Users
						v-layout.search-block
							v-text-field(v-model="search" @keyup.native="searchData" placeholder="Search Github Users" prepend-inner-icon="search")
					v-card-text.list-container 
						v-list(v-if="dataExist" two-line='')
							template(v-for='(user, i) in users') 
								v-list-tile(:key='i', avatar='', @click='goUserDetail(user.userName)').user
									v-list-tile-avatar
										img(v-if="user.avatarUrl" :src='user.avatarUrl' alt="User image")
										img(v-else src='../assets/images/default-img.png' alt="User image")
									v-list-tile-content
										v-list-tile-title 
											Highlighter(class="my-highlight" :searchWords="keyword" :textToHighlight="user.userName || ''")
											span.user__location(v-if="user.location")
												| ,
												v-icon place  
												|  {{ user.location }}
										v-list-tile-sub-title 
											Highlighter(class="my-highlight" :searchWords="keyword" :textToHighlight="user.name || ''")
								v-divider
						div.not-found(v-else)
							p We couldn’t find any users matching "{{ search }}"
							img(src="../assets/images/no-data.jpg" alt="No data image")
						loader(v-if="loading")
					//- .text-xs-center.pagination-container(v-if="users.length")
					//- 	v-pagination(v-model='page', :length='length', :total-visible='4' @previous="changePage(false)" @next="changePage(true)")

</template>

<script>
	import { mapState } from 'vuex'
	import Highlighter from 'vue-highlight-words'
	import NoSSR from 'vue-no-ssr'

	export default {
		name: 'Home',
		components: {
			Highlighter
		},
		data() {
			return {
				title: "Github Users",
				search: '',
				itemsPerPage: 10,
				dataExist: true,
				loading: false,
				page: 1,
				overWriteStyle: {
					color: 'blue'
				},
				timeout: null
			}
		},
		methods: {
			goUserDetail(userName) {
				this.$router.push({
					path:`/${userName}`,
					query: {
						search: this.search
					}
				})
			},
			getUsers(keyword) {
				this.loading = true
				
				clearTimeout(this.timeout)
				this.timeout = setTimeout( async () => {
					try {
						await this.$store.dispatch('getUsers', {
							name: String(keyword),
							count: this.itemsPerPage 
						})
						this.dataExist = Boolean(this.users.length)
					} catch(error) {
						console.log('error', error)
					}
					this.loading = false
				}, 200)
			},
			searchData() {
				if(!this.search.length) {
					this.dataExist = true
					this.$store.commit('setUsersList', [])
					return
				}
				this.getUsers(this.search)
			},
		},
		computed: {
			...mapState({
				users: state => state.usersList,
				totalPages: state => state.total,
				startCursor: state => state.startCursor,
				endCursor: state => state.endCursor,
			}),
			length() {
				if(this.totalPages) return Math.ceil(this.totalPages / this.itemsPerPage)
				else return 1
			},
			keyword() {
				let search = this.search.trim()
				return [ search ]
			}
		},
		watch: {
			search() {
				this.$router.push({
					query: {
						search: this.search
					}
				})
			}
		},
		created() {
			const keyword = this.$route.query.search
			if(keyword) {
				this.getUsers(keyword)
				this.search = keyword
			}
		}
	}
</script>

<style lang="sass">
	.card__header
		.v-toolbar__content
			height: 160px !important
			flex-direction: column
			padding: 30px 30px 20px
			align-items: baseline
			display: flex
		.v-toolbar__title
			font-size: 28px
			font-weight: 600
		
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

	.user__location
		i.v-icon
			color: black
			font-size: 16px
			position: relative
			top: -3px
			margin-left: 5px
</style> 
