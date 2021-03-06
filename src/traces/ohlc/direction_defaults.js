/**
* Copyright 2012-2016, Plotly, Inc.
* All rights reserved.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/


'use strict';


module.exports = function handleDirectionDefaults(traceIn, traceOut, coerce, direction) {
    coerce(direction + '.showlegend');

    // trace-wide *showlegend* overrides direction *showlegend*
    if(traceIn.showlegend === false) {
        traceOut[direction].showlegend = false;
    }

    var nameDflt = traceOut.name + ' - ' + direction;

    coerce(direction + '.name', nameDflt);
};
