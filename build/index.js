/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@wordpress/dataviews/build-module/add-filter.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@wordpress/dataviews/build-module/add-filter.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AddFilter)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/funnel.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lock_unlock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lock-unlock */ "./node_modules/@wordpress/dataviews/build-module/lock-unlock.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants */ "./node_modules/@wordpress/dataviews/build-module/constants.js");
/* harmony import */ var _dropdown_menu_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dropdown-menu-helper */ "./node_modules/@wordpress/dataviews/build-module/dropdown-menu-helper.js");

/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */



const {
  DropdownMenuV2: DropdownMenu,
  DropdownMenuGroupV2: DropdownMenuGroup,
  DropdownMenuItemV2: DropdownMenuItem,
  DropdownMenuRadioItemV2: DropdownMenuRadioItem,
  DropdownMenuSeparatorV2: DropdownMenuSeparator,
  DropdownMenuItemLabelV2: DropdownMenuItemLabel,
  DropdownMenuItemHelpTextV2: DropdownMenuItemHelpText
} = (0,_lock_unlock__WEBPACK_IMPORTED_MODULE_4__.unlock)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.privateApis);
function WithSeparators({
  children
}) {
  return _wordpress_element__WEBPACK_IMPORTED_MODULE_3__.Children.toArray(children).filter(Boolean).map((child, i) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    key: i
  }, i > 0 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenuSeparator, null), child));
}
function AddFilter({
  filters,
  view,
  onChangeView
}) {
  if (filters.length === 0) {
    return null;
  }
  const filterCount = view.filters.reduce((acc, filter) => {
    if (filter.value !== undefined) {
      return acc + 1;
    }
    return acc;
  }, 0);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenu, {
    trigger: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
      __experimentalIsFocusable: true,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Filters'),
      size: "compact",
      icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_5__["default"],
      className: "dataviews-filters-button"
    }, view.type === _constants__WEBPACK_IMPORTED_MODULE_6__.LAYOUT_LIST && filterCount > 0 ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "dataviews-filters-count"
    }, filterCount) : null),
    style: {
      minWidth: '230px'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(WithSeparators, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenuGroup, null, filters.map(filter => {
    const filterInView = view.filters.find(f => f.field === filter.field);
    const otherFilters = view.filters.filter(f => f.field !== filter.field);
    const activeElement = filter.elements.find(element => element.value === filterInView?.value);
    const activeOperator = filterInView?.operator || filter.operators[0];
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenu, {
      key: filter.field,
      trigger: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenuItem, {
        suffix: activeElement && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
          "aria-hidden": "true"
        }, activeOperator in _constants__WEBPACK_IMPORTED_MODULE_6__.OPERATORS && `${_constants__WEBPACK_IMPORTED_MODULE_6__.OPERATORS[activeOperator].label} `, activeElement.label)
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenuItemLabel, null, filter.name)),
      style: {
        minWidth: '200px'
      }
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(WithSeparators, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenuGroup, null, filter.elements.map(element => {
      const isActive = activeElement?.value === element.value;
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_dropdown_menu_helper__WEBPACK_IMPORTED_MODULE_7__.DropdownMenuRadioItemCustom, {
        key: element.value,
        name: `add-filter-${filter.field}`,
        value: element.value,
        checked: isActive,
        onChange: e => {
          onChangeView({
            ...view,
            page: 1,
            filters: [...otherFilters, {
              field: filter.field,
              operator: activeOperator,
              value: isActive ? undefined : e.target.value
            }]
          });
        }
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenuItemLabel, null, element.label), !!element.description && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenuItemHelpText, null, element.description));
    })), filter.operators.length > 1 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenu, {
      trigger: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenuItem, {
        suffix: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
          "aria-hidden": "true"
        }, _constants__WEBPACK_IMPORTED_MODULE_6__.OPERATORS[activeOperator]?.label)
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenuItemLabel, null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Conditions')))
    }, Object.entries(_constants__WEBPACK_IMPORTED_MODULE_6__.OPERATORS).map(([operator, {
      label,
      key
    }]) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenuRadioItem, {
      key: key,
      name: `add-filter-${filter.field}-conditions`,
      value: operator,
      checked: activeOperator === operator,
      onChange: e => {
        onChangeView({
          ...view,
          page: 1,
          filters: [...otherFilters, {
            field: filter.field,
            operator: e.target.value,
            value: filterInView?.value
          }]
        });
      }
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenuItemLabel, null, label)))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenuItem, {
      key: 'reset-filter-' + filter.name,
      disabled: !activeElement,
      hideOnClick: false,
      onClick: () => {
        onChangeView({
          ...view,
          page: 1,
          filters: view.filters.filter(f => f.field !== filter.field)
        });
      }
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenuItemLabel, null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)( /* translators: 1: Filter name. e.g.: "Reset Author". */
    (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Reset %1$s'), filter.name.toLowerCase())))));
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenuItem, {
    disabled: view.search === '' && view.filters?.length === 0,
    hideOnClick: false,
    onClick: () => {
      onChangeView({
        ...view,
        page: 1,
        filters: []
      });
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenuItemLabel, null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Reset filters')))));
}
//# sourceMappingURL=add-filter.js.map

/***/ }),

/***/ "./node_modules/@wordpress/dataviews/build-module/bulk-actions.js":
/*!************************************************************************!*\
  !*** ./node_modules/@wordpress/dataviews/build-module/bulk-actions.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BulkActions)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lock_unlock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lock-unlock */ "./node_modules/@wordpress/dataviews/build-module/lock-unlock.js");

/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */

const {
  DropdownMenuV2: DropdownMenu,
  DropdownMenuGroupV2: DropdownMenuGroup,
  DropdownMenuItemV2: DropdownMenuItem,
  DropdownMenuSeparatorV2: DropdownMenuSeparator
} = (0,_lock_unlock__WEBPACK_IMPORTED_MODULE_4__.unlock)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.privateApis);
function ActionWithModal({
  action,
  selectedItems,
  setActionWithModal,
  onMenuOpenChange
}) {
  const eligibleItems = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => {
    return selectedItems.filter(item => action.isEligible(item));
  }, [action, selectedItems]);
  const {
    RenderModal,
    hideModalHeader
  } = action;
  const onCloseModal = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useCallback)(() => {
    setActionWithModal(undefined);
  }, [setActionWithModal]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Modal, {
    title: !hideModalHeader && action.label,
    __experimentalHideHeader: !!hideModalHeader,
    onRequestClose: onCloseModal,
    overlayClassName: "dataviews-action-modal"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RenderModal, {
    items: eligibleItems,
    closeModal: onCloseModal,
    onPerform: () => onMenuOpenChange(false)
  }));
}
function BulkActionItem({
  action,
  selectedItems,
  setActionWithModal
}) {
  const eligibleItems = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => {
    return selectedItems.filter(item => action.isEligible(item));
  }, [action, selectedItems]);
  const shouldShowModal = !!action.RenderModal;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenuItem, {
    key: action.id,
    disabled: eligibleItems.length === 0,
    hideOnClick: !shouldShowModal,
    onClick: async () => {
      if (shouldShowModal) {
        setActionWithModal(action);
      } else {
        await action.callback(eligibleItems);
      }
    },
    suffix: eligibleItems.length > 0 ? eligibleItems.length : undefined
  }, action.label);
}
function ActionsMenuGroup({
  actions,
  selectedItems,
  setActionWithModal
}) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenuGroup, null, actions.map(action => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(BulkActionItem, {
    key: action.id,
    action: action,
    selectedItems: selectedItems,
    setActionWithModal: setActionWithModal
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenuSeparator, null));
}
function BulkActions({
  data,
  actions,
  selection,
  onSelectionChange,
  getItemId
}) {
  const bulkActions = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => actions.filter(action => action.supportsBulk), [actions]);
  const areAllSelected = selection && selection.length === data.length;
  const [isMenuOpen, onMenuOpenChange] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  const [actionWithModal, setActionWithModal] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)();
  const selectedItems = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => {
    return data.filter(item => selection.includes(getItemId(item)));
  }, [selection, data, getItemId]);
  if (bulkActions.length === 0) {
    return null;
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenu, {
    open: isMenuOpen,
    onOpenChange: onMenuOpenChange,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Bulk actions'),
    style: {
      minWidth: '240px'
    },
    trigger: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
      className: "dataviews-bulk-edit-button",
      __next40pxDefaultSize: true,
      variant: "tertiary",
      size: "compact"
    }, selection.length ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)( /* translators: %d: Number of items. */
    (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__._n)('Edit %d item', 'Edit %d items', selection.length), selection.length) : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Bulk edit'))
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ActionsMenuGroup, {
    actions: bulkActions,
    setActionWithModal: setActionWithModal,
    selectedItems: selectedItems
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenuGroup, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenuItem, {
    disabled: areAllSelected,
    hideOnClick: false,
    onClick: () => {
      onSelectionChange(data);
    },
    suffix: data.length
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Select all')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenuItem, {
    disabled: selection.length === 0,
    hideOnClick: false,
    onClick: () => {
      onSelectionChange([]);
    }
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Deselect')))), actionWithModal && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ActionWithModal, {
    action: actionWithModal,
    selectedItems: selectedItems,
    setActionWithModal: setActionWithModal,
    onMenuOpenChange: onMenuOpenChange
  }));
}
//# sourceMappingURL=bulk-actions.js.map

/***/ }),

/***/ "./node_modules/@wordpress/dataviews/build-module/constants.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@wordpress/dataviews/build-module/constants.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ENUMERATION_TYPE: () => (/* binding */ ENUMERATION_TYPE),
/* harmony export */   LAYOUT_GRID: () => (/* binding */ LAYOUT_GRID),
/* harmony export */   LAYOUT_LIST: () => (/* binding */ LAYOUT_LIST),
/* harmony export */   LAYOUT_TABLE: () => (/* binding */ LAYOUT_TABLE),
/* harmony export */   OPERATORS: () => (/* binding */ OPERATORS),
/* harmony export */   OPERATOR_IN: () => (/* binding */ OPERATOR_IN),
/* harmony export */   OPERATOR_NOT_IN: () => (/* binding */ OPERATOR_NOT_IN),
/* harmony export */   SORTING_DIRECTIONS: () => (/* binding */ SORTING_DIRECTIONS),
/* harmony export */   VIEW_LAYOUTS: () => (/* binding */ VIEW_LAYOUTS)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/block-table.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/category.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/format-list-bullets-rtl.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/format-list-bullets.js");
/* harmony import */ var _view_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view-table */ "./node_modules/@wordpress/dataviews/build-module/view-table.js");
/* harmony import */ var _view_grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-grid */ "./node_modules/@wordpress/dataviews/build-module/view-grid.js");
/* harmony import */ var _view_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view-list */ "./node_modules/@wordpress/dataviews/build-module/view-list.js");
/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */




// Field types.
const ENUMERATION_TYPE = 'enumeration';

// Filter operators.
const OPERATOR_IN = 'in';
const OPERATOR_NOT_IN = 'notIn';
const OPERATORS = {
  [OPERATOR_IN]: {
    key: 'in-filter',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Is')
  },
  [OPERATOR_NOT_IN]: {
    key: 'not-in-filter',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Is not')
  }
};

// Sorting
const SORTING_DIRECTIONS = {
  asc: {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Sort ascending')
  },
  desc: {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Sort descending')
  }
};

// View layouts.
const LAYOUT_TABLE = 'table';
const LAYOUT_GRID = 'grid';
const LAYOUT_LIST = 'list';
const VIEW_LAYOUTS = [{
  type: LAYOUT_TABLE,
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Table'),
  component: _view_table__WEBPACK_IMPORTED_MODULE_1__["default"],
  icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_2__["default"]
}, {
  type: LAYOUT_GRID,
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Grid'),
  component: _view_grid__WEBPACK_IMPORTED_MODULE_3__["default"],
  icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_4__["default"]
}, {
  type: LAYOUT_LIST,
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('List'),
  component: _view_list__WEBPACK_IMPORTED_MODULE_5__["default"],
  icon: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.isRTL)() ? _wordpress_icons__WEBPACK_IMPORTED_MODULE_6__["default"] : _wordpress_icons__WEBPACK_IMPORTED_MODULE_7__["default"]
}];
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ "./node_modules/@wordpress/dataviews/build-module/dataviews.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@wordpress/dataviews/build-module/dataviews.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DataViews)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pagination */ "./node_modules/@wordpress/dataviews/build-module/pagination.js");
/* harmony import */ var _view_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./view-actions */ "./node_modules/@wordpress/dataviews/build-module/view-actions.js");
/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./filters */ "./node_modules/@wordpress/dataviews/build-module/filters.js");
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./search */ "./node_modules/@wordpress/dataviews/build-module/search.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "./node_modules/@wordpress/dataviews/build-module/constants.js");
/* harmony import */ var _bulk_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bulk-actions */ "./node_modules/@wordpress/dataviews/build-module/bulk-actions.js");

/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */






const defaultGetItemId = item => item.id;
const defaultOnSelectionChange = () => {};
function DataViews({
  view,
  onChangeView,
  fields,
  search = true,
  searchLabel = undefined,
  actions,
  data,
  getItemId = defaultGetItemId,
  isLoading = false,
  paginationInfo,
  supportedLayouts,
  onSelectionChange = defaultOnSelectionChange,
  onDetailsChange = null,
  deferredRendering = false
}) {
  const [selection, setSelection] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (selection.length > 0 && selection.some(id => !data.some(item => item.id === id))) {
      const newSelection = selection.filter(id => data.some(item => item.id === id));
      setSelection(newSelection);
      onSelectionChange(data.filter(item => newSelection.includes(item.id)));
    }
  }, [selection, data, onSelectionChange]);
  const onSetSelection = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useCallback)(items => {
    setSelection(items.map(item => item.id));
    onSelectionChange(items);
  }, [setSelection, onSelectionChange]);
  const ViewComponent = _constants__WEBPACK_IMPORTED_MODULE_3__.VIEW_LAYOUTS.find(v => v.type === view.type).component;
  const _fields = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
    return fields.map(field => ({
      ...field,
      render: field.render || field.getValue
    }));
  }, [fields]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "dataviews-wrapper"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalVStack, {
    spacing: 0,
    justify: "flex-start"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalHStack, {
    alignment: "flex-start",
    className: "dataviews-filters__view-actions"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalHStack, {
    justify: "start",
    wrap: true
  }, search && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_search__WEBPACK_IMPORTED_MODULE_4__["default"], {
    label: searchLabel,
    view: view,
    onChangeView: onChangeView
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_filters__WEBPACK_IMPORTED_MODULE_5__["default"], {
    fields: _fields,
    view: view,
    onChangeView: onChangeView
  })), view.type === _constants__WEBPACK_IMPORTED_MODULE_3__.LAYOUT_TABLE && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_bulk_actions__WEBPACK_IMPORTED_MODULE_6__["default"], {
    actions: actions,
    data: data,
    onSelectionChange: onSetSelection,
    selection: selection,
    getItemId: getItemId
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_view_actions__WEBPACK_IMPORTED_MODULE_7__["default"], {
    fields: _fields,
    view: view,
    onChangeView: onChangeView,
    supportedLayouts: supportedLayouts
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ViewComponent, {
    fields: _fields,
    view: view,
    onChangeView: onChangeView,
    actions: actions,
    data: data,
    getItemId: getItemId,
    isLoading: isLoading,
    onSelectionChange: onSetSelection,
    onDetailsChange: onDetailsChange,
    selection: selection,
    deferredRendering: deferredRendering
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_pagination__WEBPACK_IMPORTED_MODULE_8__["default"], {
    view: view,
    onChangeView: onChangeView,
    paginationInfo: paginationInfo
  })));
}
//# sourceMappingURL=dataviews.js.map

