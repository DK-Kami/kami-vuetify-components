import { resolveComponent, openBlock, createBlock, withCtx, createVNode, toDisplayString, createCommentVNode, createTextVNode, resolveDirective, mergeProps, toHandlers, withDirectives, Fragment, renderList, createSlots, renderSlot, withModifiers } from 'vue';

var script = {
  name: 'RefreshSelect',
  props: {
    value: {
      type: [Array, Number, String],
    },
    items: {
      type: Array,
      default: function () { return []; },
    },
    rules: {
      type: Array,
      default: function () { return []; },
    },
    validateOnBlur: Boolean,
    deletableChips: Boolean,
    withSelectAll: Boolean,
    labelSelectAll: String,
    withIcons: Boolean,
    hideItems: Boolean,
    disabled: Boolean,
    multiple: Boolean,
    itemValue: String,
    itemText: String,
    chips: Boolean,
    label: String,
  },
  computed: {
    model: {
      get: function get() {
        return this.value;
      },
      set: function set(model) {
        this.$emit('input', model);
      },
    },

    selectAll: function selectAll() {
      if (!this.model) { return; }
      return this.items.length === this.model.length;
    },
    selectSome: function selectSome() {
      if (!this.model) { return; }
      return this.model.length > 0 && !this.selectAll;
    },

    icon: function icon() {
      if (this.selectAll) { return "mdi-checkbox-marked"; }
      if (this.selectSome) { return "mdi-minus-box"; }

      return "mdi-checkbox-blank-outline";
    },
  },
  methods: {
    select: function select(item) {
      if (this.itemValue) {
        item = item[this.itemValue];
      }
      if (!this.model.find(function (i) { return i === item; })) {
        this.model = [item ].concat( this.model);
      }
      else { this.model = this.model.filter(function (i) { return i !== item; }); }
    },

    toggleAll: function toggleAll() {
      var this$1 = this;

      if (this.selectAll) { this.model = []; }
      else if (this.itemValue) {
        this.model = this.items.map(function (i) { return i[this$1.itemValue]; });
      }
      else {
        this.model = this.items;
      }
    },

    selectedItem: function selectedItem(item) {
      if (this.itemValue) { item = item[this.itemValue]; }
      return !!this.model.find(function (c) { return c === item; });
    },
    selectedItemIcon: function selectedItemIcon(item) {
      if (this.itemValue) { item = item[this.itemValue]; }

      if (!!this.model.find(function (i) { return i === item; })) { return "mdi-checkbox-marked"; }
      return "mdi-checkbox-blank-outline";
    },
  },
};

var _hoisted_1 = {
  key: 1,
  class: "mr-1"
};
var _hoisted_2 = {
  key: 2,
  class: "grey--text caption"
};

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_v_icon = resolveComponent("v-icon");
  var _component_v_list_item_action = resolveComponent("v-list-item-action");
  var _component_v_list_item_title = resolveComponent("v-list-item-title");
  var _component_v_list_item_content = resolveComponent("v-list-item-content");
  var _component_v_list_item = resolveComponent("v-list-item");
  var _component_v_divider = resolveComponent("v-divider");
  var _component_v_chip = resolveComponent("v-chip");
  var _component_v_autocomplete = resolveComponent("v-autocomplete");

  return (openBlock(), createBlock(_component_v_autocomplete, {
    modelValue: _ctx.model,
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) { return (_ctx.model = $event); }),
    validateOnBlur: _ctx.validateOnBlur,
    "item-value": _ctx.itemValue,
    "item-text": _ctx.itemText,
    disabled: _ctx.disabled,
    multiple: _ctx.multiple,
    rules: _ctx.rules,
    items: _ctx.items,
    label: _ctx.label
  }, {
    selection: withCtx(function (data) { return [
      (_ctx.chips && data.index === 0)
        ? createVNode(_component_v_chip, { key: 0 }, {
            default: withCtx(function () { return [
              createVNode("span", null, toDisplayString(_ctx.itemText ? data.item[_ctx.itemText] : data.item), 1 /* TEXT */)
            ]; }),
            _: 2
          }, 1024 /* DYNAMIC_SLOTS */)
        : (data.index === 0)
          ? (openBlock(), createBlock("span", _hoisted_1, toDisplayString(_ctx.itemText ? data.item[_ctx.itemText] : data.item), 1 /* TEXT */))
          : createCommentVNode("v-if", true),
      (data.index === 1)
        ? (openBlock(), createBlock("span", _hoisted_2, "(+" + toDisplayString(_ctx.model.length - 1) + " ещё)", 1 /* TEXT */))
        : createCommentVNode("v-if", true)
    ]; }),
    default: withCtx(function () { return [
      (_ctx.withSelectAll)
        ? createVNode(_component_v_list_item, {
            key: 0,
            slot: "prepend-item",
            ripple: "",
            onClick: _ctx.toggleAll
          }, {
            default: withCtx(function () { return [
              createVNode(_component_v_list_item_action, null, {
                default: withCtx(function () { return [
                  createVNode(_component_v_icon, {
                    color: _ctx.model && _ctx.model.length > 0 ? 'primary' : ''
                  }, {
                    default: withCtx(function () { return [
                      createTextVNode(toDisplayString(_ctx.icon), 1 /* TEXT */)
                    ]; }),
                    _: 1
                  }, 8 /* PROPS */, ["color"])
                ]; }),
                _: 1
              }),
              createVNode(_component_v_list_item_content, null, {
                default: withCtx(function () { return [
                  createVNode(_component_v_list_item_title, null, {
                    default: withCtx(function () { return [
                      createTextVNode(toDisplayString(_ctx.labelSelectAll || 'Выбрать все'), 1 /* TEXT */)
                    ]; }),
                    _: 1
                  })
                ]; }),
                _: 1
              })
            ]; }),
            _: 1
          }, 8 /* PROPS */, ["onClick"])
        : createCommentVNode("v-if", true),
      createVNode(_component_v_divider, { class: "mt-2" })
    ]; }),
    _: 1
  }, 8 /* PROPS */, ["modelValue", "validateOnBlur", "item-value", "item-text", "disabled", "multiple", "rules", "items", "label"]))
}

script.render = render;
script.__file = "src/helper/MultiAutocomplete.vue";

