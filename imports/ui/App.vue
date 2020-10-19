<template>
	<b-container class="container mt-4">
		<!-- <Hello></Hello> -->
		<h3>Enter Student Details</h3>
		<StudentForm></StudentForm>
		<br />
		<hr />
		<h3>Enter Subject Details</h3>
		<SubjectForm></SubjectForm>
		<br />
		<hr />
		<h3>Student List</h3>
		<StudentList></StudentList>
	</b-container>
</template>

<script>
// import Hello from './components/Hello.vue';
import StudentForm from './components/StudentForm.vue';
import StudentList from './components/StudentList.vue';
// import SubjectList from './components/SubjectList.vue';
import SubjectForm from './components/SubjectForm.vue';

export default {
	components: {
		// Hello,
		StudentForm,
		SubjectForm,
		StudentList,
	},
};
</script>

<style>
body {
	font-family: sans-serif;
	padding: 10px;
}
.container {
	margin-bottom: 10rem;
}
</style>
