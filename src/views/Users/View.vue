<template>
    <main>
        <div class="container mt-5">
            <div class="card">
                <div class="card-header">
                    <h4>
                        Users
                        <RouterLink to="/users/create" class="btn btn-success float-end">Add User</RouterLink>
                    </h4>
                </div>
                <div class="card-body">
                    <table class="table table-bordered">
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Created At</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody v-if="this.users.length > 0">
                        <tr v-for="(user, index) in this.users" :key="index">
                            <td>{{user.id}}</td>
                            <td>{{user.name}}</td>
                            <td>{{user.email}}</td>
                            <td>{{user.created_at}}</td>
                            <td>
                                <RouterLink to="/" class="btn btn-primary me-3">Edit</RouterLink>
                                <button class="btn btn-danger">Delete</button>
                            </td>
                        </tr>
                        </tbody>
                        <tbody v-else>
                        <tr>
                            <td colspan="5" class="text-center">Loading...</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
    import axios from "axios";

    export default {
        name: 'users',
        data(){
            return{
                users: []
            }
        },
        mounted() {
            this.getUsers();
        },
        methods: {
            getUsers(){
                axios.get(this.ENDPOINTS.users).then(res => {
                    this.users = res.data.data.data;
                });
            }
        }
    }
</script>