/***/ }),

/***/ "./node_modules/@wordpress/dataviews/build-module/dropdown-menu-helper.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@wordpress/dataviews/build-module/dropdown-menu-helper.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DropdownMenuRadioItemCustom: () => (/* binding */ DropdownMenuRadioItemCustom)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lock_unlock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lock-unlock */ "./node_modules/@wordpress/dataviews/build-module/lock-unlock.js");

/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */

const {
  DropdownMenuItemV2: DropdownMenuItem
} = (0,_lock_unlock__WEBPACK_IMPORTED_MODULE_4__.unlock)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.privateApis);
const radioCheck = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.Circle, {
  cx: 12,
  cy: 12,
  r: 3
}));

/**
 * A custom implementation of a radio menu item using the standard menu item
 * component, which allows deselecting selected values.
 */
const DropdownMenuRadioItemCustom = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(function DropdownMenuRadioItemCustom({
  checked,
  name,
  value,
  hideOnClick,
  onChange,
  onClick,
  ...props
}, ref) {
  const onClickHandler = e => {
    onClick?.(e);
    onChange?.({
      ...e,
      target: {
        ...e.target,
        value
      }
    });
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenuItem, {
    ref: ref,
    role: "menuitemradio",
    name: name,
    "aria-checked": checked,
    hideOnClick: !!hideOnClick,
    prefix: checked ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Icon, {
      icon: radioCheck
    }) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "dataviews-filters__custom-menu-radio-item-prefix",
      "aria-hidden": "true"
    }),
    onClick: onClickHandler,
    ...props
  });
});
//# sourceMappingURL=dropdown-menu-helper.js.map

/***/ }),

/***/ "./node_modules/@wordpress/dataviews/build-module/filter-summary.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@wordpress/dataviews/build-module/filter-summary.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FilterSummary)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/chevron-down.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants */ "./node_modules/@wordpress/dataviews/build-module/constants.js");
/* harmony import */ var _lock_unlock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lock-unlock */ "./node_modules/@wordpress/dataviews/build-module/lock-unlock.js");
/* harmony import */ var _dropdown_menu_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dropdown-menu-helper */ "./node_modules/@wordpress/dataviews/build-module/dropdown-menu-helper.js");

/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */



const {
  DropdownMenuV2: DropdownMenu,
  DropdownMenuGroupV2: DropdownMenuGroup,
  DropdownMenuItemV2: DropdownMenuItem,
  DropdownMenuSeparatorV2: DropdownMenuSeparator,
  DropdownMenuItemLabelV2: DropdownMenuItemLabel,
  DropdownMenuItemHelpTextV2: DropdownMenuItemHelpText
} = (0,_lock_unlock__WEBPACK_IMPORTED_MODULE_4__.unlock)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.privateApis);
const FilterText = ({
  activeElement,
  filterInView,
  filter
}) => {
  if (activeElement === undefined) {
    return filter.name;
  }
  if (activeElement !== undefined && filterInView?.operator === _constants__WEBPACK_IMPORTED_MODULE_5__.OPERATOR_IN) {
    return (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)( /* translators: 1: Filter name. 2: Filter value. e.g.: "Author is Admin". */
    (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('%1$s is %2$s'), filter.name, activeElement.label);
  }
  if (activeElement !== undefined && filterInView?.operator === _constants__WEBPACK_IMPORTED_MODULE_5__.OPERATOR_NOT_IN) {
    return (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)( /* translators: 1: Filter name. 2: Filter value. e.g.: "Author is not Admin". */
    (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('%1$s is not %2$s'), filter.name, activeElement.label);
  }
  return (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)( /* translators: 1: Filter name e.g.: "Unknown status for Author". */
  (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Unknown status for %1$s'), filter.name);
};
function WithSeparators({
  children
}) {
  return _wordpress_element__WEBPACK_IMPORTED_MODULE_3__.Children.toArray(children).filter(Boolean).map((child, i) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    key: i
  }, i > 0 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenuSeparator, null), child));
}
function FilterSummary({
  filter,
  view,
  onChangeView
}) {
  const filterInView = view.filters.find(f => f.field === filter.field);
  const otherFilters = view.filters.filter(f => f.field !== filter.field);
  const activeElement = filter.elements.find(element => element.value === filterInView?.value);
  const activeOperator = filterInView?.operator || filter.operators[0];
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenu, {
    key: filter.field,
    trigger: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
      variant: "tertiary",
      size: "compact",
      label: filter.name
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(FilterText, {
      activeElement: activeElement,
      filterInView: filterInView,
      filter: filter
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Icon, {
      icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_6__["default"],
      style: {
        flexShrink: 0
      }
    }))
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(WithSeparators, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenuGroup, null, filter.elements.map(element => {
    const isActive = activeElement?.value === element.value;
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_dropdown_menu_helper__WEBPACK_IMPORTED_MODULE_7__.DropdownMenuRadioItemCustom, {
      key: element.value,
      name: `filter-summary-${filter.field}`,
      value: element.value,
      checked: isActive,
      onClick: () => onChangeView({
        ...view,
        page: 1,
        filters: [...otherFilters, {
          field: filter.field,
          operator: activeOperator,
          value: isActive ? undefined : element.value
        }]
      })
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenuItemLabel, null, element.label), !!element.description && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenuItemHelpText, null, element.description));
  })), filter.operators.length > 1 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenu, {
    trigger: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenuItem, {
      suffix: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
        "aria-hidden": "true"
      }, _constants__WEBPACK_IMPORTED_MODULE_5__.OPERATORS[activeOperator]?.label)
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenuItemLabel, null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Conditions')))
  }, Object.entries(_constants__WEBPACK_IMPORTED_MODULE_5__.OPERATORS).map(([operator, {
    label,
    key
  }]) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_dropdown_menu_helper__WEBPACK_IMPORTED_MODULE_7__.DropdownMenuRadioItemCustom, {
    key: key,
    name: `filter-summary-${filter.field}-conditions`,
    value: operator,
    checked: activeOperator === operator,
    onChange: e => {
      onChangeView({
        ...view,
        page: 1,
        filters: [...otherFilters, {
          field: filter.field,
          operator: e.target.value,
          value: filterInView?.value
        }]
      });
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenuItemLabel, null, label))))));
}
//# sourceMappingURL=filter-summary.js.map

/***/ }),

/***/ "./node_modules/@wordpress/dataviews/build-module/filters.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@wordpress/dataviews/build-module/filters.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _filter_summary__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./filter-summary */ "./node_modules/@wordpress/dataviews/build-module/filter-summary.js");
/* harmony import */ var _add_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-filter */ "./node_modules/@wordpress/dataviews/build-module/add-filter.js");
/* harmony import */ var _reset_filters__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reset-filters */ "./node_modules/@wordpress/dataviews/build-module/reset-filters.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./node_modules/@wordpress/dataviews/build-module/constants.js");

/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */




const sanitizeOperators = field => {
  let operators = field.filterBy?.operators;
  if (!operators || !Array.isArray(operators)) {
    operators = [_constants__WEBPACK_IMPORTED_MODULE_2__.OPERATOR_IN, _constants__WEBPACK_IMPORTED_MODULE_2__.OPERATOR_NOT_IN];
  }
  return operators.filter(operator => [_constants__WEBPACK_IMPORTED_MODULE_2__.OPERATOR_IN, _constants__WEBPACK_IMPORTED_MODULE_2__.OPERATOR_NOT_IN].includes(operator));
};
const Filters = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.memo)(function Filters({
  fields,
  view,
  onChangeView
}) {
  const filters = [];
  fields.forEach(field => {
    if (!field.type) {
      return;
    }
    const operators = sanitizeOperators(field);
    if (operators.length === 0) {
      return;
    }
    switch (field.type) {
      case _constants__WEBPACK_IMPORTED_MODULE_2__.ENUMERATION_TYPE:
        if (!field.elements?.length) {
          return;
        }
        filters.push({
          field: field.id,
          name: field.header,
          elements: field.elements,
          operators,
          isVisible: view.filters.some(f => f.field === field.id && [_constants__WEBPACK_IMPORTED_MODULE_2__.OPERATOR_IN, _constants__WEBPACK_IMPORTED_MODULE_2__.OPERATOR_NOT_IN].includes(f.operator))
        });
    }
  });
  const addFilter = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_add_filter__WEBPACK_IMPORTED_MODULE_3__["default"], {
    key: "add-filter",
    filters: filters,
    view: view,
    onChangeView: onChangeView
  });
  const filterComponents = [addFilter, ...filters.map(filter => {
    if (!filter.isVisible || view.type === _constants__WEBPACK_IMPORTED_MODULE_2__.LAYOUT_LIST) {
      return null;
    }
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_filter_summary__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: filter.field,
      filter: filter,
      view: view,
      onChangeView: onChangeView
    });
  })];
  if (filterComponents.length > 1 && view.type !== _constants__WEBPACK_IMPORTED_MODULE_2__.LAYOUT_LIST) {
    filterComponents.push((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_reset_filters__WEBPACK_IMPORTED_MODULE_5__["default"], {
      key: "reset-filters",
      view: view,
      onChangeView: onChangeView
    }));
  }
  return filterComponents;
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Filters);
//# sourceMappingURL=filters.js.map

/***/ }),

/***/ "./node_modules/@wordpress/dataviews/build-module/item-actions.js":
/*!************************************************************************!*\
  !*** ./node_modules/@wordpress/dataviews/build-module/item-actions.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ItemActions)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/more-vertical.js");
/* harmony import */ var _lock_unlock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lock-unlock */ "./node_modules/@wordpress/dataviews/build-module/lock-unlock.js");

/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */

const {
  DropdownMenuV2: DropdownMenu,
  DropdownMenuGroupV2: DropdownMenuGroup,
  DropdownMenuItemV2: DropdownMenuItem,
  DropdownMenuItemLabelV2: DropdownMenuItemLabel,
  kebabCase
} = (0,_lock_unlock__WEBPACK_IMPORTED_MODULE_4__.unlock)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.privateApis);
function ButtonTrigger({
  action,
  onClick
}) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    label: action.label,
    icon: action.icon,
    isDestructive: action.isDestructive,
    size: "compact",
    onClick: onClick
  });
}
function DropdownMenuItemTrigger({
  action,
  onClick
}) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenuItem, {
    onClick: onClick,
    hideOnClick: !action.RenderModal
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenuItemLabel, null, action.label));
}
function ActionWithModal({
  action,
  item,
  ActionTrigger
}) {
  const [isModalOpen, setIsModalOpen] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  const actionTriggerProps = {
    action,
    onClick: () => setIsModalOpen(true)
  };
  const {
    RenderModal,
    hideModalHeader
  } = action;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ActionTrigger, {
    ...actionTriggerProps
  }), isModalOpen && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Modal, {
    title: action.modalHeader || action.label,
    __experimentalHideHeader: !!hideModalHeader,
    onRequestClose: () => {
      setIsModalOpen(false);
    },
    overlayClassName: `dataviews-action-modal dataviews-action-modal__${kebabCase(action.id)}`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RenderModal, {
    items: [item],
    closeModal: () => setIsModalOpen(false)
  })));
}
function ActionsDropdownMenuGroup({
  actions,
  item
}) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenuGroup, null, actions.map(action => {
    if (!!action.RenderModal) {
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ActionWithModal, {
        key: action.id,
        action: action,
        item: item,
        ActionTrigger: DropdownMenuItemTrigger
      });
    }
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenuItemTrigger, {
      key: action.id,
      action: action,
      onClick: () => action.callback([item])
    });
  }));
}
function ItemActions({
  item,
  actions,
  isCompact
}) {
  const {
    primaryActions,
    secondaryActions
  } = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => {
    return actions.reduce((accumulator, action) => {
      // If an action is eligible for all items, doesn't need
      // to provide the `isEligible` function.
      if (action.isEligible && !action.isEligible(item)) {
        return accumulator;
      }
      if (action.isPrimary && !!action.icon) {
        accumulator.primaryActions.push(action);
      } else {
        accumulator.secondaryActions.push(action);
      }
      return accumulator;
    }, {
      primaryActions: [],
      secondaryActions: []
    });
  }, [actions, item]);
  if (isCompact) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(CompactItemActions, {
      item: item,
      primaryActions: primaryActions,
      secondaryActions: secondaryActions
    });
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalHStack, {
    spacing: 1,
    justify: "flex-end",
    style: {
      flexShrink: '0',
      width: 'auto'
    }
  }, !!primaryActions.length && primaryActions.map(action => {
    if (!!action.RenderModal) {
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ActionWithModal, {
        key: action.id,
        action: action,
        item: item,
        ActionTrigger: ButtonTrigger
      });
    }
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ButtonTrigger, {
      key: action.id,
      action: action,
      onClick: () => action.callback([item])
    });
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenu, {
    trigger: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
      size: "compact",
      icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_5__["default"],
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Actions'),
      disabled: !secondaryActions.length
    }),
    placement: "bottom-end"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ActionsDropdownMenuGroup, {
    actions: secondaryActions,
    item: item
  })));
}
function CompactItemActions({
  item,
  primaryActions,
  secondaryActions
}) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenu, {
    trigger: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
      size: "compact",
      icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_5__["default"],
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Actions'),
      disabled: !primaryActions.length && !secondaryActions.length
    }),
    placement: "bottom-end"
  }, !!primaryActions.length && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ActionsDropdownMenuGroup, {
    actions: primaryActions,
    item: item
  }), !!secondaryActions.length && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ActionsDropdownMenuGroup, {
    actions: secondaryActions,
    item: item
  }));
}
//# sourceMappingURL=item-actions.js.map

/***/ }),

/***/ "./node_modules/@wordpress/dataviews/build-module/lock-unlock.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@wordpress/dataviews/build-module/lock-unlock.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   lock: () => (/* binding */ lock),
/* harmony export */   unlock: () => (/* binding */ unlock)
/* harmony export */ });
/* harmony import */ var _wordpress_private_apis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/private-apis */ "@wordpress/private-apis");
/* harmony import */ var _wordpress_private_apis__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_private_apis__WEBPACK_IMPORTED_MODULE_0__);
/**
 * WordPress dependencies
 */

const {
  lock,
  unlock
} = (0,_wordpress_private_apis__WEBPACK_IMPORTED_MODULE_0__.__dangerousOptInToUnstableAPIsOnlyForCoreModules)('I know using unstable features means my theme or plugin will inevitably break in the next version of WordPress.', '@wordpress/dataviews');
//# sourceMappingURL=lock-unlock.js.map

/***/ }),

