Experiment = OvationBaseModel.extend(
  initialize: () ->
    this.urlRoot = "#{this.urlRoot}/source/#{this.id}"
)

