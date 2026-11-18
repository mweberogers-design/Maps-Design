var wms_layers = [];

var format_District_Boundaries20200824_0 = new ol.format.GeoJSON();
var features_District_Boundaries20200824_0 = format_District_Boundaries20200824_0.readFeatures(json_District_Boundaries20200824_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_District_Boundaries20200824_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_District_Boundaries20200824_0.addFeatures(features_District_Boundaries20200824_0);
var lyr_District_Boundaries20200824_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_District_Boundaries20200824_0, 
                style: style_District_Boundaries20200824_0,
                popuplayertitle: 'District_Boundaries20200824',
                interactive: true,
                title: '<img src="styles/legend/District_Boundaries20200824_0.png" /> District_Boundaries20200824'
            });
var format_SubCounty_Boundaries20200824_1 = new ol.format.GeoJSON();
var features_SubCounty_Boundaries20200824_1 = format_SubCounty_Boundaries20200824_1.readFeatures(json_SubCounty_Boundaries20200824_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SubCounty_Boundaries20200824_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SubCounty_Boundaries20200824_1.addFeatures(features_SubCounty_Boundaries20200824_1);
var lyr_SubCounty_Boundaries20200824_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SubCounty_Boundaries20200824_1, 
                style: style_SubCounty_Boundaries20200824_1,
                popuplayertitle: 'SubCounty_Boundaries20200824',
                interactive: true,
                title: '<img src="styles/legend/SubCounty_Boundaries20200824_1.png" /> SubCounty_Boundaries20200824'
            });
var format_Facilities_Amref_2 = new ol.format.GeoJSON();
var features_Facilities_Amref_2 = format_Facilities_Amref_2.readFeatures(json_Facilities_Amref_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Facilities_Amref_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Facilities_Amref_2.addFeatures(features_Facilities_Amref_2);
var lyr_Facilities_Amref_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Facilities_Amref_2, 
                style: style_Facilities_Amref_2,
                popuplayertitle: 'Facilities_Amref',
                interactive: true,
                title: '<img src="styles/legend/Facilities_Amref_2.png" /> Facilities_Amref'
            });
var format_HotSpots__Amref_3 = new ol.format.GeoJSON();
var features_HotSpots__Amref_3 = format_HotSpots__Amref_3.readFeatures(json_HotSpots__Amref_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotSpots__Amref_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotSpots__Amref_3.addFeatures(features_HotSpots__Amref_3);
var lyr_HotSpots__Amref_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotSpots__Amref_3, 
                style: style_HotSpots__Amref_3,
                popuplayertitle: 'HotSpots__Amref',
                interactive: true,
                title: '<img src="styles/legend/HotSpots__Amref_3.png" /> HotSpots__Amref'
            });

