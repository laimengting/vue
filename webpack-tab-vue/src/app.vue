<template>
    <div>
        {{msg}}
    </div>
</template>
<script>
import Tab from "./js/tab.js"
export default {
    name: "Tab",
    data() {
        return {
            msg: "666"
        }
    },
    mounted() {
        this.tab();
    },
    methods: {
        tab() {
            new Tab();
        }
    }
}
</script>
<style>
*{
    padding:0;
    margin:0;
    list-style: none;
}
.wrap{
    width: 350px;
    height: 350px;
    overflow: hidden;
    margin:100px auto;
    border:1px solid #ccc;
}
ol{
    width: 100%;
    display: flex;
}
ol li{
    line-height: 35px;
    flex: 1;
    text-align: center;
    border-bottom: 1px solid #ccc;
}
ul{
    background: pink;
    height: 315px;
}
ul li{
    width: 100%;
    height: 100%;
    text-align: center;
    line-height: 35px;
}
.active{
    background: plum;
}
</style>