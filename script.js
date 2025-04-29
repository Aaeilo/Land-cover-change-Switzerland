//Création de la carte leaflet
var carte = L.map ('map').setView([46.83, 8.20], 8);

//Délimition de la carte
carte.setMaxBounds([[45.3, 5.20], [48.3, 11.20]]);
carte.setMinZoom(6); // zoom minimal


//Définitin la couche de bases
var lightLayer = L.tileLayer('https://api.mapbox.com/styles/v1/aaelio/clctcnyy000zq14s1zfm3lsxo/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiYWFlbGlvIiwiYSI6ImNsYTYwNndrZTBjMnIzb3F6NHU3OWxjaHcifQ.M6GViMHYNuaqnbss0cqVOw', {
    attribution: '&copy; <a href="https://www.mapbox.com/">Mapbox</a>'
    }
);
lightLayer.addTo(carte);//Ajout de la couche de base


///////////////////////////////////////////////////////////
////Création notre barre d'info sous forrme de "control"///
//////////////////////////////////////////////////////////
var infovaleur = L.control(
    {position: 'bottomleft'}
    );
//Création d'un div où nouus allons mettre les informations sur les pourcentage des couches
infovaleur.onAdd = function (carte) {
    this._div = L.DomUtil.create('div', 'infovaleur');
    this.update();
    return this._div;
};
//Cette variable regroupe les différents éléments qui vont être affichés à notre barre d'info
infovaleur.update = function (content) {
    if (content) {
        var selectedData = selectedLayerData[state.annee][state.typesol];
        var contents = '<b>' +  + '</b><br />' + selectedData + '%';
        this._div.innerHTML = '<h4>Pourcentage de surface en hectare</h4>' + content;
    } else {
        this._div.innerHTML = '<h4>Pourcentage de surface en hectare</h4>Passez la souris sur un canton';
    }
};
infovaleur.addTo(carte);


//////////////////////////////////////////
////Traitement des différentes couches////
/////////////////////////////////////////
//Création des fonctions pour les différents gradients des couleurs à chaque type de sol:
//Urbain
function getColor_u(d) {
    return d > 34.9 ? '#a50f15' :
           d > 22.5 ? '#de2d26' :
           d > 12.5 ? '#fb6a4a' :
           d > 6.5 ? '#fcae91' :
           d > 1.5 ? '#fee5d9' :
                    '#fee5d9';
}

//Agricole
function getColor_a(d) {
    return d > 50 ? '#993404' :
           d > 42.3 ? '#d95f0e' :
           d > 31.2 ? '#fe9929' :
           d > 21.2 ? '#fed98e' :
           d > 11.5 ? '#ffffd4' :
                    '#ffffd4';
}

//Boisées
function getColor_b(d) {
    return d > 38.7 ? '#006d2c' :
           d > 32.3 ? '#31a354' :
           d > 25.7 ? '#74c476' :
           d > 12.6 ? '#bae4b3' :
           d > 12.3 ? '#edf8e9' :
                    '#edf8e9';
}

//Imprpductives
function getColor_i(d) {
    return d > 42 ? '#08519c' :
           d > 24 ? '#3182bd' :
           d > 16.3 ? '#6baed6' :
           d > 7 ? '#bdd7e7' :
           d > 0.69 ? '#eff3ff': 
                    '#eff3ff';
}

//Création des styles pour chaque couche de choroplète: au total nous avons 16 couches (en fontion de la période et de l'occupation du sol)
function style1(feature){
    return{
        fillColor: getColor_u(feature.properties.prop_u_85),
        weight: 2,
        opacity: 1,
        color: 'grey',
        dashArray: '0.7',
        fillOpacity: 1
    };
}
function style2(feature){
    return{
        fillColor: getColor_u(feature.properties.prop_u_97),
        weight: 2,
        opacity: 1,
        color: 'grey',
        dashArray: '0.7',
        fillOpacity: 1
    };
}

function style3(feature){
    return{
        fillColor: getColor_u(feature.properties.prop_u_09),
        weight: 2,
        opacity: 1,
        color: 'grey',
        dashArray: '0.7',
        fillOpacity: 1
    };
}

function style4(feature){
    return{
        fillColor: getColor_u(feature.properties.prop_u_18),
        weight: 2,
        opacity: 1,
        color: 'grey',
        dashArray: '0.7',
        fillOpacity: 1
    };
}

