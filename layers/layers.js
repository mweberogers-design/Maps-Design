var wms_layers = [];

var format_amrefDistrictsdistrict_boundaries20200824_0 = new ol.format.GeoJSON();
var features_amrefDistrictsdistrict_boundaries20200824_0 = format_amrefDistrictsdistrict_boundaries20200824_0.readFeatures(json_amrefDistrictsdistrict_boundaries20200824_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_amrefDistrictsdistrict_boundaries20200824_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_amrefDistrictsdistrict_boundaries20200824_0.addFeatures(features_amrefDistrictsdistrict_boundaries20200824_0);
var lyr_amrefDistrictsdistrict_boundaries20200824_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_amrefDistrictsdistrict_boundaries20200824_0, 
                style: style_amrefDistrictsdistrict_boundaries20200824_0,
                popuplayertitle: 'amref Districts  — district_boundaries20200824',
                interactive: true,
                title: '<img src="styles/legend/amrefDistrictsdistrict_boundaries20200824_0.png" /> amref Districts  — district_boundaries20200824'
            });
var format_MappedAmrefSubcountysubcounty_boundaries20200824_1 = new ol.format.GeoJSON();
var features_MappedAmrefSubcountysubcounty_boundaries20200824_1 = format_MappedAmrefSubcountysubcounty_boundaries20200824_1.readFeatures(json_MappedAmrefSubcountysubcounty_boundaries20200824_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MappedAmrefSubcountysubcounty_boundaries20200824_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MappedAmrefSubcountysubcounty_boundaries20200824_1.addFeatures(features_MappedAmrefSubcountysubcounty_boundaries20200824_1);
var lyr_MappedAmrefSubcountysubcounty_boundaries20200824_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MappedAmrefSubcountysubcounty_boundaries20200824_1, 
                style: style_MappedAmrefSubcountysubcounty_boundaries20200824_1,
                popuplayertitle: 'MappedAmref Subcounty — subcounty_boundaries20200824',
                interactive: true,
                title: '<img src="styles/legend/MappedAmrefSubcountysubcounty_boundaries20200824_1.png" /> MappedAmref Subcounty — subcounty_boundaries20200824'
            });
var format_UpdatedAmrefCodes_2 = new ol.format.GeoJSON();
var features_UpdatedAmrefCodes_2 = format_UpdatedAmrefCodes_2.readFeatures(json_UpdatedAmrefCodes_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UpdatedAmrefCodes_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UpdatedAmrefCodes_2.addFeatures(features_UpdatedAmrefCodes_2);
var lyr_UpdatedAmrefCodes_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UpdatedAmrefCodes_2, 
                style: style_UpdatedAmrefCodes_2,
                popuplayertitle: 'Updated Amref Codes',
                interactive: true,
                title: '<img src="styles/legend/UpdatedAmrefCodes_2.png" /> Updated Amref Codes'
            });

