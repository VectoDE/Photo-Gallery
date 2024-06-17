<script setup>
import { ref } from 'vue';
import { useAuthStore } from '../stores/auth';

const form = ref({
    email: '',
    password: ''
});

const handleSubmit = () => {
    console.log('Form submitted:', form.value);
    useAuthStore.login();
    alert("Login successful!");
    
    form.value = {
        email: '',
        password: ''
    };
};
</script>

<template>
    <main class="login">
        <h1>Login</h1>
        <form @submit.prevent="handleSubmit" class="login-form">
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" v-model="form.email" required />
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" id="password" v-model="form.password" required />
            </div>
            <button type="submit" class="submit-button">Login</button>
        </form>
    </main>
</template>

<style scoped>
.login {
    padding: 2rem;
    text-align: center;
}

.login-form {
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
