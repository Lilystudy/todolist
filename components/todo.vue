<template>
  <div class="main">
    <h1>{{title}}</h1>
    <input type="text" v-model="todolist" @keyup.13="addList"/>
    <ul>
      <li v-for="(item,index) in items" :class="{udLine:item.isOver}" @click="item.isOver=!item.isOver">
        {{item.workName}}
        <button @click="removeList(index)">×</button>
      </li>
    </ul>
  </div>
</template>
<script>
  import Store from '../store.js'

  export default {
    name: 'detailsText',
    data () {
      return {
        title: 'To do list example!',
        todolist: '',
        items: Store.fetch() == null ? [] : Store.fetch(),
        isOver: false
      }
    },
    watch: {
      items: {
        handler: function (items) {
          Store.save(items)
        },
        deep: true
      }
    },
    methods: {
      addList: function () {
        if (this.todolist === '') {
          alert('请输入内容')
        } else {
          this.items.push({
            workName: this.todolist,
            isOver: false
          })
        }
        this.todolist = ''
      },
      removeList: function (index) {
        this.items.splice(index, 1)
      }
    }
  }
</script>
<style>
.udLine{color:#f00}
  ul li{line-height: 28px;  font-family: "Microsoft YaHei UI";}
</style>