lyr_District_Boundaries20200824_0.setVisible(true);lyr_SubCounty_Boundaries20200824_1.setVisible(true);lyr_Facilities_Amref_2.setVisible(true);lyr_HotSpots__Amref_3.setVisible(true);
var layersList = [lyr_District_Boundaries20200824_0,lyr_SubCounty_Boundaries20200824_1,lyr_Facilities_Amref_2,lyr_HotSpots__Amref_3];
lyr_District_Boundaries20200824_0.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'admin2Name': 'admin2Name', 'admin2Pcod': 'admin2Pcod', 'admin2RefN': 'admin2RefN', 'admin2AltN': 'admin2AltN', 'admin2Al_1': 'admin2Al_1', 'admin1Name': 'admin1Name', 'admin1Pcod': 'admin1Pcod', 'admin0Name': 'admin0Name', 'admin0Pcod': 'admin0Pcod', 'date': 'date', 'validOn': 'validOn', 'validTo': 'validTo', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_SubCounty_Boundaries20200824_1.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'admin4Name': 'admin4Name', 'admin4Pcod': 'admin4Pcod', 'admin4RefN': 'admin4RefN', 'admin4AltN': 'admin4AltN', 'admin4Al_1': 'admin4Al_1', 'admin3Name': 'admin3Name', 'admin3Pcod': 'admin3Pcod', 'admin2Name': 'admin2Name', 'admin2Pcod': 'admin2Pcod', 'admin1Name': 'admin1Name', 'admin1Pcod': 'admin1Pcod', 'admin0Name': 'admin0Name', 'admin0Pcod': 'admin0Pcod', 'date': 'date', 'validOn': 'validOn', 'validTo': 'validTo', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Facilities_Amref_2.set('fieldAliases', {'fid': 'fid', '1.Geographical Scope': '1.Geographical Scope', 'Subcounties Mayuge  District:': 'Subcounties Mayuge  District:', 'Subcounties Namutumba  District:': 'Subcounties Namutumba  District:', 'Subcounties Buyende  District': 'Subcounties Buyende  District', 'Subcounties Namayingo District': 'Subcounties Namayingo District', '4.Name of Respodent': '4.Name of Respodent', '5.Village': '5.Village', '6.Position/Tittle': '6.Position/Tittle', '12.4: Name of the Site': '12.4: Name of the Site', '12.5: Type of Service': '12.5: Type of Service', '23.1: Nearest Health Facility': '23.1: Nearest Health Facility', '_23.1: Nearest Health Facility_latitude': '_23.1: Nearest Health Facility_latitude', '_23.1: Nearest Health Facility_longitude': '_23.1: Nearest Health Facility_longitude', '_23.1: Nearest Health Facility_altitude': '_23.1: Nearest Health Facility_altitude', '_23.1: Nearest Health Facility_precision': '_23.1: Nearest Health Facility_precision', });
lyr_HotSpots__Amref_3.set('fieldAliases', {'fid': 'fid', '1.Geographical Scope': '1.Geographical Scope', 'Subcounties Mayuge  District:': 'Subcounties Mayuge  District:', 'Subcounties Namutumba  District:': 'Subcounties Namutumba  District:', 'Subcounties Buyende  District': 'Subcounties Buyende  District', 'Subcounties Namayingo District': 'Subcounties Namayingo District', '4.Name of Respodent': '4.Name of Respodent', '5.Village': '5.Village', '6.Position/Tittle': '6.Position/Tittle', 'Other Specify': 'Other Specify', '7.2 Specific Locations / Venues Where They Are Located (List all that apply)': '7.2 Specific Locations / Venues Where They Are Located (List all that apply)', '7.3 Peak Days to Access Them': '7.3 Peak Days to Access Them', '7.4 Peak Hours to Access Them': '7.4 Peak Hours to Access Them', '8.1 Specific Locations / Venues Where They Are Located': '8.1 Specific Locations / Venues Where They Are Located', '8.2 Peak Day to Access Them': '8.2 Peak Day to Access Them', '8.3 Peak Days / Hours to Access Them': '8.3 Peak Days / Hours to Access Them', '10.1 Specific Locations / Venues Where They Are Located': '10.1 Specific Locations / Venues Where They Are Located', '10.2 Peak Day to Acess them': '10.2 Peak Day to Acess them', '10.3  Peak Hours to Access Them': '10.3  Peak Hours to Access Them', '11.Which vulnerable adolescents and youth are found in this community?': '11.Which vulnerable adolescents and youth are found in this community?', '11.Which vulnerable adolescents and youth are found in this community?/Youth Living with Fistula': '11.Which vulnerable adolescents and youth are found in this community?/Youth Living with Fistula', '11.Which vulnerable adolescents and youth are found in this community?/Birth Injuries  (Women /Girls)': '11.Which vulnerable adolescents and youth are found in this community?/Birth Injuries  (Women /Girls)', '11.1 Specific Locations / Venues Where They Are Located': '11.1 Specific Locations / Venues Where They Are Located', '11.2 Peak Day to Access Them': '11.2 Peak Day to Access Them', '11.3  Hours to Access Them': '11.3  Hours to Access Them', '23. HotSpot Name': '23. HotSpot Name', '_23. HotSpot Name_latitude': '_23. HotSpot Name_latitude', '_23. HotSpot Name_longitude': '_23. HotSpot Name_longitude', '_23. HotSpot Name_altitude': '_23. HotSpot Name_altitude', '_23. HotSpot Name_precision': '_23. HotSpot Name_precision', });
lyr_District_Boundaries20200824_0.set('fieldImages', {'fid': '', 'OBJECTID': '', 'admin2Name': '', 'admin2Pcod': '', 'admin2RefN': '', 'admin2AltN': '', 'admin2Al_1': '', 'admin1Name': '', 'admin1Pcod': '', 'admin0Name': '', 'admin0Pcod': '', 'date': '', 'validOn': '', 'validTo': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_SubCounty_Boundaries20200824_1.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'admin4Name': 'TextEdit', 'admin4Pcod': 'TextEdit', 'admin4RefN': 'TextEdit', 'admin4AltN': 'TextEdit', 'admin4Al_1': 'TextEdit', 'admin3Name': 'TextEdit', 'admin3Pcod': 'TextEdit', 'admin2Name': 'TextEdit', 'admin2Pcod': 'TextEdit', 'admin1Name': 'TextEdit', 'admin1Pcod': 'TextEdit', 'admin0Name': 'TextEdit', 'admin0Pcod': 'TextEdit', 'date': 'DateTime', 'validOn': 'DateTime', 'validTo': 'DateTime', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Facilities_Amref_2.set('fieldImages', {'fid': '', '1.Geographical Scope': 'TextEdit', 'Subcounties Mayuge  District:': 'TextEdit', 'Subcounties Namutumba  District:': 'TextEdit', 'Subcounties Buyende  District': 'TextEdit', 'Subcounties Namayingo District': 'TextEdit', '4.Name of Respodent': 'TextEdit', '5.Village': 'TextEdit', '6.Position/Tittle': 'TextEdit', '12.4: Name of the Site': 'TextEdit', '12.5: Type of Service': 'TextEdit', '23.1: Nearest Health Facility': 'TextEdit', '_23.1: Nearest Health Facility_latitude': 'TextEdit', '_23.1: Nearest Health Facility_longitude': 'TextEdit', '_23.1: Nearest Health Facility_altitude': 'TextEdit', '_23.1: Nearest Health Facility_precision': 'TextEdit', });
lyr_HotSpots__Amref_3.set('fieldImages', {'fid': '', '1.Geographical Scope': 'TextEdit', 'Subcounties Mayuge  District:': 'TextEdit', 'Subcounties Namutumba  District:': 'TextEdit', 'Subcounties Buyende  District': 'TextEdit', 'Subcounties Namayingo District': 'TextEdit', '4.Name of Respodent': 'TextEdit', '5.Village': 'TextEdit', '6.Position/Tittle': 'TextEdit', 'Other Specify': 'TextEdit', '7.2 Specific Locations / Venues Where They Are Located (List all that apply)': 'TextEdit', '7.3 Peak Days to Access Them': 'TextEdit', '7.4 Peak Hours to Access Them': 'TextEdit', '8.1 Specific Locations / Venues Where They Are Located': 'TextEdit', '8.2 Peak Day to Access Them': 'TextEdit', '8.3 Peak Days / Hours to Access Them': 'TextEdit', '10.1 Specific Locations / Venues Where They Are Located': 'TextEdit', '10.2 Peak Day to Acess them': 'TextEdit', '10.3  Peak Hours to Access Them': 'TextEdit', '11.Which vulnerable adolescents and youth are found in this community?': 'TextEdit', '11.Which vulnerable adolescents and youth are found in this community?/Youth Living with Fistula': 'CheckBox', '11.Which vulnerable adolescents and youth are found in this community?/Birth Injuries  (Women /Girls)': 'CheckBox', '11.1 Specific Locations / Venues Where They Are Located': 'TextEdit', '11.2 Peak Day to Access Them': 'TextEdit', '11.3  Hours to Access Them': 'TextEdit', '23. HotSpot Name': 'TextEdit', '_23. HotSpot Name_latitude': 'TextEdit', '_23. HotSpot Name_longitude': 'TextEdit', '_23. HotSpot Name_altitude': 'TextEdit', '_23. HotSpot Name_precision': 'TextEdit', });
lyr_District_Boundaries20200824_0.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'admin2Name': 'no label', 'admin2Pcod': 'no label', 'admin2RefN': 'no label', 'admin2AltN': 'no label', 'admin2Al_1': 'no label', 'admin1Name': 'no label', 'admin1Pcod': 'no label', 'admin0Name': 'no label', 'admin0Pcod': 'no label', 'date': 'no label', 'validOn': 'no label', 'validTo': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_SubCounty_Boundaries20200824_1.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'admin4Name': 'no label', 'admin4Pcod': 'no label', 'admin4RefN': 'no label', 'admin4AltN': 'no label', 'admin4Al_1': 'no label', 'admin3Name': 'no label', 'admin3Pcod': 'no label', 'admin2Name': 'no label', 'admin2Pcod': 'no label', 'admin1Name': 'no label', 'admin1Pcod': 'no label', 'admin0Name': 'no label', 'admin0Pcod': 'no label', 'date': 'no label', 'validOn': 'no label', 'validTo': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Facilities_Amref_2.set('fieldLabels', {'fid': 'no label', '1.Geographical Scope': 'no label', 'Subcounties Mayuge  District:': 'no label', 'Subcounties Namutumba  District:': 'no label', 'Subcounties Buyende  District': 'no label', 'Subcounties Namayingo District': 'no label', '4.Name of Respodent': 'no label', '5.Village': 'no label', '6.Position/Tittle': 'no label', '12.4: Name of the Site': 'no label', '12.5: Type of Service': 'no label', '23.1: Nearest Health Facility': 'no label', '_23.1: Nearest Health Facility_latitude': 'no label', '_23.1: Nearest Health Facility_longitude': 'no label', '_23.1: Nearest Health Facility_altitude': 'no label', '_23.1: Nearest Health Facility_precision': 'no label', });
lyr_HotSpots__Amref_3.set('fieldLabels', {'fid': 'inline label - always visible', '1.Geographical Scope': 'no label', 'Subcounties Mayuge  District:': 'inline label - always visible', 'Subcounties Namutumba  District:': 'inline label - always visible', 'Subcounties Buyende  District': 'inline label - always visible', 'Subcounties Namayingo District': 'inline label - always visible', '4.Name of Respodent': 'no label', '5.Village': 'no label', '6.Position/Tittle': 'no label', 'Other Specify': 'no label', '7.2 Specific Locations / Venues Where They Are Located (List all that apply)': 'no label', '7.3 Peak Days to Access Them': 'no label', '7.4 Peak Hours to Access Them': 'no label', '8.1 Specific Locations / Venues Where They Are Located': 'no label', '8.2 Peak Day to Access Them': 'no label', '8.3 Peak Days / Hours to Access Them': 'no label', '10.1 Specific Locations / Venues Where They Are Located': 'no label', '10.2 Peak Day to Acess them': 'no label', '10.3  Peak Hours to Access Them': 'no label', '11.Which vulnerable adolescents and youth are found in this community?': 'no label', '11.Which vulnerable adolescents and youth are found in this community?/Youth Living with Fistula': 'no label', '11.Which vulnerable adolescents and youth are found in this community?/Birth Injuries  (Women /Girls)': 'no label', '11.1 Specific Locations / Venues Where They Are Located': 'no label', '11.2 Peak Day to Access Them': 'no label', '11.3  Hours to Access Them': 'no label', '23. HotSpot Name': 'no label', '_23. HotSpot Name_latitude': 'no label', '_23. HotSpot Name_longitude': 'no label', '_23. HotSpot Name_altitude': 'no label', '_23. HotSpot Name_precision': 'no label', });
lyr_HotSpots__Amref_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});