var script$1 = {
  name: 'FooterTable',

  props: {
    headers: Array,
  },

  data: function () { return ({
    menu: false,
  }); },

  computed: {
    headersComp: {
      get: function get() {
        return this.headers;
      },
      set: function set(headers) {
        this.$emit('update:headers', headers);
      },
    },

    name: function name() {
      return this.$route.name;
    },

    isSelectAll: function isSelectAll() {
      return this.headers.every(function (h) { return h.isSelected; });
    },
    isUnSelectAll: function isUnSelectAll() {
      return this.headers.every(function (h) { return !h.isSelected; });
    },

    selectAllIcon: function selectAllIcon() {
      if (this.isSelectAll) { return 'mdi-checkbox-marked'; }
      if (this.isUnSelectAll) { return 'mdi-checkbox-blank-outline' }
      return 'mdi-minus-box';
    }
  },
  methods: {
    currentIcon: function currentIcon(isSelected) {
      return isSelected
        ? 'mdi-checkbox-marked'
        : 'mdi-checkbox-blank-outline';
    },

    toggleHeader: function toggleHeader(header) {
      header.isSelected = !header.isSelected;
    },
    toggleAll: function toggleAll() {
      var isSelectAll = this.isSelectAll;
      this.headersComp = this.headersComp.map(function (h) {
        h.isSelected = !isSelectAll;
        return h;
      });
    }
  },
};

var _hoisted_1$1 = /*#__PURE__*/createTextVNode("mdi-tune");
var _hoisted_2$1 = /*#__PURE__*/createTextVNode(" Выбрать колонки ");
var _hoisted_3 = /*#__PURE__*/createTextVNode("Выбрать все");

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_v_icon = resolveComponent("v-icon");
  var _component_v_btn = resolveComponent("v-btn");
  var _component_v_list_item_action = resolveComponent("v-list-item-action");
  var _component_v_list_item_title = resolveComponent("v-list-item-title");
  var _component_v_list_item = resolveComponent("v-list-item");
  var _component_v_list = resolveComponent("v-list");
  var _component_v_menu = resolveComponent("v-menu");
  var _component_v_flex = resolveComponent("v-flex");
  var _component_v_layout = resolveComponent("v-layout");
  var _directive_ripple = resolveDirective("ripple");

  return (openBlock(), createBlock(_component_v_layout, {
    "align-center": "",
    "justify-start": ""
  }, {
    default: withCtx(function () { return [
      createVNode(_component_v_flex, { shrink: "" }, {
        default: withCtx(function () { return [
          createVNode(_component_v_menu, {
            modelValue: _ctx.menu,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) { return (_ctx.menu = $event); }),
            "close-on-content-click": false,
            "close-on-click": "",
            "offset-y": ""
          }, {
            activator: withCtx(function (ref) {
              var on = ref.on;

              return [
              createVNode(_component_v_btn, mergeProps({
                class: "text-lowercase",
                color: "primary lighten-2",
                text: ""
              }, toHandlers(on)), {
                default: withCtx(function () { return [
                  createVNode(_component_v_icon, { class: "mr-3" }, {
                    default: withCtx(function () { return [
                      _hoisted_1$1
                    ]; }),
                    _: 1
                  }),
                  _hoisted_2$1
                ]; }),
                _: 2
              }, 1040 /* FULL_PROPS, DYNAMIC_SLOTS */)
            ];
          }),
            default: withCtx(function () { return [
              createVNode(_component_v_list, null, {
                default: withCtx(function () { return [
                  withDirectives(createVNode(_component_v_list_item, { onClick: _ctx.toggleAll }, {
                    default: withCtx(function () { return [
                      createVNode(_component_v_list_item_action, null, {
                        default: withCtx(function () { return [
                          createVNode(_component_v_icon, {
                            color: "primary",
                            class: "mr-3"
                          }, {
                            default: withCtx(function () { return [
                              createTextVNode(toDisplayString(_ctx.selectAllIcon), 1 /* TEXT */)
                            ]; }),
                            _: 1
                          })
                        ]; }),
                        _: 1
                      }),
                      createVNode(_component_v_list_item_title, null, {
                        default: withCtx(function () { return [
                          _hoisted_3
                        ]; }),
                        _: 1
                      })
                    ]; }),
                    _: 1
                  }, 8 /* PROPS */, ["onClick"]), [
                    [_directive_ripple]
                  ]),
                  (openBlock(true), createBlock(Fragment, null, renderList(_ctx.headers, function (header) {
                    return (openBlock(), createBlock(Fragment, null, [
                      (header.text)
                        ? withDirectives(createVNode(_component_v_list_item, {
                            key: 0,
                            onClick: function ($event) { return (_ctx.toggleHeader(header)); }
                          }, {
                            default: withCtx(function () { return [
                              createVNode(_component_v_list_item_action, null, {
                                default: withCtx(function () { return [
                                  createVNode(_component_v_icon, {
                                    color: "primary",
                                    class: "mr-3"
                                  }, {
                                    default: withCtx(function () { return [
                                      createTextVNode(toDisplayString(_ctx.currentIcon(header.isSelected)), 1 /* TEXT */)
                                    ]; }),
                                    _: 2
                                  }, 1024 /* DYNAMIC_SLOTS */)
                                ]; }),
                                _: 2
                              }, 1024 /* DYNAMIC_SLOTS */),
                              createVNode(_component_v_list_item_title, null, {
                                default: withCtx(function () { return [
                                  createTextVNode(toDisplayString(header.text), 1 /* TEXT */)
                                ]; }),
                                _: 2
                              }, 1024 /* DYNAMIC_SLOTS */)
                            ]; }),
                            _: 2
                          }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["onClick"]), [
                            [_directive_ripple]
                          ])
                        : createCommentVNode("v-if", true)
                    ], 64 /* STABLE_FRAGMENT */))
                  }), 256 /* UNKEYED_FRAGMENT */))
                ]; }),
                _: 1
              })
            ]; }),
            _: 1
          }, 8 /* PROPS */, ["modelValue"])
        ]; }),
        _: 1
      })
    ]; }),
    _: 1
  }))
}

script$1.render = render$1;
script$1.__file = "src/base/FilteredTable/FooterTable.vue";

