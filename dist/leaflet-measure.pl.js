!(function(e) {
  function t(o) {
    if (r[o]) return r[o].exports;
    var n = (r[o] = { i: o, l: !1, exports: {} });
    return e[o].call(n.exports, n, n.exports, t), (n.l = !0), n.exports;
  }
  var r = {};
  (t.m = e),
    (t.c = r),
    (t.d = function(e, r, o) {
      t.o(e, r) || Object.defineProperty(e, r, { configurable: !1, enumerable: !0, get: o });
    }),
    (t.n = function(e) {
      var r =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return t.d(r, 'a', r), r;
    }),
    (t.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (t.p = '/dist/'),
    t((t.s = 28));
})([
  function(e, t, r) {
    function o(e) {
      return null == e ? (void 0 === e ? u : a) : l && l in Object(e) ? i(e) : s(e);
    }
    var n = r(4),
      i = r(38),
      s = r(39),
      a = '[object Null]',
      u = '[object Undefined]',
      l = n ? n.toStringTag : void 0;
    e.exports = o;
  },
  function(e, t) {
    function r(e) {
      return null != e && 'object' == typeof e;
    }
    e.exports = r;
  },
  function(e, t) {
    function r(e) {
      var t = typeof e;
      return null != e && ('object' == t || 'function' == t);
    }
    e.exports = r;
  },
  function(e, t, r) {
    'use strict';
    function o(e, t, r) {
      if (((r = r || {}), !h(r))) throw new Error('options is invalid');
      var o = r.bbox,
        n = r.id;
      if (void 0 === e) throw new Error('geometry is required');
      if (t && t.constructor !== Object) throw new Error('properties must be an Object');
      o && d(o), n && m(n);
      var i = { type: 'Feature' };
      return n && (i.id = n), o && (i.bbox = o), (i.properties = t || {}), (i.geometry = e), i;
    }
    function n(e, t, r) {
      if (!e) throw new Error('coordinates is required');
      if (!Array.isArray(e)) throw new Error('coordinates must be an Array');
      if (e.length < 2) throw new Error('coordinates must be at least 2 numbers long');
      if (!p(e[0]) || !p(e[1])) throw new Error('coordinates must contain numbers');
      return o({ type: 'Point', coordinates: e }, t, r);
    }
    function i(e, t, r) {
      if (!e) throw new Error('coordinates is required');
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        if (i.length < 4)
          throw new Error('Each LinearRing of a Polygon must have 4 or more Positions.');
        for (var s = 0; s < i[i.length - 1].length; s++) {
          if ((0 === n && 0 === s && !p(i[0][0])) || !p(i[0][1]))
            throw new Error('coordinates must contain numbers');
          if (i[i.length - 1][s] !== i[0][s])
            throw new Error('First and last Position are not equivalent.');
        }
      }
      return o({ type: 'Polygon', coordinates: e }, t, r);
    }
    function s(e, t, r) {
      if (!e) throw new Error('coordinates is required');
      if (e.length < 2) throw new Error('coordinates must be an array of two or more positions');
      if (!p(e[0][1]) || !p(e[0][1])) throw new Error('coordinates must contain numbers');
      return o({ type: 'LineString', coordinates: e }, t, r);
    }
    function a(e, t, r) {
      if (!e) throw new Error('coordinates is required');
      return o({ type: 'MultiLineString', coordinates: e }, t, r);
    }
    function u(e, t, r) {
      if (!e) throw new Error('coordinates is required');
      return o({ type: 'MultiPoint', coordinates: e }, t, r);
    }
    function l(e, t, r) {
      if (!e) throw new Error('coordinates is required');
      return o({ type: 'MultiPolygon', coordinates: e }, t, r);
    }
    function c(e, t) {
      if (void 0 === e || null === e) throw new Error('radians is required');
      if (t && 'string' != typeof t) throw new Error('units must be a string');
      var r = y[t || 'kilometers'];
      if (!r) throw new Error(t + ' units is invalid');
      return e * r;
    }
    function f(e) {
      if (null === e || void 0 === e) throw new Error('degrees is required');
      return (e % 360) * Math.PI / 180;
    }
    function p(e) {
      return !isNaN(e) && null !== e && !Array.isArray(e);
    }
    function h(e) {
      return !!e && e.constructor === Object;
    }
    function d(e) {
      if (!e) throw new Error('bbox is required');
      if (!Array.isArray(e)) throw new Error('bbox must be an Array');
      if (4 !== e.length && 6 !== e.length)
        throw new Error('bbox must be an Array of 4 or 6 numbers');
      e.forEach(function(e) {
        if (!p(e)) throw new Error('bbox must only contain numbers');
      });
    }
    function m(e) {
      if (!e) throw new Error('id is required');
      if (-1 === ['string', 'number'].indexOf(typeof e))
        throw new Error('id must be a number or a string');
    }
    r.d(t, 'b', function() {
      return o;
    }),
      r.d(t, 'f', function() {
        return n;
      }),
      r.d(t, 'e', function() {
        return s;
      }),
      r.d(t, 'g', function() {
        return c;
      }),
      r.d(t, 'a', function() {
        return f;
      }),
      r.d(t, 'c', function() {
        return p;
      }),
      r.d(t, 'd', function() {
        return h;
      });
    var y = {
      meters: 6371008.8,
      metres: 6371008.8,
      millimeters: 6371008800,
      millimetres: 6371008800,
      centimeters: 637100880,
      centimetres: 637100880,
      kilometers: 6371.0088,
      kilometres: 6371.0088,
      miles: 3958.761333810546,
      nauticalmiles: 6371008.8 / 1852,
      inches: 6371008.8 * 39.37,
      yards: 6371008.8 / 1.0936,
      feet: 20902260.511392,
      radians: 1,
      degrees: 6371008.8 / 111325
    };
  },
  function(e, t, r) {
    var o = r(5),
      n = o.Symbol;
    e.exports = n;
  },
  function(e, t, r) {
    var o = r(11),
      n = 'object' == typeof self && self && self.Object === Object && self,
      i = o || n || Function('return this')();
    e.exports = i;
  },
  function(e, t) {
    function r(e, t) {
      return e === t || (e !== e && t !== t);
    }
    e.exports = r;
  },
  function(e, t, r) {
    function o(e) {
      return null != e && i(e.length) && !n(e);
    }
    var n = r(10),
      i = r(16);
    e.exports = o;
  },
  function(e, t, r) {
    function o(e, t, r) {
      '__proto__' == t && n
        ? n(e, t, { configurable: !0, enumerable: !0, value: r, writable: !0 })
        : (e[t] = r);
    }
    var n = r(9);
    e.exports = o;
  },
  function(e, t, r) {
    var o = r(35),
      n = (function() {
        try {
          var e = o(Object, 'defineProperty');
          return e({}, '', {}), e;
        } catch (e) {}
      })();
    e.exports = n;
  },
  function(e, t, r) {
    function o(e) {
      if (!i(e)) return !1;
      var t = n(e);
      return t == a || t == u || t == s || t == l;
    }
    var n = r(0),
      i = r(2),
      s = '[object AsyncFunction]',
      a = '[object Function]',
      u = '[object GeneratorFunction]',
      l = '[object Proxy]';
    e.exports = o;
  },
  function(e, t, r) {
    (function(t) {
      var r = 'object' == typeof t && t && t.Object === Object && t;
      e.exports = r;
    }.call(t, r(37)));
  },
  function(e, t, r) {
    function o(e, t) {
      return s(i(e, t, n), e + '');
    }
    var n = r(13),
      i = r(45),
      s = r(46);
    e.exports = o;
  },
  function(e, t) {
    function r(e) {
      return e;
    }
    e.exports = r;
  },
  function(e, t) {
    function r(e, t, r) {
      switch (r.length) {
        case 0:
          return e.call(t);
        case 1:
          return e.call(t, r[0]);
        case 2:
          return e.call(t, r[0], r[1]);
        case 3:
          return e.call(t, r[0], r[1], r[2]);
      }
      return e.apply(t, r);
    }
    e.exports = r;
  },
  function(e, t, r) {
    function o(e, t, r) {
      if (!a(r)) return !1;
      var o = typeof t;
      return !!('number' == o ? i(r) && s(t, r.length) : 'string' == o && t in r) && n(r[t], e);
    }
    var n = r(6),
      i = r(7),
      s = r(17),
      a = r(2);
    e.exports = o;
  },
  function(e, t) {
    function r(e) {
      return 'number' == typeof e && e > -1 && e % 1 == 0 && e <= o;
    }
    var o = 9007199254740991;
    e.exports = r;
  },
  function(e, t) {
    function r(e, t) {
      var r = typeof e;
      return (
        !!(t = null == t ? o : t) &&
        ('number' == r || ('symbol' != r && n.test(e))) &&
        e > -1 &&
        e % 1 == 0 &&
        e < t
      );
    }
    var o = 9007199254740991,
      n = /^(?:0|[1-9]\d*)$/;
    e.exports = r;
  },
  function(e, t, r) {
    function o(e, t) {
      var r = s(e),
        o = !r && i(e),
        c = !r && !o && a(e),
        p = !r && !o && !c && l(e),
        h = r || o || c || p,
        d = h ? n(e.length, String) : [],
        m = d.length;
      for (var y in e)
        (!t && !f.call(e, y)) ||
          (h &&
            ('length' == y ||
              (c && ('offset' == y || 'parent' == y)) ||
              (p && ('buffer' == y || 'byteLength' == y || 'byteOffset' == y)) ||
              u(y, m))) ||
          d.push(y);
      return d;
    }
    var n = r(51),
      i = r(52),
      s = r(19),
      a = r(54),
      u = r(17),
      l = r(56),
      c = Object.prototype,
      f = c.hasOwnProperty;
    e.exports = o;
  },
  function(e, t) {
    var r = Array.isArray;
    e.exports = r;
  },
  function(e, t) {
    e.exports = function(e) {
      return (
        e.webpackPolyfill ||
          ((e.deprecate = function() {}),
          (e.paths = []),
          e.children || (e.children = []),
          Object.defineProperty(e, 'loaded', {
            enumerable: !0,
            get: function() {
              return e.l;
            }
          }),
          Object.defineProperty(e, 'id', {
            enumerable: !0,
            get: function() {
              return e.i;
            }
          }),
          (e.webpackPolyfill = 1)),
        e
      );
    };
  },
  function(e, t) {
    function r(e) {
      var t = e && e.constructor;
      return e === (('function' == typeof t && t.prototype) || o);
    }
    var o = Object.prototype;
    e.exports = r;
  },
  function(e, t, r) {
    function o(e) {
      if (!i(e)) return !1;
      var t = n(e);
      return (
        t == u || t == a || ('string' == typeof e.message && 'string' == typeof e.name && !s(e))
      );
    }
    var n = r(0),
      i = r(1),
      s = r(63),
      a = '[object DOMException]',
      u = '[object Error]';
    e.exports = o;
  },
  function(e, t) {
    function r(e, t) {
      return function(r) {
        return e(t(r));
      };
    }
    e.exports = r;
  },
  function(e, t) {
    function r(e, t) {
      for (var r = -1, o = null == e ? 0 : e.length, n = Array(o); ++r < o; ) n[r] = t(e[r], r, e);
      return n;
    }
    e.exports = r;
  },
  function(e, t) {
    var r = /<%=([\s\S]+?)%>/g;
    e.exports = r;
  },
  function(e, t, r) {
    function o(e) {
      return null == e ? '' : n(e);
    }
    var n = r(75);
    e.exports = o;
  },
  function(e, t, r) {
    'use strict';
    function o(e, t, r) {
      if (null !== e)
        for (
          var n,
            i,
            s,
            a,
            u,
            l,
            c,
            f,
            p = 0,
            h = 0,
            d = e.type,
            m = 'FeatureCollection' === d,
            y = 'Feature' === d,
            v = m ? e.features.length : 1,
            g = 0;
          g < v;
          g++
        ) {
          (c = m ? e.features[g].geometry : y ? e.geometry : e),
            (f = !!c && 'GeometryCollection' === c.type),
            (u = f ? c.geometries.length : 1);
          for (var b = 0; b < u; b++) {
            var _ = 0,
              j = 0;
            if (null !== (a = f ? c.geometries[b] : c)) {
              l = a.coordinates;
              var w = a.type;
              switch (((p = !r || ('Polygon' !== w && 'MultiPolygon' !== w) ? 0 : 1), w)) {
                case null:
                  break;
                case 'Point':
                  if (!1 === t(l, h, g, _, j)) return !1;
                  h++, _++;
                  break;
                case 'LineString':
                case 'MultiPoint':
                  for (n = 0; n < l.length; n++) {
                    if (!1 === t(l[n], h, g, _, j)) return !1;
                    h++, 'MultiPoint' === w && _++;
                  }
                  'LineString' === w && _++;
                  break;
                case 'Polygon':
                case 'MultiLineString':
                  for (n = 0; n < l.length; n++) {
                    for (i = 0; i < l[n].length - p; i++) {
                      if (!1 === t(l[n][i], h, g, _, j)) return !1;
                      h++;
                    }
                    'MultiLineString' === w && _++, 'Polygon' === w && j++;
                  }
                  'Polygon' === w && _++;
                  break;
                case 'MultiPolygon':
                  for (n = 0; n < l.length; n++) {
                    for ('MultiPolygon' === w && (j = 0), i = 0; i < l[n].length; i++) {
                      for (s = 0; s < l[n][i].length - p; s++) {
                        if (!1 === t(l[n][i][s], h, g, _, j)) return !1;
                        h++;
                      }
                      j++;
                    }
                    _++;
                  }
                  break;
                case 'GeometryCollection':
                  for (n = 0; n < a.geometries.length; n++)
                    if (!1 === o(a.geometries[n], t, r)) return !1;
                  break;
                default:
                  throw new Error('Unknown Geometry Type');
              }
            }
          }
        }
    }
    function n(e, t) {
      var r,
        o,
        n,
        i,
        s,
        a,
        u,
        l,
        c,
        f,
        p = 0,
        h = 'FeatureCollection' === e.type,
        d = 'Feature' === e.type,
        m = h ? e.features.length : 1;
      for (r = 0; r < m; r++) {
        for (
          a = h ? e.features[r].geometry : d ? e.geometry : e,
            l = h ? e.features[r].properties : d ? e.properties : {},
            c = h ? e.features[r].bbox : d ? e.bbox : void 0,
            f = h ? e.features[r].id : d ? e.id : void 0,
            u = !!a && 'GeometryCollection' === a.type,
            s = u ? a.geometries.length : 1,
            n = 0;
          n < s;
          n++
        )
          if (null !== (i = u ? a.geometries[n] : a))
            switch (i.type) {
              case 'Point':
              case 'LineString':
              case 'MultiPoint':
              case 'Polygon':
              case 'MultiLineString':
              case 'MultiPolygon':
                if (!1 === t(i, p, l, c, f)) return !1;
                break;
              case 'GeometryCollection':
                for (o = 0; o < i.geometries.length; o++)
                  if (!1 === t(i.geometries[o], p, l, c, f)) return !1;
                break;
              default:
                throw new Error('Unknown Geometry Type');
            }
          else if (!1 === t(null, p, l, c, f)) return !1;
        p++;
      }
    }
    function i(e, t, r) {
      var o = r;
      return (
        n(e, function(e, n, i, s, a) {
          o = 0 === n && void 0 === r ? e : t(o, e, n, i, s, a);
        }),
        o
      );
    }
    function s(e, t) {
      n(e, function(e, r, o, n, i) {
        var s = null === e ? null : e.type;
        switch (s) {
          case null:
          case 'Point':
          case 'LineString':
          case 'Polygon':
            if (!1 === t(Object(l.b)(e, o, { bbox: n, id: i }), r, 0)) return !1;
            return;
        }
        var a;
        switch (s) {
          case 'MultiPoint':
            a = 'Point';
            break;
          case 'MultiLineString':
            a = 'LineString';
            break;
          case 'MultiPolygon':
            a = 'Polygon';
        }
        for (var u = 0; u < e.coordinates.length; u++) {
          var c = e.coordinates[u],
            f = { type: a, coordinates: c };
          if (!1 === t(Object(l.b)(f, o), r, u)) return !1;
        }
      });
    }
    function a(e, t) {
      s(e, function(e, r, n) {
        var i = 0;
        if (e.geometry) {
          var s = e.geometry.type;
          if ('Point' !== s && 'MultiPoint' !== s) {
            var a;
            return (
              !1 !==
                o(e, function(o, s, u, c, f) {
                  if (void 0 === a) return void (a = o);
                  var p = Object(l.e)([a, o], e.properties);
                  if (!1 === t(p, r, n, f, i)) return !1;
                  i++, (a = o);
                }) && void 0
            );
          }
        }
      });
    }
    function u(e, t, r) {
      var o = r,
        n = !1;
      return (
        a(e, function(e, i, s, a, u) {
          (o = !1 === n && void 0 === r ? e : t(o, e, i, s, a, u)), (n = !0);
        }),
        o
      );
    }
    r.d(t, 'a', function() {
      return i;
    }),
      r.d(t, 'b', function() {
        return u;
      });
    var l = r(3);
  },
  function(e, t, r) {
    e.exports = r(29);
  },
  function(e, t, r) {
    'use strict';
    function o(e) {
      return e && e.__esModule ? e : { default: e };
    }
    r(30);
    var n = r(31),
      i = o(n),
      s = r(79),
      a = o(s),
      u = r(80),
      l = o(u),
      c = r(85),
      f = (function(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e) for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
        return (t.default = e), t;
      })(c),
      p = r(86),
      h = o(p),
      d = r(87),
      m = r(88),
      y = { imports: { numberFormat: d.numberFormat }, interpolate: /{{([\s\S]+?)}}/g },
      v = (0, i.default)(m.controlTemplate, y),
      g = (0, i.default)(m.resultsTemplate, y),
      b = (0, i.default)(m.pointPopupTemplate, y),
      _ = (0, i.default)(m.linePopupTemplate, y),
      j = (0, i.default)(m.areaPopupTemplate, y);
    (L.Control.Measure = L.Control.extend({
      _className: 'leaflet-control-measure',
      options: {
        units: {},
        position: 'topright',
        primaryLengthUnit: 'feet',
        secondaryLengthUnit: 'miles',
        primaryAreaUnit: 'acres',
        activeColor: '#ABE67E',
        completedColor: '#C8F2BE',
        captureZIndex: 1e4,
        popupOptions: { className: 'leaflet-measure-resultpopup', autoPanPadding: [10, 10] }
      },
      initialize: function(e) {
        L.setOptions(this, e);
        var t = this.options,
          r = t.activeColor,
          o = t.completedColor;
        (this._symbols = new h.default({ activeColor: r, completedColor: o })),
          (this.options.units = L.extend({}, a.default, this.options.units));
      },
      onAdd: function(e) {
        return (
          (this._map = e),
          (this._latlngs = []),
          this._initLayout(),
          e.on('click', this._collapse, this),
          (this._layer = L.layerGroup().addTo(e)),
          this._container
        );
      },
      onRemove: function(e) {
        e.off('click', this._collapse, this), e.removeLayer(this._layer);
      },
      _initLayout: function() {
        var e = this._className,
          t = (this._container = L.DomUtil.create('div', e + ' leaflet-bar'));
        (t.innerHTML = v({ model: { className: e } })),
          t.setAttribute('aria-haspopup', !0),
          L.DomEvent.disableClickPropagation(t),
          L.DomEvent.disableScrollPropagation(t);
        var r = (this.$toggle = (0, c.selectOne)('.js-toggle', t));
        this.$interaction = (0, c.selectOne)('.js-interaction', t);
        var o = (0, c.selectOne)('.js-start', t),
          n = (0, c.selectOne)('.js-cancel', t),
          i = (0, c.selectOne)('.js-finish', t);
        (this.$startPrompt = (0, c.selectOne)('.js-startprompt', t)),
          (this.$measuringPrompt = (0, c.selectOne)('.js-measuringprompt', t)),
          (this.$startHelp = (0, c.selectOne)('.js-starthelp', t)),
          (this.$results = (0, c.selectOne)('.js-results', t)),
          (this.$measureTasks = (0, c.selectOne)('.js-measuretasks', t)),
          this._collapse(),
          this._updateMeasureNotStarted(),
          L.Browser.android ||
            (L.DomEvent.on(t, 'mouseenter', this._expand, this),
            L.DomEvent.on(t, 'mouseleave', this._collapse, this)),
          L.DomEvent.on(r, 'click', L.DomEvent.stop),
          L.Browser.touch
            ? L.DomEvent.on(r, 'click', this._expand, this)
            : L.DomEvent.on(r, 'focus', this._expand, this),
          L.DomEvent.on(o, 'click', L.DomEvent.stop),
          L.DomEvent.on(o, 'click', this._startMeasure, this),
          L.DomEvent.on(n, 'click', L.DomEvent.stop),
          L.DomEvent.on(n, 'click', this._finishMeasure, this),
          L.DomEvent.on(i, 'click', L.DomEvent.stop),
          L.DomEvent.on(i, 'click', this._handleMeasureDoubleClick, this);
      },
      _expand: function() {
        f.hide(this.$toggle), f.show(this.$interaction);
      },
      _collapse: function() {
        this._locked || (f.hide(this.$interaction), f.show(this.$toggle));
      },
      _updateMeasureNotStarted: function() {
        f.hide(this.$startHelp),
          f.hide(this.$results),
          f.hide(this.$measureTasks),
          f.hide(this.$measuringPrompt),
          f.show(this.$startPrompt);
      },
      _updateMeasureStartedNoPoints: function() {
        f.hide(this.$results),
          f.show(this.$startHelp),
          f.show(this.$measureTasks),
          f.hide(this.$startPrompt),
          f.show(this.$measuringPrompt);
      },
      _updateMeasureStartedWithPoints: function() {
        f.hide(this.$startHelp),
          f.show(this.$results),
          f.show(this.$measureTasks),
          f.hide(this.$startPrompt),
          f.show(this.$measuringPrompt);
      },
      _startMeasure: function() {
        (this._locked = !0),
          (this._measureVertexes = L.featureGroup().addTo(this._layer)),
          (this._captureMarker = L.marker(this._map.getCenter(), {
            clickable: !0,
            zIndexOffset: this.options.captureZIndex,
            opacity: 0
          }).addTo(this._layer)),
          this._setCaptureMarkerIcon(),
          this._captureMarker
            .on('mouseout', this._handleMapMouseOut, this)
            .on('dblclick', this._handleMeasureDoubleClick, this)
            .on('click', this._handleMeasureClick, this),
          this._map
            .on('mousemove', this._handleMeasureMove, this)
            .on('mouseout', this._handleMapMouseOut, this)
            .on('move', this._centerCaptureMarker, this)
            .on('resize', this._setCaptureMarkerIcon, this),
          L.DomEvent.on(this._container, 'mouseenter', this._handleMapMouseOut, this),
          this._updateMeasureStartedNoPoints(),
          this._map.fire('measurestart', null, !1);
      },
      _finishMeasure: function() {
        var e = L.extend({}, this._resultsModel, { points: this._latlngs });
        (this._locked = !1),
          L.DomEvent.off(this._container, 'mouseover', this._handleMapMouseOut, this),
          this._clearMeasure(),
          this._captureMarker
            .off('mouseout', this._handleMapMouseOut, this)
            .off('dblclick', this._handleMeasureDoubleClick, this)
            .off('click', this._handleMeasureClick, this),
          this._map
            .off('mousemove', this._handleMeasureMove, this)
            .off('mouseout', this._handleMapMouseOut, this)
            .off('move', this._centerCaptureMarker, this)
            .off('resize', this._setCaptureMarkerIcon, this),
          this._layer.removeLayer(this._measureVertexes).removeLayer(this._captureMarker),
          (this._measureVertexes = null),
          this._updateMeasureNotStarted(),
          this._collapse(),
          this._map.fire('measurefinish', e, !1);
      },
      _clearMeasure: function() {
        (this._latlngs = []),
          (this._resultsModel = null),
          this._measureVertexes.clearLayers(),
          this._measureDrag && this._layer.removeLayer(this._measureDrag),
          this._measureArea && this._layer.removeLayer(this._measureArea),
          this._measureBoundary && this._layer.removeLayer(this._measureBoundary),
          (this._measureDrag = null),
          (this._measureArea = null),
          (this._measureBoundary = null);
      },
      _centerCaptureMarker: function() {
        this._captureMarker.setLatLng(this._map.getCenter());
      },
      _setCaptureMarkerIcon: function() {
        this._captureMarker.setIcon(L.divIcon({ iconSize: this._map.getSize().multiplyBy(2) }));
      },
      _getMeasurementDisplayStrings: function(e) {
        function t(e, t, n, i, s) {
          if (t && o[t]) {
            var a = r(e, o[t], i, s);
            if (n && o[n]) {
              a = a + ' (' + r(e, o[n], i, s) + ')';
            }
            return a;
          }
          return r(e, null, i, s);
        }
        function r(e, t, r, o) {
          var n = {
              acres: 'akrów',
              feet: 'stóp',
              kilometers: 'kilometrów',
              hectares: 'hektarów',
              meters: 'metrów',
              miles: 'mil',
              sqfeet: 'stóp kwadratowych',
              sqmeters: 'metrów kwadratowych',
              sqmiles: 'mil kwadratowych'
            },
            i = L.extend({ factor: 1, decimals: 0 }, t);
          return [
            (0, d.numberFormat)(e * i.factor, i.decimals, r || ',', o || '.'),
            n[i.display] || i.display
          ].join(' ');
        }
        var o = this.options.units;
        return {
          lengthDisplay: t(
            e.length,
            this.options.primaryLengthUnit,
            this.options.secondaryLengthUnit,
            this.options.decPoint,
            this.options.thousandsSep
          ),
          areaDisplay: t(
            e.area,
            this.options.primaryAreaUnit,
            this.options.secondaryAreaUnit,
            this.options.decPoint,
            this.options.thousandsSep
          )
        };
      },
      _updateResults: function() {
        var e = (0, l.default)(this._latlngs),
          t = (this._resultsModel = L.extend({}, e, this._getMeasurementDisplayStrings(e), {
            pointCount: this._latlngs.length
          }));
        this.$results.innerHTML = g({ model: t });
      },
      _handleMeasureMove: function(e) {
        this._measureDrag
          ? this._measureDrag.setLatLng(e.latlng)
          : (this._measureDrag = L.circleMarker(
              e.latlng,
              this._symbols.getSymbol('measureDrag')
            ).addTo(this._layer)),
          this._measureDrag.bringToFront();
      },
      _handleMeasureDoubleClick: function() {
        var e = this._latlngs,
          t = void 0,
          r = void 0;
        if ((this._finishMeasure(), e.length)) {
          e.length > 2 && e.push(e[0]);
          var o = (0, l.default)(e);
          1 === e.length
            ? ((t = L.circleMarker(e[0], this._symbols.getSymbol('resultPoint'))),
              (r = b({ model: o })))
            : 2 === e.length
              ? ((t = L.polyline(e, this._symbols.getSymbol('resultLine'))),
                (r = _({ model: L.extend({}, o, this._getMeasurementDisplayStrings(o)) })))
              : ((t = L.polygon(e, this._symbols.getSymbol('resultArea'))),
                (r = j({ model: L.extend({}, o, this._getMeasurementDisplayStrings(o)) })));
          var n = L.DomUtil.create('div', '');
          n.innerHTML = r;
          var i = (0, c.selectOne)('.js-zoomto', n);
          i &&
            (L.DomEvent.on(i, 'click', L.DomEvent.stop),
            L.DomEvent.on(
              i,
              'click',
              function() {
                t.getBounds
                  ? this._map.fitBounds(t.getBounds(), { padding: [20, 20], maxZoom: 17 })
                  : t.getLatLng && this._map.panTo(t.getLatLng());
              },
              this
            ));
          var s = (0, c.selectOne)('.js-deletemarkup', n);
          s &&
            (L.DomEvent.on(s, 'click', L.DomEvent.stop),
            L.DomEvent.on(
              s,
              'click',
              function() {
                this._layer.removeLayer(t);
              },
              this
            )),
            t.addTo(this._layer),
            t.bindPopup(n, this.options.popupOptions),
            t.getBounds
              ? t.openPopup(t.getBounds().getCenter())
              : t.getLatLng && t.openPopup(t.getLatLng());
        }
      },
      _handleMeasureClick: function(e) {
        var t = this._map.mouseEventToLatLng(e.originalEvent),
          r = this._latlngs[this._latlngs.length - 1],
          o = this._symbols.getSymbol('measureVertex');
        (r && t.equals(r)) ||
          (this._latlngs.push(t),
          this._addMeasureArea(this._latlngs),
          this._addMeasureBoundary(this._latlngs),
          this._measureVertexes.eachLayer(function(e) {
            e.setStyle(o), e._path && e._path.setAttribute('class', o.className);
          }),
          this._addNewVertex(t),
          this._measureBoundary && this._measureBoundary.bringToFront(),
          this._measureVertexes.bringToFront()),
          this._updateResults(),
          this._updateMeasureStartedWithPoints();
      },
      _handleMapMouseOut: function() {
        this._measureDrag &&
          (this._layer.removeLayer(this._measureDrag), (this._measureDrag = null));
      },
      _addNewVertex: function(e) {
        L.circleMarker(e, this._symbols.getSymbol('measureVertexActive')).addTo(
          this._measureVertexes
        );
      },
      _addMeasureArea: function(e) {
        if (e.length < 3)
          return void (
            this._measureArea &&
            (this._layer.removeLayer(this._measureArea), (this._measureArea = null))
          );
        this._measureArea
          ? this._measureArea.setLatLngs(e)
          : (this._measureArea = L.polygon(e, this._symbols.getSymbol('measureArea')).addTo(
              this._layer
            ));
      },
      _addMeasureBoundary: function(e) {
        if (e.length < 2)
          return void (
            this._measureBoundary &&
            (this._layer.removeLayer(this._measureBoundary), (this._measureBoundary = null))
          );
        this._measureBoundary
          ? this._measureBoundary.setLatLngs(e)
          : (this._measureBoundary = L.polyline(
              e,
              this._symbols.getSymbol('measureBoundary')
            ).addTo(this._layer));
      }
    })),
      L.Map.mergeOptions({ measureControl: !1 }),
      L.Map.addInitHook(function() {
        this.options.measureControl && (this.measureControl = new L.Control.Measure().addTo(this));
      }),
      (L.control.measure = function(e) {
        return new L.Control.Measure(e);
      });
  },
  function(e, t) {},
  function(e, t, r) {
    function o(e, t, r) {
      var o = h.imports._.templateSettings || h;
      r && c(e, t, r) && (t = void 0), (e = d(e)), (t = n({}, t, o, a));
      var j,
        w,
        x = n({}, t.imports, o.imports, a),
        M = f(x),
        k = s(x, M),
        O = 0,
        L = t.interpolate || b,
        P = "__p += '",
        E = RegExp(
          (t.escape || b).source +
            '|' +
            L.source +
            '|' +
            (L === p ? g : b).source +
            '|' +
            (t.evaluate || b).source +
            '|$',
          'g'
        ),
        C = 'sourceURL' in t ? '//# sourceURL=' + t.sourceURL + '\n' : '';
      e.replace(E, function(t, r, o, n, i, s) {
        return (
          o || (o = n),
          (P += e.slice(O, s).replace(_, u)),
          r && ((j = !0), (P += "' +\n__e(" + r + ") +\n'")),
          i && ((w = !0), (P += "';\n" + i + ";\n__p += '")),
          o && (P += "' +\n((__t = (" + o + ")) == null ? '' : __t) +\n'"),
          (O = s + t.length),
          t
        );
      }),
        (P += "';\n");
      var S = t.variable;
      S || (P = 'with (obj) {\n' + P + '\n}\n'),
        (P = (w ? P.replace(m, '') : P).replace(y, '$1').replace(v, '$1;')),
        (P =
          'function(' +
          (S || 'obj') +
          ') {\n' +
          (S ? '' : 'obj || (obj = {});\n') +
          "var __t, __p = ''" +
          (j ? ', __e = _.escape' : '') +
          (w
            ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n"
            : ';\n') +
          P +
          'return __p\n}');
      var A = i(function() {
        return Function(M, C + 'return ' + P).apply(void 0, k);
      });
      if (((A.source = P), l(A))) throw A;
      return A;
    }
    var n = r(32),
      i = r(62),
      s = r(65),
      a = r(66),
      u = r(67),
      l = r(22),
      c = r(15),
      f = r(68),
      p = r(25),
      h = r(71),
      d = r(26),
      m = /\b__p \+= '';/g,
      y = /\b(__p \+=) '' \+/g,
      v = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
      g = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
      b = /($^)/,
      _ = /['\n\r\u2028\u2029\\]/g;
    e.exports = o;
  },
  function(e, t, r) {
    var o = r(33),
      n = r(44),
      i = r(50),
      s = n(function(e, t, r, n) {
        o(t, i(t), e, n);
      });
    e.exports = s;
  },
  function(e, t, r) {
    function o(e, t, r, o) {
      var s = !r;
      r || (r = {});
      for (var a = -1, u = t.length; ++a < u; ) {
        var l = t[a],
          c = o ? o(r[l], e[l], l, r, e) : void 0;
        void 0 === c && (c = e[l]), s ? i(r, l, c) : n(r, l, c);
      }
      return r;
    }
    var n = r(34),
      i = r(8);
    e.exports = o;
  },
  function(e, t, r) {
    function o(e, t, r) {
      var o = e[t];
      (a.call(e, t) && i(o, r) && (void 0 !== r || t in e)) || n(e, t, r);
    }
    var n = r(8),
      i = r(6),
      s = Object.prototype,
      a = s.hasOwnProperty;
    e.exports = o;
  },
  function(e, t, r) {
    function o(e, t) {
      var r = i(e, t);
      return n(r) ? r : void 0;
    }
    var n = r(36),
      i = r(43);
    e.exports = o;
  },
  function(e, t, r) {
    function o(e) {
      return !(!s(e) || i(e)) && (n(e) ? d : l).test(a(e));
    }
    var n = r(10),
      i = r(40),
      s = r(2),
      a = r(42),
      u = /[\\^$.*+?()[\]{}|]/g,
      l = /^\[object .+?Constructor\]$/,
      c = Function.prototype,
      f = Object.prototype,
      p = c.toString,
      h = f.hasOwnProperty,
      d = RegExp(
        '^' +
          p
            .call(h)
            .replace(u, '\\$&')
            .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') +
          '$'
      );
    e.exports = o;
  },
  function(e, t) {
    var r;
    r = (function() {
      return this;
    })();
    try {
      r = r || Function('return this')() || (0, eval)('this');
    } catch (e) {
      'object' == typeof window && (r = window);
    }
    e.exports = r;
  },
  function(e, t, r) {
    function o(e) {
      var t = s.call(e, u),
        r = e[u];
      try {
        e[u] = void 0;
        var o = !0;
      } catch (e) {}
      var n = a.call(e);
      return o && (t ? (e[u] = r) : delete e[u]), n;
    }
    var n = r(4),
      i = Object.prototype,
      s = i.hasOwnProperty,
      a = i.toString,
      u = n ? n.toStringTag : void 0;
    e.exports = o;
  },
  function(e, t) {
    function r(e) {
      return n.call(e);
    }
    var o = Object.prototype,
      n = o.toString;
    e.exports = r;
  },
  function(e, t, r) {
    function o(e) {
      return !!i && i in e;
    }
    var n = r(41),
      i = (function() {
        var e = /[^.]+$/.exec((n && n.keys && n.keys.IE_PROTO) || '');
        return e ? 'Symbol(src)_1.' + e : '';
      })();
    e.exports = o;
  },
  function(e, t, r) {
    var o = r(5),
      n = o['__core-js_shared__'];
    e.exports = n;
  },
  function(e, t) {
    function r(e) {
      if (null != e) {
        try {
          return n.call(e);
        } catch (e) {}
        try {
          return e + '';
        } catch (e) {}
      }
      return '';
    }
    var o = Function.prototype,
      n = o.toString;
    e.exports = r;
  },
  function(e, t) {
    function r(e, t) {
      return null == e ? void 0 : e[t];
    }
    e.exports = r;
  },
  function(e, t, r) {
    function o(e) {
      return n(function(t, r) {
        var o = -1,
          n = r.length,
          s = n > 1 ? r[n - 1] : void 0,
          a = n > 2 ? r[2] : void 0;
        for (
          s = e.length > 3 && 'function' == typeof s ? (n--, s) : void 0,
            a && i(r[0], r[1], a) && ((s = n < 3 ? void 0 : s), (n = 1)),
            t = Object(t);
          ++o < n;

        ) {
          var u = r[o];
          u && e(t, u, o, s);
        }
        return t;
      });
    }
    var n = r(12),
      i = r(15);
    e.exports = o;
  },
  function(e, t, r) {
    function o(e, t, r) {
      return (
        (t = i(void 0 === t ? e.length - 1 : t, 0)),
        function() {
          for (var o = arguments, s = -1, a = i(o.length - t, 0), u = Array(a); ++s < a; )
            u[s] = o[t + s];
          s = -1;
          for (var l = Array(t + 1); ++s < t; ) l[s] = o[s];
          return (l[t] = r(u)), n(e, this, l);
        }
      );
    }
    var n = r(14),
      i = Math.max;
    e.exports = o;
  },
  function(e, t, r) {
    var o = r(47),
      n = r(49),
      i = n(o);
    e.exports = i;
  },
  function(e, t, r) {
    var o = r(48),
      n = r(9),
      i = r(13),
      s = n
        ? function(e, t) {
            return n(e, 'toString', {
              configurable: !0,
              enumerable: !1,
              value: o(t),
              writable: !0
            });
          }
        : i;
    e.exports = s;
  },
  function(e, t) {
    function r(e) {
      return function() {
        return e;
      };
    }
    e.exports = r;
  },
  function(e, t) {
    function r(e) {
      var t = 0,
        r = 0;
      return function() {
        var s = i(),
          a = n - (s - r);
        if (((r = s), a > 0)) {
          if (++t >= o) return arguments[0];
        } else t = 0;
        return e.apply(void 0, arguments);
      };
    }
    var o = 800,
      n = 16,
      i = Date.now;
    e.exports = r;
  },
  function(e, t, r) {
    function o(e) {
      return s(e) ? n(e, !0) : i(e);
    }
    var n = r(18),
      i = r(60),
      s = r(7);
    e.exports = o;
  },
  function(e, t) {
    function r(e, t) {
      for (var r = -1, o = Array(e); ++r < e; ) o[r] = t(r);
      return o;
    }
    e.exports = r;
  },
  function(e, t, r) {
    var o = r(53),
      n = r(1),
      i = Object.prototype,
      s = i.hasOwnProperty,
      a = i.propertyIsEnumerable,
      u = o(
        (function() {
          return arguments;
        })()
      )
        ? o
        : function(e) {
            return n(e) && s.call(e, 'callee') && !a.call(e, 'callee');
          };
    e.exports = u;
  },
  function(e, t, r) {
    function o(e) {
      return i(e) && n(e) == s;
    }
    var n = r(0),
      i = r(1),
      s = '[object Arguments]';
    e.exports = o;
  },
  function(e, t, r) {
    (function(e) {
      var o = r(5),
        n = r(55),
        i = 'object' == typeof t && t && !t.nodeType && t,
        s = i && 'object' == typeof e && e && !e.nodeType && e,
        a = s && s.exports === i,
        u = a ? o.Buffer : void 0,
        l = u ? u.isBuffer : void 0,
        c = l || n;
      e.exports = c;
    }.call(t, r(20)(e)));
  },
  function(e, t) {
    function r() {
      return !1;
    }
    e.exports = r;
  },
  function(e, t, r) {
    var o = r(57),
      n = r(58),
      i = r(59),
      s = i && i.isTypedArray,
      a = s ? n(s) : o;
    e.exports = a;
  },
  function(e, t, r) {
    function o(e) {
      return s(e) && i(e.length) && !!a[n(e)];
    }
    var n = r(0),
      i = r(16),
      s = r(1),
      a = {};
    (a['[object Float32Array]'] = a['[object Float64Array]'] = a['[object Int8Array]'] = a[
      '[object Int16Array]'
    ] = a['[object Int32Array]'] = a['[object Uint8Array]'] = a['[object Uint8ClampedArray]'] = a[
      '[object Uint16Array]'
    ] = a['[object Uint32Array]'] = !0),
      (a['[object Arguments]'] = a['[object Array]'] = a['[object ArrayBuffer]'] = a[
        '[object Boolean]'
      ] = a['[object DataView]'] = a['[object Date]'] = a['[object Error]'] = a[
        '[object Function]'
      ] = a['[object Map]'] = a['[object Number]'] = a['[object Object]'] = a[
        '[object RegExp]'
      ] = a['[object Set]'] = a['[object String]'] = a['[object WeakMap]'] = !1),
      (e.exports = o);
  },
  function(e, t) {
    function r(e) {
      return function(t) {
        return e(t);
      };
    }
    e.exports = r;
  },
  function(e, t, r) {
    (function(e) {
      var o = r(11),
        n = 'object' == typeof t && t && !t.nodeType && t,
        i = n && 'object' == typeof e && e && !e.nodeType && e,
        s = i && i.exports === n,
        a = s && o.process,
        u = (function() {
          try {
            return a && a.binding && a.binding('util');
          } catch (e) {}
        })();
      e.exports = u;
    }.call(t, r(20)(e)));
  },
  function(e, t, r) {
    function o(e) {
      if (!n(e)) return s(e);
      var t = i(e),
        r = [];
      for (var o in e) ('constructor' != o || (!t && u.call(e, o))) && r.push(o);
      return r;
    }
    var n = r(2),
      i = r(21),
      s = r(61),
      a = Object.prototype,
      u = a.hasOwnProperty;
    e.exports = o;
  },
  function(e, t) {
    function r(e) {
      var t = [];
      if (null != e) for (var r in Object(e)) t.push(r);
      return t;
    }
    e.exports = r;
  },
  function(e, t, r) {
    var o = r(14),
      n = r(12),
      i = r(22),
      s = n(function(e, t) {
        try {
          return o(e, void 0, t);
        } catch (e) {
          return i(e) ? e : new Error(e);
        }
      });
    e.exports = s;
  },
  function(e, t, r) {
    function o(e) {
      if (!s(e) || n(e) != a) return !1;
      var t = i(e);
      if (null === t) return !0;
      var r = f.call(t, 'constructor') && t.constructor;
      return 'function' == typeof r && r instanceof r && c.call(r) == p;
    }
    var n = r(0),
      i = r(64),
      s = r(1),
      a = '[object Object]',
      u = Function.prototype,
      l = Object.prototype,
      c = u.toString,
      f = l.hasOwnProperty,
      p = c.call(Object);
    e.exports = o;
  },
  function(e, t, r) {
    var o = r(23),
      n = o(Object.getPrototypeOf, Object);
    e.exports = n;
  },
  function(e, t, r) {
    function o(e, t) {
      return n(t, function(t) {
        return e[t];
      });
    }
    var n = r(24);
    e.exports = o;
  },
  function(e, t, r) {
    function o(e, t, r, o) {
      return void 0 === e || (n(e, i[r]) && !s.call(o, r)) ? t : e;
    }
    var n = r(6),
      i = Object.prototype,
      s = i.hasOwnProperty;
    e.exports = o;
  },
  function(e, t) {
    function r(e) {
      return '\\' + o[e];
    }
    var o = { '\\': '\\', "'": "'", '\n': 'n', '\r': 'r', '\u2028': 'u2028', '\u2029': 'u2029' };
    e.exports = r;
  },
  function(e, t, r) {
    function o(e) {
      return s(e) ? n(e) : i(e);
    }
    var n = r(18),
      i = r(69),
      s = r(7);
    e.exports = o;
  },
  function(e, t, r) {
    function o(e) {
      if (!n(e)) return i(e);
      var t = [];
      for (var r in Object(e)) a.call(e, r) && 'constructor' != r && t.push(r);
      return t;
    }
    var n = r(21),
      i = r(70),
      s = Object.prototype,
      a = s.hasOwnProperty;
    e.exports = o;
  },
  function(e, t, r) {
    var o = r(23),
      n = o(Object.keys, Object);
    e.exports = n;
  },
  function(e, t, r) {
    var o = r(72),
      n = r(77),
      i = r(78),
      s = r(25),
      a = { escape: n, evaluate: i, interpolate: s, variable: '', imports: { _: { escape: o } } };
    e.exports = a;
  },
  function(e, t, r) {
    function o(e) {
      return (e = i(e)), e && a.test(e) ? e.replace(s, n) : e;
    }
    var n = r(73),
      i = r(26),
      s = /[&<>"']/g,
      a = RegExp(s.source);
    e.exports = o;
  },
  function(e, t, r) {
    var o = r(74),
      n = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' },
      i = o(n);
    e.exports = i;
  },
  function(e, t) {
    function r(e) {
      return function(t) {
        return null == e ? void 0 : e[t];
      };
    }
    e.exports = r;
  },
  function(e, t, r) {
    function o(e) {
      if ('string' == typeof e) return e;
      if (s(e)) return i(e, o) + '';
      if (a(e)) return c ? c.call(e) : '';
      var t = e + '';
      return '0' == t && 1 / e == -u ? '-0' : t;
    }
    var n = r(4),
      i = r(24),
      s = r(19),
      a = r(76),
      u = 1 / 0,
      l = n ? n.prototype : void 0,
      c = l ? l.toString : void 0;
    e.exports = o;
  },
  function(e, t, r) {
    function o(e) {
      return 'symbol' == typeof e || (i(e) && n(e) == s);
    }
    var n = r(0),
      i = r(1),
      s = '[object Symbol]';
    e.exports = o;
  },
  function(e, t) {
    var r = /<%-([\s\S]+?)%>/g;
    e.exports = r;
  },
  function(e, t) {
    var r = /<%([\s\S]+?)%>/g;
    e.exports = r;
  },
  function(e, t, r) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.default = {
        acres: { factor: 24711e-8, display: 'acres', decimals: 2 },
        feet: { factor: 3.2808, display: 'feet', decimals: 0 },
        kilometers: { factor: 0.001, display: 'kilometers', decimals: 2 },
        hectares: { factor: 1e-4, display: 'hectares', decimals: 2 },
        meters: { factor: 1, display: 'meters', decimals: 0 },
        miles: { factor: 3.2808 / 5280, display: 'miles', decimals: 2 },
        sqfeet: { factor: 10.7639, display: 'sqfeet', decimals: 0 },
        sqmeters: { factor: 1, display: 'sqmeters', decimals: 0 },
        sqmiles: { factor: 3.86102e-7, display: 'sqmiles', decimals: 2 }
      });
  },
  function(e, t, r) {
    'use strict';
    function o(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function n(e) {
      return e < 10 ? '0' + e.toString() : e.toString();
    }
    function i(e, t, r) {
      var o = Math.abs(e),
        i = Math.floor(o),
        s = Math.floor(60 * (o - i)),
        a = Math.round(3600 * (o - i - s / 60) * 100) / 100,
        u = o === e ? t : r;
      return n(i) + '&deg; ' + n(s) + "' " + n(a) + '" ' + u;
    }
    function s(e) {
      var t = e[e.length - 1],
        r = e.map(function(e) {
          return [e.lat, e.lng];
        }),
        o = L.polyline(r),
        n = L.polygon(r),
        s = 1e3 * (0, u.default)(o.toGeoJSON(), { units: 'kilometers' }),
        a = (0, c.default)(n.toGeoJSON());
      return {
        lastCoord: {
          dd: { x: t.lng, y: t.lat },
          dms: { x: i(t.lng, 'E', 'W'), y: i(t.lat, 'N', 'S') }
        },
        length: s,
        area: a
      };
    }
    Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = s);
    var a = r(81),
      u = o(a),
      l = r(84),
      c = o(l);
  },
  function(e, t, r) {
    'use strict';
    function o(e, t) {
      if (((t = t || {}), !Object(s.d)(t))) throw new Error('options is invalid');
      if (!e) throw new Error('geojson is required');
      return Object(i.b)(
        e,
        function(e, r) {
          var o = r.geometry.coordinates;
          return e + Object(n.a)(o[0], o[1], t);
        },
        0
      );
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var n = r(82),
      i = r(27),
      s = r(3);
    t.default = o;
  },
  function(e, t, r) {
    'use strict';
    function o(e, t, r) {
      if (((r = r || {}), !Object(i.d)(r))) throw new Error('options is invalid');
      var o = r.units,
        s = Object(n.a)(e),
        a = Object(n.a)(t),
        u = Object(i.a)(a[1] - s[1]),
        l = Object(i.a)(a[0] - s[0]),
        c = Object(i.a)(s[1]),
        f = Object(i.a)(a[1]),
        p = Math.pow(Math.sin(u / 2), 2) + Math.pow(Math.sin(l / 2), 2) * Math.cos(c) * Math.cos(f);
      return Object(i.g)(2 * Math.atan2(Math.sqrt(p), Math.sqrt(1 - p)), o);
    }
    var n = r(83),
      i = r(3);
    t.a = o;
  },
  function(e, t, r) {
    'use strict';
    function o(e) {
      if (!e) throw new Error('coord is required');
      if ('Feature' === e.type && null !== e.geometry && 'Point' === e.geometry.type)
        return e.geometry.coordinates;
      if ('Point' === e.type) return e.coordinates;
      if (Array.isArray(e) && e.length >= 2 && void 0 === e[0].length && void 0 === e[1].length)
        return e;
      throw new Error('coord must be GeoJSON Point or an Array of numbers');
    }
    r.d(t, 'a', function() {
      return o;
    });
    r(3);
  },
  function(e, t, r) {
    'use strict';
    function o(e) {
      return Object(u.a)(
        e,
        function(e, t) {
          return e + n(t);
        },
        0
      );
    }
    function n(e) {
      var t,
        r = 0;
      switch (e.type) {
        case 'Polygon':
          return i(e.coordinates);
        case 'MultiPolygon':
          for (t = 0; t < e.coordinates.length; t++) r += i(e.coordinates[t]);
          return r;
        case 'Point':
        case 'MultiPoint':
        case 'LineString':
        case 'MultiLineString':
          return 0;
        case 'GeometryCollection':
          for (t = 0; t < e.geometries.length; t++) r += n(e.geometries[t]);
          return r;
      }
    }
    function i(e) {
      var t = 0;
      if (e && e.length > 0) {
        t += Math.abs(s(e[0]));
        for (var r = 1; r < e.length; r++) t -= Math.abs(s(e[r]));
      }
      return t;
    }
    function s(e) {
      var t,
        r,
        o,
        n,
        i,
        s,
        u,
        c = 0,
        f = e.length;
      if (f > 2) {
        for (u = 0; u < f; u++)
          u === f - 2
            ? ((n = f - 2), (i = f - 1), (s = 0))
            : u === f - 1 ? ((n = f - 1), (i = 0), (s = 1)) : ((n = u), (i = u + 1), (s = u + 2)),
            (t = e[n]),
            (r = e[i]),
            (o = e[s]),
            (c += (a(o[0]) - a(t[0])) * Math.sin(a(r[1])));
        c = c * l * l / 2;
      }
      return c;
    }
    function a(e) {
      return e * Math.PI / 180;
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var u = r(27),
      l = 6378137;
    t.default = o;
  },
  function(e, t, r) {
    'use strict';
    function o(e, t) {
      return t || (t = document), t.querySelector(e);
    }
    function n(e, t) {
      return t || (t = document), Array.prototype.slice.call(t.querySelectorAll(e));
    }
    function i(e) {
      if (e) return e.setAttribute('style', 'display:none;'), e;
    }
    function s(e) {
      if (e) return e.removeAttribute('style'), e;
    }
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.selectOne = o),
      (t.selectAll = n),
      (t.hide = i),
      (t.show = s);
  },
  function(e, t, r) {
    'use strict';
    function o(e, t) {
      if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var n = (function() {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var o = t[r];
            (o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              'value' in o && (o.writable = !0),
              Object.defineProperty(e, o.key, o);
          }
        }
        return function(t, r, o) {
          return r && e(t.prototype, r), o && e(t, o), t;
        };
      })(),
      i = { activeColor: '#ABE67E', completedColor: '#C8F2BE' },
      s = (function() {
        function e(t) {
          o(this, e), (this._options = L.extend({}, i, this._options, t));
        }
        return (
          n(e, [
            {
              key: 'getSymbol',
              value: function(e) {
                return {
                  measureDrag: {
                    clickable: !1,
                    radius: 4,
                    color: this._options.activeColor,
                    weight: 2,
                    opacity: 0.7,
                    fillColor: this._options.activeColor,
                    fillOpacity: 0.5,
                    className: 'layer-measuredrag'
                  },
                  measureArea: {
                    clickable: !1,
                    stroke: !1,
                    fillColor: this._options.activeColor,
                    fillOpacity: 0.2,
                    className: 'layer-measurearea'
                  },
                  measureBoundary: {
                    clickable: !1,
                    color: this._options.activeColor,
                    weight: 2,
                    opacity: 0.9,
                    fill: !1,
                    className: 'layer-measureboundary'
                  },
                  measureVertex: {
                    clickable: !1,
                    radius: 4,
                    color: this._options.activeColor,
                    weight: 2,
                    opacity: 1,
                    fillColor: this._options.activeColor,
                    fillOpacity: 0.7,
                    className: 'layer-measurevertex'
                  },
                  measureVertexActive: {
                    clickable: !1,
                    radius: 4,
                    color: this._options.activeColor,
                    weight: 2,
                    opacity: 1,
                    fillColor: this._options.activeColor,
                    fillOpacity: 1,
                    className: 'layer-measurevertex active'
                  },
                  resultArea: {
                    clickable: !0,
                    color: this._options.completedColor,
                    weight: 2,
                    opacity: 0.9,
                    fillColor: this._options.completedColor,
                    fillOpacity: 0.2,
                    className: 'layer-measure-resultarea'
                  },
                  resultLine: {
                    clickable: !0,
                    color: this._options.completedColor,
                    weight: 3,
                    opacity: 0.9,
                    fill: !1,
                    className: 'layer-measure-resultline'
                  },
                  resultPoint: {
                    clickable: !0,
                    radius: 4,
                    color: this._options.completedColor,
                    weight: 2,
                    opacity: 1,
                    fillColor: this._options.completedColor,
                    fillOpacity: 0.7,
                    className: 'layer-measure-resultpoint'
                  }
                }[e];
              }
            }
          ]),
          e
        );
      })();
    t.default = s;
  },
  function(e, t, r) {
    'use strict';
    function o(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : '.',
        o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ',',
        n = e < 0 ? '-' : '',
        i = Math.abs(+e || 0),
        s = parseInt(i.toFixed(t), 10) + '',
        a = s.length > 3 ? s.length % 3 : 0;
      return [
        n,
        a ? s.substr(0, a) + o : '',
        s.substr(a).replace(/(\d{3})(?=\d)/g, '$1' + o),
        t
          ? '' +
            r +
            Math.abs(i - s)
              .toFixed(t)
              .slice(2)
          : ''
      ].join('');
    }
    Object.defineProperty(t, '__esModule', { value: !0 }), (t.numberFormat = o);
  },
  function(e, t, r) {
    'use strict';
    function o(e) {
      return e && e.__esModule ? e : { default: e };
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var n = r(89);
    Object.defineProperty(t, 'controlTemplate', {
      enumerable: !0,
      get: function() {
        return o(n).default;
      }
    });
    var i = r(90);
    Object.defineProperty(t, 'resultsTemplate', {
      enumerable: !0,
      get: function() {
        return o(i).default;
      }
    });
    var s = r(91);
    Object.defineProperty(t, 'pointPopupTemplate', {
      enumerable: !0,
      get: function() {
        return o(s).default;
      }
    });
    var a = r(92);
    Object.defineProperty(t, 'linePopupTemplate', {
      enumerable: !0,
      get: function() {
        return o(a).default;
      }
    });
    var u = r(93);
    Object.defineProperty(t, 'areaPopupTemplate', {
      enumerable: !0,
      get: function() {
        return o(u).default;
      }
    });
  },
  function(e, t, r) {
    e.exports =
      '<a class="{{ model.className }}-toggle js-toggle" href=# title="Pomiar odległości i powierzchni">Pomiar</a> <div class="{{ model.className }}-interaction js-interaction"> <div class="js-startprompt startprompt"> <h3>Pomiar odległości i powierzchni</h3> <ul class=tasks> <a href=# class="js-start start">Utwórz nowy pomiar</a> </ul> </div> <div class=js-measuringprompt> <h3>Pomiar odległości i powierzchni</h3> <p class=js-starthelp>Rozpocznij tworzenie nowego pomiaru poprzez dodanie punktów na mapie</p> <div class="js-results results"></div> <ul class="js-measuretasks tasks"> <li><a href=# class="js-cancel cancel">Anuluj</a></li> <li><a href=# class="js-finish finish">Zakończ pomiar</a></li> </ul> </div> </div> ';
  },
  function(e, t, r) {
    e.exports =
      '<div class=group> <p class="lastpoint heading">Ostatni punkt</p> <p>{{ model.lastCoord.dms.y }} <span class=coorddivider>/</span> {{ model.lastCoord.dms.x }}</p> <p>{{ numberFormat(model.lastCoord.dd.y, 6) }} <span class=coorddivider>/</span> {{ numberFormat(model.lastCoord.dd.x, 6) }}</p> </div> <% if (model.pointCount > 1) { %> <div class=group> <p><span class=heading>Długość ścieżki</span> {{ model.lengthDisplay }}</p> </div> <% } %> <% if (model.pointCount > 2) { %> <div class=group> <p><span class=heading>Powierzchnia</span> {{ model.areaDisplay }}</p> </div> <% } %> ';
  },
  function(e, t, r) {
    e.exports =
      '<h3>Punkt lokalizacji</h3> <p>{{ model.lastCoord.dms.y }} <span class=coorddivider>/</span> {{ model.lastCoord.dms.x }}</p> <p>{{ numberFormat(model.lastCoord.dd.y, 6) }} <span class=coorddivider>/</span> {{ numberFormat(model.lastCoord.dd.x, 6) }}</p> <ul class=tasks> <li><a href=# class="js-zoomto zoomto">Środek w tej lokalizacji</a></li> <li><a href=# class="js-deletemarkup deletemarkup">Skasuj</a></li> </ul> ';
  },
  function(e, t, r) {
    e.exports =
      '<h3>Pomiar liniowy</h3> <p>{{ model.lengthDisplay }}</p> <ul class=tasks> <li><a href=# class="js-zoomto zoomto">Środek tej linii</a></li> <li><a href=# class="js-deletemarkup deletemarkup">Skasuj</a></li> </ul> ';
  },
  function(e, t, r) {
    e.exports =
      '<h3>Pomiar powierzchni</h3> <p>{{ model.areaDisplay }}</p> <p>{{ model.lengthDisplay }} Obwód</p> <ul class=tasks> <li><a href=# class="js-zoomto zoomto">Środek tego obszaru</a></li> <li><a href=# class="js-deletemarkup deletemarkup">Skasuj</a></li> </ul> ';
  }
]);
