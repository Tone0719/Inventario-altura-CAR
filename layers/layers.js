var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_InventarioForestal_1 = new ol.format.GeoJSON();
var features_InventarioForestal_1 = format_InventarioForestal_1.readFeatures(json_InventarioForestal_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_InventarioForestal_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_InventarioForestal_1.addFeatures(features_InventarioForestal_1);
var lyr_InventarioForestal_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_InventarioForestal_1, 
                style: style_InventarioForestal_1,
                popuplayertitle: 'InventarioForestal',
                interactive: true,
    title: 'InventarioForestal<br />\
    <img src="styles/legend/InventarioForestal_1_0.png" /> 3.5 - 6.6<br />\
    <img src="styles/legend/InventarioForestal_1_1.png" /> 6.6 - 10<br />\
    <img src="styles/legend/InventarioForestal_1_2.png" /> 10 - 12.3<br />\
    <img src="styles/legend/InventarioForestal_1_3.png" /> 12.3 - 14<br />\
    <img src="styles/legend/InventarioForestal_1_4.png" /> 14 - 15.5<br />\
    <img src="styles/legend/InventarioForestal_1_5.png" /> 15.5 - 17.5<br />\
    <img src="styles/legend/InventarioForestal_1_6.png" /> 17.5 - 20.7<br />\
    <img src="styles/legend/InventarioForestal_1_7.png" /> 20.7 - 30.7<br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_InventarioForestal_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_InventarioForestal_1];
lyr_InventarioForestal_1.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'ESPECIE': 'ESPECIE', 'DN_cm': 'DN_cm', 'DB_cm': 'DB_cm', 'H': 'H', 'SF': 'SF', 'DN_m': 'DN_m', 'AB': 'AB', 'V': 'V', 'layer': 'layer', 'path': 'path', });
lyr_InventarioForestal_1.set('fieldImages', {'fid': '', 'ID': '', 'ESPECIE': '', 'DN_cm': '', 'DB_cm': '', 'H': '', 'SF': '', 'DN_m': '', 'AB': '', 'V': '', 'layer': '', 'path': '', });
lyr_InventarioForestal_1.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'ESPECIE': 'no label', 'DN_cm': 'no label', 'DB_cm': 'no label', 'H': 'no label', 'SF': 'no label', 'DN_m': 'no label', 'AB': 'no label', 'V': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_InventarioForestal_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});