var script$2 = {
  name: 'FilteredTable',

  components: {
    MultiAutocomplete: script,
    FooterTable: script$1,
  },

  props: {
    value: {
      type: Array,
      default: function () { return []; },
    },
    items: {
      type: Array,
      default: function () { return []; },
    },
    headers: {
      type: Array,
      default: function () { return []; },
    },
    customiseHeader: Boolean,
    withActions: Boolean,
    showSelect: Boolean,
    hideFooter: Boolean,
    sortDesc: Boolean,
    loading: Boolean,
    sortBy: String,
    search: String,
  },

  created: function created() {
    this.setFilters();
  },

  data: function () { return ({
    filters: {},
  }); },

  computed: {
    selectedItems: {
      get: function get() {
        return this.value;
      },
      set: function set(value) {
        this.$emit('input', value);
      },
    },

    visibleHeaders: function visibleHeaders() {
      return this.customiseHeader
        ? this.headers.filter(function (h) { return h.isSelected; })
        : this.headers;
    },

    filteredItems: function filteredItems() {
      return this.filterItems(this.items);
    },

    itemsPerPage: function itemsPerPage() {
      return this.$store.getters.getPerPage
    }
  },

  methods: {
    changeSort: function changeSort(column) {
      // if (this.paginationSync.sortBy === column) {
      //   this.paginationSync.descending = !this.paginationSync.descending;
      // } else {
      //   this.paginationSync.sortBy = column;
      //   this.paginationSync.descending = false;
      // }
    },
    columnValueList: function columnValueList(val) {
      var values = [];
      if (!this.items) { return; }
      this.items.forEach(function (d) {
        if (!values.includes(d[val])) {
          values.push(d[val]);
        }
      });

      return values.filter(function (d) { return !!d && d !== 'null'; });
    },

    filterItems: function filterItems(items) {
      var this$1 = this;

      return items && items.filter(
        function (d) { return Object
          .keys(this$1.filters)
          .every(
            function (k) { return !this$1.filters[k].length
               || this$1.filters[k].includes(d[k]); }
          ); }
      );
    },

    currentAlign: function currentAlign(align) {
      if (!align) { return; }
      return ("text-" + align);
    },

    setFilters: function setFilters() {
      var this$1 = this;

      this.headers.forEach(function (header) {
        if (!header.isFilter) { return; }
        this$1.$set(this$1.filters, header.value, []);
      });
    },

    updatePagination: function updatePagination(pagination) {
      this.options = pagination;
      // console.log(pagination);
    }
  },
  watch: {
    headers: function headers() {
      this.setFilters();
    },
    options: function options(newVal) {
      // console.log(newVal);
    }
  },
};

var _hoisted_1$2 = { class: "grey lighten-3" };
var _hoisted_2$2 = { key: 0 };
var _hoisted_3$1 = { key: 0 };

function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_multi_autocomplete = resolveComponent("multi-autocomplete");
  var _component_footer_table = resolveComponent("footer-table");
  var _component_v_divider = resolveComponent("v-divider");
  var _component_v_data_table = resolveComponent("v-data-table");
  var _component_v_layout = resolveComponent("v-layout");

  return (openBlock(), createBlock(_component_v_layout, { column: "" }, {
    default: withCtx(function () { return [
      createVNode(_component_v_data_table, {
        "no-data-text": _ctx.loading ? 'Данные загружаются' : 'Данных нет',
        "footer-props": _ctx.defaultFooterProps,
        headers: _ctx.visibleHeaders,
        "show-all": _ctx.showSelect,
        items: _ctx.filteredItems,
        "sort-desc": _ctx.sortDesc,
        loading: _ctx.loading,
        "sort-by": _ctx.sortBy,
        search: _ctx.search,
        onPagination: _ctx.updatePagination
      }, createSlots({
        header: withCtx(function (ref) {
          var props = ref.props;

          return [
          renderSlot(_ctx.$slots, "filter", {
            headers: props.headers
          }, function () { return [
            createVNode("tr", _hoisted_1$2, [
              (openBlock(true), createBlock(Fragment, null, renderList(props.headers, function (header) {
                return (openBlock(), createBlock("th", {
                  key: header.text
                }, [
                  (header.isFilter)
                    ? (openBlock(), createBlock("div", _hoisted_2$2, [
                        createVNode(_component_multi_autocomplete, {
                          modelValue: _ctx.filters[header.value],
                          "onUpdate:modelValue": function ($event) { return (_ctx.filters[header.value] = $event); },
                          items: _ctx.columnValueList(header.value),
                          "with-select-all": "",
                          multiple: ""
                        }, null, 8 /* PROPS */, ["modelValue", "onUpdate:modelValue", "items"])
                      ]))
                    : createCommentVNode("v-if", true)
                ]))
              }), 128 /* KEYED_FRAGMENT */)),
              (_ctx.withActions)
                ? (openBlock(), createBlock("th", _hoisted_3$1))
                : createCommentVNode("v-if", true)
            ])
          ]; })
        ];
      }),
        item: withCtx(function (props) { return [
          createVNode("tr", null, [
            renderSlot(_ctx.$slots, "default", {
              item: props.item,
              index: props.index
            }, function () { return [
              (openBlock(true), createBlock(Fragment, null, renderList(_ctx.visibleHeaders, function (header) {
                return (openBlock(), createBlock("td", {
                  key: header.value,
                  class: _ctx.currentAlign(header.align)
                }, [
                  renderSlot(_ctx.$slots, 'item.' + header.value, {
                    item: props.item
                  }, function () { return [
                    createTextVNode(toDisplayString(props.item[header.value]), 1 /* TEXT */)
                  ]; })
                ], 2 /* CLASS */))
              }), 128 /* KEYED_FRAGMENT */))
            ]; }),
            (_ctx.withActions)
              ? renderSlot(_ctx.$slots, "actions", {
                  key: 0,
                  item: props.item,
                  index: props.index
                })
              : createCommentVNode("v-if", true)
          ])
        ]; }),
        _: 2
      }, [
        (_ctx.customiseHeader)
          ? {
              name: "top",
              fn: withCtx(function () { return [
                createVNode(_component_footer_table, { headers: _ctx.headers }, null, 8 /* PROPS */, ["headers"]),
                createVNode(_component_v_divider)
              ]; })
            }
          : undefined,
        (_ctx.customiseHeader)
          ? {
              name: "body.append",
              fn: withCtx(function () { return [
                createVNode(_component_footer_table, { headers: _ctx.headers }, null, 8 /* PROPS */, ["headers"])
              ]; })
            }
          : undefined
      ]), 1032 /* PROPS, DYNAMIC_SLOTS */, ["no-data-text", "footer-props", "headers", "show-all", "items", "sort-desc", "loading", "sort-by", "search", "onPagination"]),
      createCommentVNode(" <footer-table :headers=\"headers\" /> ")
    ]; }),
    _: 1
  }))
}

script$2.render = render$2;
script$2.__file = "src/base/FilteredTable/index.vue";

/**
 * Компонент с раскрывающимся контентом
 */

var script$3 = {
  name: 'ToggleElement',

  props: {
    value: [Boolean, Number],
    title: String,
  },

  computed: {
    toggle: {
      get: function get() {
        return this.value ? 0 : undefined;
      },
      set: function set(toggle) {
        this.$emit('input', this.value === 0);
      },
    },
  },
};

var _hoisted_1$3 = { class: "title" };

