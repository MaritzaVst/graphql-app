<template lang="pug">
	div
		v-layout(row='')
			v-flex(xs12='', sm6='', offset-sm3='')
				v-card
					v-toolbar(color='cyan', dark='')
						v-toolbar-side-icon
						v-toolbar-title Github Users
						v-spacer
						v-layout
							v-text-field(placeholder="Search Github Users")
							v-btn(icon='')
								v-icon search
					v-list(two-line='')
						template(v-for='(user, i) in users')
							v-list-tile(:key='i', avatar='', @click='goUserDetail(user.userName)')
								v-list-tile-avatar
									img(:src='user.avatarUrl')
								v-list-tile-content
									v-list-tile-title {{ user.name }}
									v-list-tile-sub-title {{ user.userName }}

</template>

<script>
	import { mapState } from 'vuex'

	export default {
		name: 'Home',
		data() {
			return {
				title: "Github Users"
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
		created() {
			this.$store.dispatch('getUsers', {
				name: "maritza",
				count: 10
			})
		}
	}
</script>