/***/ "./node_modules/@wordpress/dataviews/build-module/pagination.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@wordpress/dataviews/build-module/pagination.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/chevron-left.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/chevron-right.js");

/**
 * WordPress dependencies
 */




const Pagination = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.memo)(function Pagination({
  view,
  onChangeView,
  paginationInfo: {
    totalItems = 0,
    totalPages
  }
}) {
  if (!totalItems || !totalPages) {
    return null;
  }
  return !!totalItems && totalPages !== 1 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalHStack, {
    expanded: false,
    spacing: 6,
    justify: "end",
    className: "dataviews-pagination"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalHStack, {
    justify: "flex-start",
    expanded: false,
    spacing: 2
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createInterpolateElement)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.sprintf)(
  // translators: %s: Total number of pages.
  (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__._x)('Page <CurrenPageControl /> of %s', 'paging'), totalPages), {
    CurrenPageControl: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
      "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Current page'),
      value: view.page,
      options: Array.from(Array(totalPages)).map((_, i) => {
        const page = i + 1;
        return {
          value: page,
          label: page
        };
      }),
      onChange: newValue => {
        onChangeView({
          ...view,
          page: +newValue
        });
      },
      size: 'compact',
      __nextHasNoMarginBottom: true
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalHStack, {
    expanded: false,
    spacing: 1
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    onClick: () => onChangeView({
      ...view,
      page: view.page - 1
    }),
    disabled: view.page === 1,
    __experimentalIsFocusable: true,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Previous page'),
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_4__["default"],
    showTooltip: true,
    size: "compact",
    tooltipPosition: "top"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    onClick: () => onChangeView({
      ...view,
      page: view.page + 1
    }),
    disabled: view.page >= totalPages,
    __experimentalIsFocusable: true,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Next page'),
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_5__["default"],
    showTooltip: true,
    size: "compact",
    tooltipPosition: "top"
  })));
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Pagination);
//# sourceMappingURL=pagination.js.map

/***/ }),

/***/ "./node_modules/@wordpress/dataviews/build-module/reset-filters.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@wordpress/dataviews/build-module/reset-filters.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ResetFilter)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);

/**
 * WordPress dependencies
 */


function ResetFilter({
  view,
  onChangeView
}) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    disabled: view.search === '' && view.filters?.length === 0,
    __experimentalIsFocusable: true,
    size: "compact",
    variant: "tertiary",
    onClick: () => {
      onChangeView({
        ...view,
        page: 1,
        search: '',
        filters: []
      });
    }
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Reset filters'));
}
//# sourceMappingURL=reset-filters.js.map

/***/ }),

/***/ "./node_modules/@wordpress/dataviews/build-module/search.js":
/*!******************************************************************!*\
  !*** ./node_modules/@wordpress/dataviews/build-module/search.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__);

/**
 * WordPress dependencies
 */




const Search = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.memo)(function Search({
  label,
  view,
  onChangeView
}) {
  const [search, setSearch, debouncedSearch] = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__.useDebouncedInput)(view.search);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    setSearch(view.search);
  }, [view]);
  const onChangeViewRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useRef)(onChangeView);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    onChangeViewRef.current = onChangeView;
  }, [onChangeView]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    onChangeViewRef.current({
      ...view,
      page: 1,
      search: debouncedSearch
    });
  }, [debouncedSearch]);
  const searchLabel = label || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Filter list');
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SearchControl, {
    __nextHasNoMarginBottom: true,
    onChange: setSearch,
    value: search,
    label: searchLabel,
    placeholder: searchLabel,
    size: "compact"
  });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Search);
//# sourceMappingURL=search.js.map

/***/ }),

/***/ "./node_modules/@wordpress/dataviews/build-module/view-actions.js":
/*!************************************************************************!*\
  !*** ./node_modules/@wordpress/dataviews/build-module/view-actions.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/settings.js");
/* harmony import */ var _lock_unlock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lock-unlock */ "./node_modules/@wordpress/dataviews/build-module/lock-unlock.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants */ "./node_modules/@wordpress/dataviews/build-module/constants.js");

/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */


const {
  DropdownMenuV2: DropdownMenu,
  DropdownMenuGroupV2: DropdownMenuGroup,
  DropdownMenuItemV2: DropdownMenuItem,
  DropdownMenuRadioItemV2: DropdownMenuRadioItem,
  DropdownMenuCheckboxItemV2: DropdownMenuCheckboxItem,
  DropdownMenuItemLabelV2: DropdownMenuItemLabel
} = (0,_lock_unlock__WEBPACK_IMPORTED_MODULE_4__.unlock)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.privateApis);
function ViewTypeMenu({
  view,
  onChangeView,
  supportedLayouts
}) {
  let _availableViews = _constants__WEBPACK_IMPORTED_MODULE_5__.VIEW_LAYOUTS;
  if (supportedLayouts) {
    _availableViews = _availableViews.filter(_view => supportedLayouts.includes(_view.type));
  }
  if (_availableViews.length === 1) {
    return null;
  }
  const activeView = _availableViews.find(v => view.type === v.type);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenu, {
    trigger: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenuItem, {
      suffix: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
        "aria-hidden": "true"
      }, activeView.label)
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenuItemLabel, null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Layout')))
  }, _availableViews.map(availableView => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenuRadioItem, {
      key: availableView.type,
      value: availableView.type,
      name: "view-actions-available-view",
      checked: availableView.type === view.type,
      hideOnClick: true,
      onChange: e => {
        onChangeView({
          ...view,
          type: e.target.value
        });
      }
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenuItemLabel, null, availableView.label));
  }));
}
const PAGE_SIZE_VALUES = [10, 20, 50, 100];
function PageSizeMenu({
  view,
  onChangeView
}) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenu, {
    trigger: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenuItem, {
      suffix: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
        "aria-hidden": "true"
      }, view.perPage)
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenuItemLabel, null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Rows per page')))
  }, PAGE_SIZE_VALUES.map(size => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenuRadioItem, {
      key: size,
      value: size,
      name: "view-actions-page-size",
      checked: view.perPage === size,
      onChange: () => {
        onChangeView({
          ...view,
          // `e.target.value` holds the same value as `size` but as a string,
          // so we use `size` directly to avoid parsing to int.
          perPage: size,
          page: 1
        });
      }
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenuItemLabel, null, size));
  }));
}
function FieldsVisibilityMenu({
  view,
  onChangeView,
  fields
}) {
  const hidableFields = fields.filter(field => field.enableHiding !== false && field.id !== view.layout.mediaField);
  if (!hidableFields?.length) {
    return null;
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenu, {
    trigger: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenuItem, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenuItemLabel, null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Fields')))
  }, hidableFields?.map(field => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenuCheckboxItem, {
      key: field.id,
      value: field.id,
      checked: !view.hiddenFields?.includes(field.id),
      onChange: () => {
        onChangeView({
          ...view,
          hiddenFields: view.hiddenFields?.includes(field.id) ? view.hiddenFields.filter(id => id !== field.id) : [...(view.hiddenFields || []), field.id]
        });
      }
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenuItemLabel, null, field.header));
  }));
}
function SortMenu({
  fields,
  view,
  onChangeView
}) {
  const sortableFields = fields.filter(field => field.enableSorting !== false);
  if (!sortableFields?.length) {
    return null;
  }
  const currentSortedField = fields.find(field => field.id === view.sort?.field);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenu, {
    trigger: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenuItem, {
      suffix: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
        "aria-hidden": "true"
      }, currentSortedField?.header)
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenuItemLabel, null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Sort by')))
  }, sortableFields?.map(field => {
    const sortedDirection = view.sort?.direction;
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenu, {
      key: field.id,
      trigger: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenuItem, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenuItemLabel, null, field.header)),
      style: {
        minWidth: '220px'
      }
    }, Object.entries(_constants__WEBPACK_IMPORTED_MODULE_5__.SORTING_DIRECTIONS).map(([direction, info]) => {
      const isChecked = currentSortedField !== undefined && sortedDirection === direction && field.id === currentSortedField.id;
      const value = `${field.id}-${direction}`;
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenuRadioItem, {
        key: value
        // All sorting radio items share the same name, so that
        // selecting a sorting option automatically deselects the
        // previously selected one, even if it is displayed in
        // another submenu. The field and direction are passed via
        // the `value` prop.
        ,
        name: "view-actions-sorting",
        value: value,
        checked: isChecked,
        onChange: () => {
          onChangeView({
            ...view,
            sort: {
              field: field.id,
              direction
            }
          });
        }
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenuItemLabel, null, info.label));
    }));
  }));
}
const ViewActions = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.memo)(function ViewActions({
  fields,
  view,
  onChangeView,
  supportedLayouts
}) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenu, {
    trigger: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
      size: "compact",
      icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_6__["default"],
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('View options')
    })
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenuGroup, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ViewTypeMenu, {
    view: view,
    onChangeView: onChangeView,
    supportedLayouts: supportedLayouts
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(SortMenu, {
    fields: fields,
    view: view,
    onChangeView: onChangeView
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(FieldsVisibilityMenu, {
    fields: fields,
    view: view,
    onChangeView: onChangeView
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(PageSizeMenu, {
    view: view,
    onChangeView: onChangeView
  })));
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ViewActions);
//# sourceMappingURL=view-actions.js.map

/***/ }),

/***/ "./node_modules/@wordpress/dataviews/build-module/view-grid.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@wordpress/dataviews/build-module/view-grid.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ViewGrid)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _item_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./item-actions */ "./node_modules/@wordpress/dataviews/build-module/item-actions.js");

/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */

function ViewGrid({
  data,
  fields,
  view,
  actions,
  getItemId,
  deferredRendering
}) {
  const mediaField = fields.find(field => field.id === view.layout.mediaField);
  const primaryField = fields.find(field => field.id === view.layout.primaryField);
  const visibleFields = fields.filter(field => !view.hiddenFields.includes(field.id) && ![view.layout.mediaField, view.layout.primaryField].includes(field.id));
  const shownData = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__.useAsyncList)(data, {
    step: 3
  });
  const usedData = deferredRendering ? shownData : data;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalGrid, {
    gap: 6,
    columns: 2,
    alignment: "top",
    className: "dataviews-view-grid"
  }, usedData.map(item => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalVStack, {
    spacing: 0,
    key: getItemId(item),
    className: "dataviews-view-grid__card"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "dataviews-view-grid__media"
  }, mediaField?.render({
    item
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalHStack, {
    justify: "space-between",
    className: "dataviews-view-grid__title-actions"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalHStack, {
    className: "dataviews-view-grid__primary-field"
  }, primaryField?.render({
    item
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_item_actions__WEBPACK_IMPORTED_MODULE_3__["default"], {
    item: item,
    actions: actions,
    isCompact: true
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalVStack, {
    className: "dataviews-view-grid__fields",
    spacing: 3
  }, visibleFields.map(field => {
    const renderedValue = field.render({
      item
    });
    if (!renderedValue) {
      return null;
    }
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalVStack, {
      className: "dataviews-view-grid__field",
      key: field.id,
      spacing: 1
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Tooltip, {
      text: field.header,
      placement: "left"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "dataviews-view-grid__field-value"
    }, renderedValue)));
  })))));
}
//# sourceMappingURL=view-grid.js.map

/***/ }),

/***/ "./node_modules/@wordpress/dataviews/build-module/view-list.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@wordpress/dataviews/build-module/view-list.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ViewList)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/keycodes */ "@wordpress/keycodes");
/* harmony import */ var _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_keycodes__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/info.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);

/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */





function ViewList({
  view,
  fields,
  data,
  isLoading,
  getItemId,
  onSelectionChange,
  onDetailsChange,
  selection,
  deferredRendering
}) {
  const shownData = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__.useAsyncList)(data, {
    step: 3
  });
  const usedData = deferredRendering ? shownData : data;
  const mediaField = fields.find(field => field.id === view.layout.mediaField);
  const primaryField = fields.find(field => field.id === view.layout.primaryField);
  const visibleFields = fields.filter(field => !view.hiddenFields.includes(field.id) && ![view.layout.primaryField, view.layout.mediaField].includes(field.id));
  const onEnter = item => event => {
    const {
      keyCode
    } = event;
    if ([_wordpress_keycodes__WEBPACK_IMPORTED_MODULE_4__.ENTER, _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_4__.SPACE].includes(keyCode)) {
      onSelectionChange([item]);
    }
  };
  const hasData = usedData?.length;
  if (!hasData) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()({
        'dataviews-loading': isLoading,
        'dataviews-no-results': !hasData && !isLoading
      })
    }, !hasData && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, isLoading ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Loading…') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('No results')));
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
    className: "dataviews-view-list"
  }, usedData.map(item => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
      key: getItemId(item),
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()({
        'is-selected': selection.includes(item.id)
      })
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalHStack, {
      className: "dataviews-view-list__item-wrapper"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      role: "button",
      tabIndex: 0,
      "aria-pressed": selection.includes(item.id),
      onKeyDown: onEnter(item),
      className: "dataviews-view-list__item",
      onClick: () => onSelectionChange([item])
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalHStack, {
      spacing: 3,
      justify: "start"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "dataviews-view-list__media-wrapper"
    }, mediaField?.render({
      item
    }) || (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "dataviews-view-list__media-placeholder"
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalVStack, {
      spacing: 1
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "dataviews-view-list__primary-field"
    }, primaryField?.render({
      item
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "dataviews-view-list__fields"
    }, visibleFields.map(field => {
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
        key: field.id,
        className: "dataviews-view-list__field"
      }, field.render({
        item
      }));
    }))))), onDetailsChange && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      className: "dataviews-view-list__details-button",
      onClick: () => onDetailsChange([item]),
      icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_6__["default"],
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('View details'),
      size: "compact"
    })));
  }));
}
//# sourceMappingURL=view-list.js.map

/***/ }),

/***/ "./node_modules/@wordpress/dataviews/build-module/view-table.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@wordpress/dataviews/build-module/view-table.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/unseen.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/funnel.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lock_unlock__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lock-unlock */ "./node_modules/@wordpress/dataviews/build-module/lock-unlock.js");
/* harmony import */ var _item_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./item-actions */ "./node_modules/@wordpress/dataviews/build-module/item-actions.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./constants */ "./node_modules/@wordpress/dataviews/build-module/constants.js");
/* harmony import */ var _dropdown_menu_helper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dropdown-menu-helper */ "./node_modules/@wordpress/dataviews/build-module/dropdown-menu-helper.js");

/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */




