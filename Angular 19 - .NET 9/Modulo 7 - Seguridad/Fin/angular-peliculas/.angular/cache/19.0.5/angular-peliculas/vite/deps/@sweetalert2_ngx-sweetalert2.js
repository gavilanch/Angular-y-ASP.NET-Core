import {
  CommonModule,
  NgTemplateOutlet
} from "./chunk-BBOO2A72.js";
import {
  ApplicationRef,
  ChangeDetectionStrategy,
  Component,
  ComponentFactoryResolver$1,
  Directive,
  EventEmitter,
  Host,
  HostListener,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  NgModule,
  Output,
  TemplateRef,
  ViewContainerRef,
  setClassMetadata,
  ɵɵNgOnChangesFeature,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelementContainer,
  ɵɵinject,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵtemplate
} from "./chunk-QIAI6XP6.js";
import {
  Subject,
  takeUntil
} from "./chunk-ZSY7TSMJ.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-KBUIKKCC.js";

// node_modules/@sweetalert2/ngx-sweetalert2/fesm2022/sweetalert2-ngx-sweetalert2.mjs
function SwalPortalComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
var swalProviderToken = new InjectionToken("@sweetalert2/ngx-sweetalert2#swalProvider");
var fireOnInitToken = new InjectionToken("@sweetalert2/ngx-sweetalert2#fireOnInit");
var dismissOnDestroyToken = new InjectionToken("@sweetalert2/ngx-sweetalert2#dismissOnDestroy");
var SweetAlert2LoaderService = class _SweetAlert2LoaderService {
  swalProvider;
  swalPromiseCache;
  // Using any because Angular metadata generator does not understand a pure TS type here
  constructor(swalProvider) {
    this.swalProvider = swalProvider;
  }
  get swal() {
    if (!this.swalPromiseCache) {
      this.preloadSweetAlertLibrary();
    }
    return this.swalPromiseCache;
  }
  preloadSweetAlertLibrary() {
    if (this.swalPromiseCache) return;
    const libPromise = isLoader(this.swalProvider) ? this.swalProvider() : Promise.resolve(this.swalProvider);
    this.swalPromiseCache = libPromise.then((value) => isDefaultExport(value) ? value : value.default);
    function isLoader(value) {
      return typeof value === "function" && value.version === void 0;
    }
    function isDefaultExport(value) {
      return typeof value === "function";
    }
  }
  static ɵfac = function SweetAlert2LoaderService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SweetAlert2LoaderService)(ɵɵinject(swalProviderToken));
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _SweetAlert2LoaderService,
    factory: _SweetAlert2LoaderService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SweetAlert2LoaderService, [{
    type: Injectable
  }], function() {
    return [{
      type: void 0,
      decorators: [{
        type: Inject,
        args: [swalProviderToken]
      }]
    }];
  }, null);
})();
var SwalComponent = class _SwalComponent {
  sweetAlert2Loader;
  moduleLevelFireOnInit;
  moduleLevelDismissOnDestroy;
  title;
  titleText;
  text;
  html;
  footer;
  icon;
  iconColor;
  iconHtml;
  backdrop;
  toast;
  target;
  input;
  width;
  padding;
  background;
  position;
  grow;
  showClass;
  hideClass;
  customClass;
  timer;
  timerProgressBar;
  heightAuto;
  allowOutsideClick;
  allowEscapeKey;
  allowEnterKey;
  stopKeydownPropagation;
  keydownListenerCapture;
  showConfirmButton;
  showDenyButton;
  showCancelButton;
  confirmButtonText;
  denyButtonText;
  cancelButtonText;
  confirmButtonColor;
  denyButtonColor;
  cancelButtonColor;
  confirmButtonAriaLabel;
  denyButtonAriaLabel;
  cancelButtonAriaLabel;
  buttonsStyling;
  reverseButtons;
  focusConfirm;
  focusDeny;
  focusCancel;
  showCloseButton;
  closeButtonHtml;
  closeButtonAriaLabel;
  loaderHtml;
  showLoaderOnConfirm;
  preConfirm;
  preDeny;
  imageUrl;
  imageWidth;
  imageHeight;
  imageAlt;
  inputLabel;
  inputPlaceholder;
  inputValue;
  inputOptions;
  inputAutoTrim;
  inputAttributes;
  inputValidator;
  returnInputValueOnDeny;
  validationMessage;
  progressSteps;
  currentProgressStep;
  progressStepsDistance;
  scrollbarPadding;
  /**
   * An object of SweetAlert2 native options, useful if:
   *  - you don't want to use the @Inputs for practical/philosophical reasons ;
   *  - there are missing @Inputs because ngx-sweetalert2 isn't up-to-date with SweetAlert2's latest changes.
   *
   * /!\ Please note that setting this property does NOT erase what has been set before unless you specify the
   *     previous properties you want to erase again.
   *     Ie. setting { title: 'Title' } and then { text: 'Text' } will give { title: 'Title', text: 'Text' }.
   *
   * /!\ Be aware that the options defined in this object will override the @Inputs of the same name.
   */
  set swalOptions(options) {
    Object.assign(this, options);
    const touchedKeys = Object.keys(options);
    touchedKeys.forEach(this.markTouched);
  }
  /**
   * Computes the options object that will get passed to SweetAlert2.
   * Only the properties that have been set at least once on this component will be returned.
   * Mostly for internal usage.
   */
  get swalOptions() {
    return [...this.touchedProps].reduce((obj, key) => __spreadProps(__spreadValues({}, obj), {
      [key]: this[key]
    }), {});
  }
  /**
   * Whether to fire the modal as soon as the <swal> component is created and initialized in the view.
   * When left undefined (default), the value will be inherited from the module configuration, which is `false`.
   *
   * Example:
   *     <swal *ngIf="error" [title]="error.title" [text]="error.text" icon="error" [swalFireOnInit]="true"></swal>
   */
  swalFireOnInit;
  /**
   * Whether to dismiss the modal when the <swal> component is destroyed by Angular (for any reason) or not.
   * When left undefined (default), the value will be inherited from the module configuration, which is `true`.
   */
  swalDismissOnDestroy;
  set swalVisible(visible) {
    visible ? this.fire() : this.close();
  }
  get swalVisible() {
    return this.isCurrentlyShown;
  }
  /**
   * Modal lifecycle hook. Synchronously runs before the modal is shown on screen.
   */
  willOpen = new EventEmitter();
  /**
   * Modal lifecycle hook. Synchronously runs before the modal is shown on screen.
   */
  didOpen = new EventEmitter();
  /**
   * Modal lifecycle hook. Synchronously runs after the popup DOM has been updated (ie. just before the modal is
   * repainted on the screen).
   * Typically, this will happen after `Swal.fire()` or `Swal.update()`.
   * If you want to perform changes in the popup's DOM, that survive `Swal.update()`, prefer {@link didRender} over
   * {@link willOpen}.
   */
  didRender = new EventEmitter();
  /**
   * Modal lifecycle hook. Synchronously runs when the popup closes by user interaction (and not due to another popup
   * being fired).
   */
  willClose = new EventEmitter();
  /**
   * Modal lifecycle hook. Asynchronously runs after the popup has been disposed by user interaction (and not due to
   * another popup being fired).
   */
  didClose = new EventEmitter();
  /**
   * Modal lifecycle hook. Synchronously runs after popup has been destroyed either by user interaction or by another
   * popup.
   * If you have cleanup operations that you need to reliably execute each time a modal is closed, prefer
   * {@link didDestroy} over {@link didClose}.
   */
  didDestroy = new EventEmitter();
  /**
   * Emits when the user clicks "Confirm".
   * The event value ($event) can be either:
   *  - by default, just `true`,
   *  - when using {@link input}, the input value,
   *  - when using {@link preConfirm}, the return value of this function.
   *
   * Example:
   *     <swal (confirm)="handleConfirm($event)"></swal>
   *
   *     public handleConfirm(email: string): void {
   *         // ... save user email
   *     }
   */
  confirm = new EventEmitter();
  /**
   * Emits when the user clicks "Deny".
   * This event bears no value.
   * Use `(deny)` (along with {@link showDenyButton}) when you want a modal with three buttons (confirm, deny and
   * cancel), and/or when you want to handle clear refusal in a separate way than simple dismissal.
   *
   * Example:
   *     <swal (deny)="handleDeny()"></swal>
   *
   *     public handleDeny(): void {
   *     }
   */
  deny = new EventEmitter();
  /**
   * Emits when the user clicks "Cancel", or dismisses the modal by any other allowed way.
   * The event value ($event) is a string that explains how the modal was dismissed. It is `undefined` when
   * the modal was programmatically closed (through {@link close} for example).
   *
   * Example:
   *     <swal (dismiss)="handleDismiss($event)"></swal>
   *
   *     public handleDismiss(reason: DismissReason | undefined): void {
   *         // reason can be 'cancel', 'overlay', 'close', 'timer' or undefined.
   *         // ... do something
   *     }
   */
  dismiss = new EventEmitter();
  /**
   * This Set retains the properties that have been changed from @Inputs, so we can know precisely
   * what options we have to send to {@link Swal.fire}.
   */
  touchedProps = /* @__PURE__ */ new Set();
  /**
   * A function of signature `(propName: string): void` that adds a given property name to the list of
   * touched properties, ie. {@link touchedProps}.
   */
  markTouched = this.touchedProps.add.bind(this.touchedProps);
  /**
   * Is the SweetAlert2 modal represented by this component currently opened?
   */
  isCurrentlyShown = false;
  constructor(sweetAlert2Loader, moduleLevelFireOnInit, moduleLevelDismissOnDestroy) {
    this.sweetAlert2Loader = sweetAlert2Loader;
    this.moduleLevelFireOnInit = moduleLevelFireOnInit;
    this.moduleLevelDismissOnDestroy = moduleLevelDismissOnDestroy;
  }
  /**
   * Angular lifecycle hook.
   * Asks the SweetAlert2 loader service to preload the SweetAlert2 library, so it begins to be loaded only if there
   * is a <swal> component somewhere, and is probably fully loaded when the modal has to be displayed,
   * causing no delay.
   */
  ngOnInit() {
    this.sweetAlert2Loader.preloadSweetAlertLibrary();
  }
  /**
   * Angular lifecycle hook.
   * Fires the modal, if the component or module is configured to do so.
   */
  ngAfterViewInit() {
    const fireOnInit = this.swalFireOnInit === void 0 ? this.moduleLevelFireOnInit : this.swalFireOnInit;
    fireOnInit && this.fire();
  }
  /**
   * Angular lifecycle hook.
   * Updates the SweetAlert options, and if the modal is opened, asks SweetAlert to render it again.
   */
  ngOnChanges(changes) {
    Object.keys(changes).filter((key) => !key.startsWith("swal")).forEach(this.markTouched);
    void this.update();
  }
  /**
   * Angular lifecycle hook.
   * Closes the SweetAlert when the component is destroyed.
   */
  ngOnDestroy() {
    const dismissOnDestroy = this.swalDismissOnDestroy === void 0 ? this.moduleLevelDismissOnDestroy : this.swalDismissOnDestroy;
    dismissOnDestroy && this.close();
  }
  /**
   * Shows the SweetAlert.
   *
   * Returns the SweetAlert2 promise for convenience and use in code behind templates.
   * Otherwise, (confirm)="myHandler($event)" and (dismiss)="myHandler($event)" can be used in templates.
   */
  fire() {
    return __async(this, null, function* () {
      const swal = yield this.sweetAlert2Loader.swal;
      const userOptions = this.swalOptions;
      const options = __spreadProps(__spreadValues({}, userOptions), {
        //=> Handle modal lifecycle events
        willOpen: composeHook(userOptions.willOpen, (modalElement) => {
          this.willOpen.emit({
            modalElement
          });
        }),
        didOpen: composeHook(userOptions.didOpen, (modalElement) => {
          this.isCurrentlyShown = true;
          this.didOpen.emit({
            modalElement
          });
        }),
        didRender: composeHook(userOptions.didRender, (modalElement) => {
          this.didRender.emit({
            modalElement
          });
        }),
        willClose: composeHook(userOptions.willClose, (modalElement) => {
          this.isCurrentlyShown = false;
          this.willClose.emit({
            modalElement
          });
        }),
        didClose: composeHook(userOptions.didClose, () => {
          this.didClose.emit();
        }),
        didDestroy: composeHook(userOptions.didDestroy, () => {
          this.didDestroy.emit();
        })
      });
      const result = yield swal.fire(options);
      switch (true) {
        case result.isConfirmed:
          this.confirm.emit(result.value);
          break;
        case result.isDenied:
          this.deny.emit();
          break;
        case result.isDismissed:
          this.dismiss.emit(result.dismiss);
          break;
      }
      return result;
      function composeHook(userHook, libHook) {
        return (...args) => (libHook(...args), userHook?.(...args));
      }
    });
  }
  /**
   * Closes the modal, if opened.
   *
   * @param result The value that the modal will resolve with, triggering either (confirm), (deny) or (dismiss).
   *               If the argument is not passed, it is (dismiss) that will emit an `undefined` reason.
   *               {@see Swal.close}.
   */
  close(result) {
    return __async(this, null, function* () {
      if (!this.isCurrentlyShown) return;
      const swal = yield this.sweetAlert2Loader.swal;
      swal.close(result);
    });
  }
  /**
   * Updates SweetAlert2 options while the modal is opened, causing the modal to re-render.
   * If the modal is not opened, the component options will simply be updated and that's it.
   *
   * /!\ Please note that not all SweetAlert2 options are updatable while the modal is opened.
   *
   * @param options
   */
  update(options) {
    return __async(this, null, function* () {
      if (options) {
        this.swalOptions = options;
      }
      if (!this.isCurrentlyShown) return;
      const swal = yield this.sweetAlert2Loader.swal;
      const allOptions = this.swalOptions;
      const updatableOptions = Object.keys(allOptions).filter(swal.isUpdatableParameter).reduce((obj, key) => __spreadProps(__spreadValues({}, obj), {
        [key]: allOptions[key]
      }), {});
      swal.update(updatableOptions);
    });
  }
  static ɵfac = function SwalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SwalComponent)(ɵɵdirectiveInject(SweetAlert2LoaderService), ɵɵdirectiveInject(fireOnInitToken), ɵɵdirectiveInject(dismissOnDestroyToken));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _SwalComponent,
    selectors: [["swal"]],
    inputs: {
      title: "title",
      titleText: "titleText",
      text: "text",
      html: "html",
      footer: "footer",
      icon: "icon",
      iconColor: "iconColor",
      iconHtml: "iconHtml",
      backdrop: "backdrop",
      toast: "toast",
      target: "target",
      input: "input",
      width: "width",
      padding: "padding",
      background: "background",
      position: "position",
      grow: "grow",
      showClass: "showClass",
      hideClass: "hideClass",
      customClass: "customClass",
      timer: "timer",
      timerProgressBar: "timerProgressBar",
      heightAuto: "heightAuto",
      allowOutsideClick: "allowOutsideClick",
      allowEscapeKey: "allowEscapeKey",
      allowEnterKey: "allowEnterKey",
      stopKeydownPropagation: "stopKeydownPropagation",
      keydownListenerCapture: "keydownListenerCapture",
      showConfirmButton: "showConfirmButton",
      showDenyButton: "showDenyButton",
      showCancelButton: "showCancelButton",
      confirmButtonText: "confirmButtonText",
      denyButtonText: "denyButtonText",
      cancelButtonText: "cancelButtonText",
      confirmButtonColor: "confirmButtonColor",
      denyButtonColor: "denyButtonColor",
      cancelButtonColor: "cancelButtonColor",
      confirmButtonAriaLabel: "confirmButtonAriaLabel",
      denyButtonAriaLabel: "denyButtonAriaLabel",
      cancelButtonAriaLabel: "cancelButtonAriaLabel",
      buttonsStyling: "buttonsStyling",
      reverseButtons: "reverseButtons",
      focusConfirm: "focusConfirm",
      focusDeny: "focusDeny",
      focusCancel: "focusCancel",
      showCloseButton: "showCloseButton",
      closeButtonHtml: "closeButtonHtml",
      closeButtonAriaLabel: "closeButtonAriaLabel",
      loaderHtml: "loaderHtml",
      showLoaderOnConfirm: "showLoaderOnConfirm",
      preConfirm: "preConfirm",
      preDeny: "preDeny",
      imageUrl: "imageUrl",
      imageWidth: "imageWidth",
      imageHeight: "imageHeight",
      imageAlt: "imageAlt",
      inputLabel: "inputLabel",
      inputPlaceholder: "inputPlaceholder",
      inputValue: "inputValue",
      inputOptions: "inputOptions",
      inputAutoTrim: "inputAutoTrim",
      inputAttributes: "inputAttributes",
      inputValidator: "inputValidator",
      returnInputValueOnDeny: "returnInputValueOnDeny",
      validationMessage: "validationMessage",
      progressSteps: "progressSteps",
      currentProgressStep: "currentProgressStep",
      progressStepsDistance: "progressStepsDistance",
      scrollbarPadding: "scrollbarPadding",
      swalOptions: "swalOptions",
      swalFireOnInit: "swalFireOnInit",
      swalDismissOnDestroy: "swalDismissOnDestroy",
      swalVisible: "swalVisible"
    },
    outputs: {
      willOpen: "willOpen",
      didOpen: "didOpen",
      didRender: "didRender",
      willClose: "willClose",
      didClose: "didClose",
      didDestroy: "didDestroy",
      confirm: "confirm",
      deny: "deny",
      dismiss: "dismiss"
    },
    standalone: false,
    features: [ɵɵNgOnChangesFeature],
    decls: 0,
    vars: 0,
    template: function SwalComponent_Template(rf, ctx) {
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SwalComponent, [{
    type: Component,
    args: [{
      selector: "swal",
      template: "",
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], function() {
    return [{
      type: SweetAlert2LoaderService
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [fireOnInitToken]
      }]
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [dismissOnDestroyToken]
      }]
    }];
  }, {
    title: [{
      type: Input
    }],
    titleText: [{
      type: Input
    }],
    text: [{
      type: Input
    }],
    html: [{
      type: Input
    }],
    footer: [{
      type: Input
    }],
    icon: [{
      type: Input
    }],
    iconColor: [{
      type: Input
    }],
    iconHtml: [{
      type: Input
    }],
    backdrop: [{
      type: Input
    }],
    toast: [{
      type: Input
    }],
    target: [{
      type: Input
    }],
    input: [{
      type: Input
    }],
    width: [{
      type: Input
    }],
    padding: [{
      type: Input
    }],
    background: [{
      type: Input
    }],
    position: [{
      type: Input
    }],
    grow: [{
      type: Input
    }],
    showClass: [{
      type: Input
    }],
    hideClass: [{
      type: Input
    }],
    customClass: [{
      type: Input
    }],
    timer: [{
      type: Input
    }],
    timerProgressBar: [{
      type: Input
    }],
    heightAuto: [{
      type: Input
    }],
    allowOutsideClick: [{
      type: Input
    }],
    allowEscapeKey: [{
      type: Input
    }],
    allowEnterKey: [{
      type: Input
    }],
    stopKeydownPropagation: [{
      type: Input
    }],
    keydownListenerCapture: [{
      type: Input
    }],
    showConfirmButton: [{
      type: Input
    }],
    showDenyButton: [{
      type: Input
    }],
    showCancelButton: [{
      type: Input
    }],
    confirmButtonText: [{
      type: Input
    }],
    denyButtonText: [{
      type: Input
    }],
    cancelButtonText: [{
      type: Input
    }],
    confirmButtonColor: [{
      type: Input
    }],
    denyButtonColor: [{
      type: Input
    }],
    cancelButtonColor: [{
      type: Input
    }],
    confirmButtonAriaLabel: [{
      type: Input
    }],
    denyButtonAriaLabel: [{
      type: Input
    }],
    cancelButtonAriaLabel: [{
      type: Input
    }],
    buttonsStyling: [{
      type: Input
    }],
    reverseButtons: [{
      type: Input
    }],
    focusConfirm: [{
      type: Input
    }],
    focusDeny: [{
      type: Input
    }],
    focusCancel: [{
      type: Input
    }],
    showCloseButton: [{
      type: Input
    }],
    closeButtonHtml: [{
      type: Input
    }],
    closeButtonAriaLabel: [{
      type: Input
    }],
    loaderHtml: [{
      type: Input
    }],
    showLoaderOnConfirm: [{
      type: Input
    }],
    preConfirm: [{
      type: Input
    }],
    preDeny: [{
      type: Input
    }],
    imageUrl: [{
      type: Input
    }],
    imageWidth: [{
      type: Input
    }],
    imageHeight: [{
      type: Input
    }],
    imageAlt: [{
      type: Input
    }],
    inputLabel: [{
      type: Input
    }],
    inputPlaceholder: [{
      type: Input
    }],
    inputValue: [{
      type: Input
    }],
    inputOptions: [{
      type: Input
    }],
    inputAutoTrim: [{
      type: Input
    }],
    inputAttributes: [{
      type: Input
    }],
    inputValidator: [{
      type: Input
    }],
    returnInputValueOnDeny: [{
      type: Input
    }],
    validationMessage: [{
      type: Input
    }],
    progressSteps: [{
      type: Input
    }],
    currentProgressStep: [{
      type: Input
    }],
    progressStepsDistance: [{
      type: Input
    }],
    scrollbarPadding: [{
      type: Input
    }],
    swalOptions: [{
      type: Input
    }],
    swalFireOnInit: [{
      type: Input
    }],
    swalDismissOnDestroy: [{
      type: Input
    }],
    swalVisible: [{
      type: Input
    }],
    willOpen: [{
      type: Output
    }],
    didOpen: [{
      type: Output
    }],
    didRender: [{
      type: Output
    }],
    willClose: [{
      type: Output
    }],
    didClose: [{
      type: Output
    }],
    didDestroy: [{
      type: Output
    }],
    confirm: [{
      type: Output
    }],
    deny: [{
      type: Output
    }],
    dismiss: [{
      type: Output
    }]
  });
})();
var SwalDirective = class _SwalDirective {
  viewContainerRef;
  resolver;
  /**
   * SweetAlert2 options or a SwalComponent instance.
   * See the class doc block for more informations.
   */
  set swal(options) {
    if (options instanceof SwalComponent) {
      this.swalInstance = options;
    } else if (isArrayOptions(options)) {
      this.swalOptions = {};
      [this.swalOptions.title, this.swalOptions.text, this.swalOptions.icon] = options;
    } else {
      this.swalOptions = options;
    }
    function isArrayOptions(value) {
      return Array.isArray(options);
    }
  }
  /**
   * Emits when the user clicks "Confirm".
   * The event value ($event) can be either:
   *  - by default, just `true`,
   *  - when using {@link input}, the input value,
   *  - when using {@link preConfirm}, the return value of this function.
   *
   * Example:
   *     <swal (confirm)="handleConfirm($event)"></swal>
   *
   *     public handleConfirm(email: string): void {
   *         // ... save user email
   *     }
   */
  confirm = new EventEmitter();
  /**
   * Emits when the user clicks "Deny".
   * This event bears no value.
   * Use `(deny)` (along with {@link showDenyButton}) when you want a modal with three buttons (confirm, deny and
   * cancel), and/or when you want to handle clear refusal in a separate way than simple dismissal.
   *
   * Example:
   *     <swal (deny)="handleDeny()"></swal>
   *
   *     public handleDeny(): void {
   *     }
   */
  deny = new EventEmitter();
  /**
   * Emits when the user clicks "Cancel", or dismisses the modal by any other allowed way.
   * The event value ($event) is a string that explains how the modal was dismissed. It is `undefined` when
   * the modal was programmatically closed (through {@link dismiss} for example).
   *
   * Example:
   *     <swal (dismiss)="handleDismiss($event)"></swal>
   *
   *     public handleDismiss(reason: DismissReason | undefined): void {
   *         // reason can be 'cancel', 'overlay', 'close', 'timer' or undefined.
   *         // ... do something
   *     }
   */
  dismiss = new EventEmitter();
  /**
   * When the user does not provides a SwalComponent instance, we create it on-the-fly and assign the plain-object
   * options to it.
   * This fields keeps a reference to the dynamically-created <swal>, to destroy it along this directive instance.
   */
  swalRef;
  /**
   * An instance of the <swal> component that this directive controls.
   * Could be an instance passed by the user, otherwise it's the instance we've dynamically created.
   */
  swalInstance;
  /**
   * Holds the native SweetAlert2 options.
   * Empty when the user passed an existing SwalComponent instance.
   */
  swalOptions;
  constructor(viewContainerRef, resolver) {
    this.viewContainerRef = viewContainerRef;
    this.resolver = resolver;
  }
  /**
   * OnInit lifecycle handler.
   * Creates a SwalComponent instance if the user didn't provided one and binds on that component (confirm),
   * (deny) and (dismiss) outputs to reemit on the directive.
   */
  ngOnInit() {
    if (!this.swalInstance) {
      const factory = this.resolver.resolveComponentFactory(SwalComponent);
      this.swalRef = this.viewContainerRef.createComponent(factory);
      this.swalInstance = this.swalRef.instance;
    }
  }
  /**
   * OnDestroy lifecycle handler.
   * Destroys the dynamically-created SwalComponent.
   */
  ngOnDestroy() {
    if (this.swalRef) {
      this.swalRef.destroy();
    }
  }
  /**
   * Click handler.
   * The directive listens for onclick events on its host element.
   * When this happens, it shows the <swal> attached to this directive.
   */
  onClick(event) {
    event.preventDefault();
    event.stopImmediatePropagation();
    event.stopPropagation();
    if (!this.swalInstance) return;
    if (this.swalOptions) {
      this.swalInstance.swalOptions = this.swalOptions;
    }
    const swalClosed = new Subject();
    this.swalInstance.confirm.asObservable().pipe(takeUntil(swalClosed)).subscribe((v) => this.confirm.emit(v));
    this.swalInstance.deny.asObservable().pipe(takeUntil(swalClosed)).subscribe((v) => this.deny.emit(v));
    this.swalInstance.dismiss.asObservable().pipe(takeUntil(swalClosed)).subscribe((v) => this.dismiss.emit(v));
    this.swalInstance.fire().then(() => swalClosed.next());
  }
  static ɵfac = function SwalDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SwalDirective)(ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(ComponentFactoryResolver$1));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _SwalDirective,
    selectors: [["", "swal", ""]],
    hostBindings: function SwalDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("click", function SwalDirective_click_HostBindingHandler($event) {
          return ctx.onClick($event);
        });
      }
    },
    inputs: {
      swal: "swal"
    },
    outputs: {
      confirm: "confirm",
      deny: "deny",
      dismiss: "dismiss"
    },
    standalone: false
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SwalDirective, [{
    type: Directive,
    args: [{
      selector: "[swal]"
    }]
  }], function() {
    return [{
      type: ViewContainerRef
    }, {
      type: ComponentFactoryResolver$1
    }];
  }, {
    swal: [{
      type: Input
    }],
    confirm: [{
      type: Output
    }],
    deny: [{
      type: Output
    }],
    dismiss: [{
      type: Output
    }],
    onClick: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }]
  });
})();
var SwalPortalComponent = class _SwalPortalComponent {
  template = null;
  static ɵfac = function SwalPortalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SwalPortalComponent)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _SwalPortalComponent,
    selectors: [["swal-portal"]],
    inputs: {
      template: "template"
    },
    standalone: false,
    decls: 1,
    vars: 1,
    consts: [[4, "ngTemplateOutlet"]],
    template: function SwalPortalComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵtemplate(0, SwalPortalComponent_ng_container_0_Template, 1, 0, "ng-container", 0);
      }
      if (rf & 2) {
        ɵɵproperty("ngTemplateOutlet", ctx.template);
      }
    },
    dependencies: [NgTemplateOutlet],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SwalPortalComponent, [{
    type: Component,
    args: [{
      selector: "swal-portal",
      template: '<ng-container *ngTemplateOutlet="template"></ng-container>',
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, {
    template: [{
      type: Input
    }]
  });
})();
var SwalPortalTargets = class _SwalPortalTargets {
  /**
   * Targets the modal close button block contents.
   */
  closeButton = {
    element: (swal) => swal.getCloseButton(),
    options: {
      showCloseButton: true
    }
  };
  /**
   * Targets the modal title block contents.
   */
  title = {
    element: (swal) => swal.getTitle(),
    // Empty text that will never be shown but necessary so SweetAlert2 makes the div visible.
    options: {
      title: " "
    }
  };
  /**
   * Targets the modal text block contents (that is another block inside the first content block, so you can still
   * use other modal features like Swal inputs, that are situated inside that parent content block).
   */
  content = {
    element: (swal) => swal.getHtmlContainer(),
    // Empty text that will never be shown but necessary so SweetAlert2 makes the div visible.
    options: {
      text: " "
    }
  };
  /**
   * Targets the actions block contents, where are the confirm and cancel buttons in a normal time.
   * /!\ WARNING: using this target destroys some of the native SweetAlert2 modal's DOM, therefore, if you use this
   *     target, do not update the modal via <swal> @Inputs while the modal is open, or you'll get an error.
   *     We could workaround that inconvenient inside this integration, but that'd be detrimental to memory and
   *     performance of everyone, for a relatively rare use case.
   */
  actions = {
    element: (swal) => swal.getActions(),
    // The button will never exist, but SweetAlert2 shows the actions block only if there is at least one button.
    options: {
      showConfirmButton: true
    }
  };
  /**
   * Targets the confirm button contents, replacing the text inside it (not the button itself)
   */
  confirmButton = {
    element: (swal) => swal.getConfirmButton(),
    options: {
      showConfirmButton: true
    }
  };
  /**
   * Targets the deny button contents, replacing the text inside it (not the button itself)
   */
  denyButton = {
    element: (swal) => swal.getDenyButton(),
    options: {
      showDenyButton: true
    }
  };
  /**
   * Targets the cancel button contents, replacing the text inside it (not the button itself)
   */
  cancelButton = {
    element: (swal) => swal.getCancelButton(),
    options: {
      showCancelButton: true
    }
  };
  /**
   * Targets the modal footer contents.
   */
  footer = {
    element: (swal) => swal.getFooter(),
    // Empty text that will never be shown but necessary so SweetAlert2 makes the div visible.
    options: {
      footer: " "
    }
  };
  static ɵfac = function SwalPortalTargets_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SwalPortalTargets)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _SwalPortalTargets,
    factory: _SwalPortalTargets.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SwalPortalTargets, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var SwalPortalDirective = class _SwalPortalDirective {
  resolver;
  injector;
  app;
  templateRef;
  sweetAlert2Loader;
  swalTargets;
  swalComponent;
  /**
   * Takes a portal target or nothing (then it will target the text content zone by default).
   *
   * See the {@link SwalPortalTargets} service to see the available targets.
   * See the class doc block for more informations.
   */
  target;
  /**
   * Holds the component reference of the controlled SwalPortalComponent to destroy it when no longer needed.
   */
  portalComponentRef;
  destroyed = new Subject();
  constructor(resolver, injector, app, templateRef, sweetAlert2Loader, swalTargets, swalComponent) {
    this.resolver = resolver;
    this.injector = injector;
    this.app = app;
    this.templateRef = templateRef;
    this.sweetAlert2Loader = sweetAlert2Loader;
    this.swalTargets = swalTargets;
    this.swalComponent = swalComponent;
  }
  /**
   * Subscribes to the the SweetAlert appearance/disappearance events to create/destroy the SwalPortalComponent
   * that will receive the consumer's template.
   */
  ngOnInit() {
    this.target = this.target || this.swalTargets.content;
    void this.swalComponent.update(this.target.options);
    this.swalComponent.didRender.pipe(takeUntil(this.destroyed)).subscribe(this.didRenderHook.bind(this));
    this.swalComponent.willOpen.pipe(takeUntil(this.destroyed)).subscribe(this.willOpenHook.bind(this));
    this.swalComponent.didDestroy.pipe(takeUntil(this.destroyed)).subscribe(this.didDestroyHook.bind(this));
  }
  /**
   * Signal any {@link destroyed} consumer that this is over, so they can unsubscribe from the
   * parent SwalComponent events.
   */
  ngOnDestroy() {
    this.destroyed.next();
  }
  /**
   * This didRender hook runs 1..n times (per modal instance), just before the modal is shown (and also before the
   * {@link willOpenHook}), or after Swal.update() is called.
   * This is a good place to render, or re-render, our portal contents.
   */
  didRenderHook() {
    return __async(this, null, function* () {
      if (!this.portalComponentRef) {
        this.portalComponentRef = this.createPortalComponent();
      }
      const swal = yield this.sweetAlert2Loader.swal;
      const targetEl = this.target.element(swal);
      if (!targetEl) return;
      while (targetEl.firstChild) {
        targetEl.removeChild(targetEl.firstChild);
      }
      targetEl.appendChild(this.portalComponentRef.location.nativeElement);
    });
  }
  /**
   * This willOpen hook runs once (per modal instance), just before the modal is shown on the screen.
   * This is a good place to declare our detached view to the Angular app.
   */
  willOpenHook() {
    if (!this.portalComponentRef) return;
    this.app.attachView(this.portalComponentRef.hostView);
  }
  /**
   * This didDestroy hook runs once (per modal instance), just after the modal closing animation terminated.
   * This is a good place to detach and destroy our content, that is not visible anymore.
   */
  didDestroyHook() {
    if (!this.portalComponentRef) return;
    this.app.detachView(this.portalComponentRef.hostView);
    this.portalComponentRef.destroy();
    this.portalComponentRef = void 0;
  }
  /**
   * Creates the {@link SwalPortalComponent} and gives it the customer's template ref.
   */
  createPortalComponent() {
    const factory = this.resolver.resolveComponentFactory(SwalPortalComponent);
    const componentRef = factory.create(this.injector, []);
    componentRef.instance.template = this.templateRef;
    return componentRef;
  }
  static ɵfac = function SwalPortalDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SwalPortalDirective)(ɵɵdirectiveInject(ComponentFactoryResolver$1), ɵɵdirectiveInject(Injector), ɵɵdirectiveInject(ApplicationRef), ɵɵdirectiveInject(TemplateRef), ɵɵdirectiveInject(SweetAlert2LoaderService), ɵɵdirectiveInject(SwalPortalTargets), ɵɵdirectiveInject(SwalComponent, 1));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _SwalPortalDirective,
    selectors: [["", "swalPortal", ""]],
    inputs: {
      target: [0, "swalPortal", "target"]
    },
    standalone: false
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SwalPortalDirective, [{
    type: Directive,
    args: [{
      selector: "[swalPortal]"
    }]
  }], function() {
    return [{
      type: ComponentFactoryResolver$1
    }, {
      type: Injector
    }, {
      type: ApplicationRef
    }, {
      type: TemplateRef
    }, {
      type: SweetAlert2LoaderService
    }, {
      type: SwalPortalTargets
    }, {
      type: SwalComponent,
      decorators: [{
        type: Host
      }]
    }];
  }, {
    target: [{
      type: Input,
      args: ["swalPortal"]
    }]
  });
})();
function provideDefaultSwal() {
  return import("./sweetalert2.js");
}
var SweetAlert2Module = class _SweetAlert2Module {
  static forRoot(options = {}) {
    return {
      ngModule: _SweetAlert2Module,
      providers: [SweetAlert2LoaderService, {
        provide: swalProviderToken,
        useValue: options.provideSwal || provideDefaultSwal
      }, {
        provide: fireOnInitToken,
        useValue: options.fireOnInit || false
      }, {
        provide: dismissOnDestroyToken,
        useValue: options.dismissOnDestroy || true
      }]
    };
  }
  static forChild(options = {}) {
    return {
      ngModule: _SweetAlert2Module,
      providers: [...options.provideSwal ? [SweetAlert2LoaderService, {
        provide: swalProviderToken,
        useValue: options.provideSwal
      }] : [], ...options.fireOnInit !== void 0 ? [{
        provide: fireOnInitToken,
        useValue: options.fireOnInit
      }] : [], ...options.dismissOnDestroy !== void 0 ? [{
        provide: dismissOnDestroyToken,
        useValue: options.dismissOnDestroy
      }] : []]
    };
  }
  static ɵfac = function SweetAlert2Module_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SweetAlert2Module)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _SweetAlert2Module,
    declarations: [SwalDirective, SwalComponent, SwalPortalDirective, SwalPortalComponent],
    imports: [CommonModule],
    exports: [SwalComponent, SwalPortalDirective, SwalDirective]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [CommonModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SweetAlert2Module, [{
    type: NgModule,
    args: [{
      declarations: [SwalDirective, SwalComponent, SwalPortalDirective, SwalPortalComponent],
      imports: [CommonModule],
      exports: [SwalComponent, SwalPortalDirective, SwalDirective]
    }]
  }], null, null);
})();
export {
  SwalComponent,
  SwalDirective,
  SwalPortalDirective,
  SwalPortalTargets,
  SweetAlert2LoaderService,
  SweetAlert2Module
};
//# sourceMappingURL=@sweetalert2_ngx-sweetalert2.js.map