function style5(feature){
    return{
        fillColor: getColor_a(feature.properties.prop_a_85),
        weight: 2,
        opacity: 1,
        color: 'grey',
        dashArray: '0.7',
        fillOpacity: 1
    };
}

function style6(feature){
    return{
        fillColor: getColor_a(feature.properties.prop_a_97),
        weight: 2,
        opacity: 1,
        color: 'grey',
        dashArray: '0.7',
        fillOpacity: 1
    };
}

function style7(feature){
    return{
        fillColor: getColor_a(feature.properties.prop_a_09),
        weight: 2,
        opacity: 1,
        color: 'grey',
        dashArray: '0.7',
        fillOpacity: 1
    };
}

function style8(feature){
    return{
        fillColor: getColor_a(feature.properties.prop_a_18),
        weight: 2,
        opacity: 1,
        color: 'grey',
        dashArray: '0.7',
        fillOpacity: 1
    };
}

function style9(feature){
    return{
        fillColor: getColor_b(feature.properties.prop_b_85),
        weight: 2,
        opacity: 1,
        color: 'grey',
        dashArray: '0.7',
        fillOpacity: 1
    };
}

function style10(feature){
    return{
        fillColor: getColor_b(feature.properties.prop_b_97),
        weight: 2,
        opacity: 1,
        color: 'grey',
        dashArray: '0.7',
        fillOpacity: 1
    };
}

function style11(feature){
    return{
        fillColor: getColor_b(feature.properties.prop_b_09),
        weight: 2,
        opacity: 1,
        color: 'grey',
        dashArray: '0.7',
        fillOpacity: 1
    };
}

function style12(feature){
    return{
        fillColor: getColor_b(feature.properties.prop_b_18),
        weight: 2,
        opacity: 1,
        color: 'grey',
        dashArray: '0.7',
        fillOpacity: 1
    };
}

function style13(feature){
    return{
        fillColor: getColor_i(feature.properties.prop_i_85),
        weight: 2,
        opacity: 1,
        color: 'grey',
        dashArray: '0.7',
        fillOpacity: 1
    };
}

function style14(feature){
    return{
        fillColor: getColor_i(feature.properties.prop_i_97),
        weight: 2,
        opacity: 1,
        color: 'grey',
        dashArray: '0.7',
        fillOpacity: 1
    };
}

function style15(feature){
    return{
        fillColor: getColor_i(feature.properties.prop_i_09),
        weight: 2,
        opacity: 1,
        color: 'grey',
        dashArray: '0.7',
        fillOpacity: 1
    };
}

function style16(feature){
    return{
        fillColor: getColor_i(feature.properties.prop_i_18),
        weight: 2,
        opacity: 1,
        color: 'grey',
        dashArray: '0.7',
        fillOpacity: 1
    };
}       
//Création des variable pour nos 16 couches et application des fonction sur ces dernières
var u_85 = L.geoJson(cantons, { style: style1, onEachFeature: onEachFeature, id:'u_85' }).on('click', selectCanton);
var u_97 = L.geoJson(cantons, { style: style2, onEachFeature: onEachFeature, id:'u_97' }).on('click', selectCanton);
var u_09 = L.geoJson(cantons, { style: style3, onEachFeature: onEachFeature, id:'u_09' }).on('click', selectCanton);
var u_18 = L.geoJson(cantons, { style: style4, onEachFeature: onEachFeature, id:'u_18' }).on('click', selectCanton);
var a_85 = L.geoJson(cantons, { style: style5, onEachFeature: onEachFeature, id:'a_85' }).on('click', selectCanton);
var a_97 = L.geoJson(cantons, { style: style6, onEachFeature: onEachFeature, id:'a_97' }).on('click', selectCanton);
var a_09 = L.geoJson(cantons, { style: style7, onEachFeature: onEachFeature, id:'a_09' }).on('click', selectCanton);
var a_18 = L.geoJson(cantons, { style: style8, onEachFeature: onEachFeature, id:'a_18' }).on('click', selectCanton);
var b_85 = L.geoJson(cantons, { style: style9, onEachFeature: onEachFeature, id:'b_85' }).on('click', selectCanton);
var b_97 = L.geoJson(cantons, { style: style10, onEachFeature: onEachFeature, id:'b_97' }).on('click', selectCanton);
var b_09 = L.geoJson(cantons, { style: style11, onEachFeature: onEachFeature, id:'b_09' }).on('click', selectCanton);
var b_18 = L.geoJson(cantons, { style: style12, onEachFeature: onEachFeature, id:'b_18' }).on('click', selectCanton);
var i_85 = L.geoJson(cantons, { style: style13, onEachFeature: onEachFeature, id:'i_85' }).on('click', selectCanton);
var i_97 = L.geoJson(cantons, { style: style14, onEachFeature: onEachFeature, id:'i_97' }).on('click', selectCanton);
var i_09 = L.geoJson(cantons, { style: style15, onEachFeature: onEachFeature, id:'i_09' }).on('click', selectCanton);
var i_18 = L.geoJson(cantons, { style: style16, onEachFeature: onEachFeature, id:'i_18' }).on('click', selectCanton);
//Création d'un dictionnaire qui recgroupe toutes les en fonction de leur type de sols (checkbox)
var layers = {
    urbain: {
        '1985': u_85,
        '1997': u_97,
        '2009': u_09,
        '2018': u_18
    },

    agricole: {
        '1985': a_85,
        '1997': a_97,
        '2009': a_09,
        '2018': a_18
    },

    boisees: {
        '1985': b_85,
        '1997': b_97,
        '2009': b_09,
        '2018': b_18
    },

    improductives:{
        '1985': i_85,
        '1997': i_97,
        '2009': i_09,
        '2018': i_18
    }
}

