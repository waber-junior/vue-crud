<template>
    <main>
       <div class="container mt-5">
            <div class="card">
                <div class="card-header">
                    <h4>Add User</h4>
                </div>
                <div class="card-body">
                    <ul class="alert alert-warning" v-if="Object.keys(this.errorList).length > 0" >
                        <li v-for="(error, index) in this.errorList" :key="index" class="mb-0 ms-3" >
                            {{error}}
                        </li>
                    </ul>

                    <form @submit.prevent="preventDefault">
                        <div class="mb-3">
                            <label for="name">Name</label>
                            <input type="text" id="name" v-model="user.name" class="form-control">
                        </div>
                        <div class="mb-3">
                            <label for="email">Email</label>
                            <input type="text" id="email" v-model="user.email" class="form-control">
                        </div>
                        <div class="mb-3">
                            <label for="password">Password</label>
                            <input type="password" id="password" v-model="user.password" class="form-control">
                        </div>
                        <div class="mb-3">
                            <label for="confirmPassword">Confirm Password</label>
                            <input type="password" id="confirmPassword" v-model="user.confirmPassword" class="form-control">
                        </div>
                        <div class="mb-3">
                            <button type="submit" v-on:click="saveUser" class="btn btn-primary">Save</button>
                        </div>
                    </form>
                </div>
            </div>
       </div>
    </main>
</template>

<script>
    import axios from "axios";

    export default {
        name: 'userCreate',
        data(){
            return{
                user: {
                    name: "",
                    email: "",
                    password: "",
                    confirmPassword: "",
                },
                errorList: ''
            }
        },
        methods: {
            saveUser(){
                // if ()
                let myThis = this;
                axios.post(this.ENDPOINTS.users, this.user)
                    .then(res => {
                        this.user = {
                            name: "",
                            email: "",
                            password: "",
                            confirmPassword: "",
                        };
                    })
                    .catch(function (error){
                        if (error.response.status === 422){
                            console.log(error.response.data)
                            myThis.errorList = error.response.data.errors;
                        }else if (error.request){
                            console.log(error.request)
                        }else{
                            console.log("Error", error.message)
                        }
                    });
            },
            preventDefault(e){
                e.preventDefault();
            }
        }
    }
</script>