<template lang="pug">
    div.repositories
        v-layout(row='')
            v-flex(xs12='', sm6='', offset-sm3='')
                v-card.card-container
                    v-toolbar(color='cyan', dark='')
                        .back
                            v-icon(@click="back").back__icon arrow_back
                            span.back__title Users
                        v-toolbar-title {{ name }}
                    v-card-text.list-container 
                        v-list(two-line='' v-if="!loading && repositoriesExist")
                            template(v-for='(repo, i) in repositories')
                                v-list-tile(:key='i')
                                    v-list-tile-content
                                        v-list-tile-title {{ repo.name }}
                                        v-list-tile-sub-title {{ repo.description }}
                                    .counter-block
                                        p PR count: {{ repo.pullRequests.totalCount }}
                                v-divider
                        div.no-repositories(v-if="!loading && !repositoriesExist")
                            p {{ noRepositoriesMessage }}
                            img(src="../assets/images/no-repositories.png")
                        loader(v-if="loading")
							
</template>

<script>
    import { mapState } from 'vuex'
    export default {
        name: "UserDetail",
        data() {
            return {
                name: '',
                loading: false,
                noRepositoriesMessage: "The user doesn't have repositories"
            }
        },
        methods: {
            back() {
                this.$router.push({
                    path: '/',
                    query: {
                        search: this.$route.query.search
                    }
                })
            }
        },
        computed: {
            ...mapState({
                repositories: state => state.repositoriesList 
            }),
            repositoriesExist() {
                return this.repositories ? Boolean(this.repositories.length) : false
            }
        },
        async created() {
            this.name = this.$route.params.name
            this.loading = true
            try {
                await this.$store.dispatch('getRepositoriesList', this.name)
            } catch(error) {
                console.log(error)
            }
            this.loading = false
        }
    }
</script>

<style lang="sass">
    .repositories 
        .v-toolbar__content 
            height: 60px !important
            justify-content: center
            .back 
                position: absolute
                left: 0
                padding-left: 20px
            .back__icon
                font-size: 20px 
            .back__title 
                font-size: 15px
                padding-left: 5px
        .counter-block 
            text-align: right
            width: 120px
            min-width: 120px
            font-size: 13px    
        .no-repositories
            img 
                width: 200px
</style>
