<script setup>
import { ref } from 'vue';

const user = ref({
    name: 'Tim Hauke',
    email: 'tim.hauke@example.com',
    bio: 'Photography enthusiast. Loves capturing nature and urban landscapes.',
    profilePicture: 'https://via.placeholder.com/150'
});

const photos = ref([
    { id: 1, title: 'Sunset Over the Mountains', url: 'https://via.placeholder.com/300', description: 'A beautiful sunset over the mountains.' },
    { id: 2, title: 'City Skyline', url: 'https://via.placeholder.com/300', description: 'The city skyline during the evening.' },
    { id: 3, title: 'Forest Path', url: 'https://via.placeholder.com/300', description: 'A serene path through the forest.' },
]);
</script>

<template>
    <main class="profile">
        <section class="profile-header">
            <img :src="user.profilePicture" :alt="user.name" class="profile-picture" />
            <div class="profile-info">
                <h1>{{ user.name }}</h1>
                <p>Email: {{ user.email }}</p>
                <p>{{ user.bio }}</p>
            </div>
        </section>

        <section class="profile-gallery">
            <h2>{{ user.name }}'s Photos</h2>
            <div class="photos">
                <div v-for="photo in photos" :key="photo.id" class="photo-card">
                    <img :src="photo.url" :alt="photo.title" class="photo-img" />
                    <div class="photo-info">
                        <h3>{{ photo.title }}</h3>
                        <p>{{ photo.description }}</p>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<style scoped>
.profile {
    padding: 2rem;
    text-align: center;
}

.profile-header {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    margin-bottom: 2rem;
}

.profile-picture {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.profile-info {
    text-align: left;
}

.profile-info h1 {
    margin-bottom: 0.5rem;
}

.profile-info p {
    margin: 0.25rem 0;
}

.profile-gallery {
    margin-top: 2rem;
}

.photos {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
}

.photo-card {
    background-color: #f8f9fa;
    padding: 1rem;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    width: 300px;
}

.photo-img {
    width: 100%;
    border-radius: 8px;
}

.photo-info {
    margin-top: 1rem;
}
</style>
