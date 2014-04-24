Project = OvationBaseModel.extend(
  initialize: () ->
    this.urlRoot = "#{this.urlRoot}/project/#{this.id}"
)

