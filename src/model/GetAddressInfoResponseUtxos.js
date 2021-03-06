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

import ApiClient from '../ApiClient';
import GetAddressInfoResponseTokens from './GetAddressInfoResponseTokens';

/**
 * The GetAddressInfoResponseUtxos model module.
 * @module model/GetAddressInfoResponseUtxos
 * @version 1.2.1
 */
class GetAddressInfoResponseUtxos {
    /**
     * Constructs a new <code>GetAddressInfoResponseUtxos</code>.
     * @alias module:model/GetAddressInfoResponseUtxos
     */
    constructor() { 
        
        GetAddressInfoResponseUtxos.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetAddressInfoResponseUtxos</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetAddressInfoResponseUtxos} obj Optional instance to populate.
     * @return {module:model/GetAddressInfoResponseUtxos} The populated <code>GetAddressInfoResponseUtxos</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetAddressInfoResponseUtxos();

            if (data.hasOwnProperty('index')) {
                obj['index'] = ApiClient.convertToType(data['index'], 'Number');
            }
            if (data.hasOwnProperty('txid')) {
                obj['txid'] = ApiClient.convertToType(data['txid'], 'String');
            }
            if (data.hasOwnProperty('blockheight')) {
                obj['blockheight'] = ApiClient.convertToType(data['blockheight'], 'Number');
            }
            if (data.hasOwnProperty('blocktime')) {
                obj['blocktime'] = ApiClient.convertToType(data['blocktime'], 'Number');
            }
            if (data.hasOwnProperty('scriptPubKey')) {
                obj['scriptPubKey'] = ApiClient.convertToType(data['scriptPubKey'], Object);
            }
            if (data.hasOwnProperty('used')) {
                obj['used'] = ApiClient.convertToType(data['used'], 'Boolean');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'Number');
            }
            if (data.hasOwnProperty('tokens')) {
                obj['tokens'] = ApiClient.convertToType(data['tokens'], [GetAddressInfoResponseTokens]);
            }
        }
        return obj;
    }


}

/**
 * Index of the UTXO at this address
 * @member {Number} index
 */
GetAddressInfoResponseUtxos.prototype['index'] = undefined;

/**
 * Txid of this UTXO
 * @member {String} txid
 */
GetAddressInfoResponseUtxos.prototype['txid'] = undefined;

/**
 * Blockheight of the UTXO
 * @member {Number} blockheight
 */
GetAddressInfoResponseUtxos.prototype['blockheight'] = undefined;

/**
 * Blocktime of the UTXO
 * @member {Number} blocktime
 */
GetAddressInfoResponseUtxos.prototype['blocktime'] = undefined;

/**
 * Object representing the scruptPubKey of the UTXO
 * @member {Object} scriptPubKey
 */
GetAddressInfoResponseUtxos.prototype['scriptPubKey'] = undefined;

/**
 * Whether the UTXO has been used
 * @member {Boolean} used
 */
GetAddressInfoResponseUtxos.prototype['used'] = undefined;

/**
 * Value of the UTXO in NEBL satoshi
 * @member {Number} value
 */
GetAddressInfoResponseUtxos.prototype['value'] = undefined;

/**
 * Array of NTP1 tokens in this UTXO.
 * @member {Array.<module:model/GetAddressInfoResponseTokens>} tokens
 */
GetAddressInfoResponseUtxos.prototype['tokens'] = undefined;






export default GetAddressInfoResponseUtxos;

