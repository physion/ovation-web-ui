class window.WebserviceJSONConvert
  # convert the incoming document from the webservice endpoint to have some of the built
  # in UI display hints
  @to_ui: (doc) ->
    ui_hints = {
      display_name: null
      primary_link: null
      secondary_link: null
    }
    switch doc.type
      when "Project"
        ui_hints.display_name = doc.attributes.name if doc.attributes.name?
        ui_hints.primary_link = doc.links.experiments if doc.links.experiments?
        ui_hints.secondary_link = null
      when "Experiment"
        ui_hints.display_name = doc.attributes.purpose if doc.attributes.purpose?
        ui_hints.primary_link = doc.links.epoch_groups if doc.links.epoch_groups?
        ui_hints.secondary_link = doc.links.epoch if doc.links.epoch?
      when "EpochGroup"
        ui_hints.display_name = doc.attributes.label if doc.attributes.label?
        ui_hints.primary_link = doc.links.children if doc.links.children?
        ui_hints.secondary_link = doc.links.epochs if doc.links.epochs?
      when "Source"
        ui_hints.display_name = "#{doc.attributes.label if doc.attributes.label?}(#{doc.attributes.identifier if doc.attributes.identifier?})"
        ui_hints.primary_link = doc.links.children if doc.links.children?
        ui_hints.secondary_link = doc.links.experiments if doc.links.experiments?
      when "Epoch"
        ui_hints.display_name = "#{doc.attributes.label if doc.attributes.label?}(#{doc.attributes.identifier if doc.attributes.identifier?})"
        ui_hints.primary_link = doc.links.measurements if doc.links.measurements?
        ui_hints.secondary_link = null?
      when "Measurement"
        ui_hints.display_name = "#{doc.attributes.name if doc.attributes.name?}"
        ui_hints.primary_link = null
        ui_hints.secondary_link = null
      when "AnalysisRecord"
        ui_hints.display_name = doc.attributes if doc.attributes.name?
        ui_hints.primary_link = doc.links.outputs if doc.links.outputs?
        ui_hints.secondary_link = doc.links.inputs if doc.links.inputs?
      when "Protocol"
        ui_hints.display_name = "#{doc.attributes.name if doc.attributes.name?}(#{doc.attributes.version if doc.attributes.version?})"
        ui_hints.primary_link = doc.links.children if doc.links.children?
        ui_hints.secondary_link = doc.links.procedures if doc.links.procedures?

    doc.ui_hints = ui_hints

    return doc

  @to_server: (doc) ->
    if doc.hasOwnProperty("ui_hints")
      delete doc.ui_hints

    return doc
