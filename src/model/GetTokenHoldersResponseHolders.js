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

/**
 * The GetTokenHoldersResponseHolders model module.
 * @module model/GetTokenHoldersResponseHolders
 * @version 1.2.1
 */
class GetTokenHoldersResponseHolders {
    /**
     * Constructs a new <code>GetTokenHoldersResponseHolders</code>.
     * @alias module:model/GetTokenHoldersResponseHolders
     */
    constructor() { 
        
        GetTokenHoldersResponseHolders.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetTokenHoldersResponseHolders</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetTokenHoldersResponseHolders} obj Optional instance to populate.
     * @return {module:model/GetTokenHoldersResponseHolders} The populated <code>GetTokenHoldersResponseHolders</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetTokenHoldersResponseHolders();

            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {String} address
 */
GetTokenHoldersResponseHolders.prototype['address'] = undefined;

/**
 * @member {Number} amount
 */
GetTokenHoldersResponseHolders.prototype['amount'] = undefined;






export default GetTokenHoldersResponseHolders;

