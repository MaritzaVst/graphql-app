<template lang="pug">
	div
		v-layout(row='')
			v-flex(xs12='', sm6='', offset-sm3='')
				v-card
					v-toolbar(color='cyan', dark='')
						v-toolbar-side-icon
						v-toolbar-title Github Users
						v-spacer
						v-btn(icon='')
							v-icon search
					v-list(two-line='')
						template(v-for='(item, index) in items')
							v-subheader
							v-list-tile(:key='item.title', avatar='', @click='')
								v-list-tile-avatar
									img(:src='item.avatar')
								v-list-tile-content
									v-list-tile-title(v-html='item.title')
									v-list-tile-sub-title(v-html='item.subtitle')

</template>

<script>
	export default {
		name: 'Home',
		data() {
			return {
				title: "Github Users",
				items: [
					{
						avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
						title: 'Brunch this weekend?',
						subtitle: "<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
					},
					{
						avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
						title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
						subtitle: "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend."
					},
					{
						avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
						title: 'Oui oui',
						subtitle: "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?"
					},
					{
						avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
						title: 'Birthday gift',
						subtitle: "<span class='text--primary'>Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?"
					},
					{
						avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
						title: 'Recipe to try',
						subtitle: "<span class='text--primary'>Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos."
					}
				]
			}
		}
	}
</script>