function render$3(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_v_expansion_panel_header = resolveComponent("v-expansion-panel-header");
  var _component_v_expansion_panel_content = resolveComponent("v-expansion-panel-content");
  var _component_v_expansion_panel = resolveComponent("v-expansion-panel");
  var _component_v_expansion_panels = resolveComponent("v-expansion-panels");

  return (openBlock(), createBlock(_component_v_expansion_panels, {
    modelValue: _ctx.toggle,
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) { return (_ctx.toggle = $event); })
  }, {
    default: withCtx(function () { return [
      createVNode(_component_v_expansion_panel, null, {
        default: withCtx(function () { return [
          createVNode(_component_v_expansion_panel_header, null, {
            default: withCtx(function () { return [
              renderSlot(_ctx.$slots, "title", {}, function () { return [
                createVNode("div", _hoisted_1$3, toDisplayString(_ctx.title), 1 /* TEXT */)
              ]; })
            ]; }),
            _: 3
          }),
          createVNode(_component_v_expansion_panel_content, null, {
            default: withCtx(function () { return [
              renderSlot(_ctx.$slots, "default")
            ]; }),
            _: 3
          })
        ]; }),
        _: 1
      })
    ]; }),
    _: 1
  }, 8 /* PROPS */, ["modelValue"]))
}

script$3.render = render$3;
script$3.__file = "src/base/ToggleElement.vue";

/**
 * Компонент валидации
 */

var script$4 = {
  name: 'FormValidate',

  props: {
    lazyValidation: Boolean,
  },

  data: function () { return ({
    valid: false,
  }); },

  computed: {
    form: function form() {
      return this.$refs.form;
    },
    rules: function rules() {
      return this.$store.getters['getRules'];
    },
  },

  methods: {
    handleSubmit: function handleSubmit(e) {
      if (this.form.validate() && this.valid) {
        return this.$emit('submit', e);
      }
      return this.$emit('fail-validation', e);
    },
  },
};

function render$4(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_v_form = resolveComponent("v-form");

  return (openBlock(), createBlock(_component_v_form, {
    modelValue: _ctx.valid,
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) { return (_ctx.valid = $event); }),
    "lazy-validation": _ctx.lazyValidation,
    ref: "form",
    onSubmit: withModifiers(_ctx.handleSubmit, ["prevent"])
  }, {
    default: withCtx(function () { return [
      renderSlot(_ctx.$slots, "default")
    ]; }),
    _: 3
  }, 8 /* PROPS */, ["modelValue", "lazy-validation", "onSubmit"]))
}

script$4.render = render$4;
script$4.__file = "src/base/FormValidate.vue";

/**
 * Примесь для модальных окон
 */

var dialog = {
  props: {
    value: Boolean,
  },

  computed: {
    dialog: {
      get: function get() {
        return this.value;
      },
      set: function set(dialog) {
        this.$emit('input', dialog);
        this.$emit('toggle-dialog');
      },
    },
  },

  methods: {
    closeDialog: function closeDialog() {
      this.dialog = false;
      this.$emit('close-dialog');
    },
  },
};

var script$5 = {
  name: 'DialogBase',

  mixins: [dialog],

  props: {
    maxWidth: [String, Number],
    height: [String, Number],
    withClose: Boolean,
    title: String,
  },

  computed: {
    withTitle: function withTitle() {
      return this.withClose || this.title;
    },
  },
};

var _hoisted_1$4 = /*#__PURE__*/createTextVNode("mdi-close");
var _hoisted_2$3 = /*#__PURE__*/createTextVNode(" Закрыть диалоговое окно ");

function render$5(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_v_icon = resolveComponent("v-icon");
  var _component_v_btn = resolveComponent("v-btn");
  var _component_v_tooltip = resolveComponent("v-tooltip");
  var _component_v_layout = resolveComponent("v-layout");
  var _component_v_card_title = resolveComponent("v-card-title");
  var _component_v_divider = resolveComponent("v-divider");
  var _component_v_card_text = resolveComponent("v-card-text");
  var _component_v_card_actions = resolveComponent("v-card-actions");
  var _component_v_card = resolveComponent("v-card");
  var _component_v_dialog = resolveComponent("v-dialog");

  return (openBlock(), createBlock(_component_v_dialog, {
    modelValue: _ctx.dialog,
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) { return (_ctx.dialog = $event); }),
    "max-width": _ctx.maxWidth
  }, {
    default: withCtx(function () { return [
      createVNode(_component_v_card, {
        height: _ctx.height,
        class: "d-flex flex-column"
      }, {
        default: withCtx(function () { return [
          createVNode(_component_v_card_title, null, {
            default: withCtx(function () { return [
              createVNode(_component_v_layout, {
                "justify-space-between": "",
                "align-center": ""
              }, {
                default: withCtx(function () { return [
                  renderSlot(_ctx.$slots, "title", {}, function () { return [
                    createTextVNode(toDisplayString(_ctx.title), 1 /* TEXT */)
                  ]; }),
                  renderSlot(_ctx.$slots, "closeIcon", {}, function () { return [
                    createVNode(_component_v_tooltip, { top: "" }, {
                      activator: withCtx(function (ref) {
                        var on = ref.on;

                        return [
                        createVNode(_component_v_btn, mergeProps({ color: "error" }, toHandlers(on), {
                          icon: "",
                          text: "",
                          onClick: _ctx.closeDialog
                        }), {
                          default: withCtx(function () { return [
                            createVNode(_component_v_icon, null, {
                              default: withCtx(function () { return [
                                _hoisted_1$4
                              ]; }),
                              _: 1
                            })
                          ]; }),
                          _: 2
                        }, 1040 /* FULL_PROPS, DYNAMIC_SLOTS */, ["onClick"])
                      ];
                    }),
                      default: withCtx(function () { return [
                        _hoisted_2$3
                      ]; }),
                      _: 1
                    })
                  ]; })
                ]; }),
                _: 3
              })
            ]; }),
            _: 1
          }),
          createVNode(_component_v_divider),
          renderSlot(_ctx.$slots, "beforeContent"),
          createVNode(_component_v_card_text, { class: "overflow-y-auto" }, {
            default: withCtx(function () { return [
              renderSlot(_ctx.$slots, "default")
            ]; }),
            _: 3
          }),
          renderSlot(_ctx.$slots, "afterContent"),
          createVNode(_component_v_card_actions, { class: "mt-auto" }, {
            default: withCtx(function () { return [
              renderSlot(_ctx.$slots, "actions")
            ]; }),
            _: 3
          })
        ]; }),
        _: 3
      }, 8 /* PROPS */, ["height"])
    ]; }),
    _: 1
  }, 8 /* PROPS */, ["modelValue", "max-width"]))
}

script$5.render = render$5;
script$5.__file = "src/base/DialogBase.vue";

var script$6 = {
  name: 'FormBase',

  components: {
    FormValidate: script$4,
  },

  props: {
    afterTitle: String,
    title: String,
  },

  data: function () { return ({
    error: '',
  }); },

  methods: {
    hadleFailValidation: function hadleFailValidation(e) {
      this.$emit('fail-validation', e);
      return this.error = 'Проверьте заполненность и корректность данных полей';
    },
    handleSubmit: function handleSubmit(e) {
      this.$emit('submit', e);
      return this.error = '';
    },

    setError: function setError(error) {
      return this.error = error;
    },
  },
};

