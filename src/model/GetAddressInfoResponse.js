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
import GetAddressInfoResponseUtxos from './GetAddressInfoResponseUtxos';

/**
 * The GetAddressInfoResponse model module.
 * @module model/GetAddressInfoResponse
 * @version 1.2.1
 */
class GetAddressInfoResponse {
    /**
     * Constructs a new <code>GetAddressInfoResponse</code>.
     * @alias module:model/GetAddressInfoResponse
     */
    constructor() { 
        
        GetAddressInfoResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetAddressInfoResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetAddressInfoResponse} obj Optional instance to populate.
     * @return {module:model/GetAddressInfoResponse} The populated <code>GetAddressInfoResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetAddressInfoResponse();

            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
            if (data.hasOwnProperty('utxos')) {
                obj['utxos'] = ApiClient.convertToType(data['utxos'], [GetAddressInfoResponseUtxos]);
            }
        }
        return obj;
    }


}

/**
 * The Neblio Address
 * @member {String} address
 */
GetAddressInfoResponse.prototype['address'] = undefined;

/**
 * Array of UTXOs held at this address.
 * @member {Array.<module:model/GetAddressInfoResponseUtxos>} utxos
 */
GetAddressInfoResponse.prototype['utxos'] = undefined;






export default GetAddressInfoResponse;

