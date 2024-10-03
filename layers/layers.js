var wms_layers = [];


        var lyr_EsriWorldImagery_0 = new ol.layer.Tile({
            'title': 'Esri World Imagery',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://wiki.openstreetmap.org/wiki/Esri">Terms & Feedback</a>',
                url: 'https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_ESRIBoundariesPlaces_1 = new ol.layer.Tile({
            'title': 'ESRI Boundaries&Places',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}'
            })
        });
var lyr_as_cropland_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "as_cropland",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/as_cropland_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-20037508.342789, 616521.053562, 20035063.766771, 16855501.168091]
                            })
                        });
var format_BGDLv3_3 = new ol.format.GeoJSON();
var features_BGDLv3_3 = format_BGDLv3_3.readFeatures(json_BGDLv3_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BGDLv3_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BGDLv3_3.addFeatures(features_BGDLv3_3);
var lyr_BGDLv3_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BGDLv3_3, 
                style: style_BGDLv3_3,
                popuplayertitle: "BGDLv3",
                interactive: true,
                title: '<img src="styles/legend/BGDLv3_3.png" /> BGDLv3'
            });

lyr_EsriWorldImagery_0.setVisible(true);lyr_ESRIBoundariesPlaces_1.setVisible(true);lyr_as_cropland_2.setVisible(true);lyr_BGDLv3_3.setVisible(true);
var layersList = [lyr_EsriWorldImagery_0,lyr_ESRIBoundariesPlaces_1,lyr_as_cropland_2,lyr_BGDLv3_3];
lyr_BGDLv3_3.set('fieldAliases', {'Country': 'Country', 'ADMName': 'ADMName', 'ADMUnitID': 'ADMUnitID', 'ADMParent': 'ADMParent', 'ADMLevel': 'ADMLevel', 'ADMSpatID': 'ADMSpatID', 'AreaSqKm': 'AreaSqKm', 'Year': 'Year', 'tFGT_0': 'tFGT_0', 'tseFGT_0': 'tseFGT_0', 'tFGT_1': 'tFGT_1', 'tseFGT_1': 'tseFGT_1', 'tFGT_2': 'tFGT_2', 'tseFGT_2': 'tseFGT_2', 'tFGT_0lo': 'tFGT_0lo', 'tseFGT_0lo': 'tseFGT_0lo', 'tFGT_1lo': 'tFGT_1lo', 'tseFGT_1lo': 'tseFGT_1lo', 'tFGT_2lo': 'tFGT_2lo', 'tseFGT_2lo': 'tseFGT_2lo', });
lyr_BGDLv3_3.set('fieldImages', {'Country': 'TextEdit', 'ADMName': 'TextEdit', 'ADMUnitID': 'Range', 'ADMParent': 'Range', 'ADMLevel': 'TextEdit', 'ADMSpatID': 'Range', 'AreaSqKm': 'TextEdit', 'Year': 'TextEdit', 'tFGT_0': 'TextEdit', 'tseFGT_0': 'TextEdit', 'tFGT_1': 'TextEdit', 'tseFGT_1': 'TextEdit', 'tFGT_2': 'TextEdit', 'tseFGT_2': 'TextEdit', 'tFGT_0lo': 'TextEdit', 'tseFGT_0lo': 'TextEdit', 'tFGT_1lo': 'TextEdit', 'tseFGT_1lo': 'TextEdit', 'tFGT_2lo': 'TextEdit', 'tseFGT_2lo': 'TextEdit', });
lyr_BGDLv3_3.set('fieldLabels', {'Country': 'header label - visible with data', 'ADMName': 'inline label - always visible', 'ADMUnitID': 'inline label - always visible', 'ADMParent': 'inline label - always visible', 'ADMLevel': 'inline label - always visible', 'ADMSpatID': 'inline label - always visible', 'AreaSqKm': 'inline label - always visible', 'Year': 'inline label - always visible', 'tFGT_0': 'inline label - always visible', 'tseFGT_0': 'inline label - always visible', 'tFGT_1': 'inline label - always visible', 'tseFGT_1': 'inline label - always visible', 'tFGT_2': 'inline label - always visible', 'tseFGT_2': 'inline label - always visible', 'tFGT_0lo': 'inline label - always visible', 'tseFGT_0lo': 'inline label - always visible', 'tFGT_1lo': 'inline label - always visible', 'tseFGT_1lo': 'inline label - always visible', 'tFGT_2lo': 'inline label - always visible', 'tseFGT_2lo': 'inline label - always visible', });
lyr_BGDLv3_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'overlay';
});