function render$6(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_v_spacer = resolveComponent("v-spacer");
  var _component_v_layout = resolveComponent("v-layout");
  var _component_v_alert = resolveComponent("v-alert");
  var _component_v_slide_y_transition = resolveComponent("v-slide-y-transition");
  var _component_v_flex = resolveComponent("v-flex");
  var _component_v_divider = resolveComponent("v-divider");
  var _component_v_card_title = resolveComponent("v-card-title");
  var _component_v_card_text = resolveComponent("v-card-text");
  var _component_v_card_actions = resolveComponent("v-card-actions");
  var _component_v_card = resolveComponent("v-card");
  var _component_form_validate = resolveComponent("form-validate");

  return (openBlock(), createBlock(_component_form_validate, {
    onSubmit: _ctx.handleSubmit,
    "onFail-validation": _ctx.hadleFailValidation
  }, {
    default: withCtx(function () { return [
      createVNode(_component_v_card, { elevation: "0" }, {
        default: withCtx(function () { return [
          createVNode(_component_v_card_title, { class: "pa-0" }, {
            default: withCtx(function () { return [
              createVNode(_component_v_layout, { column: "" }, {
                default: withCtx(function () { return [
                  createVNode(_component_v_layout, { "align-center": "" }, {
                    default: withCtx(function () { return [
                      renderSlot(_ctx.$slots, "title", {}, function () { return [
                        createVNode("span", {
                          class: ["font-weight-regular", { 'pa-4' : _ctx.title }]
                        }, toDisplayString(_ctx.title), 3 /* TEXT, CLASS */)
                      ]; }),
                      createVNode(_component_v_spacer),
                      renderSlot(_ctx.$slots, "afterTitle", {}, function () { return [
                        createVNode("span", {
                          class: "caption secondary--text cursor--pointer change-form-button",
                          onClick: _cache[1] || (_cache[1] = function ($event) { return (_ctx.$emit('after-title-action')); })
                        }, toDisplayString(_ctx.afterTitle), 1 /* TEXT */)
                      ]; })
                    ]; }),
                    _: 3
                  }),
                  createVNode(_component_v_flex, { xs12: "" }, {
                    default: withCtx(function () { return [
                      createVNode(_component_v_slide_y_transition, null, {
                        default: withCtx(function () { return [
                          (_ctx.error)
                            ? createVNode(_component_v_alert, {
                                key: 0,
                                style: {"width":"100%"},
                                class: "mb-0 mt-3",
                                border: "top",
                                color: "error",
                                dark: ""
                              }, {
                                default: withCtx(function () { return [
                                  createTextVNode(toDisplayString(_ctx.error), 1 /* TEXT */)
                                ]; }),
                                _: 1
                              })
                            : createCommentVNode("v-if", true)
                        ]; }),
                        _: 1
                      })
                    ]; }),
                    _: 1
                  }),
                  createVNode(_component_v_divider)
                ]; }),
                _: 1
              })
            ]; }),
            _: 1
          }),
          createVNode(_component_v_card_text, { class: "mt-4 pb-0" }, {
            default: withCtx(function () { return [
              renderSlot(_ctx.$slots, "default")
            ]; }),
            _: 3
          }),
          createVNode(_component_v_card_actions, null, {
            default: withCtx(function () { return [
              renderSlot(_ctx.$slots, "actions")
            ]; }),
            _: 3
          })
        ]; }),
        _: 1
      })
    ]; }),
    _: 1
  }, 8 /* PROPS */, ["onSubmit", "onFail-validation"]))
}

script$6.render = render$6;
script$6.__file = "src/base/FormBase.vue";

var script$7 = {
  name: 'CalendarInput',
  props: {
    showCurrent: String,
    value: String,
  },
  data: function (vm) { return ({
    menu: false,
  }); },
  computed: {
    date: {
      get: function get() {
        return this.value;
      },
      set: function set(date) {
        this.$emit('input', date);
      },
    },

    currentDate: function currentDate() {
      if (!this.date) { return; }
      var ref = this.date.split('-');
      var year = ref[0];
      var month = ref[1];
      var day = ref[2];
      return [day, month, year].join('.');
    }
  },
};

function render$7(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_v_text_field = resolveComponent("v-text-field");
  var _component_v_date_picker = resolveComponent("v-date-picker");
  var _component_v_menu = resolveComponent("v-menu");

  return (openBlock(), createBlock(_component_v_menu, {
    modelValue: _ctx.menu,
    "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) { return (_ctx.menu = $event); }),
    "close-on-content-click": false,
    transition: "scale-transition",
    ref: "menu",
    "offset-y": ""
  }, {
    activator: withCtx(function (ref) {
      var on = ref.on;

      return [
      createVNode(_component_v_text_field, mergeProps({
        modelValue: _ctx.currentDate,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) { return (_ctx.currentDate = $event); }),
        "append-icon": "mdi-calendar-month",
        label: "Выбор даты",
        readonly: ""
      }, toHandlers(on)), null, 16 /* FULL_PROPS */, ["modelValue"])
    ];
  }),
    default: withCtx(function () { return [
      createVNode(_component_v_date_picker, {
        modelValue: _ctx.date,
        "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) { return (_ctx.date = $event); }),
        "show-current": _ctx.showCurrent,
        min: _ctx.showCurrent,
        scrollable: "",
        "no-title": "",
        "onClick:date": _cache[3] || (_cache[3] = function ($event) { return (_ctx.$refs.menu.save(_ctx.date)); })
      }, null, 8 /* PROPS */, ["modelValue", "show-current", "min"])
    ]; }),
    _: 1
  }, 8 /* PROPS */, ["modelValue"]))
}

script$7.render = render$7;
script$7.__file = "src/helper/DateTimePicker/CalendarInput.vue";

var script$8 = {
  name: 'TimeInput',

  props: {
    value: String,
  },

  data: function () { return ({
    menu: false,
  }); },

  computed: {
    time: {
      get: function get() {
        return this.value;
      },
      set: function set(time) {
        this.$emit('input', time);
      },
    },
  },
};