const {
  DropdownMenuV2: DropdownMenu,
  DropdownMenuGroupV2: DropdownMenuGroup,
  DropdownMenuItemV2: DropdownMenuItem,
  DropdownMenuRadioItemV2: DropdownMenuRadioItem,
  DropdownMenuSeparatorV2: DropdownMenuSeparator,
  DropdownMenuItemLabelV2: DropdownMenuItemLabel,
  DropdownMenuItemHelpTextV2: DropdownMenuItemHelpText
} = (0,_lock_unlock__WEBPACK_IMPORTED_MODULE_6__.unlock)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.privateApis);
const sortArrows = {
  asc: '↑',
  desc: '↓'
};
const sanitizeOperators = field => {
  let operators = field.filterBy?.operators;
  if (!operators || !Array.isArray(operators)) {
    operators = Object.keys(_constants__WEBPACK_IMPORTED_MODULE_7__.OPERATORS);
  }
  return operators.filter(operator => Object.keys(_constants__WEBPACK_IMPORTED_MODULE_7__.OPERATORS).includes(operator));
};
const HeaderMenu = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.forwardRef)(function HeaderMenu({
  field,
  view,
  onChangeView,
  onHide
}, ref) {
  const isHidable = field.enableHiding !== false;
  const isSortable = field.enableSorting !== false;
  const isSorted = view.sort?.field === field.id;
  let filter, filterInView, activeElement, activeOperator, otherFilters;
  const operators = sanitizeOperators(field);
  if (field.type === _constants__WEBPACK_IMPORTED_MODULE_7__.ENUMERATION_TYPE && operators.length > 0) {
    filter = {
      field: field.id,
      operators,
      elements: field.elements || []
    };
    filterInView = view.filters.find(f => f.field === filter.field);
    otherFilters = view.filters.filter(f => f.field !== filter.field);
    activeElement = filter.elements.find(element => element.value === filterInView?.value);
    activeOperator = filterInView?.operator || filter.operators[0];
  }
  const isFilterable = !!filter;
  if (!isSortable && !isHidable && !isFilterable) {
    return field.header;
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenu, {
    align: "start",
    trigger: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
      size: "compact",
      className: "dataviews-view-table-header-button",
      ref: ref,
      variant: "tertiary"
    }, field.header, isSorted && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      "aria-hidden": "true"
    }, isSorted && sortArrows[view.sort.direction])),
    style: {
      minWidth: '240px'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(WithSeparators, null, isSortable && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenuGroup, null, Object.entries(_constants__WEBPACK_IMPORTED_MODULE_7__.SORTING_DIRECTIONS).map(([direction, info]) => {
    const isChecked = isSorted && view.sort.direction === direction;
    const value = `${field.id}-${direction}`;
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenuRadioItem, {
      key: value
      // All sorting radio items share the same name, so that
      // selecting a sorting option automatically deselects the
      // previously selected one, even if it is displayed in
      // another submenu. The field and direction are passed via
      // the `value` prop.
      ,
      name: "view-table-sorting",
      value: value,
      checked: isChecked,
      onChange: () => {
        onChangeView({
          ...view,
          sort: {
            field: field.id,
            direction
          }
        });
      }
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenuItemLabel, null, info.label));
  })), isHidable && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenuItem, {
    prefix: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Icon, {
      icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_8__["default"]
    }),
    onClick: () => {
      onHide(field);
      onChangeView({
        ...view,
        hiddenFields: view.hiddenFields.concat(field.id)
      });
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenuItemLabel, null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Hide'))), isFilterable && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenuGroup, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenu, {
    key: filter.field,
    trigger: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenuItem, {
      prefix: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Icon, {
        icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_9__["default"]
      }),
      suffix: activeElement && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
        "aria-hidden": "true"
      }, activeOperator in _constants__WEBPACK_IMPORTED_MODULE_7__.OPERATORS && `${_constants__WEBPACK_IMPORTED_MODULE_7__.OPERATORS[activeOperator].label} `, activeElement?.label)
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenuItemLabel, null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Filter by')))
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(WithSeparators, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenuGroup, null, filter.elements.map(element => {
    const isActive = activeElement?.value === element.value;
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_dropdown_menu_helper__WEBPACK_IMPORTED_MODULE_10__.DropdownMenuRadioItemCustom, {
      key: element.value,
      name: `view-table-${filter.field}`,
      value: element.value,
      checked: isActive,
      onClick: () => {
        onChangeView({
          ...view,
          page: 1,
          filters: [...otherFilters, {
            field: filter.field,
            operator: activeOperator,
            value: isActive ? undefined : element.value
          }]
        });
      }
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenuItemLabel, null, element.label), !!element.description && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenuItemHelpText, null, element.description));
  })), filter.operators.length > 1 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenu, {
    trigger: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenuItem, {
      suffix: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
        "aria-hidden": "true"
      }, _constants__WEBPACK_IMPORTED_MODULE_7__.OPERATORS[activeOperator]?.label)
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenuItemLabel, null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Conditions')))
  }, Object.entries(_constants__WEBPACK_IMPORTED_MODULE_7__.OPERATORS).map(([operator, {
    label,
    key
  }]) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenuRadioItem, {
    key: key,
    name: `view-table-${filter.field}-conditions`,
    value: operator,
    checked: activeOperator === operator,
    onChange: e => onChangeView({
      ...view,
      page: 1,
      filters: [...otherFilters, {
        field: filter.field,
        operator: e.target.value,
        value: filterInView?.value
      }]
    })
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenuItemLabel, null, label)))))))));
});
function WithSeparators({
  children
}) {
  return _wordpress_element__WEBPACK_IMPORTED_MODULE_5__.Children.toArray(children).filter(Boolean).map((child, i) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    key: i
  }, i > 0 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenuSeparator, null), child));
}
function BulkSelectionCheckbox({
  selection,
  onSelectionChange,
  data
}) {
  const areAllSelected = selection.length === data.length;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.CheckboxControl, {
    className: "dataviews-view-table-selection-checkbox",
    __nextHasNoMarginBottom: true,
    checked: areAllSelected,
    indeterminate: !areAllSelected && selection.length,
    onChange: () => {
      if (areAllSelected) {
        onSelectionChange([]);
      } else {
        onSelectionChange(data);
      }
    },
    label: areAllSelected ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Deselect all') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Select all')
  });
}
function SingleSelectionCheckbox({
  selection,
  onSelectionChange,
  item,
  data,
  getItemId,
  primaryField
}) {
  const id = getItemId(item);
  const isSelected = selection.includes(id);
  let selectionLabel;
  if (primaryField?.getValue && item) {
    // eslint-disable-next-line @wordpress/valid-sprintf
    selectionLabel = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)( /* translators: %s: item title. */
    isSelected ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Deselect item: %s') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Select item: %s'), primaryField.getValue({
      item
    }));
  } else {
    selectionLabel = isSelected ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Select a new item') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Deselect item');
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.CheckboxControl, {
    className: "dataviews-view-table-selection-checkbox",
    __nextHasNoMarginBottom: true,
    checked: isSelected,
    label: selectionLabel,
    onChange: () => {
      if (!isSelected) {
        onSelectionChange(data.filter(_item => {
          const itemId = getItemId?.(_item);
          return itemId === id || selection.includes(itemId);
        }));
      } else {
        onSelectionChange(data.filter(_item => {
          const itemId = getItemId?.(_item);
          return itemId !== id && selection.includes(itemId);
        }));
      }
    }
  });
}
function ViewTable({
  view,
  onChangeView,
  fields,
  actions,
  data,
  getItemId,
  isLoading = false,
  deferredRendering,
  selection,
  onSelectionChange
}) {
  const hasBulkActions = actions?.some(action => action.supportsBulk);
  const headerMenuRefs = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.useRef)(new Map());
  const headerMenuToFocusRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.useRef)();
  const [nextHeaderMenuToFocus, setNextHeaderMenuToFocus] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.useState)();
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.useEffect)(() => {
    if (headerMenuToFocusRef.current) {
      headerMenuToFocusRef.current.focus();
      headerMenuToFocusRef.current = undefined;
    }
  });
  const asyncData = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__.useAsyncList)(data);
  const tableNoticeId = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.useId)();
  if (nextHeaderMenuToFocus) {
    // If we need to force focus, we short-circuit rendering here
    // to prevent any additional work while we handle that.
    // Clearing out the focus directive is necessary to make sure
    // future renders don't cause unexpected focus jumps.
    headerMenuToFocusRef.current = nextHeaderMenuToFocus;
    setNextHeaderMenuToFocus();
    return;
  }
  const onHide = field => {
    const hidden = headerMenuRefs.current.get(field.id);
    const fallback = headerMenuRefs.current.get(hidden.fallback);
    setNextHeaderMenuToFocus(fallback?.node);
  };
  const visibleFields = fields.filter(field => !view.hiddenFields.includes(field.id) && ![view.layout.mediaField].includes(field.id));
  const usedData = deferredRendering ? asyncData : data;
  const hasData = !!usedData?.length;
  const sortValues = {
    asc: 'ascending',
    desc: 'descending'
  };
  const primaryField = fields.find(field => field.id === view.layout.primaryField);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "dataviews-view-table-wrapper"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("table", {
    className: "dataviews-view-table",
    "aria-busy": isLoading,
    "aria-describedby": tableNoticeId
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("thead", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", {
    className: "dataviews-view-table__row"
  }, hasBulkActions && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
    className: "dataviews-view-table__checkbox-column",
    style: {
      width: 20,
      minWidth: 20
    },
    "data-field-id": "selection",
    scope: "col"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(BulkSelectionCheckbox, {
    selection: selection,
    onSelectionChange: onSelectionChange,
    data: data
  })), visibleFields.map((field, index) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
    key: field.id,
    style: {
      width: field.width || undefined,
      minWidth: field.minWidth || undefined,
      maxWidth: field.maxWidth || undefined
    },
    "data-field-id": field.id,
    "aria-sort": view.sort?.field === field.id && sortValues[view.sort.direction],
    scope: "col"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(HeaderMenu, {
    ref: node => {
      if (node) {
        headerMenuRefs.current.set(field.id, {
          node,
          fallback: visibleFields[index > 0 ? index - 1 : 1]?.id
        });
      } else {
        headerMenuRefs.current.delete(field.id);
      }
    },
    field: field,
    view: view,
    onChangeView: onChangeView,
    onHide: onHide
  }))), !!actions?.length && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
    "data-field-id": "actions",
    className: "dataviews-view-table__actions-column"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "dataviews-view-table-header"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Actions'))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tbody", null, hasData && usedData.map((item, index) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", {
    key: getItemId(item),
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('dataviews-view-table__row', {
      'is-selected': selection.includes(getItemId(item) || index)
    })
  }, hasBulkActions && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
    className: "dataviews-view-table__checkbox-column",
    style: {
      width: 20,
      minWidth: 20
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "dataviews-view-table__cell-content-wrapper"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(SingleSelectionCheckbox, {
    id: getItemId(item) || index,
    item: item,
    selection: selection,
    onSelectionChange: onSelectionChange,
    getItemId: getItemId,
    data: data,
    primaryField: primaryField
  }))), visibleFields.map(field => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
    key: field.id,
    style: {
      width: field.width || undefined,
      minWidth: field.minWidth || undefined,
      maxWidth: field.maxWidth || undefined
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('dataviews-view-table__cell-content-wrapper', {
      'dataviews-view-table__primary-field': primaryField?.id === field.id
    })
  }, field.render({
    item
  })))), !!actions?.length && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
    className: "dataviews-view-table__actions-column"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_item_actions__WEBPACK_IMPORTED_MODULE_11__["default"], {
    item: item,
    actions: actions
  })))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()({
      'dataviews-loading': isLoading,
      'dataviews-no-results': !hasData && !isLoading
    }),
    id: tableNoticeId
  }, !hasData && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, isLoading ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Loading…') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('No results'))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ViewTable);
//# sourceMappingURL=view-table.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/block-table.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/block-table.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);

/**
 * WordPress dependencies
 */

const blockTable = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM5 4.5h14c.3 0 .5.2.5.5v3.5h-15V5c0-.3.2-.5.5-.5zm8 5.5h6.5v3.5H13V10zm-1.5 3.5h-7V10h7v3.5zm-7 5.5v-4h7v4.5H5c-.3 0-.5-.2-.5-.5zm14.5.5h-6V15h6.5v4c0 .3-.2.5-.5.5z"
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (blockTable);
//# sourceMappingURL=block-table.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/category.js":
/*!************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/category.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);

/**
 * WordPress dependencies
 */

const category = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M6 5.5h3a.5.5 0 01.5.5v3a.5.5 0 01-.5.5H6a.5.5 0 01-.5-.5V6a.5.5 0 01.5-.5zM4 6a2 2 0 012-2h3a2 2 0 012 2v3a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm11-.5h3a.5.5 0 01.5.5v3a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5V6a.5.5 0 01.5-.5zM13 6a2 2 0 012-2h3a2 2 0 012 2v3a2 2 0 01-2 2h-3a2 2 0 01-2-2V6zm5 8.5h-3a.5.5 0 00-.5.5v3a.5.5 0 00.5.5h3a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5zM15 13a2 2 0 00-2 2v3a2 2 0 002 2h3a2 2 0 002-2v-3a2 2 0 00-2-2h-3zm-9 1.5h3a.5.5 0 01.5.5v3a.5.5 0 01-.5.5H6a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5zM4 15a2 2 0 012-2h3a2 2 0 012 2v3a2 2 0 01-2 2H6a2 2 0 01-2-2v-3z",
  fillRule: "evenodd",
  clipRule: "evenodd"
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (category);
//# sourceMappingURL=category.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/chevron-down.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/chevron-down.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);

/**
 * WordPress dependencies
 */

const chevronDown = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M17.5 11.6L12 16l-5.5-4.4.9-1.2L12 14l4.5-3.6 1 1.2z"
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (chevronDown);
//# sourceMappingURL=chevron-down.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/chevron-left.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/chevron-left.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);

/**
 * WordPress dependencies
 */

const chevronLeft = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M14.6 7l-1.2-1L8 12l5.4 6 1.2-1-4.6-5z"
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (chevronLeft);
//# sourceMappingURL=chevron-left.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/chevron-right.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/chevron-right.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);

/**
 * WordPress dependencies
 */

const chevronRight = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M10.6 6L9.4 7l4.6 5-4.6 5 1.2 1 5.4-6z"
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (chevronRight);
//# sourceMappingURL=chevron-right.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/close-small.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/close-small.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);

/**
 * WordPress dependencies
 */

const closeSmall = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M12 13.06l3.712 3.713 1.061-1.06L13.061 12l3.712-3.712-1.06-1.06L12 10.938 8.288 7.227l-1.061 1.06L10.939 12l-3.712 3.712 1.06 1.061L12 13.061z"
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (closeSmall);
//# sourceMappingURL=close-small.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/format-list-bullets-rtl.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/format-list-bullets-rtl.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);

/**
 * WordPress dependencies
 */

const formatListBulletsRTL = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M4 8.8h8.9V7.2H4v1.6zm0 7h8.9v-1.5H4v1.5zM18 13c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatListBulletsRTL);
//# sourceMappingURL=format-list-bullets-rtl.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/format-list-bullets.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/format-list-bullets.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);

/**
 * WordPress dependencies
 */

const formatListBullets = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M11.1 15.8H20v-1.5h-8.9v1.5zm0-8.6v1.5H20V7.2h-8.9zM6 13c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-7c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatListBullets);
//# sourceMappingURL=format-list-bullets.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/funnel.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/funnel.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);

/**
 * WordPress dependencies
 */

const funnel = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M10 17.5H14V16H10V17.5ZM6 6V7.5H18V6H6ZM8 12.5H16V11H8V12.5Z"
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (funnel);
//# sourceMappingURL=funnel.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/info.js":
/*!********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/info.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);

/**
 * WordPress dependencies
 */

