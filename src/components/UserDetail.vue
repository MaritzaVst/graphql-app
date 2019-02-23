<template lang="pug">
    div
        v-layout(row='')
            v-flex(xs12='', sm6='', offset-sm3='')
                v-card
                    v-toolbar(color='cyan', dark='')
                        v-icon(@click="back") arrow_back
                        v-toolbar-title Detail
                        v-spacer
                    v-card-text 
                        p Description
							
</template>

<script>
    export default {
        name: "UserDetail",
        methods: {
            back() {
                this.$router.push('/')
            }
        }
    }
</script>