function render$8(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_v_text_field = resolveComponent("v-text-field");
  var _component_v_time_picker = resolveComponent("v-time-picker");
  var _component_v_menu = resolveComponent("v-menu");

  return (openBlock(), createBlock(_component_v_menu, {
    modelValue: _ctx.menu,
    "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) { return (_ctx.menu = $event); }),
    "close-on-content-click": false,
    "return-value": _ctx.time,
    transition: "scale-transition",
    "min-width": "300",
    ref: "menu",
    "offset-y": ""
  }, {
    activator: withCtx(function (ref) {
      var on = ref.on;

      return [
      createVNode(_component_v_text_field, mergeProps({
        modelValue: _ctx.time,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) { return (_ctx.time = $event); }),
        "append-icon": "mdi-clock-outline",
        label: "Выбор времени",
        readonly: ""
      }, toHandlers(on)), null, 16 /* FULL_PROPS */, ["modelValue"])
    ];
  }),
    default: withCtx(function () { return [
      (_ctx.menu)
        ? createVNode(_component_v_time_picker, {
            key: 0,
            modelValue: _ctx.time,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) { return (_ctx.time = $event); }),
            "full-width": "",
            format: "24hr",
            "use-seconds": "",
            "onClick:second": _cache[3] || (_cache[3] = function ($event) { return (_ctx.$refs.menu.save(_ctx.time)); })
          }, null, 8 /* PROPS */, ["modelValue"])
        : createCommentVNode("v-if", true)
    ]; }),
    _: 1
  }, 8 /* PROPS */, ["modelValue", "return-value"]))
}

script$8.render = render$8;
script$8.__file = "src/helper/DateTimePicker/TimeInput.vue";

var script$9 = {
  name: 'DateTimePicker',

  components: {
    CalendarInput: script$7,
    TimeInput: script$8,
  },

  props: {
    showCurrent: [String, Date],
    value: String,
    label: String,
  },

  computed: {
    date: {
      get: function get() {
        if (!this.value) { return ''; }
        return this.value.split(' ')[0];
      },
      set: function set(date) {
        this.$emit('input', [date, this.time].join(' '));
      },
    },

    time: {
      get: function get() {
        if (!this.value) { return ''; }
        return this.value.split(' ')[1];
      },
      set: function set(time) {
        this.$emit('input', [this.date, time].join(' '));
      },
    },
  },
};

var _hoisted_1$5 = { class: "title" };

function render$9(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_calendar_input = resolveComponent("calendar-input");
  var _component_v_flex = resolveComponent("v-flex");
  var _component_time_input = resolveComponent("time-input");
  var _component_v_layout = resolveComponent("v-layout");

  return (openBlock(), createBlock(_component_v_layout, {
    "justify-space-between": "",
    "align-center": ""
  }, {
    default: withCtx(function () { return [
      createVNode("div", _hoisted_1$5, toDisplayString(_ctx.label), 1 /* TEXT */),
      createVNode(_component_v_flex, { xs5: "" }, {
        default: withCtx(function () { return [
          createVNode(_component_calendar_input, {
            modelValue: _ctx.date,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) { return (_ctx.date = $event); }),
            "show-current": _ctx.showCurrent
          }, null, 8 /* PROPS */, ["modelValue", "show-current"])
        ]; }),
        _: 1
      }),
      createVNode(_component_v_flex, { xs5: "" }, {
        default: withCtx(function () { return [
          createVNode(_component_time_input, {
            modelValue: _ctx.time,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) { return (_ctx.time = $event); })
          }, null, 8 /* PROPS */, ["modelValue"])
        ]; }),
        _: 1
      })
    ]; }),
    _: 1
  }))
}

script$9.render = render$9;
script$9.__file = "src/helper/DateTimePicker/index.vue";

var script$a = {
  name: 'TooltipButton',
  props: {
    text: {
      type: Boolean,
      default: true,
    },
    top: {
      type: Boolean,
      default: true,
    },
    textColor: {
      type: String,
      default: 'grey',
    },
    lighten: { type: [String, Number] },
    darken: { type: [String, Number] },
    tooltip: { type: String },
    bottom: { type: Boolean },
    medium: { type: Boolean },
    right: { type: Boolean },
    small: { type: Boolean },
    large: { type: Boolean },
    left: { type: Boolean },
    color: { type: String },
    icon: { type: String },
  },
};

function render$a(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_v_icon = resolveComponent("v-icon");
  var _component_v_btn = resolveComponent("v-btn");
  var _component_v_tooltip = resolveComponent("v-tooltip");

  return (openBlock(), createBlock(_component_v_tooltip, {
    bottom: _ctx.bottom,
    right: _ctx.right,
    left: _ctx.left,
    top: _ctx.top
  }, {
    activator: withCtx(function (ref) {
      var on = ref.on;

      return [
      createVNode(_component_v_btn, mergeProps({
        class: ((_ctx.textColor) + "--text text--darken-" + (_ctx.darken) + " text--lighten-" + (_ctx.lighten)),
        medium: _ctx.medium,
        color: _ctx.color,
        small: _ctx.small,
        large: _ctx.large,
        text: _ctx.text
      }, toHandlers(on), {
        icon: "",
        onClick: _cache[1] || (_cache[1] = withModifiers(function ($event) { return (_ctx.$emit('action', $event)); }, ["prevent"]))
      }), {
        default: withCtx(function () { return [
          createVNode(_component_v_icon, {
            medium: _ctx.medium,
            small: _ctx.small,
            large: _ctx.large
          }, {
            default: withCtx(function () { return [
              renderSlot(_ctx.$slots, "icon", {}, function () { return [
                createTextVNode(toDisplayString(_ctx.icon), 1 /* TEXT */)
              ]; })
            ]; }),
            _: 3
          }, 8 /* PROPS */, ["medium", "small", "large"])
        ]; }),
        _: 2
      }, 1040 /* FULL_PROPS, DYNAMIC_SLOTS */, ["class", "medium", "color", "small", "large", "text"])
    ];
  }),
    default: withCtx(function () { return [
      renderSlot(_ctx.$slots, "tooltip", {}, function () { return [
        createTextVNode(toDisplayString(_ctx.tooltip), 1 /* TEXT */)
      ]; })
    ]; }),
    _: 3
  }, 8 /* PROPS */, ["bottom", "right", "left", "top"]))
}

script$a.render = render$a;
script$a.__file = "src/helper/TooltipButton.vue";

var script$b = {
  name: 'AlertDialog',

  props: {
    title: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: '',
    },
    text: {
      type: String,
      default: '',
    },
  },

  data: function () { return ({
    answer: false,
    dialog: false,
    data: {},
  }); },

  computed: {
    currentType: function currentType() {
      switch(this.type) {
        case 'error':
          return 'mdi-alert-circle-outline';

        case 'warning':
          return 'mdi-alert-outline';

        case 'success':
          return 'mdi-check';
      }
    },
  },

  methods: {
    alert: function alert(data) {
      this.dialog = true;
      this.data = data;
    },
    approve: function approve() {
      this.answer = true;
      this.$emit('approve', this.data);
      this.dialog = false;
    },
    decline: function decline() {
      this.answer = true;
      this.$emit('decline', this.data);
      this.dialog = false;
    },
  },

  watch: {
    dialog: function dialog(dialog$1) {
      if (dialog$1) { this.answer = false; }
      if (!dialog$1 && !this.answer) { this.$emit('decline'); }
    }
  }
};