const info = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M12 3.2c-4.8 0-8.8 3.9-8.8 8.8 0 4.8 3.9 8.8 8.8 8.8 4.8 0 8.8-3.9 8.8-8.8 0-4.8-4-8.8-8.8-8.8zm0 16c-4 0-7.2-3.3-7.2-7.2C4.8 8 8 4.8 12 4.8s7.2 3.3 7.2 7.2c0 4-3.2 7.2-7.2 7.2zM11 17h2v-6h-2v6zm0-8h2V7h-2v2z"
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (info);
//# sourceMappingURL=info.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/more-vertical.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/more-vertical.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);

/**
 * WordPress dependencies
 */

const moreVertical = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M13 19h-2v-2h2v2zm0-6h-2v-2h2v2zm0-6h-2V5h2v2z"
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (moreVertical);
//# sourceMappingURL=more-vertical.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/settings.js":
/*!************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/settings.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);

/**
 * WordPress dependencies
 */

const settings = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "m19 7.5h-7.628c-.3089-.87389-1.1423-1.5-2.122-1.5-.97966 0-1.81309.62611-2.12197 1.5h-2.12803v1.5h2.12803c.30888.87389 1.14231 1.5 2.12197 1.5.9797 0 1.8131-.62611 2.122-1.5h7.628z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "m19 15h-2.128c-.3089-.8739-1.1423-1.5-2.122-1.5s-1.8131.6261-2.122 1.5h-7.628v1.5h7.628c.3089.8739 1.1423 1.5 2.122 1.5s1.8131-.6261 2.122-1.5h2.128z"
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (settings);
//# sourceMappingURL=settings.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/styles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/styles.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   styles: () => (/* binding */ styles)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);

/**
 * WordPress dependencies
 */

const styles = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M12 4c-4.4 0-8 3.6-8 8v.1c0 4.1 3.2 7.5 7.2 7.9h.8c4.4 0 8-3.6 8-8s-3.6-8-8-8zm0 15V5c3.9 0 7 3.1 7 7s-3.1 7-7 7z"
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);
//# sourceMappingURL=styles.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/unseen.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/unseen.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);

/**
 * WordPress dependencies
 */

const unseen = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M4.67 10.664s-2.09 1.11-2.917 1.582l.494.87 1.608-.914.002.002c.343.502.86 1.17 1.563 1.84.348.33.742.663 1.185.976L5.57 16.744l.858.515 1.02-1.701a9.1 9.1 0 0 0 4.051 1.18V19h1v-2.263a9.1 9.1 0 0 0 4.05-1.18l1.021 1.7.858-.514-1.034-1.723c.442-.313.837-.646 1.184-.977.703-.669 1.22-1.337 1.563-1.839l.002-.003 1.61.914.493-.87c-1.75-.994-2.918-1.58-2.918-1.58l-.003.005a8.29 8.29 0 0 1-.422.689 10.097 10.097 0 0 1-1.36 1.598c-1.218 1.16-3.042 2.293-5.544 2.293-2.503 0-4.327-1.132-5.546-2.293a10.099 10.099 0 0 1-1.359-1.599 8.267 8.267 0 0 1-.422-.689l-.003-.005Z"
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (unseen);
//# sourceMappingURL=unseen.js.map

/***/ }),

/***/ "./src/EditBlockStyle.js":
/*!*******************************!*\
  !*** ./src/EditBlockStyle.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/html-entities */ "@wordpress/html-entities");
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _token_multiselect_control__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./token-multiselect-control */ "./src/token-multiselect-control/index.js");










function EditBlockStyle({
  attributes,
  closeForm
}) {
  var _blockStyle$title, _blockStyle$slug, _blockStyle$meta$bloc2, _blockStyle$content;
  const [blockStyle, setBlockStyle] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)(attributes);
  const [blockTypes, setBlockTypes] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)(wp.blocks.getBlockTypes());
  const {
    saveEntityRecord
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useDispatch)(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__.store);
  const saveBlockStyle = async () => {
    var _blockStyle$meta$bloc;
    const args = {
      title: blockStyle.title,
      content: blockStyle.content,
      slug: blockStyle.slug.replace("is-style-", ""),
      status: "publish",
      meta: {
        block_types: (_blockStyle$meta$bloc = blockStyle.meta.block_types) !== null && _blockStyle$meta$bloc !== void 0 ? _blockStyle$meta$bloc : []
      }
    };
    console.log(args);
    if (blockStyle.id) {
      args.id = blockStyle.id;
    }
    const savedRecord = await saveEntityRecord("postType", "wpdev_block_style", args);
    if (savedRecord) {
      const [transformed] = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.transformStyles)([{
        css: blockStyle.content
      }], ".editor-styles-wrapper");
      blockStyle.meta.block_types.forEach(blockType => {
        (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_7__.registerBlockStyle)(blockType, {
          name: blockStyle.slug.replace("is-style-", ""),
          label: (0,_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_8__.decodeEntities)(blockStyle.title)
        });
      });
      console.log(transformed);
      closeForm();
    }
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Flex, {
    gap: "3",
    direction: "column"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Flex, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.FlexItem, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Name"),
    value: (_blockStyle$title = blockStyle.title) !== null && _blockStyle$title !== void 0 ? _blockStyle$title : "",
    onChange: title => setBlockStyle({
      ...blockStyle,
      title
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.FlexItem, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Class"),
    value: (_blockStyle$slug = blockStyle.slug) !== null && _blockStyle$slug !== void 0 ? _blockStyle$slug : "",
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("This is the class name that will be added to the block, and will always be prefixed with .is-style-"),
    onChange: slug => setBlockStyle({
      ...blockStyle,
      slug
    })
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_token_multiselect_control__WEBPACK_IMPORTED_MODULE_9__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Supported Block Types"),
    value: (_blockStyle$meta$bloc2 = blockStyle.meta?.block_types) !== null && _blockStyle$meta$bloc2 !== void 0 ? _blockStyle$meta$bloc2 : [],
    options: blockTypes.map(blockType => ({
      label: blockType.title,
      value: blockType.name
    })),
    multiple: true,
    onChange: block_types => setBlockStyle({
      ...blockStyle,
      meta: {
        ...blockStyle.meta,
        block_types: block_types
      }
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextareaControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("CSS"),
    value: (_blockStyle$content = blockStyle.content) !== null && _blockStyle$content !== void 0 ? _blockStyle$content : "",
    spellCheck: false,
    onChange: content => setBlockStyle({
      ...blockStyle,
      content
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Flex, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.FlexItem, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    variant: "primary",
    onClick: saveBlockStyle
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Save Block Style"))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.FlexItem, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    variant: "danger",
    onClick: closeForm
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Cancel")))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditBlockStyle);

/***/ }),

/***/ "./src/ViewBlockStyles.js":
/*!********************************!*\
  !*** ./src/ViewBlockStyles.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/html-entities */ "@wordpress/html-entities");
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_dataviews__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/dataviews */ "./node_modules/@wordpress/dataviews/build-module/dataviews.js");





function ViewBlockStyles({
  launchEditForm,
  records,
  hasResolved
}) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, hasResolved && records.length > 0 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_dataviews__WEBPACK_IMPORTED_MODULE_4__["default"], {
    data: records,
    getItemId: item => {
      return item.id;
    },
    onChangeView: function noRefCheck() {},
    fields: [{
      enableHiding: false,
      getValue: function noRefCheck() {},
      render: ({
        item
      }) => {
        return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
          variant: "link",
          onClick: () => launchEditForm(item.id)
        }, (0,_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_2__.decodeEntities)(item.title?.rendered) || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("(no title)")));
      },
      header: "Title",
      id: "title",
      maxWidth: 400
    }, {
      enableHiding: false,
      getValue: function noRefCheck() {},
      render: ({
        item
      }) => {
        return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("code", null, `.is-style-${item.slug}`);
      },
      header: "Class",
      id: "slug",
      maxWidth: 400
    }, {
      enableHiding: false,
      getValue: function noRefCheck() {},
      render: ({
        item
      }) => {
        return item.meta.block_types?.map((blockType, i) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("code", {
          key: i
        }, blockType));
      },
      header: "Block Types",
      id: "groups",
      maxWidth: 400
    }],
    supportedLayouts: ["table"],
    view: {
      type: "table",
      perPage: 15,
      page: 1,
      layout: {},
      filters: [],
      hiddenFields: []
    },
    actions: [
      // {
      // 	callback: () => {
      // 		// launchEditForm();
      // 	},
      // 	id: "delete",
      // 	label: __("Delete"),
      // 	icon: <Icon icon={edit} />,
      // },
    ],
    paginationInfo: {
      totalPages: 1,
      totalItems: records.length
    }
  }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ViewBlockStyles);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/styles.js");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _token_multiselect_control__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./token-multiselect-control */ "./src/token-multiselect-control/index.js");
/* harmony import */ var _ViewBlockStyles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ViewBlockStyles */ "./src/ViewBlockStyles.js");
/* harmony import */ var _EditBlockStyle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./EditBlockStyle */ "./src/EditBlockStyle.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");















// Block Styles Manager Plugin Component
const BlockStylesManagerPlugin = () => {
  const [modalView, setModalView] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)("");
  const [currentBlockStyle, setCurrentBlockStyle] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
  const [blockStyles, setBlockStyles] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
  const [selectedBlockStyles, setSelectedBlockStyles] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
  const {
    records,
    hasResolved
  } = (0,_wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__.useEntityRecords)("postType", "wpdev_block_style", {
    per_page: -1
  });
  const launchEditForm = id => {
    let blockStyle = blockStyles.find(blockStyle => blockStyle.id === parseInt(id));
    setCurrentBlockStyle({
      ...blockStyle,
      title: blockStyle.title.raw,
      content: blockStyle.content.raw
    });
    setModalView("edit");
  };

  // @todo - grab the current block type as default here
  const newBlockStyle = {
    id: 0,
    title: "New Block Style",
    slug: "is-style-new-block-style",
    content: "selector {\n  opacity: 0.5;\n}",
    meta: {
      block_types: ["core/group"]
    }
  };
  const filterSelector = (css, record) => {
    return css.replace(/selector/g, `.is-style-${record.slug}`);
  };
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (records) {
      var _window$parent$docume;
      setBlockStyles(records);
      // Add records CSS to iframe
      let css = "";
      records.forEach(record => {
        css += filterSelector(record.content.raw, record);
      });
      const style = document.createElement("style");
      style.innerHTML = css;
      style.id = "wpdev-block-styles";
      let destination = (_window$parent$docume = window.parent.document.querySelector('iframe[name="editor-canvas"]')?.document.head) !== null && _window$parent$docume !== void 0 ? _window$parent$docume : document.head;
      destination.appendChild(style);
    }
  }, [records]);
  const AddNewButton = () => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
      onClick: () => {
        console.log("clicked");
        setModalView("new");
      },
      variant: "primary"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__.__)("Add New Block Style"));
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__.__)("Block Styles Manager"),
    initialOpen: true
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_13__["default"],
    onClick: () => setModalView("list"),
    "aria-expanded": "" !== modalView,
    "aria-haspopup": "dialog",
    variant: "secondary"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__.__)("Manage Block Styles")))), "" !== modalView && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Modal, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__.__)("Block Styles Manager"),
    size: "large",
    headerActions: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(AddNewButton, null),
    isFullScreen: true,
    overlayClassName: "wpdev-block-style-manager",
    onRequestClose: () => {
      setModalView("");
    }
  }, modalView === "list" && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_ViewBlockStyles__WEBPACK_IMPORTED_MODULE_10__["default"], {
    launchEditForm: launchEditForm,
    records: records,
    hasResolved: hasResolved
  }), modalView === "edit" && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__.__)("Edit Block Style")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_EditBlockStyle__WEBPACK_IMPORTED_MODULE_11__["default"], {
    attributes: currentBlockStyle,
    closeForm: () => {
      setModalView("list");
    }
  })), modalView === "new" && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__.__)("New Block Style")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_EditBlockStyle__WEBPACK_IMPORTED_MODULE_11__["default"], {
    attributes: newBlockStyle,
    closeForm: () => {
      setModalView("list");
    }
  }))));
};

/**
 * Add the edit component to the block.
 * This is the component that will be rendered in the editor.
 * It will be rendered after the original block edit component.
 *
 * @param {function} BlockEdit Original component
 * @returns {function} Wrapped component
 *
 * @see https://developer.wordpress.org/block-editor/developers/filters/block-filters/#editor-blockedit
 */
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_6__.addFilter)("editor.BlockEdit", "wpdev/block-styles-manager", (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__.createHigherOrderComponent)(BlockEdit => {
  return props => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, {
      ...props
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockStylesManagerPlugin, {
      ...props
    }));
  };
}));

// On initial load, register all block styles.
_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_7___default()({
  path: "/wp/v2/wpdev_block_style"
}).then(response => {
  response.forEach(blockStyle => {
    console.log(blockStyle);
    wp.blocks.registerBlockStyle(blockStyle.meta.block_type, {
      name: blockStyle.slug,
      label: blockStyle.title.rendered,
      inlineStyle: blockStyle.content.raw
    });
  });
});

/***/ }),

/***/ "./src/token-multiselect-control/index.js":
/*!************************************************!*\
  !*** ./src/token-multiselect-control/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/keycodes */ "@wordpress/keycodes");
/* harmony import */ var _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_keycodes__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_is_shallow_equal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/is-shallow-equal */ "@wordpress/is-shallow-equal");
/* harmony import */ var _wordpress_is_shallow_equal__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_is_shallow_equal__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _token__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./token */ "./src/token-multiselect-control/token.js");
/* harmony import */ var _token_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./token-input */ "./src/token-multiselect-control/token-input.js");
/* harmony import */ var _suggestions_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./suggestions-list */ "./src/token-multiselect-control/suggestions-list.js");

/**
 * External dependencies
 */



/**
 * WordPress dependencies
 */







/**
 * Internal dependencies
 */



