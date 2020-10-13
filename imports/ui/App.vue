<template>
	<b-container>
		<!-- <Hello></Hello> -->
		<StudentForm></StudentForm>
	</b-container>
</template>

<script>
// import Hello from './components/Hello.vue';
import StudentForm from './components/StudentForm.vue';
// import StudentList from './components/StudentList.vue';
// import SubjectList from './components/SubjectList.vue';
// import SubjectForm from './components/SubjectForm.vue';

export default {
	components: {
		// Hello,
		StudentForm,
	},
};
</script>

<style>
body {
	font-family: sans-serif;
	padding: 10px;
}
</style>
