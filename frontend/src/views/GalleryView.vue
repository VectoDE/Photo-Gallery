<script setup>
import { ref } from 'vue';

const photos = ref([
    { id: 1, title: 'Sunset Over the Mountains', url: 'https://via.placeholder.com/300', description: 'A beautiful sunset over the mountains.' },
    { id: 2, title: 'City Skyline', url: 'https://via.placeholder.com/300', description: 'The city skyline during the evening.' },
    { id: 3, title: 'Forest Path', url: 'https://via.placeholder.com/300', description: 'A serene path through the forest.' },
]);

const showUploadDialog = ref(false);

function loadMorePhotos() {
    photos.value.push(
        { id: 4, title: 'Beach at Noon', url: 'https://via.placeholder.com/300', description: 'A sunny beach at noon.' },
        { id: 5, title: 'Snowy Mountains', url: 'https://via.placeholder.com/300', description: 'Snow-covered mountains during winter.' }
    );
}

function handleFiles(files) {
    for (let file of files) {
        const reader = new FileReader();
        reader.onload = (e) => {
            photos.value.push({
                id: photos.value.length + 1,
                title: file.name,
                url: e.target.result,
                description: 'User uploaded photo'
            });
        };
        reader.readAsDataURL(file);
    }
}

function onDrop(event) {
    event.preventDefault();
    if (event.dataTransfer.files) {
        handleFiles(event.dataTransfer.files);
    }
}

function onDragOver(event) {
    event.preventDefault();
}
</script>

<template>
    <main class="gallery">
        <h1>Gallery</h1>
        <button @click="showUploadDialog = true" class="upload-button">Upload</button>
        <div v-if="showUploadDialog" class="upload-dialog">
            <div class="upload-dialog-content" @drop="onDrop" @dragover="onDragOver">
                <input type="file" @change="e => handleFiles(e.target.files)" multiple class="upload-input" />
                <label class="upload-label">Drag & Drop or Click to Upload</label>
                <button @click="showUploadDialog = false" class="close-button">Close</button>
            </div>
        </div>
        <section class="photos">
            <div v-for="photo in photos" :key="photo.id" class="photo-card">
                <img :src="photo.url" :alt="photo.title" class="photo-img" />
                <div class="photo-info">
                    <h2>{{ photo.title }}</h2>
                    <p>{{ photo.description }}</p>
                </div>
            </div>
        </section>
        <button @click="loadMorePhotos" class="load-more">Load More</button>
    </main>
</template>

<style scoped>
.gallery {
    padding: 2rem;
    text-align: center;
}

.photos {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
    margin-bottom: 2rem;
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

.load-more {
    padding: 0.5rem 1rem;
    font-size: 1rem;
    border: none;
    border-radius: 4px;
    background-color: #007bff;
    color: #fff;
    cursor: pointer;
}

.load-more:hover {
    background-color: #0056b3;
}

.upload-button {
    padding: 0.5rem 1rem;
    font-size: 1rem;
    border: none;
    border-radius: 4px;
    background-color: #28a745;
    color: #fff;
    cursor: pointer;
    margin-top: 1rem;
}

.upload-button:hover {
    background-color: #218838;
}

.upload-dialog {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
}

.upload-dialog-content {
    background-color: #fff;
    padding: 2rem;
    border-radius: 8px;
    text-align: center;
    position: relative;
    width: 300px;
    border: 2px dashed #007bff;
}

.upload-input {
    display: none;
}

.upload-label {
    display: inline-block;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    border: 2px dashed #007bff;
    border-radius: 4px;
    background-color: #f8f9fa;
    cursor: pointer;
    margin-top: 1rem;
}

.upload-label:hover {
    background-color: #e2e6ea;
}

.close-button {
    padding: 0.5rem 1rem;
    font-size: 1rem;
    border: none;
    border-radius: 4px;
    background-color: #dc3545;
    color: #fff;
    cursor: pointer;
    margin-top: 1rem;
}

.close-button:hover {
    background-color: #c82333;
}
</style>
