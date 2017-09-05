export default class ProjectService {
  static getInstance () {
    if (!ProjectService.INSTANCE) {
      ProjectService.INSTANCE = new ProjectService()
    }

    return ProjectService.INSTANCE
  }

  getServiceBySlug (slug) {
    return this.getServices().find(s => s.slug === slug)
  }

  getServices () {
    let ocljs = {
      'slug': 'ocljs',
      'title': 'OCL.js',
      'technologies': ['JavaScript'],
      'description': `
            The Object-Constraint-Language (OCL) allows to add further semantics to a modelling language like UML.
            Since there was no implementation in JavaScript, I started to write an OCL-Engine which supports very basic concepts of the OCL.
          `,
      'links': {
        'blog': 'http://blog.stekoe.de/2017/08/28/ocl.js.html',
        'example': 'http://ocl.stekoe.de/',
        'github': 'https://github.com/stekoe/ocl.js'
      }
    }

    let dce = {
      'slug': 'dce',
      'title': 'Docker Compose Editor',
      'technologies': ['Electron', 'React', 'Redux', 'HTML', 'CSS'],
      'description': `
            Docker-Compose files may get bigger and bigger.
            Hence it would be nice to visualize them in an easy way.
            Therefor I have started to implement an editor that utilizes React, Electron and Redux to load docker-compose.yml files.
          `,
      'links': {
        'github': 'https://github.com/code-arcs/docker-compose-editor'
      }
    }

    let ngSpotlight = {
      'slug': 'angular-spotlight',
      'title': 'Angular Spotlight',
      'technologies': ['AngularJS', 'HTML', 'CSS', 'Bower', 'Gulp'],
      'description': `
            Spotlight is the awesome search feature of Mac OS X. Now it is time to move this piece of software into the web area.
          `,
      'links': {
        'example': 'http://cdn.rawgit.com/SteKoe/angular-spotlight/master/examples/',
        'github': 'https://github.com/code-arcs/angular-spotlight'
      }
    }

    let amChartsJava = {
      'slug': 'amcharts4j',
      'title': 'AmCharts4J',
      'technologies': ['Java', 'Gson'],
      'links': {
        'example': 'https://github.com/SteKoe/amcharts-java-examples-jersey/blob/master/src/main/java/de/stekoe/amcharts/examples/jersey/Application.java',
        'github': 'https://github.com/SteKoe/amcharts-java'
      }
    }

    let oasis = {
      'slug': 'oasis',
      'title': 'OASIS - Online Assessed Innovations',
      'technologies': ['Java', 'Spring and Apache Wicket', 'Hibernate', 'HTML', 'CSS'],
      'description': `
            Die Software OASIS – Online Assessed Innovations ist am Lehrstuhl für Wirtschaftsinformatik und Unternehmensmodellierung
            der Universität Duisburg-Essen im Rahmen des Projektes Hospital Engineering – Innovationspfade für das Krankenhaus der
            Zukunft entstanden.
          `,
      'links': {
        'github': 'https://github.com/SteKoe/oasis'
      }
    }

    return [
      ocljs,
      dce,
      ngSpotlight,
      amChartsJava,
      oasis
    ]
  }
}
ProjectService.INSTANCE = undefined
