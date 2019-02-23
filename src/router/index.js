import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import UserDetail from '@/components/UserDetail'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'Home',
			component: Home
		},
		{
			path: '/:name',
			name: 'UserDetail',
			component: UserDetail
		}
	]
})
