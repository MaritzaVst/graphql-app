<template lang="pug">
    div
        v-layout(row='')
            v-flex(xs12='', sm6='', offset-sm3='')
                v-card.card-container
                    v-toolbar(color='cyan', dark='')
                        v-icon(@click="back") arrow_back
                        span Users
                        v-toolbar-title {{ name }}
                        v-spacer
                    v-card-text 
                        v-list(two-line='')
                            template(v-for='(repo, i) in repositories')
                                v-list-tile(:key='i', avatar='', @click='goUserDetail()')
                                    v-list-tile-content
                                        v-list-tile-title {{ repo.name }}
                                        v-list-tile-sub-title {{ repo.description }}
							
</template>

<script>
    import { mapState } from 'vuex'
    export default {
        name: "UserDetail",
        data() {
            return {
                name: ''
            }
        },
        methods: {
            back() {
                this.$router.push('/')
            }
        },
        computed: {
            ...mapState({
                repositories: state => state.repositoriesList
            })
        },
        created() {
            this.name = this.$route.params.name
            this.$store.dispatch('getRepositoriesList', this.name)
        }
    }
</script>