lyr_amrefDistrictsdistrict_boundaries20200824_0.setVisible(true);lyr_MappedAmrefSubcountysubcounty_boundaries20200824_1.setVisible(true);lyr_UpdatedAmrefCodes_2.setVisible(true);
var layersList = [lyr_amrefDistrictsdistrict_boundaries20200824_0,lyr_MappedAmrefSubcountysubcounty_boundaries20200824_1,lyr_UpdatedAmrefCodes_2];
lyr_amrefDistrictsdistrict_boundaries20200824_0.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'admin2Name': 'admin2Name', 'admin2Pcod': 'admin2Pcod', 'admin2RefN': 'admin2RefN', 'admin2AltN': 'admin2AltN', 'admin2Al_1': 'admin2Al_1', 'admin1Name': 'admin1Name', 'admin1Pcod': 'admin1Pcod', 'admin0Name': 'admin0Name', 'admin0Pcod': 'admin0Pcod', 'date': 'date', 'validOn': 'validOn', 'validTo': 'validTo', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_MappedAmrefSubcountysubcounty_boundaries20200824_1.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'admin4Name': 'admin4Name', 'admin4Pcod': 'admin4Pcod', 'admin4RefN': 'admin4RefN', 'admin4AltN': 'admin4AltN', 'admin4Al_1': 'admin4Al_1', 'admin3Name': 'admin3Name', 'admin3Pcod': 'admin3Pcod', 'admin2Name': 'admin2Name', 'admin2Pcod': 'admin2Pcod', 'admin1Name': 'admin1Name', 'admin1Pcod': 'admin1Pcod', 'admin0Name': 'admin0Name', 'admin0Pcod': 'admin0Pcod', 'date': 'date', 'validOn': 'validOn', 'validTo': 'validTo', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_UpdatedAmrefCodes_2.set('fieldAliases', {'start': 'start', 'end': 'end', '..': '..', 'SAY+ PROGRAMME: Vulnerable Populations Resource Mapping and Accessibility  Assessment Tool': 'SAY+ PROGRAMME: Vulnerable Populations Resource Mapping and Accessibility  Assessment Tool', '1.Geographical Scope': '1.Geographical Scope', '12.4: Name of the Site': '12.4: Name of the Site', '23. HotSpot Name': '23. HotSpot Name', '_23. HotSpot Name_latitude': '_23. HotSpot Name_latitude', '_23. HotSpot Name_longitude': '_23. HotSpot Name_longitude', '_23. HotSpot Name_altitude': '_23. HotSpot Name_altitude', '_23. HotSpot Name_precision': '_23. HotSpot Name_precision', '23.1: Nearest Health Facility': '23.1: Nearest Health Facility', '_23.1: Nearest Health Facility_latitude': '_23.1: Nearest Health Facility_latitude', '_23.1: Nearest Health Facility_longitude': '_23.1: Nearest Health Facility_longitude', '_23.1: Nearest Health Facility_altitude': '_23.1: Nearest Health Facility_altitude', '_23.1: Nearest Health Facility_precision': '_23.1: Nearest Health Facility_precision', '23.2: Nearest Secondary School': '23.2: Nearest Secondary School', '_23.2: Nearest Secondary School_latitude': '_23.2: Nearest Secondary School_latitude', '_23.2: Nearest Secondary School_longitude': '_23.2: Nearest Secondary School_longitude', '_23.2: Nearest Secondary School_altitude': '_23.2: Nearest Secondary School_altitude', '_23.2: Nearest Secondary School_precision': '_23.2: Nearest Secondary School_precision', '24.3 Nearest Police Station': '24.3 Nearest Police Station', '_24.3 Nearest Police Station_latitude': '_24.3 Nearest Police Station_latitude', '_24.3 Nearest Police Station_longitude': '_24.3 Nearest Police Station_longitude', '_24.3 Nearest Police Station_altitude': '_24.3 Nearest Police Station_altitude', '_24.3 Nearest Police Station_precision': '_24.3 Nearest Police Station_precision', });
lyr_amrefDistrictsdistrict_boundaries20200824_0.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'admin2Name': 'TextEdit', 'admin2Pcod': 'TextEdit', 'admin2RefN': 'TextEdit', 'admin2AltN': 'TextEdit', 'admin2Al_1': 'TextEdit', 'admin1Name': 'TextEdit', 'admin1Pcod': 'TextEdit', 'admin0Name': 'TextEdit', 'admin0Pcod': 'TextEdit', 'date': 'DateTime', 'validOn': 'DateTime', 'validTo': 'DateTime', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_MappedAmrefSubcountysubcounty_boundaries20200824_1.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'admin4Name': 'TextEdit', 'admin4Pcod': 'TextEdit', 'admin4RefN': 'TextEdit', 'admin4AltN': 'TextEdit', 'admin4Al_1': 'TextEdit', 'admin3Name': 'TextEdit', 'admin3Pcod': 'TextEdit', 'admin2Name': 'TextEdit', 'admin2Pcod': 'TextEdit', 'admin1Name': 'TextEdit', 'admin1Pcod': 'TextEdit', 'admin0Name': 'TextEdit', 'admin0Pcod': 'TextEdit', 'date': 'DateTime', 'validOn': 'DateTime', 'validTo': 'DateTime', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_UpdatedAmrefCodes_2.set('fieldImages', {'start': 'DateTime', 'end': 'DateTime', '..': 'TextEdit', 'SAY+ PROGRAMME: Vulnerable Populations Resource Mapping and Accessibility  Assessment Tool': 'TextEdit', '1.Geographical Scope': 'TextEdit', '12.4: Name of the Site': 'TextEdit', '23. HotSpot Name': 'TextEdit', '_23. HotSpot Name_latitude': 'TextEdit', '_23. HotSpot Name_longitude': 'TextEdit', '_23. HotSpot Name_altitude': 'TextEdit', '_23. HotSpot Name_precision': 'TextEdit', '23.1: Nearest Health Facility': 'TextEdit', '_23.1: Nearest Health Facility_latitude': 'TextEdit', '_23.1: Nearest Health Facility_longitude': 'TextEdit', '_23.1: Nearest Health Facility_altitude': 'TextEdit', '_23.1: Nearest Health Facility_precision': 'TextEdit', '23.2: Nearest Secondary School': 'TextEdit', '_23.2: Nearest Secondary School_latitude': 'TextEdit', '_23.2: Nearest Secondary School_longitude': 'TextEdit', '_23.2: Nearest Secondary School_altitude': 'TextEdit', '_23.2: Nearest Secondary School_precision': 'TextEdit', '24.3 Nearest Police Station': 'TextEdit', '_24.3 Nearest Police Station_latitude': 'TextEdit', '_24.3 Nearest Police Station_longitude': 'TextEdit', '_24.3 Nearest Police Station_altitude': 'TextEdit', '_24.3 Nearest Police Station_precision': 'TextEdit', });
lyr_amrefDistrictsdistrict_boundaries20200824_0.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'admin2Name': 'no label', 'admin2Pcod': 'no label', 'admin2RefN': 'no label', 'admin2AltN': 'no label', 'admin2Al_1': 'no label', 'admin1Name': 'no label', 'admin1Pcod': 'no label', 'admin0Name': 'no label', 'admin0Pcod': 'no label', 'date': 'no label', 'validOn': 'no label', 'validTo': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_MappedAmrefSubcountysubcounty_boundaries20200824_1.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'admin4Name': 'no label', 'admin4Pcod': 'no label', 'admin4RefN': 'no label', 'admin4AltN': 'no label', 'admin4Al_1': 'no label', 'admin3Name': 'no label', 'admin3Pcod': 'no label', 'admin2Name': 'no label', 'admin2Pcod': 'no label', 'admin1Name': 'no label', 'admin1Pcod': 'no label', 'admin0Name': 'no label', 'admin0Pcod': 'no label', 'date': 'no label', 'validOn': 'no label', 'validTo': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_UpdatedAmrefCodes_2.set('fieldLabels', {'start': 'no label', 'end': 'no label', '..': 'no label', 'SAY+ PROGRAMME: Vulnerable Populations Resource Mapping and Accessibility  Assessment Tool': 'no label', '1.Geographical Scope': 'no label', '12.4: Name of the Site': 'no label', '23. HotSpot Name': 'no label', '_23. HotSpot Name_latitude': 'no label', '_23. HotSpot Name_longitude': 'no label', '_23. HotSpot Name_altitude': 'no label', '_23. HotSpot Name_precision': 'no label', '23.1: Nearest Health Facility': 'no label', '_23.1: Nearest Health Facility_latitude': 'no label', '_23.1: Nearest Health Facility_longitude': 'no label', '_23.1: Nearest Health Facility_altitude': 'no label', '_23.1: Nearest Health Facility_precision': 'no label', '23.2: Nearest Secondary School': 'no label', '_23.2: Nearest Secondary School_latitude': 'no label', '_23.2: Nearest Secondary School_longitude': 'no label', '_23.2: Nearest Secondary School_altitude': 'no label', '_23.2: Nearest Secondary School_precision': 'no label', '24.3 Nearest Police Station': 'no label', '_24.3 Nearest Police Station_latitude': 'no label', '_24.3 Nearest Police Station_longitude': 'no label', '_24.3 Nearest Police Station_altitude': 'no label', '_24.3 Nearest Police Station_precision': 'no label', });
lyr_UpdatedAmrefCodes_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});