//Création d'une variable globale qui regroupe toutes les couches, elle va être utiles pour les prochaines fonctions
var layersToReset = [u_85, u_97, u_09, u_18, a_85, a_97, a_09, a_18, b_85, b_97, b_09, b_18, i_85, i_97, i_09, i_18];
//Création d'une variable globale qui regroupe tous les styles des 16 couches
var styles = {
    u_85: style1,
    u_97: style2,
    u_09: style3, 
    u_18: style4,
    a_85: style5,
    a_97: style6,
    a_09: style7,
    a_18: style8,
    b_85: style9,
    b_97: style10,
    b_09: style11,
    b_18: style12,
    i_85: style13,
    i_97: style14,
    i_09: style15,
    i_18: style16
};




/////////////////////////////////////////////
////Création des différentes intéractions///
///////////////////////////////////////////

//Création d'un dictionnaire qui va regrouper l'ensemble des couches en fonction des années
var selectedLayerData = {};

var infoVisible = false; // Création d'une variable pour suivre l'état du div "info" (bare d'info)

//Création d'une fonction qui va nous permette de permettre d'acquérir l'information d'un canton en le survolant avec la souris
function highlightFeature(e, typesol) {
    var layer = e.target;

    layer.setStyle({//Changement de style lorsqu'on survole l'un des cantons
        weight: 5,
        color: '#666',
        dashArray: '',
        fillOpacity: 0.7
    });

    var properties = layer.feature.properties;//Récuparation des données dans le fichier GeoJson 
    var content = "<h4>" + properties.name + "</h4>";//Nom des cantons

      selectedLayerData = {
        '1985': {
            'urbain': properties.prop_u_85,//champ qui regroupe les proportion des surfaces urbaines de chaque en 1985
            'agricole': properties.prop_a_85,//...
            'boisees': properties.prop_b_85,
            'improductives': properties.prop_i_85
        },

        '1997': {
            'urbain': properties.prop_u_97,
            'agricole': properties.prop_a_97,
            'boisees': properties.prop_b_97,
            'improductives': properties.prop_i_97
        },

        '2009': {
            'urbain': properties.prop_u_09,
            'agricole': properties.prop_a_09,
            'boisees': properties.prop_b_09,
            'improductives': properties.prop_i_09
        },

        '2018': {
            'urbain': properties.prop_u_18,
            'agricole': properties.prop_a_18,
            'boisees': properties.prop_b_18,
            'improductives': properties.prop_i_18
        }
    };
    //Cette variable nous sert à stocker les donnés en fonction de l'année et du type de sol choisis grâce au clés
    var selectedData = selectedLayerData[state.annee][state.typesol.toLowerCase().trim()];
    if (selectedData != undefined) {
        content += selectedData + "%</p>";
    } else {
        content += "Données non disponible</p>";
    }
    
    layer.bringToFront();//Permet de mettre en "valeur" le canton survolé
    infovaleur.update(content);//Mise à jours des données en fonction du canton survolé
    selectCanton(e);
}

