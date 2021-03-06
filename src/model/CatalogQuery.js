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
var CatalogQueryExact = require('./CatalogQueryExact');
var CatalogQueryItemVariationsForItemOptionValues = require('./CatalogQueryItemVariationsForItemOptionValues');
var CatalogQueryItemsForItemOptions = require('./CatalogQueryItemsForItemOptions');
var CatalogQueryItemsForModifierList = require('./CatalogQueryItemsForModifierList');
var CatalogQueryItemsForTax = require('./CatalogQueryItemsForTax');
var CatalogQueryPrefix = require('./CatalogQueryPrefix');
var CatalogQueryRange = require('./CatalogQueryRange');
var CatalogQuerySortedAttribute = require('./CatalogQuerySortedAttribute');
var CatalogQueryText = require('./CatalogQueryText');




/**
 * The CatalogQuery model module.
 * @module model/CatalogQuery
 */

/**
 * Constructs a new <code>CatalogQuery</code>.
 * A query composed of one or more different types of filters to narrow the scope of targeted objects when calling the &#x60;SearchCatalogObjects&#x60; endpoint.  Although a query can have multiple filters, only one query is allowed per call to [SearchCatalogObjects](#endpoint-Catalog-SearchCatalogObjects).  When a query filter is based on an attribute, the attribute must be searchable.  Searchable attributes are listed as follows, along their parent types that can be searched for with applicable query filters.   Searchable attribute and objects queryable by searchable attributes **  - &#x60;name&#x60;:  &#x60;CatalogItem&#x60;, &#x60;CatalogItemVariation&#x60;, &#x60;CatelogCatogry&#x60;, &#x60;CatalogTax&#x60;, &#x60;CatalogDiscount&#x60;, &#x60;CatalogModifier&#x60;, &#39;CatalogModifierList&#x60;, &#x60;CatalogItemOption&#x60;, &#x60;CatalogItemOptionValue&#x60;  - &#x60;description&#x60;: &#x60;CatalogItem&#x60;, &#x60;CatalogItemOptionValue&#x60;  - &#x60;abbreviation&#x60;: &#x60;CatalogItem&#x60;  - &#x60;upc&#x60;: &#x60;CatalogItemVariation&#x60;  - &#x60;sku&#x60;: &#x60;CatalogItemVariation&#x60;  - &#x60;caption&#x60;: &#x60;CatalogImage&#x60;  - &#x60;display_name&#x60;: &#x60;CatalogItemOption&#x60;   For example, to search for [CatalogItem](#type-CatalogItem) objects by searchable attributes, you can use  the &#x60;\&quot;name\&quot;&#x60;, &#x60;\&quot;description\&quot;&#x60;, or &#x60;\&quot;abbreviation\&quot;&#x60; attribute in an applicable query filter.
 * @alias module:model/CatalogQuery
 * @class
 */
var exports = function() {
  var _this = this;










};

/**
 * Constructs a <code>CatalogQuery</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/CatalogQuery} obj Optional instance to populate.
 * @return {module:model/CatalogQuery} The populated <code>CatalogQuery</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('sorted_attribute_query')) {
      obj['sorted_attribute_query'] = CatalogQuerySortedAttribute.constructFromObject(data['sorted_attribute_query']);
    }
      if (data.hasOwnProperty('exact_query')) {
      obj['exact_query'] = CatalogQueryExact.constructFromObject(data['exact_query']);
    }
      if (data.hasOwnProperty('prefix_query')) {
      obj['prefix_query'] = CatalogQueryPrefix.constructFromObject(data['prefix_query']);
    }
      if (data.hasOwnProperty('range_query')) {
      obj['range_query'] = CatalogQueryRange.constructFromObject(data['range_query']);
    }
      if (data.hasOwnProperty('text_query')) {
      obj['text_query'] = CatalogQueryText.constructFromObject(data['text_query']);
    }
      if (data.hasOwnProperty('items_for_tax_query')) {
      obj['items_for_tax_query'] = CatalogQueryItemsForTax.constructFromObject(data['items_for_tax_query']);
    }
      if (data.hasOwnProperty('items_for_modifier_list_query')) {
      obj['items_for_modifier_list_query'] = CatalogQueryItemsForModifierList.constructFromObject(data['items_for_modifier_list_query']);
    }
      if (data.hasOwnProperty('items_for_item_options_query')) {
      obj['items_for_item_options_query'] = CatalogQueryItemsForItemOptions.constructFromObject(data['items_for_item_options_query']);
    }
      if (data.hasOwnProperty('item_variations_for_item_option_values_query')) {
      obj['item_variations_for_item_option_values_query'] = CatalogQueryItemVariationsForItemOptionValues.constructFromObject(data['item_variations_for_item_option_values_query']);
    }
    }
  return obj;
}

/**
 * A query expression to sort returned query result by the given attribute.
 * @member {module:model/CatalogQuerySortedAttribute} sorted_attribute_query
 */
exports.prototype['sorted_attribute_query'] = undefined;
/**
 * An exact query expression to return objects with attribute name and value   matching the specified attribute name and value exactly. Value matching is case insensitive.
 * @member {module:model/CatalogQueryExact} exact_query
 */
exports.prototype['exact_query'] = undefined;
/**
 * A prefix query expression to return objects with attribute values  that have a prefix matching the specified string value. Value maching is case insensitive.
 * @member {module:model/CatalogQueryPrefix} prefix_query
 */
exports.prototype['prefix_query'] = undefined;
/**
 * A range query expression to return objects with numberic values  that lie in the specified range.
 * @member {module:model/CatalogQueryRange} range_query
 */
exports.prototype['range_query'] = undefined;
/**
 * A text query expression to return objectd whose searchable attributes contain all of the given keywords, irrespective of their order. For example, if a `CatalogItem` contains custom attribute values of  `{\"name\": \"t-shirt\"}` and `{\"description\": \"Small, Purple\"}`, the query filter of `{\"keywords\": [\"shirt\", \"sma\", \"purp\"]}` returns this item.
 * @member {module:model/CatalogQueryText} text_query
 */
exports.prototype['text_query'] = undefined;
/**
 * A query expression to return items that have any of the specified taxes (as identified by the corresponding `CatalogTax` object IDs) enabled.
 * @member {module:model/CatalogQueryItemsForTax} items_for_tax_query
 */
exports.prototype['items_for_tax_query'] = undefined;
/**
 * A query expression to return items that have any of the given modifier list (as identifieid by the coresponding `CatalogModifierList`s IDs) enabled.
 * @member {module:model/CatalogQueryItemsForModifierList} items_for_modifier_list_query
 */
exports.prototype['items_for_modifier_list_query'] = undefined;
/**
 * A query expression to return items that contains the specified item options (as identified the corresponding `CatalogItemOption` IDs).
 * @member {module:model/CatalogQueryItemsForItemOptions} items_for_item_options_query
 */
exports.prototype['items_for_item_options_query'] = undefined;
/**
 * A query expression to return item variations (of the `CatalogItemVariation` that  contain all of the specified `CatalogItemOption` IDs.
 * @member {module:model/CatalogQueryItemVariationsForItemOptionValues} item_variations_for_item_option_values_query
 */
exports.prototype['item_variations_for_item_option_values_query'] = undefined;



module.exports = exports;



