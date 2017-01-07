<template>
    <div class="col-md-4">
        <div class="panel panel-info">
            <div class="panel-heading">
                <h3 class="panel-title">
                    {{stock.name}}
                    <small>(Price:{{stock.price}})</small>
                </h3>
            </div>
            <div class="panel-body">
                <div class="pull-left">
                    <input type="number"
                           class="form-control"
                           v-model="quantity"
                           :class="{danger:insufficientFunds}"
                    >

                </div>

                <div class="pull-right">
                    <button
                            class="btn btn-primary"
                            @click="buyStock"
                            :disabled="quantity<=0 || !isNumber || insufficientFunds"
                    >{{ insufficientFunds ? `Too much` : 'Buy'}}
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
    .danger{
        border: 1px solid red;
    }
</style>
<script>
    export default{
        props: ['stock'],
        data(){
            return {
                quantity: 0
            }
        },
        computed:{
            isNumber(){
                return /^\d+$/.test(this.quantity);
            },
            funds(){
                return this.$store.getters.funds;
            },
            insufficientFunds(){
                return this.quantity * this.stock.price >this.funds;
            }

        },
        methods: {
            buyStock(){
                const order = {
                    stockId: this.stock.id,
                    stockPrice: parseInt(this.stock.price),
                    quantity: parseInt( this.quantity)
                };
                this.$store.dispatch('buyStock',order);
                console.log(order);
                this.quantity = 0;
            }
        }
    }
</script>