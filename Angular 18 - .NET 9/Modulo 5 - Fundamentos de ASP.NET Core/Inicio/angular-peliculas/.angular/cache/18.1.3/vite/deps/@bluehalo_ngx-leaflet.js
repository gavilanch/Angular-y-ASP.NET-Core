import {
  require_leaflet_src
} from "./chunk-UFNVIQTO.js";
import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  IterableDiffers,
  KeyValueDiffers,
  NgModule,
  NgZone,
  Output,
  setClassMetadata,
  ɵɵNgOnChangesFeature,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵlistener,
  ɵɵresolveWindow
} from "./chunk-OB6S4OGV.js";
import {
  __toESM
} from "./chunk-KBUIKKCC.js";

// node_modules/@bluehalo/ngx-leaflet/fesm2022/bluehalo-ngx-leaflet.mjs
var import_leaflet = __toESM(require_leaflet_src(), 1);
var LeafletUtil = class {
  static mapToArray(map2) {
    const toReturn = [];
    for (const k in map2) {
      if (map2.hasOwnProperty(k)) {
        toReturn.push(map2[k]);
      }
    }
    return toReturn;
  }
  static handleEvent(zone, eventEmitter, event) {
    if (0 < eventEmitter.observers.length) {
      zone.run(() => {
        eventEmitter.emit(event);
      });
    }
  }
};
var _LeafletDirective = class _LeafletDirective {
  constructor(element, zone) {
    this.element = element;
    this.zone = zone;
    this.DEFAULT_ZOOM = 1;
    this.DEFAULT_CENTER = (0, import_leaflet.latLng)(38.907192, -77.036871);
    this.DEFAULT_FPZ_OPTIONS = {};
    this.fitBoundsOptions = this.DEFAULT_FPZ_OPTIONS;
    this.panOptions = this.DEFAULT_FPZ_OPTIONS;
    this.zoomOptions = this.DEFAULT_FPZ_OPTIONS;
    this.zoomPanOptions = this.DEFAULT_FPZ_OPTIONS;
    this.options = {};
    this.mapReady = new EventEmitter();
    this.zoomChange = new EventEmitter();
    this.centerChange = new EventEmitter();
    this.onClick = new EventEmitter();
    this.onDoubleClick = new EventEmitter();
    this.onMouseDown = new EventEmitter();
    this.onMouseUp = new EventEmitter();
    this.onMouseMove = new EventEmitter();
    this.onMouseOver = new EventEmitter();
    this.onMouseOut = new EventEmitter();
    this.onMapMove = new EventEmitter();
    this.onMapMoveStart = new EventEmitter();
    this.onMapMoveEnd = new EventEmitter();
    this.onMapZoom = new EventEmitter();
    this.onMapZoomStart = new EventEmitter();
    this.onMapZoomEnd = new EventEmitter();
  }
  ngOnInit() {
    this.zone.runOutsideAngular(() => {
      this.map = (0, import_leaflet.map)(this.element.nativeElement, this.options);
      this.addMapEventListeners();
    });
    if (null != this.center && null != this.zoom) {
      this.setView(this.center, this.zoom);
    }
    if (null != this.fitBounds) {
      this.setFitBounds(this.fitBounds);
    }
    if (null != this.maxBounds) {
      this.setMaxBounds(this.maxBounds);
    }
    if (null != this.minZoom) {
      this.setMinZoom(this.minZoom);
    }
    if (null != this.maxZoom) {
      this.setMaxZoom(this.maxZoom);
    }
    this.doResize();
    this.mapReady.emit(this.map);
  }
  ngOnChanges(changes) {
    if (changes["zoom"] && changes["center"] && null != this.zoom && null != this.center) {
      this.setView(changes["center"].currentValue, changes["zoom"].currentValue);
    } else if (changes["zoom"]) {
      this.setZoom(changes["zoom"].currentValue);
    } else if (changes["center"]) {
      this.setCenter(changes["center"].currentValue);
    }
    if (changes["fitBounds"]) {
      this.setFitBounds(changes["fitBounds"].currentValue);
    }
    if (changes["maxBounds"]) {
      this.setMaxBounds(changes["maxBounds"].currentValue);
    }
    if (changes["minZoom"]) {
      this.setMinZoom(changes["minZoom"].currentValue);
    }
    if (changes["maxZoom"]) {
      this.setMaxZoom(changes["maxZoom"].currentValue);
    }
  }
  ngOnDestroy() {
    if (null != this.map) {
      this.map.remove();
    }
  }
  getMap() {
    return this.map;
  }
  onResize() {
    this.delayResize();
  }
  addMapEventListeners() {
    const registerEventHandler = (eventName, handler) => {
      this.map.on(eventName, handler);
    };
    registerEventHandler("click", (e) => LeafletUtil.handleEvent(this.zone, this.onClick, e));
    registerEventHandler("dblclick", (e) => LeafletUtil.handleEvent(this.zone, this.onDoubleClick, e));
    registerEventHandler("mousedown", (e) => LeafletUtil.handleEvent(this.zone, this.onMouseDown, e));
    registerEventHandler("mouseup", (e) => LeafletUtil.handleEvent(this.zone, this.onMouseUp, e));
    registerEventHandler("mouseover", (e) => LeafletUtil.handleEvent(this.zone, this.onMouseOver, e));
    registerEventHandler("mouseout", (e) => LeafletUtil.handleEvent(this.zone, this.onMouseOut, e));
    registerEventHandler("mousemove", (e) => LeafletUtil.handleEvent(this.zone, this.onMouseMove, e));
    registerEventHandler("zoomstart", (e) => LeafletUtil.handleEvent(this.zone, this.onMapZoomStart, e));
    registerEventHandler("zoom", (e) => LeafletUtil.handleEvent(this.zone, this.onMapZoom, e));
    registerEventHandler("zoomend", (e) => LeafletUtil.handleEvent(this.zone, this.onMapZoomEnd, e));
    registerEventHandler("movestart", (e) => LeafletUtil.handleEvent(this.zone, this.onMapMoveStart, e));
    registerEventHandler("move", (e) => LeafletUtil.handleEvent(this.zone, this.onMapMove, e));
    registerEventHandler("moveend", (e) => LeafletUtil.handleEvent(this.zone, this.onMapMoveEnd, e));
    const outputUpdateHandler = () => {
      const zoom = this.map.getZoom();
      if (zoom !== this.zoom) {
        this.zoom = zoom;
        LeafletUtil.handleEvent(this.zone, this.zoomChange, zoom);
      }
      const center = this.map.getCenter();
      if (null != center || null != this.center) {
        if ((null == center || null == this.center) && center !== this.center || center.lat !== this.center.lat || center.lng !== this.center.lng) {
          this.center = center;
          LeafletUtil.handleEvent(this.zone, this.centerChange, center);
        }
      }
    };
    registerEventHandler("moveend", outputUpdateHandler);
    registerEventHandler("zoomend", outputUpdateHandler);
  }
  /**
   * Resize the map to fit it's parent container
   */
  doResize() {
    this.zone.runOutsideAngular(() => {
      if (null != this.map) {
        this.map.invalidateSize({});
      }
    });
  }
  /**
   * Manage a delayed resize of the component
   */
  delayResize() {
    if (null != this.resizeTimer) {
      clearTimeout(this.resizeTimer);
    }
    this.resizeTimer = setTimeout(this.doResize.bind(this), 200);
  }
  /**
   * Set the view (center/zoom) all at once
   * @param center The new center
   * @param zoom The new zoom level
   */
  setView(center, zoom) {
    if (null != this.map && null != center && null != zoom) {
      this.map.setView(center, zoom, this.zoomPanOptions);
    }
  }
  /**
   * Set the map zoom level
   * @param zoom the new zoom level for the map
   */
  setZoom(zoom) {
    if (null != this.map && null != zoom) {
      this.map.setZoom(zoom, this.zoomOptions);
    }
  }
  /**
   * Set the center of the map
   * @param center the center point
   */
  setCenter(center) {
    if (null != this.map && null != center) {
      this.map.panTo(center, this.panOptions);
    }
  }
  /**
   * Fit the map to the bounds
   * @param latLngBounds the boundary to set
   */
  setFitBounds(latLngBounds) {
    if (null != this.map && null != latLngBounds) {
      this.map.fitBounds(latLngBounds, this.fitBoundsOptions);
    }
  }
  /**
   * Set the map's max bounds
   * @param latLngBounds the boundary to set
   */
  setMaxBounds(latLngBounds) {
    if (null != this.map && null != latLngBounds) {
      this.map.setMaxBounds(latLngBounds);
    }
  }
  /**
   * Set the map's min zoom
   * @param number the new min zoom
   */
  setMinZoom(zoom) {
    if (null != this.map && null != zoom) {
      this.map.setMinZoom(zoom);
    }
  }
  /**
   * Set the map's min zoom
   * @param number the new min zoom
   */
  setMaxZoom(zoom) {
    if (null != this.map && null != zoom) {
      this.map.setMaxZoom(zoom);
    }
  }
};
_LeafletDirective.ɵfac = function LeafletDirective_Factory(ɵt) {
  return new (ɵt || _LeafletDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
};
_LeafletDirective.ɵdir = ɵɵdefineDirective({
  type: _LeafletDirective,
  selectors: [["", "leaflet", ""]],
  hostBindings: function LeafletDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("resize", function LeafletDirective_resize_HostBindingHandler() {
        return ctx.onResize();
      }, false, ɵɵresolveWindow);
    }
  },
  inputs: {
    fitBoundsOptions: [0, "leafletFitBoundsOptions", "fitBoundsOptions"],
    panOptions: [0, "leafletPanOptions", "panOptions"],
    zoomOptions: [0, "leafletZoomOptions", "zoomOptions"],
    zoomPanOptions: [0, "leafletZoomPanOptions", "zoomPanOptions"],
    options: [0, "leafletOptions", "options"],
    zoom: [0, "leafletZoom", "zoom"],
    center: [0, "leafletCenter", "center"],
    fitBounds: [0, "leafletFitBounds", "fitBounds"],
    maxBounds: [0, "leafletMaxBounds", "maxBounds"],
    minZoom: [0, "leafletMinZoom", "minZoom"],
    maxZoom: [0, "leafletMaxZoom", "maxZoom"]
  },
  outputs: {
    mapReady: "leafletMapReady",
    zoomChange: "leafletZoomChange",
    centerChange: "leafletCenterChange",
    onClick: "leafletClick",
    onDoubleClick: "leafletDoubleClick",
    onMouseDown: "leafletMouseDown",
    onMouseUp: "leafletMouseUp",
    onMouseMove: "leafletMouseMove",
    onMouseOver: "leafletMouseOver",
    onMouseOut: "leafletMouseOut",
    onMapMove: "leafletMapMove",
    onMapMoveStart: "leafletMapMoveStart",
    onMapMoveEnd: "leafletMapMoveEnd",
    onMapZoom: "leafletMapZoom",
    onMapZoomStart: "leafletMapZoomStart",
    onMapZoomEnd: "leafletMapZoomEnd"
  },
  features: [ɵɵNgOnChangesFeature]
});
var LeafletDirective = _LeafletDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LeafletDirective, [{
    type: Directive,
    args: [{
      selector: "[leaflet]"
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: NgZone
  }], {
    fitBoundsOptions: [{
      type: Input,
      args: ["leafletFitBoundsOptions"]
    }],
    panOptions: [{
      type: Input,
      args: ["leafletPanOptions"]
    }],
    zoomOptions: [{
      type: Input,
      args: ["leafletZoomOptions"]
    }],
    zoomPanOptions: [{
      type: Input,
      args: ["leafletZoomPanOptions"]
    }],
    options: [{
      type: Input,
      args: ["leafletOptions"]
    }],
    mapReady: [{
      type: Output,
      args: ["leafletMapReady"]
    }],
    zoom: [{
      type: Input,
      args: ["leafletZoom"]
    }],
    zoomChange: [{
      type: Output,
      args: ["leafletZoomChange"]
    }],
    center: [{
      type: Input,
      args: ["leafletCenter"]
    }],
    centerChange: [{
      type: Output,
      args: ["leafletCenterChange"]
    }],
    fitBounds: [{
      type: Input,
      args: ["leafletFitBounds"]
    }],
    maxBounds: [{
      type: Input,
      args: ["leafletMaxBounds"]
    }],
    minZoom: [{
      type: Input,
      args: ["leafletMinZoom"]
    }],
    maxZoom: [{
      type: Input,
      args: ["leafletMaxZoom"]
    }],
    onClick: [{
      type: Output,
      args: ["leafletClick"]
    }],
    onDoubleClick: [{
      type: Output,
      args: ["leafletDoubleClick"]
    }],
    onMouseDown: [{
      type: Output,
      args: ["leafletMouseDown"]
    }],
    onMouseUp: [{
      type: Output,
      args: ["leafletMouseUp"]
    }],
    onMouseMove: [{
      type: Output,
      args: ["leafletMouseMove"]
    }],
    onMouseOver: [{
      type: Output,
      args: ["leafletMouseOver"]
    }],
    onMouseOut: [{
      type: Output,
      args: ["leafletMouseOut"]
    }],
    onMapMove: [{
      type: Output,
      args: ["leafletMapMove"]
    }],
    onMapMoveStart: [{
      type: Output,
      args: ["leafletMapMoveStart"]
    }],
    onMapMoveEnd: [{
      type: Output,
      args: ["leafletMapMoveEnd"]
    }],
    onMapZoom: [{
      type: Output,
      args: ["leafletMapZoom"]
    }],
    onMapZoomStart: [{
      type: Output,
      args: ["leafletMapZoomStart"]
    }],
    onMapZoomEnd: [{
      type: Output,
      args: ["leafletMapZoomEnd"]
    }],
    onResize: [{
      type: HostListener,
      args: ["window:resize", []]
    }]
  });
})();
var LeafletDirectiveWrapper = class {
  constructor(leafletDirective) {
    this.leafletDirective = leafletDirective;
  }
  init() {
  }
  getMap() {
    return this.leafletDirective.getMap();
  }
};
var _LeafletLayerDirective = class _LeafletLayerDirective {
  constructor(leafletDirective, zone) {
    this.zone = zone;
    this.onAdd = new EventEmitter();
    this.onRemove = new EventEmitter();
    this.leafletDirective = new LeafletDirectiveWrapper(leafletDirective);
  }
  ngOnInit() {
    this.leafletDirective.init();
  }
  ngOnDestroy() {
    if (null != this.layer) {
      this.removeLayerEventListeners(this.layer);
      this.layer.remove();
    }
  }
  ngOnChanges(changes) {
    if (changes["layer"]) {
      const p = changes["layer"].previousValue;
      const n = changes["layer"].currentValue;
      this.zone.runOutsideAngular(() => {
        if (null != p) {
          this.removeLayerEventListeners(p);
          p.remove();
        }
        if (null != n) {
          this.addLayerEventListeners(n);
          this.leafletDirective.getMap().addLayer(n);
        }
      });
    }
  }
  addLayerEventListeners(l) {
    this.onAddLayerHandler = (e) => LeafletUtil.handleEvent(this.zone, this.onAdd, e);
    l.on("add", this.onAddLayerHandler);
    this.onRemoveLayerHandler = (e) => LeafletUtil.handleEvent(this.zone, this.onRemove, e);
    l.on("remove", this.onRemoveLayerHandler);
  }
  removeLayerEventListeners(l) {
    l.off("add", this.onAddLayerHandler);
    l.off("remove", this.onRemoveLayerHandler);
  }
};
_LeafletLayerDirective.ɵfac = function LeafletLayerDirective_Factory(ɵt) {
  return new (ɵt || _LeafletLayerDirective)(ɵɵdirectiveInject(LeafletDirective), ɵɵdirectiveInject(NgZone));
};
_LeafletLayerDirective.ɵdir = ɵɵdefineDirective({
  type: _LeafletLayerDirective,
  selectors: [["", "leafletLayer", ""]],
  inputs: {
    layer: [0, "leafletLayer", "layer"]
  },
  outputs: {
    onAdd: "leafletLayerAdd",
    onRemove: "leafletLayerRemove"
  },
  features: [ɵɵNgOnChangesFeature]
});
var LeafletLayerDirective = _LeafletLayerDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LeafletLayerDirective, [{
    type: Directive,
    args: [{
      selector: "[leafletLayer]"
    }]
  }], () => [{
    type: LeafletDirective
  }, {
    type: NgZone
  }], {
    layer: [{
      type: Input,
      args: ["leafletLayer"]
    }],
    onAdd: [{
      type: Output,
      args: ["leafletLayerAdd"]
    }],
    onRemove: [{
      type: Output,
      args: ["leafletLayerRemove"]
    }]
  });
})();
var _LeafletLayersDirective = class _LeafletLayersDirective {
  // Set/get the layers
  set layers(v) {
    this.layersValue = v;
    this.updateLayers();
  }
  get layers() {
    return this.layersValue;
  }
  constructor(leafletDirective, differs, zone) {
    this.differs = differs;
    this.zone = zone;
    this.leafletDirective = new LeafletDirectiveWrapper(leafletDirective);
    this.layersDiffer = this.differs.find([]).create();
  }
  ngDoCheck() {
    this.updateLayers();
  }
  ngOnInit() {
    this.leafletDirective.init();
    this.updateLayers();
  }
  ngOnDestroy() {
    this.layers = [];
  }
  /**
   * Update the state of the layers.
   * We use an iterable differ to synchronize the map layers with the state of the bound layers array.
   * This is important because it allows us to react to changes to the contents of the array as well
   * as changes to the actual array instance.
   */
  updateLayers() {
    const map2 = this.leafletDirective.getMap();
    if (null != map2 && null != this.layersDiffer) {
      const changes = this.layersDiffer.diff(this.layersValue);
      if (null != changes) {
        this.zone.runOutsideAngular(() => {
          changes.forEachRemovedItem((c) => {
            map2.removeLayer(c.item);
          });
          changes.forEachAddedItem((c) => {
            map2.addLayer(c.item);
          });
        });
      }
    }
  }
};
_LeafletLayersDirective.ɵfac = function LeafletLayersDirective_Factory(ɵt) {
  return new (ɵt || _LeafletLayersDirective)(ɵɵdirectiveInject(LeafletDirective), ɵɵdirectiveInject(IterableDiffers), ɵɵdirectiveInject(NgZone));
};
_LeafletLayersDirective.ɵdir = ɵɵdefineDirective({
  type: _LeafletLayersDirective,
  selectors: [["", "leafletLayers", ""]],
  inputs: {
    layers: [0, "leafletLayers", "layers"]
  }
});
var LeafletLayersDirective = _LeafletLayersDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LeafletLayersDirective, [{
    type: Directive,
    args: [{
      selector: "[leafletLayers]"
    }]
  }], () => [{
    type: LeafletDirective
  }, {
    type: IterableDiffers
  }, {
    type: NgZone
  }], {
    layers: [{
      type: Input,
      args: ["leafletLayers"]
    }]
  });
})();
var LeafletControlLayersChanges = class {
  constructor() {
    this.layersRemoved = 0;
    this.layersChanged = 0;
    this.layersAdded = 0;
  }
  changed() {
    return !(this.layersRemoved === 0 && this.layersChanged === 0 && this.layersAdded === 0);
  }
};
var LeafletControlLayersWrapper = class {
  constructor(zone, layersControlReady) {
    this.zone = zone;
    this.layersControlReady = layersControlReady;
  }
  getLayersControl() {
    return this.layersControl;
  }
  init(controlConfig, controlOptions) {
    const baseLayers = controlConfig.baseLayers || {};
    const overlays = controlConfig.overlays || {};
    this.zone.runOutsideAngular(() => {
      this.layersControl = import_leaflet.control.layers(baseLayers, overlays, controlOptions);
    });
    this.layersControlReady.emit(this.layersControl);
    return this.layersControl;
  }
  applyBaseLayerChanges(changes) {
    let results = new LeafletControlLayersChanges();
    if (null != this.layersControl) {
      results = this.applyChanges(changes, this.layersControl.addBaseLayer);
    }
    return results;
  }
  applyOverlayChanges(changes) {
    let results = new LeafletControlLayersChanges();
    if (null != this.layersControl) {
      results = this.applyChanges(changes, this.layersControl.addOverlay);
    }
    return results;
  }
  applyChanges(changes, addFn) {
    const results = new LeafletControlLayersChanges();
    if (null != changes) {
      this.zone.runOutsideAngular(() => {
        changes.forEachChangedItem((c) => {
          this.layersControl.removeLayer(c.previousValue);
          addFn.call(this.layersControl, c.currentValue, c.key);
          results.layersChanged++;
        });
        changes.forEachRemovedItem((c) => {
          this.layersControl.removeLayer(c.previousValue);
          results.layersRemoved++;
        });
        changes.forEachAddedItem((c) => {
          addFn.call(this.layersControl, c.currentValue, c.key);
          results.layersAdded++;
        });
      });
    }
    return results;
  }
};
var LeafletControlLayersConfig = class {
  constructor() {
    this.baseLayers = {};
    this.overlays = {};
  }
};
var _LeafletLayersControlDirective = class _LeafletLayersControlDirective {
  set layersControlConfig(v) {
    if (null == v) {
      v = new LeafletControlLayersConfig();
    }
    if (null == v.baseLayers) {
      v.baseLayers = {};
    }
    if (null == v.overlays) {
      v.overlays = {};
    }
    this.layersControlConfigValue = v;
    this.updateLayers();
  }
  get layersControlConfig() {
    return this.layersControlConfigValue;
  }
  constructor(leafletDirective, differs, zone) {
    this.differs = differs;
    this.zone = zone;
    this.layersControlReady = new EventEmitter();
    this.leafletDirective = new LeafletDirectiveWrapper(leafletDirective);
    this.controlLayers = new LeafletControlLayersWrapper(this.zone, this.layersControlReady);
    this.baseLayersDiffer = this.differs.find({}).create();
    this.overlaysDiffer = this.differs.find({}).create();
  }
  ngOnInit() {
    this.leafletDirective.init();
    this.zone.runOutsideAngular(() => {
      this.controlLayers.init({}, this.layersControlOptions).addTo(this.leafletDirective.getMap());
    });
    this.updateLayers();
  }
  ngOnDestroy() {
    this.layersControlConfig = {
      baseLayers: {},
      overlays: {}
    };
    this.controlLayers.getLayersControl().remove();
  }
  ngDoCheck() {
    this.updateLayers();
  }
  updateLayers() {
    const map2 = this.leafletDirective.getMap();
    const layersControl = this.controlLayers.getLayersControl();
    if (null != map2 && null != layersControl) {
      if (null != this.baseLayersDiffer && null != this.layersControlConfigValue.baseLayers) {
        const changes = this.baseLayersDiffer.diff(this.layersControlConfigValue.baseLayers);
        this.controlLayers.applyBaseLayerChanges(changes);
      }
      if (null != this.overlaysDiffer && null != this.layersControlConfigValue.overlays) {
        const changes = this.overlaysDiffer.diff(this.layersControlConfigValue.overlays);
        this.controlLayers.applyOverlayChanges(changes);
      }
    }
  }
};
_LeafletLayersControlDirective.ɵfac = function LeafletLayersControlDirective_Factory(ɵt) {
  return new (ɵt || _LeafletLayersControlDirective)(ɵɵdirectiveInject(LeafletDirective), ɵɵdirectiveInject(KeyValueDiffers), ɵɵdirectiveInject(NgZone));
};
_LeafletLayersControlDirective.ɵdir = ɵɵdefineDirective({
  type: _LeafletLayersControlDirective,
  selectors: [["", "leafletLayersControl", ""]],
  inputs: {
    layersControlConfig: [0, "leafletLayersControl", "layersControlConfig"],
    layersControlOptions: [0, "leafletLayersControlOptions", "layersControlOptions"]
  },
  outputs: {
    layersControlReady: "leafletLayersControlReady"
  }
});
var LeafletLayersControlDirective = _LeafletLayersControlDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LeafletLayersControlDirective, [{
    type: Directive,
    args: [{
      selector: "[leafletLayersControl]"
    }]
  }], () => [{
    type: LeafletDirective
  }, {
    type: KeyValueDiffers
  }, {
    type: NgZone
  }], {
    layersControlConfig: [{
      type: Input,
      args: ["leafletLayersControl"]
    }],
    layersControlOptions: [{
      type: Input,
      args: ["leafletLayersControlOptions"]
    }],
    layersControlReady: [{
      type: Output,
      args: ["leafletLayersControlReady"]
    }]
  });
})();
var _LeafletBaseLayersDirective = class _LeafletBaseLayersDirective {
  // Set/get baseLayers
  set baseLayers(v) {
    this.baseLayersValue = v;
    this.updateBaseLayers();
  }
  get baseLayers() {
    return this.baseLayersValue;
  }
  constructor(leafletDirective, differs, zone) {
    this.differs = differs;
    this.zone = zone;
    this.layersControlReady = new EventEmitter();
    this.leafletDirective = new LeafletDirectiveWrapper(leafletDirective);
    this.controlLayers = new LeafletControlLayersWrapper(this.zone, this.layersControlReady);
    this.baseLayersDiffer = this.differs.find({}).create();
  }
  ngOnDestroy() {
    this.baseLayers = {};
    if (null != this.controlLayers.getLayersControl()) {
      this.controlLayers.getLayersControl().remove();
    }
  }
  ngOnInit() {
    this.leafletDirective.init();
    this.zone.runOutsideAngular(() => {
      this.controlLayers.init({}, this.layersControlOptions).addTo(this.leafletDirective.getMap());
    });
    this.updateBaseLayers();
  }
  ngDoCheck() {
    this.updateBaseLayers();
  }
  updateBaseLayers() {
    const map2 = this.leafletDirective.getMap();
    const layersControl = this.controlLayers.getLayersControl();
    if (null != map2 && null != layersControl && null != this.baseLayersDiffer) {
      const changes = this.baseLayersDiffer.diff(this.baseLayersValue);
      const results = this.controlLayers.applyBaseLayerChanges(changes);
      if (results.changed()) {
        this.syncBaseLayer();
      }
    }
  }
  /**
   * Check the current base layer and change it to the new one if necessary
   */
  syncBaseLayer() {
    const map2 = this.leafletDirective.getMap();
    const layers = LeafletUtil.mapToArray(this.baseLayers);
    let foundLayer;
    map2.eachLayer((l) => {
      foundLayer = layers.find((bl) => l === bl);
    });
    if (null != foundLayer) {
      this.baseLayer = foundLayer;
    } else {
      if (layers.length > 0) {
        this.baseLayer = layers[0];
        this.zone.runOutsideAngular(() => {
          this.baseLayer.addTo(map2);
        });
      }
    }
  }
};
_LeafletBaseLayersDirective.ɵfac = function LeafletBaseLayersDirective_Factory(ɵt) {
  return new (ɵt || _LeafletBaseLayersDirective)(ɵɵdirectiveInject(LeafletDirective), ɵɵdirectiveInject(KeyValueDiffers), ɵɵdirectiveInject(NgZone));
};
_LeafletBaseLayersDirective.ɵdir = ɵɵdefineDirective({
  type: _LeafletBaseLayersDirective,
  selectors: [["", "leafletBaseLayers", ""]],
  inputs: {
    baseLayers: [0, "leafletBaseLayers", "baseLayers"],
    layersControlOptions: [0, "leafletLayersControlOptions", "layersControlOptions"]
  },
  outputs: {
    layersControlReady: "leafletLayersControlReady"
  }
});
var LeafletBaseLayersDirective = _LeafletBaseLayersDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LeafletBaseLayersDirective, [{
    type: Directive,
    args: [{
      selector: "[leafletBaseLayers]"
    }]
  }], () => [{
    type: LeafletDirective
  }, {
    type: KeyValueDiffers
  }, {
    type: NgZone
  }], {
    baseLayers: [{
      type: Input,
      args: ["leafletBaseLayers"]
    }],
    layersControlOptions: [{
      type: Input,
      args: ["leafletLayersControlOptions"]
    }],
    layersControlReady: [{
      type: Output,
      args: ["leafletLayersControlReady"]
    }]
  });
})();
var _LeafletModule = class _LeafletModule {
};
_LeafletModule.ɵfac = function LeafletModule_Factory(ɵt) {
  return new (ɵt || _LeafletModule)();
};
_LeafletModule.ɵmod = ɵɵdefineNgModule({
  type: _LeafletModule,
  declarations: [LeafletDirective, LeafletLayerDirective, LeafletLayersDirective, LeafletLayersControlDirective, LeafletBaseLayersDirective],
  exports: [LeafletDirective, LeafletLayerDirective, LeafletLayersDirective, LeafletLayersControlDirective, LeafletBaseLayersDirective]
});
_LeafletModule.ɵinj = ɵɵdefineInjector({});
var LeafletModule = _LeafletModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LeafletModule, [{
    type: NgModule,
    args: [{
      exports: [LeafletDirective, LeafletLayerDirective, LeafletLayersDirective, LeafletLayersControlDirective, LeafletBaseLayersDirective],
      declarations: [LeafletDirective, LeafletLayerDirective, LeafletLayersDirective, LeafletLayersControlDirective, LeafletBaseLayersDirective]
    }]
  }], null, null);
})();
var LeafletTileLayerDefinition = class _LeafletTileLayerDefinition {
  constructor(type, url, options) {
    this.type = type;
    this.url = url;
    this.options = options;
  }
  /**
   * Creates a TileLayer from the provided definition. This is a convenience function
   * to help with generating layers from objects.
   *
   * @param layerDef The layer to create
   * @returns {TileLayer} The TileLayer that has been created
   */
  static createTileLayer(layerDef) {
    let layer;
    switch (layerDef.type) {
      case "xyz":
        layer = (0, import_leaflet.tileLayer)(layerDef.url, layerDef.options);
        break;
      case "wms":
      default:
        layer = import_leaflet.tileLayer.wms(layerDef.url, layerDef.options);
        break;
    }
    return layer;
  }
  /**
   * Creates a TileLayer for each key in the incoming map. This is a convenience function
   * for generating an associative array of layers from an associative array of objects
   *
   * @param layerDefs A map of key to tile layer definition
   * @returns {{[p: string]: TileLayer}} A new map of key to TileLayer
   */
  static createTileLayers(layerDefs) {
    const layers = {};
    for (const k in layerDefs) {
      if (layerDefs.hasOwnProperty(k)) {
        layers[k] = _LeafletTileLayerDefinition.createTileLayer(layerDefs[k]);
      }
    }
    return layers;
  }
  /**
   * Create a Tile Layer from the current state of this object
   *
   * @returns {TileLayer} A new TileLayer
   */
  createTileLayer() {
    return _LeafletTileLayerDefinition.createTileLayer(this);
  }
};
export {
  LeafletBaseLayersDirective,
  LeafletControlLayersChanges,
  LeafletControlLayersConfig,
  LeafletControlLayersWrapper,
  LeafletDirective,
  LeafletDirectiveWrapper,
  LeafletLayerDirective,
  LeafletLayersControlDirective,
  LeafletLayersDirective,
  LeafletModule,
  LeafletTileLayerDefinition,
  LeafletUtil
};
//# sourceMappingURL=@bluehalo_ngx-leaflet.js.map
