<template>
  <div class="project-tile">
    <div class="project-tile__title">
      <router-link :to="'/projects/' + project.slug">
        {{ project.title }}
      </router-link>
      <small class="project-tile__technology">
        {{ project.technologies.join(', ') }}
      </small>
      <div class="project-tile__links" v-if="project.links">
        <a v-if="project.links.example" title="Example Page" :href="project.links.example"><span class="fa fa-home"></span></a>
        <a v-if="project.links.blog" title="Blog Post" :href="project.links.blog"><span class="fa fa-book"></span></a>
        <a v-if="project.links.github" title="GitHub Repository" :href="project.links.github"><span class="fa fa-github"></span></a>
      </div>
    </div>
    <div class="project-tile__description" v-if="showDescription">
      {{ project.description }}
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      project: Object,
      showDescription: {
        default: false
      }
    }
  }
</script>
