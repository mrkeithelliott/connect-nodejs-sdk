/**
 * Square Connect API
 * Client library for accessing the Square Connect APIs
 *
 * OpenAPI spec version: 2.0
 * Contact: developers@squareup.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.0-SNAPSHOT
 *
 */
var ApiClient = require('../ApiClient');
var Address = require('./Address');
var Refund = require('./Refund');
var Tender = require('./Tender');




/**
 * The Transaction model module.
 * @module model/Transaction
 * @version 2.5.2
 */

/**
 * Constructs a new <code>Transaction</code>.
 * Represents a transaction processed with Square, either with the Connect API or with Square Point of Sale.  The &#x60;tenders&#x60; field of this object lists all methods of payment used to pay in the transaction.
 * @alias module:model/Transaction
 * @class
 */
var exports = function() {
  var _this = this;











};

/**
 * Constructs a <code>Transaction</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/Transaction} obj Optional instance to populate.
 * @return {module:model/Transaction} The populated <code>Transaction</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
      obj['id'] = ApiClient.convertToType(data['id'], 'String');
    }
      if (data.hasOwnProperty('location_id')) {
      obj['location_id'] = ApiClient.convertToType(data['location_id'], 'String');
    }
      if (data.hasOwnProperty('created_at')) {
      obj['created_at'] = ApiClient.convertToType(data['created_at'], 'String');
    }
      if (data.hasOwnProperty('tenders')) {
      obj['tenders'] = ApiClient.convertToType(data['tenders'], [Tender]);
    }
      if (data.hasOwnProperty('refunds')) {
      obj['refunds'] = ApiClient.convertToType(data['refunds'], [Refund]);
    }
      if (data.hasOwnProperty('reference_id')) {
      obj['reference_id'] = ApiClient.convertToType(data['reference_id'], 'String');
    }
      if (data.hasOwnProperty('product')) {
      obj['product'] = ApiClient.convertToType(data['product'], 'String');
    }
      if (data.hasOwnProperty('client_id')) {
      obj['client_id'] = ApiClient.convertToType(data['client_id'], 'String');
    }
      if (data.hasOwnProperty('shipping_address')) {
      obj['shipping_address'] = Address.constructFromObject(data['shipping_address']);
    }
      if (data.hasOwnProperty('order_id')) {
      obj['order_id'] = ApiClient.convertToType(data['order_id'], 'String');
    }
    }
  return obj;
}

/**
 * The transaction's unique ID, issued by Square payments servers.
 * @member {String} id
 */
exports.prototype['id'] = undefined;
/**
 * The ID of the transaction's associated location.
 * @member {String} location_id
 */
exports.prototype['location_id'] = undefined;
/**
 * The time when the transaction was created, in RFC 3339 format.
 * @member {String} created_at
 */
exports.prototype['created_at'] = undefined;
/**
 * The tenders used to pay in the transaction.
 * @member {Array.<module:model/Tender>} tenders
 */
exports.prototype['tenders'] = undefined;
/**
 * Refunds that have been applied to any tender in the transaction.
 * @member {Array.<module:model/Refund>} refunds
 */
exports.prototype['refunds'] = undefined;
/**
 * If the transaction was created with the [Charge](#endpoint-charge) endpoint, this value is the same as the value provided for the `reference_id` parameter in the request to that endpoint. Otherwise, it is not set.
 * @member {String} reference_id
 */
exports.prototype['reference_id'] = undefined;
/**
 * The Square product that processed the transaction.
 * @member {module:model/Transaction.ProductEnum} product
 */
exports.prototype['product'] = undefined;
/**
 * If the transaction was created in the Square Point of Sale app, this value is the ID generated for the transaction by Square Point of Sale.  This ID has no relationship to the transaction's canonical `id`, which is generated by Square's backend servers. This value is generated for bookkeeping purposes, in case the transaction cannot immediately be completed (for example, if the transaction is processed in offline mode).  It is not currently possible with the Connect API to perform a transaction lookup by this value.
 * @member {String} client_id
 */
exports.prototype['client_id'] = undefined;
/**
 * The shipping address provided in the request, if any.
 * @member {module:model/Address} shipping_address
 */
exports.prototype['shipping_address'] = undefined;
/**
 * The order_id is an identifier for the order associated with this transaction, if any.
 * @member {String} order_id
 */
exports.prototype['order_id'] = undefined;


  /**
   * Allowed values for the <code>product</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ProductEnum = {
    /**
     * value: "REGISTER"
     * @const
     */
    "REGISTER": "REGISTER",
    /**
     * value: "EXTERNAL_API"
     * @const
     */
    "EXTERNAL_API": "EXTERNAL_API",
    /**
     * value: "BILLING"
     * @const
     */
    "BILLING": "BILLING",
    /**
     * value: "APPOINTMENTS"
     * @const
     */
    "APPOINTMENTS": "APPOINTMENTS",
    /**
     * value: "INVOICES"
     * @const
     */
    "INVOICES": "INVOICES",
    /**
     * value: "ONLINE_STORE"
     * @const
     */
    "ONLINE_STORE": "ONLINE_STORE",
    /**
     * value: "PAYROLL"
     * @const
     */
    "PAYROLL": "PAYROLL",
    /**
     * value: "OTHER"
     * @const
     */
    "OTHER": "OTHER"  };


module.exports = exports;


