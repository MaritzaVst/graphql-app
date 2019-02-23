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
                    v-card-text 
                        v-list(two-line='')
                            template(v-for='(repo, i) in repositories')
                                v-list-tile(:key='i', avatar='', @click='goUserDetail()')
                                    v-list-tile-content
                                        v-list-tile-title {{ repo.name }}
                                        v-list-tile-sub-title {{ repo.description }}
                                v-divider
							
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
</style>
