<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <footer class="footer">
        <div class="footer-container">
            <section class="footer-container-section-information">
                <h3 class="footer-container-section-information-h3">Location</h3>
                <iframe class="footer-container-section-information-iframe" src="" frameborder="0"></iframe>
            </section>
            <section class="footer-container-section-useful">
                <ul class="footer-container-section-useful-ul">
                    <li class="footer-container-section-useful-ul-li"><RouterLink :to="`/user/${userId}/gallery`">Gallery</RouterLink></li>
                    <li class="footer-container-section-useful-ul-li"><RouterLink :to="`/user/${userId}/profile`">Profile</RouterLink></li>
                    <li class="footer-container-section-useful-ul-li"><RouterLink to="/legal/privacy-policy">Privacy Policy</RouterLink></li>
                    <li class="footer-container-section-useful-ul-li"><RouterLink to="/legal/terms-of-use">Terms of Use</RouterLink></li>
                </ul>
            </section>
            <section class="footer-container-section-socials">
                <ul class="footer-container-section-socials-ul">
                    <li class="footer-container-section-socials-ul-li"><a href="https://www.instagram.com"><i class="bi bi-instagram"></i></a></li>
                    <li class="footer-container-section-socials-ul-li"><a href="https://www.tiktok.com"><i class="bi bi-tiktok"></i></a></li>
                    <li class="footer-container-section-socials-ul-li"><a href="https://www.twitter.com"><i class="bi bi-twitter-x"></i></a></li>
                    <li class="footer-container-section-socials-ul-li"><a href="https://www.github.com"><i class="bi bi-github"></i></a></li>
                    <li class="footer-container-section-socials-ul-li"><a href="https://www.linkedin.com"><i class="bi bi-linkedin"></i></a></li>
                </ul>
            </section>
        </div>
        <p class="footer-copyright">2024 &copy; <a href="">VectoDE</a> | All rights reserved.</p>
    </footer>
</template>

<style scoped>
.footer {
    background-color: #f8f9fa;
    padding: 2rem;
    text-align: center;
}

.footer-container {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.footer-container-section-information,
.footer-container-section-useful,
.footer-container-section-socials {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.footer-container-section-information-h3,
.footer-container-section-useful-ul-li,
.footer-container-section-socials-ul-li {
    margin: 0;
}

.footer-container-section-useful-ul,
.footer-container-section-socials-ul {
    list-style: none;
    padding: 0;
}

.footer-container-section-useful-ul-li a,
.footer-container-section-socials-ul-li a {
    text-decoration: none;
    color: inherit;
}
</style>
