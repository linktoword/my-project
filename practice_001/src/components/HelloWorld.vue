<template>
<div class="hello">

</div>
</template>

<script>
export default {
    name: "HelloWorld",
    props: {
        msg: String
    },
    methods: {
        demo() {
            var hander = {
                mes: "my name 1",
                say: function() {
                    console.log(this.mes);
                }
            };
            var hander2 = {
                mes: "my name2",
                say: function() {
                    console.log(this.mes);
                }
            }
            hander.say.bind(hander2)();
            
        }
    },
    created() {
        this.demo();
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
