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
var Money = require('./Money');




/**
 * The ItemVariationLocationOverrides model module.
 * @module model/ItemVariationLocationOverrides
 * @version 2.5.2
 */

/**
 * Constructs a new <code>ItemVariationLocationOverrides</code>.
 * Price and inventory alerting overrides for a [CatalogItemVariation](#type-catalogitemvariation) at a specific [location](#type-location).
 * @alias module:model/ItemVariationLocationOverrides
 * @class
 */
var exports = function() {
  var _this = this;







};

/**
 * Constructs a <code>ItemVariationLocationOverrides</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/ItemVariationLocationOverrides} obj Optional instance to populate.
 * @return {module:model/ItemVariationLocationOverrides} The populated <code>ItemVariationLocationOverrides</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('location_id')) {
      obj['location_id'] = ApiClient.convertToType(data['location_id'], 'String');
    }
      if (data.hasOwnProperty('price_money')) {
      obj['price_money'] = Money.constructFromObject(data['price_money']);
    }
      if (data.hasOwnProperty('pricing_type')) {
      obj['pricing_type'] = ApiClient.convertToType(data['pricing_type'], 'String');
    }
      if (data.hasOwnProperty('track_inventory')) {
      obj['track_inventory'] = ApiClient.convertToType(data['track_inventory'], 'Boolean');
    }
      if (data.hasOwnProperty('inventory_alert_type')) {
      obj['inventory_alert_type'] = ApiClient.convertToType(data['inventory_alert_type'], 'String');
    }
      if (data.hasOwnProperty('inventory_alert_threshold')) {
      obj['inventory_alert_threshold'] = ApiClient.convertToType(data['inventory_alert_threshold'], 'Number');
    }
    }
  return obj;
}

/**
 * The ID of the [location](#type-location).
 * @member {String} location_id
 */
exports.prototype['location_id'] = undefined;
/**
 * The price of the [CatalogItemVariation](#type-catalogitemvariation) at the given [location](#type-location), or blank for variable pricing.
 * @member {module:model/Money} price_money
 */
exports.prototype['price_money'] = undefined;
/**
 * The pricing type (fixed or variable) for the [CatalogItemVariation](#type-catalogitemvariation) at the given [location](#type-location). See [CatalogPricingType](#type-catalogpricingtype) for all possible values.
 * @member {module:model/ItemVariationLocationOverrides.PricingTypeEnum} pricing_type
 */
exports.prototype['pricing_type'] = undefined;
/**
 * If `true`, inventory tracking is active for the [CatalogItemVariation](#type-catalogitemvariation) at this [location](#type-location).
 * @member {Boolean} track_inventory
 */
exports.prototype['track_inventory'] = undefined;
/**
 * Indicates whether the [CatalogItemVariation](#type-catalogitemvariation) displays an alert when its inventory quantity is less than or equal to its `inventory_alert_threshold`. See [InventoryAlertType](#type-inventoryalerttype) for all possible values.
 * @member {module:model/ItemVariationLocationOverrides.InventoryAlertTypeEnum} inventory_alert_type
 */
exports.prototype['inventory_alert_type'] = undefined;
/**
 * If the inventory quantity for the variation is less than or equal to this value and `inventory_alert_type` is `LOW_QUANTITY`, the variation displays an alert in the merchant dashboard.  This value is always an integer.
 * @member {Number} inventory_alert_threshold
 */
exports.prototype['inventory_alert_threshold'] = undefined;


  /**
   * Allowed values for the <code>pricing_type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.PricingTypeEnum = {
    /**
     * value: "FIXED_PRICING"
     * @const
     */
    "FIXED_PRICING": "FIXED_PRICING",
    /**
     * value: "VARIABLE_PRICING"
     * @const
     */
    "VARIABLE_PRICING": "VARIABLE_PRICING"  };

  /**
   * Allowed values for the <code>inventory_alert_type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.InventoryAlertTypeEnum = {
    /**
     * value: "NONE"
     * @const
     */
    "NONE": "NONE",
    /**
     * value: "LOW_QUANTITY"
     * @const
     */
    "LOW_QUANTITY": "LOW_QUANTITY"  };


module.exports = exports;