const initialState = {
  incompleteTokenValue: '',
  inputOffsetFromEnd: 0,
  isActive: false,
  isExpanded: false,
  selectedSuggestionIndex: -1,
  selectedSuggestionScroll: false
};
class TokenMultiSelectControl extends _wordpress_element__WEBPACK_IMPORTED_MODULE_4__.Component {
  constructor() {
    super(...arguments);
    this.state = initialState;
    this.onKeyDown = this.onKeyDown.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.onClick = this.onClick.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.deleteTokenBeforeInput = this.deleteTokenBeforeInput.bind(this);
    this.deleteTokenAfterInput = this.deleteTokenAfterInput.bind(this);
    this.addCurrentToken = this.addCurrentToken.bind(this);
    this.onContainerTouched = this.onContainerTouched.bind(this);
    this.renderToken = this.renderToken.bind(this);
    this.onTokenClickRemove = this.onTokenClickRemove.bind(this);
    this.onSuggestionHovered = this.onSuggestionHovered.bind(this);
    this.onSuggestionSelected = this.onSuggestionSelected.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.bindInput = this.bindInput.bind(this);
    this.bindTokensAndInput = this.bindTokensAndInput.bind(this);
    this.updateSuggestions = this.updateSuggestions.bind(this);
    this.addNewTokens = this.addNewTokens.bind(this);
    this.getValueFromLabel = this.getValueFromLabel.bind(this);
    this.getLabelFromValue = this.getLabelFromValue.bind(this);
  }
  componentDidUpdate(prevProps) {
    // Make sure to focus the input when the isActive state is true.
    if (this.state.isActive && !this.input.hasFocus()) {
      this.input.focus();
    }
    const {
      options,
      value
    } = this.props;
    const suggestionsDidUpdate = !_wordpress_is_shallow_equal__WEBPACK_IMPORTED_MODULE_7___default()(options, prevProps.options);
    if (suggestionsDidUpdate || value !== prevProps.value) {
      this.updateSuggestions(suggestionsDidUpdate);
    }
  }
  static getDerivedStateFromProps(props, state) {
    if (!props.disabled || !state.isActive) {
      return null;
    }
    return {
      isActive: false,
      incompleteTokenValue: ''
    };
  }
  bindInput(ref) {
    this.input = ref;
  }
  bindTokensAndInput(ref) {
    this.tokensAndInput = ref;
  }
  onFocus(event) {
    // If focus is on the input or on the container, set the isActive state to true.
    if (this.input.hasFocus() || event.target === this.tokensAndInput) {
      this.setState({
        isActive: true /* , isExpanded: true */
      });
    } else {
      /*
       * Otherwise, focus is on one of the token "remove" buttons and we
       * set the isActive state to false to prevent the input to be
       * re-focused, see componentDidUpdate().
       */
      this.setState({
        isActive: false
      });
    }
    if ('function' === typeof this.props.onFocus) {
      this.props.onFocus(event);
    }
  }
  onClick(event) {
    // If focus is on the input or on the container, set the isActive state to true.
    // don't open if we clicked a suggestion
    if (!event.target.classList.contains('components-form-token-field__suggestion')) {
      this.setState({
        isExpanded: true,
        isActive: true
      });
    }
  }
  onBlur() {
    if (this.inputHasValidToken()) {
      this.setState({
        isActive: false,
        isExpanded: false
      });
    } else {
      this.setState(initialState);
    }
  }
  onKeyDown(event) {
    let preventDefault = false;
    switch (event.keyCode) {
      case _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_6__.BACKSPACE:
        preventDefault = this.handleDeleteKey(this.deleteTokenBeforeInput);
        break;
      case _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_6__.ENTER:
        preventDefault = this.addCurrentToken();
        break;
      case _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_6__.LEFT:
        preventDefault = this.handleLeftArrowKey();
        break;
      case _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_6__.UP:
        preventDefault = this.handleUpArrowKey();
        break;
      case _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_6__.RIGHT:
        preventDefault = this.handleRightArrowKey();
        break;
      case _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_6__.DOWN:
        preventDefault = this.handleDownArrowKey();
        break;
      case _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_6__.DELETE:
        preventDefault = this.handleDeleteKey(this.deleteTokenAfterInput);
        break;
      case _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_6__.SPACE:
        if (this.props.tokenizeOnSpace) {
          preventDefault = this.addCurrentToken();
        }
        break;
      case _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_6__.ESCAPE:
        preventDefault = this.handleEscapeKey(event);
        event.stopPropagation();
        break;
      default:
        break;
    }
    if (preventDefault) {
      event.preventDefault();
    }
  }
  onKeyPress(event) {
    if (!this.state.isExpanded) {
      this.setState({
        isExpanded: true
      });
    }
  }
  onContainerTouched(event) {
    // Prevent clicking/touching the tokensAndInput container from blurring
    // the input and adding the current token.
    if (event.target === this.tokensAndInput && this.state.isActive) {
      event.preventDefault();
    }
    //this.setState( { isExpanded: true } );
  }
  onTokenClickRemove(event) {
    this.deleteToken(event.value);
    this.input.focus();
  }
  onSuggestionHovered(suggestion) {
    const index = this.getMatchingSuggestions().indexOf(suggestion);
    if (index >= 0) {
      this.setState({
        selectedSuggestionIndex: index,
        selectedSuggestionScroll: false
      });
    }
  }
  onSuggestionSelected(suggestion) {
    this.addNewToken(suggestion);
  }
  onInputChange(event) {
    const tokenValue = event.value;
    this.setState({
      incompleteTokenValue: tokenValue
    }, this.updateSuggestions);
    this.props.onInputChange(tokenValue);
  }
  handleDeleteKey(deleteToken) {
    let preventDefault = false;
    if (this.input.hasFocus() && this.isInputEmpty()) {
      deleteToken();
      preventDefault = true;
    }
    return preventDefault;
  }
  handleLeftArrowKey() {
    let preventDefault = false;
    if (this.isInputEmpty()) {
      this.moveInputBeforePreviousToken();
      preventDefault = true;
    }
    return preventDefault;
  }
  handleRightArrowKey() {
    let preventDefault = false;
    if (this.isInputEmpty()) {
      this.moveInputAfterNextToken();
      preventDefault = true;
    }
    return preventDefault;
  }
  getOptionsLabels(options) {
    return options.map(option => {
      return option.label;
    });
  }
  getValueFromLabel(optionLabel) {
    const foundOption = this.props.options.find(option => option.label.toLocaleLowerCase() === optionLabel.toLocaleLowerCase());
    if (foundOption) {
      return foundOption.value;
    }
    return null;
  }
  getLabelFromValue(optionValue) {
    const foundOption = this.props.options.find(option => option.value === optionValue);
    if (foundOption) {
      return foundOption.label;
    }
    return null;
  }
  getOptionsValues(options) {
    return options.map(option => {
      return option.value;
    });
  }
  handleUpArrowKey() {
    this.setState((state, props) => ({
      selectedSuggestionIndex: (state.selectedSuggestionIndex === 0 ? this.getMatchingSuggestions(state.incompleteTokenValue, this.getOptionsLabels(props.options), props.value, props.maxSuggestions, props.saveTransform).length : state.selectedSuggestionIndex) - 1,
      selectedSuggestionScroll: true
    }));
    return true; // preventDefault
  }
  handleDownArrowKey() {
    this.setState((state, props) => ({
      selectedSuggestionIndex: (state.selectedSuggestionIndex + 1) % this.getMatchingSuggestions(state.incompleteTokenValue, this.getOptionsLabels(props.options), props.value, props.maxSuggestions, props.saveTransform).length,
      selectedSuggestionScroll: true,
      isExpanded: true
    }));
    return true; // preventDefault
  }
  handleEscapeKey(event) {
    this.setState({
      incompleteTokenValue: event.target.value,
      isExpanded: false,
      selectedSuggestionIndex: -1,
      selectedSuggestionScroll: false
    });
    return true; // preventDefault
  }
  moveInputToIndex(index) {
    this.setState((state, props) => ({
      inputOffsetFromEnd: props.value.length - Math.max(index, -1) - 1
    }));
  }
  moveInputBeforePreviousToken() {
    this.setState((state, props) => ({
      inputOffsetFromEnd: Math.min(state.inputOffsetFromEnd + 1, props.value.length)
    }));
  }
  moveInputAfterNextToken() {
    this.setState(state => ({
      inputOffsetFromEnd: Math.max(state.inputOffsetFromEnd - 1, 0)
    }));
  }
  deleteTokenBeforeInput() {
    const index = this.getIndexOfInput() - 1;
    if (index > -1) {
      this.deleteToken(this.props.value[index]);
    }
  }
  deleteTokenAfterInput() {
    const index = this.getIndexOfInput();
    if (index < this.props.value.length) {
      this.deleteToken(this.props.value[index]);
      // update input offset since it's the offset from the last token
      this.moveInputToIndex(index);
    }
  }
  addCurrentToken() {
    let preventDefault = false;
    const selectedSuggestion = this.getSelectedSuggestion();
    if (selectedSuggestion) {
      this.addNewToken(selectedSuggestion);
      preventDefault = true;
    } else if (this.inputHasValidToken()) {
      this.addNewToken(this.state.incompleteTokenValue);
      preventDefault = true;
    }
    return preventDefault;
  }
  addNewTokens(tokens) {
    const tokensToAdd = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.uniq)(tokens.map(this.props.saveTransform).filter(Boolean).filter(token => !this.valueContainsToken(token)));
    if (tokensToAdd.length > 0) {
      const tokenValuesToAdd = tokensToAdd.map(tokenLabel => {
        return this.getValueFromLabel(tokenLabel);
      });
      let newValue = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.clone)(this.props.value);
      newValue.splice.apply(newValue, [this.getIndexOfInput(), 0].concat(tokenValuesToAdd));
      // now remove duplicates if required
      newValue = [...new Set(newValue)];
      this.props.onChange(newValue);
    }
  }
  addNewToken(token) {
    this.addNewTokens([token]);
    this.props.speak(this.props.messages.added, 'assertive');
    this.setState({
      incompleteTokenValue: '',
      selectedSuggestionIndex: -1,
      selectedSuggestionScroll: false,
      isExpanded: false
    });
    if (this.state.isActive) {
      this.input.focus();
    }
  }
  deleteToken(token) {
    const newTokens = this.props.value.filter(item => {
      return this.getTokenValue(item) !== this.getTokenValue(token);
    });
    this.props.onChange(newTokens);
    this.props.speak(this.props.messages.removed, 'assertive');
  }
  getTokenValue(token) {
    if (token && token.value) {
      return token.value;
    }
    return token;
  }
  getMatchingSuggestions(searchValue = this.state.incompleteTokenValue, suggestions = this.getOptionsLabels(this.props.options), value = this.props.value, maxSuggestions = this.props.maxSuggestions, saveTransform = this.props.saveTransform) {
    let match = saveTransform(searchValue);
    const startsWithMatch = [];
    const containsMatch = [];
    const activeLabels = value.map(optionValue => {
      return this.getLabelFromValue(optionValue);
    });
    if (match.length > 0) {
      match = match.toLocaleLowerCase();
      (0,lodash__WEBPACK_IMPORTED_MODULE_1__.each)(suggestions, suggestion => {
        const index = suggestion.toLocaleLowerCase().indexOf(match);
        if (value.indexOf(suggestion) === -1) {
          if (index === 0) {
            startsWithMatch.push(suggestion);
          } else if (index > 0) {
            containsMatch.push(suggestion);
          }
        }
      });
      suggestions = startsWithMatch.concat(containsMatch);
    }
    // remove selected labels from suggestions
    suggestions = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.difference)(suggestions, activeLabels);
    return (0,lodash__WEBPACK_IMPORTED_MODULE_1__.take)(suggestions, maxSuggestions);
  }
  getSelectedSuggestion() {
    if (this.state.selectedSuggestionIndex !== -1) {
      return this.getMatchingSuggestions()[this.state.selectedSuggestionIndex];
    }
  }
  valueContainsToken(token) {
    return (0,lodash__WEBPACK_IMPORTED_MODULE_1__.some)(this.props.value, item => {
      return this.getTokenValue(token) === this.getTokenValue(item);
    });
  }
  getIndexOfInput() {
    return this.props.value.length - this.state.inputOffsetFromEnd;
  }
  isInputEmpty() {
    return this.state.incompleteTokenValue.length === 0;
  }
  inputHasValidToken() {
    const incompleteTokenValue = this.state.incompleteTokenValue;
    let foundMatch = false;
    if (incompleteTokenValue && incompleteTokenValue.length > 0) {
      this.props.options.forEach(option => {
        if (option.label.trim().toLocaleLowerCase() === incompleteTokenValue.trim().toLocaleLowerCase()) {
          foundMatch = true;
          // return true; //not working?
        }
      });
    }
    return foundMatch;
  }
  updateSuggestions(resetSelectedSuggestion = true) {
    const {
      incompleteTokenValue
    } = this.state;
    const inputHasMinimumChars = true; //incompleteTokenValue.trim().length > 1;
    const matchingSuggestions = this.getMatchingSuggestions(incompleteTokenValue);
    const hasMatchingSuggestions = matchingSuggestions.length > 0;
    const newState = {
      // isExpanded: inputHasMinimumChars && hasMatchingSuggestions,
    };
    if (resetSelectedSuggestion) {
      newState.selectedSuggestionIndex = -1;
      newState.selectedSuggestionScroll = false;
    }
    this.setState(newState);
    if (inputHasMinimumChars) {
      const {
        debouncedSpeak
      } = this.props;
      const message = hasMatchingSuggestions ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.sprintf)( /* translators: %d: number of results. */
      (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__._n)('%d result found, use up and down arrow keys to navigate.', '%d results found, use up and down arrow keys to navigate.', matchingSuggestions.length), matchingSuggestions.length) : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('No results.');
      debouncedSpeak(message, 'assertive');
    }
  }
  renderTokensAndInput() {
    const components = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.map)(this.props.value, this.renderToken);
    components.splice(this.getIndexOfInput(), 0, this.renderInput());
    return components;
  }
  renderToken(token, index, tokens) {
    const value = this.getTokenValue(token);
    const label = this.getLabelFromValue(value); //todo - optimize
    const status = token.status ? token.status : undefined;
    const termPosition = index + 1;
    const termsCount = tokens.length;
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_token__WEBPACK_IMPORTED_MODULE_9__["default"], {
      key: 'token-' + value,
      value: value,
      label: label,
      status: status,
      title: token.title,
      displayTransform: this.props.displayTransform,
      onClickRemove: this.onTokenClickRemove,
      isBorderless: token.isBorderless || this.props.isBorderless,
      onMouseEnter: token.onMouseEnter,
      onMouseLeave: token.onMouseLeave,
      disabled: 'error' !== status && this.props.disabled,
      messages: this.props.messages,
      termsCount: termsCount,
      termPosition: termPosition
    });
  }
  renderInput() {
    const {
      autoCapitalize,
      autoComplete,
      maxLength,
      value,
      instanceId
    } = this.props;
    let props = {
      instanceId,
      autoCapitalize,
      autoComplete,
      ref: this.bindInput,
      key: 'input',
      disabled: this.props.disabled,
      value: this.state.incompleteTokenValue,
      onBlur: this.onBlur,
      isExpanded: this.state.isExpanded,
      selectedSuggestionIndex: this.state.selectedSuggestionIndex
    };
    if (!(maxLength && value.length >= maxLength)) {
      props = {
        ...props,
        onChange: this.onInputChange
      };
    }
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_token_input__WEBPACK_IMPORTED_MODULE_10__["default"], {
      ...props
    });
  }
  render() {
    const {
      disabled,
      label = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Add item'),
      instanceId,
      className
    } = this.props;
    const {
      isExpanded
    } = this.state;
    const classes = classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, 'components-form-token-field__input-container', {
      'is-active': this.state.isActive,
      'is-disabled': disabled
    });
    let tokenFieldProps = {
      className: 'components-form-token-field',
      tabIndex: '-1'
    };
    const matchingSuggestions = this.getMatchingSuggestions();
    if (!disabled) {
      tokenFieldProps = Object.assign({}, tokenFieldProps, {
        onKeyDown: this.onKeyDown,
        onKeyPress: this.onKeyPress,
        onFocus: this.onFocus,
        onClick: this.onClick
      });
    }

    // Disable reason: There is no appropriate role which describes the
    // input container intended accessible usability.
    // TODO: Refactor click detection to use blur to stop propagation.
    /* eslint-disable jsx-a11y/no-static-element-interactions */
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      ...tokenFieldProps
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      htmlFor: `components-form-token-input-${instanceId}`,
      className: "components-form-token-field__label"
    }, label), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      ref: this.bindTokensAndInput,
      className: classes,
      tabIndex: "-1",
      onMouseDown: this.onContainerTouched,
      onTouchStart: this.onContainerTouched
    }, this.renderTokensAndInput(), isExpanded && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_suggestions_list__WEBPACK_IMPORTED_MODULE_11__["default"], {
      instanceId: instanceId,
      match: this.props.saveTransform(this.state.incompleteTokenValue),
      displayTransform: this.props.displayTransform,
      suggestions: matchingSuggestions,
      selectedIndex: this.state.selectedSuggestionIndex,
      scrollIntoView: this.state.selectedSuggestionScroll,
      onHover: this.onSuggestionHovered,
      onSelect: this.onSuggestionSelected
    })));
    /* eslint-enable jsx-a11y/no-static-element-interactions */
  }
}
TokenMultiSelectControl.defaultProps = {
  options: Object.freeze([]),
  maxSuggestions: 100,
  value: Object.freeze([]),
  displayTransform: lodash__WEBPACK_IMPORTED_MODULE_1__.identity,
  saveTransform: token => token ? token.trim() : '',
  onChange: () => {},
  onInputChange: () => {},
  isBorderless: false,
  disabled: false,
  tokenizeOnSpace: false,
  messages: {
    added: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Item added.'),
    removed: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Item removed.'),
    remove: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Remove item')
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_wordpress_components__WEBPACK_IMPORTED_MODULE_8__.withSpokenMessages)((0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__.withInstanceId)(TokenMultiSelectControl)));