var _hoisted_1$6 = { key: 0 };
var _hoisted_2$4 = { class: "title pt-3" };
var _hoisted_3$2 = /*#__PURE__*/createTextVNode("mdi-check");
var _hoisted_4 = /*#__PURE__*/createTextVNode("mdi-close");

function render$b(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_v_icon = resolveComponent("v-icon");
  var _component_v_card_text = resolveComponent("v-card-text");
  var _component_v_spacer = resolveComponent("v-spacer");
  var _component_v_btn = resolveComponent("v-btn");
  var _component_v_card_actions = resolveComponent("v-card-actions");
  var _component_v_card = resolveComponent("v-card");
  var _component_v_dialog = resolveComponent("v-dialog");

  return (openBlock(), createBlock(_component_v_dialog, {
    "max-width": "500",
    modelValue: _ctx.dialog,
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) { return (_ctx.dialog = $event); })
  }, {
    default: withCtx(function () { return [
      createVNode(_component_v_card, { class: "text-center pb-3 pt-5" }, {
        default: withCtx(function () { return [
          (_ctx.type)
            ? (openBlock(), createBlock("div", _hoisted_1$6, [
                createVNode(_component_v_icon, {
                  "x-large": "",
                  color: _ctx.type
                }, {
                  default: withCtx(function () { return [
                    createTextVNode(toDisplayString(_ctx.currentType), 1 /* TEXT */)
                  ]; }),
                  _: 1
                }, 8 /* PROPS */, ["color"])
              ]))
            : createCommentVNode("v-if", true),
          createVNode("div", _hoisted_2$4, [
            renderSlot(_ctx.$slots, "title", {}, function () { return [
              createTextVNode(toDisplayString(_ctx.title), 1 /* TEXT */)
            ]; })
          ]),
          createVNode(_component_v_card_text, { class: "body-2 font-weight-light" }, {
            default: withCtx(function () { return [
              renderSlot(_ctx.$slots, "default", {}, function () { return [
                createTextVNode(toDisplayString(_ctx.text), 1 /* TEXT */)
              ]; })
            ]; }),
            _: 3
          }),
          createVNode(_component_v_card_actions, null, {
            default: withCtx(function () { return [
              createVNode(_component_v_spacer),
              createVNode(_component_v_btn, {
                color: "success",
                class: "mx-3",
                large: "",
                icon: "",
                text: "",
                onClick: _ctx.approve
              }, {
                default: withCtx(function () { return [
                  createVNode(_component_v_icon, { large: "" }, {
                    default: withCtx(function () { return [
                      _hoisted_3$2
                    ]; }),
                    _: 1
                  })
                ]; }),
                _: 1
              }, 8 /* PROPS */, ["onClick"]),
              createVNode(_component_v_btn, {
                color: "error",
                class: "mx-3",
                large: "",
                icon: "",
                text: "",
                onClick: _ctx.decline
              }, {
                default: withCtx(function () { return [
                  createVNode(_component_v_icon, { large: "" }, {
                    default: withCtx(function () { return [
                      _hoisted_4
                    ]; }),
                    _: 1
                  })
                ]; }),
                _: 1
              }, 8 /* PROPS */, ["onClick"]),
              createVNode(_component_v_spacer)
            ]; }),
            _: 1
          })
        ]; }),
        _: 3
      })
    ]; }),
    _: 1
  }, 8 /* PROPS */, ["modelValue"]))
}

script$b.render = render$b;
script$b.__file = "src/helper/AlertDialog.vue";

var script$c = {
  name: 'MultiSelect',

  props: {
    value: {
      type: [Array, Number, String],
    },
    items: {
      type: Array,
      default: function () { return []; },
    },
    rules: {
      type: Array,
      default: function () { return []; },
    },
    validateOnBlur: Boolean,
    deletableChips: Boolean,
    withSelectAll: Boolean,
    labelSelectAll: String,
    withIcons: Boolean,
    hideItems: Boolean,
    disabled: Boolean,
    multiple: Boolean,
    itemValue: String,
    itemText: String,
    chips: Boolean,
    label: String,
  },

  computed: {
    model: {
      get: function get() {
        return this.value;
      },
      set: function set(model) {
        this.$emit('input', model);
      },
    },

    selectAll: function selectAll() {
      if (!this.model) { return; }
      return this.items.length === this.model.length;
    },
    selectSome: function selectSome() {
      if (!this.model) { return; }
      return this.model.length > 0 && !this.selectAll;
    },

    icon: function icon() {
      if (this.selectAll) { return "mdi-checkbox-marked"; }
      if (this.selectSome) { return "mdi-minus-box"; }

      return "mdi-checkbox-blank-outline";
    },
  },

  methods: {
    select: function select(item) {
      if (this.itemValue) {
        item = item[this.itemValue];
      }
      if (!this.model.find(function (i) { return i === item; })) {
        this.model = [item ].concat( this.model);
      }
      else { this.model = this.model.filter(function (i) { return i !== item; }); }
    },

    toggleAll: function toggleAll() {
      var this$1 = this;

      if (this.selectAll) { this.model = []; }
      else if (this.itemValue) {
        this.model = this.items.map(function (i) { return i[this$1.itemValue]; });
      }
      else {
        this.model = this.items;
      }
    },

    selectedItem: function selectedItem(item) {
      if (this.itemValue) { item = item[this.itemValue]; }
      return !!this.model.find(function (c) { return c === item; });
    },
    selectedItemIcon: function selectedItemIcon(item) {
      if (this.itemValue) { item = item[this.itemValue]; }

      if (!!this.model.find(function (i) { return i === item; })) { return "mdi-checkbox-marked"; }
      return "mdi-checkbox-blank-outline";
    },
  },
};

var _hoisted_1$7 = {
  key: 1,
  class: "mr-1"
};
var _hoisted_2$5 = {
  key: 2,
  class: "grey--text caption"
};

