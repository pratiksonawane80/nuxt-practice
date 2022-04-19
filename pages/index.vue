<template>
  <div class="container">
    <navbar />

    <h1 class="header">To do List</h1>

    <table class="table">
      <tr>
        <td>Sr No</td>
        <td>Task</td>
        <td>Select</td>
      </tr>
      <tr v-for="(task, index) in tasks" :key="index">
        <td>{{ index + 1 }}</td>
        <td>{{ task }}</td>
        <td>
          <button @click="deleteRow(index)" class="delBtn">Delete</button>
        </td>
      </tr>
      <tr>
        <td>
          <input type="text" v-model="msg" />
        </td>
        <td>
          <button @click="addRow()">Add</button>
        </td>
        <td></td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "IndexPage",

  data() {
    return {
      tasks: ["Make proj"],
      counter: 1,
      msg: "",
    };
  },

  methods: {
    addRow() {
      this.counter++;
      this.tasks.push(this.msg);
    },
    deleteRow(index) {
      this.tasks.splice(index, 1);
    },
  },
};
</script>

<style>
/* .table {
  border: 1px solid;
  margin: auto;
}

table td {
  align-content: center;
  padding: 10px;
  font-size: 18px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
} */

table { 
	width: 750px; 
	border-collapse: collapse; 
	margin:50px auto;
	}

/* Zebra striping */
tr:nth-of-type(odd) { 
	background: #eee; 
	}

th { 
	background: #3498db; 
	color: white; 
	font-weight: bold; 
	}

td, th { 
	padding: 10px; 
	border: 1px solid #ccc; 
	text-align: left; 
	font-size: 18px;
	}

/* 
Max width before this PARTICULAR table gets nasty
This query will take effect for any screen smaller than 760px
and also iPads specifically.
*/
@media 
only screen and (max-width: 760px),
(min-device-width: 768px) and (max-device-width: 1024px)  {

	table { 
	  	width: 100%; 
	}
	
	tr { border: 1px solid #ccc; }
	
	td { 
		border: none;
		border-bottom: 1px solid #eee; 
		position: relative;
		padding-left: 50%; 
	}

}

.delBtn {
  background-color: red;
  color: white;
}

.header {
  width: 4rem;
  margin: auto;
}

.container {
  max-width: 800px;
  margin: 2rem auto;
  overflow: hidden;
  padding: 1rem 2rem;
  background: #fff;
}
</style>
