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
import GetTokenMetadataResponseMetadataOfIssuance from './GetTokenMetadataResponseMetadataOfIssuance';

/**
 * The GetTokenMetadataResponse model module.
 * @module model/GetTokenMetadataResponse
 * @version 1.2.1
 */
class GetTokenMetadataResponse {
    /**
     * Constructs a new <code>GetTokenMetadataResponse</code>.
     * @alias module:model/GetTokenMetadataResponse
     */
    constructor() { 
        
        GetTokenMetadataResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetTokenMetadataResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetTokenMetadataResponse} obj Optional instance to populate.
     * @return {module:model/GetTokenMetadataResponse} The populated <code>GetTokenMetadataResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetTokenMetadataResponse();

            if (data.hasOwnProperty('tokenId')) {
                obj['tokenId'] = ApiClient.convertToType(data['tokenId'], 'String');
            }
            if (data.hasOwnProperty('divisibility')) {
                obj['divisibility'] = ApiClient.convertToType(data['divisibility'], 'Number');
            }
            if (data.hasOwnProperty('lockStatus')) {
                obj['lockStatus'] = ApiClient.convertToType(data['lockStatus'], 'Boolean');
            }
            if (data.hasOwnProperty('aggregationPolicy')) {
                obj['aggregationPolicy'] = ApiClient.convertToType(data['aggregationPolicy'], 'String');
            }
            if (data.hasOwnProperty('totalSupply')) {
                obj['totalSupply'] = ApiClient.convertToType(data['totalSupply'], 'Number');
            }
            if (data.hasOwnProperty('numOfHolders')) {
                obj['numOfHolders'] = ApiClient.convertToType(data['numOfHolders'], 'Number');
            }
            if (data.hasOwnProperty('numOfTransfers')) {
                obj['numOfTransfers'] = ApiClient.convertToType(data['numOfTransfers'], 'Number');
            }
            if (data.hasOwnProperty('numofIssuance')) {
                obj['numofIssuance'] = ApiClient.convertToType(data['numofIssuance'], 'Number');
            }
            if (data.hasOwnProperty('numOfBurns')) {
                obj['numOfBurns'] = ApiClient.convertToType(data['numOfBurns'], 'Number');
            }
            if (data.hasOwnProperty('firstBlock')) {
                obj['firstBlock'] = ApiClient.convertToType(data['firstBlock'], 'Number');
            }
            if (data.hasOwnProperty('issuanceTxid')) {
                obj['issuanceTxid'] = ApiClient.convertToType(data['issuanceTxid'], 'String');
            }
            if (data.hasOwnProperty('issueAddress')) {
                obj['issueAddress'] = ApiClient.convertToType(data['issueAddress'], 'String');
            }
            if (data.hasOwnProperty('metadataOfIssuance')) {
                obj['metadataOfIssuance'] = GetTokenMetadataResponseMetadataOfIssuance.constructFromObject(data['metadataOfIssuance']);
            }
            if (data.hasOwnProperty('metadataOfUtxo')) {
                obj['metadataOfUtxo'] = GetTokenMetadataResponseMetadataOfIssuance.constructFromObject(data['metadataOfUtxo']);
            }
        }
        return obj;
    }


}

/**
 * ID of the token
 * @member {String} tokenId
 */
GetTokenMetadataResponse.prototype['tokenId'] = undefined;

/**
 * Decimal places the token is divisible to
 * @member {Number} divisibility
 */
GetTokenMetadataResponse.prototype['divisibility'] = undefined;

/**
 * Whether issuance of more tokens is locked
 * @member {Boolean} lockStatus
 */
GetTokenMetadataResponse.prototype['lockStatus'] = undefined;

/**
 * Whether the tokens are aggregatable
 * @member {String} aggregationPolicy
 */
GetTokenMetadataResponse.prototype['aggregationPolicy'] = undefined;

/**
 * Total number of tokens in supply
 * @member {Number} totalSupply
 */
GetTokenMetadataResponse.prototype['totalSupply'] = undefined;

/**
 * Total number of addresses this token is held at
 * @member {Number} numOfHolders
 */
GetTokenMetadataResponse.prototype['numOfHolders'] = undefined;

/**
 * Total number of transactions of this token
 * @member {Number} numOfTransfers
 */
GetTokenMetadataResponse.prototype['numOfTransfers'] = undefined;

/**
 * Total number of times this token has been issued
 * @member {Number} numofIssuance
 */
GetTokenMetadataResponse.prototype['numofIssuance'] = undefined;

/**
 * Number of times tokens have been burned
 * @member {Number} numOfBurns
 */
GetTokenMetadataResponse.prototype['numOfBurns'] = undefined;

/**
 * Block number token was issued in
 * @member {Number} firstBlock
 */
GetTokenMetadataResponse.prototype['firstBlock'] = undefined;

/**
 * TXID the token was issued with
 * @member {String} issuanceTxid
 */
GetTokenMetadataResponse.prototype['issuanceTxid'] = undefined;

/**
 * Address that issued the tokens
 * @member {String} issueAddress
 */
GetTokenMetadataResponse.prototype['issueAddress'] = undefined;

/**
 * @member {module:model/GetTokenMetadataResponseMetadataOfIssuance} metadataOfIssuance
 */
GetTokenMetadataResponse.prototype['metadataOfIssuance'] = undefined;

/**
 * @member {module:model/GetTokenMetadataResponseMetadataOfIssuance} metadataOfUtxo
 */
GetTokenMetadataResponse.prototype['metadataOfUtxo'] = undefined;






export default GetTokenMetadataResponse;

