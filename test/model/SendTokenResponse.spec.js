/**
 * Neblio REST API Suite
 * APIs for Interacting with NTP1 Tokens & The Neblio Blockchain
 *
 * OpenAPI spec version: 1.2.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Neblioapi);
  }
}(this, function(expect, Neblioapi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new Neblioapi.SendTokenResponse();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('SendTokenResponse', function() {
    it('should create an instance of SendTokenResponse', function() {
      // uncomment below and update the code to test SendTokenResponse
      //var instane = new Neblioapi.SendTokenResponse();
      //expect(instance).to.be.a(Neblioapi.SendTokenResponse);
    });

    it('should have the property txHex (base name: "txHex")', function() {
      // uncomment below and update the code to test the property txHex
      //var instane = new Neblioapi.SendTokenResponse();
      //expect(instance).to.be();
    });

    it('should have the property ntp1OutputIndexes (base name: "ntp1OutputIndexes")', function() {
      // uncomment below and update the code to test the property ntp1OutputIndexes
      //var instane = new Neblioapi.SendTokenResponse();
      //expect(instance).to.be();
    });

    it('should have the property multisigOutputs (base name: "multisigOutputs")', function() {
      // uncomment below and update the code to test the property multisigOutputs
      //var instane = new Neblioapi.SendTokenResponse();
      //expect(instance).to.be();
    });

  });

}));
