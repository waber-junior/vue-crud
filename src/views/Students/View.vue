<template>
    <main>
        <div class="card">
            <div class="card-header">
                <h4>
                    Students 
                    <RouterLink to="/student/create" class="btn btn-primary float-end">Add Student</RouterLink>
                </h4>
            </div>
            <div class="card-body">
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Course</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Created At</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>

                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </main>
</template>

<script>
    import axios from "axios";

    export default {
        name: 'students',
        data(){
            return{
                students: []
            }
        },
        mounted() {
            console.log(this.ENDPOINTS.students)
        },
        methods: {
            getStudents(){
                axios.get().then(res => {

                });
            }
        }
    }
</script>