/***/ }),

/***/ "./src/token-multiselect-control/suggestions-list.js":
/*!***********************************************************!*\
  !*** ./src/token-multiselect-control/suggestions-list.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var dom_scroll_into_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dom-scroll-into-view */ "./node_modules/dom-scroll-into-view/lib/index.js");
/* harmony import */ var dom_scroll_into_view__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dom_scroll_into_view__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__);

/**
 * External dependencies
 */




/**
 * WordPress dependencies
 */


class SuggestionsList extends _wordpress_element__WEBPACK_IMPORTED_MODULE_4__.Component {
  constructor() {
    super(...arguments);
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.bindList = this.bindList.bind(this);
  }
  componentDidUpdate() {
    // only have to worry about scrolling selected suggestion into view
    // when already expanded
    if (this.props.selectedIndex > -1 && this.props.scrollIntoView) {
      this.scrollingIntoView = true;
      dom_scroll_into_view__WEBPACK_IMPORTED_MODULE_2___default()(this.list.children[this.props.selectedIndex], this.list, {
        onlyScrollIfNeeded: true
      });
      this.props.setTimeout(() => {
        this.scrollingIntoView = false;
      }, 100);
    }
  }
  bindList(ref) {
    this.list = ref;
  }
  handleHover(suggestion) {
    return () => {
      if (!this.scrollingIntoView) {
        this.props.onHover(suggestion);
      }
    };
  }
  handleClick(suggestion) {
    return () => {
      this.props.onSelect(suggestion);
    };
  }
  handleMouseDown(e) {
    // By preventing default here, we will not lose focus of <input> when clicking a suggestion
    e.preventDefault();
  }
  computeSuggestionMatch(suggestion) {
    const match = this.props.displayTransform(this.props.match || '').toLocaleLowerCase();
    if (match.length === 0) {
      return null;
    }
    suggestion = this.props.displayTransform(suggestion);
    const indexOfMatch = suggestion.toLocaleLowerCase().indexOf(match);
    return {
      suggestionBeforeMatch: suggestion.substring(0, indexOfMatch),
      suggestionMatch: suggestion.substring(indexOfMatch, indexOfMatch + match.length),
      suggestionAfterMatch: suggestion.substring(indexOfMatch + match.length)
    };
  }
  render() {
    // We set `tabIndex` here because otherwise Firefox sets focus on this
    // div when tabbing off of the input in `TokenField` -- not really sure
    // why, since usually a div isn't focusable by default
    // TODO does this still apply now that it's a <ul> and not a <div>?
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
      ref: this.bindList,
      className: "components-form-token-field__suggestions-list",
      id: `components-form-token-suggestions-${this.props.instanceId}`,
      role: "listbox"
    }, (0,lodash__WEBPACK_IMPORTED_MODULE_1__.map)(this.props.suggestions, (suggestion, index) => {
      const match = this.computeSuggestionMatch(suggestion);
      const classeName = classnames__WEBPACK_IMPORTED_MODULE_3___default()('components-form-token-field__suggestion', {
        'is-selected': index === this.props.selectedIndex
      });

      /* eslint-disable jsx-a11y/click-events-have-key-events */
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
        id: `components-form-token-suggestions-${this.props.instanceId}-${index}`,
        role: "option",
        className: classeName,
        key: this.props.displayTransform(suggestion),
        onMouseDown: this.handleMouseDown,
        onClick: this.handleClick(suggestion),
        onMouseEnter: this.handleHover(suggestion),
        "aria-selected": index === this.props.selectedIndex
      }, match ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
        "aria-label": this.props.displayTransform(suggestion)
      }, match.suggestionBeforeMatch, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", {
        className: "components-form-token-field__suggestion-match"
      }, match.suggestionMatch), match.suggestionAfterMatch) : this.props.displayTransform(suggestion));
      /* eslint-enable jsx-a11y/click-events-have-key-events */
    }));
  }
}
SuggestionsList.defaultProps = {
  match: '',
  onHover: () => {},
  onSelect: () => {},
  suggestions: Object.freeze([])
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__.withSafeTimeout)(SuggestionsList));

/***/ }),

/***/ "./src/token-multiselect-control/token-input.js":
/*!******************************************************!*\
  !*** ./src/token-multiselect-control/token-input.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);

/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */

class TokenInput extends _wordpress_element__WEBPACK_IMPORTED_MODULE_2__.Component {
  constructor() {
    super(...arguments);
    this.onChange = this.onChange.bind(this);
    this.bindInput = this.bindInput.bind(this);
  }
  focus() {
    this.input.focus();
  }
  hasFocus() {
    return this.input === this.input.ownerDocument.activeElement;
  }
  bindInput(ref) {
    this.input = ref;
  }
  onChange(event) {
    this.props.onChange({
      value: event.target.value
    });
  }
  render() {
    const {
      value,
      isExpanded,
      instanceId,
      selectedSuggestionIndex,
      className,
      ...props
    } = this.props;
    const size = value ? value.length + 1 : 0;
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      ref: this.bindInput,
      id: `components-form-token-input-${instanceId}`,
      type: "text",
      ...props,
      value: value || '',
      onChange: this.onChange,
      size: size,
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, 'components-form-token-field__input'),
      autoComplete: "off",
      role: "combobox",
      "aria-expanded": isExpanded,
      "aria-autocomplete": "list",
      "aria-owns": isExpanded ? `components-form-token-suggestions-${instanceId}` : undefined,
      "aria-activedescendant": selectedSuggestionIndex !== -1 ? `components-form-token-suggestions-${instanceId}-${selectedSuggestionIndex}` : undefined,
      "aria-describedby": `components-form-token-suggestions-howto-${instanceId}`
    });
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TokenInput);

/***/ }),

/***/ "./src/token-multiselect-control/token.js":
/*!************************************************!*\
  !*** ./src/token-multiselect-control/token.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Token)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/close-small.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__);

/**
 * External dependencies
 */



/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */

function Token({
  value,
  label,
  status,
  title,
  displayTransform,
  isBorderless = false,
  disabled = false,
  onClickRemove = lodash__WEBPACK_IMPORTED_MODULE_2__.noop,
  onMouseEnter,
  onMouseLeave,
  messages,
  termPosition,
  termsCount
}) {
  const instanceId = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__.useInstanceId)(Token);
  const tokenClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()('components-form-token-field__token', {
    'is-error': 'error' === status,
    'is-success': 'success' === status,
    'is-validating': 'validating' === status,
    'is-borderless': isBorderless,
    'is-disabled': disabled
  });
  const onClick = () => onClickRemove({
    value
  });
  const transformedValue = displayTransform(label);
  const termPositionAndCount = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.sprintf)( /* translators: 1: term name, 2: term position in a set of terms, 3: total term set count. */
  (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('%1$s (%2$s of %3$s)'), transformedValue, termPosition, termsCount);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: tokenClasses,
    onMouseEnter: onMouseEnter,
    onMouseLeave: onMouseLeave,
    title: title
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "components-form-token-field__token-text",
    id: `components-form-token-field__token-text-${instanceId}`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.VisuallyHidden, {
    as: "span"
  }, termPositionAndCount), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    "aria-hidden": "true"
  }, transformedValue)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
    className: "components-form-token-field__remove-token",
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_6__["default"],
    onClick: !disabled && onClick,
    label: messages.remove,
    "aria-describedby": `components-form-token-field__token-text-${instanceId}`
  }));
}

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/***/ ((module, exports) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;
	var nativeCodeString = '[native code]';

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
					classes.push(arg.toString());
					continue;
				}

				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./node_modules/dom-scroll-into-view/lib/dom-scroll-into-view.js":
/*!***********************************************************************!*\
  !*** ./node_modules/dom-scroll-into-view/lib/dom-scroll-into-view.js ***!
  \***********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var util = __webpack_require__(/*! ./util */ "./node_modules/dom-scroll-into-view/lib/util.js");

function scrollIntoView(elem, container, config) {
  config = config || {};
  // document 归一化到 window
  if (container.nodeType === 9) {
    container = util.getWindow(container);
  }

  var allowHorizontalScroll = config.allowHorizontalScroll;
  var onlyScrollIfNeeded = config.onlyScrollIfNeeded;
  var alignWithTop = config.alignWithTop;
  var alignWithLeft = config.alignWithLeft;
  var offsetTop = config.offsetTop || 0;
  var offsetLeft = config.offsetLeft || 0;
  var offsetBottom = config.offsetBottom || 0;
  var offsetRight = config.offsetRight || 0;

  allowHorizontalScroll = allowHorizontalScroll === undefined ? true : allowHorizontalScroll;

  var isWin = util.isWindow(container);
  var elemOffset = util.offset(elem);
  var eh = util.outerHeight(elem);
  var ew = util.outerWidth(elem);
  var containerOffset = undefined;
  var ch = undefined;
  var cw = undefined;
  var containerScroll = undefined;
  var diffTop = undefined;
  var diffBottom = undefined;
  var win = undefined;
  var winScroll = undefined;
  var ww = undefined;
  var wh = undefined;

  if (isWin) {
    win = container;
    wh = util.height(win);
    ww = util.width(win);
    winScroll = {
      left: util.scrollLeft(win),
      top: util.scrollTop(win)
    };
    // elem 相对 container 可视视窗的距离
    diffTop = {
      left: elemOffset.left - winScroll.left - offsetLeft,
      top: elemOffset.top - winScroll.top - offsetTop
    };
    diffBottom = {
      left: elemOffset.left + ew - (winScroll.left + ww) + offsetRight,
      top: elemOffset.top + eh - (winScroll.top + wh) + offsetBottom
    };
    containerScroll = winScroll;
  } else {
    containerOffset = util.offset(container);
    ch = container.clientHeight;
    cw = container.clientWidth;
    containerScroll = {
      left: container.scrollLeft,
      top: container.scrollTop
    };
    // elem 相对 container 可视视窗的距离
    // 注意边框, offset 是边框到根节点
    diffTop = {
      left: elemOffset.left - (containerOffset.left + (parseFloat(util.css(container, 'borderLeftWidth')) || 0)) - offsetLeft,
      top: elemOffset.top - (containerOffset.top + (parseFloat(util.css(container, 'borderTopWidth')) || 0)) - offsetTop
    };
    diffBottom = {
      left: elemOffset.left + ew - (containerOffset.left + cw + (parseFloat(util.css(container, 'borderRightWidth')) || 0)) + offsetRight,
      top: elemOffset.top + eh - (containerOffset.top + ch + (parseFloat(util.css(container, 'borderBottomWidth')) || 0)) + offsetBottom
    };
  }

  if (diffTop.top < 0 || diffBottom.top > 0) {
    // 强制向上
    if (alignWithTop === true) {
      util.scrollTop(container, containerScroll.top + diffTop.top);
    } else if (alignWithTop === false) {
      util.scrollTop(container, containerScroll.top + diffBottom.top);
    } else {
      // 自动调整
      if (diffTop.top < 0) {
        util.scrollTop(container, containerScroll.top + diffTop.top);
      } else {
        util.scrollTop(container, containerScroll.top + diffBottom.top);
      }
    }
  } else {
    if (!onlyScrollIfNeeded) {
      alignWithTop = alignWithTop === undefined ? true : !!alignWithTop;
      if (alignWithTop) {
        util.scrollTop(container, containerScroll.top + diffTop.top);
      } else {
        util.scrollTop(container, containerScroll.top + diffBottom.top);
      }
    }
  }

  if (allowHorizontalScroll) {
    if (diffTop.left < 0 || diffBottom.left > 0) {
      // 强制向上
      if (alignWithLeft === true) {
        util.scrollLeft(container, containerScroll.left + diffTop.left);
      } else if (alignWithLeft === false) {
        util.scrollLeft(container, containerScroll.left + diffBottom.left);
      } else {
        // 自动调整
        if (diffTop.left < 0) {
          util.scrollLeft(container, containerScroll.left + diffTop.left);
        } else {
          util.scrollLeft(container, containerScroll.left + diffBottom.left);
        }
      }
    } else {
      if (!onlyScrollIfNeeded) {
        alignWithLeft = alignWithLeft === undefined ? true : !!alignWithLeft;
        if (alignWithLeft) {
          util.scrollLeft(container, containerScroll.left + diffTop.left);
        } else {
          util.scrollLeft(container, containerScroll.left + diffBottom.left);
        }
      }
    }
  }
}

module.exports = scrollIntoView;

/***/ }),

/***/ "./node_modules/dom-scroll-into-view/lib/index.js":
/*!********************************************************!*\
  !*** ./node_modules/dom-scroll-into-view/lib/index.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


module.exports = __webpack_require__(/*! ./dom-scroll-into-view */ "./node_modules/dom-scroll-into-view/lib/dom-scroll-into-view.js");

/***/ }),

