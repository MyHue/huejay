#!/usr/bin/env node

'use strict';

let client = require('../init-client');

console.log('Retrieving sensors...');
console.log();

client.sensors.getAll()
  .then(sensors => {
    for (let sensor of sensors) {
      console.log(`Sensor [${sensor.id}]: ${sensor.name}`);
      console.log(`  Type: ${sensor.type}`);
      console.log(`  Model Id: ${sensor.modelId}`);
      console.log(`  Manufacturer: ${sensor.manufacturer}`);
      console.log(`  Software Version: ${sensor.softwareVersion}`);
      console.log(`  Unique Id: ${sensor.uniqueId}`);
      console.log(`  Config:`);
      for (let key in sensor.config) {
        console.log(`    ${key}: ${sensor.config[key]}`);
      }

      console.log(`  State:`);
      for (let key in sensor.state) {
        console.log(`    ${key}: ${sensor.state[key]}`);
      }

      console.log();
    }
  })
  .catch(error => {
    console.log(error.stack);
  });