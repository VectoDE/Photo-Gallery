<script setup>
import { ref } from 'vue';

const aboutText = ref(`
  Welcome to our Photo Gallery application. This platform allows users to upload,
  view, and share photos with others. Our mission is to create a community where 
  photography enthusiasts can showcase their work and connect with like-minded individuals.
`);

const teamMembers = ref([
  { name: 'Tim Hauke', role: 'Founder & CEO' },
  { name: 'Jane Doe', role: 'Lead Developer' },
  { name: 'John Smith', role: 'UI/UX Designer' }
]);
</script>

<template>
  <main class="about">
    <h1>About Us</h1>
    <section class="about-section">
      <p>{{ aboutText }}</p>
    </section>
    <section class="team-section">
      <h2>Meet the Team</h2>
      <ul class="team-list">
        <li v-for="member in teamMembers" :key="member.name" class="team-member">
          <h3>{{ member.name }}</h3>
          <p>{{ member.role }}</p>
        </li>
      </ul>
    </section>
  </main>
</template>

<style scoped>
.about {
  padding: 2rem;
  text-align: center;
}

.about-section {
  margin-bottom: 2rem;
}

.team-section {
  margin-top: 2rem;
}

.team-list {
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  gap: 2rem;
}

.team-member {
  background-color: #f8f9fa;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 200px;
  text-align: center;
}
</style>
