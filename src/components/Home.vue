<template>
    <div>
        <h1>Trade or view your Portfolio</h1>
        <h6>You may save & load your data</h6>
        <h6>click on 'End Day' to begin a new day!</h6>
        <p>Your funds: {{funds |currency}}</p>
    </div>
</template>

<script>
    export default{
        computed: {
            funds(){
                return this.$store.getters.funds;
            }
        }
    }

</script>
