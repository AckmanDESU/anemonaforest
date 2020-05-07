<template>
  <div class="photos">
    <div
      class="photo"
      v-for="item in photos"
      :key="item.node.id"
    >
      <g-link
        :to="item.node.path"
        class="photo-link"
      >
        <g-image
          :src="item.node.image"
          :alt="item.node.title"
          class="thumbnail"
        />
        <h3 class="photo-title">{{ item.node.title }}</h3>
        <div class="tags">
          <span
            class="tag"
            v-for="(item, index) in item.node.tags"
            :key="index"
          >{{ item }}</span>
        </div>
      </g-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    photos: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.photos {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 4rem;
}
.photo {
  grid-column: auto / span 2;
  text-align: center;
}
.photo-link {
  text-decoration: none;
}
.thumbnail {
  height: 560px;
  object-fit: cover;
  transition: all 0.15s ease;
  box-shadow: 0 0 40px -20px rgba(0, 0, 0, 0.25);
}
.photo-title {
  font-size: 1rem;
  color: var(--color-contrast);
  margin: 2rem 0 1rem 0;
}
.tags {
  font-size: 0.8rem;
  color: var(--color-contrast-1);
}
.tag {
  margin-right: 0.8rem;
}
.tag:last-of-type {
  margin: 0;
}
.photo:hover .thumbnail {
  transform: scale(1.02);
  box-shadow: 0 20px 40px -20px rgba(0, 0, 0, 0.25);
}

@media (min-width: 920px) {
  .photo {
    grid-column: auto / span 1;
  }
  .photo:nth-child(3n + 1) {
    grid-column: auto / span 2;
  }
}
</style>
