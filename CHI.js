const wdProducts = require("./WD");
const wdArray = require("./WD");

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<PRODUCTS>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
const __products = {
  2550: {
    panel_style: "Shaker",
    product_family: "Stamped Shaker",
    door_style_text: "Shaker",
    family_brochure_link:
      "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Shaker/Stamped-Shaker-Brochure.pdf",
    model_flyer_link:
      "https://cdn2.hubspot.net/hubfs/2029938/Professional/Specs/Residential/Sell-Sheets/Stamped-Shaker-2550.pdf",
    price: "$$",
    r_value_text: " -",
    rtm_construction_type: '2" Thick - 1-Sided Steel',
    rtm_insulation_type: "No Insulation",
    section_material: "Standard /  25 Ga. Steel"
  },
  2551: {
    panel_style: "Shaker",
    product_family: "Stamped Shaker",
    door_style_text: "Shaker",
    family_brochure_link:
      "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Shaker/Stamped-Shaker-Brochure.pdf",
    model_flyer_link:
      "https://cdn2.hubspot.net/hubfs/2029938/Professional/Specs/Residential/Sell-Sheets/Stamped-Shaker-2551.pdf",
    price: "$$",
    r_value_text: "7.94",
    rtm_construction_type: '2" Thick - 1-Sided Steel with Vinyl Back',
    rtm_insulation_type: '1-3/8" Polystyrene',
    section_material: "Standard /  25 Ga. Steel"
  },
  2583: {
    panel_style: "Shaker",
    product_family: "Stamped Shaker",
    door_style_text: "Shaker",
    family_brochure_link:
      "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Shaker/Stamped-Shaker-Brochure.pdf",
    model_flyer_link:
      "https://cdn2.hubspot.net/hubfs/2029938/Professional/Specs/Residential/Sell-Sheets/Stamped-Shaker-2583.pdf",
    price: "$$$",
    r_value_text: "9.65",
    rtm_construction_type: '2" Thick - 2-Sided Steel',
    rtm_insulation_type: '1-13/16" Polystyrene',
    section_material: "Medium Duty / 27 Ga. Steel"
  },
  2518: {
    panel_style: "Shaker",
    product_family: "Stamped Shaker",
    door_style_text: "Shaker",
    family_brochure_link:
      "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Shaker/Stamped-Shaker-Brochure.pdf",
    model_flyer_link:
      "https://cdn2.hubspot.net/hubfs/2029938/Professional/Specs/Residential/Sell-Sheets/Stamped-Shaker-2518.pdf",
    price: "$$$",
    r_value_text: "16.55",
    rtm_construction_type: '2" Thick - 2-Sided Steel',
    rtm_insulation_type: '1-7/8" Polyurethane',
    section_material: "Heavy Duty / 27 Ga. Steel"
  },
  2150: {
    panel_style: "Flush",
    product_family: "Skyline Flush",
    door_style_text: "Flush",
    family_brochure_link: "https://www.chiohd.com/hubfs/skyline-flush.pdf",
    model_flyer_link:
      "https://cdn2.hubspot.net/hubfs/2029938/Professional/Specs/Residential/Sell-Sheets/FP-2150.pdf",
    price: "$$$",
    r_value_text: " -",
    rtm_construction_type: '2" Thick - 1-Sided Steel',
    rtm_insulation_type: "No Insulation",
    section_material: "Standard /  25 Ga. Steel"
  },
  2140: {
    panel_style: "Flush",
    product_family: "Skyline Flush",
    door_style_text: "Flush",
    family_brochure_link: "https://www.chiohd.com/hubfs/skyline-flush.pdf",
    model_flyer_link:
      "https://cdn2.hubspot.net/hubfs/2029938/Professional/Specs/Residential/Sell-Sheets/FP-2140.pdf",
    price: "$$$",
    r_value_text: " -",
    rtm_construction_type: '2" Thick - 1-Sided Steel',
    rtm_insulation_type: "No Insulation",
    section_material: "Heavy Duty / 24 Ga. Steel"
  },
  2151: {
    panel_style: "Flush",
    product_family: "Skyline Flush",
    door_style_text: "Flush",
    family_brochure_link: "https://www.chiohd.com/hubfs/skyline-flush.pdf",
    model_flyer_link:
      "https://cdn2.hubspot.net/hubfs/2029938/Professional/Specs/Residential/Sell-Sheets/FP-2151.pdf",
    price: "$$$",
    r_value_text: "7.94",
    rtm_construction_type: '2" Thick - 1-Sided Steel with Vinyl Back',
    rtm_insulation_type: '1-3/8" Polystyrene',
    section_material: "Standard /  25 Ga. Steel"
  },
  2141: {
    panel_style: "Flush",
    product_family: "Skyline Flush",
    door_style_text: "Flush",
    family_brochure_link: "https://www.chiohd.com/hubfs/skyline-flush.pdf",
    model_flyer_link:
      "https://cdn2.hubspot.net/hubfs/2029938/Professional/Specs/Residential/Sell-Sheets/FP-2141.pdf",
    price: "$$$",
    r_value_text: "7.94",
    rtm_construction_type: '2" Thick - 1-Sided Steel with Vinyl Back',
    rtm_insulation_type: '1-3/8" Polystyrene',
    section_material: "Heavy Duty / 24 Ga. Steel"
  },
  2127: {
    panel_style: "Flush",
    product_family: "Skyline Flush",
    door_style_text: "Flush",
    family_brochure_link: "https://www.chiohd.com/hubfs/skyline-flush.pdf",
    model_flyer_link:
      "https://www.chiohd.com/hubfs/Professional/Specs/Residential/Sell-Sheets/Skyline-2127.pdf",
    price: "$$$",
    r_value_text: "10.29",
    rtm_construction_type: '2" Thick - 2-Sided Steel',
    rtm_insulation_type: '1-13/16" Polystyrene',
    section_material: "Medium Duty / 27 Ga. Steel"
  },
  2128: {
    panel_style: "Flush",
    product_family: "Skyline Flush",
    door_style_text: "Flush",
    family_brochure_link: "https://www.chiohd.com/hubfs/skyline-flush.pdf",
    model_flyer_link:
      "https://www.chiohd.com/hubfs/Professional/Specs/Residential/Sell-Sheets/Skyline-2128.pdf",
    price: "$$$",
    r_value_text: "17.54",
    rtm_construction_type: '2" Thick - 2-Sided Steel',
    rtm_insulation_type: '1-7/8" Polyurethane',
    section_material: "Heavy Duty / 27 Ga. Steel"
  },
  4150: {
    panel_style: "Flush",
    product_family: "Skyline Flush",
    door_style_text: "Flush",
    family_brochure_link: "https://www.chiohd.com/hubfs/skyline-flush.pdf",
    model_flyer_link:
      "https://cdn2.hubspot.net/hubfs/2029938/Professional/Specs/Residential/Sell-Sheets/FP-4150.pdf",
    price: "$$$",
    r_value_text: " -",
    rtm_construction_type: '2" Thick - 1-Sided Steel',
    rtm_insulation_type: "No Insulation",
    section_material: "Standard /  25 Ga. Steel"
  },
  4140: {
    panel_style: "Flush",
    product_family: "Skyline Flush",
    door_style_text: "Flush",
    family_brochure_link: "https://www.chiohd.com/hubfs/skyline-flush.pdf",
    model_flyer_link:
      "https://cdn2.hubspot.net/hubfs/2029938/Professional/Specs/Residential/Sell-Sheets/FP-4150.pdf",
    price: "$$$",
    r_value_text: " -",
    rtm_construction_type: '2" Thick - 1-Sided Steel',
    rtm_insulation_type: "No Insulation",
    section_material: "Heavy Duty /  24 Ga. Steel"
  },
  4151: {
    panel_style: "Flush",
    product_family: "Skyline Flush",
    door_style_text: "Flush",
    family_brochure_link: "https://www.chiohd.com/hubfs/skyline-flush.pdf",
    model_flyer_link:
      "https://cdn2.hubspot.net/hubfs/2029938/Professional/Specs/Residential/Sell-Sheets/FP-4151.pdf",
    price: "$$$",
    r_value_text: "7.94",
    rtm_construction_type: '2" Thick - 1-Sided Steel with Vinyl Back',
    rtm_insulation_type: '1-3/8" Polystyrene',
    section_material: "Standard /  25 Ga. Steel"
  },
  4141: {
    panel_style: "Flush",
    product_family: "Skyline Flush",
    door_style_text: "Flush",
    family_brochure_link: "https://www.chiohd.com/hubfs/skyline-flush.pdf",
    model_flyer_link:
      "https://cdn2.hubspot.net/hubfs/2029938/Professional/Specs/Residential/Sell-Sheets/FP-4141.pdf",
    price: "$$$",
    r_value_text: "7.94",
    rtm_construction_type: '2" Thick - 1-Sided Steel with Vinyl Back',
    rtm_insulation_type: '1-3/8" Polystyrene',
    section_material: "Heavy Duty / 24 Ga. Steel"
  },
  2147: {
    panel_style: "Flush",
    product_family: "Skyline Flush",
    door_style_text: "Flush",
    family_brochure_link: "https://www.chiohd.com/hubfs/skyline-flush.pdf",
    model_flyer_link:
      "https://www.chiohd.com/hubfs/Professional/Specs/Residential/Sell-Sheets/Skyline-2147.pdf",
    price: "$$$",
    r_value_text: "10.29",
    rtm_construction_type: '2" Thick - 2-Sided Steel',
    rtm_insulation_type: '1-13/16" Polystyrene',
    section_material: "Medium Duty / 27 Ga. Steel"
  },
  2148: {
    panel_style: "Flush",
    product_family: "Skyline Flush",
    door_style_text: "Flush",
    family_brochure_link: "https://www.chiohd.com/hubfs/skyline-flush.pdf",
    model_flyer_link:
      "https://www.chiohd.com/hubfs/Professional/Specs/Residential/Sell-Sheets/Skyline-2148.pdf",
    price: "$$$",
    r_value_text: "17.54",
    rtm_construction_type: '2" Thick - 2-Sided Steel',
    rtm_insulation_type: '1-7/8" Polyurethane',
    section_material: "Heavy Duty / 27 Ga. Steel"
  },
  2157: {
    panel_style: "Flush",
    product_family: "Skyline Flush",
    door_style_text: "Flush",
    family_brochure_link: "https://www.chiohd.com/hubfs/skyline-flush.pdf",
    model_flyer_link:
      "https://www.chiohd.com/hubfs/Professional/Specs/Residential/Sell-Sheets/Skyline-2157.pdf",
    price: "$$$",
    r_value_text: "10.29",
    rtm_construction_type: '2" Thick - 2-Sided Steel',
    rtm_insulation_type: '1-13/16" Polystyrene',
    section_material: "Medium Duty / 27 Ga. Steel"
  },
  2158: {
    panel_style: "Flush",
    product_family: "Skyline Flush",
    door_style_text: "Flush",
    family_brochure_link: "https://www.chiohd.com/hubfs/skyline-flush.pdf",
    model_flyer_link:
      "https://www.chiohd.com/hubfs/Professional/Specs/Residential/Sell-Sheets/Skyline-2158.pdf",
    price: "$$$",
    r_value_text: "17.54",
    rtm_construction_type: '2" Thick - 2-Sided Steel',
    rtm_insulation_type: '1-7/8" Polyurethane',
    section_material: "Heavy Duty / 27 Ga. Steel"
  },
  2327: {
    panel_style: "Planks",
    product_family: "Planks",
    door_style_text: "Planks",
    family_brochure_link:
      "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Accents/Accents-Woodtones-Brochure.pdf",
    model_flyer_link:
      "https://www.chiohd.com/hubfs/Professional/Specs/Residential/Sell-Sheets/Planks-2327.pdf",
    price: "$$$",
    r_value_text: "10.29",
    rtm_construction_type: '2" Thick - 2-Sided Steel',
    rtm_insulation_type: '1-13/16" Polystyrene',
    section_material: "Medium Duty / 27 Ga. Steel"
  },
  2347: {
    panel_style: "Planks",
    product_family: "Planks",
    door_style_text: "Planks",
    family_brochure_link:
      "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Accents/Accents-Woodtones-Brochure.pdf",
    model_flyer_link:
      "https://www.chiohd.com/hubfs/Professional/Specs/Residential/Sell-Sheets/Planks-2347.pdf",
    price: "$$$",
    r_value_text: "10.29",
    rtm_construction_type: '2" Thick - 2-Sided Steel',
    rtm_insulation_type: '1-13/16" Polystyrene',
    section_material: "Medium Duty / 27 Ga. Steel"
  },
  2357: {
    panel_style: "Planks",
    product_family: "Planks",
    door_style_text: "Planks",
    family_brochure_link:
      "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Accents/Accents-Woodtones-Brochure.pdf",
    model_flyer_link:
      "https://www.chiohd.com/hubfs/Professional/Specs/Residential/Sell-Sheets/Planks-2357.pdf",
    price: "$$$",
    r_value_text: "10.29",
    rtm_construction_type: '2" Thick - 2-Sided Steel',
    rtm_insulation_type: '1-13/16" Polystyrene',
    section_material: "Medium Duty / 27 Ga. Steel"
  },
  2328: {
    panel_style: "Planks",
    product_family: "Planks",
    door_style_text: "Planks",
    family_brochure_link:
      "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Accents/Accents-Woodtones-Brochure.pdf",
    model_flyer_link:
      "https://www.chiohd.com/hubfs/Professional/Specs/Residential/Sell-Sheets/Planks-2328.pdf",
    price: "$$$",
    r_value_text: "17.54",
    rtm_construction_type: '2" Thick - 2-Sided Steel',
    rtm_insulation_type: '1-7/8" Polyurethane',
    section_material: "Heavy Duty / 27 Ga. Steel"
  },
  2348: {
    panel_style: "Planks",
    product_family: "Planks",
    door_style_text: "Planks",
    family_brochure_link:
      "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Accents/Accents-Woodtones-Brochure.pdf",
    model_flyer_link:
      "https://www.chiohd.com/hubfs/Professional/Specs/Residential/Sell-Sheets/Planks-2348.pdf",
    price: "$$$",
    r_value_text: "17.54",
    rtm_construction_type: '2" Thick - 2-Sided Steel',
    rtm_insulation_type: '1-7/8" Polyurethane',
    section_material: "Heavy Duty / 27 Ga. Steel"
  },
  2358: {
    panel_style: "Planks",
    product_family: "Planks",
    door_style_text: "Planks",
    family_brochure_link:
      "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Accents/Accents-Woodtones-Brochure.pdf",
    model_flyer_link:
      "https://www.chiohd.com/hubfs/Professional/Specs/Residential/Sell-Sheets/Planks-2358.pdf",
    price: "$$$",
    r_value_text: "17.54",
    rtm_construction_type: '2" Thick - 2-Sided Steel',
    rtm_insulation_type: '1-7/8" Polyurethane',
    section_material: "Heavy Duty / 27 Ga. Steel"
  },
  5602: {
    panel_style: "Steel Overlay",
    product_family: "Shoreline",
    door_style_text: "Steel Overlay",
    family_brochure_link:
      "https://www.chiohd.com/hubfs/Homeowner/Products/Shoreline/5602-Flyer.pdf",
    model_flyer_link:
      "https://www.chiohd.com/hubfs/Homeowner/Products/Shoreline/5602.pdf",
    price: "$$$",
    r_value_text: "17.54",
    rtm_construction_type: '2" Thick - 2-Sided Steel',
    rtm_insulation_type: '1-7/8" Polyurethane',
    section_material: "Heavy Duty / 27 Ga. Steel"
  },
  2250: {
    panel_style: "Short Panel",
    product_family: "Raised Panel",
    door_style_text: "Short Panel",
    family_brochure_link:
      "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Raised-Panel/Raised-Panel-Brochure.pdf?t=1518018278885",
    model_flyer_link:
      "https://cdn2.hubspot.net/hubfs/2029938/Professional/Specs/Residential/Sell-Sheets/CHI-2250-RP-0317V1-LOCK.pdf?t=1518018278885",
    price: "$",
    r_value_text: " -",
    rtm_construction_type: '2" Thick - 1-Sided Steel',
    rtm_insulation_type: "No Insulation",
    section_material: "Standard /  25 Ga. Steel"
  },
  2240: {
    panel_style: "Short Panel",
    product_family: "Raised Panel",
    door_style_text: "Short Panel",
    family_brochure_link:
      "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Raised-Panel/Raised-Panel-Brochure.pdf?t=1518018278885",
    model_flyer_link:
      "https://cdn2.hubspot.net/hubfs/2029938/Professional/Specs/Residential/Sell-Sheets/CHI-2240-RP-0317V1-LOCK.pdf?t=1518018278885",
    price: "$",
    r_value_text: " -",
    rtm_construction_type: '2" Thick - 1-Sided Steel',
    rtm_insulation_type: "No Insulation",
    section_material: "Heavy Duty / 24 Ga. Steel"
  },
  2255: {
    panel_style: "Short Panel",
    product_family: "Raised Panel",
    door_style_text: "Short Panel",
    family_brochure_link:
      "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Raised-Panel/Raised-Panel-Brochure.pdf?t=1518018278885",
    model_flyer_link:
      "https://cdn2.hubspot.net/hubfs/2029938/Professional/Specs/Residential/Sell-Sheets/CHI-2255-RP-0317V1-LOCK.pdf?t=1518018278885",
    price: "$$",
    r_value_text: "3.56",
    rtm_construction_type: '2" Thick - 1-Sided Steel with Vinyl Back',
    rtm_insulation_type: '9/16" Polystyrene',
    section_material: "Standard /  25 Ga. Steel"
  },
  2251: {
    panel_style: "Short Panel",
    product_family: "Raised Panel",
    door_style_text: "Short Panel",
    family_brochure_link:
      "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Raised-Panel/Raised-Panel-Brochure.pdf?t=1518018278885",
    model_flyer_link:
      "https://cdn2.hubspot.net/hubfs/2029938/Professional/Specs/Residential/Sell-Sheets/CHI-2251-RP-0317V1-LOCK.pdf?t=1518018278885",
    price: "$$",
    r_value_text: "7.94",
    rtm_construction_type: '2" Thick - 1-Sided Steel with Vinyl Back',
    rtm_insulation_type: '1-3/8" Polystyrene',
    section_material: "Standard /  25 Ga. Steel"
  },
  2241: {
    panel_style: "Short Panel",
    product_family: "Raised Panel",
    door_style_text: "Short Panel",
    family_brochure_link:
      "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Raised-Panel/Raised-Panel-Brochure.pdf?t=1518018278885",
    model_flyer_link:
      "https://cdn2.hubspot.net/hubfs/2029938/Professional/Specs/Residential/Sell-Sheets/CHI-2241-RP-0317V1-LOCK.pdf?t=1518018278885",
    price: "$$",
    r_value_text: "7.94",
    rtm_construction_type: '2" Thick - 1-Sided Steel with Vinyl Back',
    rtm_insulation_type: '1-3/8" Polystyrene',
    section_material: "Heavy Duty / 24 Ga. Steel"
  },
  2283: {
    panel_style: "Short Panel",
    product_family: "Raised Panel",
    door_style_text: "Short Panel",
    family_brochure_link:
      "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Raised-Panel/Raised-Panel-Brochure.pdf?t=1518018278885",
    model_flyer_link:
      "https://cdn2.hubspot.net/hubfs/2029938/Professional/Specs/Residential/Sell-Sheets/CHI-2283-RP-0317V1-LOCK.pdf?t=1518137587570",
    price: "$$$",
    r_value_text: "9.65",
    rtm_construction_type: '2" Thick - 2-Sided Steel',
    rtm_insulation_type: '1-13/16" Polystyrene',
    section_material: "Medium Duty / 27 Ga. Steel"
  },
  2206: {
    panel_style: "Short Panel",
    product_family: "Raised Panel",
    door_style_text: "Short Panel",
    family_brochure_link:
      "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Raised-Panel/Raised-Panel-Brochure.pdf?t=1518018278885",
    model_flyer_link:
      "https://cdn2.hubspot.net/hubfs/2029938/Professional/Specs/Residential/Sell-Sheets/CHI-2206-RP-0317V1-LOCK.pdf?t=1518018278885",
    price: "$$$",
    r_value_text: "13.40",
    rtm_construction_type: '1-1/2" Thick - 2-Sided Steel',
    rtm_insulation_type: '1-3/8" Polyurethane',
    section_material: "Medium Duty / 28 Ga. Steel"
  },
  2216: {
    panel_style: "Short Panel",
    product_family: "Raised Panel",
    door_style_text: "Short Panel",
    family_brochure_link:
      "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Raised-Panel/Raised-Panel-Brochure.pdf?t=1518018278885",
    model_flyer_link:
      "https://cdn2.hubspot.net/hubfs/2029938/Professional/Specs/Residential/Sell-Sheets/CHI-2216-RP-0317V1-LOCK.pdf?t=1518018278885",
    price: "$$",
    r_value_text: "17.19",
    rtm_construction_type: '2" Thick - 2-Sided Steel',
    rtm_insulation_type: '1-7/8" Polyurethane',
    section_material: "Heavy Duty / 27 Ga. Steel"
  },
  4250: {
    panel_style: "Long Panel",
    product_family: "Raised Panel",
    door_style_text: "Long Panel",
    family_brochure_link:
      "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Raised-Panel/Raised-Panel-Brochure.pdf?t=1518018278885",
    model_flyer_link:
      "https://cdn2.hubspot.net/hubfs/2029938/Professional/Specs/Residential/Sell-Sheets/CHI-4250-RP-0317V1-LOCK.pdf?t=1519064844538",
    price: "$",
    r_value_text: " -",
    rtm_construction_type: '2" Thick - 1-Sided Steel',
    rtm_insulation_type: "No Insulation",
    section_material: "Standard /  25 Ga. Steel"
  },
  4240: {
    panel_style: "Long Panel",
    product_family: "Raised Panel",
    door_style_text: "Long Panel",
    family_brochure_link:
      "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Raised-Panel/Raised-Panel-Brochure.pdf?t=1518018278885",
    model_flyer_link:
      "https://cdn2.hubspot.net/hubfs/2029938/Professional/Specs/Residential/Sell-Sheets/CHI-4240-RP-0317V1-LOCK.pdf?t=1518137587570",
    price: "$",
    r_value_text: " -",
    rtm_construction_type: '2" Thick - 1-Sided Steel',
    rtm_insulation_type: "No Insulation",
    section_material: "Heavy Duty / 24 Ga. Steel"
  },
  4255: {
    panel_style: "Long Panel",
    product_family: "Raised Panel",
    door_style_text: "Long Panel",
    family_brochure_link:
      "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Raised-Panel/Raised-Panel-Brochure.pdf?t=1518018278885",
    model_flyer_link:
      "https://cdn2.hubspot.net/hubfs/2029938/Professional/Specs/Residential/Sell-Sheets/CHI-4255-RP-0317V1-LOCK.pdf?t=1519076784719",
    price: "$$",
    r_value_text: "3.56",
    rtm_construction_type: '2" Thick - 1-Sided Steel with Vinyl Back',
    rtm_insulation_type: '9/16" Polystyrene',
    section_material: "Standard /  25 Ga. Steel"
  },
  4251: {
    panel_style: "Long Panel",
    product_family: "Raised Panel",
    door_style_text: "Long Panel",
    family_brochure_link:
      "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Raised-Panel/Raised-Panel-Brochure.pdf?t=1518018278885",
    model_flyer_link:
      "https://cdn2.hubspot.net/hubfs/2029938/Professional/Specs/Residential/Sell-Sheets/CHI-4251-RP-0317V1-LOCK.pdf?t=1519076784719",
    price: "$$",
    r_value_text: "7.94",
    rtm_construction_type: '2" Thick - 1-Sided Steel with Vinyl Back',
    rtm_insulation_type: '1-3/8" Polystyrene',
    section_material: "Standard /  25 Ga. Steel"
  },
  4241: {
    panel_style: "Long Panel",
    product_family: "Raised Panel",
    door_style_text: "Long Panel",
    family_brochure_link:
      "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Raised-Panel/Raised-Panel-Brochure.pdf?t=1518018278885",
    model_flyer_link:
      "https://cdn2.hubspot.net/hubfs/2029938/Professional/Specs/Residential/Sell-Sheets/CHI-4241-RP-0317V1-LOCK.pdf?t=1519064844538",
    price: "$",
    r_value_text: "7.94",
    rtm_construction_type: '2" Thick - 1-Sided Steel with Vinyl Back',
    rtm_insulation_type: '1-3/8" Polystyrene',
    section_material: "Heavy Duty / 24 Ga. Steel"
  },
  4283: {
    panel_style: "Long Panel",
    product_family: "Raised Panel",
    door_style_text: "Long Panel",
    family_brochure_link:
      "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Raised-Panel/Raised-Panel-Brochure.pdf?t=1518018278885",
    model_flyer_link:
      "https://cdn2.hubspot.net/hubfs/2029938/Professional/Specs/Residential/Sell-Sheets/CHI-4283-RP-0317V1-LOCK.pdf?t=1519076784719",
    price: "$$$",
    r_value_text: "9.65",
    rtm_construction_type: '2" Thick - 2-Sided Steel',
    rtm_insulation_type: '1-13/16" Polystyrene',
    section_material: "Medium Duty / 27 Ga. Steel"
  },
  4206: {
    panel_style: "Long Panel",
    product_family: "Raised Panel",
    door_style_text: "Long Panel",
    family_brochure_link:
      "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Raised-Panel/Raised-Panel-Brochure.pdf?t=1518018278885",
    model_flyer_link:
      "https://cdn2.hubspot.net/hubfs/2029938/Professional/Specs/Residential/Sell-Sheets/CHI-4206-RP-0317V1-LOCK.pdf?t=1518137587570",
    price: "$$$",
    r_value_text: "13.40",
    rtm_construction_type: '1-1/2" Thick - 2-Sided Steel',
    rtm_insulation_type: '1-3/8" Polyurethane',
    section_material: "Medium Duty / 28 Ga. Steel"
  },
  4216: {
    panel_style: "Long Panel",
    product_family: "Raised Panel",
    door_style_text: "Long Panel",
    family_brochure_link:
      "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Raised-Panel/Raised-Panel-Brochure.pdf?t=1518018278885",
    model_flyer_link:
      "https://cdn2.hubspot.net/hubfs/2029938/Professional/Specs/Residential/Sell-Sheets/CHI-4216-RP-0317V1-LOCK.pdf?t=1518137587570",
    price: "$$$",
    r_value_text: "17.19",
    rtm_construction_type: '2" Thick - 2-Sided Steel',
    rtm_insulation_type: '1-7/8" Polyurethane',
    section_material: "Heavy Duty / 27 Ga. Steel"
  },
  5250: {
    panel_style: "Short Panel",
    product_family: "Stamped Carriage House",
    door_style_text: "Short Panel",
    family_brochure_link:
      "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Stamped/Stamped-Brochure.pdf",
    model_flyer_link:
      "https://cdn2.hubspot.net/hubfs/2029938/Professional/Specs/Residential/Sell-Sheets/CHI-5250-SCH-0317V1-LOCK.pdf",
    price: "$",
    r_value_text: " -",
    rtm_construction_type: '2" Thick - 1-Sided Steel',
    rtm_insulation_type: "No Insulation",
    section_material: "Standard /  25 Ga. Steel"
  },
  5251: {
    panel_style: "Short Panel",
    product_family: "Stamped Carriage House",
    door_style_text: "Short Panel",
    family_brochure_link:
      "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Stamped/Stamped-Brochure.pdf",
    model_flyer_link:
      "https://cdn2.hubspot.net/hubfs/2029938/Professional/Specs/Residential/Sell-Sheets/CHI-5251-SCH-0317V1-LOCK.pdf",
    price: "$$",
    r_value_text: "7.94",
    rtm_construction_type: '2" Thick - 1-Sided Steel with Vinyl Back',
    rtm_insulation_type: '1-3/8" Polystyrene',
    section_material: "Standard /  25 Ga. Steel"
  },
  5283: {
    panel_style: "Short Panel",
    product_family: "Stamped Carriage House",
    door_style_text: "Short Panel",
    family_brochure_link:
      "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Stamped/Stamped-Brochure.pdf",
    model_flyer_link:
      "https://cdn2.hubspot.net/hubfs/2029938/Professional/Specs/Residential/Sell-Sheets/CHI-5283-SCH-0317V1-LOCK.pdf?t=1523305414283",
    price: "$$$",
    r_value_text: "9.65",
    rtm_construction_type: '2" Thick - 2-Sided Steel',
    rtm_insulation_type: '1-13/16" Polystyrene',
    section_material: "Medium Duty / 27 Ga. Steel"
  },
  5216: {
    panel_style: "Short Panel",
    product_family: "Stamped Carriage House",
    door_style_text: "Short Panel",
    family_brochure_link:
      "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Stamped/Stamped-Brochure.pdf",
    model_flyer_link:
      "https://cdn2.hubspot.net/hubfs/2029938/Professional/Specs/Residential/Sell-Sheets/CHI-5216-SCH-0317V1-LOCK.pdf?t=1523033849872",
    price: "$$$",
    r_value_text: "16.55",
    rtm_construction_type: '2" Thick - 2-Sided Steel',
    rtm_insulation_type: '1-7/8" Polyurethane',
    section_material: "Heavy Duty / 27 Ga. Steel"
  },
  5950: {
    panel_style: "Long Panel",
    product_family: "Stamped Carriage House",
    door_style_text: "Long Panel",
    family_brochure_link:
      "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Stamped/Stamped-Brochure.pdf",
    model_flyer_link:
      "https://cdn2.hubspot.net/hubfs/2029938/Professional/Specs/Residential/Sell-Sheets/CHI-5950-SCH-0317V1-LOCK.pdf?t=1523305414283",
    price: "$",
    r_value_text: " -",
    rtm_construction_type: '2" Thick - 1-Sided Steel',
    rtm_insulation_type: "No Insulation",
    section_material: "Standard /  25 Ga. Steel"
  },
  5951: {
    panel_style: "Long Panel",
    product_family: "Stamped Carriage House",
    door_style_text: "Long Panel",
    family_brochure_link:
      "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Stamped/Stamped-Brochure.pdf",
    model_flyer_link:
      "https://cdn2.hubspot.net/hubfs/2029938/Professional/Specs/Residential/Sell-Sheets/CHI-5951-SCH-0317V1-LOCK.pdf",
    price: "$$",
    r_value_text: "7.94",
    rtm_construction_type: '2" Thick - 1-Sided Steel with Vinyl Back',
    rtm_insulation_type: '1-3/8" Polystyrene',
    section_material: "Standard /  25 Ga. Steel"
  },
  5983: {
    panel_style: "Long Panel",
    product_family: "Stamped Carriage House",
    door_style_text: "Long Panel",
    family_brochure_link:
      "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Stamped/Stamped-Brochure.pdf",
    model_flyer_link:
      "https://cdn2.hubspot.net/hubfs/2029938/Professional/Specs/Residential/Sell-Sheets/CHI-5983-SCH-0317V1-LOCK.pdf",
    price: "$$$",
    r_value_text: "9.65",
    rtm_construction_type: '2" Thick - 2-Sided Steel',
    rtm_insulation_type: '1-13/16" Polystyrene',
    section_material: "Medium Duty / 27 Ga. Steel"
  },
  5916: {
    panel_style: "Long Panel",
    product_family: "Stamped Carriage House",
    door_style_text: "Long Panel",
    family_brochure_link:
      "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Stamped/Stamped-Brochure.pdf",
    model_flyer_link:
      "https://cdn2.hubspot.net/hubfs/2029938/Professional/Specs/Residential/Sell-Sheets/CHI-5916-SCH-0317V1-LOCK.pdf",
    price: "$$$",
    r_value_text: "16.55",
    rtm_construction_type: '2" Thick - 2-Sided Steel',
    rtm_insulation_type: '1-7/8" Polyurethane',
    section_material: "Heavy Duty / 27 Ga. Steel"
  },
  3295: {
    panel_style: "Full-View",
    product_family: "Full-View Aluminum",
    door_style_text: "Full-View",
    family_brochure_link:
      "https://www.chiohd.com/hubfs/Homeowner/Products/Full-View/Full-View-Brochure.pdf",
    model_flyer_link:
      "https://cdn2.hubspot.net/hubfs/2029938/Professional/Specs/Residential/Sell-Sheets/CHI-3295-RFV-0317V1-LOCK.pdf",
    price: "$$$$",
    r_value_text: " ",
    rtm_construction_type: '2" Thick - Hollow Aluminum Rails',
    rtm_insulation_type: "No Insulation",
    section_material: "Heavy Duty / Aluminum"
  },
  2717: {
    panel_style: "Sterling",
    product_family: "Sterling",
    door_style_text: "Sterling",
    family_brochure_link: "https://www.chiohd.com/hubfs/studio-collection.pdf",
    model_flyer_link:
      "https://www.chiohd.com/hubfs/Professional/Specs/Residential/Sell-Sheets/2717-Flyer.pdf",
    price: "$$$$$",
    r_value_text: "15.07",
    rtm_construction_type: '2" Thick - 2-Sided Steel',
    rtm_insulation_type: "Polyurethane",
    section_material: "Heavy Duty / 24 Ga. Steel"
  },
  5300: {
    panel_style: "Overlay",
    product_family: "Overlay Carriage House",
    door_style_text: "Overlay",
    family_brochure_link:
      "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Overlay/Overlay-Brochure.pdf",
    model_flyer_link:
      "https://cdn2.hubspot.net/hubfs/2029938/Professional/Specs/Residential/Sell-Sheets/CHI-5300-OCH-0317V1-LOCK.pdf?t=1525099637115",
    price: "$$$$",
    r_value_text: "10.29",
    rtm_construction_type: '2-1/2" Thick - 2-Sided Steel',
    rtm_insulation_type: '1-13/16" Polystyrene',
    section_material: "Medium Duty / 27 Ga. Steel"
  },
  5400: {
    panel_style: "Overlay",
    product_family: "Overlay Carriage House",
    door_style_text: "Overlay",
    family_brochure_link:
      "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Overlay/Overlay-Brochure.pdf",
    model_flyer_link:
      "https://cdn2.hubspot.net/hubfs/2029938/Professional/Specs/Residential/Sell-Sheets/CHI-5400-OCH-0317V1-LOCK.pdf?t=1525099637115",
    price: "$$$$$",
    r_value_text: "10.78",
    rtm_construction_type: '2-3/4" Thick - 2-Sided Steel',
    rtm_insulation_type: '1-13/16" Polystyrene',
    section_material: "Medium Duty / 27 Ga. Steel"
  },
  5500: {
    panel_style: "Overlay",
    product_family: "Overlay Carriage House",
    door_style_text: "Overlay",
    family_brochure_link:
      "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Overlay/Overlay-Brochure.pdf",
    model_flyer_link:
      "https://cdn2.hubspot.net/hubfs/2029938/Professional/Specs/Residential/Sell-Sheets/CHI-5500-OCH-0317V1-LOCK.pdf?t=1525099637115",
    price: "$$$$$",
    r_value_text: "10.67",
    rtm_construction_type: '2-1/2" Thick - 2-Sided Steel',
    rtm_insulation_type: '1-13/16" Polystyrene',
    section_material: "Medium Duty / 27 Ga. Steel"
  },
  5600: {
    panel_style: "Overlay",
    product_family: "Overlay Carriage House",
    door_style_text: "Overlay",
    family_brochure_link:
      "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Overlay/Overlay-Brochure.pdf",
    model_flyer_link:
      "https://cdn2.hubspot.net/hubfs/2029938/Professional/Specs/Residential/Sell-Sheets/CHI-5600-OCH-0317V1-LOCK.pdf?t=1525099637115",
    price: "$$$$",
    r_value_text: "17.54",
    rtm_construction_type: '2-1/2" Thick - 2-Sided Steel',
    rtm_insulation_type: '1-7/8" Polyurethane',
    section_material: "Heavy Duty / 27 Ga. Steel"
  },
  5700: {
    panel_style: "Overlay",
    product_family: "Overlay Carriage House",
    door_style_text: "Overlay",
    family_brochure_link:
      "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Overlay/Overlay-Brochure.pdf",
    model_flyer_link:
      "https://cdn2.hubspot.net/hubfs/2029938/Professional/Specs/Residential/Sell-Sheets/CHI-5700-OCH-0317V1-LOCK.pdf?t=1525099637115",
    price: "$$$$$",
    r_value_text: "18.03",
    rtm_construction_type: '2-3/4" Thick - 2-Sided Steel',
    rtm_insulation_type: '1-7/8" Polyurethane',
    section_material: "Heavy Duty / 27 Ga. Steel"
  },
  5800: {
    panel_style: "Overlay",
    product_family: "Overlay Carriage House",
    door_style_text: "Overlay",
    family_brochure_link:
      "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Overlay/Overlay-Brochure.pdf",
    model_flyer_link:
      "https://cdn2.hubspot.net/hubfs/2029938/Professional/Specs/Residential/Sell-Sheets/CHI-5800-OCH-0317V1-LOCK.pdf?t=1525099637115",
    price: "$$$$$",
    r_value_text: "17.92",
    rtm_construction_type: '2-1/2" Thick - 2-Sided Steel',
    rtm_insulation_type: '1-7/8" Polyurethane',
    section_material: "Heavy Duty / 27 Ga. Steel"
  },
  2291: {
    panel_style: "Recessed",
    product_family: "Overlay Recessed Panel",
    door_style_text: "Recessed",
    family_brochure_link:
      "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Recessed-Panel/Recessed-Panel-Brochure.pdf",
    model_flyer_link:
      "https://cdn2.hubspot.net/hubfs/2029938/Professional/Specs/Residential/Sell-Sheets/CHI-2294F-RecP-0317V1-LOCK.pdf",
    price: "$$$",
    r_value_text: "12.35",
    rtm_construction_type: '2" Thick - 2-Sided Steel',
    rtm_insulation_type: '1-3/8" Polyurethane',
    section_material: "Heavy Duty / 25 Ga. Steel"
  },
  2294: {
    panel_style: "Recessed",
    product_family: "Overlay Recessed Panel",
    door_style_text: "Recessed",
    family_brochure_link:
      "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Recessed-Panel/Recessed-Panel-Brochure.pdf",
    model_flyer_link:
      "https://cdn2.hubspot.net/hubfs/2029938/Professional/Specs/Residential/Sell-Sheets/CHI-2294-RecP-0317V1-LOCK.pdf",
    price: "$$$",
    r_value_text: "12.35",
    rtm_construction_type: '2" Thick - 2-Sided Steel',
    rtm_insulation_type: '1-3/8" Polyurethane',
    section_material: "Heavy Duty / 25 Ga. Steel"
  },
  2296: {
    panel_style: "Recessed",
    product_family: "Overlay Recessed Panel",
    door_style_text: "Recessed",
    family_brochure_link:
      "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Recessed-Panel/Recessed-Panel-Brochure.pdf",
    model_flyer_link:
      "https://cdn2.hubspot.net/hubfs/2029938/Professional/Specs/Residential/Sell-Sheets/CHI-2296-RecP-0317V1-LOCK.pdf?t=1525296360060",
    price: "$$$",
    r_value_text: "12.35",
    rtm_construction_type: '2" Thick - 2-Sided Steel',
    rtm_insulation_type: '1-3/8" Polyurethane',
    section_material: "Heavy Duty / 25 Ga. Steel"
  },
  2298: {
    panel_style: "Recessed",
    product_family: "Overlay Recessed Panel",
    door_style_text: "Recessed",
    family_brochure_link:
      "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Recessed-Panel/Recessed-Panel-Brochure.pdf",
    model_flyer_link:
      "https://cdn2.hubspot.net/hubfs/2029938/Professional/Specs/Residential/Sell-Sheets/CHI-2298-RecP-0317V1-LOCK.pdf?t=1525296360060",
    price: "$$$",
    r_value_text: "12.35",
    rtm_construction_type: '2" Thick - 2-Sided Steel',
    rtm_insulation_type: '1-3/8" Polyurethane',
    section_material: "Heavy Duty / 25 Ga. Steel"
  },
  2701: {
    panel_style: "Fiberglass",
    product_family: "High-Definition Fiberglass",
    door_style_text: "Fiberglass",
    family_brochure_link:
      "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Fiberglass/Fiberglass-Brochure.pdf?t=1529420522918",
    model_flyer_link:
      "https://cdn2.hubspot.net/hubfs/2029938/Professional/Specs/Residential/Sell-Sheets/FG-2701.pdf",
    price: "$$$$$",
    r_value_text: "16.95",
    rtm_construction_type: '2" Thick - 2-Sided Fiberglass and Steel',
    rtm_insulation_type: '1-7/8" Polyurethane',
    section_material: "Heavy Duty / Formed Fiberglass and 25 Ga. Steel"
  },
  2702: {
    panel_style: "Fiberglass",
    product_family: "High-Definition Fiberglass",
    door_style_text: "Fiberglass",
    family_brochure_link:
      "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Fiberglass/Fiberglass-Brochure.pdf?t=1529420522918",
    model_flyer_link:
      "https://cdn2.hubspot.net/hubfs/2029938/Professional/Specs/Residential/Sell-Sheets/FG-2702.pdf",
    price: "$$$$$",
    r_value_text: "16.95",
    rtm_construction_type: '2" Thick - 2-Sided Fiberglass and Steel',
    rtm_insulation_type: '1-7/8" Polyurethane',
    section_material: "Heavy Duty / Formed Fiberglass and 25 Ga. Steel"
  },
  2703: {
    panel_style: "Fiberglass",
    product_family: "High-Definition Fiberglass",
    door_style_text: "Fiberglass",
    family_brochure_link:
      "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Fiberglass/Fiberglass-Brochure.pdf?t=1529420522918",
    model_flyer_link:
      "https://cdn2.hubspot.net/hubfs/2029938/Professional/Specs/Residential/Sell-Sheets/FG-2703.pdf",
    price: "$$$$$",
    r_value_text: "16.95",
    rtm_construction_type: '2" Thick - 2-Sided Fiberglass and Steel',
    rtm_insulation_type: '1-7/8" Polyurethane',
    section_material: "Heavy Duty / Formed Fiberglass and 25 Ga. Steel"
  },
  2751: {
    panel_style: "Fiberglass",
    product_family: "High-Definition Fiberglass",
    door_style_text: "Fiberglass",
    family_brochure_link:
      "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Fiberglass/Fiberglass-Brochure.pdf?t=1529420522918",
    model_flyer_link:
      "https://cdn2.hubspot.net/hubfs/2029938/Professional/Specs/Residential/Sell-Sheets/FG-2751.pdf",
    price: "$$$$$",
    r_value_text: "16.95",
    rtm_construction_type: '2" Thick - 2-Sided Fiberglass and Steel',
    rtm_insulation_type: '1-7/8" Polyurethane',
    section_material: "Heavy Duty / Formed Fiberglass and 25 Ga. Steel"
  },
  2752: {
    panel_style: "Fiberglass",
    product_family: "High-Definition Fiberglass",
    door_style_text: "Fiberglass",
    family_brochure_link:
      "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Fiberglass/Fiberglass-Brochure.pdf?t=1529420522918",
    model_flyer_link:
      "https://cdn2.hubspot.net/hubfs/2029938/Professional/Specs/Residential/Sell-Sheets/FG-2752.pdf",
    price: "$$$$$",
    r_value_text: "16.95",
    rtm_construction_type: '2" Thick - 2-Sided Fiberglass and Steel',
    rtm_insulation_type: '1-7/8" Polyurethane',
    section_material: "Heavy Duty / Formed Fiberglass and 25 Ga. Steel"
  },
  3297: {
    panel_style: "Full-View",
    product_family: "Full-View Aluminum",
    door_style_text: "Full-View",
    family_brochure_link:
      "https://www.chiohd.com/hubfs/Homeowner/Products/Full-View/Full-View-Brochure.pdf",
    model_flyer_link:
      "https://www.chiohd.com/hubfs/3297-full-view-aluminum.pdf",
    price: "$$$$$",
    r_value_text: "",
    rtm_construction_type: '2" Thick - Insulated Aluminum Rails',
    rtm_insulation_type: "Polystyrene Insulation",
    section_material: "Heavy Duty / Aluminum"
  }
};
// RENDER DATA<><<<<<<><>><<<<<<<<<<<<<<<<<<<<><><><
const renderData = [
  {
    url: "https://www.chiohd.com/homeowners/garage-doors/accents/5283",
    data: {
      image_gallery: {
        auto_advance: true,
        caption_position: "superimpose",
        display_mode: "thumbnail",
        lightboxRows: 3,
        loop_slides: true,
        num_seconds: 5,
        show_pagination: true,
        sizing: "static",
        slides: [
          {
            alt_text: "5983-2",
            caption: null,
            img_src:
              "https://www.chiohd.com/hubfs/Homeowner/Products/Accents/Models/5983-2.jpg",
            link_url: null,
            open_in_new_tab: false,
            show_caption: false
          },
          {
            alt_text: "5983-3",
            caption: null,
            img_src:
              "https://www.chiohd.com/hubfs/Homeowner/Products/Accents/Models/5983-3.jpg",
            link_url: null,
            open_in_new_tab: false,
            show_caption: false
          },
          {
            alt_text: "5983-1",
            caption: null,
            img_src:
              "https://www.chiohd.com/hubfs/Homeowner/Products/Accents/Models/5983-1.jpg",
            link_url: null,
            open_in_new_tab: false,
            show_caption: false
          }
        ],
        transition: "slide"
      },
      kula_woodtone_options: {
        cedar: true,
        classic: false,
        dark_oak: true,
        display_woodtone_options_title: true,
        driftwood: true,
        light_oak: false,
        mahogany: true,
        modern: false,
        module_id: 2291028,
        type: "custom_widget",
        walnut: true,
        widget_name: "[KULA] Woodtone Options"
      },
      product_number: { header_tag: null, value: "5283" },
      product_name: {
        header_tag: null,
        value: __products[5283].product_family
      },
      door_image: {
        alt: "Stamped-Carriage-House-Short",
        height: 214,
        img_alt: "chi-52-sch-one-car.png",
        img_load_error: false,
        link: "",
        open_in_new_tab: false,
        original_height: 214,
        original_width: 270,
        src: "https://cdn2.hubspot.net/hubfs/2029938/chi-52-sch-one-car.png",
        width: 270
      },
      kula_raised_panel_options: {
        backing_text: __products[5283].section_material,
        door_style_text: __products[5283].panel_style,
        family_brochure_link:
          '\u003Ca href="' +
          __products[5283].family_brochure_link +
          '" target="_blank"\u003EDownload Brochure\u003C/a\u003E',
        model_flyer_link:
          '\u003Ca href="' +
          __products[5283].model_flyer_link +
          '" target="_blank"\u003EDownload Flyer\u003C/a\u003E',
        module_id: 2291134,
        price: __products[5283].price,
        r_value_text: __products[5283].r_value_text,
        rtm_construction_type: __products[5283].rtm_construction_type,
        rtm_insulation_type: __products[5283].rtm_insulation_type,
        widget_name: "[KULA] Raised Panel Options"
      },
      door_image_caption: { value: "Short Panel" },
      customization_title: { value: "Customization Options" },
      window_inserts: {
        cascade_short: false,
        cathedral_short: false,
        eight_piece_sunburst: false,
        five_piece_sunburst: false,
        four_piece_sunburst: false,
        long_cascade: true,
        long_four_piece_arched_madison: true,
        long_four_piece_arched_stockton: true,
        long_four_piece_sunburst: false,
        long_madison: true,
        long_praire: false,
        long_sherwood: false,
        long_stockton: true,
        long_three_piece_arched_madison: true,
        long_three_piece_arched_stockton: true,
        long_three_piece_sunburst: false,
        long_two_piece_arched_madison: true,
        long_two_piece_arched_stockton: true,
        long_two_piece_sunburst: false,
        long_waterton: false,
        module_id: 2421584,
        prairie_short: false,
        seven_piece_sunburst: false,
        sherwood: false,
        six_piece_sunburst: false,
        stockton_short: false,
        waterton_short: false,
        widget_name: "Window Inserts"
      },
      designer_glass: {
        display_designer_glass_title: true,
        florence_short: true,
        hampton_short: true,
        hawthorne_platinum_short: false,
        hawthorne_short: false,
        lasalle: true,
        module_id: 2452105,
        newport_short: true,
        somerset_brass_short: false,
        somerset_platinum_short: false,
        temple_short: false,
        widget_name: "Designer Glass"
      },
      glass_options: {
        frosted_short: true,
        glue_chip_short: true,
        module_id: 2470253,
        obscure_short: true,
        plain_short: true,
        seeded: true,
        tinted_short: true,
        widget_name: "Glass Options"
      },
      kula_color_options: {
        almond: false,
        black: false,
        bronze: false,
        brown: false,
        desert_tan: false,
        evergreen: false,
        gray: false,
        module_id: 2210014,
        sandstone: false,
        show_color_options_title: false,
        white: false,
        widget_name: "[KULA] Color Options"
      },
      rtm_additional_text: {
        custom_widget_id: 5808245394,
        field_types: { additional_text: "boolean", rich_text: "richtext" },
        module_id: 2906367,
        per_widget_wrapper_html: "",
        tag: "custom_widget",
        type: "custom_widget",
        widget_name: "[RTM] Additional Text",
        wrapping_html: ""
      },
      model_number_used_in_algolia_search: { value: "5283" }
    }
  },
  {
    url: "https://www.chiohd.com/homeowners/garage-doors/accents/5216",
    data: {
      image_gallery: {
        auto_advance: true,
        caption_position: "superimpose",
        display_mode: "thumbnail",
        lightboxRows: 3,
        loop_slides: true,
        num_seconds: 5,
        show_pagination: true,
        sizing: "static",
        slides: [
          {
            alt_text: "Small (72dpi)-5916-driftwood",
            caption: null,
            img_src:
              "https://www.chiohd.com/hubfs/Small%20(72dpi)-5916-driftwood.jpg",
            link_url: null,
            open_in_new_tab: false,
            show_caption: false
          },
          {
            alt_text: "Small (72dpi)-CHI060215_0046",
            caption: null,
            img_src:
              "https://www.chiohd.com/hubfs/Small%20(72dpi)-CHI060215_0046.jpg",
            link_url: null,
            open_in_new_tab: false,
            show_caption: false
          },
          {
            alt_text: "Small (72dpi)-ADFTER FERR (1024x576)",
            caption: null,
            img_src:
              "https://www.chiohd.com/hubfs/Small%20(72dpi)-ADFTER%20FERR%20(1024x576).jpg",
            link_url: null,
            open_in_new_tab: false,
            show_caption: false
          }
        ],
        transition: "slide"
      },
      kula_woodtone_options: {
        cedar: true,
        classic: false,
        dark_oak: true,
        display_woodtone_options_title: true,
        driftwood: true,
        light_oak: false,
        mahogany: true,
        modern: false,
        module_id: 2291028,
        type: "custom_widget",
        walnut: true,
        widget_name: "[KULA] Woodtone Options"
      },
      product_number: { header_tag: null, value: "5216" },
      product_name: {
        header_tag: null,
        value: __products[5216].product_family
      },
      door_image: {
        alt: "Stamped-Carriage-House-Short",
        height: 214,
        img_alt: "chi-52-sch-one-car.png",
        img_load_error: false,
        link: "",
        open_in_new_tab: false,
        original_height: 214,
        original_width: 270,
        src: "https://cdn2.hubspot.net/hubfs/2029938/chi-52-sch-one-car.png",
        width: 270
      },
      kula_raised_panel_options: {
        backing_text: __products[5216].section_material,
        door_style_text: __products[5216].panel_style,
        family_brochure_link:
          '\u003Ca href="' +
          __products[5216].family_brochure_link +
          '" target="_blank"\u003EDownload Brochure\u003C/a\u003E',
        model_flyer_link:
          '\u003Ca href="' +
          __products[5216].model_flyer_link +
          '" target="_blank"\u003EDownload Flyer\u003C/a\u003E',
        module_id: 2291134,
        price: __products[5216].price,
        r_value_text: __products[5216].r_value_text,
        rtm_construction_type: __products[5216].rtm_construction_type,
        rtm_insulation_type: __products[5216].rtm_insulation_type,
        widget_name: "[KULA] Raised Panel Options"
      },
      door_image_caption: { value: "Short Panel" },
      customization_title: { value: "Customization Options" },
      window_inserts: {
        cascade_short: false,
        cathedral_short: false,
        eight_piece_sunburst: false,
        five_piece_sunburst: false,
        four_piece_sunburst: false,
        long_cascade: true,
        long_four_piece_arched_madison: true,
        long_four_piece_arched_stockton: true,
        long_four_piece_sunburst: false,
        long_madison: true,
        long_praire: false,
        long_sherwood: false,
        long_stockton: true,
        long_three_piece_arched_madison: true,
        long_three_piece_arched_stockton: true,
        long_three_piece_sunburst: false,
        long_two_piece_arched_madison: true,
        long_two_piece_arched_stockton: true,
        long_two_piece_sunburst: false,
        long_waterton: false,
        module_id: 2421584,
        prairie_short: false,
        seven_piece_sunburst: false,
        sherwood: false,
        six_piece_sunburst: false,
        stockton_short: false,
        waterton_short: false,
        widget_name: "Window Inserts"
      },
      designer_glass: {
        display_designer_glass_title: true,
        florence_short: true,
        hampton_short: true,
        hawthorne_platinum_short: false,
        hawthorne_short: false,
        lasalle: true,
        module_id: 2452105,
        newport_short: true,
        somerset_brass_short: false,
        somerset_platinum_short: false,
        temple_short: false,
        widget_name: "Designer Glass"
      },
      glass_options: {
        frosted_short: true,
        glue_chip_short: true,
        module_id: 2470253,
        obscure_short: true,
        plain_short: true,
        seeded: true,
        tinted_short: true,
        widget_name: "Glass Options"
      },
      kula_color_options: {
        almond: false,
        black: false,
        bronze: false,
        brown: false,
        desert_tan: false,
        evergreen: false,
        gray: false,
        module_id: 2210014,
        sandstone: false,
        show_color_options_title: false,
        white: false,
        widget_name: "[KULA] Color Options"
      },
      rtm_additional_text: {
        custom_widget_id: 5808245394,
        field_types: { additional_text: "boolean", rich_text: "richtext" },
        module_id: 2906367,
        per_widget_wrapper_html: "",
        tag: "custom_widget",
        type: "custom_widget",
        widget_name: "[RTM] Additional Text",
        wrapping_html: ""
      },
      model_number_used_in_algolia_search: { value: "5216" }
    }
  },
  {
    url: "https://www.chiohd.com/garage-doors/shoreline/5602",
    data: {
      image_gallery: {
        auto_advance: true,
        caption_position: "superimpose",
        display_mode: "standard",
        lightboxRows: 3,
        loop_slides: true,
        num_seconds: 5,
        show_pagination: true,
        sizing: "static",
        slides: [
          {
            alt_text: "Shoreline",
            caption: "",
            href: "",
            img_src:
              "https://www.chiohd.com/hubfs/chi19-shoreline-0117-0001.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          },
          {
            alt_text: "Shoreline-Detail-1",
            caption: null,
            img_src: "https://www.chiohd.com/hubfs/Shoreline-Detail-1.png",
            link_url: null,
            open_in_new_tab: false,
            show_caption: false
          },
          {
            alt_text: "Shoreline-Hardware",
            caption: null,
            img_src: "https://www.chiohd.com/hubfs/Shoreline-Hardware.png",
            link_url: null,
            open_in_new_tab: false,
            show_caption: false
          }
        ],
        transition: "slide"
      },
      kula_woodtone_options: {
        cedar: false,
        classic: false,
        dark_oak: false,
        display_woodtone_options_title: true,
        driftwood: false,
        light_oak: false,
        mahogany: false,
        modern: false,
        module_id: 2291028,
        shoreline_driftwood: true,
        shoreline_walnut: true,
        walnut: false,
        widget_name: "[KULA] Woodtone Options"
      },
      product_number: { header_tag: null, value: "5602" },
      product_name: {
        header_tag: null,
        value: __products[5602].product_family
      },
      door_image: {
        alt: "chi-cho-steel-one-car",
        constrain_proportions: true,
        height: 214,
        link: "",
        open_in_new_tab: false,
        src: "https://www.chiohd.com/hubfs/chi-cho-steel-one-car.png",
        width: 269
      },
      kula_raised_panel_options: {
        backing_text: __products[5602].section_material,
        door_style_text: __products[5602].panel_style,
        family_brochure_link:
          '\u003Ca href="' +
          __products[5602].family_brochure_link +
          '" target="_blank"\u003EDownload Brochure\u003C/a\u003E',
        model_flyer_link:
          '\u003Ca href="' +
          __products[5602].model_flyer_link +
          '" target="_blank"\u003EDownload Flyer\u003C/a\u003E',
        module_id: 2291134,
        price: __products[5602].price,
        r_value_text: __products[5602].r_value_text,
        rtm_construction_type: __products[5602].rtm_construction_type,
        rtm_insulation_type: __products[5602].rtm_insulation_type,
        widget_name: "[KULA] Raised Panel Options"
      },
      door_image_caption: { value: "Overlay" },
      customization_title: { value: "Customization Options" },
      window_inserts: {
        carriage_house_four_p_madison: true,
        carriage_house_four_p_madison_double: true,
        carriage_house_four_p_stockton: true,
        carriage_house_four_p_stockton_double: true,
        carriage_house_madison: true,
        carriage_house_madison_double: true,
        carriage_house_stockton_double: true,
        carriage_house_stockton_single: true,
        carriage_house_two_p_madison: true,
        carriage_house_two_p_madison_double: true,
        carriage_house_two_p_stockton: true,
        carriage_house_two_p_stockton_double: true,
        cascade_short: false,
        cathedral_short: false,
        eight_piece_sunburst: false,
        five_piece_sunburst: false,
        four_piece_sunburst: false,
        long_cascade: false,
        long_four_piece_arched_madison: false,
        long_four_piece_arched_stockton: false,
        long_four_piece_sunburst: false,
        long_madison: false,
        long_praire: false,
        long_sherwood: false,
        long_stockton: false,
        long_three_piece_arched_madison: false,
        long_three_piece_arched_stockton: false,
        long_three_piece_sunburst: false,
        long_two_piece_arched_madison: false,
        long_two_piece_arched_stockton: false,
        long_two_piece_sunburst: false,
        long_waterton: false,
        module_id: 2421584,
        prairie_short: false,
        seven_piece_sunburst: false,
        sherwood: false,
        six_piece_sunburst: false,
        stockton_short: false,
        waterton_short: false,
        widget_name: "Window Inserts"
      },
      designer_glass: {
        display_designer_glass_title: false,
        florence_short: false,
        hampton_short: false,
        hawthorne_platinum_short: false,
        hawthorne_short: false,
        lasalle: false,
        module_id: 2452105,
        newport_short: false,
        somerset_brass_short: false,
        somerset_platinum_short: false,
        temple_short: false,
        widget_name: "Designer Glass"
      },
      glass_options: {
        faux: true,
        frosted_short: false,
        glue_chip_short: true,
        module_id: 2470253,
        obscure_short: true,
        plain_short: true,
        seeded: true,
        tinted_short: true,
        widget_name: "Glass Options"
      },
      kula_color_options: {
        almond: false,
        black: false,
        bronze: false,
        brown: false,
        desert_tan: false,
        evergreen: false,
        gray: false,
        module_id: 2210014,
        redirectUrl:
          "https://app.hubspot.com/content/2029938/edit-beta/5690667477",
        sandstone: false,
        show_color_options_title: false,
        white: false,
        widget_name: "[KULA] Color Options"
      },
      rtm_additional_text: {
        custom_widget_id: 5808245394,
        field_types: { additional_text: "boolean", rich_text: "richtext" },
        module_id: 2906367,
        per_widget_wrapper_html: "",
        tag: "custom_widget",
        type: "custom_widget",
        widget_name: "[RTM] Additional Text",
        wrapping_html: ""
      },
      model_number_used_in_algolia_search: { value: "5602" }
    }
  },
  {
    url: "https://www.chiohd.com/homeowners/garage-doors/flush-panel/2147",
    data: {
      image_gallery: {
        auto_advance: true,
        caption_position: "superimpose",
        display_mode: "thumbnail",
        lightbox: false,
        lightboxRows: 3,
        loop_slides: true,
        num_seconds: 5,
        only_thumbnails: false,
        show_pagination: true,
        sizing: "static",
        slides: [
          {
            alt_text: "Small (72dpi)-22F_CHI0005.jpg",
            caption: "",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Flush%20Panel/Gallery/Small%20(72dpi)-22F_CHI0005.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          },
          {
            alt_text: "Small (72dpi)-22F_CHI0006.jpg",
            caption: "",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Flush%20Panel/Gallery/Small%20(72dpi)-22F_CHI0006.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          },
          {
            alt_text: "Small (72dpi)-CHI082913_0106.jpg",
            caption: "",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Flush%20Panel/Gallery/Small%20(72dpi)-CHI082913_0106.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          }
        ],
        transition: "slide",
        with_thumbnail_nav: true
      },
      kula_woodtone_options: {
        cedar: true,
        classic: false,
        dark_oak: true,
        display_woodtone_options_title: true,
        driftwood: true,
        light_oak: false,
        mahogany: true,
        modern: false,
        module_id: 2291028,
        walnut: true,
        widget_name: "[KULA] Woodtone Options"
      },
      product_number: { header_tag: null, value: "2147" },
      product_name: {
        header_tag: null,
        value: __products[2147].product_family
      },
      door_image: {
        alt: "chi-22-52-f-one-car.png",
        height: 214,
        img_alt: "chi-22-52-f-one-car.png",
        img_load_error: false,
        link: "",
        open_in_new_tab: false,
        original_height: 214,
        original_width: 270,
        src: "https://cdn2.hubspot.net/hubfs/2029938/chi-22-52-f-one-car.png",
        width: 270
      },
      kula_raised_panel_options: {
        backing_text: __products[2147].section_material,
        door_style_text: __products[2147].panel_style,
        family_brochure_link:
          '\u003Ca href="' +
          __products[2147].family_brochure_link +
          '" target="_blank"\u003EDownload Brochure\u003C/a\u003E',
        model_flyer_link:
          '\u003Ca href="' +
          __products[2147].model_flyer_link +
          '" target="_blank"\u003EDownload Flyer\u003C/a\u003E',
        module_id: 2291134,
        price: __products[2147].price,
        r_value_text: __products[2147].r_value_text,
        rtm_construction_type: __products[2147].rtm_construction_type,
        rtm_insulation_type: __products[2147].rtm_insulation_type,
        widget_name: "[KULA] Raised Panel Options"
      },
      door_image_caption: { value: "Flush" },
      customization_title: { value: "Customization Options" },
      window_inserts: {
        carriage_house_four_p_madison: false,
        carriage_house_four_p_madison_double: false,
        carriage_house_four_p_stockton: false,
        carriage_house_four_p_stockton_double: false,
        carriage_house_madison: false,
        carriage_house_madison_double: false,
        carriage_house_stockton_double: false,
        carriage_house_stockton_single: false,
        carriage_house_two_p_madison: false,
        carriage_house_two_p_madison_double: false,
        carriage_house_two_p_stockton: false,
        carriage_house_two_p_stockton_double: false,
        cascade_short: false,
        cathedral_short: false,
        eight_piece_sunburst: false,
        five_piece_sunburst: false,
        four_piece_sunburst: false,
        long_cascade: true,
        long_four_piece_arched_madison: false,
        long_four_piece_arched_stockton: false,
        long_four_piece_sunburst: false,
        long_madison: true,
        long_praire: true,
        long_sherwood: true,
        long_stockton: true,
        long_three_piece_arched_madison: false,
        long_three_piece_arched_stockton: false,
        long_three_piece_sunburst: false,
        long_two_piece_arched_madison: true,
        long_two_piece_arched_stockton: true,
        long_two_piece_sunburst: true,
        long_waterton: true,
        module_id: 2421584,
        prairie_short: false,
        recessed_madison_combo: false,
        recessed_madison_long: false,
        recessed_madison_short: false,
        recessed_stockton_combo: false,
        recessed_stockton_long: false,
        recessed_stockton_short: false,
        seven_piece_sunburst: false,
        sherwood: false,
        show_window_insert_title: true,
        six_piece_sunburst: false,
        stockton_short: false,
        waterton_short: false,
        widget_name: "Window Inserts"
      },
      designer_glass: {
        display_designer_glass_title: true,
        florence_short: true,
        hampton_short: true,
        hawthorne_platinum_short: true,
        hawthorne_short: false,
        lasalle: false,
        module_id: 2452105,
        newport_short: true,
        somerset_brass_short: false,
        somerset_platinum_short: true,
        temple_short: true,
        widget_name: "Designer Glass"
      },
      glass_options: {
        custom_widget_id: 5562484302,
        field_types: {
          frosted_short: "boolean",
          glue_chip_short: "boolean",
          plain_short: "boolean",
          tinted_short: "boolean"
        },
        module_id: 2470253,
        per_widget_wrapper_html: "",
        tag: "custom_widget",
        type: "custom_widget",
        widget_name: "Glass Options",
        wrapping_html: ""
      },
      kula_color_options: {
        almond: true,
        aluminum: false,
        black: true,
        bronze: false,
        brown: true,
        desert_tan: false,
        evergreen: false,
        gray: true,
        module_id: 2210014,
        sandstone: true,
        show_color_options_title: true,
        white: true,
        widget_name: "[KULA] Color Options"
      },
      rtm_additional_text: {
        custom_widget_id: 5808245394,
        field_types: { additional_text: "boolean", rich_text: "richtext" },
        module_id: 2906367,
        per_widget_wrapper_html: "",
        tag: "custom_widget",
        type: "custom_widget",
        widget_name: "[RTM] Additional Text",
        wrapping_html: ""
      },
      model_number_used_in_algolia_search: { value: "2147" }
    }
  },
  {
    url: "https://www.chiohd.com/homeowners/garage-doors/flush-panel/2148",
    data: {
      image_gallery: {
        auto_advance: true,
        caption_position: "superimpose",
        display_mode: "thumbnail",
        lightbox: false,
        lightboxRows: 3,
        loop_slides: true,
        num_seconds: 5,
        only_thumbnails: false,
        show_pagination: true,
        sizing: "static",
        slides: [
          {
            alt_text: "Small (72dpi)-22F_CHI0005.jpg",
            caption: "",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Flush%20Panel/Gallery/Small%20(72dpi)-22F_CHI0005.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          },
          {
            alt_text: "Small (72dpi)-22F_CHI0006.jpg",
            caption: "",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Flush%20Panel/Gallery/Small%20(72dpi)-22F_CHI0006.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          },
          {
            alt_text: "Small (72dpi)-CHI082913_0106.jpg",
            caption: "",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Flush%20Panel/Gallery/Small%20(72dpi)-CHI082913_0106.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          }
        ],
        transition: "slide",
        with_thumbnail_nav: true
      },
      kula_woodtone_options: {
        cedar: true,
        classic: false,
        dark_oak: true,
        display_woodtone_options_title: true,
        driftwood: true,
        light_oak: false,
        mahogany: true,
        modern: false,
        module_id: 2291028,
        walnut: true,
        widget_name: "[KULA] Woodtone Options"
      },
      product_number: { header_tag: null, value: "2148" },
      product_name: {
        header_tag: null,
        value: __products[2148].product_family
      },
      door_image: {
        alt: "chi-22-52-f-one-car.png",
        height: 214,
        img_alt: "chi-22-52-f-one-car.png",
        img_load_error: false,
        link: "",
        open_in_new_tab: false,
        original_height: 214,
        original_width: 270,
        src: "https://cdn2.hubspot.net/hubfs/2029938/chi-22-52-f-one-car.png",
        width: 270
      },
      kula_raised_panel_options: {
        backing_text: __products[2148].section_material,
        door_style_text: __products[2148].panel_style,
        family_brochure_link:
          '\u003Ca href="' +
          __products[2148].family_brochure_link +
          '" target="_blank"\u003EDownload Brochure\u003C/a\u003E',
        model_flyer_link:
          '\u003Ca href="' +
          __products[2148].model_flyer_link +
          '" target="_blank"\u003EDownload Flyer\u003C/a\u003E',
        module_id: 2291134,
        price: __products[2148].price,
        r_value_text: __products[2148].r_value_text,
        rtm_construction_type: __products[2148].rtm_construction_type,
        rtm_insulation_type: __products[2148].rtm_insulation_type,
        widget_name: "[KULA] Raised Panel Options"
      },
      door_image_caption: { value: "Flush" },
      customization_title: { value: "Customization Options" },
      window_inserts: {
        carriage_house_four_p_madison: false,
        carriage_house_four_p_madison_double: false,
        carriage_house_four_p_stockton: false,
        carriage_house_four_p_stockton_double: false,
        carriage_house_madison: false,
        carriage_house_madison_double: false,
        carriage_house_stockton_double: false,
        carriage_house_stockton_single: false,
        carriage_house_two_p_madison: false,
        carriage_house_two_p_madison_double: false,
        carriage_house_two_p_stockton: false,
        carriage_house_two_p_stockton_double: false,
        cascade_short: false,
        cathedral_short: false,
        eight_piece_sunburst: false,
        five_piece_sunburst: false,
        four_piece_sunburst: false,
        long_cascade: true,
        long_four_piece_arched_madison: false,
        long_four_piece_arched_stockton: false,
        long_four_piece_sunburst: false,
        long_madison: true,
        long_praire: true,
        long_sherwood: true,
        long_stockton: true,
        long_three_piece_arched_madison: false,
        long_three_piece_arched_stockton: false,
        long_three_piece_sunburst: false,
        long_two_piece_arched_madison: true,
        long_two_piece_arched_stockton: true,
        long_two_piece_sunburst: true,
        long_waterton: true,
        module_id: 2421584,
        prairie_short: false,
        recessed_madison_combo: false,
        recessed_madison_long: false,
        recessed_madison_short: false,
        recessed_stockton_combo: false,
        recessed_stockton_long: false,
        recessed_stockton_short: false,
        seven_piece_sunburst: false,
        sherwood: false,
        show_window_insert_title: true,
        six_piece_sunburst: false,
        stockton_short: false,
        waterton_short: false,
        widget_name: "Window Inserts"
      },
      designer_glass: {
        display_designer_glass_title: true,
        florence_short: true,
        hampton_short: true,
        hawthorne_platinum_short: true,
        hawthorne_short: false,
        lasalle: false,
        module_id: 2452105,
        newport_short: true,
        somerset_brass_short: false,
        somerset_platinum_short: true,
        temple_short: true,
        widget_name: "Designer Glass"
      },
      glass_options: {
        custom_widget_id: 5562484302,
        field_types: {
          frosted_short: "boolean",
          glue_chip_short: "boolean",
          plain_short: "boolean",
          tinted_short: "boolean"
        },
        module_id: 2470253,
        per_widget_wrapper_html: "",
        tag: "custom_widget",
        type: "custom_widget",
        widget_name: "Glass Options",
        wrapping_html: ""
      },
      kula_color_options: {
        almond: true,
        aluminum: false,
        black: true,
        bronze: true,
        brown: true,
        desert_tan: true,
        evergreen: false,
        gray: true,
        module_id: 2210014,
        sandstone: true,
        show_color_options_title: true,
        white: true,
        widget_name: "[KULA] Color Options"
      },
      rtm_additional_text: {
        custom_widget_id: 5808245394,
        field_types: { additional_text: "boolean", rich_text: "richtext" },
        module_id: 2906367,
        per_widget_wrapper_html: "",
        tag: "custom_widget",
        type: "custom_widget",
        widget_name: "[RTM] Additional Text",
        wrapping_html: ""
      },
      model_number_used_in_algolia_search: { value: "2148" }
    }
  },
  {
    url: "https://www.chiohd.com/homeowners/garage-doors/flush-panel/2158",
    data: {
      image_gallery: {
        auto_advance: true,
        caption_position: "superimpose",
        display_mode: "thumbnail",
        lightboxRows: 3,
        loop_slides: true,
        num_seconds: 5,
        show_pagination: true,
        sizing: "static",
        slides: [
          {
            alt_text: "Skyline-Flush",
            caption: null,
            img_src:
              "https://www.chiohd.com/hubfs/Homeowner/Collections/Studio/Skyline-Hero.jpg",
            link_url: null,
            open_in_new_tab: false,
            show_caption: false
          },
          {
            alt_text: "Skyline Flush",
            caption: null,
            img_src:
              "https://www.chiohd.com/hubfs/chi13-photo-home-skyline-flush-0815-0402-1.jpg",
            link_url: null,
            open_in_new_tab: false,
            show_caption: false
          },
          {
            alt_text: "Small (72dpi)-22F_CHI0005.jpg",
            caption: "",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Flush%20Panel/Gallery/Small%20(72dpi)-22F_CHI0005.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          },
          {
            alt_text: "Small (72dpi)-22F_CHI0006.jpg",
            caption: "",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Flush%20Panel/Gallery/Small%20(72dpi)-22F_CHI0006.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          },
          {
            alt_text: "Small (72dpi)-CHI082913_0106.jpg",
            caption: "",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Flush%20Panel/Gallery/Small%20(72dpi)-CHI082913_0106.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          }
        ],
        transition: "slide"
      },
      kula_woodtone_options: {
        cedar: true,
        classic: false,
        dark_oak: true,
        display_woodtone_options_title: true,
        driftwood: true,
        light_oak: false,
        mahogany: true,
        modern: false,
        module_id: 2291028,
        walnut: true,
        widget_name: "[KULA] Woodtone Options"
      },
      product_number: { header_tag: null, value: "2158" },
      product_name: {
        header_tag: null,
        value: __products[2158].product_family
      },
      door_image: {
        alt: "Oversized",
        constrain_proportions: true,
        height: 380,
        link: "",
        open_in_new_tab: false,
        src: "https://www.chiohd.com/hubfs/Oversized.png",
        width: 476
      },
      kula_raised_panel_options: {
        backing_text: __products[2158].section_material,
        door_style_text: __products[2158].panel_style,
        family_brochure_link:
          '\u003Ca href="' +
          __products[2158].family_brochure_link +
          '" target="_blank"\u003EDownload Brochure\u003C/a\u003E',
        model_flyer_link:
          '\u003Ca href="' +
          __products[2158].model_flyer_link +
          '" target="_blank"\u003EDownload Flyer\u003C/a\u003E',
        module_id: 2291134,
        price: __products[2158].price,
        r_value_text: __products[2158].r_value_text,
        rtm_construction_type: __products[2158].rtm_construction_type,
        rtm_insulation_type: __products[2158].rtm_insulation_type,
        widget_name: "[KULA] Raised Panel Options"
      },
      door_image_caption: { value: "Flush" },
      customization_title: { value: "Customization Options" },
      window_inserts: {
        carriage_house_four_p_madison: false,
        carriage_house_four_p_madison_double: false,
        carriage_house_four_p_stockton: false,
        carriage_house_four_p_stockton_double: false,
        carriage_house_madison: false,
        carriage_house_madison_double: false,
        carriage_house_stockton_double: false,
        carriage_house_stockton_single: false,
        carriage_house_two_p_madison: false,
        carriage_house_two_p_madison_double: false,
        carriage_house_two_p_stockton: false,
        carriage_house_two_p_stockton_double: false,
        cascade_short: false,
        cathedral_short: false,
        eight_piece_sunburst: false,
        five_piece_sunburst: false,
        four_piece_sunburst: false,
        long_cascade: true,
        long_four_piece_arched_madison: false,
        long_four_piece_arched_stockton: false,
        long_four_piece_sunburst: false,
        long_madison: true,
        long_praire: true,
        long_sherwood: true,
        long_stockton: true,
        long_three_piece_arched_madison: false,
        long_three_piece_arched_stockton: false,
        long_three_piece_sunburst: false,
        long_two_piece_arched_madison: true,
        long_two_piece_arched_stockton: true,
        long_two_piece_sunburst: true,
        long_waterton: true,
        module_id: 2421584,
        prairie_short: false,
        recessed_madison_combo: false,
        recessed_madison_long: false,
        recessed_madison_short: false,
        recessed_stockton_combo: false,
        recessed_stockton_long: false,
        recessed_stockton_short: false,
        seven_piece_sunburst: false,
        sherwood: false,
        show_window_insert_title: true,
        six_piece_sunburst: false,
        stockton_short: false,
        waterton_short: false,
        widget_name: "Window Inserts"
      },
      designer_glass: {
        display_designer_glass_title: true,
        florence_short: true,
        hampton_short: true,
        hawthorne_platinum_short: false,
        hawthorne_short: false,
        lasalle: true,
        module_id: 2452105,
        newport_short: true,
        somerset_brass_short: false,
        somerset_platinum_short: false,
        temple_short: false,
        widget_name: "Designer Glass"
      },
      glass_options: {
        custom_widget_id: 5562484302,
        field_types: {
          frosted_short: "boolean",
          glue_chip_short: "boolean",
          plain_short: "boolean",
          tinted_short: "boolean"
        },
        module_id: 2470253,
        per_widget_wrapper_html: "",
        seeded: true,
        tag: "custom_widget",
        type: "custom_widget",
        widget_name: "Glass Options",
        wrapping_html: ""
      },
      kula_color_options: {
        almond: true,
        aluminum: false,
        black: true,
        bronze: true,
        brown: true,
        desert_tan: true,
        evergreen: false,
        gray: true,
        module_id: 2210014,
        sandstone: true,
        show_color_options_title: true,
        white: true,
        widget_name: "[KULA] Color Options"
      },
      rtm_additional_text: {
        custom_widget_id: 5808245394,
        field_types: { additional_text: "boolean", rich_text: "richtext" },
        module_id: 2906367,
        per_widget_wrapper_html: "",
        tag: "custom_widget",
        type: "custom_widget",
        widget_name: "[RTM] Additional Text",
        wrapping_html: ""
      },
      model_number_used_in_algolia_search: { value: "2158" }
    }
  },
  {
    url: "https://www.chiohd.com/homeowners/garage-doors/flush-panel/2157",
    data: {
      image_gallery: {
        auto_advance: true,
        caption_position: "superimpose",
        display_mode: "thumbnail",
        lightboxRows: 3,
        loop_slides: true,
        num_seconds: 5,
        show_pagination: true,
        sizing: "static",
        slides: [
          {
            alt_text: "Skyline-Flush",
            caption: null,
            img_src:
              "https://www.chiohd.com/hubfs/Homeowner/Collections/Studio/Skyline-Hero.jpg",
            link_url: null,
            open_in_new_tab: false,
            show_caption: false
          },
          {
            alt_text: "Small (72dpi)-22F_CHI0005.jpg",
            caption: "",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Flush%20Panel/Gallery/Small%20(72dpi)-22F_CHI0005.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          },
          {
            alt_text: "Small (72dpi)-22F_CHI0006.jpg",
            caption: "",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Flush%20Panel/Gallery/Small%20(72dpi)-22F_CHI0006.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          },
          {
            alt_text: "Small (72dpi)-CHI082913_0106.jpg",
            caption: "",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Flush%20Panel/Gallery/Small%20(72dpi)-CHI082913_0106.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          }
        ],
        transition: "slide"
      },
      kula_woodtone_options: {
        cedar: true,
        classic: false,
        dark_oak: true,
        display_woodtone_options_title: true,
        driftwood: true,
        light_oak: false,
        mahogany: true,
        modern: false,
        module_id: 2291028,
        walnut: true,
        widget_name: "[KULA] Woodtone Options"
      },
      product_number: { header_tag: null, value: "2157" },
      product_name: {
        header_tag: null,
        value: __products[2157].product_family
      },
      door_image: {
        alt: "Oversized",
        constrain_proportions: true,
        height: 380,
        link: "",
        open_in_new_tab: false,
        src: "https://www.chiohd.com/hubfs/Oversized.png",
        width: 476
      },
      kula_raised_panel_options: {
        backing_text: __products[2157].section_material,
        door_style_text: __products[2157].panel_style,
        family_brochure_link:
          '\u003Ca href="' +
          __products[2157].family_brochure_link +
          '" target="_blank"\u003EDownload Brochure\u003C/a\u003E',
        model_flyer_link:
          '\u003Ca href="' +
          __products[2157].model_flyer_link +
          '" target="_blank"\u003EDownload Flyer\u003C/a\u003E',
        module_id: 2291134,
        price: __products[2157].price,
        r_value_text: __products[2157].r_value_text,
        rtm_construction_type: __products[2157].rtm_construction_type,
        rtm_insulation_type: __products[2157].rtm_insulation_type,
        widget_name: "[KULA] Raised Panel Options"
      },
      door_image_caption: { value: "Flush" },
      customization_title: { value: "Customization Options" },
      window_inserts: {
        carriage_house_four_p_madison: false,
        carriage_house_four_p_madison_double: false,
        carriage_house_four_p_stockton: false,
        carriage_house_four_p_stockton_double: false,
        carriage_house_madison: false,
        carriage_house_madison_double: false,
        carriage_house_stockton_double: false,
        carriage_house_stockton_single: false,
        carriage_house_two_p_madison: false,
        carriage_house_two_p_madison_double: false,
        carriage_house_two_p_stockton: false,
        carriage_house_two_p_stockton_double: false,
        cascade_short: false,
        cathedral_short: false,
        eight_piece_sunburst: false,
        five_piece_sunburst: false,
        four_piece_sunburst: false,
        long_cascade: true,
        long_four_piece_arched_madison: false,
        long_four_piece_arched_stockton: false,
        long_four_piece_sunburst: false,
        long_madison: true,
        long_praire: true,
        long_sherwood: true,
        long_stockton: true,
        long_three_piece_arched_madison: false,
        long_three_piece_arched_stockton: false,
        long_three_piece_sunburst: false,
        long_two_piece_arched_madison: true,
        long_two_piece_arched_stockton: true,
        long_two_piece_sunburst: true,
        long_waterton: true,
        module_id: 2421584,
        prairie_short: false,
        recessed_madison_combo: false,
        recessed_madison_long: false,
        recessed_madison_short: false,
        recessed_stockton_combo: false,
        recessed_stockton_long: false,
        recessed_stockton_short: false,
        seven_piece_sunburst: false,
        sherwood: false,
        show_window_insert_title: true,
        six_piece_sunburst: false,
        stockton_short: false,
        waterton_short: false,
        widget_name: "Window Inserts"
      },
      designer_glass: {
        display_designer_glass_title: true,
        florence_short: true,
        hampton_short: true,
        hawthorne_platinum_short: false,
        hawthorne_short: false,
        lasalle: true,
        module_id: 2452105,
        newport_short: true,
        somerset_brass_short: false,
        somerset_platinum_short: false,
        temple_short: false,
        widget_name: "Designer Glass"
      },
      glass_options: {
        custom_widget_id: 5562484302,
        field_types: {
          frosted_short: "boolean",
          glue_chip_short: "boolean",
          plain_short: "boolean",
          tinted_short: "boolean"
        },
        module_id: 2470253,
        per_widget_wrapper_html: "",
        seeded: true,
        tag: "custom_widget",
        type: "custom_widget",
        widget_name: "Glass Options",
        wrapping_html: ""
      },
      kula_color_options: {
        almond: true,
        aluminum: false,
        black: true,
        bronze: false,
        brown: true,
        desert_tan: false,
        evergreen: false,
        gray: true,
        module_id: 2210014,
        sandstone: true,
        show_color_options_title: true,
        white: true,
        widget_name: "[KULA] Color Options"
      },
      rtm_additional_text: {
        custom_widget_id: 5808245394,
        field_types: { additional_text: "boolean", rich_text: "richtext" },
        module_id: 2906367,
        per_widget_wrapper_html: "",
        tag: "custom_widget",
        type: "custom_widget",
        widget_name: "[RTM] Additional Text",
        wrapping_html: ""
      },
      model_number_used_in_algolia_search: { value: "2157" }
    }
  },
  {
    url: "https://www.chiohd.com/homeowners/garage-doors/flush-panel/4150",
    data: {
      image_gallery: {
        auto_advance: true,
        caption_position: "superimpose",
        display_mode: "thumbnail",
        lightbox: false,
        lightboxRows: 3,
        loop_slides: true,
        num_seconds: 5,
        only_thumbnails: false,
        show_pagination: true,
        sizing: "static",
        slides: [
          {
            alt_text: "Small (72dpi)-22F_CHI0005.jpg",
            caption: "",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Flush%20Panel/Gallery/Small%20(72dpi)-22F_CHI0005.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          },
          {
            alt_text: "Small (72dpi)-22F_CHI0006.jpg",
            caption: "",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Flush%20Panel/Gallery/Small%20(72dpi)-22F_CHI0006.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          },
          {
            alt_text: "Small (72dpi)-CHI082913_0106.jpg",
            caption: "",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Flush%20Panel/Gallery/Small%20(72dpi)-CHI082913_0106.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          }
        ],
        transition: "slide",
        with_thumbnail_nav: true
      },
      kula_woodtone_options: {
        cedar: false,
        classic: false,
        dark_oak: false,
        display_woodtone_options_title: false,
        driftwood: false,
        light_oak: false,
        mahogany: false,
        modern: false,
        module_id: 2291028,
        walnut: false,
        widget_name: "[KULA] Woodtone Options"
      },
      product_number: { header_tag: null, value: "4150" },
      product_name: {
        header_tag: null,
        value: __products[4150].product_family
      },
      door_image: {
        alt: "chi-22-52-f-one-car.png",
        height: 214,
        img_alt: "chi-22-52-f-one-car.png",
        img_load_error: false,
        link: "",
        open_in_new_tab: false,
        original_height: 214,
        original_width: 270,
        src: "https://cdn2.hubspot.net/hubfs/2029938/chi-22-52-f-one-car.png",
        width: 270
      },
      kula_raised_panel_options: {
        backing_text: __products[4150].section_material,
        door_style_text: __products[4150].panel_style,
        family_brochure_link:
          '\u003Ca href="' +
          __products[4150].family_brochure_link +
          '" target="_blank"\u003EDownload Brochure\u003C/a\u003E',
        model_flyer_link:
          '\u003Ca href="' +
          __products[4150].model_flyer_link +
          '" target="_blank"\u003EDownload Flyer\u003C/a\u003E',
        module_id: 2291134,
        price: __products[4150].price,
        r_value_text: __products[4150].r_value_text,
        rtm_construction_type: __products[4150].rtm_construction_type,
        rtm_insulation_type: __products[4150].rtm_insulation_type,
        widget_name: "[KULA] Raised Panel Options"
      },
      door_image_caption: { value: "Flush" },
      customization_title: { value: "Customization Options" },
      window_inserts: {
        carriage_house_four_p_madison: false,
        carriage_house_four_p_madison_double: false,
        carriage_house_four_p_stockton: false,
        carriage_house_four_p_stockton_double: false,
        carriage_house_madison: false,
        carriage_house_madison_double: false,
        carriage_house_stockton_double: false,
        carriage_house_stockton_single: false,
        carriage_house_two_p_madison: false,
        carriage_house_two_p_madison_double: false,
        carriage_house_two_p_stockton: false,
        carriage_house_two_p_stockton_double: false,
        cascade_short: false,
        cathedral_short: false,
        eight_piece_sunburst: false,
        five_piece_sunburst: false,
        four_piece_sunburst: false,
        long_cascade: true,
        long_four_piece_arched_madison: false,
        long_four_piece_arched_stockton: false,
        long_four_piece_sunburst: false,
        long_madison: true,
        long_praire: true,
        long_sherwood: true,
        long_stockton: true,
        long_three_piece_arched_madison: false,
        long_three_piece_arched_stockton: false,
        long_three_piece_sunburst: false,
        long_two_piece_arched_madison: true,
        long_two_piece_arched_stockton: true,
        long_two_piece_sunburst: true,
        long_waterton: true,
        module_id: 2421584,
        prairie_short: false,
        recessed_madison_combo: false,
        recessed_madison_long: false,
        recessed_madison_short: false,
        recessed_stockton_combo: false,
        recessed_stockton_long: false,
        recessed_stockton_short: false,
        seven_piece_sunburst: false,
        sherwood: false,
        show_window_insert_title: true,
        six_piece_sunburst: false,
        stockton_short: false,
        waterton_short: false,
        widget_name: "Window Inserts"
      },
      designer_glass: {
        display_designer_glass_title: false,
        florence_short: false,
        hampton_short: false,
        hawthorne_platinum_short: false,
        hawthorne_short: false,
        lasalle: false,
        module_id: 2452105,
        newport_short: false,
        somerset_brass_short: false,
        somerset_platinum_short: false,
        temple_short: false,
        widget_name: "Designer Glass"
      },
      glass_options: {
        custom_widget_id: 5562484302,
        field_types: {
          frosted_short: "boolean",
          glue_chip_short: "boolean",
          plain_short: "boolean",
          tinted_short: "boolean"
        },
        module_id: 2470253,
        per_widget_wrapper_html: "",
        tag: "custom_widget",
        type: "custom_widget",
        widget_name: "Glass Options",
        wrapping_html: ""
      },
      kula_color_options: {
        almond: true,
        aluminum: false,
        black: true,
        bronze: true,
        brown: true,
        desert_tan: true,
        evergreen: false,
        gray: true,
        module_id: 2210014,
        sandstone: true,
        show_color_options_title: true,
        white: true,
        widget_name: "[KULA] Color Options"
      },
      rtm_additional_text: {
        custom_widget_id: 5808245394,
        field_types: { additional_text: "boolean", rich_text: "richtext" },
        module_id: 2906367,
        per_widget_wrapper_html: "",
        tag: "custom_widget",
        type: "custom_widget",
        widget_name: "[RTM] Additional Text",
        wrapping_html: ""
      },
      model_number_used_in_algolia_search: { value: "4150" }
    }
  },
  {
    url: "https://www.chiohd.com/homeowners/garage-doors/flush-panel/2140",
    data: {
      image_gallery: {
        auto_advance: true,
        caption_position: "superimpose",
        display_mode: "thumbnail",
        lightbox: false,
        lightboxRows: 3,
        loop_slides: true,
        num_seconds: 5,
        only_thumbnails: false,
        show_pagination: true,
        sizing: "static",
        slides: [
          {
            alt_text: "Small (72dpi)-22F_CHI0005.jpg",
            caption: "",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Flush%20Panel/Gallery/Small%20(72dpi)-22F_CHI0005.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          },
          {
            alt_text: "Small (72dpi)-22F_CHI0006.jpg",
            caption: "",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Flush%20Panel/Gallery/Small%20(72dpi)-22F_CHI0006.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          },
          {
            alt_text: "Small (72dpi)-CHI082913_0106.jpg",
            caption: "",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Flush%20Panel/Gallery/Small%20(72dpi)-CHI082913_0106.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          }
        ],
        transition: "slide",
        with_thumbnail_nav: true
      },
      kula_woodtone_options: {
        cedar: false,
        classic: false,
        dark_oak: false,
        display_woodtone_options_title: false,
        driftwood: false,
        light_oak: false,
        mahogany: false,
        modern: false,
        module_id: 2291028,
        walnut: false,
        widget_name: "[KULA] Woodtone Options"
      },
      product_number: { header_tag: null, value: "2140" },
      product_name: {
        header_tag: null,
        value: __products[2140].product_family
      },
      door_image: {
        alt: "chi-22-52-f-one-car.png",
        height: 214,
        img_alt: "chi-22-52-f-one-car.png",
        img_load_error: false,
        link: "",
        open_in_new_tab: false,
        original_height: 214,
        original_width: 270,
        src: "https://cdn2.hubspot.net/hubfs/2029938/chi-22-52-f-one-car.png",
        width: 270
      },
      kula_raised_panel_options: {
        backing_text: __products[2140].section_material,
        door_style_text: __products[2140].panel_style,
        family_brochure_link:
          '\u003Ca href="' +
          __products[2140].family_brochure_link +
          '" target="_blank"\u003EDownload Brochure\u003C/a\u003E',
        model_flyer_link:
          '\u003Ca href="' +
          __products[2140].model_flyer_link +
          '" target="_blank"\u003EDownload Flyer\u003C/a\u003E',
        module_id: 2291134,
        price: __products[2140].price,
        r_value_text: __products[2140].r_value_text,
        rtm_construction_type: __products[2140].rtm_construction_type,
        rtm_insulation_type: __products[2140].rtm_insulation_type,
        widget_name: "[KULA] Raised Panel Options"
      },
      door_image_caption: { value: "Flush" },
      customization_title: { value: "Customization Options" },
      window_inserts: {
        carriage_house_four_p_madison: false,
        carriage_house_four_p_madison_double: false,
        carriage_house_four_p_stockton: false,
        carriage_house_four_p_stockton_double: false,
        carriage_house_madison: false,
        carriage_house_madison_double: false,
        carriage_house_stockton_double: false,
        carriage_house_stockton_single: false,
        carriage_house_two_p_madison: false,
        carriage_house_two_p_madison_double: false,
        carriage_house_two_p_stockton: false,
        carriage_house_two_p_stockton_double: false,
        cascade_short: true,
        cathedral_short: true,
        eight_piece_sunburst: false,
        five_piece_sunburst: false,
        four_piece_sunburst: true,
        long_cascade: false,
        long_four_piece_arched_madison: false,
        long_four_piece_arched_stockton: false,
        long_four_piece_sunburst: false,
        long_madison: false,
        long_praire: false,
        long_sherwood: false,
        long_stockton: false,
        long_three_piece_arched_madison: false,
        long_three_piece_arched_stockton: false,
        long_three_piece_sunburst: false,
        long_two_piece_arched_madison: false,
        long_two_piece_arched_stockton: false,
        long_two_piece_sunburst: false,
        long_waterton: false,
        module_id: 2421584,
        prairie_short: true,
        recessed_madison_combo: false,
        recessed_madison_long: false,
        recessed_madison_short: false,
        recessed_stockton_combo: false,
        recessed_stockton_long: false,
        recessed_stockton_short: false,
        seven_piece_sunburst: false,
        sherwood: true,
        show_window_insert_title: true,
        six_piece_sunburst: false,
        stockton_short: true,
        waterton_short: true,
        widget_name: "Window Inserts"
      },
      designer_glass: {
        display_designer_glass_title: false,
        florence_short: false,
        hampton_short: false,
        hawthorne_platinum_short: false,
        hawthorne_short: false,
        lasalle: false,
        module_id: 2452105,
        newport_short: false,
        somerset_brass_short: false,
        somerset_platinum_short: false,
        temple_short: false,
        widget_name: "Designer Glass"
      },
      glass_options: {
        custom_widget_id: 5562484302,
        field_types: {
          frosted_short: "boolean",
          glue_chip_short: "boolean",
          plain_short: "boolean",
          tinted_short: "boolean"
        },
        module_id: 2470253,
        per_widget_wrapper_html: "",
        tag: "custom_widget",
        type: "custom_widget",
        widget_name: "Glass Options",
        wrapping_html: ""
      },
      kula_color_options: {
        almond: true,
        aluminum: false,
        black: false,
        bronze: false,
        brown: true,
        desert_tan: false,
        evergreen: true,
        gray: false,
        module_id: 2210014,
        sandstone: true,
        show_color_options_title: true,
        white: true,
        widget_name: "[KULA] Color Options"
      },
      rtm_additional_text: {
        custom_widget_id: 5808245394,
        field_types: { additional_text: "boolean", rich_text: "richtext" },
        module_id: 2906367,
        per_widget_wrapper_html: "",
        tag: "custom_widget",
        type: "custom_widget",
        widget_name: "[RTM] Additional Text",
        wrapping_html: ""
      },
      model_number_used_in_algolia_search: { value: "2140" }
    }
  },
  {
    url: "https://www.chiohd.com/homeowners/garage-doors/flush-panel/4140",
    data: {
      image_gallery: {
        auto_advance: true,
        caption_position: "superimpose",
        display_mode: "thumbnail",
        lightbox: false,
        lightboxRows: 3,
        loop_slides: true,
        num_seconds: 5,
        only_thumbnails: false,
        show_pagination: true,
        sizing: "static",
        slides: [
          {
            alt_text: "Small (72dpi)-22F_CHI0005.jpg",
            caption: "",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Flush%20Panel/Gallery/Small%20(72dpi)-22F_CHI0005.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          },
          {
            alt_text: "Small (72dpi)-22F_CHI0006.jpg",
            caption: "",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Flush%20Panel/Gallery/Small%20(72dpi)-22F_CHI0006.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          },
          {
            alt_text: "Small (72dpi)-CHI082913_0106.jpg",
            caption: "",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Flush%20Panel/Gallery/Small%20(72dpi)-CHI082913_0106.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          }
        ],
        transition: "slide",
        with_thumbnail_nav: true
      },
      kula_woodtone_options: {
        cedar: false,
        classic: false,
        dark_oak: false,
        display_woodtone_options_title: false,
        driftwood: false,
        light_oak: false,
        mahogany: false,
        modern: false,
        module_id: 2291028,
        walnut: false,
        widget_name: "[KULA] Woodtone Options"
      },
      product_number: { header_tag: null, value: "4140" },
      product_name: {
        header_tag: null,
        value: __products[4140].product_family
      },
      door_image: {
        alt: "chi-22-52-f-one-car.png",
        height: 214,
        img_alt: "chi-22-52-f-one-car.png",
        img_load_error: false,
        link: "",
        open_in_new_tab: false,
        original_height: 214,
        original_width: 270,
        src: "https://cdn2.hubspot.net/hubfs/2029938/chi-22-52-f-one-car.png",
        width: 270
      },
      kula_raised_panel_options: {
        backing_text: __products[4140].section_material,
        door_style_text: __products[4140].panel_style,
        family_brochure_link:
          '\u003Ca href="' +
          __products[4140].family_brochure_link +
          '" target="_blank"\u003EDownload Brochure\u003C/a\u003E',
        model_flyer_link:
          '\u003Ca href="' +
          __products[4140].model_flyer_link +
          '" target="_blank"\u003EDownload Flyer\u003C/a\u003E',
        module_id: 2291134,
        price: __products[4140].price,
        r_value_text: __products[4140].r_value_text,
        rtm_construction_type: __products[4140].rtm_construction_type,
        rtm_insulation_type: __products[4140].rtm_insulation_type,
        widget_name: "[KULA] Raised Panel Options"
      },
      door_image_caption: { value: "Flush" },
      customization_title: { value: "Customization Options" },
      window_inserts: {
        carriage_house_four_p_madison: false,
        carriage_house_four_p_madison_double: false,
        carriage_house_four_p_stockton: false,
        carriage_house_four_p_stockton_double: false,
        carriage_house_madison: false,
        carriage_house_madison_double: false,
        carriage_house_stockton_double: false,
        carriage_house_stockton_single: false,
        carriage_house_two_p_madison: false,
        carriage_house_two_p_madison_double: false,
        carriage_house_two_p_stockton: false,
        carriage_house_two_p_stockton_double: false,
        cascade_short: false,
        cathedral_short: false,
        eight_piece_sunburst: false,
        five_piece_sunburst: false,
        four_piece_sunburst: false,
        long_cascade: true,
        long_four_piece_arched_madison: false,
        long_four_piece_arched_stockton: false,
        long_four_piece_sunburst: false,
        long_madison: true,
        long_praire: true,
        long_sherwood: true,
        long_stockton: true,
        long_three_piece_arched_madison: false,
        long_three_piece_arched_stockton: false,
        long_three_piece_sunburst: false,
        long_two_piece_arched_madison: true,
        long_two_piece_arched_stockton: true,
        long_two_piece_sunburst: true,
        long_waterton: true,
        module_id: 2421584,
        prairie_short: false,
        recessed_madison_combo: false,
        recessed_madison_long: false,
        recessed_madison_short: false,
        recessed_stockton_combo: false,
        recessed_stockton_long: false,
        recessed_stockton_short: false,
        seven_piece_sunburst: false,
        sherwood: false,
        show_window_insert_title: true,
        six_piece_sunburst: false,
        stockton_short: false,
        waterton_short: false,
        widget_name: "Window Inserts"
      },
      designer_glass: {
        display_designer_glass_title: false,
        florence_short: false,
        hampton_short: false,
        hawthorne_platinum_short: false,
        hawthorne_short: false,
        lasalle: false,
        module_id: 2452105,
        newport_short: false,
        somerset_brass_short: false,
        somerset_platinum_short: false,
        temple_short: false,
        widget_name: "Designer Glass"
      },
      glass_options: {
        custom_widget_id: 5562484302,
        field_types: {
          frosted_short: "boolean",
          glue_chip_short: "boolean",
          plain_short: "boolean",
          tinted_short: "boolean"
        },
        module_id: 2470253,
        per_widget_wrapper_html: "",
        tag: "custom_widget",
        type: "custom_widget",
        widget_name: "Glass Options",
        wrapping_html: ""
      },
      kula_color_options: {
        almond: true,
        aluminum: false,
        black: false,
        bronze: false,
        brown: true,
        desert_tan: false,
        evergreen: true,
        gray: false,
        module_id: 2210014,
        sandstone: true,
        show_color_options_title: true,
        white: true,
        widget_name: "[KULA] Color Options"
      },
      rtm_additional_text: {
        custom_widget_id: 5808245394,
        field_types: { additional_text: "boolean", rich_text: "richtext" },
        module_id: 2906367,
        per_widget_wrapper_html: "",
        tag: "custom_widget",
        type: "custom_widget",
        widget_name: "[RTM] Additional Text",
        wrapping_html: ""
      },
      model_number_used_in_algolia_search: { value: "4140" }
    }
  },
  {
    url: "https://www.chiohd.com/homeowners/garage-doors/flush-panel/2150",
    data: {
      image_gallery: {
        auto_advance: true,
        caption_position: "superimpose",
        display_mode: "thumbnail",
        lightbox: false,
        lightboxRows: 3,
        loop_slides: true,
        num_seconds: 5,
        only_thumbnails: false,
        show_pagination: true,
        sizing: "static",
        slides: [
          {
            alt_text: "Small (72dpi)-22F_CHI0005.jpg",
            caption: "",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Flush%20Panel/Gallery/Small%20(72dpi)-22F_CHI0005.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          },
          {
            alt_text: "Small (72dpi)-22F_CHI0006.jpg",
            caption: "",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Flush%20Panel/Gallery/Small%20(72dpi)-22F_CHI0006.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          },
          {
            alt_text: "Small (72dpi)-CHI082913_0106.jpg",
            caption: "",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Flush%20Panel/Gallery/Small%20(72dpi)-CHI082913_0106.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          }
        ],
        transition: "slide",
        with_thumbnail_nav: true
      },
      kula_woodtone_options: {
        cedar: false,
        classic: false,
        dark_oak: false,
        display_woodtone_options_title: false,
        driftwood: false,
        light_oak: false,
        mahogany: false,
        modern: false,
        module_id: 2291028,
        walnut: false,
        widget_name: "[KULA] Woodtone Options"
      },
      product_number: { header_tag: null, value: "2150" },
      product_name: {
        header_tag: null,
        redirectUrl:
          "https://app.hubspot.com/content/2029938/edit-beta/5866471090",
        value: __products[2150].product_family
      },
      door_image: {
        alt: "chi-22-52-f-one-car.png",
        height: 214,
        img_alt: "chi-22-52-f-one-car.png",
        img_load_error: false,
        link: "",
        open_in_new_tab: false,
        original_height: 214,
        original_width: 270,
        src: "https://cdn2.hubspot.net/hubfs/2029938/chi-22-52-f-one-car.png",
        width: 270
      },
      kula_raised_panel_options: {
        backing_text: __products[2150].section_material,
        door_style_text: __products[2150].panel_style,
        family_brochure_link:
          '\u003Ca href="' +
          __products[2150].family_brochure_link +
          '" target="_blank"\u003EDownload Brochure\u003C/a\u003E',
        model_flyer_link:
          '\u003Ca href="' +
          __products[2150].model_flyer_link +
          '" target="_blank"\u003EDownload Flyer\u003C/a\u003E',
        module_id: 2291134,
        price: __products[2150].price,
        r_value_text: __products[2150].r_value_text,
        rtm_construction_type: __products[2150].rtm_construction_type,
        rtm_insulation_type: __products[2150].rtm_insulation_type,
        widget_name: "[KULA] Raised Panel Options"
      },
      door_image_caption: { value: "Flush" },
      customization_title: { value: "Customization Options" },
      window_inserts: {
        carriage_house_four_p_madison: false,
        carriage_house_four_p_madison_double: false,
        carriage_house_four_p_stockton: false,
        carriage_house_four_p_stockton_double: false,
        carriage_house_madison: false,
        carriage_house_madison_double: false,
        carriage_house_stockton_double: false,
        carriage_house_stockton_single: false,
        carriage_house_two_p_madison: false,
        carriage_house_two_p_madison_double: false,
        carriage_house_two_p_stockton: false,
        carriage_house_two_p_stockton_double: false,
        cascade_short: true,
        cathedral_short: true,
        eight_piece_sunburst: false,
        five_piece_sunburst: false,
        four_piece_sunburst: true,
        long_cascade: false,
        long_four_piece_arched_madison: false,
        long_four_piece_arched_stockton: false,
        long_four_piece_sunburst: false,
        long_madison: false,
        long_praire: false,
        long_sherwood: false,
        long_stockton: false,
        long_three_piece_arched_madison: false,
        long_three_piece_arched_stockton: false,
        long_three_piece_sunburst: false,
        long_two_piece_arched_madison: false,
        long_two_piece_arched_stockton: false,
        long_two_piece_sunburst: false,
        long_waterton: false,
        module_id: 2421584,
        prairie_short: true,
        recessed_madison_combo: false,
        recessed_madison_long: false,
        recessed_madison_short: false,
        recessed_stockton_combo: false,
        recessed_stockton_long: false,
        recessed_stockton_short: false,
        seven_piece_sunburst: false,
        sherwood: true,
        show_window_insert_title: true,
        six_piece_sunburst: false,
        stockton_short: true,
        waterton_short: true,
        widget_name: "Window Inserts"
      },
      designer_glass: {
        display_designer_glass_title: false,
        florence_short: false,
        hampton_short: false,
        hawthorne_platinum_short: false,
        hawthorne_short: false,
        lasalle: false,
        module_id: 2452105,
        newport_short: false,
        somerset_brass_short: false,
        somerset_platinum_short: false,
        temple_short: false,
        widget_name: "Designer Glass"
      },
      glass_options: {
        custom_widget_id: 5562484302,
        field_types: {
          frosted_short: "boolean",
          glue_chip_short: "boolean",
          plain_short: "boolean",
          tinted_short: "boolean"
        },
        module_id: 2470253,
        per_widget_wrapper_html: "",
        tag: "custom_widget",
        type: "custom_widget",
        widget_name: "Glass Options",
        wrapping_html: ""
      },
      kula_color_options: {
        almond: true,
        aluminum: false,
        black: true,
        bronze: true,
        brown: true,
        desert_tan: true,
        evergreen: false,
        gray: true,
        module_id: 2210014,
        sandstone: true,
        show_color_options_title: true,
        white: true,
        widget_name: "[KULA] Color Options"
      },
      rtm_additional_text: {
        custom_widget_id: 5808245394,
        field_types: { additional_text: "boolean", rich_text: "richtext" },
        module_id: 2906367,
        per_widget_wrapper_html: "",
        tag: "custom_widget",
        type: "custom_widget",
        widget_name: "[RTM] Additional Text",
        wrapping_html: ""
      },
      model_number_used_in_algolia_search: { value: "2150" }
    }
  },
  {
    url:
      "https://www.chiohd.com/homeowners/garage-doors/stamped-carriage-house/5983",
    data: {
      image_gallery: {
        auto_advance: true,
        caption_position: "superimpose",
        display_mode: "thumbnail",
        lightbox: false,
        lightboxRows: 3,
        loop_slides: true,
        num_seconds: 5,
        only_thumbnails: false,
        show_pagination: true,
        sizing: "static",
        slides: [
          {
            alt_text: "Small (72dpi)-59CH_CHI0003.jpg",
            caption: "",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Stamped/Models/Small%20(72dpi)-59CH_CHI0003.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          },
          {
            alt_text: "Small (72dpi)-59CH_CHI0005.jpg",
            caption: "",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Stamped/Models/Small%20(72dpi)-59CH_CHI0005.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          },
          {
            alt_text: "Small (72dpi)-CHI060215_0046.jpg",
            caption: "",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Stamped/Models/Small%20(72dpi)-CHI060215_0046.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          }
        ],
        transition: "slide",
        with_thumbnail_nav: true
      },
      kula_woodtone_options: {
        cedar: true,
        classic: false,
        dark_oak: true,
        display_woodtone_options_title: true,
        driftwood: true,
        light_oak: false,
        mahogany: true,
        modern: false,
        module_id: 2291028,
        walnut: true,
        widget_name: "[KULA] Woodtone Options"
      },
      product_number: { header_tag: null, value: "5983" },
      product_name: {
        header_tag: null,
        value: __products[5983].product_family
      },
      door_image: {
        alt: "chi-59-sch-one-car.png",
        height: 214,
        img_alt: "chi-59-sch-one-car.png",
        img_load_error: false,
        link: "",
        open_in_new_tab: false,
        original_height: 214,
        original_width: 270,
        src: "https://cdn2.hubspot.net/hubfs/2029938/chi-59-sch-one-car.png",
        width: 270
      },
      kula_raised_panel_options: {
        backing_text: __products[5983].section_material,
        door_style_text: __products[5983].panel_style,
        family_brochure_link:
          '\u003Ca href="' +
          __products[5983].family_brochure_link +
          '" target="_blank"\u003EDownload Brochure\u003C/a\u003E',
        model_flyer_link:
          '\u003Ca href="' +
          __products[5983].model_flyer_link +
          '" target="_blank"\u003EDownload Flyer\u003C/a\u003E',
        module_id: 2291134,
        price: __products[5983].price,
        r_value_text: __products[5983].r_value_text,
        rtm_construction_type: __products[5983].rtm_construction_type,
        rtm_insulation_type: __products[5983].rtm_insulation_type,
        widget_name: "[KULA] Raised Panel Options"
      },
      door_image_caption: { value: "Long Panel" },
      customization_title: { value: "Customization Options" },
      window_inserts: {
        cascade_short: false,
        cathedral_short: false,
        eight_piece_sunburst: false,
        five_piece_sunburst: false,
        four_piece_sunburst: false,
        long_cascade: true,
        long_four_piece_arched_madison: true,
        long_four_piece_arched_stockton: true,
        long_four_piece_sunburst: false,
        long_madison: true,
        long_praire: false,
        long_sherwood: false,
        long_stockton: true,
        long_three_piece_arched_madison: true,
        long_three_piece_arched_stockton: true,
        long_three_piece_sunburst: false,
        long_two_piece_arched_madison: true,
        long_two_piece_arched_stockton: true,
        long_two_piece_sunburst: false,
        long_waterton: false,
        module_id: 2421584,
        prairie_short: false,
        seven_piece_sunburst: false,
        sherwood: false,
        six_piece_sunburst: false,
        stockton_short: false,
        waterton_short: false,
        widget_name: "Window Inserts"
      },
      designer_glass: {
        display_designer_glass_title: true,
        florence_short: true,
        hampton_short: true,
        hawthorne_platinum_short: false,
        hawthorne_short: false,
        lasalle: true,
        module_id: 2452105,
        newport_short: true,
        somerset_brass_short: false,
        somerset_platinum_short: false,
        temple_short: false,
        widget_name: "Designer Glass"
      },
      glass_options: {
        frosted_short: true,
        glue_chip_short: true,
        module_id: 2470253,
        obscure_short: true,
        plain_short: true,
        seeded: true,
        tinted_short: true,
        widget_name: "Glass Options"
      },
      kula_color_options: {
        almond: true,
        black: false,
        bronze: false,
        brown: true,
        desert_tan: true,
        evergreen: false,
        gray: false,
        module_id: 2210014,
        redirectUrl:
          "https://app.hubspot.com/content/2029938/edit-beta/5690667477",
        sandstone: true,
        show_color_options_title: true,
        white: true,
        widget_name: "[KULA] Color Options"
      },
      rtm_additional_text: {
        custom_widget_id: 5808245394,
        field_types: { additional_text: "boolean", rich_text: "richtext" },
        module_id: 2906367,
        per_widget_wrapper_html: "",
        tag: "custom_widget",
        type: "custom_widget",
        widget_name: "[RTM] Additional Text",
        wrapping_html: ""
      },
      model_number_used_in_algolia_search: { value: "5983" }
    }
  },
  {
    url: "https://www.chiohd.com/homeowners/garage-doors/raised-panel/2216",
    data: {
      image_gallery: {
        auto_advance: true,
        caption_position: "superimpose",
        display_mode: "thumbnail",
        lightbox: false,
        lightboxRows: 3,
        loop_slides: true,
        num_seconds: 5,
        only_thumbnails: false,
        show_pagination: true,
        sizing: "static",
        slides: [
          {
            alt_text: "Raised-Panel-2206.jpg",
            caption: "",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Raised-Panel/Models/Raised-Panel-2206.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          },
          {
            alt_text: "Raised-Panel-2206-2.jpg",
            caption: "",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Raised-Panel/Models/Raised-Panel-2206-2.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          }
        ],
        transition: "slide",
        with_thumbnail_nav: true
      },
      kula_woodtone_options: {
        cedar: true,
        classic: false,
        dark_oak: true,
        display_woodtone_options_title: true,
        driftwood: true,
        light_oak: false,
        mahogany: true,
        modern: false,
        module_id: 2291028,
        walnut: true,
        widget_name: "[KULA] Woodtone Options"
      },
      product_number: { header_tag: null, value: "2216" },
      product_name: { value: __products[2216].product_family },
      door_image: {
        alt: "chi-22-rp-one-car.png",
        height: 214,
        img_alt: "chi-22-rp-one-car.png",
        img_load_error: false,
        link: "",
        open_in_new_tab: false,
        original_height: 214,
        original_width: 270,
        src: "https://cdn2.hubspot.net/hubfs/2029938/chi-22-rp-one-car.png",
        width: 270
      },
      kula_raised_panel_options: {
        backing_text: __products[2216].section_material,
        door_style_text: __products[2216].panel_style,
        family_brochure_link:
          '\u003Ca href="' +
          __products[2216].family_brochure_link +
          '" target="_blank"\u003EDownload Brochure\u003C/a\u003E',
        model_flyer_link:
          '\u003Ca href="' +
          __products[2216].model_flyer_link +
          '" target="_blank"\u003EDownload Flyer\u003C/a\u003E',
        module_id: 2291134,
        price: __products[2216].price,
        r_value_text: __products[2216].r_value_text,
        rtm_construction_type: __products[2216].rtm_construction_type,
        rtm_insulation_type: __products[2216].rtm_insulation_type,
        widget_name: "[KULA] Raised Panel Options"
      },
      door_image_caption: { value: "Short Panel" },
      customization_title: { value: "Customization Options" },
      window_inserts: {
        display_woodtone_options_title: true,
        module_id: 2421584,
        rtm_test: true,
        sherwood: true,
        walnut: false,
        widget_name: "Window Inserts"
      },
      designer_glass: {
        custom_widget_id: 5561952058,
        field_types: {
          florence_short: "boolean",
          hampton_short: "boolean",
          hawthorne_platinum_short: "boolean",
          hawthorne_short: "boolean",
          newport_short: "boolean",
          somerset_brass_short: "boolean",
          somerset_platinum_short: "boolean",
          temple_short: "boolean"
        },
        module_id: 2452105,
        per_widget_wrapper_html: "",
        tag: "custom_widget",
        type: "custom_widget",
        widget_name: "Designer Glass",
        wrapping_html: ""
      },
      glass_options: {
        frosted_short: true,
        module_id: 2470253,
        widget_name: "Glass Options"
      },
      kula_color_options: {
        almond: true,
        black: true,
        bronze: true,
        brown: true,
        desert_tan: true,
        evergreen: true,
        gray: true,
        module_id: 2210014,
        sandstone: true,
        show_color_options_title: true,
        type: "custom_widget",
        white: true,
        widget_name: "[KULA] Color Options"
      },
      rtm_additional_text: {
        custom_widget_id: 5808245394,
        field_types: { additional_text: "boolean", rich_text: "richtext" },
        module_id: 2906367,
        per_widget_wrapper_html: "",
        tag: "custom_widget",
        type: "custom_widget",
        widget_name: "[RTM] Additional Text",
        wrapping_html: ""
      },
      model_number_used_in_algolia_search: { value: "2216" }
    }
  },
  {
    url: "https://www.chiohd.com/homeowners/garage-doors/raised-panel/4216",
    data: {
      image_gallery: {
        auto_advance: true,
        caption_position: "superimpose",
        display_mode: "thumbnail",
        lightbox: false,
        lightboxRows: 3,
        loop_slides: true,
        num_seconds: 5,
        only_thumbnails: false,
        show_pagination: true,
        sizing: "static",
        slides: [
          {
            alt_text: "Small (72dpi)-42RP_CHI0012.jpg",
            caption: "",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Raised-Panel/Models/Small%20(72dpi)-42RP_CHI0012.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          },
          {
            alt_text: "Small (72dpi)-CHI081513_0407.jpg",
            caption: "",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Raised-Panel/Models/Small%20(72dpi)-CHI081513_0407.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          }
        ],
        transition: "slide",
        with_thumbnail_nav: true
      },
      kula_woodtone_options: {
        cedar: true,
        classic: false,
        dark_oak: true,
        display_woodtone_options_title: true,
        driftwood: true,
        light_oak: false,
        mahogany: true,
        modern: false,
        module_id: 2291028,
        walnut: true,
        widget_name: "[KULA] Woodtone Options"
      },
      product_number: { header_tag: null, value: "4216" },
      product_name: { value: __products[4216].product_family },
      door_image: {
        alt: "Long-Panel",
        height: 214,
        img_alt: "chi-42-rp-one-car.png",
        img_load_error: false,
        link: "",
        open_in_new_tab: false,
        original_height: 214,
        original_width: 270,
        src: "https://cdn2.hubspot.net/hubfs/2029938/chi-42-rp-one-car.png",
        width: 270
      },
      kula_raised_panel_options: {
        backing_text: __products[4216].section_material,
        door_style_text: __products[4216].panel_style,
        family_brochure_link:
          '\u003Ca href="' +
          __products[4216].family_brochure_link +
          '" target="_blank"\u003EDownload Brochure\u003C/a\u003E',
        model_flyer_link:
          '\u003Ca href="' +
          __products[4216].model_flyer_link +
          '" target="_blank"\u003EDownload Flyer\u003C/a\u003E',
        module_id: 2291134,
        price: __products[4216].price,
        r_value_text: __products[4216].r_value_text,
        rtm_construction_type: __products[4216].rtm_construction_type,
        rtm_insulation_type: __products[4216].rtm_insulation_type,
        widget_name: "[KULA] Raised Panel Options"
      },
      door_image_caption: { value: "Long Panel" },
      customization_title: { value: "Customization Options" },
      window_inserts: {
        cascade_short: false,
        cathedral_short: false,
        eight_piece_sunburst: false,
        five_piece_sunburst: false,
        four_piece_sunburst: false,
        long_cascade: true,
        long_four_piece_arched_madison: true,
        long_four_piece_arched_stockton: true,
        long_four_piece_sunburst: true,
        long_madison: true,
        long_praire: true,
        long_sherwood: true,
        long_stockton: true,
        long_three_piece_sunburst: true,
        long_two_piece_arched_madison: true,
        long_two_piece_arched_stockton: true,
        long_two_piece_sunburst: true,
        long_waterton: true,
        module_id: 2421584,
        prairie_short: false,
        seven_piece_sunburst: false,
        sherwood: false,
        six_piece_sunburst: false,
        stockton_short: false,
        waterton_short: false,
        widget_name: "Window Inserts"
      },
      designer_glass: {
        custom_widget_id: 5561952058,
        field_types: {
          florence_short: "boolean",
          hampton_short: "boolean",
          hawthorne_platinum_short: "boolean",
          hawthorne_short: "boolean",
          newport_short: "boolean",
          somerset_brass_short: "boolean",
          somerset_platinum_short: "boolean",
          temple_short: "boolean"
        },
        module_id: 2452105,
        per_widget_wrapper_html: "",
        tag: "custom_widget",
        type: "custom_widget",
        widget_name: "Designer Glass",
        wrapping_html: ""
      },
      glass_options: {
        custom_widget_id: 5562484302,
        field_types: {
          frosted_short: "boolean",
          glue_chip_short: "boolean",
          plain_short: "boolean",
          tinted_short: "boolean"
        },
        module_id: 2470253,
        per_widget_wrapper_html: "",
        tag: "custom_widget",
        type: "custom_widget",
        widget_name: "Glass Options",
        wrapping_html: ""
      },
      kula_color_options: {
        almond: true,
        black: true,
        bronze: true,
        brown: true,
        desert_tan: true,
        evergreen: true,
        gray: true,
        module_id: 2210014,
        sandstone: true,
        show_color_options_title: true,
        type: "custom_widget",
        white: true,
        widget_name: "[KULA] Color Options"
      },
      rtm_additional_text: {
        custom_widget_id: 5808245394,
        field_types: { additional_text: "boolean", rich_text: "richtext" },
        module_id: 2906367,
        per_widget_wrapper_html: "",
        tag: "custom_widget",
        type: "custom_widget",
        widget_name: "[RTM] Additional Text",
        wrapping_html: ""
      },
      model_number_used_in_algolia_search: { value: "4216" }
    }
  },
  {
    url: "https://www.chiohd.com/homeowners/garage-doors/raised-panel/2283",
    data: {
      image_gallery: {
        auto_advance: true,
        caption_position: "superimpose",
        display_mode: "thumbnail",
        lightbox: false,
        lightboxRows: 3,
        loop_slides: true,
        num_seconds: 5,
        only_thumbnails: false,
        show_pagination: true,
        sizing: "static",
        slides: [
          {
            alt_text: "Raised-Panel-2206.jpg",
            caption: "",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Raised-Panel/Models/Raised-Panel-2206.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          },
          {
            alt_text: "Raised-Panel-2206-2.jpg",
            caption: "",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Raised-Panel/Models/Raised-Panel-2206-2.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          }
        ],
        transition: "slide",
        with_thumbnail_nav: true
      },
      kula_woodtone_options: {
        cedar: true,
        classic: false,
        dark_oak: true,
        display_woodtone_options_title: true,
        driftwood: true,
        light_oak: false,
        mahogany: true,
        modern: false,
        module_id: 2291028,
        walnut: true,
        widget_name: "[KULA] Woodtone Options"
      },
      product_number: { header_tag: null, value: "2283" },
      product_name: { value: __products[2283].product_family },
      door_image: {
        alt: "chi-22-rp-one-car.png",
        height: 214,
        img_alt: "chi-22-rp-one-car.png",
        img_load_error: false,
        link: "",
        open_in_new_tab: false,
        original_height: 214,
        original_width: 270,
        src: "https://cdn2.hubspot.net/hubfs/2029938/chi-22-rp-one-car.png",
        width: 270
      },
      kula_raised_panel_options: {
        backing_text: __products[2283].section_material,
        door_style_text: __products[2283].panel_style,
        family_brochure_link:
          '\u003Ca href="' +
          __products[2283].family_brochure_link +
          '" target="_blank"\u003EDownload Brochure\u003C/a\u003E',
        model_flyer_link:
          '\u003Ca href="' +
          __products[2283].model_flyer_link +
          '" target="_blank"\u003EDownload Flyer\u003C/a\u003E',
        module_id: 2291134,
        price: __products[2283].price,
        r_value_text: __products[2283].r_value_text,
        rtm_construction_type: __products[2283].rtm_construction_type,
        rtm_insulation_type: __products[2283].rtm_insulation_type,
        widget_name: "[KULA] Raised Panel Options"
      },
      door_image_caption: { value: "Short Panel" },
      customization_title: { value: "Customization Options" },
      window_inserts: {
        display_woodtone_options_title: true,
        module_id: 2421584,
        rtm_test: true,
        sherwood: true,
        walnut: false,
        widget_name: "Window Inserts"
      },
      designer_glass: {
        display_designer_glass_title: true,
        florence_short: true,
        hampton_short: true,
        hawthorne_platinum_short: true,
        hawthorne_short: true,
        module_id: 2452105,
        newport_short: true,
        somerset_brass_short: true,
        somerset_platinum_short: true,
        temple_short: true,
        widget_name: "Designer Glass"
      },
      glass_options: {
        custom_widget_id: 5562484302,
        field_types: {
          frosted_short: "boolean",
          glue_chip_short: "boolean",
          plain_short: "boolean",
          tinted_short: "boolean"
        },
        module_id: 2470253,
        per_widget_wrapper_html: "",
        tag: "custom_widget",
        type: "custom_widget",
        widget_name: "Glass Options",
        wrapping_html: ""
      },
      kula_color_options: {
        almond: true,
        black: true,
        bronze: true,
        brown: true,
        desert_tan: true,
        evergreen: true,
        gray: true,
        module_id: 2210014,
        sandstone: true,
        show_color_options_title: true,
        type: "custom_widget",
        white: true,
        widget_name: "[KULA] Color Options"
      },
      rtm_additional_text: {
        custom_widget_id: 5808245394,
        field_types: { additional_text: "boolean", rich_text: "richtext" },
        module_id: 2906367,
        per_widget_wrapper_html: "",
        tag: "custom_widget",
        type: "custom_widget",
        widget_name: "[RTM] Additional Text",
        wrapping_html: ""
      },
      model_number_used_in_algolia_search: { value: "2283" }
    }
  },
  {
    url: "https://www.chiohd.com/homeowners/garage-doors/raised-panel/4283",
    data: {
      image_gallery: {
        auto_advance: true,
        caption_position: "superimpose",
        display_mode: "thumbnail",
        lightbox: false,
        lightboxRows: 3,
        loop_slides: true,
        num_seconds: 5,
        only_thumbnails: false,
        show_pagination: true,
        sizing: "static",
        slides: [
          {
            alt_text: "Small (72dpi)-42RP_CHI0007.jpg",
            caption: "",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Raised-Panel/Models/Small%20(72dpi)-42RP_CHI0007.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          },
          {
            alt_text: "Small (72dpi)-CHI081513_0047.jpg",
            caption: "",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Raised-Panel/Models/Small%20(72dpi)-CHI081513_0047.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          }
        ],
        transition: "slide",
        with_thumbnail_nav: true
      },
      kula_woodtone_options: {
        cedar: true,
        classic: false,
        dark_oak: true,
        display_woodtone_options_title: true,
        driftwood: true,
        light_oak: false,
        mahogany: true,
        modern: false,
        module_id: 2291028,
        walnut: true,
        widget_name: "[KULA] Woodtone Options"
      },
      product_number: { header_tag: null, value: "4283" },
      product_name: { value: __products[4283].product_family },
      door_image: {
        alt: "Long-Panel",
        height: 214,
        img_alt: "chi-42-rp-one-car.png",
        img_load_error: false,
        link: "",
        open_in_new_tab: false,
        original_height: 214,
        original_width: 270,
        src: "https://cdn2.hubspot.net/hubfs/2029938/chi-42-rp-one-car.png",
        width: 270
      },
      kula_raised_panel_options: {
        backing_text: __products[4283].section_material,
        door_style_text: __products[4283].panel_style,
        family_brochure_link:
          '\u003Ca href="' +
          __products[4283].family_brochure_link +
          '" target="_blank"\u003EDownload Brochure\u003C/a\u003E',
        model_flyer_link:
          '\u003Ca href="' +
          __products[4283].model_flyer_link +
          '" target="_blank"\u003EDownload Flyer\u003C/a\u003E',
        module_id: 2291134,
        price: __products[4283].price,
        r_value_text: __products[4283].r_value_text,
        rtm_construction_type: __products[4283].rtm_construction_type,
        rtm_insulation_type: __products[4283].rtm_insulation_type,
        widget_name: "[KULA] Raised Panel Options"
      },
      door_image_caption: { value: "Long Panel" },
      customization_title: { value: "Customization Options" },
      window_inserts: {
        cascade_short: false,
        cathedral_short: false,
        eight_piece_sunburst: false,
        five_piece_sunburst: false,
        four_piece_sunburst: false,
        long_cascade: true,
        long_four_piece_arched_madison: true,
        long_four_piece_arched_stockton: true,
        long_four_piece_sunburst: true,
        long_madison: true,
        long_praire: true,
        long_sherwood: true,
        long_stockton: true,
        long_three_piece_sunburst: true,
        long_two_piece_arched_madison: true,
        long_two_piece_arched_stockton: true,
        long_two_piece_sunburst: true,
        long_waterton: true,
        module_id: 2421584,
        prairie_short: false,
        seven_piece_sunburst: false,
        sherwood: false,
        six_piece_sunburst: false,
        stockton_short: false,
        waterton_short: false,
        widget_name: "Window Inserts"
      },
      designer_glass: {
        display_designer_glass_title: true,
        florence_short: true,
        hampton_short: true,
        hawthorne_platinum_short: true,
        hawthorne_short: true,
        module_id: 2452105,
        newport_short: true,
        somerset_brass_short: true,
        somerset_platinum_short: true,
        temple_short: true,
        widget_name: "Designer Glass"
      },
      glass_options: {
        custom_widget_id: 5562484302,
        field_types: {
          frosted_short: "boolean",
          glue_chip_short: "boolean",
          plain_short: "boolean",
          tinted_short: "boolean"
        },
        module_id: 2470253,
        per_widget_wrapper_html: "",
        tag: "custom_widget",
        type: "custom_widget",
        widget_name: "Glass Options",
        wrapping_html: ""
      },
      kula_color_options: {
        almond: true,
        black: true,
        bronze: true,
        brown: true,
        desert_tan: true,
        evergreen: true,
        gray: true,
        module_id: 2210014,
        sandstone: true,
        show_color_options_title: true,
        type: "custom_widget",
        white: true,
        widget_name: "[KULA] Color Options"
      },
      rtm_additional_text: {
        custom_widget_id: 5808245394,
        field_types: { additional_text: "boolean", rich_text: "richtext" },
        module_id: 2906367,
        per_widget_wrapper_html: "",
        tag: "custom_widget",
        type: "custom_widget",
        widget_name: "[RTM] Additional Text",
        wrapping_html: ""
      },
      model_number_used_in_algolia_search: { value: "4283" }
    }
  },
  {
    url: "https://www.chiohd.com/garage-doors/studio/planks/2358",
    data: {
      image_gallery: {
        auto_advance: true,
        caption_position: "superimpose",
        display_mode: "thumbnail",
        lightboxRows: 3,
        loop_slides: true,
        num_seconds: 5,
        show_pagination: true,
        sizing: "static",
        slides: [
          {
            alt_text: "Studio-Planks",
            caption: "",
            href: "",
            img_src:
              "https://www.chiohd.com/hubfs/Homeowner/Collections/Studio/Studio-Planks.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          },
          {
            alt_text: "Accents-Planks",
            caption: null,
            img_src:
              "https://www.chiohd.com/hubfs/Homeowner/Products/Accents/Gallery/Accents-Planks.png",
            link_url: null,
            open_in_new_tab: false,
            show_caption: false
          },
          {
            alt_text: "accents-planks-3216p",
            caption: null,
            img_src:
              "https://www.chiohd.com/hubfs/Assets%20(Feb%202017)/accents-planks-3216p.jpg",
            link_url: null,
            open_in_new_tab: false,
            show_caption: false
          }
        ],
        transition: "slide"
      },
      kula_woodtone_options: {
        cedar: true,
        classic: false,
        dark_oak: true,
        display_woodtone_options_title: true,
        driftwood: true,
        light_oak: false,
        mahogany: true,
        modern: false,
        module_id: 2291028,
        walnut: true,
        widget_name: "[KULA] Woodtone Options"
      },
      product_number: { header_tag: null, value: "2358" },
      product_name: {
        header_tag: null,
        value: __products[2358].product_family
      },
      door_image: {
        alt: "Planks",
        constrain_proportions: true,
        height: 214,
        link: "",
        open_in_new_tab: false,
        src: "https://www.chiohd.com/hubfs/chi-32-mg-one-car.png",
        width: 270
      },
      kula_raised_panel_options: {
        backing_text: __products[2358].section_material,
        door_style_text: __products[2358].panel_style,
        family_brochure_link:
          '\u003Ca href="' +
          __products[2358].family_brochure_link +
          '" target="_blank"\u003EDownload Brochure\u003C/a\u003E',
        model_flyer_link:
          '\u003Ca href="' +
          __products[2358].model_flyer_link +
          '" target="_blank"\u003EDownload Flyer\u003C/a\u003E',
        module_id: 2291134,
        price: __products[2358].price,
        r_value_text: __products[2358].r_value_text,
        rtm_construction_type: __products[2358].rtm_construction_type,
        rtm_insulation_type: __products[2358].rtm_insulation_type,
        widget_name: "[KULA] Raised Panel Options"
      },
      door_image_caption: { value: "Planks" },
      customization_title: { value: "Customization Options" },
      window_inserts: {
        carriage_house_four_p_madison: false,
        carriage_house_four_p_madison_double: false,
        carriage_house_four_p_stockton: false,
        carriage_house_four_p_stockton_double: false,
        carriage_house_madison: false,
        carriage_house_madison_double: false,
        carriage_house_stockton_double: false,
        carriage_house_stockton_single: false,
        carriage_house_two_p_madison: false,
        carriage_house_two_p_madison_double: false,
        carriage_house_two_p_stockton: false,
        carriage_house_two_p_stockton_double: false,
        cascade_short: false,
        cathedral_short: false,
        eight_piece_sunburst: false,
        five_piece_sunburst: false,
        four_piece_sunburst: false,
        long_cascade: true,
        long_four_piece_arched_madison: false,
        long_four_piece_arched_stockton: false,
        long_four_piece_sunburst: false,
        long_madison: true,
        long_praire: false,
        long_sherwood: false,
        long_stockton: true,
        long_three_piece_arched_madison: false,
        long_three_piece_arched_stockton: false,
        long_three_piece_sunburst: false,
        long_two_piece_arched_madison: true,
        long_two_piece_arched_stockton: true,
        long_two_piece_sunburst: false,
        long_waterton: false,
        module_id: 2421584,
        prairie_short: false,
        recessed_madison_combo: false,
        recessed_madison_long: false,
        recessed_madison_short: false,
        recessed_stockton_combo: false,
        recessed_stockton_long: false,
        recessed_stockton_short: false,
        seven_piece_sunburst: false,
        sherwood: false,
        show_window_insert_title: true,
        six_piece_sunburst: false,
        stockton_short: false,
        waterton_short: false,
        widget_name: "Window Inserts"
      },
      designer_glass: {
        display_designer_glass_title: true,
        florence_short: true,
        hampton_short: true,
        hawthorne_platinum_short: false,
        hawthorne_short: false,
        lasalle: true,
        module_id: 2452105,
        newport_short: true,
        somerset_brass_short: false,
        somerset_platinum_short: false,
        temple_short: false,
        widget_name: "Designer Glass"
      },
      glass_options: {
        custom_widget_id: 5562484302,
        field_types: {
          frosted_short: "boolean",
          glue_chip_short: "boolean",
          plain_short: "boolean",
          tinted_short: "boolean"
        },
        module_id: 2470253,
        per_widget_wrapper_html: "",
        seeded: true,
        tag: "custom_widget",
        type: "custom_widget",
        widget_name: "Glass Options",
        wrapping_html: ""
      },
      kula_color_options: {
        almond: true,
        aluminum: false,
        black: true,
        bronze: true,
        brown: true,
        desert_tan: true,
        evergreen: false,
        gray: true,
        module_id: 2210014,
        sandstone: true,
        show_color_options_title: true,
        white: true,
        widget_name: "[KULA] Color Options"
      },
      rtm_additional_text: {
        custom_widget_id: 5808245394,
        field_types: { additional_text: "boolean", rich_text: "richtext" },
        module_id: 2906367,
        per_widget_wrapper_html: "",
        tag: "custom_widget",
        type: "custom_widget",
        widget_name: "[RTM] Additional Text",
        wrapping_html: ""
      },
      model_number_used_in_algolia_search: { value: "2358" }
    }
  },
  {
    url: "https://www.chiohd.com/garage-doors/studio/planks/2348",
    data: {
      image_gallery: {
        auto_advance: true,
        caption_position: "superimpose",
        display_mode: "thumbnail",
        lightboxRows: 3,
        loop_slides: true,
        num_seconds: 5,
        show_pagination: true,
        sizing: "static",
        slides: [
          {
            alt_text: "Studio-Planks",
            caption: "",
            href: "",
            img_src:
              "https://www.chiohd.com/hubfs/Homeowner/Collections/Studio/Studio-Planks.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          },
          {
            alt_text: "Accents-Planks",
            caption: null,
            img_src:
              "https://www.chiohd.com/hubfs/Homeowner/Products/Accents/Gallery/Accents-Planks.png",
            link_url: null,
            open_in_new_tab: false,
            show_caption: false
          },
          {
            alt_text: "accents-planks-3216p",
            caption: null,
            img_src:
              "https://www.chiohd.com/hubfs/Assets%20(Feb%202017)/accents-planks-3216p.jpg",
            link_url: null,
            open_in_new_tab: false,
            show_caption: false
          }
        ],
        transition: "slide"
      },
      kula_woodtone_options: {
        cedar: true,
        classic: false,
        dark_oak: true,
        display_woodtone_options_title: true,
        driftwood: true,
        light_oak: false,
        mahogany: true,
        modern: false,
        module_id: 2291028,
        walnut: true,
        widget_name: "[KULA] Woodtone Options"
      },
      product_number: { header_tag: null, value: "2348" },
      product_name: {
        header_tag: null,
        value: __products[2348].product_family
      },
      door_image: {
        alt: "Planks",
        constrain_proportions: true,
        height: 214,
        link: "",
        open_in_new_tab: false,
        src: "https://www.chiohd.com/hubfs/chi-32-mg-one-car.png",
        width: 270
      },
      kula_raised_panel_options: {
        backing_text: __products[2348].section_material,
        door_style_text: __products[2348].panel_style,
        family_brochure_link:
          '\u003Ca href="' +
          __products[2348].family_brochure_link +
          '" target="_blank"\u003EDownload Brochure\u003C/a\u003E',
        model_flyer_link:
          '\u003Ca href="' +
          __products[2348].model_flyer_link +
          '" target="_blank"\u003EDownload Flyer\u003C/a\u003E',
        module_id: 2291134,
        price: __products[2348].price,
        r_value_text: __products[2348].r_value_text,
        rtm_construction_type: __products[2348].rtm_construction_type,
        rtm_insulation_type: __products[2348].rtm_insulation_type,
        widget_name: "[KULA] Raised Panel Options"
      },
      door_image_caption: { value: "Planks" },
      customization_title: { value: "Customization Options" },
      window_inserts: {
        carriage_house_four_p_madison: false,
        carriage_house_four_p_madison_double: false,
        carriage_house_four_p_stockton: false,
        carriage_house_four_p_stockton_double: false,
        carriage_house_madison: false,
        carriage_house_madison_double: false,
        carriage_house_stockton_double: false,
        carriage_house_stockton_single: false,
        carriage_house_two_p_madison: false,
        carriage_house_two_p_madison_double: false,
        carriage_house_two_p_stockton: false,
        carriage_house_two_p_stockton_double: false,
        cascade_short: false,
        cathedral_short: false,
        eight_piece_sunburst: false,
        five_piece_sunburst: false,
        four_piece_sunburst: false,
        long_cascade: true,
        long_four_piece_arched_madison: false,
        long_four_piece_arched_stockton: false,
        long_four_piece_sunburst: false,
        long_madison: true,
        long_praire: true,
        long_sherwood: true,
        long_stockton: true,
        long_three_piece_arched_madison: false,
        long_three_piece_arched_stockton: false,
        long_three_piece_sunburst: false,
        long_two_piece_arched_madison: true,
        long_two_piece_arched_stockton: true,
        long_two_piece_sunburst: true,
        long_waterton: true,
        module_id: 2421584,
        prairie_short: false,
        recessed_madison_combo: false,
        recessed_madison_long: false,
        recessed_madison_short: false,
        recessed_stockton_combo: false,
        recessed_stockton_long: false,
        recessed_stockton_short: false,
        seven_piece_sunburst: false,
        sherwood: false,
        show_window_insert_title: true,
        six_piece_sunburst: false,
        stockton_short: false,
        waterton_short: false,
        widget_name: "Window Inserts"
      },
      designer_glass: {
        display_designer_glass_title: true,
        florence_short: true,
        hampton_short: true,
        hawthorne_platinum_short: true,
        hawthorne_short: false,
        lasalle: false,
        module_id: 2452105,
        newport_short: true,
        somerset_brass_short: false,
        somerset_platinum_short: true,
        temple_short: true,
        widget_name: "Designer Glass"
      },
      glass_options: {
        custom_widget_id: 5562484302,
        field_types: {
          frosted_short: "boolean",
          glue_chip_short: "boolean",
          plain_short: "boolean",
          tinted_short: "boolean"
        },
        module_id: 2470253,
        per_widget_wrapper_html: "",
        seeded: false,
        tag: "custom_widget",
        type: "custom_widget",
        widget_name: "Glass Options",
        wrapping_html: ""
      },
      kula_color_options: {
        almond: true,
        aluminum: false,
        black: true,
        bronze: true,
        brown: true,
        desert_tan: true,
        evergreen: false,
        gray: true,
        module_id: 2210014,
        sandstone: true,
        show_color_options_title: true,
        white: true,
        widget_name: "[KULA] Color Options"
      },
      rtm_additional_text: {
        custom_widget_id: 5808245394,
        field_types: { additional_text: "boolean", rich_text: "richtext" },
        module_id: 2906367,
        per_widget_wrapper_html: "",
        tag: "custom_widget",
        type: "custom_widget",
        widget_name: "[RTM] Additional Text",
        wrapping_html: ""
      },
      model_number_used_in_algolia_search: { value: "2348" }
    }
  },
  {
    url: "https://www.chiohd.com/garage-doors/studio/planks/2328",
    data: {
      image_gallery: {
        auto_advance: true,
        caption_position: "superimpose",
        display_mode: "thumbnail",
        lightboxRows: 3,
        loop_slides: true,
        num_seconds: 5,
        show_pagination: true,
        sizing: "static",
        slides: [
          {
            alt_text: "Studio-Planks",
            caption: "",
            href: "",
            img_src:
              "https://www.chiohd.com/hubfs/Homeowner/Collections/Studio/Studio-Planks.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          },
          {
            alt_text: "Accents-Planks",
            caption: null,
            img_src:
              "https://www.chiohd.com/hubfs/Homeowner/Products/Accents/Gallery/Accents-Planks.png",
            link_url: null,
            open_in_new_tab: false,
            show_caption: false
          },
          {
            alt_text: "accents-planks-3216p",
            caption: null,
            img_src:
              "https://www.chiohd.com/hubfs/Assets%20(Feb%202017)/accents-planks-3216p.jpg",
            link_url: null,
            open_in_new_tab: false,
            show_caption: false
          }
        ],
        transition: "slide"
      },
      kula_woodtone_options: {
        cedar: true,
        classic: false,
        dark_oak: true,
        display_woodtone_options_title: true,
        driftwood: true,
        light_oak: false,
        mahogany: true,
        modern: false,
        module_id: 2291028,
        walnut: true,
        widget_name: "[KULA] Woodtone Options"
      },
      product_number: { header_tag: null, value: "2328" },
      product_name: {
        header_tag: null,
        value: __products[2328].product_family
      },
      door_image: {
        alt: "Planks",
        constrain_proportions: true,
        height: 214,
        link: "",
        open_in_new_tab: false,
        src: "https://www.chiohd.com/hubfs/chi-32-mg-one-car.png",
        width: 270
      },
      kula_raised_panel_options: {
        backing_text: __products[2328].section_material,
        door_style_text: __products[2328].panel_style,
        family_brochure_link:
          '\u003Ca href="' +
          __products[2328].family_brochure_link +
          '" target="_blank"\u003EDownload Brochure\u003C/a\u003E',
        model_flyer_link:
          '\u003Ca href="' +
          __products[2328].model_flyer_link +
          '" target="_blank"\u003EDownload Flyer\u003C/a\u003E',
        module_id: 2291134,
        price: __products[2328].price,
        r_value_text: __products[2328].r_value_text,
        rtm_construction_type: __products[2328].rtm_construction_type,
        rtm_insulation_type: __products[2328].rtm_insulation_type,
        widget_name: "[KULA] Raised Panel Options"
      },
      door_image_caption: { value: "Planks" },
      customization_title: { value: "Customization Options" },
      window_inserts: {
        carriage_house_four_p_madison: false,
        carriage_house_four_p_madison_double: false,
        carriage_house_four_p_stockton: false,
        carriage_house_four_p_stockton_double: false,
        carriage_house_madison: false,
        carriage_house_madison_double: false,
        carriage_house_stockton_double: false,
        carriage_house_stockton_single: false,
        carriage_house_two_p_madison: false,
        carriage_house_two_p_madison_double: false,
        carriage_house_two_p_stockton: false,
        carriage_house_two_p_stockton_double: false,
        cascade_short: true,
        cathedral_short: true,
        eight_piece_sunburst: false,
        five_piece_sunburst: false,
        four_piece_sunburst: false,
        long_cascade: false,
        long_four_piece_arched_madison: false,
        long_four_piece_arched_stockton: false,
        long_four_piece_sunburst: true,
        long_madison: false,
        long_praire: false,
        long_sherwood: false,
        long_stockton: false,
        long_three_piece_arched_madison: false,
        long_three_piece_arched_stockton: false,
        long_three_piece_sunburst: false,
        long_two_piece_arched_madison: false,
        long_two_piece_arched_stockton: false,
        long_two_piece_sunburst: false,
        long_waterton: false,
        module_id: 2421584,
        prairie_short: true,
        recessed_madison_combo: false,
        recessed_madison_long: false,
        recessed_madison_short: false,
        recessed_stockton_combo: false,
        recessed_stockton_long: false,
        recessed_stockton_short: false,
        seven_piece_sunburst: false,
        sherwood: true,
        show_window_insert_title: true,
        six_piece_sunburst: false,
        stockton_short: true,
        waterton_short: true,
        widget_name: "Window Inserts"
      },
      designer_glass: {
        display_designer_glass_title: true,
        florence_short: false,
        hampton_short: true,
        hawthorne_platinum_short: true,
        hawthorne_short: false,
        lasalle: false,
        newport_short: true,
        somerset_brass_short: false,
        somerset_platinum_short: true,
        temple_short: true,
        widget_name: "Designer Glass"
      },
      glass_options: {
        custom_widget_id: 5562484302,
        field_types: {
          frosted_short: "boolean",
          glue_chip_short: "boolean",
          plain_short: "boolean",
          tinted_short: "boolean"
        },
        module_id: 2470253,
        per_widget_wrapper_html: "",
        seeded: false,
        tag: "custom_widget",
        type: "custom_widget",
        widget_name: "Glass Options",
        wrapping_html: ""
      },
      kula_color_options: {
        almond: true,
        aluminum: false,
        black: true,
        bronze: true,
        brown: true,
        desert_tan: true,
        evergreen: false,
        gray: true,
        module_id: 2210014,
        sandstone: true,
        show_color_options_title: true,
        white: true,
        widget_name: "[KULA] Color Options"
      },
      rtm_additional_text: {
        custom_widget_id: 5808245394,
        field_types: { additional_text: "boolean", rich_text: "richtext" },
        module_id: 2906367,
        per_widget_wrapper_html: "",
        tag: "custom_widget",
        type: "custom_widget",
        widget_name: "[RTM] Additional Text",
        wrapping_html: ""
      },
      model_number_used_in_algolia_search: { value: "2328" }
    }
  },
  {
    url: "https://www.chiohd.com/garage-doors/studio/planks/2357",
    data: {
      image_gallery: {
        auto_advance: true,
        caption_position: "superimpose",
        display_mode: "thumbnail",
        lightboxRows: 3,
        loop_slides: true,
        num_seconds: 5,
        show_pagination: true,
        sizing: "static",
        slides: [
          {
            alt_text: "Studio-Planks",
            caption: "",
            href: "",
            img_src:
              "https://www.chiohd.com/hubfs/Homeowner/Collections/Studio/Studio-Planks.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          },
          {
            alt_text: "Accents-Planks",
            caption: null,
            img_src:
              "https://www.chiohd.com/hubfs/Homeowner/Products/Accents/Gallery/Accents-Planks.png",
            link_url: null,
            open_in_new_tab: false,
            show_caption: false
          },
          {
            alt_text: "accents-planks-3216p",
            caption: null,
            img_src:
              "https://www.chiohd.com/hubfs/Assets%20(Feb%202017)/accents-planks-3216p.jpg",
            link_url: null,
            open_in_new_tab: false,
            show_caption: false
          }
        ],
        transition: "slide"
      },
      kula_woodtone_options: {
        cedar: true,
        classic: false,
        dark_oak: true,
        display_woodtone_options_title: true,
        driftwood: true,
        light_oak: false,
        mahogany: true,
        modern: false,
        module_id: 2291028,
        walnut: true,
        widget_name: "[KULA] Woodtone Options"
      },
      product_number: { header_tag: null, value: "2357" },
      product_name: {
        header_tag: null,
        value: __products[2357].product_family
      },
      door_image: {
        alt: "Planks",
        constrain_proportions: true,
        height: 214,
        link: "",
        open_in_new_tab: false,
        src: "https://www.chiohd.com/hubfs/chi-32-mg-one-car.png",
        width: 270
      },
      kula_raised_panel_options: {
        backing_text: __products[2357].section_material,
        door_style_text: __products[2357].panel_style,
        family_brochure_link:
          '\u003Ca href="' +
          __products[2357].family_brochure_link +
          '" target="_blank"\u003EDownload Brochure\u003C/a\u003E',
        model_flyer_link:
          '\u003Ca href="' +
          __products[2357].model_flyer_link +
          '" target="_blank"\u003EDownload Flyer\u003C/a\u003E',
        module_id: 2291134,
        price: "$$$",
        price: __products[2357].price,
        r_value_text: __products[2357].r_value_text,
        rtm_construction_type: __products[2357].rtm_construction_type,
        rtm_insulation_type: __products[2357].rtm_insulation_type,
        widget_name: "[KULA] Raised Panel Options"
      },
      door_image_caption: { value: "Planks" },
      customization_title: { value: "Customization Options" },
      window_inserts: {
        carriage_house_four_p_madison: false,
        carriage_house_four_p_madison_double: false,
        carriage_house_four_p_stockton: false,
        carriage_house_four_p_stockton_double: false,
        carriage_house_madison: false,
        carriage_house_madison_double: false,
        carriage_house_stockton_double: false,
        carriage_house_stockton_single: false,
        carriage_house_two_p_madison: false,
        carriage_house_two_p_madison_double: false,
        carriage_house_two_p_stockton: false,
        carriage_house_two_p_stockton_double: false,
        cascade_short: false,
        cathedral_short: false,
        eight_piece_sunburst: false,
        five_piece_sunburst: false,
        four_piece_sunburst: false,
        long_cascade: true,
        long_four_piece_arched_madison: false,
        long_four_piece_arched_stockton: false,
        long_four_piece_sunburst: false,
        long_madison: true,
        long_praire: false,
        long_sherwood: false,
        long_stockton: true,
        long_three_piece_arched_madison: false,
        long_three_piece_arched_stockton: false,
        long_three_piece_sunburst: false,
        long_two_piece_arched_madison: true,
        long_two_piece_arched_stockton: true,
        long_two_piece_sunburst: false,
        long_waterton: false,
        prairie_short: false,
        recessed_madison_combo: false,
        recessed_madison_long: false,
        recessed_madison_short: false,
        recessed_stockton_combo: false,
        recessed_stockton_long: false,
        recessed_stockton_short: false,
        seven_piece_sunburst: false,
        sherwood: false,
        show_window_insert_title: true,
        six_piece_sunburst: false,
        stockton_short: false,
        waterton_short: false,
        widget_name: "Window Inserts"
      },
      designer_glass: {
        display_designer_glass_title: true,
        florence_short: true,
        hampton_short: true,
        hawthorne_platinum_short: false,
        hawthorne_short: false,
        lasalle: true,
        newport_short: true,
        somerset_brass_short: false,
        somerset_platinum_short: false,
        temple_short: false,
        widget_name: "Designer Glass"
      },
      glass_options: {
        custom_widget_id: 5562484302,
        field_types: {
          frosted_short: "boolean",
          glue_chip_short: "boolean",
          plain_short: "boolean",
          tinted_short: "boolean"
        },
        module_id: 2470253,
        per_widget_wrapper_html: "",
        seeded: true,
        tag: "custom_widget",
        type: "custom_widget",
        widget_name: "Glass Options",
        wrapping_html: ""
      },
      kula_color_options: {
        almond: true,
        aluminum: false,
        black: true,
        bronze: false,
        brown: true,
        desert_tan: false,
        evergreen: false,
        gray: true,
        module_id: 2210014,
        sandstone: true,
        show_color_options_title: true,
        white: true,
        widget_name: "[KULA] Color Options"
      },
      rtm_additional_text: {
        custom_widget_id: 5808245394,
        field_types: { additional_text: "boolean", rich_text: "richtext" },
        module_id: 2906367,
        per_widget_wrapper_html: "",
        tag: "custom_widget",
        type: "custom_widget",
        widget_name: "[RTM] Additional Text",
        wrapping_html: ""
      },
      model_number_used_in_algolia_search: { value: "2357" }
    }
  },
  {
    url: "https://www.chiohd.com/garage-doors/studio/planks/2347",
    data: {
      image_gallery: {
        auto_advance: true,
        caption_position: "superimpose",
        display_mode: "thumbnail",
        lightboxRows: 3,
        loop_slides: true,
        num_seconds: 5,
        show_pagination: true,
        sizing: "static",
        slides: [
          {
            alt_text: "Studio-Planks",
            caption: "",
            href: "",
            img_src:
              "https://www.chiohd.com/hubfs/Homeowner/Collections/Studio/Studio-Planks.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          },
          {
            alt_text: "Accents-Planks",
            caption: null,
            img_src:
              "https://www.chiohd.com/hubfs/Homeowner/Products/Accents/Gallery/Accents-Planks.png",
            link_url: null,
            open_in_new_tab: false,
            show_caption: false
          },
          {
            alt_text: "accents-planks-3216p",
            caption: null,
            img_src:
              "https://www.chiohd.com/hubfs/Assets%20(Feb%202017)/accents-planks-3216p.jpg",
            link_url: null,
            open_in_new_tab: false,
            show_caption: false
          }
        ],
        transition: "slide"
      },
      kula_woodtone_options: {
        cedar: true,
        classic: false,
        dark_oak: true,
        display_woodtone_options_title: true,
        driftwood: true,
        light_oak: false,
        mahogany: true,
        modern: false,
        module_id: 2291028,
        walnut: true,
        widget_name: "[KULA] Woodtone Options"
      },
      product_number: { header_tag: null, value: "2347" },
      product_name: {
        header_tag: null,
        value: __products[2347].product_family
      },
      door_image: {
        alt: "Planks",
        constrain_proportions: true,
        height: 214,
        link: "",
        open_in_new_tab: false,
        src: "https://www.chiohd.com/hubfs/chi-32-mg-one-car.png",
        width: 270
      },
      kula_raised_panel_options: {
        backing_text: __products[2347].section_material,
        door_style_text: __products[2347].panel_style,
        family_brochure_link:
          '\u003Ca href="' +
          __products[2347].family_brochure_link +
          '" target="_blank"\u003EDownload Brochure\u003C/a\u003E',
        model_flyer_link:
          '\u003Ca href="' +
          __products[2347].model_flyer_link +
          '" target="_blank"\u003EDownload Flyer\u003C/a\u003E',
        module_id: 2291134,
        price: __products[2347].price,
        r_value_text: __products[2347].r_value_text,
        rtm_construction_type: __products[2347].rtm_construction_type,
        rtm_insulation_type: __products[2347].rtm_insulation_type,
        widget_name: "[KULA] Raised Panel Options"
      },
      door_image_caption: { value: "Planks" },
      customization_title: { value: "Customization Options" },
      window_inserts: {
        carriage_house_four_p_madison: false,
        carriage_house_four_p_madison_double: false,
        carriage_house_four_p_stockton: false,
        carriage_house_four_p_stockton_double: false,
        carriage_house_madison: false,
        carriage_house_madison_double: false,
        carriage_house_stockton_double: false,
        carriage_house_stockton_single: false,
        carriage_house_two_p_madison: false,
        carriage_house_two_p_madison_double: false,
        carriage_house_two_p_stockton: false,
        carriage_house_two_p_stockton_double: false,
        cascade_short: false,
        cathedral_short: false,
        eight_piece_sunburst: false,
        five_piece_sunburst: false,
        four_piece_sunburst: false,
        long_cascade: true,
        long_four_piece_arched_madison: false,
        long_four_piece_arched_stockton: false,
        long_four_piece_sunburst: false,
        long_madison: true,
        long_praire: true,
        long_sherwood: true,
        long_stockton: true,
        long_three_piece_arched_madison: false,
        long_three_piece_arched_stockton: false,
        long_three_piece_sunburst: false,
        long_two_piece_arched_madison: true,
        long_two_piece_arched_stockton: true,
        long_two_piece_sunburst: true,
        long_waterton: true,
        prairie_short: false,
        recessed_madison_combo: false,
        recessed_madison_long: false,
        recessed_madison_short: false,
        recessed_stockton_combo: false,
        recessed_stockton_long: false,
        recessed_stockton_short: false,
        seven_piece_sunburst: false,
        sherwood: false,
        show_window_insert_title: true,
        six_piece_sunburst: false,
        stockton_short: false,
        waterton_short: false,
        widget_name: "Window Inserts"
      },
      designer_glass: {
        display_designer_glass_title: true,
        florence_short: true,
        hampton_short: true,
        hawthorne_platinum_short: true,
        hawthorne_short: false,
        lasalle: false,
        module_id: 2452105,
        newport_short: true,
        somerset_brass_short: false,
        somerset_platinum_short: true,
        temple_short: true,
        widget_name: "Designer Glass"
      },
      glass_options: {
        custom_widget_id: 5562484302,
        field_types: {
          frosted_short: "boolean",
          glue_chip_short: "boolean",
          plain_short: "boolean",
          tinted_short: "boolean"
        },
        module_id: 2470253,
        per_widget_wrapper_html: "",
        seeded: false,
        tag: "custom_widget",
        type: "custom_widget",
        widget_name: "Glass Options",
        wrapping_html: ""
      },
      kula_color_options: {
        almond: true,
        aluminum: false,
        black: true,
        bronze: false,
        brown: true,
        desert_tan: false,
        evergreen: false,
        gray: true,
        module_id: 2210014,
        sandstone: true,
        show_color_options_title: true,
        white: true,
        widget_name: "[KULA] Color Options"
      },
      rtm_additional_text: {
        custom_widget_id: 5808245394,
        field_types: { additional_text: "boolean", rich_text: "richtext" },
        module_id: 2906367,
        per_widget_wrapper_html: "",
        tag: "custom_widget",
        type: "custom_widget",
        widget_name: "[RTM] Additional Text",
        wrapping_html: ""
      },
      model_number_used_in_algolia_search: { value: "2347" }
    }
  },
  {
    url: "https://www.chiohd.com/garage-doors/studio/planks/2327",
    data: {
      image_gallery: {
        auto_advance: true,
        caption_position: "superimpose",
        display_mode: "thumbnail",
        lightboxRows: 3,
        loop_slides: true,
        num_seconds: 5,
        show_pagination: true,
        sizing: "static",
        slides: [
          {
            alt_text: "Studio-Planks",
            caption: "",
            href: "",
            img_src:
              "https://www.chiohd.com/hubfs/Homeowner/Collections/Studio/Studio-Planks.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          },
          {
            alt_text: "Accents-Planks",
            caption: null,
            img_src:
              "https://www.chiohd.com/hubfs/Homeowner/Products/Accents/Gallery/Accents-Planks.png",
            link_url: null,
            open_in_new_tab: false,
            show_caption: false
          },
          {
            alt_text: "accents-planks-3216p",
            caption: null,
            img_src:
              "https://www.chiohd.com/hubfs/Assets%20(Feb%202017)/accents-planks-3216p.jpg",
            link_url: null,
            open_in_new_tab: false,
            show_caption: false
          }
        ],
        transition: "slide"
      },
      kula_woodtone_options: {
        cedar: true,
        classic: false,
        dark_oak: true,
        display_woodtone_options_title: true,
        driftwood: true,
        light_oak: false,
        mahogany: true,
        modern: false,
        module_id: 2291028,
        walnut: true,
        widget_name: "[KULA] Woodtone Options"
      },
      product_number: { header_tag: null, value: "2327" },
      product_name: {
        header_tag: null,
        value: __products[2327].product_family
      },
      door_image: {
        alt: "Planks",
        constrain_proportions: true,
        height: 214,
        link: "",
        open_in_new_tab: false,
        src: "https://www.chiohd.com/hubfs/chi-32-mg-one-car.png",
        width: 270
      },
      kula_raised_panel_options: {
        backing_text: __products[2327].section_material,
        door_style_text: __products[2327].panel_style,
        family_brochure_link:
          '\u003Ca href="' +
          __products[2327].family_brochure_link +
          '" target="_blank"\u003EDownload Brochure\u003C/a\u003E',
        model_flyer_link:
          '\u003Ca href="' +
          __products[2327].model_flyer_link +
          '" target="_blank"\u003EDownload Flyer\u003C/a\u003E',
        module_id: 2291134,
        price: __products[2327].price,
        r_value_text: __products[2327].r_value_text,
        rtm_construction_type: __products[2327].rtm_construction_type,
        rtm_insulation_type: __products[2327].rtm_insulation_type,
        widget_name: "[KULA] Raised Panel Options"
      },
      door_image_caption: { value: "Planks" },
      customization_title: { value: "Customization Options" },
      window_inserts: {
        carriage_house_four_p_madison: false,
        carriage_house_four_p_madison_double: false,
        carriage_house_four_p_stockton: false,
        carriage_house_four_p_stockton_double: false,
        carriage_house_madison: false,
        carriage_house_madison_double: false,
        carriage_house_stockton_double: false,
        carriage_house_stockton_single: false,
        carriage_house_two_p_madison: false,
        carriage_house_two_p_madison_double: false,
        carriage_house_two_p_stockton: false,
        carriage_house_two_p_stockton_double: false,
        cascade_short: true,
        cathedral_short: true,
        eight_piece_sunburst: false,
        five_piece_sunburst: false,
        four_piece_sunburst: false,
        long_cascade: false,
        long_four_piece_arched_madison: false,
        long_four_piece_arched_stockton: false,
        long_four_piece_sunburst: true,
        long_madison: false,
        long_praire: false,
        long_sherwood: false,
        long_stockton: false,
        long_three_piece_arched_madison: false,
        long_three_piece_arched_stockton: false,
        long_three_piece_sunburst: false,
        long_two_piece_arched_madison: false,
        long_two_piece_arched_stockton: false,
        long_two_piece_sunburst: false,
        long_waterton: false,
        prairie_short: true,
        recessed_madison_combo: false,
        recessed_madison_long: false,
        recessed_madison_short: false,
        recessed_stockton_combo: false,
        recessed_stockton_long: false,
        recessed_stockton_short: false,
        seven_piece_sunburst: false,
        sherwood: true,
        show_window_insert_title: true,
        six_piece_sunburst: false,
        stockton_short: true,
        waterton_short: true,
        widget_name: "Window Inserts"
      },
      designer_glass: {
        display_designer_glass_title: true,
        florence_short: true,
        hampton_short: true,
        hawthorne_platinum_short: true,
        hawthorne_short: false,
        lasalle: false,
        newport_short: true,
        somerset_brass_short: false,
        somerset_platinum_short: true,
        temple_short: true,
        widget_name: "Designer Glass"
      },
      glass_options: {
        custom_widget_id: 5562484302,
        field_types: {
          frosted_short: "boolean",
          glue_chip_short: "boolean",
          plain_short: "boolean",
          tinted_short: "boolean"
        },
        module_id: 2470253,
        per_widget_wrapper_html: "",
        seeded: false,
        tag: "custom_widget",
        type: "custom_widget",
        widget_name: "Glass Options",
        wrapping_html: ""
      },
      kula_color_options: {
        almond: true,
        aluminum: false,
        black: true,
        bronze: false,
        brown: true,
        desert_tan: false,
        evergreen: false,
        gray: true,
        module_id: 2210014,
        sandstone: true,
        show_color_options_title: true,
        white: true,
        widget_name: "[KULA] Color Options"
      },
      rtm_additional_text: {
        custom_widget_id: 5808245394,
        field_types: { additional_text: "boolean", rich_text: "richtext" },
        module_id: 2906367,
        per_widget_wrapper_html: "",
        tag: "custom_widget",
        type: "custom_widget",
        widget_name: "[RTM] Additional Text",
        wrapping_html: ""
      },
      model_number_used_in_algolia_search: { value: "2327" }
    }
  },
  {
    url: "https://www.chiohd.com/homeowners/garage-doors/flush-panel/4141",
    data: {
      image_gallery: {
        auto_advance: true,
        caption_position: "superimpose",
        display_mode: "thumbnail",
        lightbox: false,
        lightboxRows: 3,
        loop_slides: true,
        num_seconds: 5,
        only_thumbnails: false,
        show_pagination: true,
        sizing: "static",
        slides: [
          {
            alt_text: "Small (72dpi)-22F_CHI0005.jpg",
            caption: "",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Flush%20Panel/Gallery/Small%20(72dpi)-22F_CHI0005.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          },
          {
            alt_text: "Small (72dpi)-22F_CHI0006.jpg",
            caption: "",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Flush%20Panel/Gallery/Small%20(72dpi)-22F_CHI0006.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          },
          {
            alt_text: "Small (72dpi)-CHI082913_0106.jpg",
            caption: "",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Flush%20Panel/Gallery/Small%20(72dpi)-CHI082913_0106.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          }
        ],
        transition: "slide",
        with_thumbnail_nav: true
      },
      kula_woodtone_options: {
        cedar: false,
        classic: false,
        dark_oak: false,
        display_woodtone_options_title: false,
        driftwood: false,
        light_oak: false,
        mahogany: false,
        modern: false,
        module_id: 2291028,
        walnut: false,
        widget_name: "[KULA] Woodtone Options"
      },
      product_number: { header_tag: null, value: "4141" },
      product_name: {
        header_tag: null,
        value: __products[4141].product_family
      },
      door_image: {
        alt: "chi-22-52-f-one-car.png",
        height: 214,
        img_alt: "chi-22-52-f-one-car.png",
        img_load_error: false,
        link: "",
        open_in_new_tab: false,
        original_height: 214,
        original_width: 270,
        src: "https://cdn2.hubspot.net/hubfs/2029938/chi-22-52-f-one-car.png",
        width: 270
      },
      kula_raised_panel_options: {
        backing_text: __products[4141].section_material,
        door_style_text: __products[4141].panel_style,
        family_brochure_link:
          '\u003Ca href="' +
          __products[4141].family_brochure_link +
          '" target="_blank"\u003EDownload Brochure\u003C/a\u003E',
        model_flyer_link:
          '\u003Ca href="' +
          __products[4141].model_flyer_link +
          '" target="_blank"\u003EDownload Flyer\u003C/a\u003E',
        module_id: 2291134,
        price: __products[4141].price,
        r_value_text: __products[4141].r_value_text,
        rtm_construction_type: __products[4141].rtm_construction_type,
        rtm_insulation_type: __products[4141].rtm_insulation_type,
        widget_name: "[KULA] Raised Panel Options"
      },
      door_image_caption: { value: "Flush" },
      customization_title: { value: "Customization Options" },
      window_inserts: {
        carriage_house_four_p_madison: false,
        carriage_house_four_p_madison_double: false,
        carriage_house_four_p_stockton: false,
        carriage_house_four_p_stockton_double: false,
        carriage_house_madison: false,
        carriage_house_madison_double: false,
        carriage_house_stockton_double: false,
        carriage_house_stockton_single: false,
        carriage_house_two_p_madison: false,
        carriage_house_two_p_madison_double: false,
        carriage_house_two_p_stockton: false,
        carriage_house_two_p_stockton_double: false,
        cascade_short: false,
        cathedral_short: false,
        eight_piece_sunburst: false,
        five_piece_sunburst: false,
        four_piece_sunburst: false,
        long_cascade: true,
        long_four_piece_arched_madison: false,
        long_four_piece_arched_stockton: false,
        long_four_piece_sunburst: false,
        long_madison: true,
        long_praire: true,
        long_sherwood: true,
        long_stockton: true,
        long_three_piece_arched_madison: false,
        long_three_piece_arched_stockton: false,
        long_three_piece_sunburst: false,
        long_two_piece_arched_madison: true,
        long_two_piece_arched_stockton: true,
        long_two_piece_sunburst: true,
        long_waterton: true,
        prairie_short: false,
        recessed_madison_combo: false,
        recessed_madison_long: false,
        recessed_madison_short: false,
        recessed_stockton_combo: false,
        recessed_stockton_long: false,
        recessed_stockton_short: false,
        seven_piece_sunburst: false,
        sherwood: false,
        show_window_insert_title: true,
        six_piece_sunburst: false,
        stockton_short: false,
        waterton_short: false,
        widget_name: "Window Inserts"
      },
      designer_glass: {
        display_designer_glass_title: false,
        florence_short: false,
        hampton_short: false,
        hawthorne_platinum_short: false,
        hawthorne_short: false,
        lasalle: false,
        module_id: 2452105,
        newport_short: false,
        somerset_brass_short: false,
        somerset_platinum_short: false,
        temple_short: false,
        widget_name: "Designer Glass"
      },
      glass_options: {
        custom_widget_id: 5562484302,
        field_types: {
          frosted_short: "boolean",
          glue_chip_short: "boolean",
          plain_short: "boolean",
          tinted_short: "boolean"
        },
        module_id: 2470253,
        per_widget_wrapper_html: "",
        tag: "custom_widget",
        type: "custom_widget",
        widget_name: "Glass Options",
        wrapping_html: ""
      },
      kula_color_options: {
        almond: true,
        aluminum: false,
        black: false,
        bronze: false,
        brown: true,
        desert_tan: false,
        evergreen: true,
        gray: false,
        module_id: 2210014,
        sandstone: true,
        show_color_options_title: true,
        white: true,
        widget_name: "[KULA] Color Options"
      },
      rtm_additional_text: {
        custom_widget_id: 5808245394,
        field_types: { additional_text: "boolean", rich_text: "richtext" },
        module_id: 2906367,
        per_widget_wrapper_html: "",
        tag: "custom_widget",
        type: "custom_widget",
        widget_name: "[RTM] Additional Text",
        wrapping_html: ""
      },
      model_number_used_in_algolia_search: { value: "4141" }
    }
  },
  {
    url: "https://www.chiohd.com/homeowners/garage-doors/flush-panel/4151",
    data: {
      image_gallery: {
        auto_advance: true,
        caption_position: "superimpose",
        display_mode: "thumbnail",
        lightbox: false,
        lightboxRows: 3,
        loop_slides: true,
        num_seconds: 5,
        only_thumbnails: false,
        show_pagination: true,
        sizing: "static",
        slides: [
          {
            alt_text: "Small (72dpi)-22F_CHI0005.jpg",
            caption: "",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Flush%20Panel/Gallery/Small%20(72dpi)-22F_CHI0005.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          },
          {
            alt_text: "Small (72dpi)-22F_CHI0006.jpg",
            caption: "",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Flush%20Panel/Gallery/Small%20(72dpi)-22F_CHI0006.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          },
          {
            alt_text: "Small (72dpi)-CHI082913_0106.jpg",
            caption: "",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Flush%20Panel/Gallery/Small%20(72dpi)-CHI082913_0106.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          }
        ],
        transition: "slide",
        with_thumbnail_nav: true
      },
      kula_woodtone_options: {
        cedar: false,
        classic: false,
        dark_oak: false,
        display_woodtone_options_title: false,
        driftwood: false,
        light_oak: false,
        mahogany: false,
        modern: false,
        module_id: 2291028,
        walnut: false,
        widget_name: "[KULA] Woodtone Options"
      },
      product_number: { header_tag: null, value: "4151" },
      product_name: {
        header_tag: null,
        value: __products[4151].product_family
      },
      door_image: {
        alt: "chi-22-52-f-one-car.png",
        height: 214,
        img_alt: "chi-22-52-f-one-car.png",
        img_load_error: false,
        link: "",
        open_in_new_tab: false,
        original_height: 214,
        original_width: 270,
        src: "https://cdn2.hubspot.net/hubfs/2029938/chi-22-52-f-one-car.png",
        width: 270
      },
      kula_raised_panel_options: {
        backing_text: __products[4151].section_material,
        door_style_text: __products[4151].panel_style,
        family_brochure_link:
          '\u003Ca href="' +
          __products[4151].family_brochure_link +
          '" target="_blank"\u003EDownload Brochure\u003C/a\u003E',
        model_flyer_link:
          '\u003Ca href="' +
          __products[4151].model_flyer_link +
          '" target="_blank"\u003EDownload Flyer\u003C/a\u003E',
        module_id: 2291134,
        price: __products[4151].price,
        r_value_text: __products[4151].r_value_text,
        rtm_construction_type: __products[4151].rtm_construction_type,
        rtm_insulation_type: __products[4151].rtm_insulation_type,
        widget_name: "[KULA] Raised Panel Options"
      },
      door_image_caption: { value: "Flush" },
      customization_title: { value: "Customization Options" },
      window_inserts: {
        carriage_house_four_p_madison: false,
        carriage_house_four_p_madison_double: false,
        carriage_house_four_p_stockton: false,
        carriage_house_four_p_stockton_double: false,
        carriage_house_madison: false,
        carriage_house_madison_double: false,
        carriage_house_stockton_double: false,
        carriage_house_stockton_single: false,
        carriage_house_two_p_madison: false,
        carriage_house_two_p_madison_double: false,
        carriage_house_two_p_stockton: false,
        carriage_house_two_p_stockton_double: false,
        cascade_short: false,
        cathedral_short: false,
        eight_piece_sunburst: false,
        five_piece_sunburst: false,
        four_piece_sunburst: false,
        long_cascade: true,
        long_four_piece_arched_madison: false,
        long_four_piece_arched_stockton: false,
        long_four_piece_sunburst: false,
        long_madison: true,
        long_praire: true,
        long_sherwood: true,
        long_stockton: true,
        long_three_piece_arched_madison: false,
        long_three_piece_arched_stockton: false,
        long_three_piece_sunburst: false,
        long_two_piece_arched_madison: true,
        long_two_piece_arched_stockton: true,
        long_two_piece_sunburst: true,
        long_waterton: true,
        prairie_short: false,
        recessed_madison_combo: false,
        recessed_madison_long: false,
        recessed_madison_short: false,
        recessed_stockton_combo: false,
        recessed_stockton_long: false,
        recessed_stockton_short: false,
        seven_piece_sunburst: false,
        sherwood: false,
        show_window_insert_title: true,
        six_piece_sunburst: false,
        stockton_short: false,
        waterton_short: false,
        widget_name: "Window Inserts"
      },
      designer_glass: {
        display_designer_glass_title: false,
        florence_short: false,
        hampton_short: false,
        hawthorne_platinum_short: false,
        hawthorne_short: false,
        lasalle: false,
        module_id: 2452105,
        newport_short: false,
        somerset_brass_short: false,
        somerset_platinum_short: false,
        temple_short: false,
        widget_name: "Designer Glass"
      },
      glass_options: {
        custom_widget_id: 5562484302,
        field_types: {
          frosted_short: "boolean",
          glue_chip_short: "boolean",
          plain_short: "boolean",
          tinted_short: "boolean"
        },
        module_id: 2470253,
        per_widget_wrapper_html: "",
        tag: "custom_widget",
        type: "custom_widget",
        widget_name: "Glass Options",
        wrapping_html: ""
      },
      kula_color_options: {
        almond: true,
        aluminum: false,
        black: true,
        bronze: true,
        brown: true,
        desert_tan: true,
        evergreen: false,
        gray: true,
        module_id: 2210014,
        redirectUrl:
          "https://app.hubspot.com/content/2029938/edit-beta/5887935582",
        sandstone: true,
        show_color_options_title: true,
        white: true,
        widget_name: "[KULA] Color Options"
      },
      rtm_additional_text: {
        custom_widget_id: 5808245394,
        field_types: { additional_text: "boolean", rich_text: "richtext" },
        module_id: 2906367,
        per_widget_wrapper_html: "",
        tag: "custom_widget",
        type: "custom_widget",
        widget_name: "[RTM] Additional Text",
        wrapping_html: ""
      },
      model_number_used_in_algolia_search: { value: "4151" }
    }
  },
  {
    url: "https://www.chiohd.com/homeowners/garage-doors/stamped-shaker/2550",
    data: {
      image_gallery: {
        auto_advance: true,
        caption_position: "superimpose",
        display_mode: "thumbnail",
        lightbox: false,
        lightboxRows: 3,
        loop_slides: true,
        num_seconds: 5,
        only_thumbnails: false,
        show_pagination: true,
        sizing: "static",
        slides: [
          {
            alt_text: "Stamped-Shaker-1.jpg",
            caption: "",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Shaker/Stamped-Shaker-1.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          },
          {
            alt_text: "Stamped-Shaker-2.jpg",
            caption: "",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Shaker/Stamped-Shaker-2.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          },
          {
            alt_text: "Stamped-Shaker-3.jpg",
            caption: "",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Shaker/Stamped-Shaker-3.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          }
        ],
        transition: "slide",
        with_thumbnail_nav: true
      },
      kula_woodtone_options: {
        cedar: false,
        classic: true,
        dark_oak: false,
        display_woodtone_options_title: true,
        driftwood: false,
        light_oak: false,
        mahogany: false,
        modern: true,
        module_id: 2291028,
        walnut: false,
        widget_name: "[KULA] Woodtone Options"
      },
      product_number: { header_tag: null, value: "2550" },
      product_name: {
        header_tag: null,
        value: __products[2550].product_family
      },
      door_image: {
        alt: "stamped-shaker-thumbnail.png",
        height: 104,
        img_alt: "stamped-shaker-thumbnail.png",
        img_load_error: false,
        link: "",
        open_in_new_tab: false,
        original_height: 104,
        original_width: 132,
        src:
          "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Shaker/stamped-shaker-thumbnail.png",
        width: 132
      },
      kula_raised_panel_options: {
        backing_text: __products[2550].section_material,
        door_style_text: __products[2550].panel_style,
        family_brochure_link:
          '\u003Ca href="' +
          __products[2550].family_brochure_link +
          '" target="_blank"\u003EDownload Brochure\u003C/a\u003E',
        model_flyer_link:
          '\u003Ca href="' +
          __products[2550].model_flyer_link +
          '" target="_blank"\u003EDownload Flyer\u003C/a\u003E',
        module_id: 2291134,
        price: __products[2550].price,
        r_value_text: __products[2550].r_value_text,
        rtm_construction_type: __products[2550].rtm_construction_type,
        rtm_insulation_type: __products[2550].rtm_insulation_type,
        widget_name: "[KULA] Raised Panel Options"
      },
      door_image_caption: { value: "Stamped Shaker" },
      customization_title: { value: "Customization Options" },
      window_inserts: {
        cascade_short: false,
        cathedral_short: false,
        eight_piece_sunburst: false,
        five_piece_sunburst: false,
        four_piece_sunburst: false,
        long_cascade: true,
        long_four_piece_arched_madison: false,
        long_four_piece_arched_stockton: false,
        long_four_piece_sunburst: false,
        long_madison: true,
        long_praire: false,
        long_sherwood: false,
        long_stockton: true,
        long_three_piece_arched_madison: false,
        long_three_piece_arched_stockton: false,
        long_three_piece_sunburst: false,
        long_two_piece_arched_madison: true,
        long_two_piece_arched_stockton: true,
        long_two_piece_sunburst: false,
        long_waterton: false,
        module_id: 2421584,
        prairie_short: false,
        seven_piece_sunburst: false,
        sherwood: false,
        six_piece_sunburst: false,
        stockton_short: false,
        waterton_short: false,
        widget_name: "Window Inserts"
      },
      designer_glass: {
        display_designer_glass_title: false,
        florence_short: false,
        hampton_short: false,
        hawthorne_platinum_short: false,
        hawthorne_short: false,
        module_id: 2452105,
        newport_short: false,
        somerset_brass_short: false,
        somerset_platinum_short: false,
        temple_short: false,
        widget_name: "Designer Glass"
      },
      glass_options: {
        frosted_short: true,
        glue_chip_short: true,
        module_id: 2470253,
        obscure_short: true,
        plain_short: true,
        seeded: true,
        tinted_short: true,
        widget_name: "Glass Options"
      },
      kula_color_options: {
        almond: true,
        black: true,
        bronze: true,
        brown: true,
        desert_tan: true,
        evergreen: false,
        gray: true,
        module_id: 2210014,
        sandstone: true,
        show_color_options_title: true,
        white: true,
        widget_name: "[KULA] Color Options"
      },
      rtm_additional_text: {
        custom_widget_id: 5808245394,
        field_types: { additional_text: "boolean", rich_text: "richtext" },
        module_id: 2906367,
        per_widget_wrapper_html: "",
        tag: "custom_widget",
        type: "custom_widget",
        widget_name: "[RTM] Additional Text",
        wrapping_html: ""
      },
      model_number_used_in_algolia_search: { value: "2550" }
    }
  },
  {
    url: "https://www.chiohd.com/homeowners/garage-doors/flush-panel/2128",
    data: {
      image_gallery: {
        auto_advance: true,
        caption_position: "superimpose",
        display_mode: "thumbnail",
        lightbox: false,
        lightboxRows: 3,
        loop_slides: true,
        num_seconds: 5,
        only_thumbnails: false,
        show_pagination: true,
        sizing: "static",
        slides: [
          {
            alt_text: "Small (72dpi)-22F_CHI0005.jpg",
            caption: "",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Flush%20Panel/Gallery/Small%20(72dpi)-22F_CHI0005.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          },
          {
            alt_text: "Small (72dpi)-22F_CHI0006.jpg",
            caption: "",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Flush%20Panel/Gallery/Small%20(72dpi)-22F_CHI0006.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          },
          {
            alt_text: "Small (72dpi)-CHI082913_0106.jpg",
            caption: "",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Flush%20Panel/Gallery/Small%20(72dpi)-CHI082913_0106.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          }
        ],
        transition: "slide",
        with_thumbnail_nav: true
      },
      kula_woodtone_options: {
        cedar: true,
        classic: false,
        dark_oak: true,
        display_woodtone_options_title: true,
        driftwood: true,
        light_oak: false,
        mahogany: true,
        modern: false,
        module_id: 2291028,
        walnut: true,
        widget_name: "[KULA] Woodtone Options"
      },
      product_number: { header_tag: null, value: "2128" },
      product_name: {
        header_tag: null,
        value: __products[2128].product_family
      },
      door_image: {
        alt: "chi-22-52-f-one-car.png",
        height: 214,
        img_alt: "chi-22-52-f-one-car.png",
        img_load_error: false,
        link: "",
        open_in_new_tab: false,
        original_height: 214,
        original_width: 270,
        src: "https://cdn2.hubspot.net/hubfs/2029938/chi-22-52-f-one-car.png",
        width: 270
      },
      kula_raised_panel_options: {
        backing_text: __products[2128].section_material,
        door_style_text: __products[2128].panel_style,
        family_brochure_link:
          '\u003Ca href="' +
          __products[2128].family_brochure_link +
          '" target="_blank"\u003EDownload Brochure\u003C/a\u003E',
        model_flyer_link:
          '\u003Ca href="' +
          __products[2128].model_flyer_link +
          '" target="_blank"\u003EDownload Flyer\u003C/a\u003E',
        module_id: 2291134,
        price: __products[2128].price,
        r_value_text: __products[2128].r_value_text,
        rtm_construction_type: __products[2128].rtm_construction_type,
        rtm_insulation_type: __products[2128].rtm_insulation_type,
        widget_name: "[KULA] Raised Panel Options"
      },
      door_image_caption: { value: "Flush" },
      customization_title: { value: "Customization Options" },
      window_inserts: {
        carriage_house_four_p_madison: false,
        carriage_house_four_p_madison_double: false,
        carriage_house_four_p_stockton: false,
        carriage_house_four_p_stockton_double: false,
        carriage_house_madison: false,
        carriage_house_madison_double: false,
        carriage_house_stockton_double: false,
        carriage_house_stockton_single: false,
        carriage_house_two_p_madison: false,
        carriage_house_two_p_madison_double: false,
        carriage_house_two_p_stockton: false,
        carriage_house_two_p_stockton_double: false,
        cascade_short: true,
        cathedral_short: true,
        eight_piece_sunburst: false,
        five_piece_sunburst: false,
        four_piece_sunburst: true,
        long_cascade: false,
        long_four_piece_arched_madison: false,
        long_four_piece_arched_stockton: false,
        long_four_piece_sunburst: false,
        long_madison: false,
        long_praire: false,
        long_sherwood: false,
        long_stockton: false,
        long_three_piece_arched_madison: false,
        long_three_piece_arched_stockton: false,
        long_three_piece_sunburst: false,
        long_two_piece_arched_madison: false,
        long_two_piece_arched_stockton: false,
        long_two_piece_sunburst: false,
        long_waterton: false,
        module_id: 2421584,
        prairie_short: true,
        recessed_madison_combo: false,
        recessed_madison_long: false,
        recessed_madison_short: false,
        recessed_stockton_combo: false,
        recessed_stockton_long: false,
        recessed_stockton_short: false,
        seven_piece_sunburst: false,
        sherwood: true,
        show_window_insert_title: true,
        six_piece_sunburst: false,
        stockton_short: true,
        waterton_short: true,
        widget_name: "Window Inserts"
      },
      designer_glass: {
        display_designer_glass_title: false,
        florence_short: false,
        hampton_short: true,
        hawthorne_platinum_short: false,
        hawthorne_short: true,
        lasalle: false,
        module_id: 2452105,
        newport_short: true,
        somerset_brass_short: false,
        somerset_platinum_short: true,
        temple_short: true,
        widget_name: "Designer Glass"
      },
      glass_options: {
        custom_widget_id: 5562484302,
        field_types: {
          frosted_short: "boolean",
          glue_chip_short: "boolean",
          plain_short: "boolean",
          tinted_short: "boolean"
        },
        module_id: 2470253,
        per_widget_wrapper_html: "",
        tag: "custom_widget",
        type: "custom_widget",
        widget_name: "Glass Options",
        wrapping_html: ""
      },
      kula_color_options: {
        almond: true,
        aluminum: false,
        black: true,
        bronze: true,
        brown: true,
        desert_tan: true,
        evergreen: false,
        gray: true,
        module_id: 2210014,
        sandstone: true,
        show_color_options_title: true,
        white: true,
        widget_name: "[KULA] Color Options"
      },
      rtm_additional_text: {
        custom_widget_id: 5808245394,
        field_types: { additional_text: "boolean", rich_text: "richtext" },
        module_id: 2906367,
        per_widget_wrapper_html: "",
        tag: "custom_widget",
        type: "custom_widget",
        widget_name: "[RTM] Additional Text",
        wrapping_html: ""
      },
      model_number_used_in_algolia_search: { value: "2141" }
    }
  },
  {
    url: "https://www.chiohd.com/homeowners/garage-doors/flush-panel/2127",
    data: {
      image_gallery: {
        auto_advance: true,
        caption_position: "superimpose",
        display_mode: "thumbnail",
        lightbox: false,
        lightboxRows: 3,
        loop_slides: true,
        num_seconds: 5,
        only_thumbnails: false,
        show_pagination: true,
        sizing: "static",
        slides: [
          {
            alt_text: "Small (72dpi)-22F_CHI0005.jpg",
            caption: "",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Flush%20Panel/Gallery/Small%20(72dpi)-22F_CHI0005.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          },
          {
            alt_text: "Small (72dpi)-22F_CHI0006.jpg",
            caption: "",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Flush%20Panel/Gallery/Small%20(72dpi)-22F_CHI0006.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          },
          {
            alt_text: "Small (72dpi)-CHI082913_0106.jpg",
            caption: "",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Flush%20Panel/Gallery/Small%20(72dpi)-CHI082913_0106.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          }
        ],
        transition: "slide",
        with_thumbnail_nav: true
      },
      kula_woodtone_options: {
        cedar: true,
        classic: false,
        dark_oak: true,
        display_woodtone_options_title: true,
        driftwood: true,
        light_oak: false,
        mahogany: true,
        modern: false,
        module_id: 2291028,
        walnut: true,
        widget_name: "[KULA] Woodtone Options"
      },
      product_number: { header_tag: null, value: "2127" },
      product_name: {
        header_tag: null,
        value: __products[2127].product_family
      },
      door_image: {
        alt: "chi-22-52-f-one-car.png",
        height: 214,
        img_alt: "chi-22-52-f-one-car.png",
        img_load_error: false,
        link: "",
        open_in_new_tab: false,
        original_height: 214,
        original_width: 270,
        src: "https://cdn2.hubspot.net/hubfs/2029938/chi-22-52-f-one-car.png",
        width: 270
      },
      kula_raised_panel_options: {
        backing_text: __products[2127].section_material,
        door_style_text: __products[2127].panel_style,
        family_brochure_link:
          '\u003Ca href="' +
          __products[2127].family_brochure_link +
          '" target="_blank"\u003EDownload Brochure\u003C/a\u003E',
        model_flyer_link:
          '\u003Ca href="' +
          __products[2127].model_flyer_link +
          '" target="_blank"\u003EDownload Flyer\u003C/a\u003E',
        module_id: 2291134,
        price: __products[2127].price,
        r_value_text: __products[2127].r_value_text,
        rtm_construction_type: __products[2127].rtm_construction_type,
        rtm_insulation_type: __products[2127].rtm_insulation_type,
        widget_name: "[KULA] Raised Panel Options"
      },
      door_image_caption: { value: "Flush" },
      customization_title: { value: "Customization Options" },
      window_inserts: {
        carriage_house_four_p_madison: false,
        carriage_house_four_p_madison_double: false,
        carriage_house_four_p_stockton: false,
        carriage_house_four_p_stockton_double: false,
        carriage_house_madison: false,
        carriage_house_madison_double: false,
        carriage_house_stockton_double: false,
        carriage_house_stockton_single: false,
        carriage_house_two_p_madison: false,
        carriage_house_two_p_madison_double: false,
        carriage_house_two_p_stockton: false,
        carriage_house_two_p_stockton_double: false,
        cascade_short: true,
        cathedral_short: true,
        eight_piece_sunburst: false,
        five_piece_sunburst: false,
        four_piece_sunburst: true,
        long_cascade: false,
        long_four_piece_arched_madison: false,
        long_four_piece_arched_stockton: false,
        long_four_piece_sunburst: false,
        long_madison: false,
        long_praire: false,
        long_sherwood: false,
        long_stockton: false,
        long_three_piece_arched_madison: false,
        long_three_piece_arched_stockton: false,
        long_three_piece_sunburst: false,
        long_two_piece_arched_madison: false,
        long_two_piece_arched_stockton: false,
        long_two_piece_sunburst: false,
        long_waterton: false,
        module_id: 2421584,
        prairie_short: true,
        recessed_madison_combo: false,
        recessed_madison_long: false,
        recessed_madison_short: false,
        recessed_stockton_combo: false,
        recessed_stockton_long: false,
        recessed_stockton_short: false,
        seven_piece_sunburst: false,
        sherwood: true,
        show_window_insert_title: true,
        six_piece_sunburst: false,
        stockton_short: true,
        waterton_short: true,
        widget_name: "Window Inserts"
      },
      designer_glass: {
        display_designer_glass_title: false,
        florence_short: false,
        hampton_short: true,
        hawthorne_platinum_short: false,
        hawthorne_short: true,
        lasalle: false,
        newport_short: true,
        somerset_brass_short: false,
        somerset_platinum_short: true,
        temple_short: true,
        widget_name: "Designer Glass"
      },
      glass_options: {
        custom_widget_id: 5562484302,
        field_types: {
          frosted_short: "boolean",
          glue_chip_short: "boolean",
          plain_short: "boolean",
          tinted_short: "boolean"
        },
        module_id: 2470253,
        per_widget_wrapper_html: "",
        tag: "custom_widget",
        type: "custom_widget",
        widget_name: "Glass Options",
        wrapping_html: ""
      },
      kula_color_options: {
        almond: true,
        aluminum: false,
        black: true,
        bronze: false,
        brown: true,
        desert_tan: false,
        evergreen: false,
        gray: true,
        module_id: 2210014,
        sandstone: true,
        show_color_options_title: true,
        white: true,
        widget_name: "[KULA] Color Options"
      },
      rtm_additional_text: {
        custom_widget_id: 5808245394,
        field_types: { additional_text: "boolean", rich_text: "richtext" },
        module_id: 2906367,
        per_widget_wrapper_html: "",
        tag: "custom_widget",
        type: "custom_widget",
        widget_name: "[RTM] Additional Text",
        wrapping_html: ""
      },
      model_number_used_in_algolia_search: { value: "2141" }
    }
  },
  {
    url: "https://www.chiohd.com/homeowners/garage-doors/flush-panel/2141",
    data: {
      image_gallery: {
        auto_advance: true,
        caption_position: "superimpose",
        display_mode: "thumbnail",
        lightbox: false,
        lightboxRows: 3,
        loop_slides: true,
        num_seconds: 5,
        only_thumbnails: false,
        show_pagination: true,
        sizing: "static",
        slides: [
          {
            alt_text: "Small (72dpi)-22F_CHI0005.jpg",
            caption: "",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Flush%20Panel/Gallery/Small%20(72dpi)-22F_CHI0005.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          },
          {
            alt_text: "Small (72dpi)-22F_CHI0006.jpg",
            caption: "",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Flush%20Panel/Gallery/Small%20(72dpi)-22F_CHI0006.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          },
          {
            alt_text: "Small (72dpi)-CHI082913_0106.jpg",
            caption: "",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Flush%20Panel/Gallery/Small%20(72dpi)-CHI082913_0106.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          }
        ],
        transition: "slide",
        with_thumbnail_nav: true
      },
      kula_woodtone_options: {
        cedar: false,
        classic: false,
        dark_oak: false,
        display_woodtone_options_title: false,
        driftwood: false,
        light_oak: false,
        mahogany: false,
        modern: false,
        module_id: 2291028,
        walnut: false,
        widget_name: "[KULA] Woodtone Options"
      },
      product_number: { header_tag: null, value: "2141" },
      product_name: {
        header_tag: null,
        value: __products[2141].product_family
      },
      door_image: {
        alt: "chi-22-52-f-one-car.png",
        height: 214,
        img_alt: "chi-22-52-f-one-car.png",
        img_load_error: false,
        link: "",
        open_in_new_tab: false,
        original_height: 214,
        original_width: 270,
        src: "https://cdn2.hubspot.net/hubfs/2029938/chi-22-52-f-one-car.png",
        width: 270
      },
      kula_raised_panel_options: {
        backing_text: __products[2141].section_material,
        door_style_text: __products[2141].panel_style,
        family_brochure_link:
          '\u003Ca href="' +
          __products[2141].family_brochure_link +
          '" target="_blank"\u003EDownload Brochure\u003C/a\u003E',
        model_flyer_link:
          '\u003Ca href="' +
          __products[2141].model_flyer_link +
          '" target="_blank"\u003EDownload Flyer\u003C/a\u003E',
        module_id: 2291134,
        price: __products[2141].price,
        r_value_text: __products[2141].r_value_text,
        rtm_construction_type: __products[2141].rtm_construction_type,
        rtm_insulation_type: __products[2141].rtm_insulation_type,
        widget_name: "[KULA] Raised Panel Options"
      },
      door_image_caption: { value: "Flush" },
      customization_title: { value: "Customization Options" },
      window_inserts: {
        carriage_house_four_p_madison: false,
        carriage_house_four_p_madison_double: false,
        carriage_house_four_p_stockton: false,
        carriage_house_four_p_stockton_double: false,
        carriage_house_madison: false,
        carriage_house_madison_double: false,
        carriage_house_stockton_double: false,
        carriage_house_stockton_single: false,
        carriage_house_two_p_madison: false,
        carriage_house_two_p_madison_double: false,
        carriage_house_two_p_stockton: false,
        carriage_house_two_p_stockton_double: false,
        cascade_short: true,
        cathedral_short: true,
        eight_piece_sunburst: false,
        five_piece_sunburst: false,
        four_piece_sunburst: true,
        long_cascade: false,
        long_four_piece_arched_madison: false,
        long_four_piece_arched_stockton: false,
        long_four_piece_sunburst: false,
        long_madison: false,
        long_praire: false,
        long_sherwood: false,
        long_stockton: false,
        long_three_piece_arched_madison: false,
        long_three_piece_arched_stockton: false,
        long_three_piece_sunburst: false,
        long_two_piece_arched_madison: false,
        long_two_piece_arched_stockton: false,
        long_two_piece_sunburst: false,
        long_waterton: false,
        prairie_short: true,
        recessed_madison_combo: false,
        recessed_madison_long: false,
        recessed_madison_short: false,
        recessed_stockton_combo: false,
        recessed_stockton_long: false,
        recessed_stockton_short: false,
        seven_piece_sunburst: false,
        sherwood: true,
        show_window_insert_title: true,
        six_piece_sunburst: false,
        stockton_short: true,
        waterton_short: true,
        widget_name: "Window Inserts"
      },
      designer_glass: {
        display_designer_glass_title: false,
        florence_short: false,
        hampton_short: false,
        hawthorne_platinum_short: false,
        hawthorne_short: false,
        lasalle: false,
        module_id: 2452105,
        newport_short: false,
        somerset_brass_short: false,
        somerset_platinum_short: false,
        temple_short: false,
        widget_name: "Designer Glass"
      },
      glass_options: {
        custom_widget_id: 5562484302,
        field_types: {
          frosted_short: "boolean",
          glue_chip_short: "boolean",
          plain_short: "boolean",
          tinted_short: "boolean"
        },
        module_id: 2470253,
        per_widget_wrapper_html: "",
        tag: "custom_widget",
        type: "custom_widget",
        widget_name: "Glass Options",
        wrapping_html: ""
      },
      kula_color_options: {
        almond: true,
        aluminum: false,
        black: false,
        bronze: false,
        brown: true,
        desert_tan: false,
        evergreen: true,
        gray: false,
        module_id: 2210014,
        sandstone: true,
        show_color_options_title: true,
        white: true,
        widget_name: "[KULA] Color Options"
      },
      rtm_additional_text: {
        custom_widget_id: 5808245394,
        field_types: { additional_text: "boolean", rich_text: "richtext" },
        module_id: 2906367,
        per_widget_wrapper_html: "",
        tag: "custom_widget",
        type: "custom_widget",
        widget_name: "[RTM] Additional Text",
        wrapping_html: ""
      },
      model_number_used_in_algolia_search: { value: "2141" }
    }
  },
  {
    url: "https://www.chiohd.com/homeowners/garage-doors/flush-panel/2151",
    data: {
      image_gallery: {
        auto_advance: true,
        caption_position: "superimpose",
        display_mode: "thumbnail",
        lightbox: false,
        lightboxRows: 3,
        loop_slides: true,
        num_seconds: 5,
        only_thumbnails: false,
        show_pagination: true,
        sizing: "static",
        slides: [
          {
            alt_text: "Small (72dpi)-22F_CHI0005.jpg",
            caption: "",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Flush%20Panel/Gallery/Small%20(72dpi)-22F_CHI0005.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          },
          {
            alt_text: "Small (72dpi)-22F_CHI0006.jpg",
            caption: "",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Flush%20Panel/Gallery/Small%20(72dpi)-22F_CHI0006.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          },
          {
            alt_text: "Small (72dpi)-CHI082913_0106.jpg",
            caption: "",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Flush%20Panel/Gallery/Small%20(72dpi)-CHI082913_0106.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          }
        ],
        transition: "slide",
        with_thumbnail_nav: true
      },
      kula_woodtone_options: {
        cedar: false,
        classic: false,
        dark_oak: false,
        display_woodtone_options_title: false,
        driftwood: false,
        light_oak: false,
        mahogany: false,
        modern: false,
        module_id: 2291028,
        walnut: false,
        widget_name: "[KULA] Woodtone Options"
      },
      product_number: { header_tag: null, value: "2151" },
      product_name: {
        header_tag: null,
        value: __products[2151].product_family
      },
      door_image: {
        alt: "chi-22-52-f-one-car.png",
        height: 214,
        img_alt: "chi-22-52-f-one-car.png",
        img_load_error: false,
        link: "",
        open_in_new_tab: false,
        original_height: 214,
        original_width: 270,
        src: "https://cdn2.hubspot.net/hubfs/2029938/chi-22-52-f-one-car.png",
        width: 270
      },
      kula_raised_panel_options: {
        backing_text: __products[2151].section_material,
        door_style_text: __products[2151].panel_style,
        family_brochure_link:
          '\u003Ca href="' +
          __products[2151].family_brochure_link +
          '" target="_blank"\u003EDownload Brochure\u003C/a\u003E',
        model_flyer_link:
          '\u003Ca href="' +
          __products[2151].model_flyer_link +
          '" target="_blank"\u003EDownload Flyer\u003C/a\u003E',
        module_id: 2291134,
        price: __products[2151].price,
        r_value_text: __products[2151].r_value_text,
        rtm_construction_type: __products[2151].rtm_construction_type,
        rtm_insulation_type: __products[2151].rtm_insulation_type,
        widget_name: "[KULA] Raised Panel Options"
      },
      door_image_caption: { value: "Flush" },
      customization_title: { value: "Customization Options" },
      window_inserts: {
        carriage_house_four_p_madison: false,
        carriage_house_four_p_madison_double: false,
        carriage_house_four_p_stockton: false,
        carriage_house_four_p_stockton_double: false,
        carriage_house_madison: false,
        carriage_house_madison_double: false,
        carriage_house_stockton_double: false,
        carriage_house_stockton_single: false,
        carriage_house_two_p_madison: false,
        carriage_house_two_p_madison_double: false,
        carriage_house_two_p_stockton: false,
        carriage_house_two_p_stockton_double: false,
        cascade_short: true,
        cathedral_short: true,
        eight_piece_sunburst: false,
        five_piece_sunburst: false,
        four_piece_sunburst: true,
        long_cascade: false,
        long_four_piece_arched_madison: false,
        long_four_piece_arched_stockton: false,
        long_four_piece_sunburst: false,
        long_madison: false,
        long_praire: false,
        long_sherwood: false,
        long_stockton: false,
        long_three_piece_arched_madison: false,
        long_three_piece_arched_stockton: false,
        long_three_piece_sunburst: false,
        long_two_piece_arched_madison: false,
        long_two_piece_arched_stockton: false,
        long_two_piece_sunburst: false,
        long_waterton: false,
        prairie_short: true,
        recessed_madison_combo: false,
        recessed_madison_long: false,
        recessed_madison_short: false,
        recessed_stockton_combo: false,
        recessed_stockton_long: false,
        recessed_stockton_short: false,
        seven_piece_sunburst: false,
        sherwood: true,
        show_window_insert_title: true,
        six_piece_sunburst: false,
        stockton_short: true,
        waterton_short: true,
        widget_name: "Window Inserts"
      },
      designer_glass: {
        display_designer_glass_title: false,
        florence_short: false,
        hampton_short: false,
        hawthorne_platinum_short: false,
        hawthorne_short: false,
        lasalle: false,
        module_id: 2452105,
        newport_short: false,
        somerset_brass_short: false,
        somerset_platinum_short: false,
        temple_short: false,
        widget_name: "Designer Glass"
      },
      glass_options: {
        custom_widget_id: 5562484302,
        field_types: {
          frosted_short: "boolean",
          glue_chip_short: "boolean",
          plain_short: "boolean",
          tinted_short: "boolean"
        },
        module_id: 2470253,
        per_widget_wrapper_html: "",
        tag: "custom_widget",
        type: "custom_widget",
        widget_name: "Glass Options",
        wrapping_html: ""
      },
      kula_color_options: {
        almond: true,
        aluminum: false,
        black: true,
        bronze: true,
        brown: true,
        desert_tan: true,
        evergreen: false,
        gray: true,
        module_id: 2210014,
        sandstone: true,
        show_color_options_title: true,
        white: true,
        widget_name: "[KULA] Color Options"
      },
      rtm_additional_text: {
        custom_widget_id: 5808245394,
        field_types: { additional_text: "boolean", rich_text: "richtext" },
        module_id: 2906367,
        per_widget_wrapper_html: "",
        tag: "custom_widget",
        type: "custom_widget",
        widget_name: "[RTM] Additional Text",
        wrapping_html: ""
      },
      model_number_used_in_algolia_search: { value: "2151" }
    }
  },
  {
    url: "https://www.chiohd.com/homeowners/garage-doors/stamped-shaker/2518",
    data: {
      image_gallery: {
        auto_advance: true,
        caption_position: "superimpose",
        display_mode: "thumbnail",
        lightbox: false,
        lightboxRows: 3,
        loop_slides: true,
        num_seconds: 5,
        only_thumbnails: false,
        show_pagination: true,
        sizing: "static",
        slides: [
          {
            alt_text: "Stamped-Shaker-1.jpg",
            caption: "",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Shaker/Stamped-Shaker-1.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          },
          {
            alt_text: "Stamped-Shaker-2.jpg",
            caption: "",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Shaker/Stamped-Shaker-2.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          },
          {
            alt_text: "Stamped-Shaker-3.jpg",
            caption: "",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Shaker/Stamped-Shaker-3.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          }
        ],
        transition: "slide",
        with_thumbnail_nav: true
      },
      kula_woodtone_options: {
        cedar: true,
        classic: false,
        dark_oak: true,
        display_woodtone_options_title: true,
        driftwood: true,
        light_oak: false,
        mahogany: true,
        modern: false,
        module_id: 2291028,
        type: "custom_widget",
        walnut: true,
        widget_name: "[KULA] Woodtone Options"
      },
      product_number: { header_tag: null, value: "2518" },
      product_name: {
        header_tag: null,
        value: __products[2518].product_family
      },
      door_image: {
        alt: "stamped-shaker-thumbnail.png",
        height: 104,
        img_alt: "stamped-shaker-thumbnail.png",
        img_load_error: false,
        link: "",
        open_in_new_tab: false,
        original_height: 104,
        original_width: 132,
        src:
          "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Shaker/stamped-shaker-thumbnail.png",
        width: 132
      },
      kula_raised_panel_options: {
        backing_text: __products[2518].section_material,
        door_style_text: __products[2518].panel_style,
        family_brochure_link:
          '\u003Ca href="' +
          __products[2518].family_brochure_link +
          '" target="_blank"\u003EDownload Brochure\u003C/a\u003E',
        model_flyer_link:
          '\u003Ca href="' +
          __products[2518].model_flyer_link +
          '" target="_blank"\u003EDownload Flyer\u003C/a\u003E',
        module_id: 2291134,
        price: __products[2518].price,
        r_value_text: __products[2518].r_value_text,
        rtm_construction_type: __products[2518].rtm_construction_type,
        rtm_insulation_type: __products[2518].rtm_insulation_type,
        widget_name: "[KULA] Raised Panel Options"
      },
      door_image_caption: { value: "Stamped Shaker" },
      customization_title: { value: "Customization Options" },
      window_inserts: {
        cascade_short: false,
        cathedral_short: false,
        eight_piece_sunburst: false,
        five_piece_sunburst: false,
        four_piece_sunburst: false,
        long_cascade: true,
        long_four_piece_arched_madison: false,
        long_four_piece_arched_stockton: false,
        long_four_piece_sunburst: false,
        long_madison: true,
        long_praire: false,
        long_sherwood: false,
        long_stockton: true,
        long_three_piece_arched_madison: false,
        long_three_piece_arched_stockton: false,
        long_three_piece_sunburst: false,
        long_two_piece_arched_madison: true,
        long_two_piece_arched_stockton: true,
        long_two_piece_sunburst: false,
        long_waterton: false,
        prairie_short: false,
        seven_piece_sunburst: false,
        sherwood: false,
        six_piece_sunburst: false,
        stockton_short: false,
        waterton_short: false,
        widget_name: "Window Inserts"
      },
      designer_glass: {
        display_designer_glass_title: true,
        florence_short: true,
        hampton_short: true,
        hawthorne_platinum_short: false,
        hawthorne_short: false,
        lasalle: true,
        module_id: 2452105,
        newport_short: true,
        somerset_brass_short: false,
        somerset_platinum_short: false,
        temple_short: false,
        widget_name: "Designer Glass"
      },
      glass_options: {
        frosted_short: true,
        glue_chip_short: true,
        module_id: 2470253,
        obscure_short: true,
        plain_short: true,
        seeded: true,
        tinted_short: true,
        widget_name: "Glass Options"
      },
      kula_color_options: {
        almond: true,
        black: true,
        bronze: true,
        brown: true,
        desert_tan: true,
        evergreen: false,
        gray: true,
        module_id: 2210014,
        sandstone: true,
        show_color_options_title: true,
        white: true,
        widget_name: "[KULA] Color Options"
      },
      rtm_additional_text: {
        custom_widget_id: 5808245394,
        field_types: { additional_text: "boolean", rich_text: "richtext" },
        module_id: 2906367,
        per_widget_wrapper_html: "",
        tag: "custom_widget",
        type: "custom_widget",
        widget_name: "[RTM] Additional Text",
        wrapping_html: ""
      },
      model_number_used_in_algolia_search: { value: "2518" }
    }
  },
  {
    url: "https://www.chiohd.com/homeowners/garage-doors/stamped-shaker/2583",
    data: {
      image_gallery: {
        auto_advance: true,
        caption_position: "superimpose",
        display_mode: "thumbnail",
        lightbox: false,
        lightboxRows: 3,
        loop_slides: true,
        num_seconds: 5,
        only_thumbnails: false,
        show_pagination: true,
        sizing: "static",
        slides: [
          {
            alt_text: "Stamped-Shaker-1.jpg",
            caption: "",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Shaker/Stamped-Shaker-1.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          },
          {
            alt_text: "Stamped-Shaker-2.jpg",
            caption: "",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Shaker/Stamped-Shaker-2.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          },
          {
            alt_text: "Stamped-Shaker-3.jpg",
            caption: "",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Shaker/Stamped-Shaker-3.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          }
        ],
        transition: "slide",
        with_thumbnail_nav: true
      },
      kula_woodtone_options: {
        cedar: true,
        classic: false,
        dark_oak: true,
        display_woodtone_options_title: true,
        driftwood: true,
        light_oak: false,
        mahogany: true,
        modern: false,
        module_id: 2291028,
        type: "custom_widget",
        walnut: true,
        widget_name: "[KULA] Woodtone Options"
      },
      product_number: { header_tag: null, value: "2583" },
      product_name: {
        header_tag: null,
        value: __products[2583].product_family
      },
      door_image: {
        alt: "stamped-shaker-thumbnail.png",
        height: 104,
        img_alt: "stamped-shaker-thumbnail.png",
        img_load_error: false,
        link: "",
        open_in_new_tab: false,
        original_height: 104,
        original_width: 132,
        src:
          "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Shaker/stamped-shaker-thumbnail.png",
        width: 132
      },
      kula_raised_panel_options: {
        backing_text: __products[2583].section_material,
        door_style_text: __products[2583].panel_style,
        family_brochure_link:
          '\u003Ca href="' +
          __products[2583].family_brochure_link +
          '" target="_blank"\u003EDownload Brochure\u003C/a\u003E',
        model_flyer_link:
          '\u003Ca href="' +
          __products[2583].model_flyer_link +
          '" target="_blank"\u003EDownload Flyer\u003C/a\u003E',
        module_id: 2291134,
        price: __products[2583].price,
        r_value_text: __products[2583].r_value_text,
        rtm_construction_type: __products[2583].rtm_construction_type,
        rtm_insulation_type: __products[2583].rtm_insulation_type,
        widget_name: "[KULA] Raised Panel Options"
      },
      door_image_caption: { value: "Stamped Shaker" },
      customization_title: { value: "Customization Options" },
      window_inserts: {
        cascade_short: false,
        cathedral_short: false,
        eight_piece_sunburst: false,
        five_piece_sunburst: false,
        four_piece_sunburst: false,
        long_cascade: true,
        long_four_piece_arched_madison: false,
        long_four_piece_arched_stockton: false,
        long_four_piece_sunburst: false,
        long_madison: true,
        long_praire: false,
        long_sherwood: false,
        long_stockton: true,
        long_three_piece_arched_madison: false,
        long_three_piece_arched_stockton: false,
        long_three_piece_sunburst: false,
        long_two_piece_arched_madison: true,
        long_two_piece_arched_stockton: true,
        long_two_piece_sunburst: false,
        long_waterton: false,
        prairie_short: false,
        seven_piece_sunburst: false,
        sherwood: false,
        six_piece_sunburst: false,
        stockton_short: false,
        waterton_short: false,
        widget_name: "Window Inserts"
      },
      designer_glass: {
        display_designer_glass_title: true,
        florence_short: true,
        hampton_short: true,
        hawthorne_platinum_short: false,
        hawthorne_short: false,
        lasalle: true,
        module_id: 2452105,
        newport_short: true,
        somerset_brass_short: false,
        somerset_platinum_short: false,
        temple_short: false,
        widget_name: "Designer Glass"
      },
      glass_options: {
        frosted_short: true,
        glue_chip_short: true,
        module_id: 2470253,
        obscure_short: true,
        plain_short: true,
        seeded: true,
        tinted_short: true,
        widget_name: "Glass Options"
      },
      kula_color_options: {
        almond: true,
        black: true,
        bronze: true,
        brown: true,
        desert_tan: true,
        evergreen: false,
        gray: true,
        module_id: 2210014,
        sandstone: true,
        show_color_options_title: true,
        white: true,
        widget_name: "[KULA] Color Options"
      },
      rtm_additional_text: {
        custom_widget_id: 5808245394,
        field_types: { additional_text: "boolean", rich_text: "richtext" },
        module_id: 2906367,
        per_widget_wrapper_html: "",
        tag: "custom_widget",
        type: "custom_widget",
        widget_name: "[RTM] Additional Text",
        wrapping_html: ""
      },
      model_number_used_in_algolia_search: { value: "2583" }
    }
  },
  {
    url: "https://www.chiohd.com/homeowners/garage-doors/stamped-shaker/2551",
    data: {
      image_gallery: {
        auto_advance: true,
        caption_position: "superimpose",
        display_mode: "thumbnail",
        lightbox: false,
        lightboxRows: 3,
        loop_slides: true,
        num_seconds: 5,
        only_thumbnails: false,
        show_pagination: true,
        sizing: "static",
        slides: [
          {
            alt_text: "Stamped-Shaker-1.jpg",
            caption: "",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Shaker/Stamped-Shaker-1.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          },
          {
            alt_text: "Stamped-Shaker-2.jpg",
            caption: "",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Shaker/Stamped-Shaker-2.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          },
          {
            alt_text: "Stamped-Shaker-3.jpg",
            caption: "",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Shaker/Stamped-Shaker-3.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          }
        ],
        transition: "slide",
        with_thumbnail_nav: true
      },
      kula_woodtone_options: {
        cedar: false,
        classic: true,
        dark_oak: false,
        display_woodtone_options_title: true,
        driftwood: false,
        light_oak: false,
        mahogany: false,
        modern: true,
        module_id: 2291028,
        walnut: false,
        widget_name: "[KULA] Woodtone Options"
      },
      product_number: { header_tag: null, value: "2551" },
      product_name: {
        header_tag: null,
        value: __products[2551].product_family
      },
      door_image: {
        alt: "stamped-shaker-thumbnail.png",
        height: 104,
        img_alt: "stamped-shaker-thumbnail.png",
        img_load_error: false,
        link: "",
        open_in_new_tab: false,
        original_height: 104,
        original_width: 132,
        src:
          "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Shaker/stamped-shaker-thumbnail.png",
        width: 132
      },
      kula_raised_panel_options: {
        backing_text: __products[2551].section_material,
        door_style_text: __products[2551].panel_style,
        family_brochure_link:
          '\u003Ca href="' +
          __products[2551].family_brochure_link +
          '" target="_blank"\u003EDownload Brochure\u003C/a\u003E',
        model_flyer_link:
          '\u003Ca href="' +
          __products[2551].model_flyer_link +
          '" target="_blank"\u003EDownload Flyer\u003C/a\u003E',
        module_id: 2291134,
        price: __products[2551].price,
        r_value_text: __products[2551].r_value_text,
        rtm_construction_type: __products[2551].rtm_construction_type,
        rtm_insulation_type: __products[2551].rtm_insulation_type,
        widget_name: "[KULA] Raised Panel Options"
      },
      door_image_caption: { value: "Stamped Shaker" },
      customization_title: { value: "Customization Options" },
      window_inserts: {
        cascade_short: false,
        cathedral_short: false,
        eight_piece_sunburst: false,
        five_piece_sunburst: false,
        four_piece_sunburst: false,
        long_cascade: true,
        long_four_piece_arched_madison: false,
        long_four_piece_arched_stockton: false,
        long_four_piece_sunburst: false,
        long_madison: true,
        long_praire: false,
        long_sherwood: false,
        long_stockton: true,
        long_three_piece_arched_madison: false,
        long_three_piece_arched_stockton: false,
        long_three_piece_sunburst: false,
        long_two_piece_arched_madison: true,
        long_two_piece_arched_stockton: true,
        long_two_piece_sunburst: false,
        long_waterton: false,
        prairie_short: false,
        seven_piece_sunburst: false,
        sherwood: false,
        six_piece_sunburst: false,
        stockton_short: false,
        waterton_short: false,
        widget_name: "Window Inserts"
      },
      designer_glass: {
        display_designer_glass_title: false,
        florence_short: false,
        hampton_short: false,
        hawthorne_platinum_short: false,
        hawthorne_short: false,
        module_id: 2452105,
        newport_short: false,
        somerset_brass_short: false,
        somerset_platinum_short: false,
        temple_short: false,
        widget_name: "Designer Glass"
      },
      glass_options: {
        frosted_short: true,
        glue_chip_short: true,
        module_id: 2470253,
        obscure_short: true,
        plain_short: true,
        seeded: true,
        tinted_short: true,
        widget_name: "Glass Options"
      },
      kula_color_options: {
        almond: true,
        black: true,
        bronze: true,
        brown: true,
        desert_tan: true,
        evergreen: false,
        gray: true,
        module_id: 2210014,
        sandstone: true,
        show_color_options_title: true,
        white: true,
        widget_name: "[KULA] Color Options"
      },
      rtm_additional_text: {
        custom_widget_id: 5808245394,
        field_types: { additional_text: "boolean", rich_text: "richtext" },
        module_id: 2906367,
        per_widget_wrapper_html: "",
        tag: "custom_widget",
        type: "custom_widget",
        widget_name: "[RTM] Additional Text",
        wrapping_html: ""
      },
      model_number_used_in_algolia_search: { value: "2551" }
    }
  },
  {
    url: "https://www.chiohd.com/homeowners/garage-doors/accents/5916",
    data: {
      image_gallery: {
        auto_advance: true,
        caption_position: "superimpose",
        display_mode: "thumbnail",
        lightbox: false,
        lightboxRows: 3,
        loop_slides: true,
        num_seconds: 5,
        only_thumbnails: false,
        show_pagination: true,
        sizing: "static",
        slides: [
          {
            alt_text: "5983-1.jpg",
            caption: "",
            href: "",
            img_src:
              "https://www.chiohd.com/hubfs/Homeowner/Products/Accents/Models/5983-1.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          },
          {
            alt_text:
              "Small (72dpi)-13510937_1322005801162085_4498989563431018888_n.jpg",
            caption: "",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Stamped/Models/Small%20(72dpi)-13510937_1322005801162085_4498989563431018888_n.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          },
          {
            alt_text:
              "Small (72dpi)-chi17-photo-stamped-accents-dark-oak-0921-0002.jpg",
            caption: "",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Stamped/Models/Small%20(72dpi)-chi17-photo-stamped-accents-dark-oak-0921-0002.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          }
        ],
        transition: "slide",
        with_thumbnail_nav: true
      },
      kula_woodtone_options: {
        cedar: true,
        classic: false,
        dark_oak: true,
        display_woodtone_options_title: true,
        driftwood: true,
        light_oak: false,
        mahogany: true,
        modern: false,
        type: "custom_widget",
        walnut: true,
        widget_name: "[RTM] Woodtone Options"
      },
      product_number: { header_tag: null, value: "5916" },
      product_name: {
        header_tag: null,
        value: __products[5916].product_family
      },
      door_image: {
        alt: "chi-59-sch-one-car.png",
        height: 214,
        img_alt: "chi-59-sch-one-car.png",
        img_load_error: false,
        link: "",
        open_in_new_tab: false,
        original_height: 214,
        original_width: 270,
        src: "https://cdn2.hubspot.net/hubfs/2029938/chi-59-sch-one-car.png",
        width: 270
      },
      kula_raised_panel_options: {
        backing_text: __products[5916].section_material,
        door_style_text: __products[5916].panel_style,
        family_brochure_link:
          '\u003Ca href="' +
          __products[5916].family_brochure_link +
          '" target="_blank"\u003EDownload Brochure\u003C/a\u003E',
        model_flyer_link:
          '\u003Ca href="' +
          __products[5916].model_flyer_link +
          '" target="_blank"\u003EDownload Flyer\u003C/a\u003E',
        module_id: 2291134,
        price: "" + __products[5916].price,
        r_value_text: __products[5916].r_value_text,
        rtm_construction_type: __products[5916].rtm_construction_type,
        rtm_insulation_type: __products[5916].rtm_insulation_type,
        widget_name: "[KULA] Raised Panel Options"
      },
      door_image_caption: { value: "Long Panel" },
      customization_title: { value: "Customization Options" },
      window_inserts: {
        cascade_short: false,
        cathedral_short: false,
        eight_piece_sunburst: false,
        five_piece_sunburst: false,
        four_piece_sunburst: false,
        long_cascade: true,
        long_four_piece_arched_madison: true,
        long_four_piece_arched_stockton: true,
        long_four_piece_sunburst: false,
        long_madison: true,
        long_praire: false,
        long_sherwood: false,
        long_stockton: true,
        long_three_piece_arched_madison: true,
        long_three_piece_arched_stockton: true,
        long_three_piece_sunburst: false,
        long_two_piece_arched_madison: true,
        long_two_piece_arched_stockton: true,
        long_two_piece_sunburst: false,
        long_waterton: false,
        module_id: 2421584,
        prairie_short: false,
        seven_piece_sunburst: false,
        sherwood: false,
        six_piece_sunburst: false,
        stockton_short: false,
        waterton_short: false,
        widget_name: "Window Inserts"
      },
      designer_glass: {
        display_designer_glass_title: true,
        florence_short: true,
        hampton_short: true,
        hawthorne_platinum_short: false,
        hawthorne_short: false,
        lasalle: true,
        module_id: 2452105,
        newport_short: true,
        somerset_brass_short: false,
        somerset_platinum_short: false,
        temple_short: false,
        widget_name: "Designer Glass"
      },
      glass_options: {
        frosted_short: true,
        glue_chip_short: true,
        module_id: 2470253,
        obscure_short: true,
        plain_short: true,
        seeded: true,
        tinted_short: true,
        widget_name: "Glass Options"
      },
      kula_color_options: {
        almond: false,
        black: false,
        bronze: false,
        brown: false,
        desert_tan: false,
        evergreen: false,
        gray: false,
        module_id: 2210014,
        sandstone: false,
        show_color_options_title: false,
        white: false,
        widget_name: "[KULA] Color Options"
      },
      rtm_additional_text: {
        custom_widget_id: 5808245394,
        field_types: { additional_text: "boolean", rich_text: "richtext" },
        module_id: 2906367,
        per_widget_wrapper_html: "",
        tag: "custom_widget",
        type: "custom_widget",
        widget_name: "[RTM] Additional Text",
        wrapping_html: ""
      },
      model_number_used_in_algolia_search: { value: "5916" }
    }
  },
  {
    url: "https://www.chiohd.com/homeowners/garage-doors/accents/4216",
    data: {
      image_gallery: {
        auto_advance: true,
        caption_position: "superimpose",
        display_mode: "thumbnail",
        lightbox: false,
        lightboxRows: 3,
        loop_slides: true,
        num_seconds: 5,
        only_thumbnails: false,
        show_pagination: true,
        sizing: "static",
        slides: [
          {
            alt_text: "4216-1.jpg",
            caption: "",
            href: "",
            img_src:
              "https://www.chiohd.com/hubfs/Homeowner/Products/Accents/Models/4216-1.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          },
          {
            alt_text: "4216-2.jpg",
            caption: "",
            href: "",
            img_src:
              "https://www.chiohd.com/hubfs/Homeowner/Products/Accents/Models/4216-2.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          },
          {
            alt_text: "raised-long-panel-accents-4216.jpg",
            caption: "",
            href: "",
            img_src:
              "https://www.chiohd.com/hubfs/Assets%20(Feb%202017)/raised-long-panel-accents-4216.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          }
        ],
        transition: "slide",
        with_thumbnail_nav: true
      },
      kula_woodtone_options: {
        cedar: true,
        classic: false,
        dark_oak: true,
        display_woodtone_options_title: true,
        driftwood: true,
        light_oak: false,
        mahogany: true,
        modern: false,
        type: "custom_widget",
        walnut: true,
        widget_name: "[RTM] Woodtone Options"
      },
      product_number: { header_tag: null, value: "4216" },
      product_name: { value: __products[4216].product_family },
      door_image: {
        alt: "Long-Panel",
        height: 214,
        img_alt: "chi-42-rp-one-car.png",
        img_load_error: false,
        link: "",
        open_in_new_tab: false,
        original_height: 214,
        original_width: 270,
        src: "https://cdn2.hubspot.net/hubfs/2029938/chi-42-rp-one-car.png",
        width: 270
      },
      kula_raised_panel_options: {
        backing_text: __products[4216].section_material,
        door_style_text: __products[4216].panel_style,
        family_brochure_link:
          '\u003Ca href="' +
          __products[4216].family_brochure_link +
          '" target="_blank"\u003EDownload Brochure\u003C/a\u003E',
        model_flyer_link:
          '\u003Ca href="' +
          __products[4216].model_flyer_link +
          '" target="_blank"\u003EDownload Flyer\u003C/a\u003E',
        module_id: 2291134,
        price: __products[4216].price,
        r_value_text: __products[4216].r_value_text,
        rtm_construction_type: __products[4216].rtm_construction_type,
        rtm_insulation_type: __products[4216].rtm_insulation_type,
        widget_name: "[KULA] Raised Panel Options"
      },
      door_image_caption: { value: "Long Panel" },
      customization_title: { value: "Customization Options" },
      window_inserts: {
        cascade_short: false,
        cathedral_short: false,
        eight_piece_sunburst: false,
        five_piece_sunburst: false,
        four_piece_sunburst: false,
        long_cascade: true,
        long_four_piece_arched_madison: true,
        long_four_piece_arched_stockton: true,
        long_four_piece_sunburst: true,
        long_madison: true,
        long_praire: true,
        long_sherwood: true,
        long_stockton: true,
        long_three_piece_sunburst: true,
        long_two_piece_arched_madison: true,
        long_two_piece_arched_stockton: true,
        long_two_piece_sunburst: true,
        long_waterton: true,
        module_id: 2421584,
        prairie_short: false,
        seven_piece_sunburst: false,
        sherwood: false,
        six_piece_sunburst: false,
        stockton_short: false,
        waterton_short: false,
        widget_name: "Window Inserts"
      },
      designer_glass: {
        custom_widget_id: 5561952058,
        field_types: {
          florence_short: "boolean",
          hampton_short: "boolean",
          hawthorne_platinum_short: "boolean",
          hawthorne_short: "boolean",
          newport_short: "boolean",
          somerset_brass_short: "boolean",
          somerset_platinum_short: "boolean",
          temple_short: "boolean"
        },
        module_id: 2452105,
        per_widget_wrapper_html: "",
        tag: "custom_widget",
        type: "custom_widget",
        widget_name: "Designer Glass",
        wrapping_html: ""
      },
      glass_options: {
        custom_widget_id: 5562484302,
        field_types: {
          frosted_short: "boolean",
          glue_chip_short: "boolean",
          plain_short: "boolean",
          tinted_short: "boolean"
        },
        module_id: 2470253,
        per_widget_wrapper_html: "",
        tag: "custom_widget",
        type: "custom_widget",
        widget_name: "Glass Options",
        wrapping_html: ""
      },
      kula_color_options: {
        almond: false,
        black: false,
        bronze: false,
        brown: false,
        desert_tan: false,
        evergreen: false,
        gray: false,
        module_id: 2210014,
        sandstone: false,
        show_color_options_title: false,
        white: false,
        widget_name: "[KULA] Color Options"
      },
      rtm_additional_text: {
        custom_widget_id: 5808245394,
        field_types: { additional_text: "boolean", rich_text: "richtext" },
        module_id: 2906367,
        per_widget_wrapper_html: "",
        tag: "custom_widget",
        type: "custom_widget",
        widget_name: "[RTM] Additional Text",
        wrapping_html: ""
      },
      model_number_used_in_algolia_search: { value: "4216" }
    }
  },
  {
    url: "https://www.chiohd.com/homeowners/garage-doors/accents/2216",
    data: {
      image_gallery: {
        auto_advance: true,
        caption_position: "superimpose",
        display_mode: "thumbnail",
        lightbox: false,
        lightboxRows: 3,
        loop_slides: true,
        num_seconds: 5,
        only_thumbnails: false,
        show_pagination: true,
        sizing: "static",
        slides: [
          {
            alt_text: "Raised-Panel-2206.jpg",
            caption: "",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Raised-Panel/Models/Raised-Panel-2206.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          },
          {
            alt_text: "Raised-Panel-2206-2.jpg",
            caption: "",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Raised-Panel/Models/Raised-Panel-2206-2.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          }
        ],
        transition: "slide",
        with_thumbnail_nav: true
      },
      kula_woodtone_options: {
        cedar: true,
        classic: false,
        dark_oak: true,
        display_woodtone_options_title: true,
        driftwood: true,
        light_oak: false,
        mahogany: true,
        modern: false,
        type: "custom_widget",
        walnut: true,
        widget_name: "[RTM] Woodtone Options"
      },
      product_number: { header_tag: null, value: "2216" },
      product_name: { value: __products[2216].product_family },
      door_image: {
        alt: "chi-22-rp-one-car.png",
        height: 214,
        img_alt: "chi-22-rp-one-car.png",
        img_load_error: false,
        link: "",
        open_in_new_tab: false,
        original_height: 214,
        original_width: 270,
        src: "https://cdn2.hubspot.net/hubfs/2029938/chi-22-rp-one-car.png",
        width: 270
      },
      kula_raised_panel_options: {
        backing_text: __products[2216].section_material,
        door_style_text: __products[2216].panel_style,
        family_brochure_link:
          '\u003Ca href="' +
          __products[2216].family_brochure_link +
          '" target="_blank"\u003EDownload Brochure\u003C/a\u003E',
        model_flyer_link:
          '\u003Ca href="' +
          __products[2216].model_flyer_link +
          '" target="_blank"\u003EDownload Flyer\u003C/a\u003E',
        module_id: 2291134,
        price: __products[2216].price,
        r_value_text: __products[2216].r_value_text,
        rtm_construction_type: __products[2216].rtm_construction_type,
        rtm_insulation_type: __products[2216].rtm_insulation_type,
        widget_name: "[KULA] Raised Panel Options"
      },
      door_image_caption: { value: "Short Panel" },
      customization_title: { value: "Customization Options" },
      window_inserts: {
        display_woodtone_options_title: true,
        module_id: 2421584,
        rtm_test: true,
        sherwood: true,
        walnut: false,
        widget_name: "Window Inserts"
      },
      designer_glass: {
        custom_widget_id: 5561952058,
        field_types: {
          florence_short: "boolean",
          hampton_short: "boolean",
          hawthorne_platinum_short: "boolean",
          hawthorne_short: "boolean",
          newport_short: "boolean",
          somerset_brass_short: "boolean",
          somerset_platinum_short: "boolean",
          temple_short: "boolean"
        },
        module_id: 2452105,
        per_widget_wrapper_html: "",
        tag: "custom_widget",
        type: "custom_widget",
        widget_name: "Designer Glass",
        wrapping_html: ""
      },
      glass_options: {
        frosted_short: true,
        module_id: 2470253,
        widget_name: "Glass Options"
      },
      kula_color_options: {
        almond: false,
        black: false,
        bronze: false,
        brown: false,
        desert_tan: false,
        evergreen: false,
        gray: false,
        module_id: 2210014,
        sandstone: false,
        show_color_options_title: false,
        white: false,
        widget_name: "[KULA] Color Options"
      },
      rtm_additional_text: {
        custom_widget_id: 5808245394,
        field_types: { additional_text: "boolean", rich_text: "richtext" },
        module_id: 2906367,
        per_widget_wrapper_html: "",
        tag: "custom_widget",
        type: "custom_widget",
        widget_name: "[RTM] Additional Text",
        wrapping_html: ""
      },
      model_number_used_in_algolia_search: { value: "2216" }
    }
  },
  {
    url: "https://www.chiohd.com/homeowners/garage-doors/raised-panel/4241",
    data: {
      image_gallery: {
        auto_advance: true,
        caption_position: "superimpose",
        display_mode: "thumbnail",
        lightbox: false,
        lightboxRows: 3,
        loop_slides: true,
        num_seconds: 5,
        only_thumbnails: false,
        show_pagination: true,
        sizing: "static",
        slides: [
          {
            alt_text: "Small (72dpi)-42RP_CHI0007.jpg",
            caption: "",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Raised-Panel/Models/Small%20(72dpi)-42RP_CHI0007.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          },
          {
            alt_text: "Small (72dpi)-CHI081513_0047.jpg",
            caption: "",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Raised-Panel/Models/Small%20(72dpi)-CHI081513_0047.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          },
          {
            alt_text: "Raised-Panel-White-Long.jpg",
            caption: "White",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Raised-Panel/Raised-Panel-White-Long.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: true
          },
          {
            alt_text: "Raised-Panel-Almond-Long.jpg",
            caption: "Almond",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Raised-Panel/Raised-Panel-Almond-Long.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: true
          },
          {
            alt_text: "Raised-Panel-Sandstone-Long.jpg",
            caption: "Sandstone",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Raised-Panel/Raised-Panel-Sandstone-Long.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: true
          },
          {
            alt_text: "Raised-Panel-Brown-Long.jpg",
            caption: "Brown",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Raised-Panel/Raised-Panel-Brown-Long.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: true
          },
          {
            alt_text: "Raised-Panel-Evergreen-Long.jpg",
            caption: "Evergreen",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Raised-Panel/Raised-Panel-Evergreen-Long.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: true
          }
        ],
        transition: "slide",
        with_thumbnail_nav: true
      },
      kula_woodtone_options: {
        cedar: false,
        classic: false,
        dark_oak: false,
        display_woodtone_options_title: false,
        driftwood: false,
        light_oak: false,
        mahogany: false,
        modern: false,
        module_id: 2291028,
        walnut: false,
        widget_name: "[KULA] Woodtone Options"
      },
      product_number: { header_tag: null, value: "4241" },
      product_name: { value: __products[4241].product_family },
      door_image: {
        alt: "Long-Panel",
        height: 214,
        img_alt: "chi-42-rp-one-car.png",
        img_load_error: false,
        link: "",
        open_in_new_tab: false,
        original_height: 214,
        original_width: 270,
        src: "https://cdn2.hubspot.net/hubfs/2029938/chi-42-rp-one-car.png",
        width: 270
      },
      kula_raised_panel_options: {
        backing_text: __products[4241].section_material,
        door_style_text: __products[4241].panel_style,
        family_brochure_link:
          '\u003Ca href="' +
          __products[4241].family_brochure_link +
          '" target="_blank"\u003EDownload Brochure\u003C/a\u003E',
        model_flyer_link:
          '\u003Ca href="' +
          __products[4241].model_flyer_link +
          '" target="_blank"\u003EDownload Flyer\u003C/a\u003E',
        module_id: 2291134,
        price: __products[4241].price,
        r_value_text: __products[4241].r_value_text,
        rtm_construction_type: __products[4241].rtm_construction_type,
        rtm_insulation_type: __products[4241].rtm_insulation_type,
        type: "custom_widget",
        widget_name: "[KULA] Raised Panel Options"
      },
      door_image_caption: { value: "Long Panel" },
      customization_title: { value: "Customization Options" },
      window_inserts: {
        cascade_short: false,
        cathedral_short: false,
        eight_piece_sunburst: false,
        five_piece_sunburst: false,
        four_piece_sunburst: false,
        long_cascade: true,
        long_four_piece_arched_madison: true,
        long_four_piece_arched_stockton: true,
        long_four_piece_sunburst: true,
        long_madison: true,
        long_praire: true,
        long_sherwood: true,
        long_stockton: true,
        long_three_piece_sunburst: true,
        long_two_piece_arched_madison: true,
        long_two_piece_arched_stockton: true,
        long_two_piece_sunburst: true,
        long_waterton: true,
        module_id: 2421584,
        prairie_short: false,
        seven_piece_sunburst: false,
        sherwood: false,
        six_piece_sunburst: false,
        stockton_short: false,
        waterton_short: false,
        widget_name: "Window Inserts"
      },
      designer_glass: {
        display_designer_glass_title: false,
        florence_short: false,
        hampton_short: false,
        hawthorne_platinum_short: false,
        hawthorne_short: false,
        module_id: 2452105,
        newport_short: false,
        somerset_brass_short: false,
        somerset_platinum_short: false,
        temple_short: false,
        widget_name: "Designer Glass"
      },
      glass_options: {
        custom_widget_id: 5562484302,
        field_types: {
          frosted_short: "boolean",
          glue_chip_short: "boolean",
          plain_short: "boolean",
          tinted_short: "boolean"
        },
        module_id: 2470253,
        per_widget_wrapper_html: "",
        tag: "custom_widget",
        type: "custom_widget",
        widget_name: "Glass Options",
        wrapping_html: ""
      },
      kula_color_options: {
        almond: true,
        black: false,
        bronze: false,
        brown: true,
        desert_tan: false,
        evergreen: true,
        gray: false,
        module_id: 2210014,
        sandstone: true,
        show_color_options_title: true,
        white: true,
        widget_name: "[KULA] Color Options"
      },
      rtm_additional_text: {
        custom_widget_id: 5808245394,
        field_types: { additional_text: "boolean", rich_text: "richtext" },
        module_id: 2906367,
        per_widget_wrapper_html: "",
        tag: "custom_widget",
        type: "custom_widget",
        widget_name: "[RTM] Additional Text",
        wrapping_html: ""
      },
      model_number_used_in_algolia_search: { value: "4241" }
    }
  },
  {
    url: "https://www.chiohd.com/homeowners/garage-doors/raised-panel/2241",
    data: {
      image_gallery: {
        auto_advance: true,
        caption_position: "superimpose",
        display_mode: "thumbnail",
        lightbox: false,
        lightboxRows: 3,
        loop_slides: true,
        num_seconds: 5,
        only_thumbnails: false,
        show_pagination: true,
        sizing: "static",
        slides: [
          {
            alt_text: "Raised-Panel-2206.jpg",
            caption: "Desert Tan with optional Stockton window inserts",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Raised-Panel/Models/Raised-Panel-2206.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: true
          },
          {
            alt_text: "Raised-Panel-2206-2.jpg",
            caption: "Desert Tan",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Raised-Panel/Models/Raised-Panel-2206-2.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: true
          }
        ],
        transition: "slide",
        with_thumbnail_nav: true
      },
      kula_woodtone_options: {
        cedar: false,
        classic: false,
        dark_oak: false,
        display_woodtone_options_title: false,
        driftwood: false,
        light_oak: false,
        mahogany: false,
        modern: false,
        module_id: 2291028,
        walnut: false,
        widget_name: "[KULA] Woodtone Options"
      },
      product_number: { header_tag: null, value: "2241" },
      product_name: { value: __products[2241].product_family },
      door_image: {
        alt: "chi-22-rp-one-car.png",
        height: 214,
        img_alt: "chi-22-rp-one-car.png",
        img_load_error: false,
        link: "",
        open_in_new_tab: false,
        original_height: 214,
        original_width: 270,
        src: "https://cdn2.hubspot.net/hubfs/2029938/chi-22-rp-one-car.png",
        width: 270
      },
      kula_raised_panel_options: {
        backing_text: __products[2241].section_material,
        door_style_text: __products[2241].panel_style,
        family_brochure_link:
          '\u003Ca href="' +
          __products[2241].family_brochure_link +
          '" target="_blank"\u003EDownload Brochure\u003C/a\u003E',
        model_flyer_link:
          '\u003Ca href="' +
          __products[2241].model_flyer_link +
          '" target="_blank"\u003EDownload Flyer\u003C/a\u003E',
        module_id: 2291134,
        price: __products[2241].price,
        r_value_text: __products[2241].r_value_text,
        rtm_construction_type: __products[2241].rtm_construction_type,
        rtm_insulation_type: __products[2241].rtm_insulation_type,
        type: "custom_widget",
        widget_name: "[KULA] Raised Panel Options"
      },
      door_image_caption: { value: "Short Panel" },
      customization_title: { value: "Customization Options" },
      window_inserts: {
        display_woodtone_options_title: true,
        module_id: 2421584,
        rtm_test: true,
        sherwood: true,
        walnut: false,
        widget_name: "Window Inserts"
      },
      designer_glass: {
        display_designer_glass_title: false,
        florence_short: false,
        hampton_short: false,
        hawthorne_platinum_short: false,
        hawthorne_short: false,
        module_id: 2452105,
        newport_short: false,
        somerset_brass_short: false,
        somerset_platinum_short: false,
        temple_short: false,
        widget_name: "Designer Glass"
      },
      glass_options: {
        custom_widget_id: 5562484302,
        field_types: {
          frosted_short: "boolean",
          glue_chip_short: "boolean",
          plain_short: "boolean",
          tinted_short: "boolean"
        },
        module_id: 2470253,
        per_widget_wrapper_html: "",
        tag: "custom_widget",
        type: "custom_widget",
        widget_name: "Glass Options",
        wrapping_html: ""
      },
      kula_color_options: {
        almond: true,
        black: false,
        bronze: false,
        brown: true,
        desert_tan: false,
        evergreen: true,
        gray: false,
        module_id: 2210014,
        sandstone: true,
        show_color_options_title: true,
        white: true,
        widget_name: "[KULA] Color Options"
      },
      rtm_additional_text: {
        custom_widget_id: 5808245394,
        field_types: { additional_text: "boolean", rich_text: "richtext" },
        module_id: 2906367,
        per_widget_wrapper_html: "",
        tag: "custom_widget",
        type: "custom_widget",
        widget_name: "[RTM] Additional Text",
        wrapping_html: ""
      },
      model_number_used_in_algolia_search: { value: "2241" }
    }
  },
  {
    url: "https://www.chiohd.com/homeowners/garage-doors/raised-panel/4251",
    data: {
      image_gallery: {
        auto_advance: true,
        caption_position: "superimpose",
        display_mode: "thumbnail",
        lightbox: false,
        lightboxRows: 3,
        loop_slides: true,
        num_seconds: 5,
        only_thumbnails: false,
        show_pagination: true,
        sizing: "static",
        slides: [
          {
            alt_text: "Small (72dpi)-42RP_CHI0007.jpg",
            caption: "",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Raised-Panel/Models/Small%20(72dpi)-42RP_CHI0007.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          },
          {
            alt_text: "Small (72dpi)-CHI081513_0047.jpg",
            caption: "",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Raised-Panel/Models/Small%20(72dpi)-CHI081513_0047.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          }
        ],
        transition: "slide",
        with_thumbnail_nav: true
      },
      kula_woodtone_options: {
        cedar: false,
        classic: true,
        dark_oak: false,
        display_woodtone_options_title: true,
        driftwood: false,
        light_oak: false,
        mahogany: false,
        modern: true,
        module_id: 2291028,
        walnut: false,
        widget_name: "[KULA] Woodtone Options"
      },
      product_number: { header_tag: null, value: "4251" },
      product_name: { value: __products[4251].product_family },
      door_image: {
        alt: "Long-Panel",
        height: 214,
        img_alt: "chi-42-rp-one-car.png",
        img_load_error: false,
        link: "",
        open_in_new_tab: false,
        original_height: 214,
        original_width: 270,
        src: "https://cdn2.hubspot.net/hubfs/2029938/chi-42-rp-one-car.png",
        width: 270
      },
      kula_raised_panel_options: {
        backing_text: __products[4251].section_material,
        door_style_text: __products[4251].panel_style,
        family_brochure_link:
          '\u003Ca href="' +
          __products[4251].family_brochure_link +
          '" target="_blank"\u003EDownload Brochure\u003C/a\u003E',
        model_flyer_link:
          '\u003Ca href="' +
          __products[4251].model_flyer_link +
          '" target="_blank"\u003EDownload Flyer\u003C/a\u003E',
        module_id: 2291134,
        price: __products[4251].price,
        r_value_text: __products[4251].r_value_text,
        rtm_construction_type: __products[4251].rtm_construction_type,
        rtm_insulation_type: __products[4251].rtm_insulation_type,
        type: "custom_widget",
        widget_name: "[KULA] Raised Panel Options"
      },
      door_image_caption: { value: "Long Panel" },
      customization_title: { value: "Customization Options" },
      window_inserts: {
        cascade_short: false,
        cathedral_short: false,
        eight_piece_sunburst: false,
        five_piece_sunburst: false,
        four_piece_sunburst: false,
        long_cascade: true,
        long_four_piece_arched_madison: true,
        long_four_piece_arched_stockton: true,
        long_four_piece_sunburst: true,
        long_madison: true,
        long_praire: true,
        long_sherwood: true,
        long_stockton: true,
        long_three_piece_sunburst: true,
        long_two_piece_arched_madison: true,
        long_two_piece_arched_stockton: true,
        long_two_piece_sunburst: true,
        long_waterton: true,
        module_id: 2421584,
        prairie_short: false,
        seven_piece_sunburst: false,
        sherwood: false,
        six_piece_sunburst: false,
        stockton_short: false,
        waterton_short: false,
        widget_name: "Window Inserts"
      },
      designer_glass: {
        display_designer_glass_title: false,
        florence_short: false,
        hampton_short: false,
        hawthorne_platinum_short: false,
        hawthorne_short: false,
        module_id: 2452105,
        newport_short: false,
        somerset_brass_short: false,
        somerset_platinum_short: false,
        temple_short: false,
        widget_name: "Designer Glass"
      },
      glass_options: {
        custom_widget_id: 5562484302,
        field_types: {
          frosted_short: "boolean",
          glue_chip_short: "boolean",
          plain_short: "boolean",
          tinted_short: "boolean"
        },
        module_id: 2470253,
        per_widget_wrapper_html: "",
        tag: "custom_widget",
        type: "custom_widget",
        widget_name: "Glass Options",
        wrapping_html: ""
      },
      kula_color_options: {
        almond: true,
        black: true,
        bronze: true,
        brown: true,
        desert_tan: true,
        evergreen: false,
        gray: true,
        module_id: 2210014,
        sandstone: true,
        show_color_options_title: true,
        type: "custom_widget",
        white: true,
        widget_name: "[KULA] Color Options"
      },
      rtm_additional_text: {
        custom_widget_id: 5808245394,
        field_types: { additional_text: "boolean", rich_text: "richtext" },
        module_id: 2906367,
        per_widget_wrapper_html: "",
        tag: "custom_widget",
        type: "custom_widget",
        widget_name: "[RTM] Additional Text",
        wrapping_html: ""
      },
      model_number_used_in_algolia_search: { value: "4251" }
    }
  },
  {
    url: "https://www.chiohd.com/homeowners/garage-doors/raised-panel/2251",
    data: {
      image_gallery: {
        auto_advance: true,
        caption_position: "superimpose",
        display_mode: "thumbnail",
        lightbox: false,
        lightboxRows: 3,
        loop_slides: true,
        num_seconds: 5,
        only_thumbnails: false,
        show_pagination: true,
        sizing: "static",
        slides: [
          {
            alt_text: "Raised-Panel-2206.jpg",
            caption: "",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Raised-Panel/Models/Raised-Panel-2206.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          },
          {
            alt_text: "Raised-Panel-2206-2.jpg",
            caption: "",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Raised-Panel/Models/Raised-Panel-2206-2.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          }
        ],
        transition: "slide",
        with_thumbnail_nav: true
      },
      kula_woodtone_options: {
        cedar: false,
        classic: true,
        dark_oak: false,
        display_woodtone_options_title: true,
        driftwood: false,
        light_oak: false,
        mahogany: false,
        modern: true,
        module_id: 2291028,
        walnut: false,
        widget_name: "[KULA] Woodtone Options"
      },
      product_number: { header_tag: null, value: "2251" },
      product_name: { value: __products[4251].product_family },
      door_image: {
        alt: "chi-22-rp-one-car.png",
        height: 214,
        img_alt: "chi-22-rp-one-car.png",
        img_load_error: false,
        link: "",
        open_in_new_tab: false,
        original_height: 214,
        original_width: 270,
        src: "https://cdn2.hubspot.net/hubfs/2029938/chi-22-rp-one-car.png",
        width: 270
      },
      kula_raised_panel_options: {
        backing_text: __products[4251].section_material,
        door_style_text: __products[4251].panel_style,
        family_brochure_link:
          '\u003Ca href="' +
          __products[4251].family_brochure_link +
          '" target="_blank"\u003EDownload Brochure\u003C/a\u003E',
        model_flyer_link:
          '\u003Ca href="' +
          __products[4251].model_flyer_link +
          '" target="_blank"\u003EDownload Flyer\u003C/a\u003E',
        module_id: 2291134,
        price: __products[4251].price,
        r_value_text: __products[4251].r_value_text,
        rtm_construction_type: __products[4251].rtm_construction_type,
        rtm_insulation_type: __products[4251].rtm_insulation_type,
        type: "custom_widget",
        widget_name: "[KULA] Raised Panel Options"
      },
      door_image_caption: { value: "Short Panel" },
      customization_title: { value: "Customization Options" },
      window_inserts: {
        display_woodtone_options_title: true,
        module_id: 2421584,
        rtm_test: true,
        sherwood: true,
        walnut: false,
        widget_name: "Window Inserts"
      },
      designer_glass: {
        display_designer_glass_title: false,
        florence_short: false,
        hampton_short: false,
        hawthorne_platinum_short: false,
        hawthorne_short: false,
        module_id: 2452105,
        newport_short: false,
        somerset_brass_short: false,
        somerset_platinum_short: false,
        temple_short: false,
        widget_name: "Designer Glass"
      },
      glass_options: {
        custom_widget_id: 5562484302,
        field_types: {
          frosted_short: "boolean",
          glue_chip_short: "boolean",
          plain_short: "boolean",
          tinted_short: "boolean"
        },
        module_id: 2470253,
        per_widget_wrapper_html: "",
        tag: "custom_widget",
        type: "custom_widget",
        widget_name: "Glass Options",
        wrapping_html: ""
      },
      kula_color_options: {
        almond: true,
        black: true,
        bronze: true,
        brown: true,
        desert_tan: true,
        evergreen: false,
        gray: true,
        module_id: 2210014,
        sandstone: true,
        show_color_options_title: true,
        type: "custom_widget",
        white: true,
        widget_name: "[KULA] Color Options"
      },
      rtm_additional_text: {
        custom_widget_id: 5808245394,
        field_types: { additional_text: "boolean", rich_text: "richtext" },
        module_id: 2906367,
        per_widget_wrapper_html: "",
        tag: "custom_widget",
        type: "custom_widget",
        widget_name: "[RTM] Additional Text",
        wrapping_html: ""
      },
      model_number_used_in_algolia_search: { value: "2251" }
    }
  },
  {
    url: "https://www.chiohd.com/homeowners/garage-doors/raised-panel/4255",
    data: {
      image_gallery: {
        auto_advance: true,
        caption_position: "superimpose",
        display_mode: "thumbnail",
        lightbox: false,
        lightboxRows: 3,
        loop_slides: true,
        num_seconds: 5,
        only_thumbnails: false,
        show_pagination: true,
        sizing: "static",
        slides: [
          {
            alt_text: "Small (72dpi)-42RP_CHI0007.jpg",
            caption: "",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Raised-Panel/Models/Small%20(72dpi)-42RP_CHI0007.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          },
          {
            alt_text: "Small (72dpi)-CHI081513_0047.jpg",
            caption: "",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Raised-Panel/Models/Small%20(72dpi)-CHI081513_0047.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          }
        ],
        transition: "slide",
        with_thumbnail_nav: true
      },
      kula_woodtone_options: {
        cedar: false,
        classic: true,
        dark_oak: false,
        display_woodtone_options_title: true,
        driftwood: false,
        light_oak: false,
        mahogany: false,
        modern: true,
        module_id: 2291028,
        walnut: false,
        widget_name: "[KULA] Woodtone Options"
      },
      product_number: { header_tag: null, value: "4255" },
      product_name: { value: __products[4255].product_family },
      door_image: {
        alt: "Long-Panel",
        height: 214,
        img_alt: "chi-42-rp-one-car.png",
        img_load_error: false,
        link: "",
        open_in_new_tab: false,
        original_height: 214,
        original_width: 270,
        src: "https://cdn2.hubspot.net/hubfs/2029938/chi-42-rp-one-car.png",
        width: 270
      },
      kula_raised_panel_options: {
        backing_text: __products[4255].section_material,
        door_style_text: __products[4255].panel_style,
        family_brochure_link:
          '\u003Ca href="' +
          __products[4255].family_brochure_link +
          '" target="_blank"\u003EDownload Brochure\u003C/a\u003E',
        model_flyer_link:
          '\u003Ca href="' +
          __products[4255].model_flyer_link +
          '" target="_blank"\u003EDownload Flyer\u003C/a\u003E',
        module_id: 2291134,
        price: __products[4255].price,
        r_value_text: __products[4255].r_value_text,
        rtm_construction_type: __products[4255].rtm_construction_type,
        rtm_insulation_type: __products[4255].rtm_insulation_type,
        type: "custom_widget",
        widget_name: "[KULA] Raised Panel Options"
      },
      door_image_caption: { value: "Long Panel" },
      customization_title: { value: "Customization Options" },
      window_inserts: {
        cascade_short: false,
        cathedral_short: false,
        eight_piece_sunburst: false,
        five_piece_sunburst: false,
        four_piece_sunburst: false,
        long_cascade: true,
        long_four_piece_arched_madison: true,
        long_four_piece_arched_stockton: true,
        long_four_piece_sunburst: true,
        long_madison: true,
        long_praire: true,
        long_sherwood: true,
        long_stockton: true,
        long_three_piece_sunburst: true,
        long_two_piece_arched_madison: true,
        long_two_piece_arched_stockton: true,
        long_two_piece_sunburst: true,
        long_waterton: true,
        module_id: 2421584,
        prairie_short: false,
        seven_piece_sunburst: false,
        sherwood: false,
        six_piece_sunburst: false,
        stockton_short: false,
        waterton_short: false,
        widget_name: "Window Inserts"
      },
      designer_glass: {
        display_designer_glass_title: false,
        florence_short: false,
        hampton_short: false,
        hawthorne_platinum_short: false,
        hawthorne_short: false,
        module_id: 2452105,
        newport_short: false,
        somerset_brass_short: false,
        somerset_platinum_short: false,
        temple_short: false,
        widget_name: "Designer Glass"
      },
      glass_options: {
        custom_widget_id: 5562484302,
        field_types: {
          frosted_short: "boolean",
          glue_chip_short: "boolean",
          plain_short: "boolean",
          tinted_short: "boolean"
        },
        module_id: 2470253,
        per_widget_wrapper_html: "",
        tag: "custom_widget",
        type: "custom_widget",
        widget_name: "Glass Options",
        wrapping_html: ""
      },
      kula_color_options: {
        almond: true,
        black: true,
        bronze: true,
        brown: true,
        desert_tan: true,
        evergreen: false,
        gray: true,
        module_id: 2210014,
        sandstone: true,
        show_color_options_title: true,
        type: "custom_widget",
        white: true,
        widget_name: "[KULA] Color Options"
      },
      rtm_additional_text: {
        custom_widget_id: 5808245394,
        field_types: { additional_text: "boolean", rich_text: "richtext" },
        module_id: 2906367,
        per_widget_wrapper_html: "",
        tag: "custom_widget",
        type: "custom_widget",
        widget_name: "[RTM] Additional Text",
        wrapping_html: ""
      },
      model_number_used_in_algolia_search: { value: "4255" }
    }
  },
  {
    url: "https://www.chiohd.com/homeowners/garage-doors/raised-panel/4240",
    data: {
      image_gallery: {
        auto_advance: true,
        caption_position: "superimpose",
        display_mode: "thumbnail",
        lightbox: false,
        lightboxRows: 3,
        loop_slides: true,
        num_seconds: 5,
        only_thumbnails: false,
        show_pagination: true,
        sizing: "static",
        slides: [
          {
            alt_text: "Small (72dpi)-CHI081513_0047.jpg",
            caption: "",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Raised-Panel/Models/Small%20(72dpi)-CHI081513_0047.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          },
          {
            alt_text: "Small (72dpi)-42RP_CHI0007.jpg",
            caption: "",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Raised-Panel/Models/Small%20(72dpi)-42RP_CHI0007.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          },
          {
            alt_text: "Raised-Panel-White-Long.jpg",
            caption: "",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Raised-Panel/Raised-Panel-White-Long.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          },
          {
            alt_text: "Raised-Panel-Dessert-Long.jpg",
            caption: "",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Raised-Panel/Raised-Panel-Dessert-Long.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          },
          {
            alt_text: "Raised-Panel-Sandstone-Long.jpg",
            caption: "",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Raised-Panel/Raised-Panel-Sandstone-Long.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          },
          {
            alt_text: "Raised-Panel-Brown-Long.jpg",
            caption: "",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Raised-Panel/Raised-Panel-Brown-Long.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          },
          {
            alt_text: "Raised-Panel-Evergreen-Long.jpg",
            caption: "",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Raised-Panel/Raised-Panel-Evergreen-Long.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          }
        ],
        transition: "slide",
        with_thumbnail_nav: true
      },
      kula_woodtone_options: {
        cedar: false,
        classic: false,
        dark_oak: false,
        display_woodtone_options_title: false,
        driftwood: false,
        light_oak: false,
        mahogany: false,
        modern: false,
        module_id: 2291028,
        walnut: false,
        widget_name: "[KULA] Woodtone Options"
      },
      product_number: { header_tag: null, value: "4240" },
      product_name: { value: __products[4240].product_family },
      door_image: {
        alt: "Long-Panel",
        height: 214,
        img_alt: "chi-42-rp-one-car.png",
        img_load_error: false,
        link: "",
        open_in_new_tab: false,
        original_height: 214,
        original_width: 270,
        src: "https://cdn2.hubspot.net/hubfs/2029938/chi-42-rp-one-car.png",
        width: 270
      },
      kula_raised_panel_options: {
        backing_text: __products[4240].section_material,
        door_style_text: __products[4240].panel_style,
        family_brochure_link:
          '\u003Ca href="' +
          __products[4240].family_brochure_link +
          '" target="_blank"\u003EDownload Brochure\u003C/a\u003E',
        model_flyer_link:
          '\u003Ca href="' +
          __products[4240].model_flyer_link +
          '" target="_blank"\u003EDownload Flyer\u003C/a\u003E',
        module_id: 2291134,
        price: __products[4240].price,
        r_value_text: __products[4240].r_value_text,
        rtm_construction_type: __products[4240].rtm_construction_type,
        rtm_insulation_type: __products[4240].rtm_insulation_type,
        type: "custom_widget",
        widget_name: "[KULA] Raised Panel Options"
      },
      door_image_caption: { value: "Long Panel" },
      customization_title: { value: "Customization Options" },
      window_inserts: {
        cascade_short: false,
        cathedral_short: false,
        eight_piece_sunburst: false,
        five_piece_sunburst: false,
        four_piece_sunburst: false,
        long_cascade: true,
        long_four_piece_arched_madison: true,
        long_four_piece_arched_stockton: true,
        long_four_piece_sunburst: true,
        long_madison: true,
        long_praire: true,
        long_sherwood: true,
        long_stockton: true,
        long_three_piece_sunburst: true,
        long_two_piece_arched_madison: true,
        long_two_piece_arched_stockton: true,
        long_two_piece_sunburst: true,
        long_waterton: true,
        module_id: 2421584,
        prairie_short: false,
        seven_piece_sunburst: false,
        sherwood: false,
        six_piece_sunburst: false,
        stockton_short: false,
        waterton_short: false,
        widget_name: "Window Inserts"
      },
      designer_glass: {
        display_designer_glass_title: false,
        florence_short: false,
        hampton_short: false,
        hawthorne_platinum_short: false,
        hawthorne_short: false,
        module_id: 2452105,
        newport_short: false,
        somerset_brass_short: false,
        somerset_platinum_short: false,
        temple_short: false,
        widget_name: "Designer Glass"
      },
      glass_options: {
        custom_widget_id: 5562484302,
        field_types: {
          frosted_short: "boolean",
          glue_chip_short: "boolean",
          plain_short: "boolean",
          tinted_short: "boolean"
        },
        module_id: 2470253,
        per_widget_wrapper_html: "",
        tag: "custom_widget",
        type: "custom_widget",
        widget_name: "Glass Options",
        wrapping_html: ""
      },
      kula_color_options: {
        almond: true,
        black: false,
        bronze: false,
        brown: true,
        desert_tan: false,
        evergreen: true,
        gray: false,
        module_id: 2210014,
        sandstone: true,
        show_color_options_title: true,
        white: true,
        widget_name: "[KULA] Color Options"
      },
      rtm_additional_text: {
        custom_widget_id: 5808245394,
        field_types: { additional_text: "boolean", rich_text: "richtext" },
        module_id: 2906367,
        per_widget_wrapper_html: "",
        tag: "custom_widget",
        type: "custom_widget",
        widget_name: "[RTM] Additional Text",
        wrapping_html: ""
      },
      model_number_used_in_algolia_search: { value: "4240" }
    }
  },
  {
    url: "https://www.chiohd.com/homeowners/garage-doors/raised-panel/2240",
    data: {
      image_gallery: {
        auto_advance: true,
        caption_position: "superimpose",
        display_mode: "thumbnail",
        lightbox: false,
        lightboxRows: 3,
        loop_slides: true,
        num_seconds: 5,
        only_thumbnails: false,
        show_pagination: true,
        sizing: "static",
        slides: [
          {
            alt_text: "Small (72dpi)-22RP_CHI0078.jpg",
            caption: "Evergreen with optional Stockton window inserts",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Raised-Panel/Models/Small%20(72dpi)-22RP_CHI0078.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: true
          },
          {
            alt_text: "Raised-Panel-2206.jpg",
            caption: "",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Raised-Panel/Models/Raised-Panel-2206.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          },
          {
            alt_text: "Raised-Panel-2206-2.jpg",
            caption: "",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Raised-Panel/Models/Raised-Panel-2206-2.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          }
        ],
        transition: "slide",
        with_thumbnail_nav: true
      },
      kula_woodtone_options: {
        cedar: false,
        classic: false,
        dark_oak: false,
        display_woodtone_options_title: false,
        driftwood: false,
        light_oak: false,
        mahogany: false,
        modern: false,
        module_id: 2291028,
        walnut: false,
        widget_name: "[KULA] Woodtone Options"
      },
      product_number: { header_tag: null, value: "2240" },
      product_name: { value: __products[2240].product_family },
      door_image: {
        alt: "chi-22-rp-one-car.png",
        height: 214,
        img_alt: "chi-22-rp-one-car.png",
        img_load_error: false,
        link: "",
        open_in_new_tab: false,
        original_height: 214,
        original_width: 270,
        src: "https://cdn2.hubspot.net/hubfs/2029938/chi-22-rp-one-car.png",
        width: 270
      },
      kula_raised_panel_options: {
        backing_text: __products[2240].section_material,
        door_style_text: __products[2240].panel_style,
        family_brochure_link:
          '\u003Ca href="' +
          __products[2240].family_brochure_link +
          '" target="_blank"\u003EDownload Brochure\u003C/a\u003E',
        model_flyer_link:
          '\u003Ca href="' +
          __products[2240].model_flyer_link +
          '" target="_blank"\u003EDownload Flyer\u003C/a\u003E',
        module_id: 2291134,
        price: __products[2240].price,
        r_value_text: __products[2240].r_value_text,
        rtm_construction_type: __products[2240].rtm_construction_type,
        rtm_insulation_type: __products[2240].rtm_insulation_type,
        type: "custom_widget",
        widget_name: "[KULA] Raised Panel Options"
      },
      door_image_caption: { value: "Short Panel" },
      customization_title: { value: "Customization Options" },
      window_inserts: {
        display_woodtone_options_title: true,
        module_id: 2421584,
        rtm_test: true,
        sherwood: true,
        walnut: false,
        widget_name: "Window Inserts"
      },
      designer_glass: {
        display_designer_glass_title: false,
        florence_short: false,
        hampton_short: false,
        hawthorne_platinum_short: false,
        hawthorne_short: false,
        module_id: 2452105,
        newport_short: false,
        somerset_brass_short: false,
        somerset_platinum_short: false,
        temple_short: false,
        widget_name: "Designer Glass"
      },
      glass_options: {
        custom_widget_id: 5562484302,
        field_types: {
          frosted_short: "boolean",
          glue_chip_short: "boolean",
          plain_short: "boolean",
          tinted_short: "boolean"
        },
        module_id: 2470253,
        per_widget_wrapper_html: "",
        tag: "custom_widget",
        type: "custom_widget",
        widget_name: "Glass Options",
        wrapping_html: ""
      },
      kula_color_options: {
        almond: true,
        black: false,
        bronze: false,
        brown: true,
        desert_tan: false,
        evergreen: true,
        gray: false,
        module_id: 2210014,
        sandstone: true,
        show_color_options_title: true,
        white: true,
        widget_name: "[KULA] Color Options"
      },
      rtm_additional_text: {
        custom_widget_id: 5808245394,
        field_types: { additional_text: "boolean", rich_text: "richtext" },
        module_id: 2906367,
        per_widget_wrapper_html: "",
        tag: "custom_widget",
        type: "custom_widget",
        widget_name: "[RTM] Additional Text",
        wrapping_html: ""
      },
      model_number_used_in_algolia_search: { value: "2240" }
    }
  },
  {
    url: "https://www.chiohd.com/homeowners/garage-doors/raised-panel/4250",
    data: {
      image_gallery: {
        auto_advance: true,
        caption_position: "superimpose",
        display_mode: "thumbnail",
        lightbox: false,
        lightboxRows: 3,
        loop_slides: true,
        num_seconds: 5,
        only_thumbnails: false,
        show_pagination: true,
        sizing: "static",
        slides: [
          {
            alt_text: "Small (72dpi)-42RP_CHI0007.jpg",
            caption: "",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Raised-Panel/Models/Small%20(72dpi)-42RP_CHI0007.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          },
          {
            alt_text: "Small (72dpi)-CHI081513_0047.jpg",
            caption: "",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Raised-Panel/Models/Small%20(72dpi)-CHI081513_0047.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          }
        ],
        transition: "slide",
        with_thumbnail_nav: true
      },
      kula_woodtone_options: {
        cedar: false,
        classic: true,
        dark_oak: false,
        display_woodtone_options_title: true,
        driftwood: false,
        light_oak: false,
        mahogany: false,
        modern: true,
        module_id: 2291028,
        walnut: false,
        widget_name: "[KULA] Woodtone Options"
      },
      product_number: { header_tag: null, value: "4250" },
      product_name: {
        redirectUrl:
          "https://app.hubspot.com/content/2029938/edit-beta/5587911073",
        value: __products[4250].product_family
      },
      door_image: {
        alt: "Long-Panel",
        height: 214,
        img_alt: "chi-42-rp-one-car.png",
        img_load_error: false,
        link: "",
        open_in_new_tab: false,
        original_height: 214,
        original_width: 270,
        src: "https://cdn2.hubspot.net/hubfs/2029938/chi-42-rp-one-car.png",
        width: 270
      },
      kula_raised_panel_options: {
        backing_text: __products[4250].section_material,
        door_style_text: __products[4250].panel_style,
        family_brochure_link:
          '\u003Ca href="' +
          __products[4250].family_brochure_link +
          '" target="_blank"\u003EDownload Brochure\u003C/a\u003E',
        model_flyer_link:
          '\u003Ca href="' +
          __products[4250].model_flyer_link +
          '" target="_blank"\u003EDownload Flyer\u003C/a\u003E',
        module_id: 2291134,
        price: __products[4250].price,
        r_value_text: __products[4250].r_value_text,
        rtm_construction_type: __products[4250].rtm_construction_type,
        rtm_insulation_type: __products[4250].rtm_insulation_type,
        type: "custom_widget",
        widget_name: "[KULA] Raised Panel Options"
      },
      door_image_caption: { value: "Long Panel" },
      customization_title: { value: "Customization Options" },
      window_inserts: {
        cascade_short: false,
        cathedral_short: false,
        eight_piece_sunburst: false,
        five_piece_sunburst: false,
        four_piece_sunburst: false,
        long_cascade: true,
        long_four_piece_arched_madison: true,
        long_four_piece_arched_stockton: true,
        long_four_piece_sunburst: true,
        long_madison: true,
        long_praire: true,
        long_sherwood: true,
        long_stockton: true,
        long_three_piece_sunburst: true,
        long_two_piece_arched_madison: true,
        long_two_piece_arched_stockton: true,
        long_two_piece_sunburst: true,
        long_waterton: true,
        module_id: 2421584,
        prairie_short: false,
        seven_piece_sunburst: false,
        sherwood: false,
        six_piece_sunburst: false,
        stockton_short: false,
        waterton_short: false,
        widget_name: "Window Inserts"
      },
      designer_glass: {
        display_designer_glass_title: false,
        florence_short: false,
        hampton_short: false,
        hawthorne_platinum_short: false,
        hawthorne_short: false,
        module_id: 2452105,
        newport_short: false,
        somerset_brass_short: false,
        somerset_platinum_short: false,
        temple_short: false,
        widget_name: "Designer Glass"
      },
      glass_options: {
        custom_widget_id: 5562484302,
        field_types: {
          frosted_short: "boolean",
          glue_chip_short: "boolean",
          plain_short: "boolean",
          tinted_short: "boolean"
        },
        module_id: 2470253,
        per_widget_wrapper_html: "",
        tag: "custom_widget",
        type: "custom_widget",
        widget_name: "Glass Options",
        wrapping_html: ""
      },
      kula_color_options: {
        almond: true,
        black: true,
        bronze: true,
        brown: true,
        desert_tan: true,
        evergreen: false,
        gray: true,
        module_id: 2210014,
        sandstone: true,
        show_color_options_title: true,
        type: "custom_widget",
        white: true,
        widget_name: "[KULA] Color Options"
      },
      rtm_additional_text: {
        custom_widget_id: 5808245394,
        field_types: { additional_text: "boolean", rich_text: "richtext" },
        module_id: 2906367,
        per_widget_wrapper_html: "",
        tag: "custom_widget",
        type: "custom_widget",
        widget_name: "[RTM] Additional Text",
        wrapping_html: ""
      },
      model_number_used_in_algolia_search: { value: "4250" }
    }
  },
  {
    url: "https://www.chiohd.com/homeowners/garage-doors/raised-panel/2250",
    data: {
      image_gallery: {
        auto_advance: true,
        caption_position: "superimpose",
        display_mode: "thumbnail",
        lightbox: false,
        lightboxRows: 3,
        loop_slides: true,
        num_seconds: 5,
        only_thumbnails: false,
        show_pagination: true,
        sizing: "static",
        slides: [
          {
            alt_text: "Small (72dpi)-22RP_CHI0007.jpg",
            caption: "",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Raised-Panel/Models/Small%20(72dpi)-22RP_CHI0007.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          },
          {
            alt_text: "Small (72dpi)-22RP_CHI0013.jpg",
            caption: "",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Raised-Panel/Models/Small%20(72dpi)-22RP_CHI0013.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          },
          {
            alt_text: "Small (72dpi)-22RP_CHI0015.jpg",
            caption: "",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Raised-Panel/Models/Small%20(72dpi)-22RP_CHI0015.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          }
        ],
        transition: "slide",
        with_thumbnail_nav: true
      },
      kula_woodtone_options: {
        cedar: false,
        classic: true,
        dark_oak: false,
        display_woodtone_options_title: false,
        driftwood: false,
        light_oak: false,
        mahogany: false,
        modern: true,
        module_id: 2291028,
        walnut: false,
        widget_name: "[KULA] Woodtone Options"
      },
      product_number: {
        header_tag: null,
        redirectUrl:
          "https://app.hubspot.com/content/2029938/edit-beta/5562872561",
        value: "2250"
      },
      product_name: { value: __products[2250].product_family },
      door_image: {
        alt: "chi-22-rp-one-car.png",
        height: 214,
        img_alt: "chi-22-rp-one-car.png",
        img_load_error: false,
        link: "",
        open_in_new_tab: false,
        original_height: 214,
        original_width: 270,
        src: "https://cdn2.hubspot.net/hubfs/2029938/chi-22-rp-one-car.png",
        width: 270
      },
      kula_raised_panel_options: {
        backing_text: __products[2250].section_material,
        door_style_text: __products[2250].panel_style,
        family_brochure_link:
          '\u003Ca href="' +
          __products[2250].family_brochure_link +
          '" target="_blank"\u003EDownload Brochure\u003C/a\u003E',
        model_flyer_link:
          '\u003Ca href="' +
          __products[2250].model_flyer_link +
          '" target="_blank"\u003EDownload Flyer\u003C/a\u003E',
        module_id: 2291134,
        price: __products[2250].price,
        r_value_text: __products[2250].r_value_text,
        rtm_construction_type: __products[2250].rtm_construction_type,
        rtm_insulation_type: __products[2250].rtm_insulation_type,
        type: "custom_widget",
        widget_name: "[KULA] Raised Panel Options"
      },
      door_image_caption: { value: "Short Panel" },
      customization_title: { value: "Customization Options" },
      window_inserts: {
        display_woodtone_options_title: true,
        module_id: 2421584,
        rtm_test: true,
        sherwood: true,
        walnut: false,
        widget_name: "Window Inserts"
      },
      designer_glass: {
        display_designer_glass_title: false,
        florence_short: false,
        hampton_short: false,
        hawthorne_platinum_short: false,
        hawthorne_short: false,
        module_id: 2452105,
        newport_short: false,
        somerset_brass_short: false,
        somerset_platinum_short: false,
        temple_short: false,
        widget_name: "Designer Glass"
      },
      glass_options: {
        custom_widget_id: 5562484302,
        field_types: {
          frosted_short: "boolean",
          glue_chip_short: "boolean",
          plain_short: "boolean",
          tinted_short: "boolean"
        },
        module_id: 2470253,
        per_widget_wrapper_html: "",
        tag: "custom_widget",
        type: "custom_widget",
        widget_name: "Glass Options",
        wrapping_html: ""
      },
      kula_color_options: {
        almond: true,
        black: true,
        bronze: true,
        brown: true,
        desert_tan: true,
        evergreen: false,
        gray: true,
        module_id: 2210014,
        sandstone: true,
        show_color_options_title: true,
        type: "custom_widget",
        white: true,
        widget_name: "[KULA] Color Options"
      },
      rtm_additional_text: {
        custom_widget_id: 5808245394,
        field_types: { additional_text: "boolean", rich_text: "richtext" },
        module_id: 2906367,
        per_widget_wrapper_html: "",
        tag: "custom_widget",
        type: "custom_widget",
        widget_name: "[RTM] Additional Text",
        wrapping_html: ""
      },
      model_number_used_in_algolia_search: { value: "2250" }
    }
  },
  {
    url: "https://www.chiohd.com/homeowners/garage-doors/raised-panel/2255",
    data: {
      image_gallery: {
        auto_advance: true,
        caption_position: "superimpose",
        display_mode: "thumbnail",
        lightbox: false,
        lightboxRows: 3,
        loop_slides: true,
        num_seconds: 5,
        only_thumbnails: false,
        show_pagination: true,
        sizing: "static",
        slides: [
          {
            alt_text: "Raised-Panel-2206.jpg",
            caption: "",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Raised-Panel/Models/Raised-Panel-2206.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          },
          {
            alt_text: "Raised-Panel-2206-2.jpg",
            caption: "",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Raised-Panel/Models/Raised-Panel-2206-2.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          }
        ],
        transition: "slide",
        with_thumbnail_nav: true
      },
      kula_woodtone_options: {
        cedar: false,
        classic: true,
        dark_oak: false,
        display_woodtone_options_title: false,
        driftwood: false,
        light_oak: false,
        mahogany: false,
        modern: true,
        module_id: 2291028,
        walnut: false,
        widget_name: "[KULA] Woodtone Options"
      },
      product_number: { header_tag: null, value: "2255" },
      product_name: { value: __products[2255].product_family },
      door_image: {
        alt: "chi-22-rp-one-car.png",
        height: 214,
        img_alt: "chi-22-rp-one-car.png",
        img_load_error: false,
        link: "",
        open_in_new_tab: false,
        original_height: 214,
        original_width: 270,
        src: "https://cdn2.hubspot.net/hubfs/2029938/chi-22-rp-one-car.png",
        width: 270
      },
      kula_raised_panel_options: {
        backing_text: __products[2255].section_material,
        door_style_text: __products[2255].panel_style,
        family_brochure_link:
          '\u003Ca href="' +
          __products[2255].family_brochure_link +
          '" target="_blank"\u003EDownload Brochure\u003C/a\u003E',
        model_flyer_link:
          '\u003Ca href="' +
          __products[2255].model_flyer_link +
          '" target="_blank"\u003EDownload Flyer\u003C/a\u003E',
        module_id: 2291134,
        price: __products[2255].price,
        r_value_text: __products[2255].r_value_text,
        rtm_construction_type: __products[2255].rtm_construction_type,
        rtm_insulation_type: __products[2255].rtm_insulation_type,
        type: "custom_widget",
        widget_name: "[KULA] Raised Panel Options"
      },
      door_image_caption: { value: "Short Panel" },
      customization_title: { value: "Customization Options" },
      window_inserts: {
        display_woodtone_options_title: true,
        module_id: 2421584,
        rtm_test: true,
        sherwood: true,
        walnut: false,
        widget_name: "Window Inserts"
      },
      designer_glass: {
        display_designer_glass_title: false,
        florence_short: false,
        hampton_short: false,
        hawthorne_platinum_short: false,
        hawthorne_short: false,
        module_id: 2452105,
        newport_short: false,
        somerset_brass_short: false,
        somerset_platinum_short: false,
        temple_short: false,
        widget_name: "Designer Glass"
      },
      glass_options: {
        custom_widget_id: 5562484302,
        field_types: {
          frosted_short: "boolean",
          glue_chip_short: "boolean",
          plain_short: "boolean",
          tinted_short: "boolean"
        },
        module_id: 2470253,
        per_widget_wrapper_html: "",
        tag: "custom_widget",
        type: "custom_widget",
        widget_name: "Glass Options",
        wrapping_html: ""
      },
      kula_color_options: {
        almond: true,
        black: true,
        bronze: true,
        brown: true,
        desert_tan: true,
        evergreen: false,
        gray: true,
        module_id: 2210014,
        sandstone: true,
        show_color_options_title: true,
        type: "custom_widget",
        white: true,
        widget_name: "[KULA] Color Options"
      },
      rtm_additional_text: {
        custom_widget_id: 5808245394,
        field_types: { additional_text: "boolean", rich_text: "richtext" },
        module_id: 2906367,
        per_widget_wrapper_html: "",
        tag: "custom_widget",
        type: "custom_widget",
        widget_name: "[RTM] Additional Text",
        wrapping_html: ""
      },
      model_number_used_in_algolia_search: { value: "2255" }
    }
  },
  {
    url:
      "https://www.chiohd.com/homeowners/garage-doors/stamped-carriage-house/5250",
    data: {
      image_gallery: {
        auto_advance: true,
        caption_position: "superimpose",
        display_mode: "thumbnail",
        lightbox: false,
        lightboxRows: 3,
        loop_slides: true,
        num_seconds: 5,
        only_thumbnails: false,
        show_pagination: true,
        sizing: "static",
        slides: [
          {
            alt_text: "Stamped-5216.jpg",
            caption: "",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Stamped/Models/Stamped-5216.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          },
          {
            alt_text: "Stamped-5216-2.jpg",
            caption: "",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Stamped/Models/Stamped-5216-2.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          }
        ],
        transition: "slide",
        with_thumbnail_nav: true
      },
      kula_woodtone_options: {
        cedar: false,
        classic: true,
        dark_oak: false,
        display_woodtone_options_title: true,
        driftwood: false,
        light_oak: false,
        mahogany: false,
        modern: true,
        module_id: 2291028,
        walnut: false,
        widget_name: "[KULA] Woodtone Options"
      },
      product_number: { header_tag: null, value: "5250" },
      product_name: {
        header_tag: null,
        value: __products[5250].product_family
      },
      door_image: {
        alt: "Stamped-Carriage-House-Short",
        height: 214,
        img_alt: "chi-52-sch-one-car.png",
        img_load_error: false,
        link: "",
        open_in_new_tab: false,
        original_height: 214,
        original_width: 270,
        src: "https://cdn2.hubspot.net/hubfs/2029938/chi-52-sch-one-car.png",
        width: 270
      },
      kula_raised_panel_options: {
        backing_text: __products[5250].section_material,
        door_style_text: __products[5250].panel_style,
        family_brochure_link:
          '\u003Ca href="' +
          __products[5250].family_brochure_link +
          '" target="_blank"\u003EDownload Brochure\u003C/a\u003E',
        model_flyer_link:
          '\u003Ca href="' +
          __products[5250].model_flyer_link +
          '" target="_blank"\u003EDownload Flyer\u003C/a\u003E',
        module_id: 2291134,
        price: __products[5250].price,
        r_value_text: __products[5250].r_value_text,
        rtm_construction_type: __products[5250].rtm_construction_type,
        rtm_insulation_type: __products[5250].rtm_insulation_type,
        widget_name: "[KULA] Raised Panel Options"
      },
      door_image_caption: { value: "Short Panel" },
      customization_title: { value: "Customization Options" },
      window_inserts: {
        cascade_short: false,
        cathedral_short: false,
        eight_piece_sunburst: false,
        five_piece_sunburst: false,
        four_piece_sunburst: false,
        long_cascade: true,
        long_four_piece_arched_madison: true,
        long_four_piece_arched_stockton: true,
        long_four_piece_sunburst: false,
        long_madison: true,
        long_praire: false,
        long_sherwood: false,
        long_stockton: true,
        long_three_piece_arched_madison: true,
        long_three_piece_arched_stockton: true,
        long_three_piece_sunburst: false,
        long_two_piece_arched_madison: true,
        long_two_piece_arched_stockton: true,
        long_two_piece_sunburst: false,
        long_waterton: false,
        module_id: 2421584,
        prairie_short: false,
        seven_piece_sunburst: false,
        sherwood: false,
        six_piece_sunburst: false,
        stockton_short: false,
        waterton_short: false,
        widget_name: "Window Inserts"
      },
      designer_glass: {
        display_designer_glass_title: false,
        florence_short: false,
        hampton_short: false,
        hawthorne_platinum_short: false,
        hawthorne_short: false,
        lasalle: false,
        module_id: 2452105,
        newport_short: false,
        somerset_brass_short: false,
        somerset_platinum_short: false,
        temple_short: false,
        widget_name: "Designer Glass"
      },
      glass_options: {
        frosted_short: true,
        glue_chip_short: true,
        module_id: 2470253,
        obscure_short: true,
        plain_short: true,
        seeded: false,
        tinted_short: true,
        widget_name: "Glass Options"
      },
      kula_color_options: {
        almond: true,
        black: false,
        bronze: false,
        brown: true,
        desert_tan: true,
        evergreen: false,
        gray: false,
        module_id: 2210014,
        sandstone: true,
        show_color_options_title: true,
        white: true,
        widget_name: "[KULA] Color Options"
      },
      rtm_additional_text: {
        custom_widget_id: 5808245394,
        field_types: { additional_text: "boolean", rich_text: "richtext" },
        module_id: 2906367,
        per_widget_wrapper_html: "",
        tag: "custom_widget",
        type: "custom_widget",
        widget_name: "[RTM] Additional Text",
        wrapping_html: ""
      },
      model_number_used_in_algolia_search: { value: "5250" }
    }
  },
  {
    url:
      "https://www.chiohd.com/homeowners/garage-doors/stamped-carriage-house/5950",
    data: {
      image_gallery: {
        auto_advance: true,
        caption_position: "superimpose",
        display_mode: "thumbnail",
        lightbox: false,
        lightboxRows: 3,
        loop_slides: true,
        num_seconds: 5,
        only_thumbnails: false,
        show_pagination: true,
        sizing: "static",
        slides: [
          {
            alt_text: "Stamped-5216.jpg",
            caption: "",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Stamped/Models/Stamped-5216.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          },
          {
            alt_text: "Stamped-5216-2.jpg",
            caption: "",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Stamped/Models/Stamped-5216-2.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          }
        ],
        transition: "slide",
        with_thumbnail_nav: true
      },
      kula_woodtone_options: {
        cedar: false,
        classic: true,
        dark_oak: false,
        display_woodtone_options_title: true,
        driftwood: false,
        light_oak: false,
        mahogany: false,
        modern: true,
        module_id: 2291028,
        walnut: false,
        widget_name: "[KULA] Woodtone Options"
      },
      product_number: { header_tag: null, value: "5950" },
      product_name: {
        header_tag: null,
        value: __products[5950].product_family
      },
      door_image: {
        alt: "chi-59-sch-one-car.png",
        height: 214,
        img_alt: "chi-59-sch-one-car.png",
        img_load_error: false,
        link: "",
        open_in_new_tab: false,
        original_height: 214,
        original_width: 270,
        src: "https://cdn2.hubspot.net/hubfs/2029938/chi-59-sch-one-car.png",
        width: 270
      },
      kula_raised_panel_options: {
        backing_text: __products[5950].section_material,
        door_style_text: __products[5950].panel_style,
        family_brochure_link:
          '\u003Ca href="' +
          __products[5950].family_brochure_link +
          '" target="_blank"\u003EDownload Brochure\u003C/a\u003E',
        model_flyer_link:
          '\u003Ca href="' +
          __products[5950].model_flyer_link +
          '" target="_blank"\u003EDownload Flyer\u003C/a\u003E',
        module_id: 2291134,
        price: __products[5950].price,
        r_value_text: __products[5950].r_value_text,
        rtm_construction_type: __products[5950].rtm_construction_type,
        rtm_insulation_type: __products[5950].rtm_insulation_type,
        widget_name: "[KULA] Raised Panel Options"
      },
      door_image_caption: { value: "Long Panel" },
      customization_title: { value: "Customization Options" },
      window_inserts: {
        cascade_short: false,
        cathedral_short: false,
        eight_piece_sunburst: false,
        five_piece_sunburst: false,
        four_piece_sunburst: false,
        long_cascade: true,
        long_four_piece_arched_madison: true,
        long_four_piece_arched_stockton: true,
        long_four_piece_sunburst: false,
        long_madison: true,
        long_praire: false,
        long_sherwood: false,
        long_stockton: true,
        long_three_piece_arched_madison: true,
        long_three_piece_arched_stockton: true,
        long_three_piece_sunburst: false,
        long_two_piece_arched_madison: true,
        long_two_piece_arched_stockton: true,
        long_two_piece_sunburst: false,
        long_waterton: false,
        module_id: 2421584,
        prairie_short: false,
        seven_piece_sunburst: false,
        sherwood: false,
        six_piece_sunburst: false,
        stockton_short: false,
        waterton_short: false,
        widget_name: "Window Inserts"
      },
      designer_glass: {
        display_designer_glass_title: false,
        florence_short: false,
        hampton_short: false,
        hawthorne_platinum_short: false,
        hawthorne_short: false,
        lasalle: false,
        module_id: 2452105,
        newport_short: false,
        somerset_brass_short: false,
        somerset_platinum_short: false,
        temple_short: false,
        widget_name: "Designer Glass"
      },
      glass_options: {
        frosted_short: true,
        glue_chip_short: true,
        module_id: 2470253,
        obscure_short: true,
        plain_short: true,
        seeded: false,
        tinted_short: true,
        widget_name: "Glass Options"
      },
      kula_color_options: {
        almond: true,
        black: false,
        bronze: false,
        brown: true,
        desert_tan: true,
        evergreen: false,
        gray: false,
        module_id: 2210014,
        redirectUrl:
          "https://app.hubspot.com/content/2029938/edit-beta/5690667477",
        sandstone: true,
        show_color_options_title: true,
        white: true,
        widget_name: "[KULA] Color Options"
      },
      rtm_additional_text: {
        custom_widget_id: 5808245394,
        field_types: { additional_text: "boolean", rich_text: "richtext" },
        module_id: 2906367,
        per_widget_wrapper_html: "",
        tag: "custom_widget",
        type: "custom_widget",
        widget_name: "[RTM] Additional Text",
        wrapping_html: ""
      },
      model_number_used_in_algolia_search: { value: "5950" }
    }
  },
  {
    url: "https://www.chiohd.com/homeowners/garage-doors/full-view/3295",
    data: {
      image_gallery: {
        auto_advance: true,
        caption_position: "below",
        display_mode: "thumbnail",
        lightbox: false,
        lightboxRows: 3,
        loop_slides: true,
        num_seconds: 5,
        only_thumbnails: false,
        show_pagination: true,
        sizing: "static",
        slides: [
          {
            alt_text: "Aluminum Full-View",
            caption:
              "Model 3295 shown in optional powder coat black and tinted glass.",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Full-View/Models/3295-2.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: true
          },
          {
            alt_text: "Aluminum Full-View",
            caption:
              "Model 3295 shown in optional powder coat dark bronze and white laminate glass.",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Full-View/Models/3295-3.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: true
          }
        ],
        transition: "slide",
        with_thumbnail_nav: true
      },
      kula_woodtone_options: {
        cedar: false,
        classic: false,
        dark_oak: false,
        display_woodtone_options_title: false,
        driftwood: false,
        light_oak: false,
        mahogany: false,
        modern: false,
        module_id: 2291028,
        walnut: false,
        widget_name: "[KULA] Woodtone Options"
      },
      product_number: { header_tag: null, value: "3295" },
      product_name: {
        redirectUrl:
          "https://app.hubspot.com/content/2029938/edit-beta/5755857841",
        value: __products[3295].product_family
      },
      door_image: {
        alt: "chi-full-view-one-car.png",
        height: 214,
        img_alt: "chi-full-view-one-car.png",
        img_load_error: false,
        link: "",
        open_in_new_tab: false,
        original_height: 214,
        original_width: 270,
        src: "https://cdn2.hubspot.net/hubfs/2029938/chi-full-view-one-car.png",
        width: 270
      },
      kula_raised_panel_options: {
        backing_text: __products[3295].section_material,
        door_style_text: __products[3295].panel_style,
        family_brochure_link:
          '\u003Ca href="' +
          __products[3295].family_brochure_link +
          '" target="_blank"\u003EDownload Brochure\u003C/a\u003E',
        model_flyer_link:
          '\u003Ca href="' +
          __products[3295].model_flyer_link +
          '" target="_blank"\u003EDownload Flyer\u003C/a\u003E',
        module_id: 2291134,
        price: __products[3295].price,
        r_value_text: __products[3295].r_value_text,
        rtm_construction_type: __products[3295].rtm_construction_type,
        rtm_insulation_type: __products[3295].rtm_insulation_type,
        widget_name: "[KULA] Raised Panel Options"
      },
      door_image_caption: { value: "Full-View" },
      customization_title: { value: "Customization Options" },
      window_inserts: {
        carriage_house_four_p_madison: false,
        carriage_house_four_p_madison_double: false,
        carriage_house_four_p_stockton: false,
        carriage_house_four_p_stockton_double: false,
        carriage_house_madison: false,
        carriage_house_madison_double: false,
        carriage_house_stockton_double: false,
        carriage_house_stockton_single: false,
        carriage_house_two_p_madison: false,
        carriage_house_two_p_madison_double: false,
        carriage_house_two_p_stockton: false,
        carriage_house_two_p_stockton_double: false,
        cascade_short: false,
        cathedral_short: false,
        eight_piece_sunburst: false,
        five_piece_sunburst: false,
        four_piece_sunburst: false,
        long_cascade: false,
        long_four_piece_arched_madison: false,
        long_four_piece_arched_stockton: false,
        long_four_piece_sunburst: false,
        long_madison: false,
        long_praire: false,
        long_sherwood: false,
        long_stockton: false,
        long_three_piece_arched_madison: false,
        long_three_piece_arched_stockton: false,
        long_three_piece_sunburst: false,
        long_two_piece_arched_madison: false,
        long_two_piece_arched_stockton: false,
        long_two_piece_sunburst: false,
        long_waterton: false,
        module_id: 2421584,
        prairie_short: false,
        recessed_madison_combo: false,
        recessed_madison_long: false,
        recessed_madison_short: false,
        recessed_stockton_combo: false,
        recessed_stockton_long: false,
        recessed_stockton_short: false,
        seven_piece_sunburst: false,
        sherwood: false,
        show_window_insert_title: false,
        six_piece_sunburst: false,
        stockton_short: false,
        waterton_short: false,
        widget_name: "Window Inserts"
      },
      designer_glass: {
        display_designer_glass_title: false,
        florence_short: false,
        hampton_short: false,
        hawthorne_platinum_short: false,
        hawthorne_short: false,
        lasalle: false,
        module_id: 2452105,
        newport_short: false,
        somerset_brass_short: false,
        somerset_platinum_short: false,
        temple_short: false,
        widget_name: "Designer Glass"
      },
      glass_options: {
        frosted_short: true,
        glue_chip_short: false,
        module_id: 2470253,
        obscure_short: false,
        plain_short: true,
        seeded: false,
        tinted_short: true,
        widget_name: "Glass Options"
      },
      kula_color_options: {
        almond: false,
        aluminum: true,
        black: true,
        bronze: true,
        brown: false,
        desert_tan: false,
        evergreen: false,
        gray: false,
        module_id: 2210014,
        sandstone: false,
        show_color_options_title: true,
        white: true,
        widget_name: "[KULA] Color Options"
      },
      rtm_additional_text: {
        custom_widget_id: 5808245394,
        field_types: { additional_text: "boolean", rich_text: "richtext" },
        module_id: 2906367,
        per_widget_wrapper_html: "",
        tag: "custom_widget",
        type: "custom_widget",
        widget_name: "[RTM] Additional Text",
        wrapping_html: ""
      },
      model_number_used_in_algolia_search: { value: "3295" }
    }
  },
  {
    url: "https://www.chiohd.com/homeowners/garage-doors/fiberglass/2701",
    data: {
      image_gallery: {
        auto_advance: true,
        caption_position: "superimpose",
        display_mode: "thumbnail",
        lightbox: false,
        lightboxRows: 3,
        loop_slides: true,
        num_seconds: 5,
        only_thumbnails: false,
        show_pagination: true,
        sizing: "static",
        slides: [
          {
            alt_text: "Small (72dpi)-27_CHI0011.jpg",
            caption: "",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Fiberglass/Models/Small%20(72dpi)-27_CHI0011.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          },
          {
            alt_text: "Small (72dpi)-27_CHI0015.jpg",
            caption: "",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Fiberglass/Models/Small%20(72dpi)-27_CHI0015.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          }
        ],
        transition: "slide",
        with_thumbnail_nav: true
      },
      kula_woodtone_options: {
        cedar: false,
        classic: false,
        dark_oak: true,
        display_woodtone_options_title: true,
        driftwood: false,
        light_oak: false,
        mahogany: true,
        modern: false,
        module_id: 2291028,
        walnut: true,
        widget_name: "[KULA] Woodtone Options"
      },
      product_number: { header_tag: null, value: "2701" },
      product_name: {
        header_tag: null,
        value: __products[2701].product_family
      },
      door_image: {
        alt: "Fiberglass Combo",
        height: 214,
        img_alt: "chi-fib-2701-one-car.png",
        img_load_error: false,
        link: "",
        open_in_new_tab: false,
        original_height: 214,
        original_width: 270,
        src: "https://cdn2.hubspot.net/hubfs/2029938/chi-fib-2701-one-car.png",
        width: 270
      },
      kula_raised_panel_options: {
        backing_text: __products[2701].section_material,
        door_style_text: __products[2701].panel_style,
        family_brochure_link:
          '\u003Ca href="' +
          __products[2701].family_brochure_link +
          '" target="_blank"\u003EDownload Brochure\u003C/a\u003E',
        model_flyer_link:
          '\u003Ca href="' +
          __products[2701].model_flyer_link +
          '" target="_blank"\u003EDownload Flyer\u003C/a\u003E',
        module_id: 2291134,
        price: __products[2701].price,
        r_value_text: __products[2701].r_value_text,
        rtm_construction_type: __products[2701].rtm_construction_type,
        rtm_insulation_type: __products[2701].rtm_insulation_type,
        widget_name: "[KULA] Raised Panel Options"
      },
      door_image_caption: { value: "Fiberglass Combo" },
      customization_title: { value: "Customization Options" },
      window_inserts: {
        carriage_house_four_p_madison: false,
        carriage_house_four_p_madison_double: false,
        carriage_house_four_p_stockton: false,
        carriage_house_four_p_stockton_double: false,
        carriage_house_madison: false,
        carriage_house_madison_double: false,
        carriage_house_stockton_double: false,
        carriage_house_stockton_single: false,
        carriage_house_two_p_madison: false,
        carriage_house_two_p_madison_double: false,
        carriage_house_two_p_stockton: false,
        carriage_house_two_p_stockton_double: false,
        cascade_short: false,
        cathedral_short: false,
        eight_piece_sunburst: false,
        five_piece_sunburst: false,
        four_piece_sunburst: false,
        long_cascade: false,
        long_four_piece_arched_madison: false,
        long_four_piece_arched_stockton: false,
        long_four_piece_sunburst: false,
        long_madison: false,
        long_praire: false,
        long_sherwood: false,
        long_stockton: false,
        long_three_piece_arched_madison: false,
        long_three_piece_arched_stockton: false,
        long_three_piece_sunburst: false,
        long_two_piece_arched_madison: false,
        long_two_piece_arched_stockton: false,
        long_two_piece_sunburst: false,
        long_waterton: false,
        module_id: 2421584,
        prairie_short: false,
        recessed_madison_combo: false,
        recessed_madison_long: false,
        recessed_madison_short: false,
        recessed_stockton_combo: false,
        recessed_stockton_long: false,
        recessed_stockton_short: false,
        seven_piece_sunburst: false,
        sherwood: false,
        show_window_insert_title: false,
        six_piece_sunburst: false,
        stockton_short: false,
        waterton_short: false,
        widget_name: "Window Inserts"
      },
      designer_glass: {
        display_designer_glass_title: true,
        florence_short: false,
        hampton_short: false,
        hawthorne_platinum_short: false,
        hawthorne_short: false,
        lasalle: false,
        module_id: 2452105,
        newport_short: false,
        somerset_brass_short: false,
        somerset_platinum_short: false,
        temple_short: false,
        widget_name: "Designer Glass"
      },
      glass_options: {
        frosted_short: false,
        glue_chip_short: true,
        module_id: 2470253,
        obscure_short: true,
        plain_short: true,
        seeded: false,
        tinted_short: false,
        widget_name: "Glass Options"
      },
      kula_color_options: {
        almond: true,
        aluminum: false,
        black: false,
        bronze: false,
        brown: false,
        desert_tan: false,
        evergreen: true,
        fiberglass_mahogany: true,
        fiberglass_oak: true,
        fiberglass_unfinished: true,
        fiberglass_walnut: true,
        gray: false,
        module_id: 2210014,
        sandstone: true,
        show_color_options_title: true,
        white: true,
        widget_name: "[KULA] Color Options"
      },
      rtm_additional_text: {
        custom_widget_id: 5808245394,
        field_types: { additional_text: "boolean", rich_text: "richtext" },
        module_id: 2906367,
        per_widget_wrapper_html: "",
        tag: "custom_widget",
        type: "custom_widget",
        widget_name: "[RTM] Additional Text",
        wrapping_html: ""
      },
      model_number_used_in_algolia_search: { value: "2701" }
    }
  },
  {
    url: "https://www.chiohd.com/homeowners/garage-doors/fiberglass/2703",
    data: {
      image_gallery: {
        auto_advance: true,
        caption_position: "superimpose",
        display_mode: "thumbnail",
        lightbox: false,
        lightboxRows: 3,
        loop_slides: true,
        num_seconds: 5,
        only_thumbnails: false,
        show_pagination: true,
        sizing: "static",
        slides: [
          {
            alt_text: "Small (72dpi)-27_CHI0011.jpg",
            caption: "",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Fiberglass/Models/Small%20(72dpi)-27_CHI0011.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          },
          {
            alt_text: "Small (72dpi)-27_CHI0015.jpg",
            caption: "",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Fiberglass/Models/Small%20(72dpi)-27_CHI0015.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          }
        ],
        transition: "slide",
        with_thumbnail_nav: true
      },
      kula_woodtone_options: {
        cedar: false,
        classic: false,
        dark_oak: true,
        display_woodtone_options_title: true,
        driftwood: false,
        light_oak: false,
        mahogany: true,
        modern: false,
        module_id: 2291028,
        walnut: true,
        widget_name: "[KULA] Woodtone Options"
      },
      product_number: { header_tag: null, value: "2703" },
      product_name: {
        header_tag: null,
        value: __products[2703].product_family
      },
      door_image: {
        alt: "chi-fib-2703-one-car.png",
        height: 214,
        img_alt: "chi-fib-2703-one-car.png",
        img_load_error: false,
        link: "",
        open_in_new_tab: false,
        original_height: 214,
        original_width: 270,
        src: "https://cdn2.hubspot.net/hubfs/2029938/chi-fib-2703-one-car.png",
        width: 270
      },
      kula_raised_panel_options: {
        backing_text: __products[2703].section_material,
        door_style_text: __products[2703].panel_style,
        family_brochure_link:
          '\u003Ca href="' +
          __products[2703].family_brochure_link +
          '" target="_blank"\u003EDownload Brochure\u003C/a\u003E',
        model_flyer_link:
          '\u003Ca href="' +
          __products[2703].model_flyer_link +
          '" target="_blank"\u003EDownload Flyer\u003C/a\u003E',
        module_id: 2291134,
        price: __products[2703].price,
        r_value_text: __products[2703].r_value_text,
        rtm_construction_type: __products[2703].rtm_construction_type,
        rtm_insulation_type: __products[2703].rtm_insulation_type,
        widget_name: "[KULA] Raised Panel Options"
      },
      door_image_caption: { value: "Fiberglass Combo Arched Top/Bottom" },
      customization_title: { value: "Customization Options" },
      window_inserts: {
        carriage_house_four_p_madison: false,
        carriage_house_four_p_madison_double: false,
        carriage_house_four_p_stockton: false,
        carriage_house_four_p_stockton_double: false,
        carriage_house_madison: false,
        carriage_house_madison_double: false,
        carriage_house_stockton_double: false,
        carriage_house_stockton_single: false,
        carriage_house_two_p_madison: false,
        carriage_house_two_p_madison_double: false,
        carriage_house_two_p_stockton: false,
        carriage_house_two_p_stockton_double: false,
        cascade_short: false,
        cathedral_short: false,
        eight_piece_sunburst: false,
        five_piece_sunburst: false,
        four_piece_sunburst: false,
        long_cascade: false,
        long_four_piece_arched_madison: false,
        long_four_piece_arched_stockton: false,
        long_four_piece_sunburst: false,
        long_madison: false,
        long_praire: false,
        long_sherwood: false,
        long_stockton: false,
        long_three_piece_arched_madison: false,
        long_three_piece_arched_stockton: false,
        long_three_piece_sunburst: false,
        long_two_piece_arched_madison: false,
        long_two_piece_arched_stockton: false,
        long_two_piece_sunburst: false,
        long_waterton: false,
        module_id: 2421584,
        prairie_short: false,
        recessed_madison_combo: false,
        recessed_madison_long: false,
        recessed_madison_short: false,
        recessed_stockton_combo: false,
        recessed_stockton_long: false,
        recessed_stockton_short: false,
        seven_piece_sunburst: false,
        sherwood: false,
        show_window_insert_title: false,
        six_piece_sunburst: false,
        stockton_short: false,
        waterton_short: false,
        widget_name: "Window Inserts"
      },
      designer_glass: {
        display_designer_glass_title: true,
        florence_short: false,
        hampton_short: false,
        hawthorne_platinum_short: false,
        hawthorne_short: false,
        lasalle: false,
        module_id: 2452105,
        newport_short: false,
        somerset_brass_short: false,
        somerset_platinum_short: false,
        temple_short: false,
        widget_name: "Designer Glass"
      },
      glass_options: {
        frosted_short: false,
        glue_chip_short: true,
        module_id: 2470253,
        obscure_short: true,
        plain_short: true,
        seeded: false,
        tinted_short: false,
        widget_name: "Glass Options"
      },
      kula_color_options: {
        almond: true,
        aluminum: false,
        black: false,
        bronze: false,
        brown: false,
        desert_tan: false,
        evergreen: true,
        fiberglass_mahogany: true,
        fiberglass_oak: true,
        fiberglass_unfinished: true,
        fiberglass_walnut: true,
        gray: false,
        module_id: 2210014,
        sandstone: true,
        show_color_options_title: true,
        white: true,
        widget_name: "[KULA] Color Options"
      },
      rtm_additional_text: {
        custom_widget_id: 5808245394,
        field_types: { additional_text: "boolean", rich_text: "richtext" },
        module_id: 2906367,
        per_widget_wrapper_html: "",
        tag: "custom_widget",
        type: "custom_widget",
        widget_name: "[RTM] Additional Text",
        wrapping_html: ""
      },
      model_number_used_in_algolia_search: { value: "2703" }
    }
  },
  {
    url: "https://www.chiohd.com/homeowners/garage-doors/fiberglass/2752",
    data: {
      image_gallery: {
        auto_advance: true,
        caption_position: "superimpose",
        display_mode: "thumbnail",
        lightbox: false,
        lightboxRows: 3,
        loop_slides: true,
        num_seconds: 5,
        only_thumbnails: false,
        show_pagination: true,
        sizing: "static",
        slides: [
          {
            alt_text: "Small (72dpi)-27_CHI0011.jpg",
            caption: "",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Fiberglass/Models/Small%20(72dpi)-27_CHI0011.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          },
          {
            alt_text: "Small (72dpi)-27_CHI0015.jpg",
            caption: "",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Fiberglass/Models/Small%20(72dpi)-27_CHI0015.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          }
        ],
        transition: "slide",
        with_thumbnail_nav: true
      },
      kula_woodtone_options: {
        cedar: false,
        classic: false,
        dark_oak: true,
        display_woodtone_options_title: true,
        driftwood: false,
        light_oak: false,
        mahogany: true,
        modern: false,
        module_id: 2291028,
        walnut: true,
        widget_name: "[KULA] Woodtone Options"
      },
      product_number: { header_tag: "h1", value: "2752" },
      product_name: {
        header_tag: null,
        value: __products[2752].product_family
      },
      door_image: {
        alt: "chi-fib-2752-one-car.png",
        height: 214,
        img_alt: "chi-fib-2752-one-car.png",
        img_load_error: false,
        link: "",
        open_in_new_tab: false,
        original_height: 214,
        original_width: 270,
        src: "https://cdn2.hubspot.net/hubfs/2029938/chi-fib-2752-one-car.png",
        width: 270
      },
      kula_raised_panel_options: {
        backing_text: __products[2752].section_material,
        door_style_text: __products[2752].panel_style,
        family_brochure_link:
          '\u003Ca href="' +
          __products[2752].family_brochure_link +
          '" target="_blank"\u003EDownload Brochure\u003C/a\u003E',
        model_flyer_link:
          '\u003Ca href="' +
          __products[2752].model_flyer_link +
          '" target="_blank"\u003EDownload Flyer\u003C/a\u003E',
        module_id: 2291134,
        price: __products[2752].price,
        r_value_text: __products[2752].r_value_text,
        rtm_construction_type: __products[2752].rtm_construction_type,
        rtm_insulation_type: __products[2752].rtm_insulation_type,
        widget_name: "[KULA] Raised Panel Options"
      },
      door_image_caption: { value: "Fiberglass Short Long Arched" },
      customization_title: { value: "Customization Options" },
      window_inserts: {
        carriage_house_four_p_madison: false,
        carriage_house_four_p_madison_double: false,
        carriage_house_four_p_stockton: false,
        carriage_house_four_p_stockton_double: false,
        carriage_house_madison: false,
        carriage_house_madison_double: false,
        carriage_house_stockton_double: false,
        carriage_house_stockton_single: false,
        carriage_house_two_p_madison: false,
        carriage_house_two_p_madison_double: false,
        carriage_house_two_p_stockton: false,
        carriage_house_two_p_stockton_double: false,
        cascade_short: false,
        cathedral_short: false,
        eight_piece_sunburst: false,
        five_piece_sunburst: false,
        four_piece_sunburst: false,
        long_cascade: false,
        long_four_piece_arched_madison: false,
        long_four_piece_arched_stockton: false,
        long_four_piece_sunburst: false,
        long_madison: false,
        long_praire: false,
        long_sherwood: false,
        long_stockton: false,
        long_three_piece_arched_madison: false,
        long_three_piece_arched_stockton: false,
        long_three_piece_sunburst: false,
        long_two_piece_arched_madison: false,
        long_two_piece_arched_stockton: false,
        long_two_piece_sunburst: false,
        long_waterton: false,
        module_id: 2421584,
        prairie_short: false,
        recessed_madison_combo: false,
        recessed_madison_long: false,
        recessed_madison_short: false,
        recessed_stockton_combo: false,
        recessed_stockton_long: false,
        recessed_stockton_short: false,
        seven_piece_sunburst: false,
        sherwood: false,
        show_window_insert_title: false,
        six_piece_sunburst: false,
        stockton_short: false,
        waterton_short: false,
        widget_name: "Window Inserts"
      },
      designer_glass: {
        display_designer_glass_title: true,
        florence_short: false,
        hampton_short: false,
        hawthorne_platinum_short: false,
        hawthorne_short: false,
        lasalle: false,
        module_id: 2452105,
        newport_short: false,
        somerset_brass_short: false,
        somerset_platinum_short: false,
        temple_short: false,
        widget_name: "Designer Glass"
      },
      glass_options: {
        frosted_short: false,
        glue_chip_short: true,
        module_id: 2470253,
        obscure_short: true,
        plain_short: true,
        seeded: false,
        tinted_short: false,
        widget_name: "Glass Options"
      },
      kula_color_options: {
        almond: true,
        aluminum: false,
        black: false,
        bronze: false,
        brown: false,
        desert_tan: false,
        evergreen: true,
        fiberglass_mahogany: true,
        fiberglass_oak: true,
        fiberglass_unfinished: true,
        fiberglass_walnut: true,
        gray: false,
        module_id: 2210014,
        sandstone: true,
        show_color_options_title: true,
        white: true,
        widget_name: "[KULA] Color Options"
      },
      rtm_additional_text: {
        custom_widget_id: 5808245394,
        field_types: { additional_text: "boolean", rich_text: "richtext" },
        module_id: 2906367,
        per_widget_wrapper_html: "",
        tag: "custom_widget",
        type: "custom_widget",
        widget_name: "[RTM] Additional Text",
        wrapping_html: ""
      },
      model_number_used_in_algolia_search: { value: "2752" }
    }
  },
  {
    url: "https://www.chiohd.com/homeowners/garage-doors/fiberglass/2702",
    data: {
      image_gallery: {
        auto_advance: true,
        caption_position: "superimpose",
        display_mode: "thumbnail",
        lightbox: false,
        lightboxRows: 3,
        loop_slides: true,
        num_seconds: 5,
        only_thumbnails: false,
        redirectUrl:
          "https://app.hubspot.com/content/2029938/edit-beta/5893974996",
        show_pagination: true,
        sizing: "static",
        slides: [
          {
            alt_text: "FG-2702.jpg",
            caption: "",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Fiberglass/Models/FG-2702.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          },
          {
            alt_text: "FG-2702-2.jpg",
            caption: "",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Fiberglass/Models/FG-2702-2.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          }
        ],
        transition: "slide",
        with_thumbnail_nav: true
      },
      kula_woodtone_options: {
        cedar: false,
        classic: false,
        dark_oak: true,
        display_woodtone_options_title: true,
        driftwood: false,
        light_oak: false,
        mahogany: true,
        modern: false,
        module_id: 2291028,
        walnut: true,
        widget_name: "[KULA] Woodtone Options"
      },
      product_number: { header_tag: null, value: "2702" },
      product_name: {
        header_tag: null,
        value: __products[2702].product_family
      },
      door_image: {
        alt: "chi-fib-2702-one-car.png",
        height: 214,
        img_alt: "chi-fib-2702-one-car.png",
        img_load_error: false,
        link: "",
        open_in_new_tab: false,
        original_height: 214,
        original_width: 270,
        src: "https://cdn2.hubspot.net/hubfs/2029938/chi-fib-2702-one-car.png",
        width: 270
      },
      kula_raised_panel_options: {
        backing_text: __products[2702].section_material,
        door_style_text: __products[2702].panel_style,
        family_brochure_link:
          '\u003Ca href="' +
          __products[2702].family_brochure_link +
          '" target="_blank"\u003EDownload Brochure\u003C/a\u003E',
        model_flyer_link:
          '\u003Ca href="' +
          __products[2702].model_flyer_link +
          '" target="_blank"\u003EDownload Flyer\u003C/a\u003E',
        module_id: 2291134,
        price: __products[2702].price,
        r_value_text: __products[2702].r_value_text,
        rtm_construction_type: __products[2702].rtm_construction_type,
        rtm_insulation_type: __products[2702].rtm_insulation_type,
        widget_name: "[KULA] Raised Panel Options"
      },
      door_image_caption: { value: "Fiberglass Combo Arched Top" },
      customization_title: { value: "Customization Options" },
      window_inserts: {
        carriage_house_four_p_madison: false,
        carriage_house_four_p_madison_double: false,
        carriage_house_four_p_stockton: false,
        carriage_house_four_p_stockton_double: false,
        carriage_house_madison: false,
        carriage_house_madison_double: false,
        carriage_house_stockton_double: false,
        carriage_house_stockton_single: false,
        carriage_house_two_p_madison: false,
        carriage_house_two_p_madison_double: false,
        carriage_house_two_p_stockton: false,
        carriage_house_two_p_stockton_double: false,
        cascade_short: false,
        cathedral_short: false,
        eight_piece_sunburst: false,
        five_piece_sunburst: false,
        four_piece_sunburst: false,
        long_cascade: false,
        long_four_piece_arched_madison: false,
        long_four_piece_arched_stockton: false,
        long_four_piece_sunburst: false,
        long_madison: false,
        long_praire: false,
        long_sherwood: false,
        long_stockton: false,
        long_three_piece_arched_madison: false,
        long_three_piece_arched_stockton: false,
        long_three_piece_sunburst: false,
        long_two_piece_arched_madison: false,
        long_two_piece_arched_stockton: false,
        long_two_piece_sunburst: false,
        long_waterton: false,
        module_id: 2421584,
        prairie_short: false,
        recessed_madison_combo: false,
        recessed_madison_long: false,
        recessed_madison_short: false,
        recessed_stockton_combo: false,
        recessed_stockton_long: false,
        recessed_stockton_short: false,
        seven_piece_sunburst: false,
        sherwood: false,
        show_window_insert_title: false,
        six_piece_sunburst: false,
        stockton_short: false,
        waterton_short: false,
        widget_name: "Window Inserts"
      },
      designer_glass: {
        display_designer_glass_title: true,
        florence_short: false,
        hampton_short: false,
        hawthorne_platinum_short: false,
        hawthorne_short: false,
        lasalle: false,
        module_id: 2452105,
        newport_short: false,
        somerset_brass_short: false,
        somerset_platinum_short: false,
        temple_short: false,
        widget_name: "Designer Glass"
      },
      glass_options: {
        frosted_short: false,
        glue_chip_short: true,
        module_id: 2470253,
        obscure_short: true,
        plain_short: true,
        seeded: false,
        tinted_short: false,
        widget_name: "Glass Options"
      },
      kula_color_options: {
        almond: true,
        aluminum: false,
        black: false,
        bronze: false,
        brown: false,
        desert_tan: false,
        evergreen: true,
        fiberglass_mahogany: true,
        fiberglass_oak: true,
        fiberglass_unfinished: true,
        fiberglass_walnut: true,
        gray: false,
        module_id: 2210014,
        sandstone: true,
        show_color_options_title: true,
        white: true,
        widget_name: "[KULA] Color Options"
      },
      rtm_additional_text: {
        custom_widget_id: 5808245394,
        field_types: { additional_text: "boolean", rich_text: "richtext" },
        module_id: 2906367,
        per_widget_wrapper_html: "",
        tag: "custom_widget",
        type: "custom_widget",
        widget_name: "[RTM] Additional Text",
        wrapping_html: ""
      },
      model_number_used_in_algolia_search: { value: "2702" }
    }
  },
  {
    url: "https://www.chiohd.com/homeowners/garage-doors/fiberglass/2751",
    data: {
      image_gallery: {
        auto_advance: true,
        caption_position: "superimpose",
        display_mode: "thumbnail",
        lightbox: false,
        lightboxRows: 3,
        loop_slides: true,
        num_seconds: 5,
        only_thumbnails: false,
        show_pagination: true,
        sizing: "static",
        slides: [
          {
            alt_text: "FG-2751.jpg",
            caption: "",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Fiberglass/Models/FG-2751.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          },
          {
            alt_text: "FG-2751-2.jpg",
            caption: "",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Fiberglass/Models/FG-2751-2.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          }
        ],
        transition: "slide",
        with_thumbnail_nav: true
      },
      kula_woodtone_options: {
        cedar: false,
        classic: false,
        dark_oak: true,
        display_woodtone_options_title: true,
        driftwood: false,
        light_oak: false,
        mahogany: true,
        modern: false,
        module_id: 2291028,
        walnut: true,
        widget_name: "[KULA] Woodtone Options"
      },
      product_number: { header_tag: null, value: "2751" },
      product_name: {
        header_tag: null,
        value: __products[2751].product_family
      },
      door_image: {
        alt: "chi-fib-2751-one-car.png",
        height: 214,
        img_alt: "chi-fib-2751-one-car.png",
        img_load_error: false,
        link: "",
        open_in_new_tab: false,
        original_height: 214,
        original_width: 270,
        src: "https://cdn2.hubspot.net/hubfs/2029938/chi-fib-2751-one-car.png",
        width: 270
      },
      kula_raised_panel_options: {
        backing_text: __products[2751].section_material,
        door_style_text: __products[2751].panel_style,
        family_brochure_link:
          '\u003Ca href="' +
          __products[2751].family_brochure_link +
          '" target="_blank"\u003EDownload Brochure\u003C/a\u003E',
        model_flyer_link:
          '\u003Ca href="' +
          __products[2751].model_flyer_link +
          '" target="_blank"\u003EDownload Flyer\u003C/a\u003E',
        module_id: 2291134,
        price: __products[2751].price,
        r_value_text: __products[2751].r_value_text,
        rtm_construction_type: __products[2751].rtm_construction_type,
        rtm_insulation_type: __products[2751].rtm_insulation_type,
        widget_name: "[KULA] Raised Panel Options"
      },
      door_image_caption: { value: "Fiberglass Short" },
      customization_title: { value: "Customization Options" },
      window_inserts: {
        carriage_house_four_p_madison: false,
        carriage_house_four_p_madison_double: false,
        carriage_house_four_p_stockton: false,
        carriage_house_four_p_stockton_double: false,
        carriage_house_madison: false,
        carriage_house_madison_double: false,
        carriage_house_stockton_double: false,
        carriage_house_stockton_single: false,
        carriage_house_two_p_madison: false,
        carriage_house_two_p_madison_double: false,
        carriage_house_two_p_stockton: false,
        carriage_house_two_p_stockton_double: false,
        cascade_short: false,
        cathedral_short: false,
        eight_piece_sunburst: false,
        five_piece_sunburst: false,
        four_piece_sunburst: false,
        long_cascade: false,
        long_four_piece_arched_madison: false,
        long_four_piece_arched_stockton: false,
        long_four_piece_sunburst: false,
        long_madison: false,
        long_praire: false,
        long_sherwood: false,
        long_stockton: false,
        long_three_piece_arched_madison: false,
        long_three_piece_arched_stockton: false,
        long_three_piece_sunburst: false,
        long_two_piece_arched_madison: false,
        long_two_piece_arched_stockton: false,
        long_two_piece_sunburst: false,
        long_waterton: false,
        module_id: 2421584,
        prairie_short: false,
        recessed_madison_combo: false,
        recessed_madison_long: false,
        recessed_madison_short: false,
        recessed_stockton_combo: false,
        recessed_stockton_long: false,
        recessed_stockton_short: false,
        seven_piece_sunburst: false,
        sherwood: false,
        show_window_insert_title: false,
        six_piece_sunburst: false,
        stockton_short: false,
        waterton_short: false,
        widget_name: "Window Inserts"
      },
      designer_glass: {
        display_designer_glass_title: true,
        florence_short: false,
        hampton_short: false,
        hawthorne_platinum_short: false,
        hawthorne_short: false,
        lasalle: false,
        module_id: 2452105,
        newport_short: false,
        somerset_brass_short: false,
        somerset_platinum_short: false,
        temple_short: false,
        widget_name: "Designer Glass"
      },
      glass_options: {
        frosted_short: false,
        glue_chip_short: true,
        module_id: 2470253,
        obscure_short: true,
        plain_short: true,
        seeded: false,
        tinted_short: false,
        widget_name: "Glass Options"
      },
      kula_color_options: {
        almond: true,
        aluminum: false,
        black: false,
        bronze: false,
        brown: false,
        desert_tan: false,
        evergreen: true,
        fiberglass_mahogany: true,
        fiberglass_oak: true,
        fiberglass_unfinished: true,
        fiberglass_walnut: true,
        gray: false,
        module_id: 2210014,
        sandstone: true,
        show_color_options_title: true,
        white: true,
        widget_name: "[KULA] Color Options"
      },
      rtm_additional_text: {
        custom_widget_id: 5808245394,
        field_types: { additional_text: "boolean", rich_text: "richtext" },
        module_id: 2906367,
        per_widget_wrapper_html: "",
        tag: "custom_widget",
        type: "custom_widget",
        widget_name: "[RTM] Additional Text",
        wrapping_html: ""
      },
      model_number_used_in_algolia_search: { value: "2751" }
    }
  },
  {
    url:
      "https://www.chiohd.com/homeowners/garage-doors/overlay-carriage-house/5300",
    data: {
      image_gallery: {
        auto_advance: true,
        caption_position: "below",
        display_mode: "thumbnail",
        lightbox: false,
        lightboxRows: 3,
        loop_slides: true,
        num_seconds: 5,
        only_thumbnails: false,
        show_pagination: true,
        sizing: "static",
        slides: [
          {
            alt_text: "5300 Series",
            caption: "",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Overlay/Models/5300-1.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          },
          {
            alt_text: "5300 Series",
            caption: "",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Overlay/Models/5300-2.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          },
          {
            alt_text: "5300 Series",
            caption: "",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Overlay/Models/5300-3.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          },
          {
            alt_text: "5300 Series",
            caption: "",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Overlay/Models/5300-4.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          }
        ],
        transition: "slide",
        with_thumbnail_nav: true
      },
      kula_woodtone_options: {
        cedar: false,
        classic: false,
        dark_oak: false,
        display_woodtone_options_title: false,
        driftwood: false,
        light_oak: false,
        mahogany: false,
        modern: false,
        module_id: 2291028,
        walnut: false,
        widget_name: "[KULA] Woodtone Options"
      },
      product_number: { header_tag: null, value: "5300" },
      product_name: { value: __products[5300].product_family },
      door_image: {
        alt: "chi-cho-steel-one-car.png",
        height: 214,
        img_alt: "chi-cho-steel-one-car.png",
        img_load_error: false,
        link: "",
        open_in_new_tab: false,
        original_height: 214,
        original_width: 269,
        src: "https://cdn2.hubspot.net/hubfs/2029938/chi-cho-steel-one-car.png",
        width: 269
      },
      kula_raised_panel_options: {
        backing_text: __products[5300].section_material,
        door_style_text: __products[5300].panel_style,
        family_brochure_link:
          '\u003Ca href="' +
          __products[5300].family_brochure_link +
          '" target="_blank"\u003EDownload Brochure\u003C/a\u003E',
        model_flyer_link:
          '\u003Ca href="' +
          __products[5300].model_flyer_link +
          '" target="_blank"\u003EDownload Flyer\u003C/a\u003E',
        module_id: 2291134,
        price: __products[5300].price,
        r_value_text: __products[5300].r_value_text,
        rtm_construction_type: __products[5300].rtm_construction_type,
        rtm_insulation_type: __products[5300].rtm_insulation_type,
        widget_name: "[KULA] Raised Panel Options"
      },
      door_image_caption: { value: "Steel Overlay" },
      customization_title: { value: "Customization Options" },
      window_inserts: {
        carriage_house_four_p_madison: true,
        carriage_house_four_p_madison_double: true,
        carriage_house_four_p_stockton: true,
        carriage_house_four_p_stockton_double: true,
        carriage_house_madison: true,
        carriage_house_madison_double: true,
        carriage_house_stockton_double: true,
        carriage_house_stockton_single: true,
        carriage_house_two_p_madison: true,
        carriage_house_two_p_madison_double: true,
        carriage_house_two_p_stockton: true,
        carriage_house_two_p_stockton_double: true,
        cascade_short: false,
        cathedral_short: false,
        eight_piece_sunburst: false,
        five_piece_sunburst: false,
        four_piece_sunburst: false,
        long_cascade: false,
        long_four_piece_arched_madison: false,
        long_four_piece_arched_stockton: false,
        long_four_piece_sunburst: false,
        long_madison: false,
        long_praire: false,
        long_sherwood: false,
        long_stockton: false,
        long_three_piece_arched_madison: false,
        long_three_piece_arched_stockton: false,
        long_three_piece_sunburst: false,
        long_two_piece_arched_madison: false,
        long_two_piece_arched_stockton: false,
        long_two_piece_sunburst: false,
        long_waterton: false,
        module_id: 2421584,
        prairie_short: false,
        seven_piece_sunburst: false,
        sherwood: false,
        six_piece_sunburst: false,
        stockton_short: false,
        waterton_short: false,
        widget_name: "Window Inserts"
      },
      designer_glass: {
        display_designer_glass_title: false,
        florence_short: false,
        hampton_short: false,
        hawthorne_platinum_short: false,
        hawthorne_short: false,
        lasalle: false,
        module_id: 2452105,
        newport_short: false,
        somerset_brass_short: false,
        somerset_platinum_short: false,
        temple_short: false,
        widget_name: "Designer Glass"
      },
      glass_options: {
        frosted_short: true,
        glue_chip_short: true,
        module_id: 2470253,
        obscure_short: true,
        plain_short: true,
        seeded: true,
        tinted_short: true,
        widget_name: "Glass Options"
      },
      kula_color_options: {
        almond: true,
        black: false,
        bronze: false,
        brown: false,
        desert_tan: false,
        evergreen: false,
        gray: false,
        module_id: 2210014,
        sandstone: true,
        show_color_options_title: true,
        white: true,
        widget_name: "[KULA] Color Options"
      },
      rtm_additional_text: {
        custom_widget_id: 5808245394,
        field_types: { additional_text: "boolean", rich_text: "richtext" },
        module_id: 2906367,
        per_widget_wrapper_html: "",
        tag: "custom_widget",
        type: "custom_widget",
        widget_name: "[RTM] Additional Text",
        wrapping_html: ""
      },
      model_number_used_in_algolia_search: { value: "5300" }
    }
  },
  {
    url:
      "https://www.chiohd.com/homeowners/garage-doors/overlay-carriage-house/5500",
    data: {
      image_gallery: {
        auto_advance: true,
        caption_position: "below",
        display_mode: "thumbnail",
        lightbox: false,
        lightboxRows: 3,
        loop_slides: true,
        num_seconds: 5,
        only_thumbnails: false,
        show_pagination: true,
        sizing: "static",
        slides: [
          {
            alt_text: "5500 Overlay",
            caption: "",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Overlay/Models/5500-1.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          },
          {
            alt_text: "5500 Overlay",
            caption: "",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Overlay/Models/5500-2.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          },
          {
            alt_text: "5500 Overlay",
            caption: "",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Overlay/Models/5500-3.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          },
          {
            alt_text: "5500 Overlay",
            caption: "",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Overlay/Models/5800-4.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          }
        ],
        transition: "slide",
        with_thumbnail_nav: true
      },
      kula_woodtone_options: {
        cedar: false,
        classic: false,
        dark_oak: false,
        display_woodtone_options_title: false,
        driftwood: false,
        light_oak: false,
        mahogany: false,
        modern: false,
        module_id: 2291028,
        walnut: false,
        widget_name: "[KULA] Woodtone Options"
      },
      product_number: { header_tag: null, value: "5500" },
      product_name: { value: __products[5500].product_family },
      door_image: {
        alt: "chi-cho-wood-one-car.png",
        height: 214,
        img_alt: "chi-cho-wood-one-car.png",
        img_load_error: false,
        link: "",
        open_in_new_tab: false,
        original_height: 214,
        original_width: 269,
        src: "https://cdn2.hubspot.net/hubfs/2029938/chi-cho-wood-one-car.png",
        width: 269
      },
      kula_raised_panel_options: {
        backing_text: __products[5500].section_material,
        door_style_text: __products[5500].panel_style,
        family_brochure_link:
          '\u003Ca href="' +
          __products[5500].family_brochure_link +
          '" target="_blank"\u003EDownload Brochure\u003C/a\u003E',
        model_flyer_link:
          '\u003Ca href="' +
          __products[5500].model_flyer_link +
          '" target="_blank"\u003EDownload Flyer\u003C/a\u003E',
        module_id: 2291134,
        price: __products[5500].price,
        r_value_text: __products[5500].r_value_text,
        rtm_construction_type: __products[5500].rtm_construction_type,
        rtm_insulation_type: __products[5500].rtm_insulation_type,
        widget_name: "[KULA] Raised Panel Options"
      },
      door_image_caption: { value: "Fiberglass Overlay" },
      customization_title: { value: "Customization Options" },
      window_inserts: {
        carriage_house_four_p_madison: true,
        carriage_house_four_p_madison_double: true,
        carriage_house_four_p_stockton: true,
        carriage_house_four_p_stockton_double: true,
        carriage_house_madison: true,
        carriage_house_madison_double: true,
        carriage_house_stockton_double: true,
        carriage_house_stockton_single: true,
        carriage_house_two_p_madison: true,
        carriage_house_two_p_madison_double: true,
        carriage_house_two_p_stockton: true,
        carriage_house_two_p_stockton_double: true,
        cascade_short: false,
        cathedral_short: false,
        eight_piece_sunburst: false,
        five_piece_sunburst: false,
        four_piece_sunburst: false,
        long_cascade: false,
        long_four_piece_arched_madison: false,
        long_four_piece_arched_stockton: false,
        long_four_piece_sunburst: false,
        long_madison: false,
        long_praire: false,
        long_sherwood: false,
        long_stockton: false,
        long_three_piece_arched_madison: false,
        long_three_piece_arched_stockton: false,
        long_three_piece_sunburst: false,
        long_two_piece_arched_madison: false,
        long_two_piece_arched_stockton: false,
        long_two_piece_sunburst: false,
        long_waterton: false,
        module_id: 2421584,
        prairie_short: false,
        seven_piece_sunburst: false,
        sherwood: false,
        six_piece_sunburst: false,
        stockton_short: false,
        waterton_short: false,
        widget_name: "Window Inserts"
      },
      designer_glass: {
        display_designer_glass_title: false,
        florence_short: false,
        hampton_short: false,
        hawthorne_platinum_short: false,
        hawthorne_short: false,
        lasalle: false,
        module_id: 2452105,
        newport_short: false,
        somerset_brass_short: false,
        somerset_platinum_short: false,
        temple_short: false,
        widget_name: "Designer Glass"
      },
      glass_options: {
        frosted_short: true,
        glue_chip_short: true,
        module_id: 2470253,
        obscure_short: true,
        plain_short: true,
        seeded: true,
        tinted_short: true,
        widget_name: "Glass Options"
      },
      kula_color_options: {
        almond: true,
        black: false,
        bronze: false,
        brown: false,
        desert_tan: false,
        evergreen: false,
        gray: false,
        module_id: 2210014,
        sandstone: true,
        show_color_options_title: true,
        white: true,
        widget_name: "[KULA] Color Options"
      },
      rtm_additional_text: {
        custom_widget_id: 5808245394,
        field_types: { additional_text: "boolean", rich_text: "richtext" },
        module_id: 2906367,
        per_widget_wrapper_html: "",
        tag: "custom_widget",
        type: "custom_widget",
        widget_name: "[RTM] Additional Text",
        wrapping_html: ""
      },
      model_number_used_in_algolia_search: { value: "5500" }
    }
  },
  {
    url:
      "https://www.chiohd.com/homeowners/garage-doors/overlay-carriage-house/5600",
    data: {
      image_gallery: {
        auto_advance: true,
        caption_position: "below",
        display_mode: "thumbnail",
        lightbox: false,
        lightboxRows: 3,
        loop_slides: true,
        num_seconds: 5,
        only_thumbnails: false,
        show_pagination: true,
        sizing: "static",
        slides: [
          {
            alt_text: "5300 Series",
            caption: "",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Overlay/Models/5300-1.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          },
          {
            alt_text: "5300 Series",
            caption: "",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Overlay/Models/5300-2.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          },
          {
            alt_text: "5300 Series",
            caption: "",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Overlay/Models/5300-3.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          },
          {
            alt_text: "5300 Series",
            caption: "",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Overlay/Models/5300-4.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          }
        ],
        transition: "slide",
        with_thumbnail_nav: true
      },
      kula_woodtone_options: {
        cedar: false,
        classic: false,
        dark_oak: false,
        display_woodtone_options_title: false,
        driftwood: false,
        light_oak: false,
        mahogany: false,
        modern: false,
        module_id: 2291028,
        walnut: false,
        widget_name: "[KULA] Woodtone Options"
      },
      product_number: { header_tag: null, value: "5600" },
      product_name: { value: __products[5600].product_family },
      door_image: {
        alt: "chi-cho-steel-one-car.png",
        height: 214,
        img_alt: "chi-cho-steel-one-car.png",
        img_load_error: false,
        link: "",
        open_in_new_tab: false,
        original_height: 214,
        original_width: 269,
        src: "https://cdn2.hubspot.net/hubfs/2029938/chi-cho-steel-one-car.png",
        width: 269
      },
      kula_raised_panel_options: {
        backing_text: __products[5600].section_material,
        door_style_text: __products[5600].panel_style,
        family_brochure_link:
          '\u003Ca href="' +
          __products[5600].family_brochure_link +
          '" target="_blank"\u003EDownload Brochure\u003C/a\u003E',
        model_flyer_link:
          '\u003Ca href="' +
          __products[5600].model_flyer_link +
          '" target="_blank"\u003EDownload Flyer\u003C/a\u003E',
        module_id: 2291134,
        price: __products[5600].price,
        r_value_text: __products[5600].r_value_text,
        rtm_construction_type: __products[5600].rtm_construction_type,
        rtm_insulation_type: __products[5600].rtm_insulation_type,
        widget_name: "[KULA] Raised Panel Options"
      },
      door_image_caption: { value: "Steel Overlay" },
      customization_title: { value: "Customization Options" },
      window_inserts: {
        carriage_house_four_p_madison: true,
        carriage_house_four_p_madison_double: true,
        carriage_house_four_p_stockton: true,
        carriage_house_four_p_stockton_double: true,
        carriage_house_madison: true,
        carriage_house_madison_double: true,
        carriage_house_stockton_double: true,
        carriage_house_stockton_single: true,
        carriage_house_two_p_madison: true,
        carriage_house_two_p_madison_double: true,
        carriage_house_two_p_stockton: true,
        carriage_house_two_p_stockton_double: true,
        cascade_short: false,
        cathedral_short: false,
        eight_piece_sunburst: false,
        five_piece_sunburst: false,
        four_piece_sunburst: false,
        long_cascade: false,
        long_four_piece_arched_madison: false,
        long_four_piece_arched_stockton: false,
        long_four_piece_sunburst: false,
        long_madison: false,
        long_praire: false,
        long_sherwood: false,
        long_stockton: false,
        long_three_piece_arched_madison: false,
        long_three_piece_arched_stockton: false,
        long_three_piece_sunburst: false,
        long_two_piece_arched_madison: false,
        long_two_piece_arched_stockton: false,
        long_two_piece_sunburst: false,
        long_waterton: false,
        module_id: 2421584,
        prairie_short: false,
        seven_piece_sunburst: false,
        sherwood: false,
        six_piece_sunburst: false,
        stockton_short: false,
        waterton_short: false,
        widget_name: "Window Inserts"
      },
      designer_glass: {
        display_designer_glass_title: false,
        florence_short: false,
        hampton_short: false,
        hawthorne_platinum_short: false,
        hawthorne_short: false,
        lasalle: false,
        module_id: 2452105,
        newport_short: false,
        somerset_brass_short: false,
        somerset_platinum_short: false,
        temple_short: false,
        widget_name: "Designer Glass"
      },
      glass_options: {
        frosted_short: true,
        glue_chip_short: true,
        module_id: 2470253,
        obscure_short: true,
        plain_short: true,
        seeded: true,
        tinted_short: true,
        widget_name: "Glass Options"
      },
      kula_color_options: {
        almond: true,
        black: false,
        bronze: false,
        brown: false,
        desert_tan: false,
        evergreen: false,
        gray: false,
        module_id: 2210014,
        sandstone: true,
        show_color_options_title: true,
        white: true,
        widget_name: "[KULA] Color Options"
      },
      rtm_additional_text: {
        custom_widget_id: 5808245394,
        field_types: { additional_text: "boolean", rich_text: "richtext" },
        module_id: 2906367,
        per_widget_wrapper_html: "",
        tag: "custom_widget",
        type: "custom_widget",
        widget_name: "[RTM] Additional Text",
        wrapping_html: ""
      },
      model_number_used_in_algolia_search: { value: "5600" }
    }
  },
  {
    url:
      "https://www.chiohd.com/homeowners/garage-doors/overlay-carriage-house/5700",
    data: {
      image_gallery: {
        auto_advance: true,
        caption_position: "below",
        display_mode: "thumbnail",
        lightbox: false,
        lightboxRows: 3,
        loop_slides: true,
        num_seconds: 5,
        only_thumbnails: false,
        show_pagination: true,
        sizing: "static",
        slides: [
          {
            alt_text: "5700 Overlay",
            caption: "",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Overlay/Models/5700-1.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          },
          {
            alt_text: "5700 Overlay",
            caption: "",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Overlay/Models/5700-2.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          },
          {
            alt_text: "5700 Overlay",
            caption: "",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Overlay/Models/5700-3.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          },
          {
            alt_text: "5700 Overlay",
            caption: "",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Overlay/Models/5700-4.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          },
          {
            alt_text: "5700 Overlay",
            caption: "",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Overlay/Models/5700-5.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          }
        ],
        transition: "slide",
        with_thumbnail_nav: true
      },
      kula_woodtone_options: {
        cedar: true,
        classic: false,
        dark_oak: false,
        display_woodtone_options_title: true,
        driftwood: false,
        light_oak: false,
        mahogany: true,
        modern: false,
        module_id: 2291028,
        walnut: false,
        widget_name: "[KULA] Woodtone Options"
      },
      product_number: { header_tag: null, value: "5700" },
      product_name: { value: __products[5700].product_family },
      door_image: {
        alt: "chi-cho-wood-one-car.png",
        height: 214,
        img_alt: "chi-cho-wood-one-car.png",
        img_load_error: false,
        link: "",
        open_in_new_tab: false,
        original_height: 214,
        original_width: 269,
        src: "https://cdn2.hubspot.net/hubfs/2029938/chi-cho-wood-one-car.png",
        width: 269
      },
      kula_raised_panel_options: {
        backing_text: __products[5700].section_material,
        door_style_text: __products[5700].panel_style,
        family_brochure_link:
          '\u003Ca href="' +
          __products[5700].family_brochure_link +
          '" target="_blank"\u003EDownload Brochure\u003C/a\u003E',
        model_flyer_link:
          '\u003Ca href="' +
          __products[5700].model_flyer_link +
          '" target="_blank"\u003EDownload Flyer\u003C/a\u003E',
        module_id: 2291134,
        price: __products[5700].price,
        r_value_text: __products[5700].r_value_text,
        rtm_construction_type: __products[5700].rtm_construction_type,
        rtm_insulation_type: __products[5700].rtm_insulation_type,
        widget_name: "[KULA] Raised Panel Options"
      },
      door_image_caption: { value: "Wood Overlay" },
      customization_title: { value: "Customization Options" },
      window_inserts: {
        carriage_house_four_p_madison: true,
        carriage_house_four_p_madison_double: true,
        carriage_house_four_p_stockton: true,
        carriage_house_four_p_stockton_double: true,
        carriage_house_madison: true,
        carriage_house_madison_double: true,
        carriage_house_stockton_double: true,
        carriage_house_stockton_single: true,
        carriage_house_two_p_madison: true,
        carriage_house_two_p_madison_double: true,
        carriage_house_two_p_stockton: true,
        carriage_house_two_p_stockton_double: true,
        cascade_short: false,
        cathedral_short: false,
        eight_piece_sunburst: false,
        five_piece_sunburst: false,
        four_piece_sunburst: false,
        long_cascade: false,
        long_four_piece_arched_madison: false,
        long_four_piece_arched_stockton: false,
        long_four_piece_sunburst: false,
        long_madison: false,
        long_praire: false,
        long_sherwood: false,
        long_stockton: false,
        long_three_piece_arched_madison: false,
        long_three_piece_arched_stockton: false,
        long_three_piece_sunburst: false,
        long_two_piece_arched_madison: false,
        long_two_piece_arched_stockton: false,
        long_two_piece_sunburst: false,
        long_waterton: false,
        module_id: 2421584,
        prairie_short: false,
        seven_piece_sunburst: false,
        sherwood: false,
        six_piece_sunburst: false,
        stockton_short: false,
        waterton_short: false,
        widget_name: "Window Inserts"
      },
      designer_glass: {
        display_designer_glass_title: false,
        florence_short: false,
        hampton_short: false,
        hawthorne_platinum_short: false,
        hawthorne_short: false,
        lasalle: false,
        module_id: 2452105,
        newport_short: false,
        somerset_brass_short: false,
        somerset_platinum_short: false,
        temple_short: false,
        widget_name: "Designer Glass"
      },
      glass_options: {
        frosted_short: true,
        glue_chip_short: true,
        module_id: 2470253,
        obscure_short: true,
        plain_short: true,
        seeded: true,
        tinted_short: true,
        widget_name: "Glass Options"
      },
      kula_color_options: {
        almond: false,
        black: false,
        bronze: false,
        brown: false,
        desert_tan: false,
        evergreen: false,
        gray: false,
        module_id: 2210014,
        sandstone: false,
        show_color_options_title: false,
        white: false,
        widget_name: "[KULA] Color Options"
      },
      rtm_additional_text: {
        custom_widget_id: 5808245394,
        field_types: { additional_text: "boolean", rich_text: "richtext" },
        module_id: 2906367,
        per_widget_wrapper_html: "",
        tag: "custom_widget",
        type: "custom_widget",
        widget_name: "[RTM] Additional Text",
        wrapping_html: ""
      },
      model_number_used_in_algolia_search: { value: "5700" }
    }
  },
  {
    url:
      "https://www.chiohd.com/homeowners/garage-doors/overlay-carriage-house/5800",
    data: {
      image_gallery: {
        auto_advance: true,
        caption_position: "below",
        display_mode: "thumbnail",
        lightbox: false,
        lightboxRows: 3,
        loop_slides: true,
        num_seconds: 5,
        only_thumbnails: false,
        show_pagination: true,
        sizing: "static",
        slides: [
          {
            alt_text: "5800 Overlay",
            caption: "",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Overlay/Models/5800-2.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          },
          {
            alt_text: "5800 Overlay",
            caption: "",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Overlay/Models/5800-1.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          },
          {
            alt_text: "5800 Overlay",
            caption: "",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Overlay/Models/5800-3.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          },
          {
            alt_text: "5800 Overlay",
            caption: "",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Overlay/Models/5800-4.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          }
        ],
        transition: "slide",
        with_thumbnail_nav: true
      },
      kula_woodtone_options: {
        cedar: false,
        classic: false,
        dark_oak: false,
        display_woodtone_options_title: false,
        driftwood: false,
        light_oak: false,
        mahogany: false,
        modern: false,
        module_id: 2291028,
        walnut: false,
        widget_name: "[KULA] Woodtone Options"
      },
      product_number: { header_tag: null, value: "5800" },
      product_name: { value: __products[5800].product_family },
      door_image: {
        alt: "chi-cho-wood-one-car.png",
        height: 214,
        img_alt: "chi-cho-wood-one-car.png",
        img_load_error: false,
        link: "",
        open_in_new_tab: false,
        original_height: 214,
        original_width: 269,
        src: "https://cdn2.hubspot.net/hubfs/2029938/chi-cho-wood-one-car.png",
        width: 269
      },
      kula_raised_panel_options: {
        backing_text: __products[5800].section_material,
        door_style_text: __products[5800].panel_style,
        family_brochure_link:
          '\u003Ca href="' +
          __products[5800].family_brochure_link +
          '" target="_blank"\u003EDownload Brochure\u003C/a\u003E',
        model_flyer_link:
          '\u003Ca href="' +
          __products[5800].model_flyer_link +
          '" target="_blank"\u003EDownload Flyer\u003C/a\u003E',
        module_id: 2291134,
        price: __products[5800].price,
        r_value_text: __products[5800].r_value_text,
        rtm_construction_type: __products[5800].rtm_construction_type,
        rtm_insulation_type: __products[5800].rtm_insulation_type,
        widget_name: "[KULA] Raised Panel Options"
      },
      door_image_caption: { value: "Fiberglass Overlay" },
      customization_title: { value: "Customization Options" },
      window_inserts: {
        carriage_house_four_p_madison: true,
        carriage_house_four_p_madison_double: true,
        carriage_house_four_p_stockton: true,
        carriage_house_four_p_stockton_double: true,
        carriage_house_madison: true,
        carriage_house_madison_double: true,
        carriage_house_stockton_double: true,
        carriage_house_stockton_single: true,
        carriage_house_two_p_madison: true,
        carriage_house_two_p_madison_double: true,
        carriage_house_two_p_stockton: true,
        carriage_house_two_p_stockton_double: true,
        cascade_short: false,
        cathedral_short: false,
        eight_piece_sunburst: false,
        five_piece_sunburst: false,
        four_piece_sunburst: false,
        long_cascade: false,
        long_four_piece_arched_madison: false,
        long_four_piece_arched_stockton: false,
        long_four_piece_sunburst: false,
        long_madison: false,
        long_praire: false,
        long_sherwood: false,
        long_stockton: false,
        long_three_piece_arched_madison: false,
        long_three_piece_arched_stockton: false,
        long_three_piece_sunburst: false,
        long_two_piece_arched_madison: false,
        long_two_piece_arched_stockton: false,
        long_two_piece_sunburst: false,
        long_waterton: false,
        module_id: 2421584,
        prairie_short: false,
        seven_piece_sunburst: false,
        sherwood: false,
        six_piece_sunburst: false,
        stockton_short: false,
        waterton_short: false,
        widget_name: "Window Inserts"
      },
      designer_glass: {
        display_designer_glass_title: false,
        florence_short: false,
        hampton_short: false,
        hawthorne_platinum_short: false,
        hawthorne_short: false,
        lasalle: false,
        module_id: 2452105,
        newport_short: false,
        somerset_brass_short: false,
        somerset_platinum_short: false,
        temple_short: false,
        widget_name: "Designer Glass"
      },
      glass_options: {
        frosted_short: true,
        glue_chip_short: true,
        module_id: 2470253,
        obscure_short: true,
        plain_short: true,
        seeded: true,
        tinted_short: true,
        widget_name: "Glass Options"
      },
      kula_color_options: {
        almond: true,
        black: false,
        bronze: false,
        brown: false,
        desert_tan: false,
        evergreen: false,
        gray: false,
        module_id: 2210014,
        sandstone: true,
        show_color_options_title: true,
        white: true,
        widget_name: "[KULA] Color Options"
      },
      rtm_additional_text: {
        custom_widget_id: 5808245394,
        field_types: { additional_text: "boolean", rich_text: "richtext" },
        module_id: 2906367,
        per_widget_wrapper_html: "",
        tag: "custom_widget",
        type: "custom_widget",
        widget_name: "[RTM] Additional Text",
        wrapping_html: ""
      },
      model_number_used_in_algolia_search: { value: "5800" }
    }
  },
  {
    url:
      "https://www.chiohd.com/homeowners/garage-doors/overlay-carriage-house/5400",
    data: {
      image_gallery: {
        auto_advance: true,
        caption_position: "below",
        display_mode: "thumbnail",
        lightbox: false,
        lightboxRows: 3,
        loop_slides: true,
        num_seconds: 5,
        only_thumbnails: false,
        show_pagination: true,
        sizing: "static",
        slides: [
          {
            alt_text: "5400 Overlay",
            caption: "",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Overlay/Models/5700-1.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          },
          {
            alt_text: "5400 Overlay",
            caption: "",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Overlay/Models/5700-2.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          },
          {
            alt_text: "5400 Overlay",
            caption: "",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Overlay/Models/5700-3.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          },
          {
            alt_text: "5400 Overlay",
            caption: "",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Overlay/Models/5700-4.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          },
          {
            alt_text: "5400 Overlay",
            caption: "",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Overlay/Models/5700-5.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          }
        ],
        transition: "slide",
        with_thumbnail_nav: true
      },
      kula_woodtone_options: {
        cedar: true,
        classic: false,
        dark_oak: false,
        display_woodtone_options_title: true,
        driftwood: false,
        light_oak: false,
        mahogany: true,
        modern: false,
        module_id: 2291028,
        walnut: false,
        widget_name: "[KULA] Woodtone Options"
      },
      product_number: { header_tag: null, value: "5400" },
      product_name: { value: __products[5400].product_family },
      door_image: {
        alt: "chi-cho-wood-one-car.png",
        height: 214,
        img_alt: "chi-cho-wood-one-car.png",
        img_load_error: false,
        link: "",
        open_in_new_tab: false,
        original_height: 214,
        original_width: 269,
        src: "https://cdn2.hubspot.net/hubfs/2029938/chi-cho-wood-one-car.png",
        width: 269
      },
      kula_raised_panel_options: {
        backing_text: __products[5400].section_material,
        door_style_text: __products[5400].panel_style,
        family_brochure_link:
          '\u003Ca href="' +
          __products[5400].family_brochure_link +
          '" target="_blank"\u003EDownload Brochure\u003C/a\u003E',
        model_flyer_link:
          '\u003Ca href="' +
          __products[5400].model_flyer_link +
          '" target="_blank"\u003EDownload Flyer\u003C/a\u003E',
        module_id: 2291134,
        price: __products[5400].price,
        r_value_text: __products[5400].r_value_text,
        rtm_construction_type: __products[5400].rtm_construction_type,
        rtm_insulation_type: __products[5400].rtm_insulation_type,
        widget_name: "[KULA] Raised Panel Options"
      },
      door_image_caption: { value: "Wood Overlay" },
      customization_title: { value: "Customization Options" },
      window_inserts: {
        carriage_house_four_p_madison: true,
        carriage_house_four_p_madison_double: true,
        carriage_house_four_p_stockton: true,
        carriage_house_four_p_stockton_double: true,
        carriage_house_madison: true,
        carriage_house_madison_double: true,
        carriage_house_stockton_double: true,
        carriage_house_stockton_single: true,
        carriage_house_two_p_madison: true,
        carriage_house_two_p_madison_double: true,
        carriage_house_two_p_stockton: true,
        carriage_house_two_p_stockton_double: true,
        cascade_short: false,
        cathedral_short: false,
        eight_piece_sunburst: false,
        five_piece_sunburst: false,
        four_piece_sunburst: false,
        long_cascade: false,
        long_four_piece_arched_madison: false,
        long_four_piece_arched_stockton: false,
        long_four_piece_sunburst: false,
        long_madison: false,
        long_praire: false,
        long_sherwood: false,
        long_stockton: false,
        long_three_piece_arched_madison: false,
        long_three_piece_arched_stockton: false,
        long_three_piece_sunburst: false,
        long_two_piece_arched_madison: false,
        long_two_piece_arched_stockton: false,
        long_two_piece_sunburst: false,
        long_waterton: false,
        module_id: 2421584,
        prairie_short: false,
        seven_piece_sunburst: false,
        sherwood: false,
        six_piece_sunburst: false,
        stockton_short: false,
        waterton_short: false,
        widget_name: "Window Inserts"
      },
      designer_glass: {
        display_designer_glass_title: false,
        florence_short: false,
        hampton_short: false,
        hawthorne_platinum_short: false,
        hawthorne_short: false,
        lasalle: false,
        module_id: 2452105,
        newport_short: false,
        somerset_brass_short: false,
        somerset_platinum_short: false,
        temple_short: false,
        widget_name: "Designer Glass"
      },
      glass_options: {
        frosted_short: true,
        glue_chip_short: true,
        module_id: 2470253,
        obscure_short: true,
        plain_short: true,
        seeded: true,
        tinted_short: true,
        widget_name: "Glass Options"
      },
      kula_color_options: {
        almond: false,
        black: false,
        bronze: false,
        brown: false,
        desert_tan: false,
        evergreen: false,
        gray: false,
        module_id: 2210014,
        sandstone: false,
        show_color_options_title: false,
        white: false,
        widget_name: "[KULA] Color Options"
      },
      rtm_additional_text: {
        custom_widget_id: 5808245394,
        field_types: { additional_text: "boolean", rich_text: "richtext" },
        module_id: 2906367,
        per_widget_wrapper_html: "",
        tag: "custom_widget",
        type: "custom_widget",
        widget_name: "[RTM] Additional Text",
        wrapping_html: ""
      },
      model_number_used_in_algolia_search: { value: "5400" }
    }
  },
  {
    url:
      "https://www.chiohd.com/homeowners/garage-doors/stamped-carriage-house/5951",
    data: {
      image_gallery: {
        auto_advance: true,
        caption_position: "superimpose",
        display_mode: "thumbnail",
        lightbox: false,
        lightboxRows: 3,
        loop_slides: true,
        num_seconds: 5,
        only_thumbnails: false,
        redirectUrl:
          "https://app.hubspot.com/content/2029938/edit-beta/5693430975",
        show_pagination: true,
        sizing: "static",
        slides: [
          {
            alt_text: "Small (72dpi)-59CH_CHI0005.jpg",
            caption: "",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Stamped/Models/Small%20(72dpi)-59CH_CHI0005.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          },
          {
            alt_text: "Small (72dpi)-59CH_CHI0003.jpg",
            caption: "",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Stamped/Models/Small%20(72dpi)-59CH_CHI0003.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          }
        ],
        transition: "slide",
        with_thumbnail_nav: true
      },
      kula_woodtone_options: {
        cedar: false,
        classic: true,
        dark_oak: false,
        display_woodtone_options_title: true,
        driftwood: false,
        light_oak: false,
        mahogany: false,
        modern: true,
        module_id: 2291028,
        walnut: false,
        widget_name: "[KULA] Woodtone Options"
      },
      product_number: { header_tag: null, value: "5951" },
      product_name: {
        header_tag: null,
        value: __products[5951].product_family
      },
      door_image: {
        alt: "chi-59-sch-one-car.png",
        height: 214,
        img_alt: "chi-59-sch-one-car.png",
        img_load_error: false,
        link: "",
        open_in_new_tab: false,
        original_height: 214,
        original_width: 270,
        src: "https://cdn2.hubspot.net/hubfs/2029938/chi-59-sch-one-car.png",
        width: 270
      },
      kula_raised_panel_options: {
        backing_text: __products[5951].section_material,
        door_style_text: __products[5951].panel_style,
        family_brochure_link:
          '\u003Ca href="' +
          __products[5951].family_brochure_link +
          '" target="_blank"\u003EDownload Brochure\u003C/a\u003E',
        model_flyer_link:
          '\u003Ca href="' +
          __products[5951].model_flyer_link +
          '" target="_blank"\u003EDownload Flyer\u003C/a\u003E',
        module_id: 2291134,
        price: __products[5951].price,
        r_value_text: __products[5951].r_value_text,
        rtm_construction_type: __products[5951].rtm_construction_type,
        rtm_insulation_type: __products[5951].rtm_insulation_type,
        widget_name: "[KULA] Raised Panel Options"
      },
      door_image_caption: { value: "Long Panel" },
      customization_title: { value: "Customization Options" },
      window_inserts: {
        cascade_short: false,
        cathedral_short: false,
        eight_piece_sunburst: false,
        five_piece_sunburst: false,
        four_piece_sunburst: false,
        long_cascade: true,
        long_four_piece_arched_madison: true,
        long_four_piece_arched_stockton: true,
        long_four_piece_sunburst: false,
        long_madison: true,
        long_praire: false,
        long_sherwood: false,
        long_stockton: true,
        long_three_piece_arched_madison: true,
        long_three_piece_arched_stockton: true,
        long_three_piece_sunburst: false,
        long_two_piece_arched_madison: true,
        long_two_piece_arched_stockton: true,
        long_two_piece_sunburst: false,
        long_waterton: false,
        module_id: 2421584,
        prairie_short: false,
        seven_piece_sunburst: false,
        sherwood: false,
        six_piece_sunburst: false,
        stockton_short: false,
        waterton_short: false,
        widget_name: "Window Inserts"
      },
      designer_glass: {
        display_designer_glass_title: false,
        florence_short: false,
        hampton_short: false,
        hawthorne_platinum_short: false,
        hawthorne_short: false,
        lasalle: false,
        module_id: 2452105,
        newport_short: false,
        somerset_brass_short: false,
        somerset_platinum_short: false,
        temple_short: false,
        widget_name: "Designer Glass"
      },
      glass_options: {
        frosted_short: true,
        glue_chip_short: true,
        module_id: 2470253,
        obscure_short: true,
        plain_short: true,
        seeded: false,
        tinted_short: true,
        widget_name: "Glass Options"
      },
      kula_color_options: {
        almond: true,
        black: false,
        bronze: false,
        brown: true,
        desert_tan: true,
        evergreen: false,
        gray: false,
        module_id: 2210014,
        redirectUrl:
          "https://app.hubspot.com/content/2029938/edit-beta/5690667477",
        sandstone: true,
        show_color_options_title: true,
        white: true,
        widget_name: "[KULA] Color Options"
      },
      rtm_additional_text: {
        custom_widget_id: 5808245394,
        field_types: { additional_text: "boolean", rich_text: "richtext" },
        module_id: 2906367,
        per_widget_wrapper_html: "",
        tag: "custom_widget",
        type: "custom_widget",
        widget_name: "[RTM] Additional Text",
        wrapping_html: ""
      },
      model_number_used_in_algolia_search: { value: "5951" }
    }
  },
  {
    url: "https://www.chiohd.com/homeowners/garage-doors/raised-panel/4206",
    data: {
      image_gallery: {
        auto_advance: true,
        caption_position: "superimpose",
        display_mode: "thumbnail",
        lightbox: false,
        lightboxRows: 3,
        loop_slides: true,
        num_seconds: 5,
        only_thumbnails: false,
        show_pagination: true,
        sizing: "static",
        slides: [
          {
            alt_text: "Small (72dpi)-42RP_CHI0012.jpg",
            caption: "",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Raised-Panel/Models/Small%20(72dpi)-42RP_CHI0012.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          },
          {
            alt_text: "Small (72dpi)-CHI081513_0407.jpg",
            caption: "",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Raised-Panel/Models/Small%20(72dpi)-CHI081513_0407.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          },
          {
            alt_text: "Raised-Panel-White-Long.jpg",
            caption: "White",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Raised-Panel/Raised-Panel-White-Long.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: true
          },
          {
            alt_text: "Raised-Panel-Almond-Long.jpg",
            caption: "Almond",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Raised-Panel/Raised-Panel-Almond-Long.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: true
          },
          {
            alt_text: "Raised-Panel-Sandstone-Long.jpg",
            caption: "Sandstone",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Raised-Panel/Raised-Panel-Sandstone-Long.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: true
          }
        ],
        transition: "slide",
        with_thumbnail_nav: true
      },
      kula_woodtone_options: {
        cedar: false,
        classic: false,
        dark_oak: false,
        display_woodtone_options_title: false,
        driftwood: false,
        light_oak: false,
        mahogany: false,
        modern: false,
        module_id: 2291028,
        walnut: false,
        widget_name: "[KULA] Woodtone Options"
      },
      product_number: { header_tag: null, value: "4206" },
      product_name: { value: __products[4206].product_family },
      door_image: {
        alt: "Long-Panel",
        height: 214,
        img_alt: "chi-42-rp-one-car.png",
        img_load_error: false,
        link: "",
        open_in_new_tab: false,
        original_height: 214,
        original_width: 270,
        src: "https://cdn2.hubspot.net/hubfs/2029938/chi-42-rp-one-car.png",
        width: 270
      },
      kula_raised_panel_options: {
        backing_text: __products[4206].section_material,
        door_style_text: __products[4206].panel_style,
        family_brochure_link:
          '\u003Ca href="' +
          __products[4206].family_brochure_link +
          '" target="_blank"\u003EDownload Brochure\u003C/a\u003E',
        model_flyer_link:
          '\u003Ca href="' +
          __products[4206].model_flyer_link +
          '" target="_blank"\u003EDownload Flyer\u003C/a\u003E',
        module_id: 2291134,
        price: __products[4206].price,
        r_value_text: __products[4206].r_value_text,
        rtm_construction_type: __products[4206].rtm_construction_type,
        rtm_insulation_type: __products[4206].rtm_insulation_type,
        widget_name: "[KULA] Raised Panel Options"
      },
      door_image_caption: { value: "Long Panel" },
      customization_title: { value: "Customization Options" },
      window_inserts: {
        cascade_short: false,
        cathedral_short: false,
        eight_piece_sunburst: false,
        five_piece_sunburst: false,
        four_piece_sunburst: false,
        long_cascade: true,
        long_four_piece_arched_madison: true,
        long_four_piece_arched_stockton: true,
        long_four_piece_sunburst: true,
        long_madison: true,
        long_praire: true,
        long_sherwood: true,
        long_stockton: true,
        long_three_piece_sunburst: true,
        long_two_piece_arched_madison: true,
        long_two_piece_arched_stockton: true,
        long_two_piece_sunburst: true,
        long_waterton: true,
        module_id: 2421584,
        prairie_short: false,
        seven_piece_sunburst: false,
        sherwood: false,
        six_piece_sunburst: false,
        stockton_short: false,
        waterton_short: false,
        widget_name: "Window Inserts"
      },
      designer_glass: {
        custom_widget_id: 5561952058,
        field_types: {
          florence_short: "boolean",
          hampton_short: "boolean",
          hawthorne_platinum_short: "boolean",
          hawthorne_short: "boolean",
          newport_short: "boolean",
          somerset_brass_short: "boolean",
          somerset_platinum_short: "boolean",
          temple_short: "boolean"
        },
        module_id: 2452105,
        per_widget_wrapper_html: "",
        tag: "custom_widget",
        type: "custom_widget",
        widget_name: "Designer Glass",
        wrapping_html: ""
      },
      glass_options: {
        custom_widget_id: 5562484302,
        field_types: {
          frosted_short: "boolean",
          glue_chip_short: "boolean",
          plain_short: "boolean",
          tinted_short: "boolean"
        },
        module_id: 2470253,
        per_widget_wrapper_html: "",
        tag: "custom_widget",
        type: "custom_widget",
        widget_name: "Glass Options",
        wrapping_html: ""
      },
      kula_color_options: {
        almond: true,
        black: false,
        bronze: false,
        brown: false,
        desert_tan: false,
        evergreen: false,
        gray: false,
        module_id: 2210014,
        sandstone: true,
        show_color_options_title: true,
        white: true,
        widget_name: "[KULA] Color Options"
      },
      rtm_additional_text: {
        custom_widget_id: 5808245394,
        field_types: { additional_text: "boolean", rich_text: "richtext" },
        module_id: 2906367,
        per_widget_wrapper_html: "",
        tag: "custom_widget",
        type: "custom_widget",
        widget_name: "[RTM] Additional Text",
        wrapping_html: ""
      },
      model_number_used_in_algolia_search: { value: "4206" }
    }
  },
  {
    url: "https://www.chiohd.com/homeowners/garage-doors/recessed-panel/2291f",
    data: {
      image_gallery: {
        auto_advance: true,
        caption_position: "below",
        display_mode: "thumbnail",
        lightbox: false,
        lightboxRows: 3,
        loop_slides: true,
        num_seconds: 5,
        only_thumbnails: false,
        show_pagination: true,
        sizing: "static",
        slides: [
          {
            alt_text: "2291-1.jpg",
            caption: "",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Recessed-Panel/Models/2291-1.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          },
          {
            alt_text: "2291-2.jpg",
            caption: "",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Recessed-Panel/Models/2291-2.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          }
        ],
        transition: "slide",
        with_thumbnail_nav: true
      },
      kula_woodtone_options: {
        cedar: false,
        classic: false,
        dark_oak: false,
        display_woodtone_options_title: false,
        driftwood: false,
        light_oak: false,
        mahogany: false,
        modern: false,
        module_id: 2291028,
        walnut: false,
        widget_name: "[KULA] Woodtone Options"
      },
      product_number: { header_tag: null, value: "2291" },
      product_name: { value: __products[2291].product_family },
      door_image: {
        alt: "chi-2294-flush-one-car.png",
        height: 214,
        img_alt: "chi-2294-flush-one-car.png",
        img_load_error: false,
        link: "",
        open_in_new_tab: false,
        original_height: 214,
        original_width: 270,
        src:
          "https://cdn2.hubspot.net/hubfs/2029938/chi-2294-flush-one-car.png",
        width: 270
      },
      kula_raised_panel_options: {
        backing_text: __products[2291].section_material,
        door_style_text: __products[2291].panel_style,
        family_brochure_link:
          '\u003Ca href="' +
          __products[2291].family_brochure_link +
          '" target="_blank"\u003EDownload Brochure\u003C/a\u003E',
        model_flyer_link:
          '\u003Ca href="' +
          __products[2291].model_flyer_link +
          '" target="_blank"\u003EDownload Flyer\u003C/a\u003E',
        module_id: 2291134,
        price: __products[2291].price,
        r_value_text: __products[2291].r_value_text,
        rtm_construction_type: __products[2291].rtm_construction_type,
        rtm_insulation_type: __products[2291].rtm_insulation_type,
        widget_name: "[KULA] Raised Panel Options"
      },
      door_image_caption: { value: "Flush Panel" },
      customization_title: { value: "Customization Options" },
      window_inserts: {
        carriage_house_four_p_madison: false,
        carriage_house_four_p_madison_double: false,
        carriage_house_four_p_stockton: false,
        carriage_house_four_p_stockton_double: false,
        carriage_house_madison: false,
        carriage_house_madison_double: false,
        carriage_house_stockton_double: false,
        carriage_house_stockton_single: false,
        carriage_house_two_p_madison: false,
        carriage_house_two_p_madison_double: false,
        carriage_house_two_p_stockton: false,
        carriage_house_two_p_stockton_double: false,
        cascade_short: false,
        cathedral_short: false,
        eight_piece_sunburst: false,
        five_piece_sunburst: false,
        four_piece_sunburst: false,
        long_cascade: false,
        long_four_piece_arched_madison: false,
        long_four_piece_arched_stockton: false,
        long_four_piece_sunburst: false,
        long_madison: false,
        long_praire: false,
        long_sherwood: false,
        long_stockton: false,
        long_three_piece_arched_madison: false,
        long_three_piece_arched_stockton: false,
        long_three_piece_sunburst: false,
        long_two_piece_arched_madison: false,
        long_two_piece_arched_stockton: false,
        long_two_piece_sunburst: false,
        long_waterton: false,
        module_id: 2421584,
        prairie_short: false,
        recessed_madison_combo: true,
        recessed_madison_long: true,
        recessed_madison_short: true,
        recessed_stockton_combo: true,
        recessed_stockton_long: true,
        recessed_stockton_short: true,
        seven_piece_sunburst: false,
        sherwood: false,
        six_piece_sunburst: false,
        stockton_short: false,
        waterton_short: false,
        widget_name: "Window Inserts"
      },
      designer_glass: {
        display_designer_glass_title: false,
        florence_short: false,
        hampton_short: false,
        hawthorne_platinum_short: false,
        hawthorne_short: false,
        lasalle: false,
        module_id: 2452105,
        newport_short: false,
        somerset_brass_short: false,
        somerset_platinum_short: false,
        temple_short: false,
        widget_name: "Designer Glass"
      },
      glass_options: {
        frosted_short: true,
        glue_chip_short: true,
        module_id: 2470253,
        obscure_short: true,
        plain_short: true,
        seeded: true,
        tinted_short: true,
        widget_name: "Glass Options"
      },
      kula_color_options: {
        almond: true,
        black: false,
        bronze: false,
        brown: false,
        desert_tan: false,
        evergreen: false,
        gray: false,
        module_id: 2210014,
        sandstone: true,
        show_color_options_title: true,
        white: true,
        widget_name: "[KULA] Color Options"
      },
      rtm_additional_text: {
        custom_widget_id: 5808245394,
        field_types: { additional_text: "boolean", rich_text: "richtext" },
        module_id: 2906367,
        per_widget_wrapper_html: "",
        tag: "custom_widget",
        type: "custom_widget",
        widget_name: "[RTM] Additional Text",
        wrapping_html: ""
      },
      model_number_used_in_algolia_search: { value: "2291" }
    }
  },
  {
    url: "https://www.chiohd.com/homeowners/garage-doors/recessed-panel/2294",
    data: {
      image_gallery: {
        auto_advance: true,
        caption_position: "below",
        display_mode: "thumbnail",
        lightbox: false,
        lightboxRows: 3,
        loop_slides: true,
        num_seconds: 5,
        only_thumbnails: false,
        show_pagination: true,
        sizing: "static",
        slides: [
          {
            alt_text: "2294-1.jpg",
            caption: "",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Recessed-Panel/Models/2294-1.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          },
          {
            alt_text: "2294-2.jpg",
            caption: "",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Recessed-Panel/Models/2294-2.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          }
        ],
        transition: "slide",
        with_thumbnail_nav: true
      },
      kula_woodtone_options: {
        cedar: false,
        classic: false,
        dark_oak: false,
        display_woodtone_options_title: false,
        driftwood: false,
        light_oak: false,
        mahogany: false,
        modern: false,
        module_id: 2291028,
        walnut: false,
        widget_name: "[KULA] Woodtone Options"
      },
      product_number: { header_tag: null, value: "2294" },
      product_name: { value: __products[2294].product_family },
      door_image: {
        alt: "chi-2294-one-car.png",
        height: 214,
        img_alt: "chi-2294-one-car.png",
        img_load_error: false,
        link: "",
        open_in_new_tab: false,
        original_height: 214,
        original_width: 270,
        src: "https://cdn2.hubspot.net/hubfs/2029938/chi-2294-one-car.png",
        width: 270
      },
      kula_raised_panel_options: {
        backing_text: __products[2294].section_material,
        door_style_text: __products[2294].panel_style,
        family_brochure_link:
          '\u003Ca href="' +
          __products[2294].family_brochure_link +
          '" target="_blank"\u003EDownload Brochure\u003C/a\u003E',
        model_flyer_link:
          '\u003Ca href="' +
          __products[2294].model_flyer_link +
          '" target="_blank"\u003EDownload Flyer\u003C/a\u003E',
        module_id: 2291134,
        price: __products[2294].price,
        r_value_text: __products[2294].r_value_text,
        rtm_construction_type: __products[2294].rtm_construction_type,
        rtm_insulation_type: __products[2294].rtm_insulation_type,
        widget_name: "[KULA] Raised Panel Options"
      },
      door_image_caption: { value: "Long Panel" },
      customization_title: { value: "Customization Options" },
      window_inserts: {
        carriage_house_four_p_madison: false,
        carriage_house_four_p_madison_double: false,
        carriage_house_four_p_stockton: false,
        carriage_house_four_p_stockton_double: false,
        carriage_house_madison: false,
        carriage_house_madison_double: false,
        carriage_house_stockton_double: false,
        carriage_house_stockton_single: false,
        carriage_house_two_p_madison: false,
        carriage_house_two_p_madison_double: false,
        carriage_house_two_p_stockton: false,
        carriage_house_two_p_stockton_double: false,
        cascade_short: false,
        cathedral_short: false,
        eight_piece_sunburst: false,
        five_piece_sunburst: false,
        four_piece_sunburst: false,
        long_cascade: false,
        long_four_piece_arched_madison: false,
        long_four_piece_arched_stockton: false,
        long_four_piece_sunburst: false,
        long_madison: false,
        long_praire: false,
        long_sherwood: false,
        long_stockton: false,
        long_three_piece_arched_madison: false,
        long_three_piece_arched_stockton: false,
        long_three_piece_sunburst: false,
        long_two_piece_arched_madison: false,
        long_two_piece_arched_stockton: false,
        long_two_piece_sunburst: false,
        long_waterton: false,
        module_id: 2421584,
        prairie_short: false,
        recessed_madison_combo: true,
        recessed_madison_long: true,
        recessed_madison_short: true,
        recessed_stockton_combo: true,
        recessed_stockton_long: true,
        recessed_stockton_short: true,
        seven_piece_sunburst: false,
        sherwood: false,
        six_piece_sunburst: false,
        stockton_short: false,
        waterton_short: false,
        widget_name: "Window Inserts"
      },
      designer_glass: {
        display_designer_glass_title: false,
        florence_short: false,
        hampton_short: false,
        hawthorne_platinum_short: false,
        hawthorne_short: false,
        lasalle: false,
        module_id: 2452105,
        newport_short: false,
        somerset_brass_short: false,
        somerset_platinum_short: false,
        temple_short: false,
        widget_name: "Designer Glass"
      },
      glass_options: {
        frosted_short: true,
        glue_chip_short: true,
        module_id: 2470253,
        obscure_short: true,
        plain_short: true,
        seeded: true,
        tinted_short: true,
        widget_name: "Glass Options"
      },
      kula_color_options: {
        almond: true,
        black: false,
        bronze: false,
        brown: false,
        desert_tan: false,
        evergreen: false,
        gray: false,
        module_id: 2210014,
        sandstone: true,
        show_color_options_title: true,
        white: true,
        widget_name: "[KULA] Color Options"
      },
      rtm_additional_text: {
        custom_widget_id: 5808245394,
        field_types: { additional_text: "boolean", rich_text: "richtext" },
        module_id: 2906367,
        per_widget_wrapper_html: "",
        tag: "custom_widget",
        type: "custom_widget",
        widget_name: "[RTM] Additional Text",
        wrapping_html: ""
      },
      model_number_used_in_algolia_search: { value: "2294" }
    }
  },
  {
    url: "https://www.chiohd.com/homeowners/garage-doors/recessed-panel/2296",
    data: {
      image_gallery: {
        auto_advance: true,
        caption_position: "below",
        display_mode: "thumbnail",
        lightbox: false,
        lightboxRows: 3,
        loop_slides: true,
        num_seconds: 5,
        only_thumbnails: false,
        show_pagination: true,
        sizing: "static",
        slides: [
          {
            alt_text: "2296-3.jpg",
            caption: "",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Recessed-Panel/Models/2296-3.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          },
          {
            alt_text: "2296-2.jpg",
            caption: "",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Recessed-Panel/Models/2296-2.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          },
          {
            alt_text: "2296-1.jpg",
            caption: "",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Recessed-Panel/Models/2296-1.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          }
        ],
        transition: "slide",
        with_thumbnail_nav: true
      },
      kula_woodtone_options: {
        cedar: false,
        classic: false,
        dark_oak: false,
        display_woodtone_options_title: false,
        driftwood: false,
        light_oak: false,
        mahogany: false,
        modern: false,
        module_id: 2291028,
        walnut: false,
        widget_name: "[KULA] Woodtone Options"
      },
      product_number: { header_tag: null, value: "2296" },
      product_name: { value: __products[2296].product_family },
      door_image: {
        alt: "chi-2296-one-car.png",
        height: 214,
        img_alt: "chi-2296-one-car.png",
        img_load_error: false,
        link: "",
        open_in_new_tab: false,
        original_height: 214,
        original_width: 270,
        src: "https://cdn2.hubspot.net/hubfs/2029938/chi-2296-one-car.png",
        width: 270
      },
      kula_raised_panel_options: {
        backing_text: __products[2296].section_material,
        door_style_text: __products[2296].panel_style,
        family_brochure_link:
          '\u003Ca href="' +
          __products[2296].family_brochure_link +
          '" target="_blank"\u003EDownload Brochure\u003C/a\u003E',
        model_flyer_link:
          '\u003Ca href="' +
          __products[2296].model_flyer_link +
          '" target="_blank"\u003EDownload Flyer\u003C/a\u003E',
        module_id: 2291134,
        price: __products[2296].price,
        r_value_text: __products[2296].r_value_text,
        rtm_construction_type: __products[2296].rtm_construction_type,
        rtm_insulation_type: __products[2296].rtm_insulation_type,
        widget_name: "[KULA] Raised Panel Options"
      },
      door_image_caption: { value: "Combo Panel" },
      customization_title: { value: "Customization Options" },
      window_inserts: {
        carriage_house_four_p_madison: false,
        carriage_house_four_p_madison_double: false,
        carriage_house_four_p_stockton: false,
        carriage_house_four_p_stockton_double: false,
        carriage_house_madison: false,
        carriage_house_madison_double: false,
        carriage_house_stockton_double: false,
        carriage_house_stockton_single: false,
        carriage_house_two_p_madison: false,
        carriage_house_two_p_madison_double: false,
        carriage_house_two_p_stockton: false,
        carriage_house_two_p_stockton_double: false,
        cascade_short: false,
        cathedral_short: false,
        eight_piece_sunburst: false,
        five_piece_sunburst: false,
        four_piece_sunburst: false,
        long_cascade: false,
        long_four_piece_arched_madison: false,
        long_four_piece_arched_stockton: false,
        long_four_piece_sunburst: false,
        long_madison: false,
        long_praire: false,
        long_sherwood: false,
        long_stockton: false,
        long_three_piece_arched_madison: false,
        long_three_piece_arched_stockton: false,
        long_three_piece_sunburst: false,
        long_two_piece_arched_madison: false,
        long_two_piece_arched_stockton: false,
        long_two_piece_sunburst: false,
        long_waterton: false,
        module_id: 2421584,
        prairie_short: false,
        recessed_madison_combo: true,
        recessed_madison_long: true,
        recessed_madison_short: true,
        recessed_stockton_combo: true,
        recessed_stockton_long: true,
        recessed_stockton_short: true,
        seven_piece_sunburst: false,
        sherwood: false,
        six_piece_sunburst: false,
        stockton_short: false,
        waterton_short: false,
        widget_name: "Window Inserts"
      },
      designer_glass: {
        display_designer_glass_title: false,
        florence_short: false,
        hampton_short: false,
        hawthorne_platinum_short: false,
        hawthorne_short: false,
        lasalle: false,
        module_id: 2452105,
        newport_short: false,
        somerset_brass_short: false,
        somerset_platinum_short: false,
        temple_short: false,
        widget_name: "Designer Glass"
      },
      glass_options: {
        frosted_short: true,
        glue_chip_short: true,
        module_id: 2470253,
        obscure_short: true,
        plain_short: true,
        seeded: true,
        tinted_short: true,
        widget_name: "Glass Options"
      },
      kula_color_options: {
        almond: true,
        black: false,
        bronze: false,
        brown: false,
        desert_tan: false,
        evergreen: false,
        gray: false,
        module_id: 2210014,
        sandstone: true,
        show_color_options_title: true,
        white: true,
        widget_name: "[KULA] Color Options"
      },
      rtm_additional_text: {
        custom_widget_id: 5808245394,
        field_types: { additional_text: "boolean", rich_text: "richtext" },
        module_id: 2906367,
        per_widget_wrapper_html: "",
        tag: "custom_widget",
        type: "custom_widget",
        widget_name: "[RTM] Additional Text",
        wrapping_html: ""
      },
      model_number_used_in_algolia_search: { value: "2296" }
    }
  },
  {
    url: "https://www.chiohd.com/homeowners/garage-doors/recessed-panel/2298",
    data: {
      image_gallery: {
        auto_advance: true,
        caption_position: "below",
        display_mode: "thumbnail",
        lightbox: false,
        lightboxRows: 3,
        loop_slides: true,
        num_seconds: 5,
        only_thumbnails: false,
        show_pagination: true,
        sizing: "static",
        slides: [
          {
            alt_text: "2298-1.jpg",
            caption: "",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Recessed-Panel/Models/2298-1.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          },
          {
            alt_text: "2298-2.jpg",
            caption: "",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Recessed-Panel/Models/2298-2.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          },
          {
            alt_text: "2298-3.jpg",
            caption: "",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Recessed-Panel/Models/2298-3.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          }
        ],
        transition: "slide",
        with_thumbnail_nav: true
      },
      kula_woodtone_options: {
        cedar: false,
        classic: false,
        dark_oak: false,
        display_woodtone_options_title: false,
        driftwood: false,
        light_oak: false,
        mahogany: false,
        modern: false,
        module_id: 2291028,
        walnut: false,
        widget_name: "[KULA] Woodtone Options"
      },
      product_number: { header_tag: null, value: "2298" },
      product_name: { value: __products[2298].product_family },
      door_image: {
        alt: "chi-2298-one-car.png",
        height: 214,
        img_alt: "chi-2298-one-car.png",
        img_load_error: false,
        link: "",
        open_in_new_tab: false,
        original_height: 214,
        original_width: 270,
        src: "https://cdn2.hubspot.net/hubfs/2029938/chi-2298-one-car.png",
        width: 270
      },
      kula_raised_panel_options: {
        backing_text: __products[2298].section_material,
        door_style_text: __products[2298].panel_style,
        family_brochure_link:
          '\u003Ca href="' +
          __products[2298].family_brochure_link +
          '" target="_blank"\u003EDownload Brochure\u003C/a\u003E',
        model_flyer_link:
          '\u003Ca href="' +
          __products[2298].model_flyer_link +
          '" target="_blank"\u003EDownload Flyer\u003C/a\u003E',
        module_id: 2291134,
        price: __products[2298].price,
        r_value_text: __products[2298].r_value_text,
        rtm_construction_type: __products[2298].rtm_construction_type,
        rtm_insulation_type: __products[2298].rtm_insulation_type,
        widget_name: "[KULA] Raised Panel Options"
      },
      door_image_caption: { value: "Short Panel" },
      customization_title: { value: "Customization Options" },
      window_inserts: {
        carriage_house_four_p_madison: false,
        carriage_house_four_p_madison_double: false,
        carriage_house_four_p_stockton: false,
        carriage_house_four_p_stockton_double: false,
        carriage_house_madison: false,
        carriage_house_madison_double: false,
        carriage_house_stockton_double: false,
        carriage_house_stockton_single: false,
        carriage_house_two_p_madison: false,
        carriage_house_two_p_madison_double: false,
        carriage_house_two_p_stockton: false,
        carriage_house_two_p_stockton_double: false,
        cascade_short: false,
        cathedral_short: false,
        eight_piece_sunburst: false,
        five_piece_sunburst: false,
        four_piece_sunburst: false,
        long_cascade: false,
        long_four_piece_arched_madison: false,
        long_four_piece_arched_stockton: false,
        long_four_piece_sunburst: false,
        long_madison: false,
        long_praire: false,
        long_sherwood: false,
        long_stockton: false,
        long_three_piece_arched_madison: false,
        long_three_piece_arched_stockton: false,
        long_three_piece_sunburst: false,
        long_two_piece_arched_madison: false,
        long_two_piece_arched_stockton: false,
        long_two_piece_sunburst: false,
        long_waterton: false,
        module_id: 2421584,
        prairie_short: false,
        recessed_madison_combo: true,
        recessed_madison_long: true,
        recessed_madison_short: true,
        recessed_stockton_combo: true,
        recessed_stockton_long: true,
        recessed_stockton_short: true,
        seven_piece_sunburst: false,
        sherwood: false,
        six_piece_sunburst: false,
        stockton_short: false,
        waterton_short: false,
        widget_name: "Window Inserts"
      },
      designer_glass: {
        display_designer_glass_title: false,
        florence_short: false,
        hampton_short: false,
        hawthorne_platinum_short: false,
        hawthorne_short: false,
        lasalle: false,
        module_id: 2452105,
        newport_short: false,
        somerset_brass_short: false,
        somerset_platinum_short: false,
        temple_short: false,
        widget_name: "Designer Glass"
      },
      glass_options: {
        frosted_short: true,
        glue_chip_short: true,
        module_id: 2470253,
        obscure_short: true,
        plain_short: true,
        seeded: true,
        tinted_short: true,
        widget_name: "Glass Options"
      },
      kula_color_options: {
        almond: true,
        black: false,
        bronze: false,
        brown: false,
        desert_tan: false,
        evergreen: false,
        gray: false,
        module_id: 2210014,
        sandstone: true,
        show_color_options_title: true,
        white: true,
        widget_name: "[KULA] Color Options"
      },
      rtm_additional_text: {
        custom_widget_id: 5808245394,
        field_types: { additional_text: "boolean", rich_text: "richtext" },
        module_id: 2906367,
        per_widget_wrapper_html: "",
        tag: "custom_widget",
        type: "custom_widget",
        widget_name: "[RTM] Additional Text",
        wrapping_html: ""
      },
      model_number_used_in_algolia_search: { value: "2298" }
    }
  },
  {
    url: "https://www.chiohd.com/homeowners/garage-doors/flush-panel/2717",
    data: {
      image_gallery: {
        auto_advance: true,
        caption_position: "superimpose",
        display_mode: "thumbnail",
        lightbox: false,
        lightboxRows: 3,
        loop_slides: true,
        num_seconds: 5,
        only_thumbnails: false,
        show_pagination: true,
        sizing: "static",
        slides: [
          {
            alt_text: "Sterling-2.png",
            caption:
              "\u003Cstrong\u003ESterling, Model 2717\u003C/strong\u003E shown in Charcoal and tinted infinity glass",
            href: "",
            img_src:
              "https://www.chiohd.com/hubfs/Homeowner/Products/Sterling/Gallery/Sterling-2.png",
            link_url: "",
            open_in_new_tab: true,
            show_caption: true
          },
          {
            alt_text: "Sterling-3.png",
            caption: "",
            href: "",
            img_src:
              "https://www.chiohd.com/hubfs/Homeowner/Products/Sterling/Gallery/Sterling-3.png",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          },
          {
            alt_text: "Sterling-1.png",
            caption:
              "\u003Cstrong\u003ESterling, Model 2717\u003C/strong\u003E shown in Bone White and tinted infinity glass",
            href: "",
            img_src:
              "https://www.chiohd.com/hubfs/Homeowner/Products/Sterling/Gallery/Sterling-1.png",
            link_url: "",
            open_in_new_tab: true,
            show_caption: true
          }
        ],
        transition: "slide",
        with_thumbnail_nav: true
      },
      kula_woodtone_options: {
        cedar: false,
        classic: false,
        dark_oak: false,
        display_woodtone_options_title: false,
        driftwood: false,
        light_oak: false,
        mahogany: false,
        modern: false,
        module_id: 2291028,
        redirectUrl:
          "https://app.hubspot.com/content/2029938/edit-beta/6184014343",
        walnut: false,
        widget_name: "[KULA] Woodtone Options"
      },
      product_number: {
        header_tag: null,
        redirectUrl:
          "https://app.hubspot.com/content/2029938/edit-beta/6184014343",
        value: "2717"
      },
      product_name: {
        header_tag: null,
        value: __products[2717].product_family
      },
      door_image: {
        alt: "sterling-garage-door.png",
        height: 856,
        img_alt: "sterling-garage-door.png",
        img_load_error: false,
        link: "",
        open_in_new_tab: false,
        original_height: 856,
        original_width: 1082,
        src:
          "https://www.chiohd.com/hubfs/Homeowner/Products/Sterling/sterling-garage-door.png",
        width: 1082
      },
      kula_raised_panel_options: {
        backing_text: __products[2717].section_material,
        door_style_text: __products[2717].panel_style,
        family_brochure_link:
          '\u003Ca href="' +
          __products[2717].family_brochure_link +
          '" target="_blank"\u003EDownload Brochure\u003C/a\u003E',
        model_flyer_link:
          '\u003Ca href="' +
          __products[2717].model_flyer_link +
          '" target="_blank"\u003EDownload Flyer\u003C/a\u003E',
        module_id: 2291134,
        price: __products[2717].price,
        r_value_text: __products[2717].r_value_text,
        rtm_construction_type: __products[2717].rtm_construction_type,
        rtm_insulation_type: __products[2717].rtm_insulation_type,
        widget_name: "[KULA] Raised Panel Options"
      },
      door_image_caption: { value: "Sterling" },
      customization_title: { value: "Customization Options" },
      window_inserts: {
        carriage_house_four_p_madison: false,
        carriage_house_four_p_madison_double: false,
        carriage_house_four_p_stockton: false,
        carriage_house_four_p_stockton_double: false,
        carriage_house_madison: false,
        carriage_house_madison_double: false,
        carriage_house_stockton_double: false,
        carriage_house_stockton_single: false,
        carriage_house_two_p_madison: false,
        carriage_house_two_p_madison_double: false,
        carriage_house_two_p_stockton: false,
        carriage_house_two_p_stockton_double: false,
        cascade_short: false,
        cathedral_short: false,
        eight_piece_sunburst: false,
        five_piece_sunburst: false,
        four_piece_sunburst: false,
        long_cascade: false,
        long_four_piece_arched_madison: false,
        long_four_piece_arched_stockton: false,
        long_four_piece_sunburst: false,
        long_madison: false,
        long_praire: false,
        long_sherwood: false,
        long_stockton: false,
        long_three_piece_arched_madison: false,
        long_three_piece_arched_stockton: false,
        long_three_piece_sunburst: false,
        long_two_piece_arched_madison: false,
        long_two_piece_arched_stockton: false,
        long_two_piece_sunburst: false,
        long_waterton: false,
        module_id: 2421584,
        prairie_short: false,
        recessed_madison_combo: false,
        recessed_madison_long: false,
        recessed_madison_short: false,
        recessed_stockton_combo: false,
        recessed_stockton_long: false,
        recessed_stockton_short: false,
        seven_piece_sunburst: false,
        sherwood: false,
        show_window_insert_title: false,
        six_piece_sunburst: false,
        stockton_short: false,
        waterton_short: false,
        widget_name: "Window Inserts"
      },
      designer_glass: {
        display_designer_glass_title: false,
        florence_short: false,
        hampton_short: false,
        hawthorne_platinum_short: false,
        hawthorne_short: false,
        lasalle: false,
        module_id: 2452105,
        newport_short: false,
        somerset_brass_short: false,
        somerset_platinum_short: false,
        temple_short: false,
        widget_name: "Designer Glass"
      },
      glass_options: {
        frosted_short: false,
        glue_chip_short: false,
        module_id: 2470253,
        obscure_short: false,
        plain_short: false,
        seeded: false,
        tinted_short: true,
        widget_name: "Glass Options"
      },
      kula_color_options: {
        almond: true,
        aluminum: false,
        black: false,
        bronze: false,
        brown: false,
        desert_tan: false,
        evergreen: false,
        fiberglass_mahogany: false,
        fiberglass_oak: false,
        fiberglass_unfinished: false,
        fiberglass_walnut: false,
        gray: false,
        module_id: 2210014,
        sandstone: true,
        show_color_options_title: true,
        sterling_aged_copper: true,
        sterling_ash_gray: true,
        sterling_bone_white: true,
        sterling_bright_white: true,
        sterling_burgundy: true,
        sterling_burnished_slate: true,
        sterling_champagne: true,
        sterling_charcoal: true,
        sterling_cityscape: true,
        sterling_classic_green: true,
        sterling_colonial_red: true,
        sterling_copper_penny: true,
        sterling_dark_bronze: true,
        sterling_deep_black: true,
        sterling_galvalume_plus: true,
        sterling_hartford_green: true,
        sterling_hemlock_green: true,
        sterling_mansard_brown: true,
        sterling_matte_black: true,
        sterling_medium_bronze: true,
        sterling_musket_gray: true,
        sterling_pebble_clay: true,
        sterling_regal_red: true,
        sterling_royal_blue: true,
        sterling_sierra_tan: true,
        sterling_silver: true,
        sterling_slate_blue: true,
        sterling_slate_gray: true,
        sterling_stone_white: true,
        sterling_teal: true,
        sterling_terra_cotta: true,
        sterling_vintage: true,
        sterling_weather_zinc: true,
        sterling_western_rust: true,
        white: false,
        widget_name: "[KULA] Color Options"
      },
      rtm_additional_text: {
        custom_widget_id: 5808245394,
        field_types: { additional_text: "boolean", rich_text: "richtext" },
        module_id: 2906367,
        per_widget_wrapper_html: "",
        tag: "custom_widget",
        type: "custom_widget",
        widget_name: "[RTM] Additional Text",
        wrapping_html: ""
      },
      model_number_used_in_algolia_search: {
        redirectUrl:
          "https://app.hubspot.com/content/2029938/edit-beta/6184014343",
        value: "2717"
      }
    }
  },
  {
    url:
      "https://www.chiohd.com/homeowners/garage-doors/stamped-carriage-house/5251",
    data: {
      image_gallery: {
        auto_advance: true,
        caption_position: "superimpose",
        display_mode: "thumbnail",
        lightbox: false,
        lightboxRows: 3,
        loop_slides: true,
        num_seconds: 5,
        only_thumbnails: false,
        show_pagination: true,
        sizing: "static",
        slides: [
          {
            alt_text: "Stamped-5216.jpg",
            caption: "",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Stamped/Models/Stamped-5216.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          },
          {
            alt_text: "Stamped-5216-2.jpg",
            caption: "",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Stamped/Models/Stamped-5216-2.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          }
        ],
        transition: "slide",
        with_thumbnail_nav: true
      },
      kula_woodtone_options: {
        cedar: false,
        classic: true,
        dark_oak: false,
        display_woodtone_options_title: true,
        driftwood: false,
        light_oak: false,
        mahogany: false,
        modern: true,
        module_id: 2291028,
        walnut: false,
        widget_name: "[KULA] Woodtone Options"
      },
      product_number: { header_tag: null, value: "5251" },
      product_name: {
        header_tag: null,
        value: __products[5251].product_family
      },
      door_image: {
        alt: "Stamped-Carriage-House-Short",
        height: 214,
        img_alt: "chi-52-sch-one-car.png",
        img_load_error: false,
        link: "",
        open_in_new_tab: false,
        original_height: 214,
        original_width: 270,
        src: "https://cdn2.hubspot.net/hubfs/2029938/chi-52-sch-one-car.png",
        width: 270
      },
      kula_raised_panel_options: {
        backing_text: __products[5251].section_material,
        door_style_text: __products[5251].panel_style,
        family_brochure_link:
          '\u003Ca href="' +
          __products[5251].family_brochure_link +
          '" target="_blank"\u003EDownload Brochure\u003C/a\u003E',
        model_flyer_link:
          '\u003Ca href="' +
          __products[5251].model_flyer_link +
          '" target="_blank"\u003EDownload Flyer\u003C/a\u003E',
        module_id: 2291134,
        price: __products[5251].price,
        r_value_text: __products[5251].r_value_text,
        rtm_construction_type: __products[5251].rtm_construction_type,
        rtm_insulation_type: __products[5251].rtm_insulation_type,
        widget_name: "[KULA] Raised Panel Options"
      },
      door_image_caption: { value: "Short Panel" },
      customization_title: { value: "Customization Options" },
      window_inserts: {
        cascade_short: false,
        cathedral_short: false,
        eight_piece_sunburst: false,
        five_piece_sunburst: false,
        four_piece_sunburst: false,
        long_cascade: true,
        long_four_piece_arched_madison: true,
        long_four_piece_arched_stockton: true,
        long_four_piece_sunburst: false,
        long_madison: true,
        long_praire: false,
        long_sherwood: false,
        long_stockton: true,
        long_three_piece_arched_madison: true,
        long_three_piece_arched_stockton: true,
        long_three_piece_sunburst: false,
        long_two_piece_arched_madison: true,
        long_two_piece_arched_stockton: true,
        long_two_piece_sunburst: false,
        long_waterton: false,
        module_id: 2421584,
        prairie_short: false,
        seven_piece_sunburst: false,
        sherwood: false,
        six_piece_sunburst: false,
        stockton_short: false,
        waterton_short: false,
        widget_name: "Window Inserts"
      },
      designer_glass: {
        display_designer_glass_title: false,
        florence_short: false,
        hampton_short: false,
        hawthorne_platinum_short: false,
        hawthorne_short: false,
        lasalle: false,
        module_id: 2452105,
        newport_short: false,
        somerset_brass_short: false,
        somerset_platinum_short: false,
        temple_short: false,
        widget_name: "Designer Glass"
      },
      glass_options: {
        frosted_short: true,
        glue_chip_short: true,
        module_id: 2470253,
        obscure_short: true,
        plain_short: true,
        seeded: false,
        tinted_short: true,
        widget_name: "Glass Options"
      },
      kula_color_options: {
        almond: true,
        black: false,
        bronze: false,
        brown: true,
        desert_tan: true,
        evergreen: false,
        gray: false,
        module_id: 2210014,
        sandstone: true,
        show_color_options_title: true,
        white: true,
        widget_name: "[KULA] Color Options"
      },
      model_number_used_in_algolia_search: { value: "5251" }
    }
  },
  {
    url: "https://www.chiohd.com/homeowners/garage-doors/raised-panel/2206",
    data: {
      image_gallery: {
        auto_advance: true,
        caption_position: "superimpose",
        display_mode: "thumbnail",
        lightbox: false,
        lightboxRows: 3,
        loop_slides: true,
        num_seconds: 5,
        only_thumbnails: false,
        show_pagination: true,
        sizing: "static",
        slides: [
          {
            alt_text: "Raised-Panel-2206.jpg",
            caption: "",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Raised-Panel/Models/Raised-Panel-2206.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          },
          {
            alt_text: "Raised-Panel-2206-2.jpg",
            caption: "",
            href: "",
            img_src:
              "https://cdn2.hubspot.net/hubfs/2029938/Homeowner/Products/Raised-Panel/Models/Raised-Panel-2206-2.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          }
        ],
        transition: "slide",
        with_thumbnail_nav: true
      },
      kula_woodtone_options: {
        cedar: false,
        classic: false,
        dark_oak: false,
        display_woodtone_options_title: false,
        driftwood: false,
        light_oak: false,
        mahogany: false,
        modern: false,
        module_id: 2291028,
        walnut: false,
        widget_name: "[KULA] Woodtone Options"
      },
      product_number: { header_tag: null, value: "2206" },
      product_name: { value: __products[2206].product_family },
      door_image: {
        alt: "chi-22-rp-one-car.png",
        height: 214,
        img_alt: "chi-22-rp-one-car.png",
        img_load_error: false,
        link: "",
        open_in_new_tab: false,
        original_height: 214,
        original_width: 270,
        src: "https://cdn2.hubspot.net/hubfs/2029938/chi-22-rp-one-car.png",
        width: 270
      },
      kula_raised_panel_options: {
        backing_text: __products[2206].section_material,
        door_style_text: __products[2206].panel_style,
        family_brochure_link:
          '\u003Ca href="' +
          __products[2206].family_brochure_link +
          '" target="_blank"\u003EDownload Brochure\u003C/a\u003E',
        model_flyer_link:
          '\u003Ca href="' +
          __products[2206].model_flyer_link +
          '" target="_blank"\u003EDownload Flyer\u003C/a\u003E',
        module_id: 2291134,
        price: __products[2206].price,
        r_value_text: __products[2206].r_value_text,
        rtm_construction_type: __products[2206].rtm_construction_type,
        rtm_insulation_type: __products[2206].rtm_insulation_type,
        widget_name: "[KULA] Raised Panel Options"
      },
      door_image_caption: { value: "Short Panel" },
      customization_title: { value: "Customization Options" },
      window_inserts: {
        display_woodtone_options_title: true,
        module_id: 2421584,
        rtm_test: true,
        sherwood: true,
        walnut: false,
        widget_name: "Window Inserts"
      },
      designer_glass: {
        custom_widget_id: 5561952058,
        field_types: {
          florence_short: "boolean",
          hampton_short: "boolean",
          hawthorne_platinum_short: "boolean",
          hawthorne_short: "boolean",
          newport_short: "boolean",
          somerset_brass_short: "boolean",
          somerset_platinum_short: "boolean",
          temple_short: "boolean"
        },
        module_id: 2452105,
        per_widget_wrapper_html: "",
        tag: "custom_widget",
        type: "custom_widget",
        widget_name: "Designer Glass",
        wrapping_html: ""
      },
      glass_options: {
        custom_widget_id: 5562484302,
        field_types: {
          frosted_short: "boolean",
          glue_chip_short: "boolean",
          plain_short: "boolean",
          tinted_short: "boolean"
        },
        module_id: 2470253,
        per_widget_wrapper_html: "",
        tag: "custom_widget",
        type: "custom_widget",
        widget_name: "Glass Options",
        wrapping_html: ""
      },
      kula_color_options: {
        almond: true,
        black: false,
        bronze: false,
        brown: false,
        desert_tan: false,
        evergreen: false,
        gray: false,
        module_id: 2210014,
        sandstone: true,
        show_color_options_title: true,
        white: true,
        widget_name: "[KULA] Color Options"
      },
      model_number_used_in_algolia_search: { value: "2206" }
    }
  },
  {
    url: "https://www.chiohd.com/homeowners/garage-doors/full-view/3297",
    data: {
      image_gallery: {
        auto_advance: true,
        caption_position: "superimpose",
        display_mode: "thumbnail",
        lightbox: false,
        lightboxRows: 3,
        loop_slides: true,
        num_seconds: 5,
        only_thumbnails: false,
        show_pagination: true,
        sizing: "static",
        slides: [
          {
            alt_text: "Raised-Panel-3297.jpg",
            caption: "",
            href: "",
            img_src:
              "https://www.chiohd.com/hubfs/chi17-photo-home-full-view-aluminum-042017-0238.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          },
          {
            alt_text: "Raised-Panel-3297-2.jpg",
            caption: "",
            href: "",
            img_src:
              "https://www.chiohd.com/hubfs/Homeowner/Products/Full-View/Models/3295-2.jpg",
            link_url: "",
            open_in_new_tab: true,
            show_caption: false
          }
        ],
        transition: "slide",
        with_thumbnail_nav: true
      },
      kula_woodtone_options: {
        cedar: false,
        classic: false,
        dark_oak: false,
        display_woodtone_options_title: false,
        driftwood: false,
        light_oak: false,
        mahogany: false,
        modern: false,
        module_id: 2291028,
        walnut: false,
        widget_name: "[KULA] Woodtone Options"
      },
      product_number: { header_tag: null, value: "3297" },
      product_name: { value: __products[3297].product_family },
      door_image: {
        alt: "chi-22-rp-one-car.png",
        height: 214,
        img_alt: "chi-22-rp-one-car.png",
        img_load_error: false,
        link: "",
        open_in_new_tab: false,
        original_height: 214,
        original_width: 270,
        src: "https://cdn2.hubspot.net/hubfs/2029938/chi-22-rp-one-car.png",
        width: 270
      },
      kula_raised_panel_options: {
        backing_text: __products[3297].section_material,
        door_style_text: __products[3297].panel_style,
        family_brochure_link:
          '\u003Ca href="' +
          __products[3297].family_brochure_link +
          '" target="_blank"\u003EDownload Brochure\u003C/a\u003E',
        model_flyer_link:
          '\u003Ca href="' +
          __products[3297].model_flyer_link +
          '" target="_blank"\u003EDownload Flyer\u003C/a\u003E',
        module_id: 2291134,
        price: __products[3297].price,
        r_value_text: __products[3297].r_value_text,
        rtm_construction_type: __products[3297].rtm_construction_type,
        rtm_insulation_type: __products[3297].rtm_insulation_type,
        widget_name: "[KULA] Raised Panel Options"
      },
      door_image_caption: { value: "Short Panel" },
      customization_title: { value: "Customization Options" },
      window_inserts: {
        display_woodtone_options_title: true,
        module_id: 2421584,
        rtm_test: true,
        sherwood: true,
        walnut: false,
        widget_name: "Window Inserts"
      },
      designer_glass: {
        custom_widget_id: 5561952058,
        field_types: {
          florence_short: "boolean",
          hampton_short: "boolean",
          hawthorne_platinum_short: "boolean",
          hawthorne_short: "boolean",
          newport_short: "boolean",
          somerset_brass_short: "boolean",
          somerset_platinum_short: "boolean",
          temple_short: "boolean"
        },
        module_id: 2452105,
        per_widget_wrapper_html: "",
        tag: "custom_widget",
        type: "custom_widget",
        widget_name: "Designer Glass",
        wrapping_html: ""
      },
      glass_options: {
        custom_widget_id: 5562484302,
        field_types: {
          frosted_short: "boolean",
          glue_chip_short: "boolean",
          plain_short: "boolean",
          tinted_short: "boolean"
        },
        module_id: 2470253,
        per_widget_wrapper_html: "",
        tag: "custom_widget",
        type: "custom_widget",
        widget_name: "Glass Options",
        wrapping_html: ""
      },
      kula_color_options: {
        almond: true,
        black: true,
        bronze: true,
        brown: true,
        desert_tan: true,
        evergreen: false,
        gray: true,
        module_id: 2210014,
        sandstone: true,
        show_color_options_title: true,
        white: true,
        widget_name: "[KULA] Color Options"
      },
      model_number_used_in_algolia_search: { value: "3297" }
    }
  }
];

const productsArray = [];
//make array?
makeArray = () => {
  for (const prop in __products) {
    // console.log(`${prop} = ${products[prop].panel_style}`);
    let doorModelObj = {
      model: prop,
      maker: "CHI",
      panel_style: __products[prop].panel_style,
      product_family: __products[prop].product_family,
      door_style_text: __products[prop].door_style_text,
      family_brochure_link: __products[prop].family_brochure_link,
      model_flyer_link: __products[prop].model_flyer_link,
      price: __products[prop].price,
      r_value_text: __products[prop].r_value_text,
      rtm_construction_type: __products[prop].rtm_construction_type,
      rtm_insulation_type: __products[prop].rtm_insulation_type,
      section_material: __products[prop].section_material,
      url: "",
      images: [],
      warranty: "",
      windload: "https://www.chiohd.com/wind-load"
    };
    productsArray.push(doorModelObj);
  }
};
makeArray();

const dataArray = [];
makeArray2 = () => {
  for (var i = 0; i < renderData.length; i++) {
    // for (renderData[i].data.image_gallery.slides.length){}
    let dataObj = {
      model: renderData[i].data.product_number.value,
      url: renderData[i].url,
      images: [
        renderData[i].data.image_gallery.slides[0].img_src,
        renderData[i].data.image_gallery.slides[1].img_src,
        renderData[i].data.door_image.src
        // renderData[i].data.door_image.src
      ]
    };
    dataArray.push(dataObj);
  }
};

makeArray2();
// console.log(dataArray);

// add url and image to the products array to export to site
for (i in productsArray) {
  for (j in dataArray) {
    if (productsArray[i].model === dataArray[j].model) {
      productsArray[i].url = dataArray[j].url;
      productsArray[i].images = dataArray[j].images;
    }
  }
}

// concat wd and chi
const fullProductsArray = productsArray.concat(wdArray);

console.log(fullProductsArray);
module.exports = fullProductsArray;
