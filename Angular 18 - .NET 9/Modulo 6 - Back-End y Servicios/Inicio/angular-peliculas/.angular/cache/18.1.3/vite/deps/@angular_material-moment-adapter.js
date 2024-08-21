import {
  require_moment
} from "./chunk-KGSZPRGE.js";
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE
} from "./chunk-CWEDFNET.js";
import "./chunk-QDDUXSGY.js";
import "./chunk-7JW4G3B7.js";
import {
  Inject,
  Injectable,
  InjectionToken,
  NgModule,
  Optional,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵinject
} from "./chunk-OB6S4OGV.js";
import {
  __toESM
} from "./chunk-KBUIKKCC.js";

// node_modules/@angular/material-moment-adapter/fesm2022/material-moment-adapter.mjs
var _rollupMoment = __toESM(require_moment(), 1);
var import_moment = __toESM(require_moment(), 1);
var moment = import_moment.default || _rollupMoment;
var MAT_MOMENT_DATE_ADAPTER_OPTIONS = new InjectionToken("MAT_MOMENT_DATE_ADAPTER_OPTIONS", {
  providedIn: "root",
  factory: MAT_MOMENT_DATE_ADAPTER_OPTIONS_FACTORY
});
function MAT_MOMENT_DATE_ADAPTER_OPTIONS_FACTORY() {
  return {
    useUtc: false
  };
}
function range(length, valueFunction) {
  const valuesArray = Array(length);
  for (let i = 0; i < length; i++) {
    valuesArray[i] = valueFunction(i);
  }
  return valuesArray;
}
var _MomentDateAdapter = class _MomentDateAdapter extends DateAdapter {
  constructor(dateLocale, _options) {
    super();
    this._options = _options;
    this.setLocale(dateLocale || moment.locale());
  }
  setLocale(locale) {
    super.setLocale(locale);
    let momentLocaleData = moment.localeData(locale);
    this._localeData = {
      firstDayOfWeek: momentLocaleData.firstDayOfWeek(),
      longMonths: momentLocaleData.months(),
      shortMonths: momentLocaleData.monthsShort(),
      dates: range(31, (i) => this.createDate(2017, 0, i + 1).format("D")),
      longDaysOfWeek: momentLocaleData.weekdays(),
      shortDaysOfWeek: momentLocaleData.weekdaysShort(),
      narrowDaysOfWeek: momentLocaleData.weekdaysMin()
    };
  }
  getYear(date) {
    return this.clone(date).year();
  }
  getMonth(date) {
    return this.clone(date).month();
  }
  getDate(date) {
    return this.clone(date).date();
  }
  getDayOfWeek(date) {
    return this.clone(date).day();
  }
  getMonthNames(style) {
    return style == "long" ? this._localeData.longMonths : this._localeData.shortMonths;
  }
  getDateNames() {
    return this._localeData.dates;
  }
  getDayOfWeekNames(style) {
    if (style == "long") {
      return this._localeData.longDaysOfWeek;
    }
    if (style == "short") {
      return this._localeData.shortDaysOfWeek;
    }
    return this._localeData.narrowDaysOfWeek;
  }
  getYearName(date) {
    return this.clone(date).format("YYYY");
  }
  getFirstDayOfWeek() {
    return this._localeData.firstDayOfWeek;
  }
  getNumDaysInMonth(date) {
    return this.clone(date).daysInMonth();
  }
  clone(date) {
    return date.clone().locale(this.locale);
  }
  createDate(year, month, date) {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      if (month < 0 || month > 11) {
        throw Error(`Invalid month index "${month}". Month index has to be between 0 and 11.`);
      }
      if (date < 1) {
        throw Error(`Invalid date "${date}". Date has to be greater than 0.`);
      }
    }
    const result = this._createMoment({
      year,
      month,
      date
    }).locale(this.locale);
    if (!result.isValid() && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw Error(`Invalid date "${date}" for month with index "${month}".`);
    }
    return result;
  }
  today() {
    return this._createMoment().locale(this.locale);
  }
  parse(value, parseFormat) {
    if (value && typeof value == "string") {
      return this._createMoment(value, parseFormat, this.locale);
    }
    return value ? this._createMoment(value).locale(this.locale) : null;
  }
  format(date, displayFormat) {
    date = this.clone(date);
    if (!this.isValid(date) && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw Error("MomentDateAdapter: Cannot format invalid date.");
    }
    return date.format(displayFormat);
  }
  addCalendarYears(date, years) {
    return this.clone(date).add({
      years
    });
  }
  addCalendarMonths(date, months) {
    return this.clone(date).add({
      months
    });
  }
  addCalendarDays(date, days) {
    return this.clone(date).add({
      days
    });
  }
  toIso8601(date) {
    return this.clone(date).format();
  }
  /**
   * Returns the given value if given a valid Moment or null. Deserializes valid ISO 8601 strings
   * (https://www.ietf.org/rfc/rfc3339.txt) and valid Date objects into valid Moments and empty
   * string into null. Returns an invalid date for all other values.
   */
  deserialize(value) {
    let date;
    if (value instanceof Date) {
      date = this._createMoment(value).locale(this.locale);
    } else if (this.isDateInstance(value)) {
      return this.clone(value);
    }
    if (typeof value === "string") {
      if (!value) {
        return null;
      }
      date = this._createMoment(value, moment.ISO_8601).locale(this.locale);
    }
    if (date && this.isValid(date)) {
      return this._createMoment(date).locale(this.locale);
    }
    return super.deserialize(value);
  }
  isDateInstance(obj) {
    return moment.isMoment(obj);
  }
  isValid(date) {
    return this.clone(date).isValid();
  }
  invalid() {
    return moment.invalid();
  }
  /** Creates a Moment instance while respecting the current UTC settings. */
  _createMoment(date, format, locale) {
    const {
      strict,
      useUtc
    } = this._options || {};
    return useUtc ? moment.utc(date, format, locale, strict) : moment(date, format, locale, strict);
  }
};
_MomentDateAdapter.ɵfac = function MomentDateAdapter_Factory(ɵt) {
  return new (ɵt || _MomentDateAdapter)(ɵɵinject(MAT_DATE_LOCALE, 8), ɵɵinject(MAT_MOMENT_DATE_ADAPTER_OPTIONS, 8));
};
_MomentDateAdapter.ɵprov = ɵɵdefineInjectable({
  token: _MomentDateAdapter,
  factory: _MomentDateAdapter.ɵfac
});
var MomentDateAdapter = _MomentDateAdapter;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MomentDateAdapter, [{
    type: Injectable
  }], () => [{
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [MAT_DATE_LOCALE]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    }]
  }], null);
})();
var MAT_MOMENT_DATE_FORMATS = {
  parse: {
    dateInput: "l"
  },
  display: {
    dateInput: "l",
    monthYearLabel: "MMM YYYY",
    dateA11yLabel: "LL",
    monthYearA11yLabel: "MMMM YYYY"
  }
};
var _MomentDateModule = class _MomentDateModule {
};
_MomentDateModule.ɵfac = function MomentDateModule_Factory(ɵt) {
  return new (ɵt || _MomentDateModule)();
};
_MomentDateModule.ɵmod = ɵɵdefineNgModule({
  type: _MomentDateModule
});
_MomentDateModule.ɵinj = ɵɵdefineInjector({
  providers: [{
    provide: DateAdapter,
    useClass: MomentDateAdapter,
    deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
  }]
});
var MomentDateModule = _MomentDateModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MomentDateModule, [{
    type: NgModule,
    args: [{
      providers: [{
        provide: DateAdapter,
        useClass: MomentDateAdapter,
        deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
      }]
    }]
  }], null, null);
})();
var _MatMomentDateModule = class _MatMomentDateModule {
};
_MatMomentDateModule.ɵfac = function MatMomentDateModule_Factory(ɵt) {
  return new (ɵt || _MatMomentDateModule)();
};
_MatMomentDateModule.ɵmod = ɵɵdefineNgModule({
  type: _MatMomentDateModule
});
_MatMomentDateModule.ɵinj = ɵɵdefineInjector({
  providers: [provideMomentDateAdapter()]
});
var MatMomentDateModule = _MatMomentDateModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatMomentDateModule, [{
    type: NgModule,
    args: [{
      providers: [provideMomentDateAdapter()]
    }]
  }], null, null);
})();
function provideMomentDateAdapter(formats = MAT_MOMENT_DATE_FORMATS, options) {
  const providers = [{
    provide: DateAdapter,
    useClass: MomentDateAdapter,
    deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
  }, {
    provide: MAT_DATE_FORMATS,
    useValue: formats
  }];
  if (options) {
    providers.push({
      provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS,
      useValue: options
    });
  }
  return providers;
}
export {
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS_FACTORY,
  MAT_MOMENT_DATE_FORMATS,
  MatMomentDateModule,
  MomentDateAdapter,
  MomentDateModule,
  provideMomentDateAdapter
};
//# sourceMappingURL=@angular_material-moment-adapter.js.map