//Cette fonction nous permet de réinitialiser le style des couches lorsque la souris n'est plus sur un canton
function resetHighlight(e) {
    for (let i = 0; i < layersToReset.length; i++) {
        var layer = layersToReset[i];
        var layerId = layer.options.id;
        var style = styles[layerId]
        layer.setStyle(style);
    }   
}

//Cette fonction nous sert à la fois de faire appaître une nouvelle page d'info à 
//la droite de l'écran lorsqu'on clique sur un canton mais aussi de zoomer sur la canton sélectionné
function zoomToFeature(e) {
    carte.fitBounds(e.target.getBounds());

    var properties = e.target.feature.properties;
    //Cette variable regroupe plusieurs éléments vont-être affiché dans la nouvelle barre d'info
    var content2 = "<h4 style='text-align: center;'>Superficie de chaque occupation<br>des sols dans le canton sélectionné:  "  + properties.name + "</h4>"
    content2 += "<p style='text-align: left;'>Surface totale:  " + properties.surface_totale + " ha</p>"
    content2 += "<p style='text-align: left;'>Année:  " + state.annee + "</p>"
    document.getElementById('info').style.left = 'calc(100vw - 420px)';


    updateInfo(content2);//Mise à jours du contenu lorsqu'on clique sur une nouveau canton

    if (!infoVisible) {//Cette barre d'info latérale va être afficher ou disparaître selon l'endroit où va cliquer avec la souris
        var infoDiv = document.getElementById('info');
        infoDiv.style.display = 'block';
        infoVisible = true;
    }
}

//Cette fonction regroupe toutes les fonctions citées plus haut et vont être appliquée à "features" qui composent notre GeoJson
function onEachFeature(feature, layer) {
    layer.on({
        mouseover: function(e) { highlightFeature(e, state.typesol); },
        mouseout: resetHighlight,
        click: function(e) { zoomToFeature(e); selectCanton(e); },//La fonction "selectCanton()" nous permet cliquer sur un canton
    });
}

//Cette fonction va nous permettre de mettre à jours les données selon le canton survolé avec la souris
function infovaleur_update(content) {
    var selectedData = selectedLayerData[state.annee][state.typesol];
    content += "<p>Surface" + state.typesol + "(" + state.annee + "):" + selectedData + "ha</p>";
    layer.bringToFront();
    infovaleur.update(content);
}

//Cette fonction nous a permit de créer le la variable "content2" qui contient les éléments de la barre d'infos latérale
function updateInfo(content2) {
  var tutoDiv = document.getElementById('titre');
  tutoDiv.innerHTML = content2;
}

//Cette fonction va nous permettre de faire apparaître ou disparaître la barre d'info latérale
window.addEventListener('click', function(event) {
    var target = event.target;
    var infoDiv = document.getElementById('info');

    // Vérifier si le clic a été effectué à l'intérieur du div du canton
    if (target.closest('.carte-interactive') !== null) {
        // Clic à l'intérieur du div du canton, ne rien faire si le div "info" est déjà visible
        if (infoVisible) {
            return;
        }
    } else {
        // Clic en dehors du div du canton, masquer le div "info" s'il est visible
        if (infoVisible) {
            infoDiv.style.display = 'none';
            infoVisible = false;
        }
    }
});

//Cette variable contient des clés qui nous ont permis et qui va nous permettre de créer les différentes intéractions
//entre les différentes couches.
var state = {
    annee: 1985,
    typesol: 'urbain',
    currentLayer: null,
    cantons: null,
    cantonData: null,
    data: null,
}


////Création du slider////
//Ce slider (ou curseur temporel) va nous permettre de sélectionné un couche selon les années
function initSlider () {
    var cantonDatalider = document.getElementById('slider-round');
    var valueforslider = ['1985', '1997', '2009', '2018']; //les années qui apparait sur le slider 

    //Cette variable va nous permettre de paramètre les valeur du début et de la fin du slider
    var format = {
        to: function(value){
            return valueforslider[Math.round(value)];
        },
        from: function (value) {
            return valueforslider.indexOf(value.toString());
        }
    };

    //Utilisation de la librairie noUiSlider
    noUiSlider.create(cantonDatalider,{
        start: '1985',
        range: { min: 0, max: valueforslider.length - 1 },
        step: 1,
        tooltips: true,
        format: format,
        pips: { mode: 'step', format: format, density: 50 },
    });
    //Cette fonction va nous permettre sélection une couche selon l'année, et pour cela utilisation de la clé année
    cantonDatalider.noUiSlider.on('change', function (annees) {
        state.annee = annees[0]
        updateLayers()
    });
    
}
initSlider()