function render$c(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_v_icon = resolveComponent("v-icon");
  var _component_v_list_item_action = resolveComponent("v-list-item-action");
  var _component_v_list_item_title = resolveComponent("v-list-item-title");
  var _component_v_list_item_content = resolveComponent("v-list-item-content");
  var _component_v_list_item = resolveComponent("v-list-item");
  var _component_v_layout = resolveComponent("v-layout");
  var _component_v_divider = resolveComponent("v-divider");
  var _component_v_chip = resolveComponent("v-chip");
  var _component_v_select = resolveComponent("v-select");

  return (openBlock(), createBlock(_component_v_select, {
    modelValue: _ctx.model,
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) { return (_ctx.model = $event); }),
    validateOnBlur: _ctx.validateOnBlur,
    "item-value": _ctx.itemValue,
    "item-text": _ctx.itemText,
    disabled: _ctx.disabled,
    multiple: _ctx.multiple,
    rules: _ctx.rules,
    items: _ctx.items,
    label: _ctx.label
  }, {
    item: withCtx(function (data) { return [
      (!_ctx.hideItems)
        ? createVNode(_component_v_list_item, {
            key: 0,
            ripple: "",
            onClick: function ($event) { return (_ctx.select(data.item)); }
          }, {
            default: withCtx(function () { return [
              createVNode(_component_v_list_item_action, null, {
                default: withCtx(function () { return [
                  createVNode(_component_v_icon, {
                    color: _ctx.selectedItem(data.item) ? 'primary' : ''
                  }, {
                    default: withCtx(function () { return [
                      createTextVNode(toDisplayString(_ctx.selectedItemIcon(data.item)), 1 /* TEXT */)
                    ]; }),
                    _: 2
                  }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["color"])
                ]; }),
                _: 2
              }, 1024 /* DYNAMIC_SLOTS */),
              createVNode(_component_v_list_item_content, null, {
                default: withCtx(function () { return [
                  createVNode(_component_v_layout, { "align-center": "" }, {
                    default: withCtx(function () { return [
                      (_ctx.withIcons)
                        ? createVNode(_component_v_icon, {
                            key: 0,
                            color: data.item.color,
                            class: "mr-2"
                          }, {
                            default: withCtx(function () { return [
                              createTextVNode(toDisplayString(data.item.icon), 1 /* TEXT */)
                            ]; }),
                            _: 2
                          }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["color"])
                        : createCommentVNode("v-if", true),
                      createVNode("div", null, toDisplayString(_ctx.itemText ? data.item[_ctx.itemText] : data.item), 1 /* TEXT */)
                    ]; }),
                    _: 2
                  }, 1024 /* DYNAMIC_SLOTS */)
                ]; }),
                _: 2
              }, 1024 /* DYNAMIC_SLOTS */)
            ]; }),
            _: 2
          }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["onClick"])
        : createCommentVNode("v-if", true)
    ]; }),
    selection: withCtx(function (data) { return [
      (_ctx.chips && data.index === 0)
        ? createVNode(_component_v_chip, { key: 0 }, {
            default: withCtx(function () { return [
              createVNode("span", null, toDisplayString(_ctx.itemText ? data.item[_ctx.itemText] : data.item), 1 /* TEXT */)
            ]; }),
            _: 2
          }, 1024 /* DYNAMIC_SLOTS */)
        : (data.index === 0)
          ? (openBlock(), createBlock("span", _hoisted_1$7, toDisplayString(_ctx.itemText ? data.item[_ctx.itemText] : data.item), 1 /* TEXT */))
          : createCommentVNode("v-if", true),
      (data.index === 1)
        ? (openBlock(), createBlock("span", _hoisted_2$5, "(+" + toDisplayString(_ctx.model.length - 1) + " ещё)", 1 /* TEXT */))
        : createCommentVNode("v-if", true)
    ]; }),
    default: withCtx(function () { return [
      (_ctx.withSelectAll)
        ? createVNode(_component_v_list_item, {
            key: 0,
            slot: "prepend-item",
            ripple: "",
            onClick: _ctx.toggleAll
          }, {
            default: withCtx(function () { return [
              createVNode(_component_v_list_item_action, null, {
                default: withCtx(function () { return [
                  createVNode(_component_v_icon, {
                    color: _ctx.model && _ctx.model.length > 0 ? 'primary' : ''
                  }, {
                    default: withCtx(function () { return [
                      createTextVNode(toDisplayString(_ctx.icon), 1 /* TEXT */)
                    ]; }),
                    _: 1
                  }, 8 /* PROPS */, ["color"])
                ]; }),
                _: 1
              }),
              createVNode(_component_v_list_item_content, null, {
                default: withCtx(function () { return [
                  createVNode(_component_v_list_item_title, null, {
                    default: withCtx(function () { return [
                      createTextVNode(toDisplayString(_ctx.labelSelectAll || 'Выбрать все'), 1 /* TEXT */)
                    ]; }),
                    _: 1
                  })
                ]; }),
                _: 1
              })
            ]; }),
            _: 1
          }, 8 /* PROPS */, ["onClick"])
        : createCommentVNode("v-if", true),
      createVNode(_component_v_divider, { class: "mt-2" })
    ]; }),
    _: 1
  }, 8 /* PROPS */, ["modelValue", "validateOnBlur", "item-value", "item-text", "disabled", "multiple", "rules", "items", "label"]))
}

script$c.render = render$c;
script$c.__file = "src/helper/MultiSelect.vue";

var script$d = {
  name: 'BackButton',

  props: {
    to: String,
  },
  
  methods: {
    goTo: function goTo() {
      if (this.to) {
        return this.$route.push(to);
      }
      return this.$router.back();
    }
  }
};

var _hoisted_1$8 = /*#__PURE__*/createTextVNode("mdi-arrow-left");

function render$d(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_v_icon = resolveComponent("v-icon");
  var _component_v_btn = resolveComponent("v-btn");

  return (openBlock(), createBlock(_component_v_btn, {
    class: "mr-3",
    icon: "",
    onClick: _ctx.goTo
  }, {
    default: withCtx(function () { return [
      createVNode(_component_v_icon, null, {
        default: withCtx(function () { return [
          _hoisted_1$8
        ]; }),
        _: 1
      })
    ]; }),
    _: 1
  }, 8 /* PROPS */, ["onClick"]))
}

script$d.render = render$d;
script$d.__file = "src/helper/BackButton.vue";

var script$e = {
  name: 'ErrorAlert',

  props: {
    label: String,
  },
};

function render$e(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_v_alert = resolveComponent("v-alert");

  return (openBlock(), createBlock(_component_v_alert, {
    style: {"width":"100%"},
    class: "mb-0 mt-3",
    border: "top",
    color: "error",
    dark: ""
  }, {
    default: withCtx(function () { return [
      createTextVNode(toDisplayString(_ctx.label), 1 /* TEXT */)
    ]; }),
    _: 1
  }))
}

script$e.render = render$e;
script$e.__file = "src/helper/ErrorAlert.vue";

/** Base elements */

var components = [
  script$2,
  script$3,
  script$4,
  script$5,
  script$6,
  script,
  script$9,
  script$a,
  script$b,
  script$c,
  script$d,
  script$e ];

function install(Vue) {
  components.forEach(function (component) {
    Vue.component(component.name, component);
  });
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export { script$b as AlertDialog, script$d as BackButton, script$9 as DateTimePicker, script$5 as DialogBase, script$e as ErrorAlert, script$2 as FilteredTable, script$6 as FormBase, script$4 as FormValidate, script as MultiAutocomplete, script$c as MultiSelect, script$3 as ToggleElement, script$a as TooltipButton, install };
