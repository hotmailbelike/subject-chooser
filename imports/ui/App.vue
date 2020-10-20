<template>
	<b-container class="container mt-4">
		<!-- <Hello></Hello> -->
		<h3 v-b-toggle.collapse-student-form>Student Form</h3>

		<b-collapse visible id="collapse-student-form">
			<b-card>
				<h4>Enter Student Details</h4>

				<StudentForm></StudentForm
			></b-card>
		</b-collapse>
		<br />
		<hr />
		<h3 v-b-toggle.collapse-subject-form>Subject List</h3>
		<b-collapse id="collapse-subject-form">
			<b-card
				><h4>Enter Subject Details</h4>
				<SubjectForm></SubjectForm
			></b-card>
		</b-collapse>
		<br />
		<hr />
		<h3 v-b-toggle.collapse-student-list>Student List</h3>
		<b-collapse id="collapse-student-list"
			><b-card
				><h4>Student List</h4>
				<StudentList></StudentList></b-card
		></b-collapse>
		<br />
		<hr />
		<h3 v-b-toggle.collapse-subject-list>Subject List</h3>
		<b-collapse id="collapse-subject-list"
			><b-card
				><h4>Subject List</h4>
				<SubjectList></SubjectList></b-card
		></b-collapse>
	</b-container>
</template>

<script>
// import Hello from './components/Hello.vue';
import StudentForm from './components/StudentForm.vue';
import StudentList from './components/StudentList.vue';
import SubjectList from './components/SubjectList.vue';
import SubjectForm from './components/SubjectForm.vue';

export default {
	components: {
		// Hello,
		StudentForm,
		SubjectForm,
		StudentList,
		SubjectList,
	},
};
</script>

<style>
h3,
h4 {
	margin-bottom: 1rem;
}
body {
	font-family: sans-serif;
	padding: 10px;
}
.container {
	margin-bottom: 10rem;
}
</style>
