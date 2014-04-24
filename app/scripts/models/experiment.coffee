Experiment = OvationBaseModel.extend(
  initialize: () ->
    this.urlRoot = "#{this.urlRoot}/experiment/#{this.id}"
)

