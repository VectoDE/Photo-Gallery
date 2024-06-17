<script setup>
import { ref, watch, RouterLink } from 'vue';

const username = ref('');
const isLoggedIn = ref(false);
let authToken = '';

async function fetchUsername() {
    try {
        const response = await fetch(`http://localhost:8080/api/user/${username.value}`, {
            headers: {
                Authorization: `Bearer ${authToken}`,
            },
        });
        const data = await response.json();
        if (response.ok) {
            username.value = data.username;
            isLoggedIn.value = true;
        } else {
            isLoggedIn.value = false;
            console.error('Failed to fetch username:', data.message);
        }
    } catch (error) {
        isLoggedIn.value = false;
        console.error('Error fetching username:', error);
    }
}

watch(isLoggedIn, () => {
    if (isLoggedIn.value) {
        fetchUsername();
    }
});

const logout = async () => {
    try {
        const response = await fetch(`http://localhost:8080/api/auth/logout`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${authToken}`,
            },
        });
        if (response.ok) {
            isLoggedIn.value = false;
            username.value = '';
            authToken = '';
        } else {
            console.error('Logout failed:', response.statusText);
        }
    } catch (error) {
        console.error('Logout failed:', error.message);
    }
};
</script>

<template>
    <nav>
        <ul class="nav-links">
            <li><RouterLink to="/">Home</RouterLink></li>
            <li><RouterLink to="/about">About</RouterLink></li>
            <li v-if="!isLoggedIn"><RouterLink to="/login">Login</RouterLink></li>
            <li v-if="!isLoggedIn"><RouterLink to="/register">Register</RouterLink></li>
            <li v-if="isLoggedIn" class="dropdown">
                <RouterLink to="#">{{ username }}</RouterLink>
                <ul class="dropdown-content">
                    <li><RouterLink to="/gallery">Gallery</RouterLink></li>
                    <li><RouterLink to="/profile">Profile</RouterLink></li>
                    <li @click="logout">Logout</li>
                </ul>
            </li>
        </ul>
    </nav>
</template>

<style scoped>
nav {
    width: 100%;
    text-align: center;
    margin-top: 2rem;
}

.nav-links {
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: center;
    gap: 1rem;
}

.nav-links li {
    display: inline;
}

.nav-links a {
    text-decoration: none;
    padding: 0.5rem 1rem;
    color: #000;
    transition: background-color 0.3s;
}

.nav-links a:hover {
    background-color: #ddd;
}

.nav-links .dropdown {
    position: relative;
    display: inline-block;
}

.nav-links .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    margin: 0;
    padding: 0;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
    left: 50%;
    transform: translateX(-50%);
}

.nav-links .dropdown:hover .dropdown-content {
    display: block;
}

.nav-links .dropdown-content li {
    display: block;
}

.nav-links .dropdown-content a {
    display: block;
    padding: 0.5rem 1rem;
    color: #000;
}

.nav-links .dropdown-content a:hover {
    background-color: #ddd;
}
</style>
