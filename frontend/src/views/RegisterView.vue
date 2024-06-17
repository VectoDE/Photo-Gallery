<script setup>
import { ref } from 'vue';

const form = ref({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
});

const handleSubmit = () => {
    if (form.value.password !== form.value.confirmPassword) {
        alert("Passwords do not match");
        return;
    }

    console.log('Form submitted:', form.value);
    alert("Registration successful!");
    
    form.value = {
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    };
};
</script>

<template>
    <main class="register">
        <h1>Register</h1>
        <form @submit.prevent="handleSubmit" class="register-form">
            <div class="form-group">
                <label for="username">Username</label>
                <input type="text" id="username" v-model="form.username" required />
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" v-model="form.email" required />
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" id="password" v-model="form.password" required />
            </div>
            <div class="form-group">
                <label for="confirmPassword">Confirm Password</label>
                <input type="password" id="confirmPassword" v-model="form.confirmPassword" required />
            </div>
            <button type="submit" class="submit-button">Register</button>
        </form>
    </main>
</template>

<style scoped>
.register {
    padding: 2rem;
    text-align: center;
}

.register-form {
    max-width: 400px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.form-group {
    display: flex;
    flex-direction: column;
    text-align: left;
}

.form-group label {
    margin-bottom: 0.5rem;
    font-weight: bold;
}

.form-group input {
    padding: 0.5rem;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
}

.submit-button {
    padding: 0.5rem 1rem;
    font-size: 1rem;
    border: none;
    border-radius: 4px;
    background-color: #007bff;
    color: #fff;
    cursor: pointer;
}

.submit-button:hover {
    background-color: #0056b3;
}
</style>