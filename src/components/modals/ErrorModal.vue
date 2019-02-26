<template lang="pug">
    sweet-modal(ref="alertModal" icon="warning").error-modal
        h1 {{ errorType }}
        p {{ message }}
</template>


<script>
import { SweetModal } from 'sweet-modal-vue'

export default {
    props: ['errorMessage'],
    components: {
        SweetModal
    }, 
    data() {
        return {
            message: '',
            errorType: ''
        }
    },
    methods: {
        open(error) {
            const { graphQLErrors, networkError } = error
            if(networkError) {
                let { name, response, statusCode, result } = networkError
                this.errorType = name
                this.message = result.message
            } else {
                this.errorType = "GraphQL Error"

                if(Array.isArray(graphQLErrors)) this.message = graphQLErrors.map(item => item.message).join("\r\n") 
                else this.message = graphQLErrors.message
            }
            this.$refs.alertModal.open()
        }
    }
}
</script>

<style lang="sass" scope>
    .error-modal
        .sweet-modal-icon
            width: 60px
            height: 60px
            margin-bottom: 20px !important
            .sweet-modal-body
                height: 30px !important
        .sweet-content-content
            p 
                white-space: pre-line
</style>
