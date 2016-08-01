module.exports = {
  description: 'Generates a serializer unit test.',

  locals: function() {
    var packages = Object.keys(this.project.addonPackages);
    var jshintExists = packages.indexOf('ember-cli-jshint') !== -1;

    return {
      jshintExists: jshintExists
    };
  }
};
