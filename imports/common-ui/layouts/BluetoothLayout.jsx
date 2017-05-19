/* global navigator */
import React, {
    Component
}
from 'react';
import PropTypes from 'prop-types';
// import { Provider } from 'react-redux';
// import store from '/imports/redux/store';

const gattService_cityscape = 0xCC00;
const gattChar_boardSState = 0xCC01;
const gattChar_boardInfo = 0xCC05;

//board state
const POWER_BASE = 0x00;
const POWER_SOLAR = 0x00;
const POWER_WIND = 0x01;
const POWER_COAL = 0x02;
const BUILDING_BASE = 0x20;
const BUILDING_HOUSE_SMALL = 0x00;
const BUILDING_HOUSE_LARGE = 0x01;
const BUILDING_APARTMENT_SMALL = 0x02;
const BUILDING_APARTMENT_LARGE = 0x03;
const TRANSIT_BASE = 0x40;
const TRANSIT_BUS_STOP = 0x00;
var types = {};
types[POWER_BASE + POWER_SOLAR] = {
    category: "power",
    subtype: "solar"
};
types[POWER_BASE + POWER_WIND] = {
    category: "power",
    subtype: "wind"
};
types[POWER_BASE + POWER_COAL] = {
    category: "power",
    subtype: "coal"
};
types[BUILDING_BASE + BUILDING_HOUSE_SMALL] = {
    category: "building",
    subtype: "house_small"
};
types[BUILDING_BASE + BUILDING_HOUSE_LARGE] = {
    category: "building",
    subtype: "house_large"
};
types[BUILDING_BASE + BUILDING_APARTMENT_SMALL] = {
    category: "building",
    subtype: "apt_small"
};
types[BUILDING_BASE + BUILDING_APARTMENT_SMALL] = {
    category: "building",
    subtype: "apt_large"
};
types[TRANSIT_BASE + TRANSIT_BUS_STOP] = {
    category: "transit",
    subtype: "busStop"
};

function buf2hex(buffer) { // buffer is an ArrayBuffer
    return Array.prototype.map.call(new Uint8Array(buffer), x => ('00' + x.toString(16)).slice(-2)).join('-');
}


export default class BluetoothLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            servicePromise: undefined,
            boardInitializedPromise: undefined,
            boardInitialized: false,
            connectingBluetooth: false,
            splash: true,
            powerState: [],
            buildingState: [],
            transitState: []
        }
        console.log("beep");
    }

    initializeBoardState(numPowerPins, numBuildingPins, numTransitPins) {
        for (var i = 0; i < numPowerPins; i++) {
            this.state.powerState.push({
                state: false,
                level: 255
            });
        }
        for (var i = 0; i < numBuildingPins; i++) {
            this.state.buildingState.push({
                state: false
            });
        }
        for (var i = 0; i < numTransitPins; i++) {
            this.state.transitState.push({
                state: false
            });
        }
        this.setState(() => {
            return {
                boardInitialized: true,
                splash: true
            }
        });
    }


    handleOnSStateNotify(event) {
        var value = event.target.value;
        var flags = value.getUint8(0);
        var updateNum = value.getUint8(1);
        var rawType = value.getUint8(2) & 0B01111111;
        var state = Boolean(value.getUint8(2) & 0B10000000);
        var id = value.getUint8(3);
        var level = value.getUint8(4);
        console.log('Flags is ' + flags.toString(16));
        console.log('UpdateNum is ' + updateNum);
        console.log('Type is ' + rawType.toString(16));
        console.log('State is ' + state.toString(16));
        console.log('Id is ' + id.toString(16));
        console.log('Level is ' + level.toString(16));
        console.log(buf2hex(value.buffer));
        var type = types[rawType];
        console.log(type);
        switch (type.category) {
            case "power":
                this.handlePowerUpdate(type, id, state, level);
                break;
            case "building":
                this.handleBuildingUpdate(type, id, state);
                break;
            case "transit":
                this.handleTransitUpdate(type, id, state);
                break;
        }
        this.forceUpdate(); //ew
        // document.dispatchEvent(stateUpdateEvent);
    }

    handlePowerUpdate(type, id, state, level) {
        this.state.powerState[id].state = state;
        this.state.powerState[id].level = level;
        this.state.powerState[id].subtype = type.subtype;
        //TODO make this mutable?
    }
    handleBuildingUpdate(type, id, state) {
        this.state.buildingState[id].state = state;
        this.state.buildingState[id].subtype = type.subtype;
    }
    handleTransitUpdate(type, id, state) {
        this.state.transitState[id].state = state;
        this.state.transitState[id].subtype = type.subtype;
    }

    connectBluetooth() {


        var servicePromise = navigator.bluetooth.requestDevice({
                filters: [{
                    name: 'Cityscape Board',
                    services: [gattService_cityscape]
                }]
            })
            .then(device => device.gatt.connect())
            .then(server => {
                // Getting Cityscape Service...
                return server.getPrimaryService(gattService_cityscape);
            });

        var boardInitializedPromise = servicePromise.then(service => {
                return service.getCharacteristic(gattChar_boardInfo);
            })
            .then(characteristic => {
                return characteristic.readValue();
            })
            .then(value => {
                var numPower = value.getUint8(1);
                var numBuilding = value.getUint8(2);
                var numTransit = value.getUint8(3);
                console.log('Number of Power Plant Pins: ' + numPower);
                console.log('Number of Building Pins: ' + numBuilding);
                console.log('Number of Transit Pins: ' + numTransit);
                this.initializeBoardState(numPower, numBuilding, numTransit);
            })
            .catch(error => {
                console.log(error);
            });

        servicePromise.then(service => {
                return service.getCharacteristic(gattChar_boardSState);
            })
            .then(characteristic => {
                characteristic.addEventListener('characteristicvaluechanged',
                    this.handleOnSStateNotify);
                characteristic.startNotifications();
            })
            .catch(error => {
                console.log(error);
            });

        this.setState(() => {
            return {
                servicePromise: servicePromise,
                boardInitializedPromise: boardInitializedPromise
            }
        });

    }

    dismissSplash() {
        this.setState(() => {
            return {
                splash: false
            }
        })
    }

    render() {
        return (
            <div>
            <div id="connectDimmer" className={this.state.splash ? "ui page dimmer active" : "ui page dimmer"}>
                <div className="content">
                  <div className="ui container">
                    <div className="row"><h2 className="ui inverted icon header">
                      <i className="bluetooth icon"></i>
                    </h2>
                    </div>
                    <div className="ui container">
                      <button onClick={this.connectBluetooth.bind(this)} id="connect" className="ui blue button">
                      Connect to Board
                    </button>
                    <button onClick={this.dismissSplash.bind(this)} id="explore" className="ui button">
                      Explore
                    </button>
                    </div>
                  </div>
                </div>
              </div>
        {
            this.props.content()
        }
        </div>
        )
    }
}

BluetoothLayout.propTypes = {
    content: PropTypes.func.isRequired,
};
