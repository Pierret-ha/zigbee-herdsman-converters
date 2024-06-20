import {Definition} from '../lib/types';
import {onOff} from '../lib/modernExtend';

const definitions: Definition[] = [
    {
        zigbeeModel: ['SE-SW'],
        model: 'SEHAZB-DR-SWITCH-2',
        vendor: 'SolarEdge',
        description: 'Smart energy switch',
        extend: [onOff()],
    },
];

export default definitions;
module.exports = definitions;
const {identify, onOff, electricityMeter} = require('zigbee-herdsman-converters/lib/modernExtend');

const definition = {
    zigbeeModel: ['SE-S-PLG'],
    model: 'SE-S-PLG',
    vendor: 'SolarEdge',
    description: 'Automatically generated definition',
    extend: [identify(), onOff({"powerOnBehavior":false}), electricityMeter({"cluster":"metering"})],
    meta: {},
};

module.exports = definition;