//Cette fonction nous permet de changer l'occupation grâce au bouton du type radio
function changeTypesol (typesol) {
    state.typesol = typesol.toLowerCase().trim();
    updateLayers()
}

//Cette fonction nous permet de cliquer sur un canton et de faire apparaître de la barre latérale un graphique
function selectCanton (evt) {
    if (evt.layer && evt.layer.feature) {
    state.cantons = evt.layer.feature;
    cantonData = state.cantons.properties;//Création cette variable pour la création du graphique (barplot)
    drawBarplot();//La sélection d'un canton va donner la création d'un barplot
}
}
//Cette fonction nous permet d'appeler la fonction "drawChart" lorsqu'on clique sur un canton

//Cette fonction nous permet faire apparître une des 16 couches en fonction de l'année sélectionné avec le slider
function updateLayers() {
    if (state.currentLayer !== null) {
        carte.removeLayer(state.currentLayer)//Utilisation de la clé currentLayer
        state.currentLayer = null
    }

    state.currentLayer = layers[state.typesol][state.annee]//Combinaison des clès typesole et annee
    state.currentLayer.addTo(carte);
}

updateLayers();




//////////////////////////////
////Création du graphique////
////////////////////////////

//Le barplot va représenter la superficie de chaque occupation de sol, en hectar, de chaque canton.