/***/ "./node_modules/dom-scroll-into-view/lib/util.js":
/*!*******************************************************!*\
  !*** ./node_modules/dom-scroll-into-view/lib/util.js ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var RE_NUM = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source;

function getClientPosition(elem) {
  var box = undefined;
  var x = undefined;
  var y = undefined;
  var doc = elem.ownerDocument;
  var body = doc.body;
  var docElem = doc && doc.documentElement;
  // 根据 GBS 最新数据，A-Grade Browsers 都已支持 getBoundingClientRect 方法，不用再考虑传统的实现方式
  box = elem.getBoundingClientRect();

  // 注：jQuery 还考虑减去 docElem.clientLeft/clientTop
  // 但测试发现，这样反而会导致当 html 和 body 有边距/边框样式时，获取的值不正确
  // 此外，ie6 会忽略 html 的 margin 值，幸运地是没有谁会去设置 html 的 margin

  x = box.left;
  y = box.top;

  // In IE, most of the time, 2 extra pixels are added to the top and left
  // due to the implicit 2-pixel inset border.  In IE6/7 quirks mode and
  // IE6 standards mode, this border can be overridden by setting the
  // document element's border to zero -- thus, we cannot rely on the
  // offset always being 2 pixels.

  // In quirks mode, the offset can be determined by querying the body's
  // clientLeft/clientTop, but in standards mode, it is found by querying
  // the document element's clientLeft/clientTop.  Since we already called
  // getClientBoundingRect we have already forced a reflow, so it is not
  // too expensive just to query them all.

  // ie 下应该减去窗口的边框吧，毕竟默认 absolute 都是相对窗口定位的
  // 窗口边框标准是设 documentElement ,quirks 时设置 body
  // 最好禁止在 body 和 html 上边框 ，但 ie < 9 html 默认有 2px ，减去
  // 但是非 ie 不可能设置窗口边框，body html 也不是窗口 ,ie 可以通过 html,body 设置
  // 标准 ie 下 docElem.clientTop 就是 border-top
  // ie7 html 即窗口边框改变不了。永远为 2
  // 但标准 firefox/chrome/ie9 下 docElem.clientTop 是窗口边框，即使设了 border-top 也为 0

  x -= docElem.clientLeft || body.clientLeft || 0;
  y -= docElem.clientTop || body.clientTop || 0;

  return {
    left: x,
    top: y
  };
}

function getScroll(w, top) {
  var ret = w['page' + (top ? 'Y' : 'X') + 'Offset'];
  var method = 'scroll' + (top ? 'Top' : 'Left');
  if (typeof ret !== 'number') {
    var d = w.document;
    // ie6,7,8 standard mode
    ret = d.documentElement[method];
    if (typeof ret !== 'number') {
      // quirks mode
      ret = d.body[method];
    }
  }
  return ret;
}

function getScrollLeft(w) {
  return getScroll(w);
}

function getScrollTop(w) {
  return getScroll(w, true);
}

function getOffset(el) {
  var pos = getClientPosition(el);
  var doc = el.ownerDocument;
  var w = doc.defaultView || doc.parentWindow;
  pos.left += getScrollLeft(w);
  pos.top += getScrollTop(w);
  return pos;
}
function _getComputedStyle(elem, name, computedStyle_) {
  var val = '';
  var d = elem.ownerDocument;
  var computedStyle = computedStyle_ || d.defaultView.getComputedStyle(elem, null);

  // https://github.com/kissyteam/kissy/issues/61
  if (computedStyle) {
    val = computedStyle.getPropertyValue(name) || computedStyle[name];
  }

  return val;
}

var _RE_NUM_NO_PX = new RegExp('^(' + RE_NUM + ')(?!px)[a-z%]+$', 'i');
var RE_POS = /^(top|right|bottom|left)$/;
var CURRENT_STYLE = 'currentStyle';
var RUNTIME_STYLE = 'runtimeStyle';
var LEFT = 'left';
var PX = 'px';

function _getComputedStyleIE(elem, name) {
  // currentStyle maybe null
  // http://msdn.microsoft.com/en-us/library/ms535231.aspx
  var ret = elem[CURRENT_STYLE] && elem[CURRENT_STYLE][name];

  // 当 width/height 设置为百分比时，通过 pixelLeft 方式转换的 width/height 值
  // 一开始就处理了! CUSTOM_STYLE.height,CUSTOM_STYLE.width ,cssHook 解决@2011-08-19
  // 在 ie 下不对，需要直接用 offset 方式
  // borderWidth 等值也有问题，但考虑到 borderWidth 设为百分比的概率很小，这里就不考虑了

  // From the awesome hack by Dean Edwards
  // http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291
  // If we're not dealing with a regular pixel number
  // but a number that has a weird ending, we need to convert it to pixels
  // exclude left right for relativity
  if (_RE_NUM_NO_PX.test(ret) && !RE_POS.test(name)) {
    // Remember the original values
    var style = elem.style;
    var left = style[LEFT];
    var rsLeft = elem[RUNTIME_STYLE][LEFT];

    // prevent flashing of content
    elem[RUNTIME_STYLE][LEFT] = elem[CURRENT_STYLE][LEFT];

    // Put in the new values to get a computed value out
    style[LEFT] = name === 'fontSize' ? '1em' : ret || 0;
    ret = style.pixelLeft + PX;

    // Revert the changed values
    style[LEFT] = left;

    elem[RUNTIME_STYLE][LEFT] = rsLeft;
  }
  return ret === '' ? 'auto' : ret;
}

var getComputedStyleX = undefined;
if (typeof window !== 'undefined') {
  getComputedStyleX = window.getComputedStyle ? _getComputedStyle : _getComputedStyleIE;
}

function each(arr, fn) {
  for (var i = 0; i < arr.length; i++) {
    fn(arr[i]);
  }
}

function isBorderBoxFn(elem) {
  return getComputedStyleX(elem, 'boxSizing') === 'border-box';
}

var BOX_MODELS = ['margin', 'border', 'padding'];
var CONTENT_INDEX = -1;
var PADDING_INDEX = 2;
var BORDER_INDEX = 1;
var MARGIN_INDEX = 0;

function swap(elem, options, callback) {
  var old = {};
  var style = elem.style;
  var name = undefined;

  // Remember the old values, and insert the new ones
  for (name in options) {
    if (options.hasOwnProperty(name)) {
      old[name] = style[name];
      style[name] = options[name];
    }
  }

  callback.call(elem);

  // Revert the old values
  for (name in options) {
    if (options.hasOwnProperty(name)) {
      style[name] = old[name];
    }
  }
}

function getPBMWidth(elem, props, which) {
  var value = 0;
  var prop = undefined;
  var j = undefined;
  var i = undefined;
  for (j = 0; j < props.length; j++) {
    prop = props[j];
    if (prop) {
      for (i = 0; i < which.length; i++) {
        var cssProp = undefined;
        if (prop === 'border') {
          cssProp = prop + which[i] + 'Width';
        } else {
          cssProp = prop + which[i];
        }
        value += parseFloat(getComputedStyleX(elem, cssProp)) || 0;
      }
    }
  }
  return value;
}

/**
 * A crude way of determining if an object is a window
 * @member util
 */
function isWindow(obj) {
  // must use == for ie8
  /* eslint eqeqeq:0 */
  return obj != null && obj == obj.window;
}

var domUtils = {};

each(['Width', 'Height'], function (name) {
  domUtils['doc' + name] = function (refWin) {
    var d = refWin.document;
    return Math.max(
    // firefox chrome documentElement.scrollHeight< body.scrollHeight
    // ie standard mode : documentElement.scrollHeight> body.scrollHeight
    d.documentElement['scroll' + name],
    // quirks : documentElement.scrollHeight 最大等于可视窗口多一点？
    d.body['scroll' + name], domUtils['viewport' + name](d));
  };

  domUtils['viewport' + name] = function (win) {
    // pc browser includes scrollbar in window.innerWidth
    var prop = 'client' + name;
    var doc = win.document;
    var body = doc.body;
    var documentElement = doc.documentElement;
    var documentElementProp = documentElement[prop];
    // 标准模式取 documentElement
    // backcompat 取 body
    return doc.compatMode === 'CSS1Compat' && documentElementProp || body && body[prop] || documentElementProp;
  };
});

/*
 得到元素的大小信息
 @param elem
 @param name
 @param {String} [extra]  'padding' : (css width) + padding
 'border' : (css width) + padding + border
 'margin' : (css width) + padding + border + margin
 */
function getWH(elem, name, extra) {
  if (isWindow(elem)) {
    return name === 'width' ? domUtils.viewportWidth(elem) : domUtils.viewportHeight(elem);
  } else if (elem.nodeType === 9) {
    return name === 'width' ? domUtils.docWidth(elem) : domUtils.docHeight(elem);
  }
  var which = name === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'];
  var borderBoxValue = name === 'width' ? elem.offsetWidth : elem.offsetHeight;
  var computedStyle = getComputedStyleX(elem);
  var isBorderBox = isBorderBoxFn(elem, computedStyle);
  var cssBoxValue = 0;
  if (borderBoxValue == null || borderBoxValue <= 0) {
    borderBoxValue = undefined;
    // Fall back to computed then un computed css if necessary
    cssBoxValue = getComputedStyleX(elem, name);
    if (cssBoxValue == null || Number(cssBoxValue) < 0) {
      cssBoxValue = elem.style[name] || 0;
    }
    // Normalize '', auto, and prepare for extra
    cssBoxValue = parseFloat(cssBoxValue) || 0;
  }
  if (extra === undefined) {
    extra = isBorderBox ? BORDER_INDEX : CONTENT_INDEX;
  }
  var borderBoxValueOrIsBorderBox = borderBoxValue !== undefined || isBorderBox;
  var val = borderBoxValue || cssBoxValue;
  if (extra === CONTENT_INDEX) {
    if (borderBoxValueOrIsBorderBox) {
      return val - getPBMWidth(elem, ['border', 'padding'], which, computedStyle);
    }
    return cssBoxValue;
  }
  if (borderBoxValueOrIsBorderBox) {
    var padding = extra === PADDING_INDEX ? -getPBMWidth(elem, ['border'], which, computedStyle) : getPBMWidth(elem, ['margin'], which, computedStyle);
    return val + (extra === BORDER_INDEX ? 0 : padding);
  }
  return cssBoxValue + getPBMWidth(elem, BOX_MODELS.slice(extra), which, computedStyle);
}

var cssShow = {
  position: 'absolute',
  visibility: 'hidden',
  display: 'block'
};

// fix #119 : https://github.com/kissyteam/kissy/issues/119
function getWHIgnoreDisplay(elem) {
  var val = undefined;
  var args = arguments;
  // in case elem is window
  // elem.offsetWidth === undefined
  if (elem.offsetWidth !== 0) {
    val = getWH.apply(undefined, args);
  } else {
    swap(elem, cssShow, function () {
      val = getWH.apply(undefined, args);
    });
  }
  return val;
}

function css(el, name, v) {
  var value = v;
  if ((typeof name === 'undefined' ? 'undefined' : _typeof(name)) === 'object') {
    for (var i in name) {
      if (name.hasOwnProperty(i)) {
        css(el, i, name[i]);
      }
    }
    return undefined;
  }
  if (typeof value !== 'undefined') {
    if (typeof value === 'number') {
      value += 'px';
    }
    el.style[name] = value;
    return undefined;
  }
  return getComputedStyleX(el, name);
}

each(['width', 'height'], function (name) {
  var first = name.charAt(0).toUpperCase() + name.slice(1);
  domUtils['outer' + first] = function (el, includeMargin) {
    return el && getWHIgnoreDisplay(el, name, includeMargin ? MARGIN_INDEX : BORDER_INDEX);
  };
  var which = name === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'];

  domUtils[name] = function (elem, val) {
    if (val !== undefined) {
      if (elem) {
        var computedStyle = getComputedStyleX(elem);
        var isBorderBox = isBorderBoxFn(elem);
        if (isBorderBox) {
          val += getPBMWidth(elem, ['padding', 'border'], which, computedStyle);
        }
        return css(elem, name, val);
      }
      return undefined;
    }
    return elem && getWHIgnoreDisplay(elem, name, CONTENT_INDEX);
  };
});

// 设置 elem 相对 elem.ownerDocument 的坐标
function setOffset(elem, offset) {
  // set position first, in-case top/left are set even on static elem
  if (css(elem, 'position') === 'static') {
    elem.style.position = 'relative';
  }

  var old = getOffset(elem);
  var ret = {};
  var current = undefined;
  var key = undefined;

  for (key in offset) {
    if (offset.hasOwnProperty(key)) {
      current = parseFloat(css(elem, key)) || 0;
      ret[key] = current + offset[key] - old[key];
    }
  }
  css(elem, ret);
}

module.exports = _extends({
  getWindow: function getWindow(node) {
    var doc = node.ownerDocument || node;
    return doc.defaultView || doc.parentWindow;
  },
  offset: function offset(el, value) {
    if (typeof value !== 'undefined') {
      setOffset(el, value);
    } else {
      return getOffset(el);
    }
  },

  isWindow: isWindow,
  each: each,
  css: css,
  clone: function clone(obj) {
    var ret = {};
    for (var i in obj) {
      if (obj.hasOwnProperty(i)) {
        ret[i] = obj[i];
      }
    }
    var overflow = obj.overflow;
    if (overflow) {
      for (var i in obj) {
        if (obj.hasOwnProperty(i)) {
          ret.overflow[i] = obj.overflow[i];
        }
      }
    }
    return ret;
  },
  scrollLeft: function scrollLeft(w, v) {
    if (isWindow(w)) {
      if (v === undefined) {
        return getScrollLeft(w);
      }
      window.scrollTo(v, getScrollTop(w));
    } else {
      if (v === undefined) {
        return w.scrollLeft;
      }
      w.scrollLeft = v;
    }
  },
  scrollTop: function scrollTop(w, v) {
    if (isWindow(w)) {
      if (v === undefined) {
        return getScrollTop(w);
      }
      window.scrollTo(getScrollLeft(w), v);
    } else {
      if (v === undefined) {
        return w.scrollTop;
      }
      w.scrollTop = v;
    }
  },

  viewportWidth: 0,
  viewportHeight: 0
}, domUtils);

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = window["React"];

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = window["lodash"];

/***/ }),

/***/ "@wordpress/api-fetch":
/*!**********************************!*\
  !*** external ["wp","apiFetch"] ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["apiFetch"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/compose":
/*!*********************************!*\
  !*** external ["wp","compose"] ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["compose"];

/***/ }),

/***/ "@wordpress/core-data":
/*!**********************************!*\
  !*** external ["wp","coreData"] ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["coreData"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/hooks":
/*!*******************************!*\
  !*** external ["wp","hooks"] ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["hooks"];

/***/ }),

/***/ "@wordpress/html-entities":
/*!**************************************!*\
  !*** external ["wp","htmlEntities"] ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["htmlEntities"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "@wordpress/is-shallow-equal":
/*!****************************************!*\
  !*** external ["wp","isShallowEqual"] ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["isShallowEqual"];

/***/ }),

/***/ "@wordpress/keycodes":
/*!**********************************!*\
  !*** external ["wp","keycodes"] ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["keycodes"];

/***/ }),

/***/ "@wordpress/primitives":
/*!************************************!*\
  !*** external ["wp","primitives"] ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["primitives"];

/***/ }),

/***/ "@wordpress/private-apis":
/*!*************************************!*\
  !*** external ["wp","privateApis"] ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["privateApis"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0,
/******/ 			"./style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkcustom_block_styles"] = globalThis["webpackChunkcustom_block_styles"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-index"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map