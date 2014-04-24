Analysis = OvationBaseModel.extend(
  initialize: () ->
    this.urlRoot = "#{this.urlRoot}/analysis/#{this.id}"
)