function drawBarplot () {
    
    //Création des différentes dataset issues de notre fichier GeoJson qui regroupe les données en fonction des 4 période
    var data1 =//1985
    [{ name: "Surface urbaine", value: cantonData.surf_urb85},
    { name: "Surface agricole", value: cantonData.surf_agr85},
    { name: "Surface boisée", value: cantonData.surf_boi85},
    { name: "Surface improductives", value: cantonData.surf_imp85}];

    var data2 = //1997
    [{ name: "Surface urbaine", value: cantonData.surf_urb97},
    { name: "Surface agricole", value: cantonData.surf_agr97},
    { name: "Surface boisée", value: cantonData.surf_boi97},
    { name: "Surface improductives", value: cantonData.surf_imp97}];

    var data3 =//2009
    [{ name: "Surface urbaine", value: cantonData.surf_urb09},
    { name: "Surface agricole", value: cantonData.surf_agr09},
    { name: "Surface boisée", value: cantonData.surf_boi09},
    { name: "Surface improductives", value: cantonData.surf_imp09}];

    var data4 =//2018
    [{ name: "Surface urbaine", value: cantonData.surf_urb18},
    { name: "Surface agricole", value: cantonData.surf_agr18},
    { name: "Surface boisée", value: cantonData.surf_boi18},
    { name: "Surface improductives", value: cantonData.surf_imp18}];

    var data = {// On attribut à chaque dataset l'année qui lui correspond
        '1985': data1,
        '1997': data2, 
        '2009': data3,
        '2018': data4
    }[state.annee];

    //Dimensions de notre graphique : problèmes avec l'affichage du graphique
    var margin = {top: 0, right:80, bottom: 70, left: 60 },
    width = 470 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

    //Attribution des couleurs pour chaque bar
    var colorScale = d3.scaleOrdinal()
    .domain(data.map(d => d.name))
    .range(['#FE8E8E','#fed98e','#bae4b3','#bdd7e7']);
    
    //Dimensions de l'axe des y
    var yScale = d3
    .scaleLinear()
    .domain([0, d3.max(data, d => d.value)])
    .range([height, 0]);
    
    //Dimensions de l'axe des x
    var xScale = d3.scaleBand()
    .domain(data.map((d) => d.name))
    .range([0, width])
    .padding(0.1);

    //Création de l'axe des x
    var xAxis = d3.axisBottom(xScale);
    //Création de l'axe des x
    var yAxis = d3.axisLeft(yScale);
    //Création de notre svg
    var svg = d3.select("#barplot").select("svg");

    //Cette condition vérifie si le svg existe ou non, et en fonction de cela, 
    //crée un nouveau svg avec des axes et des titres appropriés, 
    //ou met à jour les valeurs de l'axe y existant avec une transition fluide.
    if (svg.empty()) {
        svg = d3 //Application des dimensions du graphique dans notre svg
        .select("#barplot")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .attr("id", "barplot-svg");

        svg.append("g")//Application de certains paramètres sur l'axe des x
        .attr("class", "x-axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis);

        svg.append("g")//Application de certains paramètres sur l'axe des y
        .attr("class", "y-axis")
        .attr("transform", "translate(" + (margin.left + 10) + ", 0)")
        .call(yAxis);

        svg.append("text")//Tentative de faire apparaître un titre pour l'axe des Y: failed
        .attr("transform", "rotate(-90)")
        .attr("x", -(margin.left - 20))
        .attr("y", -30)
        .attr("text-anchor", "middle")
        .text("Superficie en hectare");

        svg.append("text")//Ajout d'un titre pour l'axe des x
        .attr("x", width / 2)
        .attr("y", height + 40)
        .attr("text-anchor", "middle")
        .text("Occupation du sol");
    } else {
        svg.select(".y-axis")//Transition de notre axe des y.
        .transition()
        .duration(500)
        .call(yAxis);
    }
    
    //Création d'un svg rectangle qui va composé notre barplot
    var rect = svg.selectAll("rect").data(data);
    
    //Création et animation de nos barres en fonction des données et des couleurs qui leur seront attribuées
    //quand on cliquera sur un canton
    rect
    .enter()
    .append("rect")
    .attr("x", d => xScale(d.name))
    .attr("y", height)
    .attr("height", 0)
    .attr("fill", function (d) {
       ; return colorScale(d.name);
    })
    .merge(rect)
    .transition()
    .duration(500)
    .attr("x", d => xScale(d.name))
    .attr("y", d => yScale(d.value))
    .attr("width", xScale.bandwidth())
    .attr("height",d => height - yScale(d.value));

    rect.exit().remove();//Cette ligne code va retirer les rectangle de base pour afficher les nouvelles barres
    //avec la sélecyion d'un canton.

    //Cette variable va nous permettre d'afficher les valeurs de chaque barre ainsi que d'ajouter une transition
    //à chaque fois les données changent: Problème d'affichage
    var barText = svg.selectAll(".bar-text")
    .data(data, function(d) {
        return d.name;});

    barText.enter()
    .append("text")
    .attr("class", "bar-text")
    .merge(barText)
    .transition()
    .duration(500)
    //Position des valeurs sur le graphique pour éviter chevauchement: failed avec l'axe des Y
    .attr("x", function(d) {
        return xScale(d.name) + xScale.bandwidth() / 2;
    })
    .attr("y", function(d) {
        return yScale(d.value) - 5;
    })
    .text(function(d) {
        return d.value;
    })
    .attr("text-anchor", "middle")
    .attr("fill", "black")
    .style("font-size", "12px");

    barText.exit().remove();//Cette ligne code va retirer les valeur de base pour afficher les nouvelles
    //avec la sélection d'un canton.


    //Cette fonction va mettre  jour les données lorqu'on aura sélectionner un nouveau canton
    function updateChart(data) {
        //Mettre à jour l'échelle Y
        yScale.domain([0, d3.max(data, d => d.value)]);

        //Mettre à jour l'axe y avec une transition
        svg.select(".y-axis")
        .transition()
        .duration(500)
        .call(yAxis);
        //Mettre à jour les barre du graphique
        var rect = d3.selectAll("rect")
        .data(data);
        rect.transition()
        .duration(500)
        .attr("y", function(d) {
            return yScale(d.value);
        })
        .attr("height", function(d) {
            return height - yScale(d.value);

        });
        
        //Mettre à jour les valeurs sur les barre
        barText.data(data, function(d) {
            return d.name;
        })
        .transition()
        .duration(500)
        .attr("x", function(d) {
            return xScale(d.name) + xScale.bandwidth() / 2;})
        .attr("y", function(d) {
            return yScale(d.value) - 5;})
        .text(function(d) {
            return d.value;
        });

    }

    updateChart(data);
}





///////////////////////////////
////Création de la légende////
/////////////////////////////

$(document).ready(function() {showGroup(['Urbain']);});//Affichage par défaut de la légende 'Urbaine'

//Fonction pour modifier la légende à chaque fois qu'on clique sur l'un des bouton
function showGroup(groups) {
    $("#hideables object").hide();

    $.each(groups, function(i, item) {
        $('#'+item).show();
    });
}

showGroup();