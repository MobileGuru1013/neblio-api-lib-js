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
    instance = new Neblioapi.GetTxResponse();
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

  describe('GetTxResponse', function() {
    it('should create an instance of GetTxResponse', function() {
      // uncomment below and update the code to test GetTxResponse
      //var instane = new Neblioapi.GetTxResponse();
      //expect(instance).to.be.a(Neblioapi.GetTxResponse);
    });

    it('should have the property txid (base name: "txid")', function() {
      // uncomment below and update the code to test the property txid
      //var instane = new Neblioapi.GetTxResponse();
      //expect(instance).to.be();
    });

    it('should have the property version (base name: "version")', function() {
      // uncomment below and update the code to test the property version
      //var instane = new Neblioapi.GetTxResponse();
      //expect(instance).to.be();
    });

    it('should have the property locktime (base name: "locktime")', function() {
      // uncomment below and update the code to test the property locktime
      //var instane = new Neblioapi.GetTxResponse();
      //expect(instance).to.be();
    });

    it('should have the property vin (base name: "vin")', function() {
      // uncomment below and update the code to test the property vin
      //var instane = new Neblioapi.GetTxResponse();
      //expect(instance).to.be();
    });

    it('should have the property vout (base name: "vout")', function() {
      // uncomment below and update the code to test the property vout
      //var instane = new Neblioapi.GetTxResponse();
      //expect(instance).to.be();
    });

    it('should have the property blocktime (base name: "blocktime")', function() {
      // uncomment below and update the code to test the property blocktime
      //var instane = new Neblioapi.GetTxResponse();
      //expect(instance).to.be();
    });

    it('should have the property blockheight (base name: "blockheight")', function() {
      // uncomment below and update the code to test the property blockheight
      //var instane = new Neblioapi.GetTxResponse();
      //expect(instance).to.be();
    });

    it('should have the property totalsent (base name: "totalsent")', function() {
      // uncomment below and update the code to test the property totalsent
      //var instane = new Neblioapi.GetTxResponse();
      //expect(instance).to.be();
    });

    it('should have the property fee (base name: "fee")', function() {
      // uncomment below and update the code to test the property fee
      //var instane = new Neblioapi.GetTxResponse();
      //expect(instance).to.be();
    });

    it('should have the property blockhash (base name: "blockhash")', function() {
      // uncomment below and update the code to test the property blockhash
      //var instane = new Neblioapi.GetTxResponse();
      //expect(instance).to.be();
    });

    it('should have the property time (base name: "time")', function() {
      // uncomment below and update the code to test the property time
      //var instane = new Neblioapi.GetTxResponse();
      //expect(instance).to.be();
    });

    it('should have the property confirmations (base name: "confirmations")', function() {
      // uncomment below and update the code to test the property confirmations
      //var instane = new Neblioapi.GetTxResponse();
      //expect(instance).to.be();
    });

    it('should have the property valueOut (base name: "valueOut")', function() {
      // uncomment below and update the code to test the property valueOut
      //var instane = new Neblioapi.GetTxResponse();
      //expect(instance).to.be();
    });

    it('should have the property valueIn (base name: "valueIn")', function() {
      // uncomment below and update the code to test the property valueIn
      //var instane = new Neblioapi.GetTxResponse();
      //expect(instance).to.be();
    });

    it('should have the property fees (base name: "fees")', function() {
      // uncomment below and update the code to test the property fees
      //var instane = new Neblioapi.GetTxResponse();
      //expect(instance).to.be();
    });

    it('should have the property size (base name: "size")', function() {
      // uncomment below and update the code to test the property size
      //var instane = new Neblioapi.GetTxResponse();
      //expect(instance).to.be();
    });

  });

}));
