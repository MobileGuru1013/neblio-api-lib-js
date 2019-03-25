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
import GetTransactionInfoResponseVin from './GetTransactionInfoResponseVin';
import GetTransactionInfoResponseVout from './GetTransactionInfoResponseVout';

/**
 * The GetTransactionInfoResponse model module.
 * @module model/GetTransactionInfoResponse
 * @version 1.2.1
 */
class GetTransactionInfoResponse {
    /**
     * Constructs a new <code>GetTransactionInfoResponse</code>.
     * @alias module:model/GetTransactionInfoResponse
     */
    constructor() { 
        
        GetTransactionInfoResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetTransactionInfoResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetTransactionInfoResponse} obj Optional instance to populate.
     * @return {module:model/GetTransactionInfoResponse} The populated <code>GetTransactionInfoResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetTransactionInfoResponse();

            if (data.hasOwnProperty('hex')) {
                obj['hex'] = ApiClient.convertToType(data['hex'], 'String');
            }
            if (data.hasOwnProperty('txid')) {
                obj['txid'] = ApiClient.convertToType(data['txid'], 'String');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'Number');
            }
            if (data.hasOwnProperty('locktime')) {
                obj['locktime'] = ApiClient.convertToType(data['locktime'], 'Number');
            }
            if (data.hasOwnProperty('vin')) {
                obj['vin'] = ApiClient.convertToType(data['vin'], [GetTransactionInfoResponseVin]);
            }
            if (data.hasOwnProperty('vout')) {
                obj['vout'] = ApiClient.convertToType(data['vout'], [GetTransactionInfoResponseVout]);
            }
            if (data.hasOwnProperty('blocktime')) {
                obj['blocktime'] = ApiClient.convertToType(data['blocktime'], 'Number');
            }
            if (data.hasOwnProperty('blockheight')) {
                obj['blockheight'] = ApiClient.convertToType(data['blockheight'], 'Number');
            }
            if (data.hasOwnProperty('totalsent')) {
                obj['totalsent'] = ApiClient.convertToType(data['totalsent'], 'Number');
            }
            if (data.hasOwnProperty('fee')) {
                obj['fee'] = ApiClient.convertToType(data['fee'], 'Number');
            }
            if (data.hasOwnProperty('blockhash')) {
                obj['blockhash'] = ApiClient.convertToType(data['blockhash'], 'String');
            }
            if (data.hasOwnProperty('time')) {
                obj['time'] = ApiClient.convertToType(data['time'], 'Number');
            }
            if (data.hasOwnProperty('confirmations')) {
                obj['confirmations'] = ApiClient.convertToType(data['confirmations'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Transaction in raw hex
 * @member {String} hex
 */
GetTransactionInfoResponse.prototype['hex'] = undefined;

/**
 * TXID of transaction
 * @member {String} txid
 */
GetTransactionInfoResponse.prototype['txid'] = undefined;

/**
 * Transaction version
 * @member {Number} version
 */
GetTransactionInfoResponse.prototype['version'] = undefined;

/**
 * Transaction locktime
 * @member {Number} locktime
 */
GetTransactionInfoResponse.prototype['locktime'] = undefined;

/**
 * Array of transaction inputs
 * @member {Array.<module:model/GetTransactionInfoResponseVin>} vin
 */
GetTransactionInfoResponse.prototype['vin'] = undefined;

/**
 * Array of transaction outputs
 * @member {Array.<module:model/GetTransactionInfoResponseVout>} vout
 */
GetTransactionInfoResponse.prototype['vout'] = undefined;

/**
 * Block time of this transaction
 * @member {Number} blocktime
 */
GetTransactionInfoResponse.prototype['blocktime'] = undefined;

/**
 * Block height of this transaction
 * @member {Number} blockheight
 */
GetTransactionInfoResponse.prototype['blockheight'] = undefined;

/**
 * Total NEBL sent in this transaction in satoshis
 * @member {Number} totalsent
 */
GetTransactionInfoResponse.prototype['totalsent'] = undefined;

/**
 * Total NEBL used as fee for this transcation in satoshis
 * @member {Number} fee
 */
GetTransactionInfoResponse.prototype['fee'] = undefined;

/**
 * Hash of the block this transaction is in
 * @member {String} blockhash
 */
GetTransactionInfoResponse.prototype['blockhash'] = undefined;

/**
 * Transaction time
 * @member {Number} time
 */
GetTransactionInfoResponse.prototype['time'] = undefined;

/**
 * Number of transaction confirmations
 * @member {Number} confirmations
 */
GetTransactionInfoResponse.prototype['confirmations'] = undefined;






export default GetTransactionInfoResponse;
