(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.KamiVuetifyComponents = {}));
}(this, (function (exports) { 'use strict';

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //

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

  function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
      if (typeof shadowMode !== 'boolean') {
          createInjectorSSR = createInjector;
          createInjector = shadowMode;
          shadowMode = false;
      }
      // Vue.extend constructor export interop.
      var options = typeof script === 'function' ? script.options : script;
      // render functions
      if (template && template.render) {
          options.render = template.render;
          options.staticRenderFns = template.staticRenderFns;
          options._compiled = true;
          // functional template
          if (isFunctionalTemplate) {
              options.functional = true;
          }
      }
      // scopedId
      if (scopeId) {
          options._scopeId = scopeId;
      }
      var hook;
      if (moduleIdentifier) {
          // server build
          hook = function (context) {
              // 2.3 injection
              context =
                  context || // cached call
                      (this.$vnode && this.$vnode.ssrContext) || // stateful
                      (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
              // 2.2 with runInNewContext: true
              if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                  context = __VUE_SSR_CONTEXT__;
              }
              // inject component styles
              if (style) {
                  style.call(this, createInjectorSSR(context));
              }
              // register component module identifier for async chunk inference
              if (context && context._registeredComponents) {
                  context._registeredComponents.add(moduleIdentifier);
              }
          };
          // used by ssr in case component is cached and beforeCreate
          // never gets called
          options._ssrRegister = hook;
      }
      else if (style) {
          hook = shadowMode
              ? function (context) {
                  style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
              }
              : function (context) {
                  style.call(this, createInjector(context));
              };
      }
      if (hook) {
          if (options.functional) {
              // register for functional component in vue file
              var originalRender = options.render;
              options.render = function renderWithStyleInjection(h, context) {
                  hook.call(context);
                  return originalRender(h, context);
              };
          }
          else {
              // inject component registration as beforeCreate hook
              var existing = options.beforeCreate;
              options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
          }
      }
      return script;
  }

  /* script */
  var __vue_script__ = script;

  /* template */
  var __vue_render__ = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "v-autocomplete",
      {
        attrs: {
          validateOnBlur: _vm.validateOnBlur,
          "item-value": _vm.itemValue,
          "item-text": _vm.itemText,
          disabled: _vm.disabled,
          multiple: _vm.multiple,
          rules: _vm.rules,
          items: _vm.items,
          label: _vm.label
        },
        scopedSlots: _vm._u([
          {
            key: "selection",
            fn: function(data) {
              return [
                _vm.chips && data.index === 0
                  ? _c("v-chip", [
                      _c("span", [
                        _vm._v(
                          _vm._s(
                            _vm.itemText ? data.item[_vm.itemText] : data.item
                          )
                        )
                      ])
                    ])
                  : data.index === 0
                  ? _c("span", { staticClass: "mr-1" }, [
                      _vm._v(
                        "\n      " +
                          _vm._s(
                            _vm.itemText ? data.item[_vm.itemText] : data.item
                          ) +
                          "\n    "
                      )
                    ])
                  : _vm._e(),
                _vm._v(" "),
                data.index === 1
                  ? _c("span", { staticClass: "grey--text caption" }, [
                      _vm._v("(+" + _vm._s(_vm.model.length - 1) + " ещё)")
                    ])
                  : _vm._e()
              ]
            }
          }
        ]),
        model: {
          value: _vm.model,
          callback: function($$v) {
            _vm.model = $$v;
          },
          expression: "model"
        }
      },
      [
        _vm.withSelectAll
          ? _c(
              "v-list-item",
              {
                attrs: { slot: "prepend-item", ripple: "" },
                on: { click: _vm.toggleAll },
                slot: "prepend-item"
              },
              [
                _c(
                  "v-list-item-action",
                  [
                    _c(
                      "v-icon",
                      {
                        attrs: {
                          color:
                            _vm.model && _vm.model.length > 0 ? "primary" : ""
                        }
                      },
                      [_vm._v(_vm._s(_vm.icon))]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "v-list-item-content",
                  [
                    _c("v-list-item-title", [
                      _vm._v(_vm._s(_vm.labelSelectAll || "Выбрать все"))
                    ])
                  ],
                  1
                )
              ],
              1
            )
          : _vm._e(),
        _vm._v(" "),
        _c("v-divider", { staticClass: "mt-2" })
      ],
      1
    )
  };
  var __vue_staticRenderFns__ = [];
  __vue_render__._withStripped = true;

    /* style */
    var __vue_inject_styles__ = undefined;
    /* scoped */
    var __vue_scope_id__ = undefined;
    /* module identifier */
    var __vue_module_identifier__ = undefined;
    /* functional template */
    var __vue_is_functional_template__ = false;
    /* style inject */
    
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    var __vue_component__ = /*#__PURE__*/normalizeComponent(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      false,
      undefined,
      undefined,
      undefined
    );

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //

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

  /* script */
  var __vue_script__$1 = script$1;

  /* template */
  var __vue_render__$1 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "v-layout",
      { attrs: { "align-center": "", "justify-start": "" } },
      [
        _c(
          "v-flex",
          { attrs: { shrink: "" } },
          [
            _c(
              "v-menu",
              {
                attrs: {
                  "close-on-content-click": false,
                  "close-on-click": "",
                  "offset-y": ""
                },
                scopedSlots: _vm._u([
                  {
                    key: "activator",
                    fn: function(ref) {
                      var on = ref.on;
                      return [
                        _c(
                          "v-btn",
                          _vm._g(
                            {
                              staticClass: "text-lowercase",
                              attrs: { color: "primary lighten-2", text: "" }
                            },
                            on
                          ),
                          [
                            _c("v-icon", { staticClass: "mr-3" }, [
                              _vm._v("mdi-tune")
                            ]),
                            _vm._v("\n          Выбрать колонки\n        ")
                          ],
                          1
                        )
                      ]
                    }
                  }
                ]),
                model: {
                  value: _vm.menu,
                  callback: function($$v) {
                    _vm.menu = $$v;
                  },
                  expression: "menu"
                }
              },
              [
                _vm._v(" "),
                _c(
                  "v-list",
                  [
                    _c(
                      "v-list-item",
                      {
                        directives: [{ name: "ripple", rawName: "v-ripple" }],
                        on: { click: _vm.toggleAll }
                      },
                      [
                        _c(
                          "v-list-item-action",
                          [
                            _c(
                              "v-icon",
                              {
                                staticClass: "mr-3",
                                attrs: { color: "primary" }
                              },
                              [
                                _vm._v(
                                  "\n              " +
                                    _vm._s(_vm.selectAllIcon) +
                                    "\n            "
                                )
                              ]
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("v-list-item-title", [_vm._v("Выбрать все")])
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _vm._l(_vm.headers, function(header) {
                      return [
                        header.text
                          ? _c(
                              "v-list-item",
                              {
                                directives: [
                                  { name: "ripple", rawName: "v-ripple" }
                                ],
                                on: {
                                  click: function($event) {
                                    return _vm.toggleHeader(header)
                                  }
                                }
                              },
                              [
                                _c(
                                  "v-list-item-action",
                                  [
                                    _c(
                                      "v-icon",
                                      {
                                        staticClass: "mr-3",
                                        attrs: { color: "primary" }
                                      },
                                      [
                                        _vm._v(
                                          "\n                " +
                                            _vm._s(
                                              _vm.currentIcon(header.isSelected)
                                            ) +
                                            "\n              "
                                        )
                                      ]
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c("v-list-item-title", [
                                  _vm._v(_vm._s(header.text))
                                ])
                              ],
                              1
                            )
                          : _vm._e()
                      ]
                    })
                  ],
                  2
                )
              ],
              1
            )
          ],
          1
        )
      ],
      1
    )
  };
  var __vue_staticRenderFns__$1 = [];
  __vue_render__$1._withStripped = true;

    /* style */
    var __vue_inject_styles__$1 = undefined;
    /* scoped */
    var __vue_scope_id__$1 = undefined;
    /* module identifier */
    var __vue_module_identifier__$1 = undefined;
    /* functional template */
    var __vue_is_functional_template__$1 = false;
    /* style inject */
    
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    var __vue_component__$1 = /*#__PURE__*/normalizeComponent(
      { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
      __vue_inject_styles__$1,
      __vue_script__$1,
      __vue_scope_id__$1,
      __vue_is_functional_template__$1,
      __vue_module_identifier__$1,
      false,
      undefined,
      undefined,
      undefined
    );

  //

  var script$2 = {
    name: 'FilteredTable',

    components: {
      MultiAutocomplete: __vue_component__,
      FooterTable: __vue_component__$1,
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

  /* script */
  var __vue_script__$2 = script$2;

  /* template */
  var __vue_render__$2 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "v-layout",
      { attrs: { column: "" } },
      [
        _c("v-data-table", {
          attrs: {
            "no-data-text": _vm.loading ? "Данные загружаются" : "Данных нет",
            "footer-props": _vm.defaultFooterProps,
            headers: _vm.visibleHeaders,
            "show-all": _vm.showSelect,
            items: _vm.filteredItems,
            "sort-desc": _vm.sortDesc,
            loading: _vm.loading,
            "sort-by": _vm.sortBy,
            search: _vm.search
          },
          on: {
            "update:footerProps": function($event) {
              _vm.defaultFooterProps = $event;
            },
            "update:footer-props": function($event) {
              _vm.defaultFooterProps = $event;
            },
            pagination: _vm.updatePagination
          },
          scopedSlots: _vm._u(
            [
              {
                key: "header",
                fn: function(ref) {
                  var props = ref.props;
                  return [
                    _vm._t(
                      "filter",
                      [
                        _c(
                          "tr",
                          { staticClass: "grey lighten-3" },
                          [
                            _vm._l(props.headers, function(header) {
                              return _c("th", { key: header.text }, [
                                header.isFilter
                                  ? _c(
                                      "div",
                                      [
                                        _c("multi-autocomplete", {
                                          attrs: {
                                            items: _vm.columnValueList(
                                              header.value
                                            ),
                                            "with-select-all": "",
                                            multiple: ""
                                          },
                                          model: {
                                            value: _vm.filters[header.value],
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.filters,
                                                header.value,
                                                $$v
                                              );
                                            },
                                            expression: "filters[header.value]"
                                          }
                                        })
                                      ],
                                      1
                                    )
                                  : _vm._e()
                              ])
                            }),
                            _vm._v(" "),
                            _vm.withActions ? _c("th") : _vm._e()
                          ],
                          2
                        )
                      ],
                      { headers: props.headers }
                    )
                  ]
                }
              },
              {
                key: "item",
                fn: function(props) {
                  return [
                    _c(
                      "tr",
                      [
                        _vm._t(
                          "default",
                          _vm._l(_vm.visibleHeaders, function(header) {
                            return _c(
                              "td",
                              {
                                key: header.value,
                                class: _vm.currentAlign(header.align)
                              },
                              [
                                _vm._t(
                                  "item." + header.value,
                                  [_vm._v(_vm._s(props.item[header.value]))],
                                  { item: props.item }
                                )
                              ],
                              2
                            )
                          }),
                          { item: props.item, index: props.index }
                        ),
                        _vm._v(" "),
                        _vm.withActions
                          ? _vm._t("actions", null, {
                              item: props.item,
                              index: props.index
                            })
                          : _vm._e()
                      ],
                      2
                    )
                  ]
                }
              },
              _vm.customiseHeader
                ? {
                    key: "top",
                    fn: function() {
                      return [
                        _c("footer-table", { attrs: { headers: _vm.headers } }),
                        _vm._v(" "),
                        _c("v-divider")
                      ]
                    },
                    proxy: true
                  }
                : null,
              _vm.customiseHeader
                ? {
                    key: "body.append",
                    fn: function() {
                      return [
                        _c("footer-table", { attrs: { headers: _vm.headers } })
                      ]
                    },
                    proxy: true
                  }
                : null
            ],
            null,
            true
          )
        })
      ],
      1
    )
  };
  var __vue_staticRenderFns__$2 = [];
  __vue_render__$2._withStripped = true;

    /* style */
    var __vue_inject_styles__$2 = undefined;
    /* scoped */
    var __vue_scope_id__$2 = undefined;
    /* module identifier */
    var __vue_module_identifier__$2 = undefined;
    /* functional template */
    var __vue_is_functional_template__$2 = false;
    /* style inject */
    
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    var __vue_component__$2 = /*#__PURE__*/normalizeComponent(
      { render: __vue_render__$2, staticRenderFns: __vue_staticRenderFns__$2 },
      __vue_inject_styles__$2,
      __vue_script__$2,
      __vue_scope_id__$2,
      __vue_is_functional_template__$2,
      __vue_module_identifier__$2,
      false,
      undefined,
      undefined,
      undefined
    );

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //

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

  /* script */
  var __vue_script__$3 = script$3;

  /* template */
  var __vue_render__$3 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "v-expansion-panels",
      {
        model: {
          value: _vm.toggle,
          callback: function($$v) {
            _vm.toggle = $$v;
          },
          expression: "toggle"
        }
      },
      [
        _c(
          "v-expansion-panel",
          [
            _c(
              "v-expansion-panel-header",
              [
                _vm._t("title", [
                  _c("div", { staticClass: "title" }, [_vm._v(_vm._s(_vm.title))])
                ])
              ],
              2
            ),
            _vm._v(" "),
            _c("v-expansion-panel-content", [_vm._t("default")], 2)
          ],
          1
        )
      ],
      1
    )
  };
  var __vue_staticRenderFns__$3 = [];
  __vue_render__$3._withStripped = true;

    /* style */
    var __vue_inject_styles__$3 = undefined;
    /* scoped */
    var __vue_scope_id__$3 = undefined;
    /* module identifier */
    var __vue_module_identifier__$3 = undefined;
    /* functional template */
    var __vue_is_functional_template__$3 = false;
    /* style inject */
    
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    var __vue_component__$3 = /*#__PURE__*/normalizeComponent(
      { render: __vue_render__$3, staticRenderFns: __vue_staticRenderFns__$3 },
      __vue_inject_styles__$3,
      __vue_script__$3,
      __vue_scope_id__$3,
      __vue_is_functional_template__$3,
      __vue_module_identifier__$3,
      false,
      undefined,
      undefined,
      undefined
    );

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //

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

  /* script */
  var __vue_script__$4 = script$4;

  /* template */
  var __vue_render__$4 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "v-form",
      {
        ref: "form",
        attrs: { "lazy-validation": _vm.lazyValidation },
        on: {
          submit: function($event) {
            $event.preventDefault();
            return _vm.handleSubmit($event)
          }
        },
        model: {
          value: _vm.valid,
          callback: function($$v) {
            _vm.valid = $$v;
          },
          expression: "valid"
        }
      },
      [_vm._t("default")],
      2
    )
  };
  var __vue_staticRenderFns__$4 = [];
  __vue_render__$4._withStripped = true;

    /* style */
    var __vue_inject_styles__$4 = undefined;
    /* scoped */
    var __vue_scope_id__$4 = undefined;
    /* module identifier */
    var __vue_module_identifier__$4 = undefined;
    /* functional template */
    var __vue_is_functional_template__$4 = false;
    /* style inject */
    
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    var __vue_component__$4 = /*#__PURE__*/normalizeComponent(
      { render: __vue_render__$4, staticRenderFns: __vue_staticRenderFns__$4 },
      __vue_inject_styles__$4,
      __vue_script__$4,
      __vue_scope_id__$4,
      __vue_is_functional_template__$4,
      __vue_module_identifier__$4,
      false,
      undefined,
      undefined,
      undefined
    );

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

  //

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

  /* script */
  var __vue_script__$5 = script$5;

  /* template */
  var __vue_render__$5 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "v-dialog",
      {
        attrs: { "max-width": _vm.maxWidth },
        model: {
          value: _vm.dialog,
          callback: function($$v) {
            _vm.dialog = $$v;
          },
          expression: "dialog"
        }
      },
      [
        _c(
          "v-card",
          { staticClass: "d-flex flex-column", attrs: { height: _vm.height } },
          [
            _c(
              "v-card-title",
              [
                _c(
                  "v-layout",
                  { attrs: { "justify-space-between": "", "align-center": "" } },
                  [
                    _vm._t("title", [_vm._v(_vm._s(_vm.title))]),
                    _vm._v(" "),
                    _vm._t("closeIcon", [
                      _c(
                        "v-tooltip",
                        {
                          attrs: { top: "" },
                          scopedSlots: _vm._u([
                            {
                              key: "activator",
                              fn: function(ref) {
                                var on = ref.on;
                                return [
                                  _c(
                                    "v-btn",
                                    _vm._g(
                                      {
                                        attrs: {
                                          color: "error",
                                          icon: "",
                                          text: ""
                                        },
                                        on: { click: _vm.closeDialog }
                                      },
                                      on
                                    ),
                                    [_c("v-icon", [_vm._v("mdi-close")])],
                                    1
                                  )
                                ]
                              }
                            }
                          ])
                        },
                        [
                          _vm._v(
                            "\n            Закрыть диалоговое окно\n          "
                          )
                        ]
                      )
                    ])
                  ],
                  2
                )
              ],
              1
            ),
            _vm._v(" "),
            _c("v-divider"),
            _vm._v(" "),
            _vm._t("beforeContent"),
            _vm._v(" "),
            _c(
              "v-card-text",
              { staticClass: "overflow-y-auto" },
              [_vm._t("default")],
              2
            ),
            _vm._v(" "),
            _vm._t("afterContent"),
            _vm._v(" "),
            _c(
              "v-card-actions",
              { staticClass: "mt-auto" },
              [_vm._t("actions")],
              2
            )
          ],
          2
        )
      ],
      1
    )
  };
  var __vue_staticRenderFns__$5 = [];
  __vue_render__$5._withStripped = true;

    /* style */
    var __vue_inject_styles__$5 = undefined;
    /* scoped */
    var __vue_scope_id__$5 = undefined;
    /* module identifier */
    var __vue_module_identifier__$5 = undefined;
    /* functional template */
    var __vue_is_functional_template__$5 = false;
    /* style inject */
    
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    var __vue_component__$5 = /*#__PURE__*/normalizeComponent(
      { render: __vue_render__$5, staticRenderFns: __vue_staticRenderFns__$5 },
      __vue_inject_styles__$5,
      __vue_script__$5,
      __vue_scope_id__$5,
      __vue_is_functional_template__$5,
      __vue_module_identifier__$5,
      false,
      undefined,
      undefined,
      undefined
    );

  //

  var script$6 = {
    name: 'FormBase',

    components: {
      FormValidate: __vue_component__$4,
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

  /* script */
  var __vue_script__$6 = script$6;

  /* template */
  var __vue_render__$6 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "form-validate",
      {
        on: {
          submit: _vm.handleSubmit,
          "fail-validation": _vm.hadleFailValidation
        }
      },
      [
        _c(
          "v-card",
          { attrs: { elevation: "0" } },
          [
            _c(
              "v-card-title",
              { staticClass: "pa-0" },
              [
                _c(
                  "v-layout",
                  { attrs: { column: "" } },
                  [
                    _c(
                      "v-layout",
                      { attrs: { "align-center": "" } },
                      [
                        _vm._t("title", [
                          _c(
                            "span",
                            {
                              staticClass: "font-weight-regular",
                              class: { "pa-4": _vm.title }
                            },
                            [_vm._v(_vm._s(_vm.title))]
                          )
                        ]),
                        _vm._v(" "),
                        _c("v-spacer"),
                        _vm._v(" "),
                        _vm._t("afterTitle", [
                          _c(
                            "span",
                            {
                              staticClass:
                                "caption secondary--text cursor--pointer change-form-button",
                              on: {
                                click: function($event) {
                                  return _vm.$emit("after-title-action")
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\n              " +
                                  _vm._s(_vm.afterTitle) +
                                  "\n            "
                              )
                            ]
                          )
                        ])
                      ],
                      2
                    ),
                    _vm._v(" "),
                    _c(
                      "v-flex",
                      { attrs: { xs12: "" } },
                      [
                        _c(
                          "v-slide-y-transition",
                          [
                            _vm.error
                              ? _c(
                                  "v-alert",
                                  {
                                    staticClass: "mb-0 mt-3",
                                    staticStyle: { width: "100%" },
                                    attrs: {
                                      border: "top",
                                      color: "error",
                                      dark: ""
                                    }
                                  },
                                  [_vm._v(_vm._s(_vm.error))]
                                )
                              : _vm._e()
                          ],
                          1
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("v-divider")
                  ],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "v-card-text",
              { staticClass: "mt-4 pb-0" },
              [_vm._t("default")],
              2
            ),
            _vm._v(" "),
            _c("v-card-actions", [_vm._t("actions")], 2)
          ],
          1
        )
      ],
      1
    )
  };
  var __vue_staticRenderFns__$6 = [];
  __vue_render__$6._withStripped = true;

    /* style */
    var __vue_inject_styles__$6 = undefined;
    /* scoped */
    var __vue_scope_id__$6 = undefined;
    /* module identifier */
    var __vue_module_identifier__$6 = undefined;
    /* functional template */
    var __vue_is_functional_template__$6 = false;
    /* style inject */
    
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    var __vue_component__$6 = /*#__PURE__*/normalizeComponent(
      { render: __vue_render__$6, staticRenderFns: __vue_staticRenderFns__$6 },
      __vue_inject_styles__$6,
      __vue_script__$6,
      __vue_scope_id__$6,
      __vue_is_functional_template__$6,
      __vue_module_identifier__$6,
      false,
      undefined,
      undefined,
      undefined
    );

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //

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

  /* script */
  var __vue_script__$7 = script$7;

  /* template */
  var __vue_render__$7 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "v-menu",
      {
        ref: "menu",
        attrs: {
          "close-on-content-click": false,
          transition: "scale-transition",
          "offset-y": ""
        },
        scopedSlots: _vm._u([
          {
            key: "activator",
            fn: function(ref) {
              var on = ref.on;
              return [
                _c(
                  "v-text-field",
                  _vm._g(
                    {
                      attrs: {
                        "append-icon": "mdi-calendar-month",
                        label: "Выбор даты",
                        readonly: ""
                      },
                      model: {
                        value: _vm.currentDate,
                        callback: function($$v) {
                          _vm.currentDate = $$v;
                        },
                        expression: "currentDate"
                      }
                    },
                    on
                  )
                )
              ]
            }
          }
        ]),
        model: {
          value: _vm.menu,
          callback: function($$v) {
            _vm.menu = $$v;
          },
          expression: "menu"
        }
      },
      [
        _vm._v(" "),
        _c("v-date-picker", {
          attrs: {
            "show-current": _vm.showCurrent,
            min: _vm.showCurrent,
            scrollable: "",
            "no-title": ""
          },
          on: {
            "click:date": function($event) {
              return _vm.$refs.menu.save(_vm.date)
            }
          },
          model: {
            value: _vm.date,
            callback: function($$v) {
              _vm.date = $$v;
            },
            expression: "date"
          }
        })
      ],
      1
    )
  };
  var __vue_staticRenderFns__$7 = [];
  __vue_render__$7._withStripped = true;

    /* style */
    var __vue_inject_styles__$7 = undefined;
    /* scoped */
    var __vue_scope_id__$7 = undefined;
    /* module identifier */
    var __vue_module_identifier__$7 = undefined;
    /* functional template */
    var __vue_is_functional_template__$7 = false;
    /* style inject */
    
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    var __vue_component__$7 = /*#__PURE__*/normalizeComponent(
      { render: __vue_render__$7, staticRenderFns: __vue_staticRenderFns__$7 },
      __vue_inject_styles__$7,
      __vue_script__$7,
      __vue_scope_id__$7,
      __vue_is_functional_template__$7,
      __vue_module_identifier__$7,
      false,
      undefined,
      undefined,
      undefined
    );

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //

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

  /* script */
  var __vue_script__$8 = script$8;

  /* template */
  var __vue_render__$8 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "v-menu",
      {
        ref: "menu",
        attrs: {
          "close-on-content-click": false,
          "return-value": _vm.time,
          transition: "scale-transition",
          "min-width": "300",
          "offset-y": ""
        },
        on: {
          "update:returnValue": function($event) {
            _vm.time = $event;
          },
          "update:return-value": function($event) {
            _vm.time = $event;
          }
        },
        scopedSlots: _vm._u([
          {
            key: "activator",
            fn: function(ref) {
              var on = ref.on;
              return [
                _c(
                  "v-text-field",
                  _vm._g(
                    {
                      attrs: {
                        "append-icon": "mdi-clock-outline",
                        label: "Выбор времени",
                        readonly: ""
                      },
                      model: {
                        value: _vm.time,
                        callback: function($$v) {
                          _vm.time = $$v;
                        },
                        expression: "time"
                      }
                    },
                    on
                  )
                )
              ]
            }
          }
        ]),
        model: {
          value: _vm.menu,
          callback: function($$v) {
            _vm.menu = $$v;
          },
          expression: "menu"
        }
      },
      [
        _vm._v(" "),
        _vm.menu
          ? _c("v-time-picker", {
              attrs: { "full-width": "", format: "24hr", "use-seconds": "" },
              on: {
                "click:second": function($event) {
                  return _vm.$refs.menu.save(_vm.time)
                }
              },
              model: {
                value: _vm.time,
                callback: function($$v) {
                  _vm.time = $$v;
                },
                expression: "time"
              }
            })
          : _vm._e()
      ],
      1
    )
  };
  var __vue_staticRenderFns__$8 = [];
  __vue_render__$8._withStripped = true;

    /* style */
    var __vue_inject_styles__$8 = undefined;
    /* scoped */
    var __vue_scope_id__$8 = undefined;
    /* module identifier */
    var __vue_module_identifier__$8 = undefined;
    /* functional template */
    var __vue_is_functional_template__$8 = false;
    /* style inject */
    
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    var __vue_component__$8 = /*#__PURE__*/normalizeComponent(
      { render: __vue_render__$8, staticRenderFns: __vue_staticRenderFns__$8 },
      __vue_inject_styles__$8,
      __vue_script__$8,
      __vue_scope_id__$8,
      __vue_is_functional_template__$8,
      __vue_module_identifier__$8,
      false,
      undefined,
      undefined,
      undefined
    );

  //

  var script$9 = {
    name: 'DateTimePicker',

    components: {
      CalendarInput: __vue_component__$7,
      TimeInput: __vue_component__$8,
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

  /* script */
  var __vue_script__$9 = script$9;

  /* template */
  var __vue_render__$9 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "v-layout",
      { attrs: { "justify-space-between": "", "align-center": "" } },
      [
        _c("div", { staticClass: "title" }, [
          _vm._v("\n    " + _vm._s(_vm.label) + "\n  ")
        ]),
        _vm._v(" "),
        _c(
          "v-flex",
          { attrs: { xs5: "" } },
          [
            _c("calendar-input", {
              attrs: { "show-current": _vm.showCurrent },
              model: {
                value: _vm.date,
                callback: function($$v) {
                  _vm.date = $$v;
                },
                expression: "date"
              }
            })
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "v-flex",
          { attrs: { xs5: "" } },
          [
            _c("time-input", {
              model: {
                value: _vm.time,
                callback: function($$v) {
                  _vm.time = $$v;
                },
                expression: "time"
              }
            })
          ],
          1
        )
      ],
      1
    )
  };
  var __vue_staticRenderFns__$9 = [];
  __vue_render__$9._withStripped = true;

    /* style */
    var __vue_inject_styles__$9 = undefined;
    /* scoped */
    var __vue_scope_id__$9 = undefined;
    /* module identifier */
    var __vue_module_identifier__$9 = undefined;
    /* functional template */
    var __vue_is_functional_template__$9 = false;
    /* style inject */
    
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    var __vue_component__$9 = /*#__PURE__*/normalizeComponent(
      { render: __vue_render__$9, staticRenderFns: __vue_staticRenderFns__$9 },
      __vue_inject_styles__$9,
      __vue_script__$9,
      __vue_scope_id__$9,
      __vue_is_functional_template__$9,
      __vue_module_identifier__$9,
      false,
      undefined,
      undefined,
      undefined
    );

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //

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

  /* script */
  var __vue_script__$a = script$a;

  /* template */
  var __vue_render__$a = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "v-tooltip",
      {
        attrs: {
          bottom: _vm.bottom,
          right: _vm.right,
          left: _vm.left,
          top: _vm.top
        },
        scopedSlots: _vm._u(
          [
            {
              key: "activator",
              fn: function(ref) {
                var on = ref.on;
                return [
                  _c(
                    "v-btn",
                    _vm._g(
                      {
                        class:
                          _vm.textColor +
                          "--text text--darken-" +
                          _vm.darken +
                          " text--lighten-" +
                          _vm.lighten,
                        attrs: {
                          medium: _vm.medium,
                          color: _vm.color,
                          small: _vm.small,
                          large: _vm.large,
                          text: _vm.text,
                          icon: ""
                        },
                        on: {
                          click: function($event) {
                            $event.preventDefault();
                            return _vm.$emit("action", $event)
                          }
                        }
                      },
                      on
                    ),
                    [
                      _c(
                        "v-icon",
                        {
                          attrs: {
                            medium: _vm.medium,
                            small: _vm.small,
                            large: _vm.large
                          }
                        },
                        [_vm._t("icon", [_vm._v(_vm._s(_vm.icon))])],
                        2
                      )
                    ],
                    1
                  )
                ]
              }
            }
          ],
          null,
          true
        )
      },
      [_vm._v(" "), _vm._t("tooltip", [_vm._v(_vm._s(_vm.tooltip))])],
      2
    )
  };
  var __vue_staticRenderFns__$a = [];
  __vue_render__$a._withStripped = true;

    /* style */
    var __vue_inject_styles__$a = undefined;
    /* scoped */
    var __vue_scope_id__$a = undefined;
    /* module identifier */
    var __vue_module_identifier__$a = undefined;
    /* functional template */
    var __vue_is_functional_template__$a = false;
    /* style inject */
    
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    var __vue_component__$a = /*#__PURE__*/normalizeComponent(
      { render: __vue_render__$a, staticRenderFns: __vue_staticRenderFns__$a },
      __vue_inject_styles__$a,
      __vue_script__$a,
      __vue_scope_id__$a,
      __vue_is_functional_template__$a,
      __vue_module_identifier__$a,
      false,
      undefined,
      undefined,
      undefined
    );

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //

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

  var isOldIE = typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
  function createInjector(context) {
      return function (id, style) { return addStyle(id, style); };
  }
  var HEAD;
  var styles = {};
  function addStyle(id, css) {
      var group = isOldIE ? css.media || 'default' : id;
      var style = styles[group] || (styles[group] = { ids: new Set(), styles: [] });
      if (!style.ids.has(id)) {
          style.ids.add(id);
          var code = css.source;
          if (css.map) {
              // https://developer.chrome.com/devtools/docs/javascript-debugging
              // this makes source maps inside style tags work properly in Chrome
              code += '\n/*# sourceURL=' + css.map.sources[0] + ' */';
              // http://stackoverflow.com/a/26603875
              code +=
                  '\n/*# sourceMappingURL=data:application/json;base64,' +
                      btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) +
                      ' */';
          }
          if (!style.element) {
              style.element = document.createElement('style');
              style.element.type = 'text/css';
              if (css.media)
                  { style.element.setAttribute('media', css.media); }
              if (HEAD === undefined) {
                  HEAD = document.head || document.getElementsByTagName('head')[0];
              }
              HEAD.appendChild(style.element);
          }
          if ('styleSheet' in style.element) {
              style.styles.push(code);
              style.element.styleSheet.cssText = style.styles
                  .filter(Boolean)
                  .join('\n');
          }
          else {
              var index = style.ids.size - 1;
              var textNode = document.createTextNode(code);
              var nodes = style.element.childNodes;
              if (nodes[index])
                  { style.element.removeChild(nodes[index]); }
              if (nodes.length)
                  { style.element.insertBefore(textNode, nodes[index]); }
              else
                  { style.element.appendChild(textNode); }
          }
      }
  }

  /* script */
  var __vue_script__$b = script$b;

  /* template */
  var __vue_render__$b = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "v-dialog",
      {
        attrs: { "max-width": "500" },
        model: {
          value: _vm.dialog,
          callback: function($$v) {
            _vm.dialog = $$v;
          },
          expression: "dialog"
        }
      },
      [
        _c(
          "v-card",
          { staticClass: "text-center pb-3 pt-5" },
          [
            _vm.type
              ? _c(
                  "div",
                  [
                    _c("v-icon", { attrs: { "x-large": "", color: _vm.type } }, [
                      _vm._v(_vm._s(_vm.currentType))
                    ])
                  ],
                  1
                )
              : _vm._e(),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "title pt-3" },
              [
                _vm._t("title", [
                  _vm._v("\n        " + _vm._s(_vm.title) + "\n      ")
                ])
              ],
              2
            ),
            _vm._v(" "),
            _c(
              "v-card-text",
              { staticClass: "body-2 font-weight-light" },
              [
                _vm._t("default", [
                  _vm._v("\n        " + _vm._s(_vm.text) + "\n      ")
                ])
              ],
              2
            ),
            _vm._v(" "),
            _c(
              "v-card-actions",
              [
                _c("v-spacer"),
                _vm._v(" "),
                _c(
                  "v-btn",
                  {
                    staticClass: "mx-3",
                    attrs: { color: "success", large: "", icon: "", text: "" },
                    on: { click: _vm.approve }
                  },
                  [_c("v-icon", { attrs: { large: "" } }, [_vm._v("mdi-check")])],
                  1
                ),
                _vm._v(" "),
                _c(
                  "v-btn",
                  {
                    staticClass: "mx-3",
                    attrs: { color: "error", large: "", icon: "", text: "" },
                    on: { click: _vm.decline }
                  },
                  [_c("v-icon", { attrs: { large: "" } }, [_vm._v("mdi-close")])],
                  1
                ),
                _vm._v(" "),
                _c("v-spacer")
              ],
              1
            )
          ],
          1
        )
      ],
      1
    )
  };
  var __vue_staticRenderFns__$b = [];
  __vue_render__$b._withStripped = true;

    /* style */
    var __vue_inject_styles__$b = function (inject) {
      if (!inject) { return }
      inject("data-v-a7c91310_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: {"version":3,"sources":[],"names":[],"mappings":"","file":"AlertDialog.vue"}, media: undefined });

    };
    /* scoped */
    var __vue_scope_id__$b = undefined;
    /* module identifier */
    var __vue_module_identifier__$b = undefined;
    /* functional template */
    var __vue_is_functional_template__$b = false;
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    var __vue_component__$b = /*#__PURE__*/normalizeComponent(
      { render: __vue_render__$b, staticRenderFns: __vue_staticRenderFns__$b },
      __vue_inject_styles__$b,
      __vue_script__$b,
      __vue_scope_id__$b,
      __vue_is_functional_template__$b,
      __vue_module_identifier__$b,
      false,
      createInjector,
      undefined,
      undefined
    );

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //

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

  /* script */
  var __vue_script__$c = script$c;

  /* template */
  var __vue_render__$c = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "v-select",
      {
        attrs: {
          validateOnBlur: _vm.validateOnBlur,
          "item-value": _vm.itemValue,
          "item-text": _vm.itemText,
          disabled: _vm.disabled,
          multiple: _vm.multiple,
          rules: _vm.rules,
          items: _vm.items,
          label: _vm.label
        },
        scopedSlots: _vm._u([
          {
            key: "item",
            fn: function(data) {
              return [
                !_vm.hideItems
                  ? _c(
                      "v-list-item",
                      {
                        attrs: { ripple: "" },
                        on: {
                          click: function($event) {
                            return _vm.select(data.item)
                          }
                        }
                      },
                      [
                        _c(
                          "v-list-item-action",
                          [
                            _c(
                              "v-icon",
                              {
                                attrs: {
                                  color: _vm.selectedItem(data.item)
                                    ? "primary"
                                    : ""
                                }
                              },
                              [_vm._v(_vm._s(_vm.selectedItemIcon(data.item)))]
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "v-list-item-content",
                          [
                            _c(
                              "v-layout",
                              { attrs: { "align-center": "" } },
                              [
                                _vm.withIcons
                                  ? _c(
                                      "v-icon",
                                      {
                                        staticClass: "mr-2",
                                        attrs: { color: data.item.color }
                                      },
                                      [_vm._v(_vm._s(data.item.icon))]
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                _c("div", [
                                  _vm._v(
                                    _vm._s(
                                      _vm.itemText
                                        ? data.item[_vm.itemText]
                                        : data.item
                                    )
                                  )
                                ])
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ],
                      1
                    )
                  : _vm._e()
              ]
            }
          },
          {
            key: "selection",
            fn: function(data) {
              return [
                _vm.chips && data.index === 0
                  ? _c("v-chip", [
                      _c("span", [
                        _vm._v(
                          _vm._s(
                            _vm.itemText ? data.item[_vm.itemText] : data.item
                          )
                        )
                      ])
                    ])
                  : data.index === 0
                  ? _c("span", { staticClass: "mr-1" }, [
                      _vm._v(
                        "\n      " +
                          _vm._s(
                            _vm.itemText ? data.item[_vm.itemText] : data.item
                          ) +
                          "\n    "
                      )
                    ])
                  : _vm._e(),
                _vm._v(" "),
                data.index === 1
                  ? _c("span", { staticClass: "grey--text caption" }, [
                      _vm._v("(+" + _vm._s(_vm.model.length - 1) + " ещё)")
                    ])
                  : _vm._e()
              ]
            }
          }
        ]),
        model: {
          value: _vm.model,
          callback: function($$v) {
            _vm.model = $$v;
          },
          expression: "model"
        }
      },
      [
        _vm.withSelectAll
          ? _c(
              "v-list-item",
              {
                attrs: { slot: "prepend-item", ripple: "" },
                on: { click: _vm.toggleAll },
                slot: "prepend-item"
              },
              [
                _c(
                  "v-list-item-action",
                  [
                    _c(
                      "v-icon",
                      {
                        attrs: {
                          color:
                            _vm.model && _vm.model.length > 0 ? "primary" : ""
                        }
                      },
                      [_vm._v(_vm._s(_vm.icon))]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "v-list-item-content",
                  [
                    _c("v-list-item-title", [
                      _vm._v(_vm._s(_vm.labelSelectAll || "Выбрать все"))
                    ])
                  ],
                  1
                )
              ],
              1
            )
          : _vm._e(),
        _vm._v(" "),
        _vm._v(" "),
        _c("v-divider", { staticClass: "mt-2" })
      ],
      1
    )
  };
  var __vue_staticRenderFns__$c = [];
  __vue_render__$c._withStripped = true;

    /* style */
    var __vue_inject_styles__$c = undefined;
    /* scoped */
    var __vue_scope_id__$c = undefined;
    /* module identifier */
    var __vue_module_identifier__$c = undefined;
    /* functional template */
    var __vue_is_functional_template__$c = false;
    /* style inject */
    
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    var __vue_component__$c = /*#__PURE__*/normalizeComponent(
      { render: __vue_render__$c, staticRenderFns: __vue_staticRenderFns__$c },
      __vue_inject_styles__$c,
      __vue_script__$c,
      __vue_scope_id__$c,
      __vue_is_functional_template__$c,
      __vue_module_identifier__$c,
      false,
      undefined,
      undefined,
      undefined
    );

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //

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

  /* script */
  var __vue_script__$d = script$d;

  /* template */
  var __vue_render__$d = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "v-btn",
      { staticClass: "mr-3", attrs: { icon: "" }, on: { click: _vm.goTo } },
      [_c("v-icon", [_vm._v("mdi-arrow-left")])],
      1
    )
  };
  var __vue_staticRenderFns__$d = [];
  __vue_render__$d._withStripped = true;

    /* style */
    var __vue_inject_styles__$d = undefined;
    /* scoped */
    var __vue_scope_id__$d = undefined;
    /* module identifier */
    var __vue_module_identifier__$d = undefined;
    /* functional template */
    var __vue_is_functional_template__$d = false;
    /* style inject */
    
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    var __vue_component__$d = /*#__PURE__*/normalizeComponent(
      { render: __vue_render__$d, staticRenderFns: __vue_staticRenderFns__$d },
      __vue_inject_styles__$d,
      __vue_script__$d,
      __vue_scope_id__$d,
      __vue_is_functional_template__$d,
      __vue_module_identifier__$d,
      false,
      undefined,
      undefined,
      undefined
    );

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //

  var script$e = {
    name: 'ErrorAlert',

    props: {
      label: String,
    },
  };

  /* script */
  var __vue_script__$e = script$e;

  /* template */
  var __vue_render__$e = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "v-alert",
      {
        staticClass: "mb-0 mt-3",
        staticStyle: { width: "100%" },
        attrs: { border: "top", color: "error", dark: "" }
      },
      [_vm._v(_vm._s(_vm.label))]
    )
  };
  var __vue_staticRenderFns__$e = [];
  __vue_render__$e._withStripped = true;

    /* style */
    var __vue_inject_styles__$e = undefined;
    /* scoped */
    var __vue_scope_id__$e = undefined;
    /* module identifier */
    var __vue_module_identifier__$e = undefined;
    /* functional template */
    var __vue_is_functional_template__$e = false;
    /* style inject */
    
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    var __vue_component__$e = /*#__PURE__*/normalizeComponent(
      { render: __vue_render__$e, staticRenderFns: __vue_staticRenderFns__$e },
      __vue_inject_styles__$e,
      __vue_script__$e,
      __vue_scope_id__$e,
      __vue_is_functional_template__$e,
      __vue_module_identifier__$e,
      false,
      undefined,
      undefined,
      undefined
    );

  /** Base elements */

  var components = [
    __vue_component__$2,
    __vue_component__$3,
    __vue_component__$4,
    __vue_component__$5,
    __vue_component__$6,
    __vue_component__,
    __vue_component__$9,
    __vue_component__$a,
    __vue_component__$b,
    __vue_component__$c,
    __vue_component__$d,
    __vue_component__$e ];

  function install(Vue) {
    components.forEach(function (component) {
      Vue.component(component.name, component);
    });
  }

  if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }

  exports.AlertDialog = __vue_component__$b;
  exports.BackButton = __vue_component__$d;
  exports.DateTimePicker = __vue_component__$9;
  exports.DialogBase = __vue_component__$5;
  exports.ErrorAlert = __vue_component__$e;
  exports.FilteredTable = __vue_component__$2;
  exports.FormBase = __vue_component__$6;
  exports.FormValidate = __vue_component__$4;
  exports.MultiAutocomplete = __vue_component__;
  exports.MultiSelect = __vue_component__$c;
  exports.ToggleElement = __vue_component__$3;
  exports.TooltipButton = __vue_component__$a;
  exports.install = install;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
