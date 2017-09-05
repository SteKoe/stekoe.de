<template>
  <div class="content">
    <h1>
      <router-link to="/"><span class="fa fa-arrow-left"></span></router-link>
      Projects
    </h1>

    <div class="projects">
      <sk-project-tile :project="project" v-for="project in projects"></sk-project-tile>
    </div>
  </div>
</template>

<script>
  import ProjectService from '../services/projectService'
  import skProjectTile from './ProjectTile.vue'

  export default {
    data: function () {
      return {
        projects: []
      }
    },
    created: function () {
      this.fetchProjects()
    },
    methods: {
      fetchProjects: function () {
        let projectService = ProjectService.getInstance()
        this.projects = projectService.getServices()
      }
    },
    components: {
      skProjectTile
    }
  }
</script>

<style>

  .project-tile {
    background-color: rgba(0, 0, 0, .4);
    box-sizing: border-box;
    margin: 2px;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid rgba(255, 255, 255, 0.2);
  }

  .project-tile__title {
    font-weight: bold;
    font-size: 1.25em;
    position: relative;
  }

  .project-tile__technology {
    display: block;
    font-size: 0.7em;
    font-style: italic;
    color: rgba(255, 255, 255, 0.5);
  }

  .project-tile__description {

  }

  .project-tile__links {
    position: absolute;
    top: 0;
    right: 0;
    font-size: .8em;
  }
</style>

<style scoped>
  .content {
    padding: 20px;
    border-radius: 5px;
    background: rgba(0, 0, 0, 0.5);
    height: auto;
    width: 500px;
  }

  .projects {
    width: 500px;
  }

  .project-tile__links > a {
    padding: 0 1px;
  }
</style>

