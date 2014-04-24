Measurement = OvationBaseModel.extend(
  initialize: () ->
    this.urlRoot = "#{this.urlRoot}/measurement/#{this.id}"
)

