<template>
  <div>
    <h1>{{project.title}}</h1>
    <p>{{project.description}}</p>
  </div>
</template>

<script>
  import ProjectService from '../services/projectService'

  export default {
    data: function () {
      return {
        project: {}
      }
    },
    created: function () {
      this.fetchProject(this.$route.params.slug)
    },
    methods: {
      fetchProject: function (slug) {
        let projectService = ProjectService.getInstance()
        this.project = projectService.getServiceBySlug(slug)
      }
    }
  }
</script>
