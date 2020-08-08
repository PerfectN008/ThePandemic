import React, { useState } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import { scaleQuantile } from 'd3-scale';
import ReactTooltip from 'react-tooltip';

import LinearGradient from './LinearGradient.js';

/**
* Courtesy: https://rawgit.com/Anujarya300/bubble_maps/master/data/geography-data/india.topo.json
* Looking topojson for other countries/world? 
* Visit: https://github.com/markmarkoh/datamaps
*/
const INDIA_TOPO_JSON = require('./india.topo.json');

const PROJECTION_CONFIG = {
  scale: 350,
  center: [78.9629, 22.5937] // always in [East Latitude, North Longitude]
};

// Red Variants
const COLOR_RANGE = [
  '#83FF33',
  '#CAFF33',
  '#FFFF33',
  '#FFCE33',
  '#FFA233',
  '#FF7433',
  '#FF5233',
  '#FF3F33',
  '#FF3333'
];

const DEFAULT_COLOR = '#EEE';

const geographyStyle = {
  default: {
    outline: 'none'
  },
  hover: {
    fill: '#ccc',
    transition: 'all 250ms',
    outline: 'none'
  },
  pressed: {
    outline: 'none'
  }
};

// will generate random heatmap data on every call


const MapRepresentation = ({statewiseData, selected_state}) => {

    const getHeatMapData = () => {
        const arr = []
        statewiseData ?  (statewiseData.slice(1).map(ele => arr.push({ id: ele.statecode, state: ele.state, value: eval(ele.confirmed)}))) : arr.slice(0)
        arr.sort((a,b) => a.id>b.id ? 1 : -1)
        return arr;
      };

  const [tooltipContent, setTooltipContent] = useState('');

  

  const gradientData = {
    fromColor: COLOR_RANGE[0],
    toColor: COLOR_RANGE[COLOR_RANGE.length - 1],
    min: 0,
    max: getHeatMapData().reduce((max, item) => (item.value > max ? item.value : max), 0)
  };

  const colorScale = scaleQuantile()
    .domain(getHeatMapData().map(d => d.value))
    .range(COLOR_RANGE);

  const onMouseEnter = (geo, current = { value: 'NA' }) => {
    return () => {
      setTooltipContent(`${geo.properties.name}: ${current.value}`);
    };
  };

  const onMouseLeave = () => {
    setTooltipContent('');
  };

  return (
      statewiseData ? 
        <div>
        <ReactTooltip>{tooltipContent}</ReactTooltip>
            <ComposableMap className='map'
            projectionConfig={PROJECTION_CONFIG}
            projection="geoMercator"
            width={600}
            height={220}
            data-tip=""
            >
            <Geographies geography={INDIA_TOPO_JSON} >
                {({ geographies }) =>
                geographies.map(geo => {
                    //console.log(geo.id);
                    const current = getHeatMapData().find(s => s.id === geo.id);
                    return (
                    <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill={current ? colorScale(current.value) : DEFAULT_COLOR}
                        style={geographyStyle}
                        onMouseEnter={onMouseEnter(geo, current)}
                        onMouseLeave={onMouseLeave}
                    />
                    );
                })
                }
            </Geographies>
            </ComposableMap>
            <LinearGradient data={gradientData} />
        </div>
        : <div>Loading</div>
  );
}

export default MapRepresentation;
