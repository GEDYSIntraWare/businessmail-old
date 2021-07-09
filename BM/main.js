(self["webpackChunkbm"] = self["webpackChunkbm"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _components_app_app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/app/app.component */ 7729);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);




const routes = [
    { path: '', component: _components_app_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent },
    { path: 'index.html', component: _components_app_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MSALInstanceFactory": () => (/* binding */ MSALInstanceFactory),
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _interceptors_no_cache_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interceptors/no-cache.interceptor */ 3994);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _components_app_app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/app/app.component */ 7729);
/* harmony import */ var _components_address_info_address_info_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/address-info/address-info.component */ 4884);
/* harmony import */ var _components_site_actions_site_actions_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/site-actions/site-actions.component */ 8265);
/* harmony import */ var _components_configuration_actions_configuration_actions_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/configuration-actions/configuration-actions.component */ 7179);
/* harmony import */ var _components_pager_pager_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/pager/pager.component */ 1178);
/* harmony import */ var _components_additional_actions_additional_actions_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/additional-actions/additional-actions.component */ 137);
/* harmony import */ var _components_activities_activities_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/activities/activities.component */ 8457);
/* harmony import */ var _components_messages_messages_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/messages/messages.component */ 5995);
/* harmony import */ var _components_config_config_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/config/config.component */ 8614);
/* harmony import */ var _components_language_language_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/language/language.component */ 5035);
/* harmony import */ var _services_globals_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/globals.service */ 660);
/* harmony import */ var _services_language_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/language.service */ 1155);
/* harmony import */ var _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/loader/loader.component */ 8868);
/* harmony import */ var _services_connection_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/connection.service */ 2377);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/platform-browser/animations */ 5835);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ngx-toastr */ 9344);
/* harmony import */ var _components_mail_address_mail_address_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/mail-address/mail-address.component */ 1839);
/* harmony import */ var _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/modal/modal.component */ 385);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! @ngx-translate/core */ 9790);
/* harmony import */ var _loader_lc_loader__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./loader/lc-loader */ 211);
/* harmony import */ var _components_modal_choose_office_choose_office_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/modal/choose-office/choose-office.component */ 7764);
/* harmony import */ var _components_modal_search_contact_search_contact_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/modal/search-contact/search-contact.component */ 8704);
/* harmony import */ var _components_modal_create_contact_create_contact_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/modal/create-contact/create-contact.component */ 7380);
/* harmony import */ var _directives_modal_directive__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./directives/modal.directive */ 9102);
/* harmony import */ var _components_modal_create_ticket_create_ticket_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/modal/create-ticket/create-ticket.component */ 4594);
/* harmony import */ var _components_modal_document_file_document_file_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/modal/document-file/document-file.component */ 7679);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/material/list */ 7746);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @angular/material/menu */ 3935);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/dialog */ 2238);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @angular/material/select */ 7441);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @angular/material/form-field */ 8295);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @angular/material/input */ 3166);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! @angular/material/table */ 2091);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! @angular/material/core */ 7817);
/* harmony import */ var _pipes_add_spacer_pipe__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pipes/add-spacer.pipe */ 5566);
/* harmony import */ var _directives_activity_action_directive__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./directives/activity-action.directive */ 7769);
/* harmony import */ var _components_create_address_block_create_address_block_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/create-address-block/create-address-block.component */ 7015);
/* harmony import */ var _components_modal_select_contact_select_contact_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/modal/select-contact/select-contact.component */ 1436);
/* harmony import */ var _components_modal_select_create_label_select_create_label_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/modal/select-create-label/select-create-label.component */ 7545);
/* harmony import */ var _components_modal_duplicate_duplicate_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/modal/duplicate/duplicate.component */ 1032);
/* harmony import */ var _components_modal_search_template_search_template_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/modal/search-template/search-template.component */ 3827);
/* harmony import */ var _components_modal_webint_input_webint_input_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/modal/webint-input/webint-input.component */ 3939);
/* harmony import */ var _components_modal_select_mail_address_select_mail_address_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/modal/select-mail-address/select-mail-address.component */ 632);
/* harmony import */ var _azure_msal_browser__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @azure/msal-browser */ 4683);
/* harmony import */ var _azure_msal_browser__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @azure/msal-browser */ 4867);
/* harmony import */ var _azure_msal_angular__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @azure/msal-angular */ 3235);
/* harmony import */ var _graph_data_oauth__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./graph/data/oauth */ 7321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! @angular/common */ 8583);























































// <MSALFactorySnippet>
let msalInstance;
function MSALInstanceFactory() {
    // TODO https://github.com/AzureAD/microsoft-authentication-library-for-js/issues/1403
    // TODO Wenns nicht funktioniert, asset daten löschen
    msalInstance =
        msalInstance !== null && msalInstance !== void 0 ? msalInstance : new _azure_msal_browser__WEBPACK_IMPORTED_MODULE_35__.PublicClientApplication({
            auth: {
                clientId: _graph_data_oauth__WEBPACK_IMPORTED_MODULE_34__.OAuthSettings.appId,
                redirectUri: _graph_data_oauth__WEBPACK_IMPORTED_MODULE_34__.OAuthSettings.redirectUri,
                postLogoutRedirectUri: _graph_data_oauth__WEBPACK_IMPORTED_MODULE_34__.OAuthSettings.redirectUri,
            },
            cache: {
                cacheLocation: _azure_msal_browser__WEBPACK_IMPORTED_MODULE_36__.BrowserCacheLocation.LocalStorage,
            },
        });
    return msalInstance;
}
// </MSALFactorySnippet>
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_components_app_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵdefineInjector"]({ providers: [
        _services_globals_service__WEBPACK_IMPORTED_MODULE_12__.GlobalsService,
        _services_language_service__WEBPACK_IMPORTED_MODULE_13__.LanguageService,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_38__.MatDialogModule,
        _services_connection_service__WEBPACK_IMPORTED_MODULE_15__.ConnectionService,
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_39__.HTTP_INTERCEPTORS, useClass: _interceptors_no_cache_interceptor__WEBPACK_IMPORTED_MODULE_0__.NoCacheInterceptor, multi: true },
        {
            provide: _azure_msal_angular__WEBPACK_IMPORTED_MODULE_40__.MSAL_INSTANCE,
            useFactory: MSALInstanceFactory,
        },
        _azure_msal_angular__WEBPACK_IMPORTED_MODULE_40__.MsalService,
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_41__.BrowserModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_42__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_42__.ReactiveFormsModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_39__.HttpClientModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_43__.BrowserAnimationsModule,
            ngx_toastr__WEBPACK_IMPORTED_MODULE_44__.ToastrModule.forRoot({ preventDuplicates: true }),
            _angular_material_list__WEBPACK_IMPORTED_MODULE_45__.MatListModule,
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_46__.MatMenuModule,
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_38__.MatDialogModule,
            _angular_material_select__WEBPACK_IMPORTED_MODULE_47__.MatSelectModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_48__.MatFormFieldModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_49__.MatInputModule,
            _angular_material_table__WEBPACK_IMPORTED_MODULE_50__.MatTableModule,
            _angular_material_core__WEBPACK_IMPORTED_MODULE_51__.MatRippleModule,
            _azure_msal_angular__WEBPACK_IMPORTED_MODULE_40__.MsalModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_52__.TranslateModule.forRoot({
                defaultLanguage: 'en',
                loader: { provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_52__.TranslateLoader, useClass: _loader_lc_loader__WEBPACK_IMPORTED_MODULE_18__.LcLoader },
            }),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_components_app_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent,
        _components_address_info_address_info_component__WEBPACK_IMPORTED_MODULE_3__.AddressInfoComponent,
        _components_site_actions_site_actions_component__WEBPACK_IMPORTED_MODULE_4__.SiteActionsComponent,
        _components_configuration_actions_configuration_actions_component__WEBPACK_IMPORTED_MODULE_5__.ConfigurationActionsComponent,
        _components_pager_pager_component__WEBPACK_IMPORTED_MODULE_6__.PagerComponent,
        _components_additional_actions_additional_actions_component__WEBPACK_IMPORTED_MODULE_7__.AdditionalActionsComponent,
        _components_activities_activities_component__WEBPACK_IMPORTED_MODULE_8__.ActivitiesComponent,
        _components_messages_messages_component__WEBPACK_IMPORTED_MODULE_9__.MessagesComponent,
        _components_config_config_component__WEBPACK_IMPORTED_MODULE_10__.ConfigComponent,
        _components_language_language_component__WEBPACK_IMPORTED_MODULE_11__.LanguageComponent,
        _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_14__.LoaderComponent,
        _components_mail_address_mail_address_component__WEBPACK_IMPORTED_MODULE_16__.MailAddressComponent,
        _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_17__.ModalComponent,
        _components_modal_choose_office_choose_office_component__WEBPACK_IMPORTED_MODULE_19__.ChooseOfficeComponent,
        _components_modal_search_contact_search_contact_component__WEBPACK_IMPORTED_MODULE_20__.SearchContactComponent,
        _components_modal_create_contact_create_contact_component__WEBPACK_IMPORTED_MODULE_21__.CreateContactComponent,
        _directives_modal_directive__WEBPACK_IMPORTED_MODULE_22__.ModalDirective,
        _components_modal_create_ticket_create_ticket_component__WEBPACK_IMPORTED_MODULE_23__.CreateTicketComponent,
        _components_modal_document_file_document_file_component__WEBPACK_IMPORTED_MODULE_24__.DocumentFileComponent,
        _pipes_add_spacer_pipe__WEBPACK_IMPORTED_MODULE_25__.AddSpacerPipe,
        _directives_activity_action_directive__WEBPACK_IMPORTED_MODULE_26__.ActivityActionDirective,
        _components_create_address_block_create_address_block_component__WEBPACK_IMPORTED_MODULE_27__.CreateAddressBlockComponent,
        _components_modal_select_contact_select_contact_component__WEBPACK_IMPORTED_MODULE_28__.SelectContactComponent,
        _components_modal_select_create_label_select_create_label_component__WEBPACK_IMPORTED_MODULE_29__.SelectCreateLabelComponent,
        _components_modal_duplicate_duplicate_component__WEBPACK_IMPORTED_MODULE_30__.DuplicateComponent,
        _components_modal_search_template_search_template_component__WEBPACK_IMPORTED_MODULE_31__.SearchTemplateComponent,
        _components_modal_webint_input_webint_input_component__WEBPACK_IMPORTED_MODULE_32__.WebintInputComponent,
        _components_modal_select_mail_address_select_mail_address_component__WEBPACK_IMPORTED_MODULE_33__.SelectMailAddressComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_41__.BrowserModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_42__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_42__.ReactiveFormsModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_39__.HttpClientModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_43__.BrowserAnimationsModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_44__.ToastrModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_45__.MatListModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_46__.MatMenuModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_38__.MatDialogModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_47__.MatSelectModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_48__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_49__.MatInputModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_50__.MatTableModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_51__.MatRippleModule,
        _azure_msal_angular__WEBPACK_IMPORTED_MODULE_40__.MsalModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_52__.TranslateModule] }); })();
_angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵsetComponentScope"](_components_app_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent, [_angular_common__WEBPACK_IMPORTED_MODULE_53__.NgStyle, _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_14__.LoaderComponent,
    _components_site_actions_site_actions_component__WEBPACK_IMPORTED_MODULE_4__.SiteActionsComponent,
    _components_config_config_component__WEBPACK_IMPORTED_MODULE_10__.ConfigComponent,
    _components_mail_address_mail_address_component__WEBPACK_IMPORTED_MODULE_16__.MailAddressComponent,
    _components_create_address_block_create_address_block_component__WEBPACK_IMPORTED_MODULE_27__.CreateAddressBlockComponent,
    _components_address_info_address_info_component__WEBPACK_IMPORTED_MODULE_3__.AddressInfoComponent,
    _components_additional_actions_additional_actions_component__WEBPACK_IMPORTED_MODULE_7__.AdditionalActionsComponent,
    _components_activities_activities_component__WEBPACK_IMPORTED_MODULE_8__.ActivitiesComponent,
    _components_messages_messages_component__WEBPACK_IMPORTED_MODULE_9__.MessagesComponent,
    _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_17__.ModalComponent,
    _components_modal_webint_input_webint_input_component__WEBPACK_IMPORTED_MODULE_32__.WebintInputComponent], []);


/***/ }),

/***/ 8457:
/*!***************************************************************!*\
  !*** ./src/app/components/activities/activities.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActivitiesComponent": () => (/* binding */ ActivitiesComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services_image_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/image.service */ 4249);
/* harmony import */ var _services_activities_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/activities.service */ 9633);
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/message.service */ 2684);
/* harmony import */ var _services_webint_link_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/webint-link.service */ 6578);
/* harmony import */ var src_app_services_modal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/modal.service */ 1609);
/* harmony import */ var src_app_services_address_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/address.service */ 9688);
/* harmony import */ var src_app_services_globals_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/globals.service */ 660);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 9790);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _directives_activity_action_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../directives/activity-action.directive */ 7769);













function ActivitiesComponent_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const entry_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", entry_r3[1])("selected", entry_r3[1] === ctx_r1.selectedType ? true : false);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", entry_r3[0], " ");
} }
function ActivitiesComponent_li_8_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](1, "translate");
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](1, 2, "LC73234"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngStyle", ctx_r5.activityDocImage);
} }
function ActivitiesComponent_li_8_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ActivitiesComponent_li_8_Template_div_click_8_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r7); const entry_r4 = restoredCtx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r6.document(entry_r4.pointer); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](9, ActivitiesComponent_li_8_div_9_Template, 2, 4, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const entry_r4 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("href", ctx_r2.createWebintLink(entry_r4.pointer), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("src", entry_r4.viewIconUrl, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](entry_r4.dateString);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("title", entry_r4.subject);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", entry_r4.subject, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r2.globals.actionsAllowed);
} }
const MAX_ACTIVITIES = 10;
class ActivitiesComponent {
    constructor(imageService, activitiesService, messageService, webintLinkService, modalService, addressService, globals, translate) {
        this.imageService = imageService;
        this.activitiesService = activitiesService;
        this.messageService = messageService;
        this.webintLinkService = webintLinkService;
        this.modalService = modalService;
        this.addressService = addressService;
        this.globals = globals;
        this.translate = translate;
        this.activity = {};
        this.types = [];
        this.typesSet = false;
        this.selectedType = '0';
        this.activityDocImage = {
            background: 'no-repeat url(assets/images/icons_business_mail.png)',
        };
        this.selectArrow = {
            background: 'no-repeat url(assets/images/DropDownArrowOffsetRight.png) right',
        };
        this.headerText = '';
    }
    ngOnInit() {
        console.log('init Activities');
        this.init();
        this.addressService.waitForAddressChange().subscribe(() => {
            this.activity = {};
            this.init();
        });
    }
    ngOnDestroy() {
        this.activitiesService.destroy();
    }
    document(pointer) {
        this.modalService.changeType({
            newType: 'documentFile',
            data: { currentOfficePointer: pointer },
        });
    }
    trackPointer(index, item) {
        return item.pointer;
    }
    createWebintLink(pointer) {
        return this.webintLinkService.convertToLink(pointer);
    }
    onOptionChange(typeValue) {
        this.activitiesService.changeDefaultTypeSelection(typeValue);
    }
    init() {
        this.activitiesService.init().subscribe({
            next: (resp) => {
                this.translate.get('LC52160').subscribe((text) => {
                    this.headerText = text.replace('<max>', String(MAX_ACTIVITIES));
                });
                switch (resp.type) {
                    case 'activities':
                        this.activity = resp;
                        if (this.activity.displayType) {
                            this.selectedType = this.activity.displayType.toString(10);
                        }
                        console.log(this.activity);
                        this.transformForDisplay();
                        if (this.activity.errorCode && this.activity.message) {
                            this.messageService.showInfo(this.activity.message);
                        }
                        break;
                    case 'types':
                        if (!this.typesSet) {
                            this.types = resp;
                        }
                        break;
                    default:
                        if (this.activity.errorCode && this.activity.message) {
                            this.messageService.showError(this.activity.message);
                        }
                }
            },
            error: (errHttp) => {
                console.log('Activities failure!');
                console.log(errHttp);
            },
            complete: () => {
                // Nothing
            },
        });
    }
    transformForDisplay() {
        if (this.activity.activities !== []) {
            this.activity.activities.forEach((entry) => {
                entry.viewIconUrl = this.imageService.getViewIconUrl(parseInt(entry.viewIcon, 10));
                entry.dateString = (0,_angular_common__WEBPACK_IMPORTED_MODULE_9__.formatDate)(entry.dateInMS, 'dd.MM.YYYY', 'en_US');
            });
        }
    }
}
ActivitiesComponent.ɵfac = function ActivitiesComponent_Factory(t) { return new (t || ActivitiesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_image_service__WEBPACK_IMPORTED_MODULE_0__.ImageService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_activities_service__WEBPACK_IMPORTED_MODULE_1__.ActivitiesService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_message_service__WEBPACK_IMPORTED_MODULE_2__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_webint_link_service__WEBPACK_IMPORTED_MODULE_3__.WebintLinkService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_modal_service__WEBPACK_IMPORTED_MODULE_4__.ModalService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_address_service__WEBPACK_IMPORTED_MODULE_5__.AddressService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_globals_service__WEBPACK_IMPORTED_MODULE_6__.GlobalsService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateService)); };
ActivitiesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: ActivitiesComponent, selectors: [["app-activities"]], decls: 9, vars: 6, consts: [[1, "activityHeader"], [1, "activityHeaderText", 3, "title"], ["id", "selectContainer"], [1, "customSelect", "activityHeaderSelect", 3, "ngStyle", "change"], ["selection", ""], [3, "value", "selected", 4, "ngFor", "ngForOf"], ["class", "activityList", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "value", "selected"], [1, "activityList"], ["appActivityAction", "", "id", "activityEntryWrapper"], ["target", "_blank", 3, "href"], [1, "activityIcon", "activityEntry", 3, "src"], [1, "activityDate", "activityEntry"], [1, "activitySubject", "activityEntry", 3, "title"], [1, "hide", "activityButtonContainer", "clearfix", 3, "click"], ["class", "activityDocIcon", 3, "title", "ngStyle", 4, "ngIf"], [1, "activityDocIcon", 3, "title", "ngStyle"]], template: function ActivitiesComponent_Template(rf, ctx) { if (rf & 1) {
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "select", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function ActivitiesComponent_Template_select_change_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r8); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](5); return ctx.onOptionChange(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, ActivitiesComponent_option_6_Template, 2, 3, "option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](8, ActivitiesComponent_li_8_Template, 10, 6, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("title", ctx.headerText);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx.headerText, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngStyle", ctx.selectArrow);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.types);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.activity.activities)("ngForTrackBy", ctx.trackPointer);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgStyle, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgSelectMultipleOption"], _directives_activity_action_directive__WEBPACK_IMPORTED_MODULE_7__.ActivityActionDirective, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslatePipe], styles: ["ul[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\nli[_ngcontent-%COMP%] {\n  list-style-type: none;\n  padding: 0;\n  margin: 0;\n}\n\n.activityHeader[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.activityHeaderText[_ngcontent-%COMP%] {\n  flex: auto;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n\n.activityHeaderSelect[_ngcontent-%COMP%] {\n  width: auto !important;\n}\n\n.activityHeaderSelect[_ngcontent-%COMP%]    > option[_ngcontent-%COMP%] {\n  max-width: 100%;\n  width: auto;\n}\n\n.activityHeader[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n\n.activityEntry[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-right: 5px;\n  color: #4d4d4d;\n}\n\n.activityIcon[_ngcontent-%COMP%] {\n  height: 18px;\n  width: 18px;\n  margin-top: 2px;\n}\n\n.activityDate[_ngcontent-%COMP%], .activitySubject[_ngcontent-%COMP%] {\n  vertical-align: text-top;\n}\n\n.activityDate[_ngcontent-%COMP%] {\n  width: 80px;\n  text-align: center;\n  overflow: hidden;\n  border-right: 1px solid #bfbfbf;\n  border-left: 1px solid #bfbfbf;\n}\n\n.activityList[_ngcontent-%COMP%] {\n  border-bottom: 1px dashed #bfbfbf;\n}\n\n.activityList[_ngcontent-%COMP%]:hover {\n  background-color: #e0efff;\n  transition: background-color 0.5s ease-out;\n}\n\n.activitySubject[_ngcontent-%COMP%] {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  width: calc(100% - 140px);\n}\n\n.show[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.hide[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.activityButtonContainer[_ngcontent-%COMP%] {\n  float: right;\n  width: 22px;\n  height: 21px;\n  padding-left: 5px;\n}\n\n.activityDocIcon[_ngcontent-%COMP%] {\n  background-position: 0px 0px !important;\n  margin-right: 2px;\n  cursor: pointer;\n  float: right;\n  width: 22px;\n  height: 21px;\n}\n\n#selectContainer[_ngcontent-%COMP%] {\n  flex: 5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdGl2aXRpZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxVQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxzQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7O0VBRUUsd0JBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsK0JBQUE7RUFDQSw4QkFBQTtBQUNGOztBQUVBO0VBQ0UsaUNBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0VBSUEsMENBQUE7QUFDRjs7QUFFQTtFQUNFLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsdUNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLE9BQUE7QUFDRiIsImZpbGUiOiJhY3Rpdml0aWVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidWwge1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbmxpIHtcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5hY3Rpdml0eUhlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLmFjdGl2aXR5SGVhZGVyVGV4dCB7XHJcbiAgZmxleDogYXV0bztcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5hY3Rpdml0eUhlYWRlclNlbGVjdCB7XHJcbiAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcclxufVxyXG5cclxuLmFjdGl2aXR5SGVhZGVyU2VsZWN0ID4gb3B0aW9uIHtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgd2lkdGg6IGF1dG87XHJcbn1cclxuXHJcbi5hY3Rpdml0eUhlYWRlciAqIHtcclxuICBtYXJnaW4tcmlnaHQ6IDVweDtcclxufVxyXG5cclxuLmFjdGl2aXR5RW50cnkge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICBjb2xvcjogIzRkNGQ0ZDtcclxufVxyXG5cclxuLmFjdGl2aXR5SWNvbiB7XHJcbiAgaGVpZ2h0OiAxOHB4O1xyXG4gIHdpZHRoOiAxOHB4O1xyXG4gIG1hcmdpbi10b3A6IDJweDtcclxufVxyXG5cclxuLmFjdGl2aXR5RGF0ZSxcclxuLmFjdGl2aXR5U3ViamVjdCB7XHJcbiAgdmVydGljYWwtYWxpZ246IHRleHQtdG9wO1xyXG59XHJcblxyXG4uYWN0aXZpdHlEYXRlIHtcclxuICB3aWR0aDogODBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2IoMTkxLCAxOTEsIDE5MSk7XHJcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCByZ2IoMTkxLCAxOTEsIDE5MSk7XHJcbn1cclxuXHJcbi5hY3Rpdml0eUxpc3Qge1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgcmdiKDE5MSwgMTkxLCAxOTEpO1xyXG59XHJcblxyXG4uYWN0aXZpdHlMaXN0OmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlZmZmO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjVzIGVhc2Utb3V0O1xyXG4gIC1tb3otdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjVzIGVhc2Utb3V0O1xyXG4gIC1vLXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC41cyBlYXNlLW91dDtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuNXMgZWFzZS1vdXQ7XHJcbn1cclxuXHJcbi5hY3Rpdml0eVN1YmplY3Qge1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB3aWR0aDogY2FsYygxMDAlIC0gMTQwcHgpO1xyXG59XHJcblxyXG4uc2hvdyB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5oaWRlIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uYWN0aXZpdHlCdXR0b25Db250YWluZXIge1xyXG4gIGZsb2F0OiByaWdodDtcclxuICB3aWR0aDogMjJweDtcclxuICBoZWlnaHQ6IDIxcHg7XHJcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbn1cclxuXHJcbi5hY3Rpdml0eURvY0ljb24ge1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDBweCAwcHggIWltcG9ydGFudDtcclxuICBtYXJnaW4tcmlnaHQ6IDJweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIHdpZHRoOiAyMnB4O1xyXG4gIGhlaWdodDogMjFweDtcclxufVxyXG5cclxuI3NlbGVjdENvbnRhaW5lciB7XHJcbiAgZmxleDogNTtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 137:
/*!*******************************************************************************!*\
  !*** ./src/app/components/additional-actions/additional-actions.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdditionalActionsComponent": () => (/* binding */ AdditionalActionsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services_language_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/language.service */ 1155);
/* harmony import */ var _services_globals_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/globals.service */ 660);
/* harmony import */ var _services_modal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/modal.service */ 1609);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 9790);
/* harmony import */ var src_app_services_address_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/address.service */ 9688);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8583);







function AdditionalActionsComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AdditionalActionsComponent_div_4_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r1.openModal("searchContact"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AdditionalActionsComponent_div_4_Template_div_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r3.openModal("createTicket"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 4, "LC73210"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", ctx_r0.bmIcons);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 6, "LC53160"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", ctx_r0.bmIcons);
} }
class AdditionalActionsComponent {
    constructor(language, globals, modalService, translate, addressService) {
        this.language = language;
        this.globals = globals;
        this.modalService = modalService;
        this.translate = translate;
        this.addressService = addressService;
        this.translations = {};
        this.bmIcons = {
            background: 'transparent no-repeat url(assets/images/icons_business_mail.png)',
        };
        translate.setDefaultLang('all');
        translate.use('all');
    }
    ngOnInit() { }
    openModal(newType) {
        this.modalService.changeType({
            newType,
        });
    }
}
AdditionalActionsComponent.ɵfac = function AdditionalActionsComponent_Factory(t) { return new (t || AdditionalActionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_language_service__WEBPACK_IMPORTED_MODULE_0__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_globals_service__WEBPACK_IMPORTED_MODULE_1__.GlobalsService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_modal_service__WEBPACK_IMPORTED_MODULE_2__.ModalService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_address_service__WEBPACK_IMPORTED_MODULE_3__.AddressService)); };
AdditionalActionsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: AdditionalActionsComponent, selectors: [["app-additional-actions"]], decls: 7, vars: 6, consts: [[1, "clearfix"], ["id", "icons", 4, "ngIf"], ["id", "icons"], [1, "bmDocumentationAnother", 3, "ngStyle", "title", "click"], [1, "bmTicket", 3, "ngStyle", "title", "click"]], template: function AdditionalActionsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, AdditionalActionsComponent_div_4_Template, 5, 8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "hr");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("float", "left");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 4, "LC37113"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.globals.actionsAllowed);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgStyle], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGRpdGlvbmFsLWFjdGlvbnMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 4884:
/*!*******************************************************************!*\
  !*** ./src/app/components/address-info/address-info.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddressInfoComponent": () => (/* binding */ AddressInfoComponent)
/* harmony export */ });
/* harmony import */ var _types_address_order_display__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../types/address-order.display */ 1325);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var src_app_services_globals_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/globals.service */ 660);
/* harmony import */ var _services_address_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/address.service */ 9688);
/* harmony import */ var _services_image_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/image.service */ 4249);
/* harmony import */ var src_app_services_webint_link_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/webint-link.service */ 6578);
/* harmony import */ var src_app_services_modal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/modal.service */ 1609);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _pager_pager_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pager/pager.component */ 1178);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 9790);
/* harmony import */ var _pipes_add_spacer_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pipes/add-spacer.pipe */ 5566);











function AddressInfoComponent_div_0_div_2_div_5_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AddressInfoComponent_div_0_div_2_div_5_div_7_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r8); const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3); return ctx_r7.document(ctx_r7.commonPointerData.pointer[item_r5.key]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](1, 2, ctx_r6.commonPointerData.lcDoc[item_r5.key]));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngStyle", ctx_r6.docImage);
} }
function AddressInfoComponent_div_0_div_2_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](6, "hr", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](7, AddressInfoComponent_div_0_div_2_div_5_div_7_Template, 2, 4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 4, ctx_r3.commonPointerData.lcLabel[item_r5.key]));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("href", ctx_r3.commonPointerData.link[item_r5.key], _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](item_r5.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r3.globals.actionsAllowed);
} }
function AddressInfoComponent_div_0_div_2_div_7_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "div");
} }
function AddressInfoComponent_div_0_div_2_div_7_div_1_ng_template_2_div_0_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate1"]("href", "//", item_r12.value, "", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](item_r12.value);
} }
function AddressInfoComponent_div_0_div_2_div_7_div_1_ng_template_2_div_0_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate1"]("href", "//", item_r12.value.substring(item_r12.value.indexOf("/") + 2), "", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](item_r12.value.substring(item_r12.value.indexOf("/") + 2));
} }
function AddressInfoComponent_div_0_div_2_div_7_div_1_ng_template_2_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, AddressInfoComponent_div_0_div_2_div_7_div_1_ng_template_2_div_0_a_1_Template, 2, 2, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, AddressInfoComponent_div_0_div_2_div_7_div_1_ng_template_2_div_0_ng_template_2_Template, 2, 2, "ng-template", null, 24, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](3);
    const item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !item_r12.value.startsWith("http"))("ngIfElse", _r20);
} }
function AddressInfoComponent_div_0_div_2_div_7_div_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, AddressInfoComponent_div_0_div_2_div_7_div_1_ng_template_2_div_0_Template, 4, 2, "div", 20);
} if (rf & 2) {
    const item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", item_r12.key.toLowerCase().includes("url") || item_r12.key.toLowerCase().includes("page"))("ngIfElse", _r16);
} }
function AddressInfoComponent_div_0_div_2_div_7_div_1_ng_template_4_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AddressInfoComponent_div_0_div_2_div_7_div_1_ng_template_4_div_0_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](6); return ctx_r29.phonecall(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 2, "LC04452"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](item_r12.value);
} }
function AddressInfoComponent_div_0_div_2_div_7_div_1_ng_template_4_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](0);
} if (rf & 2) {
    const item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", item_r12.value, " ");
} }
function AddressInfoComponent_div_0_div_2_div_7_div_1_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, AddressInfoComponent_div_0_div_2_div_7_div_1_ng_template_4_div_0_Template, 4, 4, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, AddressInfoComponent_div_0_div_2_div_7_div_1_ng_template_4_ng_template_1_Template, 1, 1, "ng-template", null, 25, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](2);
    const item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", item_r12.key.includes("phone"))("ngIfElse", _r27);
} }
function AddressInfoComponent_div_0_div_2_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, AddressInfoComponent_div_0_div_2_div_7_div_1_div_1_Template, 1, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, AddressInfoComponent_div_0_div_2_div_7_div_1_ng_template_2_Template, 1, 2, "ng-template", null, 21, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, AddressInfoComponent_div_0_div_2_div_7_div_1_ng_template_4_Template, 3, 2, "ng-template", null, 22, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r12 = ctx.$implicit;
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", item_r12.value === "-BLANK-")("ngIfElse", _r14);
} }
function AddressInfoComponent_div_0_div_2_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, AddressInfoComponent_div_0_div_2_div_7_div_1_Template, 6, 2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "addSpacer");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](3, 3, ctx_r4.filteredAdditionalValues, ctx_r4.compareFunc)));
} }
function AddressInfoComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "app-pager", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, AddressInfoComponent_div_0_div_2_div_5_Template, 8, 6, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](6, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](7, AddressInfoComponent_div_0_div_2_div_7_Template, 4, 6, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("src", ctx_r1.currentAvatarURL, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](6, 3, ctx_r1.commonInformation, ctx_r1.compareFunc));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.addresses.length > 0);
} }
function AddressInfoComponent_div_0_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](4, 1, "LC53491"), " ");
} }
function AddressInfoComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, AddressInfoComponent_div_0_div_2_Template, 8, 6, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, AddressInfoComponent_div_0_div_3_Template, 5, 3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.addressFetched);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r0.addressFetched);
} }
const SUPPORTEDIMGTYPES = ['jpg', 'png'];
class AddressInfoComponent {
    constructor(globals, addressService, imageService, webLinkService, modalService) {
        this.globals = globals;
        this.addressService = addressService;
        this.imageService = imageService;
        this.webLinkService = webLinkService;
        this.modalService = modalService;
        this.compareFunc = _types_address_order_display__WEBPACK_IMPORTED_MODULE_0__.compareAddressOrder;
        this.indexToShow = 0;
        this.addressFetched = false;
        this.addresses = [];
        this.indexToShow = this.addressService.addressIndex;
        this.indexSubscription = null;
        this.currentAvatarURL = '';
        this.filteredAdditionalValues = {};
        this.commonPointerData = {};
        this.docImage = {
            background: 'transparent no-repeat url(assets/images/icons_business_mail.png)',
        };
    }
    ngOnInit() {
        console.log('-----INIT-----');
        this.processAddresses();
        this.listenForIndexChanges();
        this.listenForAddressChanges();
    }
    ngOnDestroy() {
        if (this.indexSubscription != null) {
            this.indexSubscription.unsubscribe();
        }
    }
    get addressIndex() {
        return this.indexToShow;
    }
    // Filters empty values, hide list entries and saves current picture path
    filterAdditionalValues(index) {
        const toHide = this.addressService.toHideList;
        const additionalData = this.addresses[index].additional;
        const result = {};
        for (const key in additionalData) {
            if (additionalData[key]) {
                // Add Picture
                if (key.includes('image')) {
                    this.currentAvatarURL = this.imageService.getImgUrl(additionalData[key]);
                }
                // Skype Label
                if (key.includes('skype') &&
                    !additionalData[key].startsWith('Skype:')) {
                    additionalData[key] = 'Skype: ' + additionalData[key];
                }
                if (additionalData[key] !== '' && !toHide.includes(key)) {
                    result[key] = additionalData[key];
                }
            }
        }
        return result;
    }
    filterCommonInfo(index) {
        const toHide = this.addressService.toHideList;
        const commonData = this.addresses[index];
        const result = {};
        let key;
        for (key in commonData) {
            if ({}.hasOwnProperty.call(commonData, key)) {
                if (key !== 'additional' &&
                    commonData[key] !== '' &&
                    !toHide.includes(key)) {
                    result[key] = commonData[key];
                }
            }
        }
        this.setFilteredPointerLinks(index);
        console.log('COMMON');
        console.log(result);
        console.log(commonData);
        return result;
    }
    document(pointer) {
        this.modalService.changeType({
            newType: 'chooseOfficeDB',
            data: {
                currentContactPointer: pointer,
            },
        });
    }
    phonecall() {
        this.modalService.changeType({
            newType: 'searchTemplate',
        });
    }
    processAddresses() {
        console.log('-----ADDRESS INFO CALL GETADDRESSES-----');
        this.indexSubscription = this.addressService
            .processAddresses()
            .subscribe((addresses) => {
            this.addressFetched = true;
            this.addresses = addresses;
        });
    }
    setFilteredPointerLinks(index) {
        const companyPointer = this.addresses[index].companyPointer;
        const pointer = this.addresses[index].pointer;
        this.commonPointerData = {
            link: {},
            pointer: {},
            lcLabel: {},
            lcDoc: {},
        };
        if (companyPointer) {
            this.commonPointerData.link.companyName =
                this.webLinkService.convertToLink(companyPointer);
            this.commonPointerData.pointer.companyName = companyPointer;
            this.commonPointerData.lcLabel.companyName = 'LC73209';
            this.commonPointerData.lcDoc.companyName = 'LC73207';
        }
        if (pointer) {
            this.commonPointerData.link.name =
                this.webLinkService.convertToLink(pointer);
            this.commonPointerData.pointer.name = pointer;
            this.commonPointerData.lcLabel.name = 'LC73208';
            this.commonPointerData.lcDoc.name = 'LC73206';
        }
    }
    listenForIndexChanges() {
        this.addressService.addToIndexListenerList().subscribe((newIndex) => {
            if (this.addressService.hasAddress) {
                this.indexToShow = newIndex;
                this.commonInformation = this.filterCommonInfo(newIndex);
                this.filteredAdditionalValues = this.filterAdditionalValues(newIndex);
            }
        });
    }
    listenForAddressChanges() {
        this.addressService.waitForAddressChange().subscribe((resp) => {
            if (resp) {
                this.addresses = [];
                this.addressFetched = false;
                this.processAddresses();
            }
        });
    }
}
AddressInfoComponent.ɵfac = function AddressInfoComponent_Factory(t) { return new (t || AddressInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_globals_service__WEBPACK_IMPORTED_MODULE_1__.GlobalsService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_address_service__WEBPACK_IMPORTED_MODULE_2__.AddressService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_image_service__WEBPACK_IMPORTED_MODULE_3__.ImageService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_webint_link_service__WEBPACK_IMPORTED_MODULE_4__.WebintLinkService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_modal_service__WEBPACK_IMPORTED_MODULE_5__.ModalService)); };
AddressInfoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: AddressInfoComponent, selectors: [["app-address-info"]], decls: 2, vars: 1, consts: [["id", "addressContainer", 4, "ngIf"], ["id", "addressContainer"], ["class", "addressFlex", 4, "ngIf"], [4, "ngIf"], [1, "addressFlex"], [1, "addressLeft"], [1, "ownProfilePicture", 3, "src"], [1, "center"], [1, "addressRight"], ["class", "commonInfo", 4, "ngFor", "ngForOf"], ["class", "additionalInfo", 4, "ngIf"], [1, "commonInfo"], [1, "flexWrap"], [1, "addressLabel", 3, "title"], ["target", "_blank", 3, "href"], [1, "flexHR"], ["class", "bmDocumentation ml10", 3, "ngStyle", "title", "click", 4, "ngIf"], [1, "bmDocumentation", "ml10", 3, "ngStyle", "title", "click"], [1, "additionalInfo"], [4, "ngFor", "ngForOf"], [4, "ngIf", "ngIfElse"], ["urlLink", ""], ["addressDataEntry", ""], ["target", "_blank", 3, "href", 4, "ngIf", "ngIfElse"], ["removeHttp", ""], ["noLink", ""], [1, "linkStyle", 3, "title", "click"]], template: function AddressInfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, AddressInfoComponent_div_0_Template, 4, 2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "hr");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.addresses.length > 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _pager_pager_component__WEBPACK_IMPORTED_MODULE_6__.PagerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgStyle], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.KeyValuePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslatePipe, _pipes_add_spacer_pipe__WEBPACK_IMPORTED_MODULE_7__.AddSpacerPipe], styles: [".flexHR[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  margin: 0 0 0 5px;\n  border: none;\n  border-bottom: 1px dashed #bfbfbf;\n}\n\n.flexWrap[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: baseline;\n}\n\n.addressLabel[_ngcontent-%COMP%] {\n  margin-right: 5px;\n  max-width: 72%;\n  line-height: normal;\n}\n\n.addressRight[_ngcontent-%COMP%]   .commonInfo[_ngcontent-%COMP%]:first-of-type {\n  font-weight: bold;\n  font-size: 14px;\n}\n\n.addressRight[_ngcontent-%COMP%]   .commonInfo[_ngcontent-%COMP%]:nth-child(2)   a[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: #4d4d4d;\n}\n\n.addressRight[_ngcontent-%COMP%]   .commonInfo[_ngcontent-%COMP%]:nth-child(2)   a[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n}\n\n.linkStyle[_ngcontent-%COMP%] {\n  color: #2468bc;\n  text-decoration: none;\n  background-color: transparent;\n  cursor: pointer;\n}\n\n.linkStyle[_ngcontent-%COMP%]:hover {\n  color: #2468bc;\n  text-decoration: underline;\n}\n\n.ownProfilePicture[_ngcontent-%COMP%] {\n  object-fit: cover;\n  border-radius: 50%;\n  height: 55px;\n  width: 55px;\n}\n\n.addressFlex[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.addressRight[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.addressLeft[_ngcontent-%COMP%] {\n  padding-right: 10px;\n}\n\n.center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.additionalInfo[_ngcontent-%COMP%] {\n  padding-top: 5px;\n  line-height: normal;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZHJlc3MtaW5mby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxpQ0FBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0UscUJBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLDBCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQUNGIiwiZmlsZSI6ImFkZHJlc3MtaW5mby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mbGV4SFIge1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICBtYXJnaW46IDAgMCAwIDVweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjYmZiZmJmO1xyXG59XHJcblxyXG4uZmxleFdyYXAge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XHJcbn1cclxuXHJcbi5hZGRyZXNzTGFiZWwge1xyXG4gIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gIG1heC13aWR0aDogNzIlO1xyXG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbn1cclxuXHJcbi5hZGRyZXNzUmlnaHQgLmNvbW1vbkluZm86Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4uYWRkcmVzc1JpZ2h0IC5jb21tb25JbmZvOm50aC1jaGlsZCgyKSBhIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogIzRkNGQ0ZDtcclxufVxyXG5cclxuLmFkZHJlc3NSaWdodCAuY29tbW9uSW5mbzpudGgtY2hpbGQoMikgYTpob3ZlciB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4ubGlua1N0eWxlIHtcclxuICBjb2xvcjogIzI0NjhiYztcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ubGlua1N0eWxlOmhvdmVyIHtcclxuICBjb2xvcjogIzI0NjhiYztcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG5cclxuLm93blByb2ZpbGVQaWN0dXJlIHtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgaGVpZ2h0OiA1NXB4O1xyXG4gIHdpZHRoOiA1NXB4O1xyXG59XHJcblxyXG4uYWRkcmVzc0ZsZXgge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5hZGRyZXNzUmlnaHQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uYWRkcmVzc0xlZnQge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi5jZW50ZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmFkZGl0aW9uYWxJbmZvIHtcclxuICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 7729:
/*!*************************************************!*\
  !*** ./src/app/components/app/app.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services_modal_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/modal.service */ 1609);
/* harmony import */ var src_app_services_init_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/init.service */ 4705);
/* harmony import */ var src_app_services_connectors_connector_factory_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/connectors/connector-factory.service */ 7261);




class AppComponent {
    constructor(modalService, initService, connectorFactory) {
        this.modalService = modalService;
        this.initService = initService;
        this.connectorFactory = connectorFactory;
        this.title = 'BusinessMail';
        this.newCSS = {
            main: {},
            overflowContainer: {},
        };
        this.isInit = false;
    }
    ngOnInit() {
        this.connectorFactory.checkForApp().subscribe((connectorClass) => {
            this.connector = connectorClass;
            this.initConnectorData();
        });
        this.modalService.waitForModalDesign().subscribe((resp) => {
            this.initModalItems();
        });
        this.initService.waitForInit().subscribe((resp) => {
            this.isInit = resp;
        });
        window.addEventListener('keydown', this.ownReload);
    }
    initModalItems() {
        this.modalItems = this.modalService.getModalItems();
        console.log(this.modalItems);
        this.isInit = true;
    }
    initConnectorData() {
        this.connector.waitForCSS().subscribe((resp) => {
            this.newCSS = resp;
        });
        this.connector.getData();
    }
    ownReload(e) {
        if ((e.which || e.keyCode) === 116) {
            e.preventDefault();
            const curURL = window.location.href;
            if (curURL.endsWith('/')) {
                window.location.href = curURL.substr(0, curURL.length - 1);
            }
            else {
                window.location.reload();
            }
        }
    }
    get isInit() {
        return this.init;
    }
    set isInit(newVal) {
        this.init = newVal;
    }
    get mItems() {
        return this.modalItems;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_modal_service__WEBPACK_IMPORTED_MODULE_0__.ModalService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_init_service__WEBPACK_IMPORTED_MODULE_1__.InitService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_connectors_connector_factory_service__WEBPACK_IMPORTED_MODULE_2__.ConnectorFactory)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 14, vars: 4, consts: [["id", "overflowContainer", 3, "ngStyle"], ["id", "main", 3, "ngStyle"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "app-loader");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "app-site-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "app-config");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "app-mail-address");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "app-create-address-block");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "app-address-info");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "app-additional-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "app-activities");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "app-messages");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "app-modal");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "app-webint-input");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", ctx.newCSS.overflowContainer);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", ctx.newCSS.main);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("visibility", ctx.isInit ? "visible" : "hidden");
    } }, styles: ["#main[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  width: 90%;\n}\n\n#overflowContainer[_ngcontent-%COMP%] {\n  overflow: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0VBQ0EsVUFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtBQUNGIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNtYWluIHtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxuICB3aWR0aDogOTAlO1xyXG59XHJcblxyXG4jb3ZlcmZsb3dDb250YWluZXIge1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 8614:
/*!*******************************************************!*\
  !*** ./src/app/components/config/config.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigComponent": () => (/* binding */ ConfigComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/config.service */ 4148);


class ConfigComponent {
    constructor(configService) {
        this.configService = configService;
    }
    ngOnInit() {
        console.log('Config Init');
        this.configService.subject.subscribe(console.log);
    }
    setWebInt() {
        this.configService.processWebInt();
    }
}
ConfigComponent.ɵfac = function ConfigComponent_Factory(t) { return new (t || ConfigComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_config_service__WEBPACK_IMPORTED_MODULE_0__.ConfigService)); };
ConfigComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ConfigComponent, selectors: [["app-config"]], decls: 0, vars: 0, template: function ConfigComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb25maWcuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 7179:
/*!*************************************************************************************!*\
  !*** ./src/app/components/configuration-actions/configuration-actions.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigurationActionsComponent": () => (/* binding */ ConfigurationActionsComponent)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _otherClasses_config_items_default_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../otherClasses/config-items-default.class */ 5692);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var src_app_services_connection_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/connection.service */ 2377);
/* harmony import */ var src_app_services_create_address_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/create-address.service */ 2654);
/* harmony import */ var src_app_services_globals_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/globals.service */ 660);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 9790);








function ConfigurationActionsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ConfigurationActionsComponent_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r1.toggleClass(2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](ctx_r0.iconConfigLocal[2].model.classAssignment[ctx_r0.iconConfigLocal[2].model.value]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 5, ctx_r0.iconConfigLocal[2].model.titleLC[ctx_r0.iconConfigLocal[2].model.value]));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", ctx_r0.configIcon);
} }
class ConfigurationActionsComponent {
    constructor(connectionService, createService, globals) {
        this.connectionService = connectionService;
        this.createService = createService;
        this.globals = globals;
        this.iconConfigLocal = _otherClasses_config_items_default_class__WEBPACK_IMPORTED_MODULE_0__.iconDefaultConfig;
        this.path = 'config';
        this.configIcon = {
            background: 'transparent url(assets/images/icons_business_mail.png) no-repeat',
        };
        this.configRestObj = {};
        this.createService.config = this.iconConfigLocal;
    }
    ngOnInit() {
        this.initConfig();
    }
    toggleClass(configTypeIndex, callOpenToggle = true) {
        console.log(this.configData);
        if (configTypeIndex < this.iconConfigLocal.length) {
            let curObj = this.iconConfigLocal[configTypeIndex].model;
            const objKeysArr = Object.keys(curObj.classAssignment);
            curObj = this.changeIcon(curObj, objKeysArr);
            if (this.configData &&
                this.configData[curObj.name] &&
                this.configData[curObj.name].inRest) {
                this.configRestObj[curObj.name] = curObj.value;
                let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpParams();
                for (const key of Object.keys(this.configRestObj)) {
                    params = params.set(key, this.configRestObj[key]);
                }
                if (configTypeIndex === 1) {
                    // Open Mail
                    this.globals.openMail = Boolean(curObj.value);
                }
                else if (configTypeIndex === 0) {
                    // Delete Attachments
                    this.globals.deleteAttachments = Boolean(curObj.value);
                }
                this.connectionService
                    .postReq(this.path, params, false, undefined, true)
                    .subscribe({
                    next: (resp) => {
                        // Do nothing
                    },
                    error: (errHttp) => {
                        // TODO Errorhandling
                        console.log(errHttp);
                    },
                    complete: () => {
                        // Do nothing
                    },
                });
            }
            else if (this.configData && this.configData.createAddress) {
                if (callOpenToggle) {
                    this.createService.toggleOpen();
                }
            }
        }
    }
    changeIcon(curObj, objKeysArr) {
        curObj.value = objKeysArr[(objKeysArr.indexOf(curObj.value) + 1) % objKeysArr.length];
        return curObj;
    }
    initConfig() {
        console.log(this.connectionService);
        this.connectionService.getReqNoCache(this.path, null).subscribe({
            next: (resp) => {
                console.log(resp);
                this.initConfigClasses(resp);
            },
            error: (errHttp) => {
                this.connectionService.processPath().subscribe(() => {
                    //this.initConfig();
                });
            },
            complete: () => {
                // Do nothing
            },
        });
    }
    initConfigClasses(resp) {
        this.configRestObj = resp;
        const tmpConfigData = {};
        let forIndex = 0;
        for (const ele of this.iconConfigLocal) {
            const eleName = ele.model.name;
            let currentConfig;
            if (!currentConfig) {
                currentConfig = {
                    inRest: false,
                    index: 0,
                };
            }
            else {
                currentConfig = this.configData[eleName];
            }
            if (resp[eleName] || resp[eleName] === '') {
                ele.model.value = resp[eleName];
                currentConfig.inRest = true;
                if (eleName === 'deleteAttachments' || eleName === 'openMail') {
                    this.globals[eleName] = Boolean(resp[eleName]);
                }
            }
            console.log('RESP:' + resp);
            console.log(resp);
            tmpConfigData[eleName] = currentConfig;
            currentConfig.index = forIndex;
            forIndex++;
        }
        this.configData = tmpConfigData;
    }
}
ConfigurationActionsComponent.ɵfac = function ConfigurationActionsComponent_Factory(t) { return new (t || ConfigurationActionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_connection_service__WEBPACK_IMPORTED_MODULE_1__.ConnectionService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_create_address_service__WEBPACK_IMPORTED_MODULE_2__.CreateAddressService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_globals_service__WEBPACK_IMPORTED_MODULE_3__.GlobalsService)); };
ConfigurationActionsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ConfigurationActionsComponent, selectors: [["app-configuration-actions"]], decls: 6, vars: 15, consts: [[1, "clearfix"], ["id", "openCreate", 3, "class", "title", "ngStyle", "click", 4, "ngIf"], ["id", "openMail", 3, "title", "ngStyle", "click"], ["id", "deleteAttachments", 3, "title", "ngStyle", "click"], ["id", "openCreate", 3, "title", "ngStyle", "click"]], template: function ConfigurationActionsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ConfigurationActionsComponent_div_1_Template, 2, 7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ConfigurationActionsComponent_Template_div_click_2_listener() { return ctx.toggleClass(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ConfigurationActionsComponent_Template_div_click_4_listener() { return ctx.toggleClass(0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.globals.actionsAllowed);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](ctx.iconConfigLocal[1].model.classAssignment[ctx.iconConfigLocal[1].model.value]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 11, ctx.iconConfigLocal[1].model.titleLC[ctx.iconConfigLocal[1].model.value]));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", ctx.configIcon);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](ctx.iconConfigLocal[0].model.classAssignment[ctx.iconConfigLocal[0].model.value]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](5, 13, ctx.iconConfigLocal[0].model.titleLC[ctx.iconConfigLocal[0].model.value]));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", ctx.configIcon);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgStyle], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe], styles: [".bmPlus[_ngcontent-%COMP%], .bmMinus[_ngcontent-%COMP%], .bmDocOFF[_ngcontent-%COMP%], .bmDocON[_ngcontent-%COMP%], .bmAttachInclude[_ngcontent-%COMP%], .bmAttachExclude[_ngcontent-%COMP%] {\n  float: left;\n  width: 22px;\n  height: 21px;\n  margin-right: 2px;\n  cursor: pointer;\n}\n\n.bmDocOFF[_ngcontent-%COMP%] {\n  background-position: -88px 0px !important;\n}\n\n.bmDocON[_ngcontent-%COMP%] {\n  background-position: -110px 0px !important;\n}\n\n.bmMinus[_ngcontent-%COMP%] {\n  background-position: -66px -21px !important;\n}\n\n.bmPlus[_ngcontent-%COMP%] {\n  background-position: -44px -21px !important;\n}\n\n.bmAttachInclude[_ngcontent-%COMP%] {\n  background-position: -22px -21px !important;\n}\n\n.bmAttachExclude[_ngcontent-%COMP%] {\n  background-position: 0px -21px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZ3VyYXRpb24tYWN0aW9ucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0VBTUUsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5Q0FBQTtBQUNGOztBQUVBO0VBQ0UsMENBQUE7QUFDRjs7QUFFQTtFQUNFLDJDQUFBO0FBQ0Y7O0FBRUE7RUFDRSwyQ0FBQTtBQUNGOztBQUVBO0VBQ0UsMkNBQUE7QUFDRjs7QUFFQTtFQUNFLHlDQUFBO0FBQ0YiLCJmaWxlIjoiY29uZmlndXJhdGlvbi1hY3Rpb25zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJtUGx1cyxcclxuLmJtTWludXMsXHJcbi5ibURvY09GRixcclxuLmJtRG9jT04sXHJcbi5ibUF0dGFjaEluY2x1ZGUsXHJcbi5ibUF0dGFjaEV4Y2x1ZGUge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHdpZHRoOiAyMnB4O1xyXG4gIGhlaWdodDogMjFweDtcclxuICBtYXJnaW4tcmlnaHQ6IDJweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5ibURvY09GRiB7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTg4cHggMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5ibURvY09OIHtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTEwcHggMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5ibU1pbnVzIHtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNjZweCAtMjFweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYm1QbHVzIHtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNDRweCAtMjFweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYm1BdHRhY2hJbmNsdWRlIHtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjJweCAtMjFweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYm1BdHRhY2hFeGNsdWRlIHtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwcHggLTIxcHggIWltcG9ydGFudDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 7015:
/*!***********************************************************************************!*\
  !*** ./src/app/components/create-address-block/create-address-block.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateAddressBlockComponent": () => (/* binding */ CreateAddressBlockComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var src_app_services_create_address_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/create-address.service */ 2654);
/* harmony import */ var src_app_services_modal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/modal.service */ 1609);
/* harmony import */ var src_app_services_globals_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/globals.service */ 660);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 9790);






function CreateAddressBlockComponent_0_ng_template_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CreateAddressBlockComponent_0_ng_template_0_div_1_Template_div_click_4_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5); const item_r3 = restoredCtx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3); return ctx_r4.showModal(item_r3.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("float", "left");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 5, item_r3.lc), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("id", item_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", ctx_r2.createPlusImage);
} }
function CreateAddressBlockComponent_0_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, CreateAddressBlockComponent_0_ng_template_0_div_1_Template, 5, 7, "div", 2);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.items);
} }
function CreateAddressBlockComponent_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, CreateAddressBlockComponent_0_ng_template_0_Template, 2, 1, "ng-template", 1);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.isOpen);
} }
class CreateAddressBlockComponent {
    constructor(createService, modalService, globals) {
        this.createService = createService;
        this.modalService = modalService;
        this.globals = globals;
        this.createPlusImage = {
            background: 'transparent no-repeat url(' + globals.webInt + 'icons_general.png)',
        };
    }
    ngOnInit() {
        this.connectToService();
    }
    update(newVal) {
        this.isOpen = newVal;
    }
    showModal(val) {
        this.modalService.changeType({
            newType: val,
        });
    }
    connectToService() {
        this.createService.connect().subscribe((resp) => {
            this.update(resp);
            this.items = this.createService.items;
        });
    }
}
CreateAddressBlockComponent.ɵfac = function CreateAddressBlockComponent_Factory(t) { return new (t || CreateAddressBlockComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_create_address_service__WEBPACK_IMPORTED_MODULE_0__.CreateAddressService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_modal_service__WEBPACK_IMPORTED_MODULE_1__.ModalService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_globals_service__WEBPACK_IMPORTED_MODULE_2__.GlobalsService)); };
CreateAddressBlockComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CreateAddressBlockComponent, selectors: [["app-create-address-block"]], decls: 1, vars: 1, consts: [[4, "ngIf"], [3, "ngIf"], ["class", "clearfix createBlock", 4, "ngFor", "ngForOf"], [1, "clearfix", "createBlock"], [1, "createPlus", 3, "id", "ngStyle", "click"]], template: function CreateAddressBlockComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, CreateAddressBlockComponent_0_Template, 1, 1, undefined, 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.globals.actionsAllowed);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgStyle], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhdGUtYWRkcmVzcy1ibG9jay5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 5035:
/*!***********************************************************!*\
  !*** ./src/app/components/language/language.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LanguageComponent": () => (/* binding */ LanguageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);

class LanguageComponent {
    constructor() { }
    ngOnInit() {
    }
}
LanguageComponent.ɵfac = function LanguageComponent_Factory(t) { return new (t || LanguageComponent)(); };
LanguageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LanguageComponent, selectors: [["app-language"]], decls: 2, vars: 0, template: function LanguageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "language works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsYW5ndWFnZS5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 8868:
/*!*******************************************************!*\
  !*** ./src/app/components/loader/loader.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoaderComponent": () => (/* binding */ LoaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/loader.service */ 8555);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 8583);



function LoaderComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 11);
} }
function LoaderComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LoaderComponent_div_0_div_1_Template, 1, 0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r0.isModal);
} }
class LoaderComponent {
    constructor(loader) {
        this.loader = loader;
        this.loaderActive = false;
        this.isModal = false;
    }
    ngOnInit() {
        this.loaderSubscription = this.loader
            .connectToService()
            .subscribe((resp) => {
            this.changeState(resp.activate, resp.modal);
        });
    }
    ngOnDestroy() {
        console.log('DESTROYED');
    }
    changeState(activeState, isModal = this.isModal) {
        console.log(activeState + ' ' + isModal);
        // ExpressionChangedAfterItHasBeenCheckedError Fix
        setTimeout(() => {
            this.loaderActive = activeState;
            this.isModal = isModal;
        }, 1);
    }
}
LoaderComponent.ɵfac = function LoaderComponent_Factory(t) { return new (t || LoaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_loader_service__WEBPACK_IMPORTED_MODULE_0__.LoaderService)); };
LoaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoaderComponent, selectors: [["app-loader"]], decls: 1, vars: 1, consts: [["class", "loadingContainer", 4, "ngIf"], [1, "loadingContainer"], ["class", "blank-background", 4, "ngIf"], [1, "shadow-messagebox"], ["id", "loadingFiller"], [1, "loaderContainerLeft"], [1, "loader-left"], [1, "loader-bottom"], [1, "loaderContainerRight"], [1, "loader-right"], [1, "loader-top"], [1, "blank-background"]], template: function LoaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, LoaderComponent_div_0_Template, 10, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loaderActive);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf], styles: [".shadow[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 99;\n  background-color: #eeeeee;\n  opacity: 0.5;\n  filter: alpha(opacity=50);\n  color: #111111;\n  font-size: 20px;\n  font-weight: bold;\n  font-style: normal;\n  text-align: center;\n}\n\n.shadow-transparent[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 99;\n  background-color: #ffffff;\n  opacity: 0;\n  filter: alpha(opacity=0);\n  color: #ffffff;\n  font-size: 20px;\n  font-weight: bold;\n  font-style: normal;\n  text-align: center;\n}\n\n.shadow-messagebox[_ngcontent-%COMP%], .blank-background[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n.shadow-messagebox[_ngcontent-%COMP%] {\n  z-index: 9999;\n  background-color: #000000;\n  opacity: 0.4;\n  filter: alpha(opacity=50);\n  color: #111111;\n  font-size: 20px;\n  font-weight: bold;\n  font-style: normal;\n  text-align: center;\n}\n\n.blank-background[_ngcontent-%COMP%] {\n  z-index: 9900;\n  background-color: #ffffff;\n}\n\n.loader-left[_ngcontent-%COMP%] {\n  position: relative;\n  top: 0;\n  left: 0;\n  height: 41px;\n  width: 11px;\n  box-shadow: inset 0px 41px 0px 0px grey;\n  animation: fillAnimationLeft 3s linear infinite normal;\n}\n\n.loader-right[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 17px;\n  height: 41px;\n  width: 11px;\n  box-shadow: inset 0px -41px 0px 0px grey;\n  animation: fillAnimationRight 3s linear infinite normal;\n}\n\n.loader-bottom[_ngcontent-%COMP%] {\n  position: relative;\n  top: -11px;\n  left: 0px;\n  height: 11px;\n  width: 28px;\n  box-shadow: inset 28px 0px 0px 0px grey;\n  animation: fillAnimationBottom 3s linear infinite normal;\n}\n\n.loader-top[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  height: 11px;\n  width: 28px;\n  content: \"\";\n  box-shadow: inset -28px 0px 0px 0px grey;\n  animation: fillAnimationTop 3s linear infinite normal;\n}\n\n.loaderContainerLeft[_ngcontent-%COMP%], .loaderContainerRight[_ngcontent-%COMP%] {\n  height: 41px;\n  width: 28px;\n  overflow: hidden;\n  position: absolute;\n  display: inline-block;\n}\n\n.loaderContainerLeft[_ngcontent-%COMP%] {\n  left: calc(50% - 7px);\n}\n\n.loaderContainerRight[_ngcontent-%COMP%] {\n  left: calc(50% + 7px);\n}\n\n#loadingFiller[_ngcontent-%COMP%] {\n  height: calc(50% - 20.5px);\n}\n\n#shadowBox[_ngcontent-%COMP%] {\n  display: none;\n}\n\n@keyframes fillAnimationLeft {\n  0% {\n    box-shadow: inset 0px 0px 0px 0px grey;\n    top: 0;\n  }\n  20% {\n    box-shadow: inset 0px 41px 0px 0px grey;\n    top: 0;\n  }\n  40% {\n    box-shadow: inset 0px 41px 0px 0px grey;\n    top: 0;\n  }\n  60% {\n    box-shadow: inset 0px 28px 0px 0px grey;\n    top: 41px;\n  }\n  80% {\n    box-shadow: inset 0px 28px 0px 0px grey;\n    top: 41px;\n  }\n  100% {\n    box-shadow: inset 0px 28px 0px 0px grey;\n    top: 41px;\n  }\n}\n\n@keyframes fillAnimationRight {\n  0% {\n    box-shadow: inset 0px 0px 0px 0px grey;\n    top: 0;\n  }\n  20% {\n    box-shadow: inset 0px -41px 0px 0px grey;\n    top: 0;\n  }\n  40% {\n    box-shadow: inset 0px -41px 0px 0px grey;\n    top: 0;\n  }\n  60% {\n    box-shadow: inset 0px -28px 0px 0px grey;\n    top: -41px;\n  }\n  80% {\n    box-shadow: inset 0px -28px 0px 0px grey;\n    top: -41px;\n  }\n  100% {\n    box-shadow: inset 0px -28px 0px 0px grey;\n    top: -41px;\n  }\n}\n\n@keyframes fillAnimationBottom {\n  0% {\n    box-shadow: inset 0px 0px 0px 0px grey;\n    left: 0px;\n  }\n  20% {\n    box-shadow: inset 0px 0px 0px 0px grey;\n    left: 11px;\n  }\n  40% {\n    box-shadow: inset 28px 0px 0px 0px grey;\n    left: 11px;\n  }\n  41% {\n    box-shadow: inset 28px 0px 0px 0px grey;\n    left: 0px;\n  }\n  59% {\n    box-shadow: inset 28px 0px 0px 0px grey;\n    left: 0px;\n  }\n  75% {\n    box-shadow: inset 28px 0px 0px 0px grey;\n    left: 28px;\n  }\n  100% {\n    box-shadow: inset 28px 0px 0px 0px grey;\n    left: 28px;\n  }\n}\n\n@keyframes fillAnimationTop {\n  0% {\n    box-shadow: inset 0px 0px 0px 0px grey;\n    left: 0px;\n  }\n  20% {\n    box-shadow: inset 0px 0px 0px 0px grey;\n    left: -11px;\n  }\n  40% {\n    box-shadow: inset -28px 0px 0px 0px grey;\n    left: -11px;\n  }\n  41% {\n    box-shadow: inset -28px 0px 0px 0px grey;\n    left: 0px;\n  }\n  59% {\n    box-shadow: inset -28px 0px 0px 0px grey;\n    left: 0px;\n  }\n  75% {\n    box-shadow: inset -28px 0px 0px 0px grey;\n    left: -28px;\n  }\n  100% {\n    box-shadow: inset -28px 0px 0px 0px grey;\n    left: -28px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLFVBQUE7RUFDQSx3QkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7O0VBRUUsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSx1Q0FBQTtFQUVBLHNEQUFBO0FBQUY7O0FBR0E7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSx3Q0FBQTtFQUVBLHVEQUFBO0FBREY7O0FBSUE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSx1Q0FBQTtFQUNBLHdEQUFBO0FBREY7O0FBSUE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esd0NBQUE7RUFFQSxxREFBQTtBQUZGOztBQUtBOztFQUVFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FBRkY7O0FBS0E7RUFDRSxxQkFBQTtBQUZGOztBQUtBO0VBQ0UscUJBQUE7QUFGRjs7QUFLQTtFQUNFLDBCQUFBO0FBRkY7O0FBS0E7RUFDRSxhQUFBO0FBRkY7O0FBS0E7RUFDRTtJQUNFLHNDQUFBO0lBQ0EsTUFBQTtFQUZGO0VBSUE7SUFDRSx1Q0FBQTtJQUNBLE1BQUE7RUFGRjtFQUlBO0lBQ0UsdUNBQUE7SUFDQSxNQUFBO0VBRkY7RUFJQTtJQUNFLHVDQUFBO0lBQ0EsU0FBQTtFQUZGO0VBSUE7SUFDRSx1Q0FBQTtJQUNBLFNBQUE7RUFGRjtFQUlBO0lBQ0UsdUNBQUE7SUFDQSxTQUFBO0VBRkY7QUFDRjs7QUFLQTtFQUNFO0lBQ0Usc0NBQUE7SUFDQSxNQUFBO0VBSEY7RUFLQTtJQUNFLHdDQUFBO0lBQ0EsTUFBQTtFQUhGO0VBS0E7SUFDRSx3Q0FBQTtJQUNBLE1BQUE7RUFIRjtFQUtBO0lBQ0Usd0NBQUE7SUFDQSxVQUFBO0VBSEY7RUFLQTtJQUNFLHdDQUFBO0lBQ0EsVUFBQTtFQUhGO0VBS0E7SUFDRSx3Q0FBQTtJQUNBLFVBQUE7RUFIRjtBQUNGOztBQU1BO0VBQ0U7SUFDRSxzQ0FBQTtJQUNBLFNBQUE7RUFKRjtFQU1BO0lBQ0Usc0NBQUE7SUFDQSxVQUFBO0VBSkY7RUFNQTtJQUNFLHVDQUFBO0lBQ0EsVUFBQTtFQUpGO0VBTUE7SUFDRSx1Q0FBQTtJQUNBLFNBQUE7RUFKRjtFQU1BO0lBQ0UsdUNBQUE7SUFDQSxTQUFBO0VBSkY7RUFNQTtJQUNFLHVDQUFBO0lBQ0EsVUFBQTtFQUpGO0VBTUE7SUFDRSx1Q0FBQTtJQUNBLFVBQUE7RUFKRjtBQUNGOztBQU9BO0VBQ0U7SUFDRSxzQ0FBQTtJQUNBLFNBQUE7RUFMRjtFQU9BO0lBQ0Usc0NBQUE7SUFDQSxXQUFBO0VBTEY7RUFPQTtJQUNFLHdDQUFBO0lBQ0EsV0FBQTtFQUxGO0VBT0E7SUFDRSx3Q0FBQTtJQUNBLFNBQUE7RUFMRjtFQU9BO0lBQ0Usd0NBQUE7SUFDQSxTQUFBO0VBTEY7RUFPQTtJQUNFLHdDQUFBO0lBQ0EsV0FBQTtFQUxGO0VBT0E7SUFDRSx3Q0FBQTtJQUNBLFdBQUE7RUFMRjtBQUNGIiwiZmlsZSI6ImxvYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaGFkb3cge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB6LWluZGV4OiA5OTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWVlO1xyXG4gIG9wYWNpdHk6IDAuNTtcclxuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9NTApO1xyXG4gIGNvbG9yOiAjMTExMTExO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uc2hhZG93LXRyYW5zcGFyZW50IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgei1pbmRleDogOTk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICBvcGFjaXR5OiAwO1xyXG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eT0wKTtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnNoYWRvdy1tZXNzYWdlYm94LFxyXG4uYmxhbmstYmFja2dyb3VuZCB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxufVxyXG5cclxuLnNoYWRvdy1tZXNzYWdlYm94IHtcclxuICB6LWluZGV4OiA5OTk5O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XHJcbiAgb3BhY2l0eTogMC40O1xyXG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eT01MCk7XHJcbiAgY29sb3I6ICMxMTExMTE7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5ibGFuay1iYWNrZ3JvdW5kIHtcclxuICB6LWluZGV4OiA5OTAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbi5sb2FkZXItbGVmdCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGhlaWdodDogNDFweDtcclxuICB3aWR0aDogMTFweDtcclxuICBib3gtc2hhZG93OiBpbnNldCAwcHggNDFweCAwcHggMHB4IGdyZXk7XHJcblxyXG4gIGFuaW1hdGlvbjogZmlsbEFuaW1hdGlvbkxlZnQgM3MgbGluZWFyIGluZmluaXRlIG5vcm1hbDtcclxufVxyXG5cclxuLmxvYWRlci1yaWdodCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAxN3B4O1xyXG4gIGhlaWdodDogNDFweDtcclxuICB3aWR0aDogMTFweDtcclxuICBib3gtc2hhZG93OiBpbnNldCAwcHggLTQxcHggMHB4IDBweCBncmV5O1xyXG5cclxuICBhbmltYXRpb246IGZpbGxBbmltYXRpb25SaWdodCAzcyBsaW5lYXIgaW5maW5pdGUgbm9ybWFsO1xyXG59XHJcblxyXG4ubG9hZGVyLWJvdHRvbSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogLTExcHg7XHJcbiAgbGVmdDogMHB4O1xyXG4gIGhlaWdodDogMTFweDtcclxuICB3aWR0aDogMjhweDtcclxuICBib3gtc2hhZG93OiBpbnNldCAyOHB4IDBweCAwcHggMHB4IGdyZXk7XHJcbiAgYW5pbWF0aW9uOiBmaWxsQW5pbWF0aW9uQm90dG9tIDNzIGxpbmVhciBpbmZpbml0ZSBub3JtYWw7XHJcbn1cclxuXHJcbi5sb2FkZXItdG9wIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwcHg7XHJcbiAgbGVmdDogMHB4O1xyXG4gIGhlaWdodDogMTFweDtcclxuICB3aWR0aDogMjhweDtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGJveC1zaGFkb3c6IGluc2V0IC0yOHB4IDBweCAwcHggMHB4IGdyZXk7XHJcblxyXG4gIGFuaW1hdGlvbjogZmlsbEFuaW1hdGlvblRvcCAzcyBsaW5lYXIgaW5maW5pdGUgbm9ybWFsO1xyXG59XHJcblxyXG4ubG9hZGVyQ29udGFpbmVyTGVmdCxcclxuLmxvYWRlckNvbnRhaW5lclJpZ2h0IHtcclxuICBoZWlnaHQ6IDQxcHg7XHJcbiAgd2lkdGg6IDI4cHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4ubG9hZGVyQ29udGFpbmVyTGVmdCB7XHJcbiAgbGVmdDogY2FsYyg1MCUgLSA3cHgpO1xyXG59XHJcblxyXG4ubG9hZGVyQ29udGFpbmVyUmlnaHQge1xyXG4gIGxlZnQ6IGNhbGMoNTAlICsgN3B4KTtcclxufVxyXG5cclxuI2xvYWRpbmdGaWxsZXIge1xyXG4gIGhlaWdodDogY2FsYyg1MCUgLSAyMC41cHgpO1xyXG59XHJcblxyXG4jc2hhZG93Qm94IHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZpbGxBbmltYXRpb25MZWZ0IHtcclxuICAwJSB7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDBweCAwcHggZ3JleTtcclxuICAgIHRvcDogMDtcclxuICB9XHJcbiAgMjAlIHtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCA0MXB4IDBweCAwcHggZ3JleTtcclxuICAgIHRvcDogMDtcclxuICB9XHJcbiAgNDAlIHtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCA0MXB4IDBweCAwcHggZ3JleTtcclxuICAgIHRvcDogMDtcclxuICB9XHJcbiAgNjAlIHtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAyOHB4IDBweCAwcHggZ3JleTtcclxuICAgIHRvcDogNDFweDtcclxuICB9XHJcbiAgODAlIHtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAyOHB4IDBweCAwcHggZ3JleTtcclxuICAgIHRvcDogNDFweDtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwcHggMjhweCAwcHggMHB4IGdyZXk7XHJcbiAgICB0b3A6IDQxcHg7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZpbGxBbmltYXRpb25SaWdodCB7XHJcbiAgMCUge1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCAwcHggMHB4IGdyZXk7XHJcbiAgICB0b3A6IDA7XHJcbiAgfVxyXG4gIDIwJSB7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwcHggLTQxcHggMHB4IDBweCBncmV5O1xyXG4gICAgdG9wOiAwO1xyXG4gIH1cclxuICA0MCUge1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IC00MXB4IDBweCAwcHggZ3JleTtcclxuICAgIHRvcDogMDtcclxuICB9XHJcbiAgNjAlIHtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAtMjhweCAwcHggMHB4IGdyZXk7XHJcbiAgICB0b3A6IC00MXB4O1xyXG4gIH1cclxuICA4MCUge1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IC0yOHB4IDBweCAwcHggZ3JleTtcclxuICAgIHRvcDogLTQxcHg7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IC0yOHB4IDBweCAwcHggZ3JleTtcclxuICAgIHRvcDogLTQxcHg7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZpbGxBbmltYXRpb25Cb3R0b20ge1xyXG4gIDAlIHtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggMHB4IDBweCBncmV5O1xyXG4gICAgbGVmdDogMHB4O1xyXG4gIH1cclxuICAyMCUge1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCAwcHggMHB4IGdyZXk7XHJcbiAgICBsZWZ0OiAxMXB4O1xyXG4gIH1cclxuICA0MCUge1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMjhweCAwcHggMHB4IDBweCBncmV5O1xyXG4gICAgbGVmdDogMTFweDtcclxuICB9XHJcbiAgNDElIHtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDI4cHggMHB4IDBweCAwcHggZ3JleTtcclxuICAgIGxlZnQ6IDBweDtcclxuICB9XHJcbiAgNTklIHtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDI4cHggMHB4IDBweCAwcHggZ3JleTtcclxuICAgIGxlZnQ6IDBweDtcclxuICB9XHJcbiAgNzUlIHtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDI4cHggMHB4IDBweCAwcHggZ3JleTtcclxuICAgIGxlZnQ6IDI4cHg7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMjhweCAwcHggMHB4IDBweCBncmV5O1xyXG4gICAgbGVmdDogMjhweDtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmlsbEFuaW1hdGlvblRvcCB7XHJcbiAgMCUge1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCAwcHggMHB4IGdyZXk7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgfVxyXG4gIDIwJSB7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDBweCAwcHggZ3JleTtcclxuICAgIGxlZnQ6IC0xMXB4O1xyXG4gIH1cclxuICA0MCUge1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgLTI4cHggMHB4IDBweCAwcHggZ3JleTtcclxuICAgIGxlZnQ6IC0xMXB4O1xyXG4gIH1cclxuICA0MSUge1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgLTI4cHggMHB4IDBweCAwcHggZ3JleTtcclxuICAgIGxlZnQ6IDBweDtcclxuICB9XHJcbiAgNTklIHtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IC0yOHB4IDBweCAwcHggMHB4IGdyZXk7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgfVxyXG4gIDc1JSB7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAtMjhweCAwcHggMHB4IDBweCBncmV5O1xyXG4gICAgbGVmdDogLTI4cHg7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgLTI4cHggMHB4IDBweCAwcHggZ3JleTtcclxuICAgIGxlZnQ6IC0yOHB4O1xyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 1839:
/*!*******************************************************************!*\
  !*** ./src/app/components/mail-address/mail-address.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MailAddressComponent": () => (/* binding */ MailAddressComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var src_app_services_globals_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/globals.service */ 660);
/* harmony import */ var src_app_services_modal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/modal.service */ 1609);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8583);




function MailAddressComponent_p_4_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " [");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MailAddressComponent_p_4_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r1.openModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "] ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("+", ctx_r0.globals.curMailAddrCount, "");
} }
class MailAddressComponent {
    constructor(globals, modalService) {
        this.globals = globals;
        this.modalService = modalService;
    }
    ngOnInit() { }
    openModal() {
        this.modalService.changeType({
            newType: 'selectMailAddress',
        });
    }
}
MailAddressComponent.ɵfac = function MailAddressComponent_Factory(t) { return new (t || MailAddressComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_globals_service__WEBPACK_IMPORTED_MODULE_0__.GlobalsService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_modal_service__WEBPACK_IMPORTED_MODULE_1__.ModalService)); };
MailAddressComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: MailAddressComponent, selectors: [["app-mail-address"]], decls: 5, vars: 2, consts: [["id", "mailAddrWrapper"], ["class", "ghostButton", 4, "ngIf"], [1, "ghostButton"], [3, "click"]], template: function MailAddressComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, MailAddressComponent_p_4_Template, 5, 1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.globals.curMailAddr);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.globals.curMailAddrCount > 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf], styles: ["#mailAddrWrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n\n#mailAddrWrapper[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  margin: 0px;\n}\n\n.link[_ngcontent-%COMP%] {\n  color: #007bff;\n  text-decoration: none;\n  background-color: transparent;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haWwtYWRkcmVzcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0FBQ0YiLCJmaWxlIjoibWFpbC1hZGRyZXNzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI21haWxBZGRyV3JhcHBlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbiNtYWlsQWRkcldyYXBwZXIgPiBwIHtcclxuICBtYXJnaW46IDBweDtcclxufVxyXG5cclxuLmxpbmsge1xyXG4gIGNvbG9yOiAjMDA3YmZmO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 5995:
/*!***********************************************************!*\
  !*** ./src/app/components/messages/messages.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessagesComponent": () => (/* binding */ MessagesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/message.service */ 2684);


class MessagesComponent {
    constructor(messageService) {
        this.messageService = messageService;
        this.toastrOptions = {};
    }
    ngOnInit() { }
}
MessagesComponent.ɵfac = function MessagesComponent_Factory(t) { return new (t || MessagesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_message_service__WEBPACK_IMPORTED_MODULE_0__.MessageService)); };
MessagesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MessagesComponent, selectors: [["app-messages"]], decls: 0, vars: 0, template: function MessagesComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZXNzYWdlcy5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 3145:
/*!***************************************************************!*\
  !*** ./src/app/components/modal/base/modal-base.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalBaseComponent": () => (/* binding */ ModalBaseComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 9790);



// eslint-disable-next-line @angular-eslint/directive-class-suffix
class ModalBaseComponent {
    constructor(translate) {
        this.translate = translate;
        this.messageEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.nextModal = null;
        this.previousModal = null;
        translate.setDefaultLang('all');
        translate.use('all');
    }
    ngOnInit() {
        this.next = this.data.nextType;
    }
    ngAfterViewInit() {
        this.messageEvent.emit(this.modalTemp);
        console.log(this.data);
        this.modalHeader = this.data.modalHeader;
        this.modalFooter = this.data.modalFooter;
    }
    getTemplate() {
        return this.modalTemp;
    }
    extractDBFromPointer(pointer) {
        return pointer.substring(pointer.lastIndexOf('|') + 1);
    }
    confirmAction() {
        // Empty, to be implemented by extending class
    }
    cancelAction() {
        // Placeholder, to be implemented by extending class
        this.data.closeAllModal();
    }
    closeAll() {
        this.data.closeAllModal();
    }
    get next() {
        return this.nextModal;
    }
    set next(modal) {
        this.nextModal = modal;
    }
    get previous() {
        return this.previousModal;
    }
    set previous(modal) {
        this.previousModal = modal;
    }
    set title(text) {
        this.modalTitle = text;
    }
    openAnotherModal(modalToOpen, passToNextComponent) {
        if (modalToOpen != null) {
            return this.modalMain.loadComponent(modalToOpen, passToNextComponent);
        }
        return null;
    }
}
ModalBaseComponent.ɵfac = function ModalBaseComponent_Factory(t) { return new (t || ModalBaseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateService)); };
ModalBaseComponent.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ModalBaseComponent, inputs: { data: "data", modalMain: "modalMain" }, outputs: { messageEvent: "messageEvent" } });


/***/ }),

/***/ 6398:
/*!***********************************************************************!*\
  !*** ./src/app/components/modal/base/search/search-base.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchBaseComponent": () => (/* binding */ SearchBaseComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/collections */ 7860);
/* harmony import */ var _modal_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modal-base.component */ 3145);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 9790);
/* harmony import */ var _services_connection_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/connection.service */ 2377);
/* harmony import */ var _services_globals_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/globals.service */ 660);
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/message.service */ 2684);
/* harmony import */ var src_app_services_input_tools_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/input-tools.service */ 8398);
/* harmony import */ var src_app_services_address_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/address.service */ 9688);










// eslint-disable-next-line @angular-eslint/directive-class-suffix
class SearchBaseComponent extends _modal_base_component__WEBPACK_IMPORTED_MODULE_0__.ModalBaseComponent {
    constructor(translate, connection, globals, messageService, inputService, addressService) {
        super(translate);
        this.translate = translate;
        this.connection = connection;
        this.globals = globals;
        this.messageService = messageService;
        this.inputService = inputService;
        this.addressService = addressService;
        this.messageEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__.SelectionModel(false);
        this.centered = false;
        this.disabled = false;
        this.unbounded = false;
        this.databases = [];
        this.searchValue = '';
        this.viewIconBaseURL = globals.webInt;
        this.searchClearImage = {
            background: 'no-repeat url(assets/images/widget_settings.png)',
        };
        this.displayedColumns = ['icon', 'display'];
        this.prefix = '';
        this.path = '';
    }
    ngOnInit() {
        super.ngOnInit();
        this.fetchDBs();
    }
    getTemplate() {
        return this.modalTemp;
    }
    get rippleColor() {
        return this.globals.rippleColor;
    }
    fetchSearch(database = this.globals.currentContactsDB) {
        let searchKey = this.searchValue;
        if (searchKey === '') {
            searchKey = '*';
        }
        this.selection.clear();
        const paramObj = {
            searchKey,
            database,
        };
        if (this.data.type) {
            paramObj.type = this.data.type;
        }
        if (this.data.parentPointer) {
            paramObj.parentPointer = this.data.parentPointer;
        }
        console.log(paramObj);
        this.connection
            .getReqNoCache(this.path, this.connection.objectToHttpParams(paramObj))
            .subscribe({
            next: (resp) => {
                this.handleResult(resp);
            },
            error: (errHttp) => {
                // TODO Errorhandling
                console.log(errHttp);
            },
            complete: () => {
                // Do nothing
            },
        });
    }
    toggleSelection(row) {
        this.selection.toggle(row);
    }
    search() {
        let input = this.inputService.sanitizeInput(this.searchValue, 4);
        if (input === null) {
            this.translate.get('LC53513').subscribe((text) => {
                this.messageService.showError(text);
            });
            return;
        }
        else {
            if (input === '') {
                input = '*';
            }
            else {
                this.searchValue = input;
            }
            this.fetchSearch(this.selectedDB);
        }
    }
    acceptEntryDblClick(row) {
        this.selection.clear();
        this.selection.select(row);
        this.confirmAction();
    }
}
SearchBaseComponent.ɵfac = function SearchBaseComponent_Factory(t) { return new (t || SearchBaseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_connection_service__WEBPACK_IMPORTED_MODULE_1__.ConnectionService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_globals_service__WEBPACK_IMPORTED_MODULE_2__.GlobalsService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_message_service__WEBPACK_IMPORTED_MODULE_3__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_input_tools_service__WEBPACK_IMPORTED_MODULE_4__.InputToolsService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_address_service__WEBPACK_IMPORTED_MODULE_5__.AddressService)); };
SearchBaseComponent.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineDirective"]({ type: SearchBaseComponent, inputs: { data: "data" }, outputs: { messageEvent: "messageEvent" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]] });


/***/ }),

/***/ 7764:
/*!***************************************************************************!*\
  !*** ./src/app/components/modal/choose-office/choose-office.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChooseOfficeComponent": () => (/* binding */ ChooseOfficeComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _base_modal_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base/modal-base.component */ 3145);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 9790);
/* harmony import */ var _services_connection_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/connection.service */ 2377);
/* harmony import */ var _services_address_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/address.service */ 9688);
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/message.service */ 2684);
/* harmony import */ var src_app_services_webint_link_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/webint-link.service */ 6578);
/* harmony import */ var _services_globals_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/globals.service */ 660);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/list */ 7746);











const _c0 = ["chOffice"];
const _c1 = ["dbs"];
function ChooseOfficeComponent_ng_template_0_p_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "LC53515"));
} }
function ChooseOfficeComponent_ng_template_0_mat_list_option_6_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-list-option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("dblclick", function ChooseOfficeComponent_ng_template_0_mat_list_option_6_Template_mat_list_option_dblclick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r6.confirmAction(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const curDB_r5 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("value", curDB_r5.db);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("selected", ctx_r4.officeDBs.length === 1 ? curDB_r5.db : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", curDB_r5.alias, " ");
} }
const _c2 = function (a0) { return { title: a0 }; };
const _c3 = function (a0, a1, a2, a3) { return { confirm: a0, cancel: a1, confirmAction: a2, cancelAction: a3 }; };
function ChooseOfficeComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainer"](0, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "mat-selection-list", 3, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, ChooseOfficeComponent_ng_template_0_p_5_Template, 3, 3, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, ChooseOfficeComponent_ng_template_0_mat_list_option_6_Template, 2, 3, "mat-list-option", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainer"](7, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](9, "translate");
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.modalHeader)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](13, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](1, 7, "LC53516")));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("multiple", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.officeDBs.length < 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r1.officeDBs);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.modalFooter)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction4"](15, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](8, 9, "LC73135"), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](9, 11, "LC73136"), ctx_r1.confirmAction.bind(ctx_r1, ctx_r1.selection), ctx_r1.cancelAction.bind(ctx_r1)));
} }
class ChooseOfficeComponent extends _base_modal_base_component__WEBPACK_IMPORTED_MODULE_0__.ModalBaseComponent {
    constructor(translate, connection, addressService, messageService, webintLink, globals) {
        super(translate);
        this.translate = translate;
        this.connection = connection;
        this.addressService = addressService;
        this.messageService = messageService;
        this.webintLink = webintLink;
        this.globals = globals;
        this.officeDBs = [];
    }
    ngOnInit() {
        super.ngOnInit();
        this.fetchContactsDBs();
        this.globals.curConnector.checkMailType();
    }
    confirmAction(selection, preselectDB) {
        try {
            let chosenDB = null;
            if (preselectDB != null) {
                chosenDB = preselectDB;
            }
            else {
                console.log(this.selection.selectedOptions.selected[0]);
                chosenDB = this.selection.selectedOptions.selected[0].value;
            }
            this.globals.currentContactsDB = chosenDB;
            if (this.data.passedData.ignoreNext) {
                if (this.data.passedData.paramsData) {
                    const paramsData = this.data.passedData.paramsData;
                    if (paramsData.paramsToAdd && paramsData.paramsToAdd[0] === 'crmDB') {
                        paramsData.params = paramsData.params.set('crmDB', chosenDB);
                    }
                    this.webintLink.openWebIntWithParams(paramsData.params);
                }
            }
            else {
                this.data.passedData.officeDB = chosenDB;
                this.openAnotherModal(this.next, this.data.passedData);
            }
        }
        catch (e) {
            this.translate.get('LC53493').subscribe((text) => {
                this.messageService.showError(text);
                console.log(e);
            });
        }
    }
    fetchContactsDBs() {
        this.connection.getReqModal('dbConnections', null).subscribe((resp) => {
            this.showOfficeList(resp);
        });
    }
    showOfficeList(resp) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            try {
                let pointerToUse = '';
                if (this.data.passedData.currentContactPointer) {
                    pointerToUse = this.data.passedData.currentContactPointer;
                }
                else {
                    pointerToUse = this.addressService.currentPointer;
                }
                this.clearOfficeDBs();
                this.extractOfficeDBsOfContact(pointerToUse, resp);
                console.log(this.officeDBs);
                if (this.officeDBs.length === 1) {
                    this.confirmAction(this.selection, this.officeDBs[0].db);
                }
            }
            catch (e) {
                this.translate.get('LC39396').subscribe((text) => {
                    this.messageService.showError(text);
                });
            }
        });
    }
    extractOfficeDBsOfContact(pointer, dbData) {
        if (this.data.passedData.currentContactPointer) {
            pointer = this.data.passedData.currentContactPointer;
        }
        const db = this.extractDBFromPointer(pointer);
        const officeDBsArr = dbData[db].officeDBs;
        console.log('!!!---!!!');
        console.log(pointer);
        console.log(officeDBsArr);
        for (const curDB of officeDBsArr) {
            this.officeDBs.push({
                db: curDB,
                alias: dbData.GeOfficeAliases[curDB],
            });
        }
        if (this.officeDBs.length < 1) {
            this.translate.get('LC39396').subscribe((text) => {
                this.messageService.showError(text);
                this.cancelAction();
                return;
            });
        }
    }
    clearOfficeDBs() {
        this.officeDBs.length = 0;
    }
}
ChooseOfficeComponent.ɵfac = function ChooseOfficeComponent_Factory(t) { return new (t || ChooseOfficeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_connection_service__WEBPACK_IMPORTED_MODULE_1__.ConnectionService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_address_service__WEBPACK_IMPORTED_MODULE_2__.AddressService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_message_service__WEBPACK_IMPORTED_MODULE_3__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_webint_link_service__WEBPACK_IMPORTED_MODULE_4__.WebintLinkService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_globals_service__WEBPACK_IMPORTED_MODULE_5__.GlobalsService)); };
ChooseOfficeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: ChooseOfficeComponent, selectors: [["app-choose-office"]], viewQuery: function ChooseOfficeComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c1, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.modalTemp = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.selection = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 0, consts: [["chOffice", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "modalBody"], [3, "multiple"], ["dbs", ""], [4, "ngIf"], ["checkboxPosition", "after", 3, "value", "selected", "dblclick", 4, "ngFor", "ngForOf"], ["checkboxPosition", "after", 3, "value", "selected", "dblclick"]], template: function ChooseOfficeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, ChooseOfficeComponent_ng_template_0_Template, 10, 20, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgTemplateOutlet, _angular_material_list__WEBPACK_IMPORTED_MODULE_10__.MatSelectionList, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_material_list__WEBPACK_IMPORTED_MODULE_10__.MatListOption], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaG9vc2Utb2ZmaWNlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 7380:
/*!*****************************************************************************!*\
  !*** ./src/app/components/modal/create-contact/create-contact.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateContactComponent": () => (/* binding */ CreateContactComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _base_modal_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base/modal-base.component */ 3145);
/* harmony import */ var _types_create_label_names_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../types/create-label-names.type */ 5352);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 9790);
/* harmony import */ var src_app_services_globals_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/globals.service */ 660);
/* harmony import */ var src_app_services_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/message.service */ 2684);
/* harmony import */ var src_app_services_soap_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/soap.service */ 6894);
/* harmony import */ var src_app_services_create_address_handler_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/create-address-handler.service */ 8865);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/list */ 7746);











const _c0 = ["create"];
const _c1 = ["labels"];
const _c2 = ["areaData"];
function CreateContactComponent_ng_template_0_mat_list_option_7_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-list-option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CreateContactComponent_ng_template_0_mat_list_option_7_Template_mat_list_option_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r9); const key_r6 = restoredCtx.$implicit; const i_r7 = restoredCtx.index; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r8.changeLabel(key_r6, i_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const key_r6 = ctx.$implicit;
    const i_r7 = ctx.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("value", ctx_r3.currentKeyLabels[i_r7]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r3.fieldDisplayNameMap.get(key_r6), " ");
} }
function CreateContactComponent_ng_template_0_textarea_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "textarea", 12);
} }
const _c3 = function (a0) { return { title: a0 }; };
const _c4 = function (a0, a1, a2, a3) { return { confirm: a0, cancel: a1, confirmAction: a2, cancelAction: a3 }; };
function CreateContactComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainer"](0, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "mat-selection-list", 5, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, CreateContactComponent_ng_template_0_mat_list_option_7_Template, 2, 2, "mat-list-option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "textarea", 8, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, CreateContactComponent_ng_template_0_textarea_10_Template, 1, 0, "textarea", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainer"](11, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](13, "translate");
} if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](9);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.modalHeader)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](15, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](1, 9, "LC73005")));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx_r1.globals.curConnectorType !== null ? "createAddressLabels" + ctx_r1.globals.curConnectorType : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("multiple", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r1.currentKeyLabels);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx_r1.globals.curConnectorType !== null ? "createAddressTextArea" + ctx_r1.globals.curConnectorType : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.globals.displayMailBody);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.modalFooter)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction4"](17, _c4, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](12, 11, "LC73135"), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](13, 13, "LC73136"), ctx_r1.confirmAction.bind(ctx_r1, _r4), ctx_r1.cancelAction.bind(ctx_r1)));
} }
const MAX_ROWS = 23;
class CreateContactComponent extends _base_modal_base_component__WEBPACK_IMPORTED_MODULE_0__.ModalBaseComponent {
    constructor(translate, globals, messageService, soapService, createHandler) {
        super(translate);
        this.translate = translate;
        this.globals = globals;
        this.messageService = messageService;
        this.soapService = soapService;
        this.createHandler = createHandler;
        this.fieldDisplayNameList = [];
        this.fieldDisplayNameMap = new Map();
        this.setTranslatedNameList();
        this.keyLabels = _types_create_label_names_type__WEBPACK_IMPORTED_MODULE_1__.createLabels;
        this.currentKeyLabels = _types_create_label_names_type__WEBPACK_IMPORTED_MODULE_1__.startLabels;
    }
    ngOnInit() {
        super.ngOnInit();
        this.processScanFooter().then((resp) => {
            this.fillTextArea(resp);
            console.log(resp);
            console.log(this.areaData);
        });
    }
    getTemplate() {
        return this.modalTemp;
    }
    changeLabel(selectedKey, index) {
        const newModal = this.openAnotherModal('createLabel', {
            labelDisplayMap: this.fieldDisplayNameMap,
            createLabels: _types_create_label_names_type__WEBPACK_IMPORTED_MODULE_1__.createLabels,
            selected: selectedKey,
        });
        if (newModal) {
            newModal.afterClosed().subscribe((resp) => {
                if (resp) {
                    this.currentKeyLabels[index] = resp;
                }
            });
        }
    }
    // Calls SOAP ScanFooter
    processScanFooter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            let mailContent = this.globals.curConnector.curPostData.body;
            if (this.globals.curConnectorType === 'Owa') {
                mailContent = this.globals.curConnector.curPostData.preview;
            }
            console.log('MAIL DATA');
            console.log(mailContent);
            let footerData;
            try {
                footerData = yield this.soapService.invokeSoap('scanMailFooter', {
                    mailContent,
                });
            }
            catch (e) {
                // Nothing
            }
            return footerData;
        });
    }
    confirmAction() {
        console.log('CONFIRM ACTION');
        console.log(arguments);
        let value = '';
        if (Array.isArray(arguments[0])) {
            value = arguments[0][0].value;
        }
        else {
            value = arguments[0].value;
        }
        this.createAddress(value);
    }
    createAddress(textContent) {
        console.log('CREATE METHOD!');
        console.log(textContent);
        this.createHandler.create(textContent, this.currentKeyLabels, this.fieldDisplayNameMap, this.data.passedData.contactsDB, MAX_ROWS, this.data.passedData.createType, this.data.closeAllModal, this.data.passedData.currentContactPointer);
    }
    fillTextArea(resp) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            let text = '';
            let first = true;
            const mail = this.globals.curMailAddr;
            if (this.data.passedData.currentContactPointer) {
                resp = yield this.createHandler.replaceWithCompanyData('', this.currentKeyLabels, this.fieldDisplayNameMap, MAX_ROWS, this.data.passedData.currentContactPointer, resp);
                console.log(resp);
            }
            for (const index in this.currentKeyLabels) {
                if (Object.prototype.hasOwnProperty.call(this.currentKeyLabels, index)) {
                    if (!first) {
                        text += '\n';
                    }
                    else {
                        first = false;
                    }
                    let curVal = resp[this.currentKeyLabels[index]];
                    if (this.currentKeyLabels[index] === 'EMailAddress') {
                        if (mail != null && (curVal == null || curVal === '')) {
                            if (Array.isArray(mail) && mail.length > 0) {
                                // Assign first E Mail Address
                                curVal = mail[0];
                            }
                            else {
                                curVal = mail;
                            }
                        }
                    }
                    if (curVal == null) {
                        curVal = '';
                    }
                    text += curVal.trim();
                    this.areaData.nativeElement.textContent = text;
                }
            }
        });
    }
    setTranslatedNameList() {
        // List of translated keys for contact
        this.translate.get('LC73020').subscribe((text) => {
            this.fieldDisplayNameList = text.split(';');
            console.log(this.fieldDisplayNameList);
            console.log(_types_create_label_names_type__WEBPACK_IMPORTED_MODULE_1__.createLabels);
            this.createDisplayMap(this.fieldDisplayNameList);
        });
    }
    createDisplayMap(values) {
        console.log(_types_create_label_names_type__WEBPACK_IMPORTED_MODULE_1__.createLabels.length + 1);
        console.log(values.length);
        if (_types_create_label_names_type__WEBPACK_IMPORTED_MODULE_1__.createLabels.length === values.length) {
            // Index 0 of translation not used in keys
            let valueIndex = 1;
            for (const labelKey of _types_create_label_names_type__WEBPACK_IMPORTED_MODULE_1__.createLabels) {
                if (labelKey === '') {
                    continue;
                }
                this.fieldDisplayNameMap.set(labelKey, values[valueIndex]);
                valueIndex++;
            }
            this.fieldDisplayNameMap.set('', this.fieldDisplayNameList[0]);
        }
        else {
            this.translate.get('LC53488').subscribe((text) => {
                this.messageService.showError(text);
            });
        }
    }
}
CreateContactComponent.ɵfac = function CreateContactComponent_Factory(t) { return new (t || CreateContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_globals_service__WEBPACK_IMPORTED_MODULE_2__.GlobalsService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_message_service__WEBPACK_IMPORTED_MODULE_3__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_soap_service__WEBPACK_IMPORTED_MODULE_4__.SoapService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_create_address_handler_service__WEBPACK_IMPORTED_MODULE_5__.CreateAddressHandlerService)); };
CreateContactComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: CreateContactComponent, selectors: [["app-create-contact"]], viewQuery: function CreateContactComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c1, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c2, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.modalTemp = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.selection = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.areaData = _t.first);
    } }, inputs: { data: "data" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 0, consts: [["create", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "modalBody"], ["id", "createWrapper"], ["id", "createAddressLabels", 3, "ngClass"], [3, "multiple"], ["labels", ""], ["checkboxPosition", "after", 3, "value", "click", 4, "ngFor", "ngForOf"], ["id", "createAddressTextArea", "rows", "23", 3, "ngClass"], ["areaData", ""], ["id", "createMailContentArea", "rows", "23", "readonly", "", 4, "ngIf"], ["checkboxPosition", "after", 3, "value", "click"], ["id", "createMailContentArea", "rows", "23", "readonly", ""]], template: function CreateContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, CreateContactComponent_ng_template_0_Template, 14, 22, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_material_list__WEBPACK_IMPORTED_MODULE_10__.MatSelectionList, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_material_list__WEBPACK_IMPORTED_MODULE_10__.MatListOption], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslatePipe], styles: [".createAddressLabelsOwa[_ngcontent-%COMP%] {\n  width: 110px !important;\n}\n\n.createAddressTextAreaOwa[_ngcontent-%COMP%] {\n  width: 148px !important;\n  white-space: pre !important;\n  line-height: 16px !important;\n  padding-top: 2px !important;\n  overflow-y: hidden !important;\n}\n\ntextarea[_ngcontent-%COMP%], #createAddressLabels[_ngcontent-%COMP%] {\n  overflow: auto;\n  resize: none;\n  font-size: 12px;\n  margin: 0 2px;\n  outline: none;\n  display: inline-block;\n  border: 1px solid #858585;\n}\n\n#createWrapper[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n\n#createAddressLabels[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n\n@supports (-moz-transform: none) {\n  #createAddressLabels[_ngcontent-%COMP%] {\n    top: 3px;\n    position: relative;\n  }\n}\n\n#createAddressLabels[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  padding-top: 2px;\n}\n\n#createAddressLabels[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  overflow: auto;\n  resize: none;\n  font-size: 12px;\n  margin: 0 2px;\n  outline: none;\n  height: auto;\n}\n\n#createAddressLabels[_ngcontent-%COMP%], #createAddressTextArea[_ngcontent-%COMP%], #createMailContentArea[_ngcontent-%COMP%] {\n  height: 382px;\n}\n\n#createAddressLabels[_ngcontent-%COMP%] {\n  width: 131px;\n}\n\n#createAddressTextArea[_ngcontent-%COMP%] {\n  width: 230px;\n  white-space: pre;\n  line-height: 16px;\n  padding-top: 2px;\n}\n\n#createMailContentArea[_ngcontent-%COMP%] {\n  width: 600px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS1jb250YWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQUE7QUFDRjs7QUFFQTtFQUNFLHVCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0EsNkJBQUE7QUFDRjs7QUFFQTs7RUFFRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtBQUNGOztBQUVBO0VBQ0U7SUFDRSxRQUFBO0lBQ0Esa0JBQUE7RUFDRjtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7QUFBRjs7QUFHQTtFQUNFLGNBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQUFGOztBQUdBOzs7RUFHRSxhQUFBO0FBQUY7O0FBR0E7RUFDRSxZQUFBO0FBQUY7O0FBR0E7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBQUY7O0FBR0E7RUFDRSxZQUFBO0FBQUYiLCJmaWxlIjoiY3JlYXRlLWNvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3JlYXRlQWRkcmVzc0xhYmVsc093YSB7XHJcbiAgd2lkdGg6IDExMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jcmVhdGVBZGRyZXNzVGV4dEFyZWFPd2Ege1xyXG4gIHdpZHRoOiAxNDhweCAhaW1wb3J0YW50O1xyXG4gIHdoaXRlLXNwYWNlOiBwcmUgIWltcG9ydGFudDtcclxuICBsaW5lLWhlaWdodDogMTZweCAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmctdG9wOiAycHggIWltcG9ydGFudDtcclxuICBvdmVyZmxvdy15OiBoaWRkZW4gIWltcG9ydGFudDtcclxufVxyXG5cclxudGV4dGFyZWEsXHJcbiNjcmVhdGVBZGRyZXNzTGFiZWxzIHtcclxuICBvdmVyZmxvdzogYXV0bztcclxuICByZXNpemU6IG5vbmU7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIG1hcmdpbjogMCAycHg7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDEzMywgMTMzLCAxMzMpO1xyXG59XHJcblxyXG4jY3JlYXRlV3JhcHBlciB7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG5cclxuI2NyZWF0ZUFkZHJlc3NMYWJlbHMge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbkBzdXBwb3J0cyAoLW1vei10cmFuc2Zvcm06IG5vbmUpIHtcclxuICAjY3JlYXRlQWRkcmVzc0xhYmVscyB7XHJcbiAgICB0b3A6IDNweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcbn1cclxuXHJcbiNjcmVhdGVBZGRyZXNzTGFiZWxzID4gKiB7XHJcbiAgcGFkZGluZy10b3A6IDJweDtcclxufVxyXG5cclxuI2NyZWF0ZUFkZHJlc3NMYWJlbHMgPiAqID4gKiB7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgcmVzaXplOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBtYXJnaW46IDAgMnB4O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4jY3JlYXRlQWRkcmVzc0xhYmVscyxcclxuI2NyZWF0ZUFkZHJlc3NUZXh0QXJlYSxcclxuI2NyZWF0ZU1haWxDb250ZW50QXJlYSB7XHJcbiAgaGVpZ2h0OiAzODJweDtcclxufVxyXG5cclxuI2NyZWF0ZUFkZHJlc3NMYWJlbHMge1xyXG4gIHdpZHRoOiAxMzFweDtcclxufVxyXG5cclxuI2NyZWF0ZUFkZHJlc3NUZXh0QXJlYSB7XHJcbiAgd2lkdGg6IDIzMHB4O1xyXG4gIHdoaXRlLXNwYWNlOiBwcmU7XHJcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgcGFkZGluZy10b3A6IDJweDtcclxufVxyXG5cclxuI2NyZWF0ZU1haWxDb250ZW50QXJlYSB7XHJcbiAgd2lkdGg6IDYwMHB4O1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 4594:
/*!***************************************************************************!*\
  !*** ./src/app/components/modal/create-ticket/create-ticket.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateTicketComponent": () => (/* binding */ CreateTicketComponent)
/* harmony export */ });
/* harmony import */ var _base_modal_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base/modal-base.component */ 3145);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 9790);
/* harmony import */ var _services_connection_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/connection.service */ 2377);
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/message.service */ 2684);
/* harmony import */ var src_app_services_webint_link_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/webint-link.service */ 6578);
/* harmony import */ var src_app_services_address_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/address.service */ 9688);
/* harmony import */ var _services_globals_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/globals.service */ 660);
/* harmony import */ var src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/loader.service */ 8555);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/list */ 7746);











const _c0 = ["crTicket"];
const _c1 = ["tiTypes"];
function CreateTicketComponent_ng_template_0_mat_list_option_5_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-list-option", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("dblclick", function CreateTicketComponent_ng_template_0_mat_list_option_5_Template_mat_list_option_dblclick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r5.confirmAction(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const type_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("value", type_r4.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("selected", type_r4.key === ctx_r3.recent);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", type_r4.key, " ");
} }
const _c2 = function (a0) { return { title: a0 }; };
const _c3 = function (a0, a1, a2, a3) { return { confirm: a0, cancel: a1, confirmAction: a2, cancelAction: a3 }; };
function CreateTicketComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainer"](0, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "mat-selection-list", 3, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, CreateTicketComponent_ng_template_0_mat_list_option_5_Template, 2, 3, "mat-list-option", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainer"](6, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](8, "translate");
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.modalHeader)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](12, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](1, 6, "LC53522")));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("multiple", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r1.ticketTypes);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.modalFooter)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction4"](14, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](7, 8, "LC73135"), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](8, 10, "LC73136"), ctx_r1.confirmAction.bind(ctx_r1), ctx_r1.cancelAction.bind(ctx_r1)));
} }
class CreateTicketComponent extends _base_modal_base_component__WEBPACK_IMPORTED_MODULE_0__.ModalBaseComponent {
    constructor(translate, connection, messageService, webintLink, addressService, globals, connectionService, loader) {
        super(translate);
        this.translate = translate;
        this.connection = connection;
        this.messageService = messageService;
        this.webintLink = webintLink;
        this.addressService = addressService;
        this.globals = globals;
        this.connectionService = connectionService;
        this.loader = loader;
        this.validTypes = [];
        this.ticketTypes = [];
        this.recent = sessionStorage.getItem('recentTicketType');
    }
    ngOnInit() {
        super.ngOnInit();
        this.fetchTypes();
    }
    confirmAction() {
        try {
            this.createTicket();
            console.log(this.globals.curMailAddr);
        }
        catch (e) {
            console.log(e);
            this.translate.get('LC53493').subscribe((text) => {
                this.messageService.showError(text);
            });
        }
    }
    createTicket() {
        this.loader.activateLoader(true, true);
        const selectedValue = this.selection.selectedOptions.selected[0].value;
        // Split value components 0 = dbAlias, 1 = targetEmail
        const splitValueArr = selectedValue.split('#');
        console.log(this.addressService.currentAddressData);
        if (Array.isArray(splitValueArr) && splitValueArr.length > 1) {
            let pointer = '';
            if (this.addressService.currentAddressData) {
                pointer = this.addressService.currentAddressData.pointer;
            }
            this.createTicketHandler(this.globals.curMailUnid, splitValueArr[0], splitValueArr[1], pointer + '~#~' + this.globals.curMailAddr);
        }
    }
    // unid = Mail UNID
    // dbAlias = Service database alias
    // targetEMail = Service database ticket type specific mail-in address
    // pointer = addressPointer
    createTicketHandler(unid, dbAlias, targetEMail, pointer, allowDuplicate) {
        // TODO: ist auf OWA abgestimmt, muss allgemeiner werden!
        const data = this.globals.curConnector.curPostData;
        this.loader.activateLoader(true, true);
        console.log(data);
        if (data != null) {
            this.connectionService
                .postReq('convert', 'data=' + encodeURIComponent(JSON.stringify(data)), false, {
                headers: {
                    'content-type': 'application/x-www-form-urlencoded',
                },
            })
                .subscribe({
                next: (result) => {
                    console.log('TICKET RESULT');
                    console.log(result);
                    unid = result;
                    console.log(result);
                    const queryObj = {
                        mailunid: 'OWA:' + unid,
                        dbalias: dbAlias,
                        targetemail: targetEMail,
                        addrpointer: pointer,
                    };
                    console.log(this.globals.curConnector);
                    if (allowDuplicate === true) {
                        queryObj['allow-duplicate'] = true;
                    }
                    else if (this.globals.curConnector.curPostData.officeAlreadyDoc ||
                        this.globals.curConnector.curPostData.ticketAlreadyDoc) {
                        this.handleDuplicate(unid, dbAlias, targetEMail, pointer);
                        return;
                    }
                    this.connection
                        .postReq('ticket', this.connection.objectToHttpParams(queryObj))
                        .subscribe({
                        next: (resp) => {
                            window.open(this.webintLink.convertToLink(resp.result), '_blank');
                            this.globals.curConnector.alreadyDocumented = {
                                officeAlreadyDoc: this.globals.curConnector.curPostData.officeAlreadyDoc,
                                ticketAlreadyDoc: true,
                            };
                            this.loader.forceDeactivateLoader();
                            this.translate.get('LC73236').subscribe((text) => {
                                this.messageService.showSuccess(text);
                            });
                            this.closeAll();
                        },
                        error: (errHttp) => {
                            if (errHttp.status === 409) {
                                this.handleDuplicate(unid, dbAlias, targetEMail, pointer);
                            }
                            else {
                                this.messageService.showError(errHttp.statusText);
                            }
                        },
                        complete: () => {
                            // Nothing
                        },
                    });
                },
                error: (errHttp) => {
                    this.loader.forceDeactivateLoader();
                    this.messageService.showError(errHttp.statusText);
                },
                complete: () => {
                    // Do nothing
                },
            });
        }
    }
    handleDuplicate(unid, dbAlias, targetEMail, pointer) {
        this.loader.forceDeactivateLoader();
        const duplicateModal = this.openAnotherModal('duplicate');
        if (duplicateModal) {
            const curSub = duplicateModal.afterClosed().subscribe((resp) => {
                if (resp) {
                    this.loader.activateLoader(true, true);
                    this.createTicketHandler(unid, dbAlias, targetEMail, pointer, resp);
                }
                else {
                    curSub.unsubscribe();
                }
            });
        }
    }
    fetchTypes() {
        this.connection.getReqModal('ticket', null).subscribe((resp) => {
            this.filterTypes(resp);
        });
    }
    filterTypes(resp) {
        const ticketObj = {};
        if (Array.isArray(resp)) {
            for (const ticketOptionKey in resp) {
                if (Array.isArray(resp[ticketOptionKey]) &&
                    resp[ticketOptionKey].length >= 2) {
                    const key = resp[ticketOptionKey][0];
                    const value = resp[ticketOptionKey][1];
                    ticketObj[key] = value;
                    if (key !== 'giRecentSelection') {
                        this.ticketTypes.push({
                            key,
                            value,
                        });
                    }
                }
            }
        }
        if (Object.keys(ticketObj).length === 0 &&
            ticketObj.constructor === Object) {
            this.translate.get('LC73225').subscribe((text) => {
                this.messageService.showError(text);
            });
            return;
        }
        const ticketKeys = Object.keys(ticketObj);
        this.validTypes = Object.values(ticketObj);
        window.sessionStorage.setItem('recentTicketType', ticketKeys[this.validTypes.indexOf(ticketObj.giRecentSelection)]);
    }
}
CreateTicketComponent.ɵfac = function CreateTicketComponent_Factory(t) { return new (t || CreateTicketComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_connection_service__WEBPACK_IMPORTED_MODULE_1__.ConnectionService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_message_service__WEBPACK_IMPORTED_MODULE_2__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_webint_link_service__WEBPACK_IMPORTED_MODULE_3__.WebintLinkService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_address_service__WEBPACK_IMPORTED_MODULE_4__.AddressService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_globals_service__WEBPACK_IMPORTED_MODULE_5__.GlobalsService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_connection_service__WEBPACK_IMPORTED_MODULE_1__.ConnectionService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_6__.LoaderService)); };
CreateTicketComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: CreateTicketComponent, selectors: [["app-create-ticket"]], viewQuery: function CreateTicketComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c0, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c1, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.modalTemp = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.selection = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 0, consts: [["crTicket", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "modalBody"], [3, "multiple"], ["tiTypes", ""], ["checkboxPosition", "after", 3, "value", "selected", "dblclick", 4, "ngFor", "ngForOf"], ["checkboxPosition", "after", 3, "value", "selected", "dblclick"]], template: function CreateTicketComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, CreateTicketComponent_ng_template_0_Template, 9, 19, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgTemplateOutlet, _angular_material_list__WEBPACK_IMPORTED_MODULE_10__.MatSelectionList, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_material_list__WEBPACK_IMPORTED_MODULE_10__.MatListOption], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhdGUtdGlja2V0LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 7679:
/*!***************************************************************************!*\
  !*** ./src/app/components/modal/document-file/document-file.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DocumentFileComponent": () => (/* binding */ DocumentFileComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _base_modal_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base/modal-base.component */ 3145);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 9790);
/* harmony import */ var src_app_services_globals_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/globals.service */ 660);
/* harmony import */ var src_app_services_connection_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/connection.service */ 2377);
/* harmony import */ var src_app_services_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/message.service */ 2684);
/* harmony import */ var src_app_services_webint_link_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/webint-link.service */ 6578);
/* harmony import */ var src_app_services_reload_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/reload.service */ 1293);
/* harmony import */ var src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/loader.service */ 8555);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 8583);












const _c0 = ["docFile"];
const _c1 = function (a0) { return { title: a0 }; };
const _c2 = function (a0, a1, a2, a3) { return { confirm: a0, cancel: a1, confirmAction: a2, cancelAction: a3 }; };
function DocumentFileComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainer"](0, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainer"](4, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](6, "translate");
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.modalHeader)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](11, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](1, 5, "LC73005")));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.text);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.modalFooter)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction4"](13, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](5, 7, "LC73135"), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](6, 9, "LC73136"), ctx_r1.confirmAction.bind(ctx_r1), ctx_r1.cancelAction.bind(ctx_r1)));
} }
class DocumentFileComponent extends _base_modal_base_component__WEBPACK_IMPORTED_MODULE_0__.ModalBaseComponent {
    constructor(translate, globals, connectionService, messageService, webInt, reloadService, loader) {
        super(translate);
        this.translate = translate;
        this.globals = globals;
        this.connectionService = connectionService;
        this.messageService = messageService;
        this.webInt = webInt;
        this.reloadService = reloadService;
        this.loader = loader;
        this.allowDuplicate = false;
    }
    ngOnInit() {
        console.log(this.data.passedData);
        if (this.data.passedData.currentOfficePointer) {
            this.pointer = this.data.passedData.currentOfficePointer;
            this.officeDB = this.pointer.substring(this.pointer.lastIndexOf('|') + 1);
        }
        else {
            this.officeDB = this.data.passedData.officeDB;
            this.pointer = this.data.passedData.currentContactPointer;
        }
        this.translate.get('LC73019').subscribe((text) => {
            this.text = text + '...';
        });
        this.confirmAction();
    }
    confirmAction() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            this.loader.activateLoader(true, true);
            const data = this.globals.curConnector.curPostData;
            console.log(data);
            if (data != null) {
                this.connectionService
                    .postReq('convert', 'data=' + encodeURIComponent(JSON.stringify(data)), false, {
                    headers: {
                        'content-type': 'application/x-www-form-urlencoded',
                    },
                })
                    .subscribe({
                    next: (result) => {
                        console.log('RESULT CONVERT');
                        console.log(result);
                        if (result == null || result === '') {
                            this.translate.get('LC53488').subscribe((text) => {
                                this.loader.forceDeactivateLoader();
                                this.messageService.showError(text);
                            });
                            return;
                        }
                        else {
                            this.loader.activateLoader(true, true);
                            const unid = result;
                            let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpParams();
                            params = params.set('unid', unid);
                            params = params.set('pointer', this.pointer);
                            params = params.set('office', this.officeDB);
                            params = params.set('command', 'store');
                            params = params.set('origUnid', this.globals.curMailUnid);
                            if (this.allowDuplicate) {
                                params = params.set('allow-duplicate', 'true');
                            }
                            console.log(result);
                            console.log('RESULT CONVERT END, NEW POST');
                            this.connectionService
                                .postReq('convert', params, false)
                                .subscribe({
                                next: (res) => {
                                    console.log(res);
                                    this.loader.activateLoader(true, true);
                                    this.translate.get('LC73236').subscribe((text) => {
                                        this.globals.curConnector.alreadyDocumented = {
                                            officeAlreadyDoc: true,
                                            ticketAlreadyDoc: this.globals.curConnector.curPostData
                                                .ticketAlreadyDoc,
                                        };
                                        this.messageService.showSuccess(text);
                                    });
                                    if (this.globals.openMail) {
                                        params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpParams();
                                        params.set('openDocument', res);
                                        window.open(this.webInt.convertToLink(res), '_blank');
                                    }
                                    console.log(res);
                                    this.reloadService.reload();
                                    this.closeAll();
                                    this.loader.forceDeactivateLoader();
                                },
                                error: (errHttp) => {
                                    this.loader.forceDeactivateLoader();
                                    console.log('CONVERT FAILED!');
                                    console.log(errHttp);
                                    if (errHttp.status === 409) {
                                        this.translate.get('LC73006').subscribe((text) => {
                                            this.messageService.showError(text);
                                            this.text = text;
                                            this.allowDuplicate = true;
                                            this.globals.curConnector.alreadyDocumented = {
                                                officeAlreadyDoc: true,
                                                ticketAlreadyDoc: this.globals.curConnector.curPostData
                                                    .ticketAlreadyDoc,
                                            };
                                            return;
                                        });
                                    }
                                    else if (errHttp.status !== 200) {
                                        this.translate.get('LC73235').subscribe((text) => {
                                            this.messageService.showError(text);
                                        });
                                        this.messageService.showError(errHttp.statusText);
                                        return;
                                    }
                                },
                                complete: () => {
                                    // Do nothing
                                },
                            });
                        }
                    },
                    error: (errHttp) => {
                        this.messageService.showError(errHttp.statusText);
                        this.loader.forceDeactivateLoader();
                        this.closeAll();
                        console.log(errHttp);
                    },
                    complete: () => {
                        // Do nothing
                    },
                });
            }
        });
    }
}
DocumentFileComponent.ɵfac = function DocumentFileComponent_Factory(t) { return new (t || DocumentFileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_globals_service__WEBPACK_IMPORTED_MODULE_1__.GlobalsService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_connection_service__WEBPACK_IMPORTED_MODULE_2__.ConnectionService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_message_service__WEBPACK_IMPORTED_MODULE_3__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_webint_link_service__WEBPACK_IMPORTED_MODULE_4__.WebintLinkService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_reload_service__WEBPACK_IMPORTED_MODULE_5__.ReloadService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_6__.LoaderService)); };
DocumentFileComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: DocumentFileComponent, selectors: [["app-document-file"]], viewQuery: function DocumentFileComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c0, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.modalTemp = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 0, consts: [["docFile", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "modalBody"]], template: function DocumentFileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, DocumentFileComponent_ng_template_0_Template, 7, 18, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgTemplateOutlet], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkb2N1bWVudC1maWxlLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 1032:
/*!*******************************************************************!*\
  !*** ./src/app/components/modal/duplicate/duplicate.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DuplicateComponent": () => (/* binding */ DuplicateComponent)
/* harmony export */ });
/* harmony import */ var _base_modal_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base/modal-base.component */ 3145);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 9790);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8583);




const _c0 = ["dupl"];
const _c1 = function (a0) { return { title: a0 }; };
const _c2 = function (a0, a1, a2, a3) { return { confirm: a0, cancel: a1, confirmAction: a2, cancelAction: a3 }; };
function DuplicateComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](5, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "translate");
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.modalHeader)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](13, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 5, "LC53516")));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 7, "LC73006"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.modalFooter)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction4"](15, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 9, "LC73135"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 11, "LC73136"), ctx_r1.confirmAction.bind(ctx_r1), ctx_r1.cancelAction.bind(ctx_r1)));
} }
class DuplicateComponent extends _base_modal_base_component__WEBPACK_IMPORTED_MODULE_0__.ModalBaseComponent {
    constructor(translate) {
        super(translate);
        this.translate = translate;
    }
    ngOnInit() {
        super.ngOnInit();
    }
    confirmAction() {
        this.data.closeModal(true);
    }
}
DuplicateComponent.ɵfac = function DuplicateComponent_Factory(t) { return new (t || DuplicateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateService)); };
DuplicateComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DuplicateComponent, selectors: [["app-duplicate"]], viewQuery: function DuplicateComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.modalTemp = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 0, consts: [["dupl", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "modalBody"]], template: function DuplicateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, DuplicateComponent_ng_template_0_Template, 8, 20, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgTemplateOutlet], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkdXBsaWNhdGUuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 385:
/*!*****************************************************!*\
  !*** ./src/app/components/modal/modal.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalComponent": () => (/* binding */ ModalComponent)
/* harmony export */ });
/* harmony import */ var src_app_directives_modal_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../directives/modal.directive */ 9102);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 2238);
/* harmony import */ var _services_modal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/modal.service */ 1609);
/* harmony import */ var _app_app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app/app.component */ 7729);
/* harmony import */ var src_app_services_globals_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/globals.service */ 660);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8583);








const _c0 = ["modal"];
const _c1 = ["modalHeader"];
const _c2 = ["modalFooter"];
const _c3 = ["dbs"];
function ModalComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ModalComponent_ng_template_0_Template_div_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r8.closeModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const title_r7 = ctx.title;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](title_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", ctx_r1.modCloseImage);
} }
function ModalComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ModalComponent_ng_template_2_Template_button_click_1_listener() { const cancelAction_r13 = ctx.cancelAction; return cancelAction_r13(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ModalComponent_ng_template_2_Template_button_click_3_listener() { const confirmAction_r12 = ctx.confirmAction; return confirmAction_r12(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const confirm_r10 = ctx.confirm;
    const cancel_r11 = ctx.cancel;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", cancel_r11, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", confirm_r10, " ");
} }
function ModalComponent_ng_template_4_Template(rf, ctx) { }
function ModalComponent_ng_template_5_Template(rf, ctx) { }
/*
  Serves as the main modal component.
  Sets templates for modal header and footer and passes it to sub-components for further customization.
  After the sub-component customized header, footer and appended the body, the template will be passed
  back to this main class to render it.
*/
class ModalComponent {
    constructor(modal, modalService, componentFactoryResolver, app, globals) {
        this.modal = modal;
        this.modalService = modalService;
        this.componentFactoryResolver = componentFactoryResolver;
        this.app = app;
        this.globals = globals;
        this.headerText = '';
        this.modCloseImage = {
            background: 'no-repeat url(assets/images/widget_settings.png)',
        };
    }
    ngAfterViewInit() { }
    ngOnInit() {
        this.modalService.currentType.subscribe((dataObj) => {
            this.modalService.setModalHeader(this.modalHeader);
            this.modalService.setModalFooter(this.modalFooter);
            this.chosenType = dataObj.newType;
            this.loadComponent(this.chosenType, dataObj.data);
        });
    }
    // Opens Modal
    // Needs reference of content (templateRef, elementRef)
    open(content) {
        return this.modal.open(content, {
            panelClass: 'modalOverlay',
            autoFocus: false,
            maxHeight: '90%',
        });
    }
    // Loads component of type defined in ModalType and opens Modal with its content
    loadComponent(type, passedData) {
        this.modalItems = this.app.mItems;
        const modalItem = this.modalItems[type];
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(modalItem.component);
        const viewContainerRef = this.appModal.viewContainerRef;
        viewContainerRef.clear();
        const componentRef = viewContainerRef.createComponent(componentFactory);
        // Gets content (ng-template) of dynamically loaded component
        this.modalService.addActiveModal(this.open(componentRef.instance.getTemplate()));
        // Assigns data defined in modal.service to loaded component
        componentRef.instance.data = modalItem.data;
        componentRef.instance.modalMain = this;
        // Set Reference to modalItems to ModalComponent
        if (componentRef.instance.data) {
            componentRef.instance.data.modalItems = this.modalService.modalItemsPub;
            if (passedData) {
                componentRef.instance.data.passedData = passedData;
            }
        }
        return this.modalService.newActive;
    }
    closeModal() {
        this.modalService.closeActiveModal();
    }
}
ModalComponent.ɵfac = function ModalComponent_Factory(t) { return new (t || ModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_modal_service__WEBPACK_IMPORTED_MODULE_1__.ModalService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ComponentFactoryResolver), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_app_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_globals_service__WEBPACK_IMPORTED_MODULE_3__.GlobalsService)); };
ModalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ModalComponent, selectors: [["app-modal"]], viewQuery: function ModalComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c1, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c2, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](src_app_directives_modal_directive__WEBPACK_IMPORTED_MODULE_0__.ModalDirective, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c3, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.modalTempl = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.modalHeader = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.modalFooter = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.appModal = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.selection = _t.first);
    } }, decls: 7, vars: 0, consts: [["modalHeader", ""], ["modalFooter", ""], ["appModal", ""], ["modal", ""], [1, "modalHeader"], [1, "modalHeaderText"], ["ngbAutoFocus", "", 1, "modalHeaderClose", 3, "click"], [1, "modalCloseIcon", 3, "ngStyle"], [1, "modalFooter"], [1, "button-secondary", "right", 3, "click"], [1, "button-primary", "right", 3, "click"]], template: function ModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, ModalComponent_ng_template_0_Template, 6, 2, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, ModalComponent_ng_template_2_Template, 5, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, ModalComponent_ng_template_4_Template, 0, 0, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, ModalComponent_ng_template_5_Template, 0, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    } }, directives: [src_app_directives_modal_directive__WEBPACK_IMPORTED_MODULE_0__.ModalDirective, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgStyle], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2RhbC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 8704:
/*!*****************************************************************************!*\
  !*** ./src/app/components/modal/search-contact/search-contact.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchContactComponent": () => (/* binding */ SearchContactComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _base_search_search_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base/search/search-base.component */ 6398);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 9790);
/* harmony import */ var _services_connection_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/connection.service */ 2377);
/* harmony import */ var _services_globals_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/globals.service */ 660);
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/message.service */ 2684);
/* harmony import */ var src_app_services_input_tools_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/input-tools.service */ 8398);
/* harmony import */ var src_app_services_address_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/address.service */ 9688);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 8295);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ 3166);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ 7441);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ 7817);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/table */ 2091);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/dialog */ 2238);

















const _c0 = ["searchContact"];
function SearchContactComponent_ng_template_0_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SearchContactComponent_ng_template_0_button_9_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r7.searchValue = ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngStyle", ctx_r2.searchClearImage);
} }
function SearchContactComponent_ng_template_0_mat_option_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", option_r9.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](option_r9.viewValue);
} }
const _c1 = function (a0) { return { background: a0 }; };
function SearchContactComponent_ng_template_0_div_18_mat_cell_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "mat-cell", 23);
} if (rf & 2) {
    const element_r13 = ctx.$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](1, _c1, "no-repeat url(" + ctx_r10.viewIconBaseURL + element_r13.value.iconURL + ")"));
} }
function SearchContactComponent_ng_template_0_div_18_mat_cell_5_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r14.value.company, " ");
} }
function SearchContactComponent_ng_template_0_div_18_mat_cell_5_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r14.value.postal, " ");
} }
function SearchContactComponent_ng_template_0_div_18_mat_cell_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-cell", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-dialog-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, SearchContactComponent_ng_template_0_div_18_mat_cell_5_div_4_Template, 2, 1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, SearchContactComponent_ng_template_0_div_18_mat_cell_5_div_5_Template, 2, 1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r14.display, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", element_r14.value.company !== "" && element_r14.value.company !== element_r14.display);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", element_r14.value.postal !== "");
} }
function SearchContactComponent_ng_template_0_div_18_mat_row_6_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-row", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SearchContactComponent_ng_template_0_div_18_mat_row_6_Template_mat_row_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r21); const row_r19 = restoredCtx.$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3); return ctx_r20.toggleSelection(row_r19); })("dblclick", function SearchContactComponent_ng_template_0_div_18_mat_row_6_Template_mat_row_dblclick_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r21); const row_r19 = restoredCtx.$implicit; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3); return ctx_r22.acceptEntryDblClick(row_r19); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r19 = ctx.$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("isSelected", ctx_r12.selection.isSelected(row_r19));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matRippleColor", ctx_r12.rippleColor)("matRippleCentered", ctx_r12.centered)("matRippleDisabled", ctx_r12.disabled)("matRippleUnbounded", ctx_r12.unbounded);
} }
function SearchContactComponent_ng_template_0_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-table", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](2, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, SearchContactComponent_ng_template_0_div_18_mat_cell_3_Template, 1, 3, "mat-cell", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](4, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, SearchContactComponent_ng_template_0_div_18_mat_cell_5_Template, 6, 3, "mat-cell", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, SearchContactComponent_ng_template_0_div_18_mat_row_6_Template, 1, 6, "mat-row", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("dataSource", ctx_r4.searchResults);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matRowDefColumns", ctx_r4.displayedColumns);
} }
function SearchContactComponent_ng_template_0_ng_template_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "LC53482"));
} }
const _c2 = function (a0) { return { title: a0 }; };
const _c3 = function (a0, a1, a2, a3) { return { confirm: a0, cancel: a1, confirmAction: a2, cancelAction: a3 }; };
function SearchContactComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainer"](0, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "mat-form-field", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function SearchContactComponent_ng_template_0_Template_input_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r23.searchValue = $event; })("keyup.enter", function SearchContactComponent_ng_template_0_Template_input_keyup_enter_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r24); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r25.search(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, SearchContactComponent_ng_template_0_button_9_Template, 2, 1, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SearchContactComponent_ng_template_0_Template_input_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r24); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r26.search(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "mat-form-field", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "mat-select", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("valueChange", function SearchContactComponent_ng_template_0_Template_mat_select_valueChange_16_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r24); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r27.selectedDB = $event; })("selectionChange", function SearchContactComponent_ng_template_0_Template_mat_select_selectionChange_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r24); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r28.fetchSearch(ctx_r28.selectedDB); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](17, SearchContactComponent_ng_template_0_mat_option_17_Template, 2, 2, "mat-option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](18, SearchContactComponent_ng_template_0_div_18_Template, 7, 2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, SearchContactComponent_ng_template_0_ng_template_19_Template, 3, 3, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainer"](21, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](22, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](23, "translate");
} if (rf & 2) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](20);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.modalHeader)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](25, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](1, 13, "LC53493")));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](7, 15, "LC53489"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r1.searchValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.searchValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](11, 17, "LC36251"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](15, 19, "LC53516"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", ctx_r1.selectedDB);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r1.databases);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.searchResults.length >= 1)("ngIfElse", _r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.modalFooter)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction4"](27, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](22, 21, "LC73135"), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](23, 23, "LC73136"), ctx_r1.confirmAction.bind(ctx_r1), ctx_r1.cancelAction.bind(ctx_r1)));
} }
class SearchContactComponent extends _base_search_search_base_component__WEBPACK_IMPORTED_MODULE_0__.SearchBaseComponent {
    constructor(translate, connection, globals, messageService, inputService, addressService) {
        super(translate, connection, globals, messageService, inputService, addressService);
        this.messageEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
        this.prefix = 'Contacts: ';
        this.path = 'search';
        this.searchResults = [];
    }
    ngOnInit() {
        super.ngOnInit();
    }
    getTemplate() {
        return this.modalTemp;
    }
    filterForContacts(resp) {
        console.log(resp);
        const contactDBs = {};
        for (const alias in resp) {
            if (alias === 'GeOfficeAliases') {
                continue;
            }
            if (resp[alias].type === 'Contact') {
                contactDBs[alias] = resp[alias].title;
            }
        }
        this.generateSelectionArr(contactDBs);
    }
    generateSelectionArr(dbs) {
        for (const db in dbs) {
            if (Object.prototype.hasOwnProperty.call(dbs, db)) {
                const newContact = {
                    value: db,
                    viewValue: this.prefix + dbs[db],
                };
                console.log(newContact);
                this.databases.push(newContact);
            }
        }
        if (this.databases.length > 0) {
            this.selectedDB = this.databases[0].value;
            this.fetchSearch(this.selectedDB);
        }
        console.log(this.databases);
    }
    fetchDBs() {
        this.connection.getReqModal('dbConnections', null).subscribe((resp) => {
            this.filterForContacts(resp);
        });
    }
    handleResult(resp) {
        if (resp.result != null &&
            Array.isArray(resp.result) &&
            resp.result.length > 0) {
            this.searchResults = resp.result;
        }
        else {
            this.searchResults = [];
        }
        console.log(this.searchResults);
    }
    confirmAction() {
        console.log(this.selection.selected[0].value.fdMe);
        if (this.selection.isEmpty()) {
            this.translate.get('LC53493').subscribe((text) => {
                this.messageService.showError(text);
            });
        }
        else {
            this.openAnotherModal(this.next, {
                currentContactPointer: this.selection.selected[0].value.fdMe,
                createType: this.data.createType,
                contactsDB: this.selectedDB,
            });
        }
    }
}
SearchContactComponent.ɵfac = function SearchContactComponent_Factory(t) { return new (t || SearchContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_connection_service__WEBPACK_IMPORTED_MODULE_1__.ConnectionService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_globals_service__WEBPACK_IMPORTED_MODULE_2__.GlobalsService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_message_service__WEBPACK_IMPORTED_MODULE_3__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_input_tools_service__WEBPACK_IMPORTED_MODULE_4__.InputToolsService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_address_service__WEBPACK_IMPORTED_MODULE_5__.AddressService)); };
SearchContactComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: SearchContactComponent, selectors: [["app-search-contact"]], viewQuery: function SearchContactComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.modalTemp = _t.first);
    } }, inputs: { data: "data" }, outputs: { messageEvent: "messageEvent" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 0, consts: [["searchContact", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "modalBody"], [1, "searchInputWrapper"], [1, "searchInput"], ["matInput", "", "type", "text", 3, "ngModel", "ngModelChange", "keyup.enter"], ["matSuffix", "", "aria-label", "Clear", 3, "click", 4, "ngIf"], ["id", "searchButton", "type", "button", 1, "buttonSilverMiddle", 3, "value", "click"], ["appearance", "standard", 1, "databaseSearchSelect"], [3, "value", "valueChange", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "tableWrapper", 4, "ngIf", "ngIfElse"], ["noResult", ""], ["matSuffix", "", "aria-label", "Clear", 3, "click"], [1, "modalCloseIcon", 3, "ngStyle"], [3, "value"], [1, "tableWrapper"], [1, "searchTable", 3, "dataSource"], ["matColumnDef", "icon"], ["class", "searchIcon", 3, "ngStyle", 4, "matCellDef"], ["matColumnDef", "display"], ["class", "searchDisplay", 4, "matCellDef"], ["matRipple", "", "class", "searchRow", 3, "matRippleColor", "matRippleCentered", "matRippleDisabled", "matRippleUnbounded", "isSelected", "click", "dblclick", 4, "matRowDef", "matRowDefColumns"], [1, "searchIcon", 3, "ngStyle"], [1, "searchDisplay"], [1, "bold"], [4, "ngIf"], ["matRipple", "", 1, "searchRow", 3, "matRippleColor", "matRippleCentered", "matRippleDisabled", "matRippleUnbounded", "click", "dblclick"]], template: function SearchContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, SearchContactComponent_ng_template_0_Template, 24, 32, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgTemplateOutlet, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_material_select__WEBPACK_IMPORTED_MODULE_12__.MatSelect, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatSuffix, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgStyle, _angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MatOption, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatCell, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialogContent, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatRow, _angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MatRipple], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe], styles: [".searchInputWrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.databaseSearchSelect[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.searchInput[_ngcontent-%COMP%] {\n  width: calc(100% - 70px);\n  display: block;\n  padding-bottom: 0px !important;\n}\n\n.searchIcon[_ngcontent-%COMP%] {\n  width: 30px;\n  padding: 0 10px 0 0px !important;\n  background-position: 40% 50% !important;\n}\n\n.searchRow[_ngcontent-%COMP%]   .searchIcon[_ngcontent-%COMP%], .searchRow[_ngcontent-%COMP%]   .searchDisplay[_ngcontent-%COMP%], .searchRow[_ngcontent-%COMP%] {\n  border-bottom: 0px;\n}\n\n.searchRow[_ngcontent-%COMP%]:nth-child(2n) {\n  background: #f2f2f2;\n}\n\n.isSelected[_ngcontent-%COMP%] {\n  background: #e0efff !important;\n}\n\n.searchRow[_ngcontent-%COMP%] {\n  cursor: pointer;\n  overflow: hidden;\n  padding-right: 5px;\n}\n\n.searchRow[_ngcontent-%COMP%]:hover {\n  background: rgba(224, 239, 255, 0.4);\n}\n\n.searchDisplay[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.searchTable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.tableWrapper[_ngcontent-%COMP%] {\n  overflow: auto;\n  max-height: 55vh;\n}\n\n#searchButton[_ngcontent-%COMP%] {\n  height: 100%;\n  padding: 4px;\n  margin: 0 0 5px 0;\n  float: right;\n  font-weight: bold;\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC1iYXNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtBQUNGOztBQUVBO0VBQ0Usd0JBQUE7RUFDQSxjQUFBO0VBQ0EsOEJBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxnQ0FBQTtFQUNBLHVDQUFBO0FBQ0Y7O0FBRUE7OztFQUdFLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsOEJBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxvQ0FBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtBQUNGIiwiZmlsZSI6InNlYXJjaC1iYXNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlYXJjaElucHV0V3JhcHBlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4uZGF0YWJhc2VTZWFyY2hTZWxlY3Qge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uc2VhcmNoSW5wdXQge1xyXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA3MHB4KTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwYWRkaW5nLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zZWFyY2hJY29uIHtcclxuICB3aWR0aDogMzBweDtcclxuICBwYWRkaW5nOiAwIDEwcHggMCAwcHggIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA0MCUgNTAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zZWFyY2hSb3cgLnNlYXJjaEljb24sXHJcbi5zZWFyY2hSb3cgLnNlYXJjaERpc3BsYXksXHJcbi5zZWFyY2hSb3cge1xyXG4gIGJvcmRlci1ib3R0b206IDBweDtcclxufVxyXG5cclxuLnNlYXJjaFJvdzpudGgtY2hpbGQoMm4pIHtcclxuICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xyXG59XHJcblxyXG4uaXNTZWxlY3RlZCB7XHJcbiAgYmFja2dyb3VuZDogcmdiKDIyNCwgMjM5LCAyNTUpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zZWFyY2hSb3cge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcclxufVxyXG5cclxuLnNlYXJjaFJvdzpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyMjQsIDIzOSwgMjU1LCAwLjQpO1xyXG59XHJcblxyXG4uc2VhcmNoRGlzcGxheSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5zZWFyY2hUYWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi50YWJsZVdyYXBwZXIge1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG4gIG1heC1oZWlnaHQ6IDU1dmg7XHJcbn1cclxuXHJcbiNzZWFyY2hCdXR0b24ge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwYWRkaW5nOiA0cHg7XHJcbiAgbWFyZ2luOiAwIDAgNXB4IDA7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 3827:
/*!*******************************************************************************!*\
  !*** ./src/app/components/modal/search-template/search-template.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchTemplateComponent": () => (/* binding */ SearchTemplateComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _base_search_search_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base/search/search-base.component */ 6398);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 9790);
/* harmony import */ var _services_connection_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/connection.service */ 2377);
/* harmony import */ var _services_globals_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/globals.service */ 660);
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/message.service */ 2684);
/* harmony import */ var src_app_services_input_tools_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/input-tools.service */ 8398);
/* harmony import */ var src_app_services_address_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/address.service */ 9688);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 8295);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ 3166);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ 7441);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ 7817);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/table */ 2091);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/dialog */ 2238);


















const _c0 = ["searchTemplate"];
function SearchTemplateComponent_ng_template_0_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SearchTemplateComponent_ng_template_0_button_9_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r7.searchValue = ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngStyle", ctx_r2.searchClearImage);
} }
function SearchTemplateComponent_ng_template_0_mat_option_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", option_r9.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](option_r9.viewValue);
} }
const _c1 = function (a0) { return { background: a0 }; };
function SearchTemplateComponent_ng_template_0_div_18_mat_cell_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "mat-cell", 23);
} if (rf & 2) {
    const element_r13 = ctx.$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](1, _c1, "no-repeat url(" + ctx_r10.viewIconBaseURL + element_r13.iconURL + ")"));
} }
function SearchTemplateComponent_ng_template_0_div_18_mat_cell_5_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" ", element_r14.name, ", ", element_r14.type, " ");
} }
function SearchTemplateComponent_ng_template_0_div_18_mat_cell_5_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r14.purpose, " ");
} }
function SearchTemplateComponent_ng_template_0_div_18_mat_cell_5_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r14.category, " ");
} }
function SearchTemplateComponent_ng_template_0_div_18_mat_cell_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-cell", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-dialog-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, SearchTemplateComponent_ng_template_0_div_18_mat_cell_5_div_4_Template, 2, 2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, SearchTemplateComponent_ng_template_0_div_18_mat_cell_5_div_5_Template, 2, 1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, SearchTemplateComponent_ng_template_0_div_18_mat_cell_5_div_6_Template, 2, 1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r14.display, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", element_r14.name !== "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", element_r14.purpose !== "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", element_r14.category !== "");
} }
function SearchTemplateComponent_ng_template_0_div_18_mat_row_6_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-row", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SearchTemplateComponent_ng_template_0_div_18_mat_row_6_Template_mat_row_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r23); const row_r21 = restoredCtx.$implicit; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3); return ctx_r22.toggleSelection(row_r21); })("dblclick", function SearchTemplateComponent_ng_template_0_div_18_mat_row_6_Template_mat_row_dblclick_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r23); const row_r21 = restoredCtx.$implicit; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3); return ctx_r24.acceptEntryDblClick(row_r21); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r21 = ctx.$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("isSelected", ctx_r12.selection.isSelected(row_r21));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matRippleColor", ctx_r12.rippleColor)("matRippleCentered", ctx_r12.centered)("matRippleDisabled", ctx_r12.disabled)("matRippleUnbounded", ctx_r12.unbounded);
} }
function SearchTemplateComponent_ng_template_0_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-table", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](2, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, SearchTemplateComponent_ng_template_0_div_18_mat_cell_3_Template, 1, 3, "mat-cell", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](4, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, SearchTemplateComponent_ng_template_0_div_18_mat_cell_5_Template, 7, 4, "mat-cell", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, SearchTemplateComponent_ng_template_0_div_18_mat_row_6_Template, 1, 6, "mat-row", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("dataSource", ctx_r4.searchResults);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matRowDefColumns", ctx_r4.displayedColumns);
} }
function SearchTemplateComponent_ng_template_0_ng_template_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "LC53482"));
} }
const _c2 = function (a0) { return { title: a0 }; };
const _c3 = function (a0, a1, a2, a3) { return { confirm: a0, cancel: a1, confirmAction: a2, cancelAction: a3 }; };
function SearchTemplateComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainer"](0, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "mat-form-field", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function SearchTemplateComponent_ng_template_0_Template_input_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r25.searchValue = $event; })("keyup.enter", function SearchTemplateComponent_ng_template_0_Template_input_keyup_enter_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r26); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r27.search(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, SearchTemplateComponent_ng_template_0_button_9_Template, 2, 1, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SearchTemplateComponent_ng_template_0_Template_input_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r26); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r28.search(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "mat-form-field", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "mat-select", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("valueChange", function SearchTemplateComponent_ng_template_0_Template_mat_select_valueChange_16_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r26); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r29.selectedDB = $event; })("selectionChange", function SearchTemplateComponent_ng_template_0_Template_mat_select_selectionChange_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r26); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r30.fetchSearch(ctx_r30.selectedDB); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](17, SearchTemplateComponent_ng_template_0_mat_option_17_Template, 2, 2, "mat-option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](18, SearchTemplateComponent_ng_template_0_div_18_Template, 7, 2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, SearchTemplateComponent_ng_template_0_ng_template_19_Template, 3, 3, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainer"](21, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](22, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](23, "translate");
} if (rf & 2) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](20);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.modalHeader)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](25, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](1, 13, "LC53493")));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](7, 15, "LC53489"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r1.searchValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.searchValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](11, 17, "LC36251"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](15, 19, "LC53516"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", ctx_r1.selectedDB);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r1.databases);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.searchResults.length >= 1)("ngIfElse", _r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.modalFooter)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction4"](27, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](22, 21, "LC73135"), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](23, 23, "LC73136"), ctx_r1.confirmAction.bind(ctx_r1), ctx_r1.cancelAction.bind(ctx_r1)));
} }
class SearchTemplateComponent extends _base_search_search_base_component__WEBPACK_IMPORTED_MODULE_0__.SearchBaseComponent {
    constructor(translate, connection, globals, messageService, inputService, addressService) {
        super(translate, connection, globals, messageService, inputService, addressService);
        this.messageEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
        this.prefix = 'Template: ';
        this.path = 'templates';
        this.searchResults = [];
    }
    ngOnInit() {
        super.ngOnInit();
    }
    getTemplate() {
        return this.modalTemp;
    }
    createPhoneCallHttpParams(templatePointer) {
        const templateType = 'PhoneCall';
        const createDocumentType = 'faActivities';
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpParams();
        params = params.appendAll({
            createDocument: createDocumentType,
            parentPointer: this.addressService.currentPointer,
            templatePointer,
            templateType,
        });
        if (this.globals.curSubject != null) {
            params = params.set('cval-Subject', this.globals.curSubject);
        }
        const paramsToAdd = ['crmDB'];
        return {
            paramsToAdd,
            params,
        };
    }
    convertToArr(resp) {
        const templateDBs = {};
        console.log(resp);
        for (const index in resp) {
            if (resp[index].type === 'Template') {
                templateDBs[resp[index].alias] = resp[index].title;
            }
        }
        this.generateSelectionArr(templateDBs);
    }
    generateSelectionArr(dbs) {
        console.log('???');
        console.log(dbs);
        for (const db in dbs) {
            if (Object.prototype.hasOwnProperty.call(dbs, db)) {
                const newTemplate = {
                    value: db,
                    viewValue: this.prefix + dbs[db],
                };
                console.log(newTemplate);
                this.databases.push(newTemplate);
            }
        }
        this.data.parentPointer = this.addressService.currentPointer;
        if (this.databases.length > 0) {
            console.log(this.databases);
            this.selectedDB = this.databases[0].value;
            this.fetchSearch(this.selectedDB);
        }
        console.log(this.databases);
    }
    fetchDBs() {
        this.connection
            .getReqModal('templates', this.connection.objectToHttpParams({
            templateDBs: 'true',
        }))
            .subscribe((resp) => {
            console.log(resp);
            this.convertToArr(resp);
        });
    }
    handleResult(resp) {
        console.log(resp);
        if (resp != null && Array.isArray(resp) && resp.length > 0) {
            this.searchResults = resp;
        }
        else {
            this.searchResults = [];
        }
        console.log(this.searchResults);
    }
    confirmAction() {
        if (this.selection.isEmpty()) {
            this.translate.get('LC53493').subscribe((text) => {
                this.messageService.showError(text);
            });
        }
        else {
            this.openAnotherModal(this.next, {
                paramsData: this.createPhoneCallHttpParams(this.selection.selected[0].pointer),
                ignoreNext: true,
            });
        }
    }
}
SearchTemplateComponent.ɵfac = function SearchTemplateComponent_Factory(t) { return new (t || SearchTemplateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_connection_service__WEBPACK_IMPORTED_MODULE_1__.ConnectionService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_globals_service__WEBPACK_IMPORTED_MODULE_2__.GlobalsService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_message_service__WEBPACK_IMPORTED_MODULE_3__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_input_tools_service__WEBPACK_IMPORTED_MODULE_4__.InputToolsService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_address_service__WEBPACK_IMPORTED_MODULE_5__.AddressService)); };
SearchTemplateComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: SearchTemplateComponent, selectors: [["app-search-template"]], viewQuery: function SearchTemplateComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.modalTemp = _t.first);
    } }, inputs: { data: "data" }, outputs: { messageEvent: "messageEvent" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 0, consts: [["searchTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "modalBody"], [1, "searchInputWrapper"], [1, "searchInput"], ["matInput", "", "type", "text", 3, "ngModel", "ngModelChange", "keyup.enter"], ["matSuffix", "", "aria-label", "Clear", 3, "click", 4, "ngIf"], ["id", "searchButton", "type", "button", 1, "buttonSilverMiddle", 3, "value", "click"], ["appearance", "standard", 1, "databaseSearchSelect"], [3, "value", "valueChange", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "tableWrapper", 4, "ngIf", "ngIfElse"], ["noResult", ""], ["matSuffix", "", "aria-label", "Clear", 3, "click"], [1, "modalCloseIcon", 3, "ngStyle"], [3, "value"], [1, "tableWrapper"], [1, "searchTable", 3, "dataSource"], ["matColumnDef", "icon"], ["class", "searchIcon", 3, "ngStyle", 4, "matCellDef"], ["matColumnDef", "display"], ["class", "searchDisplay", 4, "matCellDef"], ["matRipple", "", "class", "searchRow", 3, "matRippleColor", "matRippleCentered", "matRippleDisabled", "matRippleUnbounded", "isSelected", "click", "dblclick", 4, "matRowDef", "matRowDefColumns"], [1, "searchIcon", 3, "ngStyle"], [1, "searchDisplay"], [1, "bold"], [4, "ngIf"], ["matRipple", "", 1, "searchRow", 3, "matRippleColor", "matRippleCentered", "matRippleDisabled", "matRippleUnbounded", "click", "dblclick"]], template: function SearchTemplateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, SearchTemplateComponent_ng_template_0_Template, 24, 32, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgTemplateOutlet, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_material_select__WEBPACK_IMPORTED_MODULE_13__.MatSelect, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatSuffix, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgStyle, _angular_material_core__WEBPACK_IMPORTED_MODULE_14__.MatOption, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatCell, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__.MatDialogContent, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatRow, _angular_material_core__WEBPACK_IMPORTED_MODULE_14__.MatRipple], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslatePipe], styles: [".searchInputWrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.databaseSearchSelect[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.searchInput[_ngcontent-%COMP%] {\n  width: calc(100% - 70px);\n  display: block;\n  padding-bottom: 0px !important;\n}\n\n.searchIcon[_ngcontent-%COMP%] {\n  width: 30px;\n  padding: 0 10px 0 0px !important;\n  background-position: 40% 50% !important;\n}\n\n.searchRow[_ngcontent-%COMP%]   .searchIcon[_ngcontent-%COMP%], .searchRow[_ngcontent-%COMP%]   .searchDisplay[_ngcontent-%COMP%], .searchRow[_ngcontent-%COMP%] {\n  border-bottom: 0px;\n}\n\n.searchRow[_ngcontent-%COMP%]:nth-child(2n) {\n  background: #f2f2f2;\n}\n\n.isSelected[_ngcontent-%COMP%] {\n  background: #e0efff !important;\n}\n\n.searchRow[_ngcontent-%COMP%] {\n  cursor: pointer;\n  overflow: hidden;\n  padding-right: 5px;\n}\n\n.searchRow[_ngcontent-%COMP%]:hover {\n  background: rgba(224, 239, 255, 0.4);\n}\n\n.searchDisplay[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.searchTable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.tableWrapper[_ngcontent-%COMP%] {\n  overflow: auto;\n  max-height: 55vh;\n}\n\n#searchButton[_ngcontent-%COMP%] {\n  height: 100%;\n  padding: 4px;\n  margin: 0 0 5px 0;\n  float: right;\n  font-weight: bold;\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC1iYXNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtBQUNGOztBQUVBO0VBQ0Usd0JBQUE7RUFDQSxjQUFBO0VBQ0EsOEJBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxnQ0FBQTtFQUNBLHVDQUFBO0FBQ0Y7O0FBRUE7OztFQUdFLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsOEJBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxvQ0FBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtBQUNGIiwiZmlsZSI6InNlYXJjaC1iYXNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlYXJjaElucHV0V3JhcHBlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4uZGF0YWJhc2VTZWFyY2hTZWxlY3Qge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uc2VhcmNoSW5wdXQge1xyXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA3MHB4KTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwYWRkaW5nLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zZWFyY2hJY29uIHtcclxuICB3aWR0aDogMzBweDtcclxuICBwYWRkaW5nOiAwIDEwcHggMCAwcHggIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA0MCUgNTAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zZWFyY2hSb3cgLnNlYXJjaEljb24sXHJcbi5zZWFyY2hSb3cgLnNlYXJjaERpc3BsYXksXHJcbi5zZWFyY2hSb3cge1xyXG4gIGJvcmRlci1ib3R0b206IDBweDtcclxufVxyXG5cclxuLnNlYXJjaFJvdzpudGgtY2hpbGQoMm4pIHtcclxuICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xyXG59XHJcblxyXG4uaXNTZWxlY3RlZCB7XHJcbiAgYmFja2dyb3VuZDogcmdiKDIyNCwgMjM5LCAyNTUpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zZWFyY2hSb3cge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcclxufVxyXG5cclxuLnNlYXJjaFJvdzpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyMjQsIDIzOSwgMjU1LCAwLjQpO1xyXG59XHJcblxyXG4uc2VhcmNoRGlzcGxheSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5zZWFyY2hUYWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi50YWJsZVdyYXBwZXIge1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG4gIG1heC1oZWlnaHQ6IDU1dmg7XHJcbn1cclxuXHJcbiNzZWFyY2hCdXR0b24ge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwYWRkaW5nOiA0cHg7XHJcbiAgbWFyZ2luOiAwIDAgNXB4IDA7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 1436:
/*!*****************************************************************************!*\
  !*** ./src/app/components/modal/select-contact/select-contact.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectContactComponent": () => (/* binding */ SelectContactComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _base_modal_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base/modal-base.component */ 3145);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 9790);
/* harmony import */ var _services_connection_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/connection.service */ 2377);
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/message.service */ 2684);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/list */ 7746);








const _c0 = ["selContact"];
const _c1 = ["dbs"];
function SelectContactComponent_ng_template_0_p_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "LC53515"));
} }
function SelectContactComponent_ng_template_0_mat_list_option_6_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-list-option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("dblclick", function SelectContactComponent_ng_template_0_mat_list_option_6_Template_mat_list_option_dblclick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r6.confirmAction(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const curDB_r5 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("value", curDB_r5.db);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("selected", ctx_r4.contactDBs.length === 1 ? curDB_r5.db : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", curDB_r5.title, " ");
} }
const _c2 = function (a0) { return { title: a0 }; };
const _c3 = function (a0, a1, a2, a3) { return { confirm: a0, cancel: a1, confirmAction: a2, cancelAction: a3 }; };
function SelectContactComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "mat-selection-list", 3, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, SelectContactComponent_ng_template_0_p_5_Template, 3, 3, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, SelectContactComponent_ng_template_0_mat_list_option_6_Template, 2, 3, "mat-list-option", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](7, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](9, "translate");
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.modalHeader)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](13, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 7, "LC53516")));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("multiple", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.contactDBs.length < 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.contactDBs);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.modalFooter)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction4"](15, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](8, 9, "LC73135"), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](9, 11, "LC73136"), ctx_r1.confirmAction.bind(ctx_r1, ctx_r1.selection), ctx_r1.cancelAction.bind(ctx_r1)));
} }
class SelectContactComponent extends _base_modal_base_component__WEBPACK_IMPORTED_MODULE_0__.ModalBaseComponent {
    constructor(translate, connection, messageService) {
        super(translate);
        this.translate = translate;
        this.connection = connection;
        this.messageService = messageService;
        this.contactDBs = [];
    }
    ngOnInit() {
        super.ngOnInit();
        this.fetchContactsDBs();
    }
    confirmAction(selection, preselectDB) {
        try {
            let chosenDB;
            if (preselectDB != null) {
                chosenDB = preselectDB;
            }
            else {
                chosenDB = this.selection.selectedOptions.selected[0].value;
            }
            this.openAnotherModal(this.next, {
                contactsDB: chosenDB,
                createType: this.data.createType,
            });
        }
        catch (e) {
            this.translate.get('LC53493').subscribe((text) => {
                this.messageService.showError(text);
            });
        }
    }
    fetchContactsDBs() {
        this.connection.getReqModal('dbConnections', null).subscribe((resp) => {
            this.clearOfficeDBs();
            this.extractContacts(resp);
        });
    }
    extractContacts(resp) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            for (const db in resp) {
                if (Object.prototype.hasOwnProperty.call(resp, db)) {
                    if (db === 'GeOfficeAliases') {
                        continue;
                    }
                    if (resp[db].type === 'Contact') {
                        console.log(resp);
                        this.contactDBs.push({
                            title: resp[db].title,
                            db,
                        });
                    }
                }
            }
            if (this.contactDBs.length < 1) {
                this.translate.get('LC73225').subscribe((text) => {
                    this.messageService.showError(text);
                    this.cancelAction();
                    return;
                });
            }
            if (this.contactDBs.length === 1) {
                this.confirmAction(this.selection, this.contactDBs[0].db);
            }
        });
    }
    clearOfficeDBs() {
        this.contactDBs.length = 0;
    }
}
SelectContactComponent.ɵfac = function SelectContactComponent_Factory(t) { return new (t || SelectContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_connection_service__WEBPACK_IMPORTED_MODULE_1__.ConnectionService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_message_service__WEBPACK_IMPORTED_MODULE_2__.MessageService)); };
SelectContactComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: SelectContactComponent, selectors: [["app-select-contact"]], viewQuery: function SelectContactComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c1, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.modalTemp = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.selection = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 0, consts: [["selContact", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "modalBody"], [3, "multiple"], ["dbs", ""], [4, "ngIf"], ["checkboxPosition", "after", 3, "value", "selected", "dblclick", 4, "ngFor", "ngForOf"], ["checkboxPosition", "after", 3, "value", "selected", "dblclick"]], template: function SelectContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, SelectContactComponent_ng_template_0_Template, 10, 20, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgTemplateOutlet, _angular_material_list__WEBPACK_IMPORTED_MODULE_7__.MatSelectionList, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_material_list__WEBPACK_IMPORTED_MODULE_7__.MatListOption], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWxlY3QtY29udGFjdC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 7545:
/*!***************************************************************************************!*\
  !*** ./src/app/components/modal/select-create-label/select-create-label.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectCreateLabelComponent": () => (/* binding */ SelectCreateLabelComponent)
/* harmony export */ });
/* harmony import */ var _base_modal_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base/modal-base.component */ 3145);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 9790);
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/message.service */ 2684);
/* harmony import */ var _services_globals_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/globals.service */ 660);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/list */ 7746);







const _c0 = ["selLabelCreate"];
const _c1 = ["selection"];
function SelectCreateLabelComponent_ng_template_0_mat_list_option_5_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-list-option", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("dblclick", function SelectCreateLabelComponent_ng_template_0_mat_list_option_5_Template_mat_list_option_dblclick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r5.confirmAction(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const entry_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("value", entry_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("selected", entry_r4 === ctx_r3.selectedEntry);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r3.data.passedData.labelDisplayMap.get(entry_r4), " ");
} }
const _c2 = function (a0) { return { title: a0 }; };
const _c3 = function (a0, a1, a2, a3) { return { confirm: a0, cancel: a1, confirmAction: a2, cancelAction: a3 }; };
function SelectCreateLabelComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "mat-selection-list", 3, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, SelectCreateLabelComponent_ng_template_0_mat_list_option_5_Template, 2, 3, "mat-list-option", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](6, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](8, "translate");
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.modalHeader)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](12, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 6, "LC53516")));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("multiple", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.data.passedData.createLabels);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.modalFooter)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction4"](14, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](7, 8, "LC73135"), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](8, 10, "LC73136"), ctx_r1.confirmAction.bind(ctx_r1), ctx_r1.cancelAction.bind(ctx_r1)));
} }
class SelectCreateLabelComponent extends _base_modal_base_component__WEBPACK_IMPORTED_MODULE_0__.ModalBaseComponent {
    constructor(translate, messageService, globals) {
        super(translate);
        this.translate = translate;
        this.messageService = messageService;
        this.globals = globals;
        this.selectedEntry = '';
    }
    ngOnInit() {
        super.ngOnInit();
        console.log(this.data.passedData);
        console.log(this.data.passedData.createLabels.indexOf(''));
        if (this.data.passedData.createLabels.indexOf('') === -1) {
            this.data.passedData.createLabels.unshift('');
        }
        this.selectedEntry = this.data.passedData.selected;
    }
    confirmAction() {
        this.data.closeModal(this.selection.selectedOptions.selected[0].value);
    }
}
SelectCreateLabelComponent.ɵfac = function SelectCreateLabelComponent_Factory(t) { return new (t || SelectCreateLabelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_message_service__WEBPACK_IMPORTED_MODULE_1__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_globals_service__WEBPACK_IMPORTED_MODULE_2__.GlobalsService)); };
SelectCreateLabelComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: SelectCreateLabelComponent, selectors: [["app-select-create-label"]], viewQuery: function SelectCreateLabelComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c1, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.modalTemp = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.selection = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 0, consts: [["selLabelCreate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "modalBody"], [3, "multiple"], ["selection", ""], ["checkboxPosition", "after", 3, "value", "selected", "dblclick", 4, "ngFor", "ngForOf"], ["checkboxPosition", "after", 3, "value", "selected", "dblclick"]], template: function SelectCreateLabelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, SelectCreateLabelComponent_ng_template_0_Template, 9, 19, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgTemplateOutlet, _angular_material_list__WEBPACK_IMPORTED_MODULE_6__.MatSelectionList, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_material_list__WEBPACK_IMPORTED_MODULE_6__.MatListOption], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWxlY3QtY3JlYXRlLWxhYmVsLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 632:
/*!***************************************************************************************!*\
  !*** ./src/app/components/modal/select-mail-address/select-mail-address.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectMailAddressComponent": () => (/* binding */ SelectMailAddressComponent)
/* harmony export */ });
/* harmony import */ var _base_modal_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base/modal-base.component */ 3145);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var src_app_services_globals_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/globals.service */ 660);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 9790);
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/message.service */ 2684);
/* harmony import */ var src_app_services_reload_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/reload.service */ 1293);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/list */ 7746);








const _c0 = ["selMailAddr"];
const _c1 = ["mailAddrs"];
function SelectMailAddressComponent_ng_template_0_mat_list_option_5_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-list-option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("dblclick", function SelectMailAddressComponent_ng_template_0_mat_list_option_5_Template_mat_list_option_dblclick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r6.confirmAction(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("value", ctx_r3.globals.curFrom.emailAddress);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 3, "LC73126"), ": ", ctx_r3.globals.curFrom.emailAddress, " ");
} }
function SelectMailAddressComponent_ng_template_0_mat_list_option_6_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-list-option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("dblclick", function SelectMailAddressComponent_ng_template_0_mat_list_option_6_Template_mat_list_option_dblclick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r9.confirmAction(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const to_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("value", to_r8.emailAddress);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 3, "LC73127"), ": ", to_r8.emailAddress, " ");
} }
function SelectMailAddressComponent_ng_template_0_mat_list_option_7_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-list-option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("dblclick", function SelectMailAddressComponent_ng_template_0_mat_list_option_7_Template_mat_list_option_dblclick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r12.confirmAction(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cc_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("value", cc_r11.emailAddress);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 3, "LC73128"), ": ", cc_r11.emailAddress, " ");
} }
const _c2 = function (a0) { return { title: a0 }; };
const _c3 = function () { return {}; };
const _c4 = function (a0, a1, a2, a3) { return { confirm: a0, cancel: a1, confirmAction: a2, cancelAction: a3 }; };
function SelectMailAddressComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainer"](0, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "mat-selection-list", 3, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, SelectMailAddressComponent_ng_template_0_mat_list_option_5_Template, 3, 5, "mat-list-option", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, SelectMailAddressComponent_ng_template_0_mat_list_option_6_Template, 3, 5, "mat-list-option", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, SelectMailAddressComponent_ng_template_0_mat_list_option_7_Template, 3, 5, "mat-list-option", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainer"](8, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](10, "translate");
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.modalHeader)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](14, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 8, "LC53517")));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("multiple", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.globals.curFrom !== null && ctx_r1.globals.curFrom !== _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](16, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.globals.curTo);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.globals.curCC);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.modalFooter)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction4"](17, _c4, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](9, 10, "LC73135"), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](10, 12, "LC73136"), ctx_r1.confirmAction.bind(ctx_r1, ctx_r1.selection), ctx_r1.cancelAction.bind(ctx_r1)));
} }
class SelectMailAddressComponent extends _base_modal_base_component__WEBPACK_IMPORTED_MODULE_0__.ModalBaseComponent {
    constructor(globals, translate, messageService, reloadService) {
        super(translate);
        this.globals = globals;
        this.translate = translate;
        this.messageService = messageService;
        this.reloadService = reloadService;
    }
    ngOnInit() {
        super.ngOnInit();
    }
    confirmAction() {
        try {
            this.globals.curMailAddr =
                this.selection.selectedOptions.selected[0].value;
            this.closeAll();
            this.reloadService.reload();
        }
        catch (e) {
            this.translate.get('LC53493').subscribe((text) => {
                this.messageService.showError(text);
            });
        }
    }
}
SelectMailAddressComponent.ɵfac = function SelectMailAddressComponent_Factory(t) { return new (t || SelectMailAddressComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_globals_service__WEBPACK_IMPORTED_MODULE_1__.GlobalsService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_message_service__WEBPACK_IMPORTED_MODULE_2__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_reload_service__WEBPACK_IMPORTED_MODULE_3__.ReloadService)); };
SelectMailAddressComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: SelectMailAddressComponent, selectors: [["app-select-mail-address"]], viewQuery: function SelectMailAddressComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c1, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.modalTemp = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.selection = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 0, consts: [["selMailAddr", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "modalBody"], [3, "multiple"], ["mailAddrs", ""], ["checkboxPosition", "after", 3, "value", "dblclick", 4, "ngIf"], ["checkboxPosition", "after", 3, "value", "dblclick", 4, "ngFor", "ngForOf"], ["checkboxPosition", "after", 3, "value", "dblclick"]], template: function SelectMailAddressComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, SelectMailAddressComponent_ng_template_0_Template, 11, 22, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgTemplateOutlet, _angular_material_list__WEBPACK_IMPORTED_MODULE_7__.MatSelectionList, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_material_list__WEBPACK_IMPORTED_MODULE_7__.MatListOption], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWxlY3QtbWFpbC1hZGRyZXNzLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 3939:
/*!*************************************************************************!*\
  !*** ./src/app/components/modal/webint-input/webint-input.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WebintInputComponent": () => (/* binding */ WebintInputComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var src_app_services_message_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/message.service */ 2684);
/* harmony import */ var src_app_services_input_tools_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/input-tools.service */ 8398);
/* harmony import */ var src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/loader.service */ 8555);
/* harmony import */ var src_app_services_connection_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/connection.service */ 2377);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 2238);
/* harmony import */ var src_app_services_globals_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/globals.service */ 660);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ 3166);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 3679);











const _c0 = ["webInp"];
function WebintInputComponent_ng_template_0_p_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r2.globals.languageConfLocal.webIntLogout, " ");
} }
function WebintInputComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function WebintInputComponent_ng_template_0_Template_div_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r3.closeModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, WebintInputComponent_ng_template_0_p_9_Template, 2, 1, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function WebintInputComponent_ng_template_0_Template_input_ngModelChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r5.inputValue = $event; })("keyup.enter", function WebintInputComponent_ng_template_0_Template_input_keyup_enter_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r6.confirmAction(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function WebintInputComponent_ng_template_0_Template_input_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r7.confirmAction(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.globals.languageConfLocal.webIntInputTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngStyle", ctx_r1.modCloseImage);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r1.globals.languageConfLocal.webIntInputText, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.connectionService.isLoggedIn);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r1.inputValue);
} }
class WebintInputComponent {
    constructor(messageService, sanitize, loader, connectionService, modal, globals) {
        this.messageService = messageService;
        this.sanitize = sanitize;
        this.loader = loader;
        this.connectionService = connectionService;
        this.modal = modal;
        this.globals = globals;
        this.modCloseImage = {
            background: 'no-repeat url(assets/images/widget_settings.png)',
        };
        this.lcLocal = this.globals.languageConfLocal;
        this.inputValue = '';
        if (window.localStorage.getItem('webInt') != null) {
            this.connectionService.webIntModalOpenRef = this.open.bind(this);
        }
    }
    ngOnInit() {
        if (window.localStorage.getItem('webInt') != null) {
            this.inputValue = window.localStorage.getItem('webInt');
        }
        else {
            this.loader.activateLoader(true);
            setTimeout(() => {
                this.loader.forceDeactivateLoader();
                this.connectionService.webIntModalOpenRef = this.open.bind(this);
            }, 2000);
        }
    }
    open() {
        return this.modal.open(this.modalTemp, {
            panelClass: 'modalOverlay',
            autoFocus: false,
            maxHeight: '90%',
        });
    }
    confirmAction() {
        this.checkInput(this.sanitize.sanitizeInput(this.inputValue, 4));
        console.log(this.inputValue);
    }
    closeModal() {
        this.modal.closeAll();
    }
    checkInput(inputVal) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            console.log(inputVal);
            if (inputVal && inputVal.includes('.nsf')) {
                inputVal = inputVal.substring(0, inputVal.indexOf('.nsf') + 4);
            }
            else {
                inputVal = null;
            }
            if (inputVal === this.globals.webInt) {
                this.closeModal();
                return;
            }
            if (inputVal == null || inputVal === '') {
                this.messageService.showError(this.globals.languageConfLocal.webIntInvalid);
            }
            else if (inputVal.includes('http:')) {
                this.messageService.showWarning(this.globals.languageConfLocal.webIntHttp);
            }
            else {
                if (!inputVal.startsWith('https')) {
                    inputVal = 'https://' + inputVal;
                }
                if (!inputVal.endsWith('/')) {
                    inputVal = inputVal + '/';
                }
                if (yield this.connectionService.checkWebInt(inputVal)) {
                    this.connectionService.connect().subscribe(() => {
                        this.connectionService.reload();
                    });
                }
            }
        });
    }
}
WebintInputComponent.ɵfac = function WebintInputComponent_Factory(t) { return new (t || WebintInputComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_message_service__WEBPACK_IMPORTED_MODULE_0__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_input_tools_service__WEBPACK_IMPORTED_MODULE_1__.InputToolsService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_2__.LoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_connection_service__WEBPACK_IMPORTED_MODULE_3__.ConnectionService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_globals_service__WEBPACK_IMPORTED_MODULE_4__.GlobalsService)); };
WebintInputComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: WebintInputComponent, selectors: [["app-webint-input"]], viewQuery: function WebintInputComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.modalTemp = _t.first);
    } }, decls: 2, vars: 0, consts: [["webInp", ""], [1, "modalHeader"], [1, "modalHeaderText"], ["ngbAutoFocus", "", 1, "modalHeaderClose", 3, "click"], [1, "modalCloseIcon", 3, "ngStyle"], [1, "modalBody"], [1, "webIntText"], [4, "ngIf"], ["id", "webIntInputWrapper", 1, "flex"], ["matInput", "", "type", "text", "id", "webIntInputField", 3, "ngModel", "ngModelChange", "keyup.enter"], ["type", "button", "id", "webIntConfirmButton", "value", "OK", 1, "buttonMiddle", "noFloat", 3, "click"]], template: function WebintInputComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, WebintInputComponent_ng_template_0_Template, 13, 5, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgStyle, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel], styles: [".webIntText[_ngcontent-%COMP%] {\n  white-space: pre-line;\n  font-weight: bold;\n  text-align: center;\n}\n\n#webIntInputField[_ngcontent-%COMP%] {\n  width: 230px;\n  outline: none;\n  margin-right: 10px;\n}\n\n#webIntConfirmButton[_ngcontent-%COMP%] {\n  height: 25px !important;\n  top: -1px;\n  position: relative;\n}\n\n#webIntInputWrapper[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYmludC1pbnB1dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsdUJBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUFDRiIsImZpbGUiOiJ3ZWJpbnQtaW5wdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2ViSW50VGV4dCB7XHJcbiAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuI3dlYkludElucHV0RmllbGQge1xyXG4gIHdpZHRoOiAyMzBweDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuI3dlYkludENvbmZpcm1CdXR0b24ge1xyXG4gIGhlaWdodDogMjVweCAhaW1wb3J0YW50O1xyXG4gIHRvcDogLTFweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbiN3ZWJJbnRJbnB1dFdyYXBwZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 1178:
/*!*****************************************************!*\
  !*** ./src/app/components/pager/pager.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PagerComponent": () => (/* binding */ PagerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services_address_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/address.service */ 9688);
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/message.service */ 2684);
/* harmony import */ var src_app_services_init_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/init.service */ 4705);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 9790);





class PagerComponent {
    constructor(addressService, messageService, initService) {
        this.addressService = addressService;
        this.messageService = messageService;
        this.initService = initService;
        this.appIsInit = false;
        this.endIndex = 0;
    }
    ngOnInit() {
        this.waitForAddresses();
        this.initService.waitForInit().subscribe((resp) => {
            this.appIsInit = resp;
        });
        this.addressService.waitForAddressChange().subscribe(() => {
            this.waitForAddresses();
        });
    }
    // TODO: On Keypress ArrowKeys
    changeIndex(changeVal) {
        const newIndex = this.index + changeVal;
        if (newIndex >= 0 && newIndex <= this.maxIndex) {
            this.addressService.addressIndex = newIndex;
            this.messageService.clearToasts();
        }
    }
    init(addresses) {
        if (addresses.length < 1) {
            this.endIndex = 0;
            return;
        }
        this.endIndex = addresses.length - 1;
        console.log('init');
    }
    waitForAddresses() {
        console.log('-----PAGER-----');
        this.addressService.processAddresses().subscribe({
            next: (addresses) => {
                this.init(addresses);
            },
            error: () => {
                // Nothing
            },
            complete: () => {
                // Nothing
            },
        });
    }
    get index() {
        return this.addressService.addressIndex;
    }
    get maxIndex() {
        return this.endIndex;
    }
}
PagerComponent.ɵfac = function PagerComponent_Factory(t) { return new (t || PagerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_address_service__WEBPACK_IMPORTED_MODULE_0__.AddressService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_message_service__WEBPACK_IMPORTED_MODULE_1__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_init_service__WEBPACK_IMPORTED_MODULE_2__.InitService)); };
PagerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: PagerComponent, selectors: [["app-pager"]], decls: 5, vars: 10, consts: [["type", "image", "src", "assets/images/arrowRight.png", 1, "rotateImg", 3, "title", "click"], ["type", "image", "src", "assets/images/arrowRight.png", 3, "title", "click"]], template: function PagerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PagerComponent_Template_input_click_1_listener() { return ctx.changeIndex(-1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PagerComponent_Template_input_click_3_listener() { return ctx.changeIndex(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("visibility", ctx.index > 0 && ctx.appIsInit ? "visible" : "hidden");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 6, "LC53525"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("visibility", ctx.index < ctx.maxIndex && ctx.appIsInit ? "visible" : "hidden");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 8, "LC53524"));
    } }, pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe], styles: ["input[type=image][_ngcontent-%COMP%] {\n  padding: 8px;\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0FBQ0YiLCJmaWxlIjoicGFnZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dFt0eXBlPVwiaW1hZ2VcIl0ge1xyXG4gIHBhZGRpbmc6IDhweDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 8265:
/*!*******************************************************************!*\
  !*** ./src/app/components/site-actions/site-actions.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SiteActionsComponent": () => (/* binding */ SiteActionsComponent)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _otherClasses_config_items_default_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../otherClasses/config-items-default.class */ 5692);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services_globals_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/globals.service */ 660);
/* harmony import */ var src_app_services_connection_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/connection.service */ 2377);
/* harmony import */ var src_app_services_create_address_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/create-address.service */ 2654);
/* harmony import */ var src_app_graph_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/graph/services/auth.service */ 1831);
/* harmony import */ var src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/loader.service */ 8555);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/menu */ 3935);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 9790);











function SiteActionsComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SiteActionsComponent_div_4_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r8.toggleClass(2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](ctx_r0.iconConfigLocal[2].model.classAssignment[ctx_r0.iconConfigLocal[2].model.value]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](1, 5, ctx_r0.iconConfigLocal[2].model.titleLC[ctx_r0.iconConfigLocal[2].model.value]));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngStyle", ctx_r0.configIcon);
} }
function SiteActionsComponent_li_21_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SiteActionsComponent_li_21_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r10.openGraphLogin(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Login Microsoft Graph ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function SiteActionsComponent_li_22_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SiteActionsComponent_li_22_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r12.connectionService.logoutGraph(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Logout Microsoft Graph ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function SiteActionsComponent_li_23_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SiteActionsComponent_li_23_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r14.connectionService.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Logout Web ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
class SiteActionsComponent {
    constructor(globals, connectionService, createService, ren, authService, loader) {
        this.globals = globals;
        this.connectionService = connectionService;
        this.createService = createService;
        this.ren = ren;
        this.authService = authService;
        this.loader = loader;
        // Includes actions for Refreshing App and Login / Logout
        this.enteredButton = false;
        this.isMatMenuOpen = false;
        this.isMatMenu2Open = false;
        this.loggedIn = false;
        this.iconConfigLocal = _otherClasses_config_items_default_class__WEBPACK_IMPORTED_MODULE_0__.iconDefaultConfig;
        this.path = 'config';
        this.userName = 'Login';
        this.reloadImg = {
            background: 'no-repeat url(assets/images/icon_refresh_no_background.png)',
        };
        this.configIcon = {
            background: 'transparent url(assets/images/icons_business_mail.png) no-repeat',
        };
        this.configRestObj = {};
        this.createService.config = this.iconConfigLocal;
    }
    ngOnInit() {
        this.waitForUserName();
        if (window.localStorage.getItem('webInt') === null) {
            this.openWebIntModal();
        }
        this.initConfig();
    }
    menuEnter() {
        this.isMatMenuOpen = true;
        if (this.isMatMenu2Open) {
            this.isMatMenu2Open = false;
        }
    }
    menuLeave(trigger, firstEle) {
        setTimeout(() => {
            if (!this.isMatMenu2Open && !this.enteredButton) {
                this.isMatMenuOpen = false;
                trigger.closeMenu();
                if (firstEle) {
                    this.ren.removeClass(firstEle._elementRef.nativeElement, 'cdk-focused');
                    this.ren.removeClass(firstEle._elementRef.nativeElement, 'cdk-program-focused');
                }
            }
            else {
                this.isMatMenuOpen = false;
            }
        }, 80);
    }
    buttonEnter(trigger, firstEle) {
        setTimeout(() => {
            if (this.prevButtonTrigger && this.prevButtonTrigger !== trigger) {
                this.prevButtonTrigger.closeMenu();
                this.prevButtonTrigger = trigger;
                this.isMatMenuOpen = false;
                this.isMatMenu2Open = false;
                trigger.openMenu();
            }
            else if (!this.isMatMenuOpen) {
                this.enteredButton = true;
                this.prevButtonTrigger = trigger;
                trigger.openMenu();
                if (firstEle) {
                    this.ren.removeClass(firstEle._elementRef.nativeElement, 'cdk-focused');
                    this.ren.removeClass(firstEle._elementRef.nativeElement, 'cdk-program-focused');
                }
            }
            else {
                this.enteredButton = true;
                this.prevButtonTrigger = trigger;
            }
        });
    }
    buttonLeave(trigger) {
        setTimeout(() => {
            if (this.enteredButton && !this.isMatMenuOpen) {
                trigger.closeMenu();
            }
            if (!this.isMatMenuOpen) {
                trigger.closeMenu();
            }
            else {
                this.enteredButton = false;
            }
        }, 100);
    }
    reload() {
        this.connectionService.reload();
    }
    openWebIntModal() {
        this.connectionService.waitForWebIntModal().subscribe((openModal) => {
            openModal();
        });
    }
    openConnectWindow() {
        if (this.userName === 'Login') {
            if (window.localStorage.getItem('webInt') === null) {
                this.openWebIntModal();
            }
            else {
                this.connectionService.connect().subscribe(() => {
                    // Connection is handled by service
                });
            }
        }
    }
    openGraphLogin() {
        this.authService.signIn();
    }
    toggleClass(configTypeIndex, callOpenToggle = true) {
        console.log(this.configData);
        if (configTypeIndex < this.iconConfigLocal.length) {
            let curObj = this.iconConfigLocal[configTypeIndex].model;
            const objKeysArr = Object.keys(curObj.classAssignment);
            curObj = this.changeIcon(curObj, objKeysArr);
            if (this.configData &&
                this.configData[curObj.name] &&
                this.configData[curObj.name].inRest) {
                this.configRestObj[curObj.name] = curObj.value;
                let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpParams();
                for (const key of Object.keys(this.configRestObj)) {
                    params = params.set(key, this.configRestObj[key]);
                }
                if (configTypeIndex === 1) {
                    // Open Mail
                    this.globals.openMail = Boolean(curObj.value);
                }
                else if (configTypeIndex === 0) {
                    // Delete Attachments
                    this.globals.deleteAttachments = Boolean(curObj.value);
                }
                this.connectionService
                    .postReq(this.path, params, false, undefined, true)
                    .subscribe({
                    next: (resp) => {
                        // Do nothing
                    },
                    error: (errHttp) => {
                        // TODO Errorhandling
                        console.log(errHttp);
                    },
                    complete: () => {
                        // Do nothing
                    },
                });
            }
            else if (this.configData && this.configData.createAddress) {
                if (callOpenToggle) {
                    this.createService.toggleOpen();
                }
            }
        }
    }
    waitForUserName() {
        this.connectionService.processPath().subscribe(() => {
            this.connectionService.getUserName().subscribe((resp) => {
                this.globals.ownMailAddr = resp.mail;
                this.userName = resp.name;
                this.loggedIn = true;
            });
        });
    }
    changeIcon(curObj, objKeysArr) {
        curObj.value = objKeysArr[(objKeysArr.indexOf(curObj.value) + 1) % objKeysArr.length];
        return curObj;
    }
    initConfig() {
        console.log(this.connectionService);
        this.connectionService.getReqNoCache(this.path, null).subscribe({
            next: (resp) => {
                console.log(resp);
                this.initConfigClasses(resp);
            },
            error: (errHttp) => {
                this.connectionService.processPath().subscribe(() => {
                    //this.initConfig();
                });
            },
            complete: () => {
                // Do nothing
            },
        });
    }
    initConfigClasses(resp) {
        this.configRestObj = resp;
        const tmpConfigData = {};
        let forIndex = 0;
        for (const ele of this.iconConfigLocal) {
            const eleName = ele.model.name;
            let currentConfig;
            if (!currentConfig) {
                currentConfig = {
                    inRest: false,
                    index: 0,
                };
            }
            else {
                currentConfig = this.configData[eleName];
            }
            if (resp[eleName] || resp[eleName] === '') {
                ele.model.value = resp[eleName];
                currentConfig.inRest = true;
                if (eleName === 'deleteAttachments' || eleName === 'openMail') {
                    this.globals[eleName] = Boolean(resp[eleName]);
                }
            }
            console.log('RESP:' + resp);
            console.log(resp);
            tmpConfigData[eleName] = currentConfig;
            currentConfig.index = forIndex;
            forIndex++;
        }
        this.configData = tmpConfigData;
    }
}
SiteActionsComponent.ɵfac = function SiteActionsComponent_Factory(t) { return new (t || SiteActionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_globals_service__WEBPACK_IMPORTED_MODULE_1__.GlobalsService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_connection_service__WEBPACK_IMPORTED_MODULE_2__.ConnectionService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_create_address_service__WEBPACK_IMPORTED_MODULE_3__.CreateAddressService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_graph_services_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_5__.LoaderService)); };
SiteActionsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: SiteActionsComponent, selectors: [["app-site-actions"]], decls: 24, vars: 24, consts: [["id", "actionsHeader"], ["id", "actionButtons"], [1, "clearfix"], ["id", "reload", 1, "widgetReload", 3, "title", "ngStyle", "click"], ["id", "openCreate", 3, "class", "title", "ngStyle", "click", 4, "ngIf"], ["id", "openMail", 3, "title", "ngStyle", "click"], ["id", "deleteAttachments", 3, "title", "ngStyle", "click"], ["id", "userMenu", "mat-button", "", 3, "matMenuTriggerFor", "mouseenter", "mouseleave", "click"], ["button", "", "userMenuTrigger", "matMenuTrigger"], ["id", "userName", 1, "actionHeaderComponent"], ["id", "userMenuIcon", "src", "assets/images/DropDownArrowOffsetRight.png", 1, "actionHeaderComponent", "right"], ["direction", "down", "yPosition", "below", "xPosition", "before", 3, "hasBackdrop"], ["userMenu", "matMenu"], [3, "mouseenter", "mouseleave"], ["mat-menu-item", "", 1, "", 3, "click"], ["firstEle", ""], ["class", "", "mat-menu-item", "", 3, "click", 4, "ngIf"], ["id", "openCreate", 3, "title", "ngStyle", "click"]], template: function SiteActionsComponent_Template(rf, ctx) { if (rf & 1) {
        const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SiteActionsComponent_Template_div_click_3_listener() { return ctx.reload(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, SiteActionsComponent_div_4_Template, 2, 7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SiteActionsComponent_Template_div_click_5_listener() { return ctx.toggleClass(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SiteActionsComponent_Template_div_click_7_listener() { return ctx.toggleClass(0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("mouseenter", function SiteActionsComponent_Template_div_mouseenter_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r16); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](11); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](19); return ctx.buttonEnter(_r2, _r4); })("mouseleave", function SiteActionsComponent_Template_div_mouseleave_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r16); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](11); return ctx.buttonLeave(_r2); })("click", function SiteActionsComponent_Template_div_click_9_listener() { return ctx.openConnectWindow(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](14, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "mat-menu", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("mouseenter", function SiteActionsComponent_Template_span_mouseenter_17_listener() { return ctx.menuEnter(); })("mouseleave", function SiteActionsComponent_Template_span_mouseleave_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r16); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](11); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](19); return ctx.menuLeave(_r2, _r4); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "li", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SiteActionsComponent_Template_li_click_18_listener() { return ctx.openWebIntModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](21, SiteActionsComponent_li_21_Template, 2, 0, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](22, SiteActionsComponent_li_22_Template, 2, 0, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](23, SiteActionsComponent_li_23_Template, 2, 0, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("title", ctx.globals.languageConfLocal.reload);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngStyle", ctx.reloadImg);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.globals.actionsAllowed);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](ctx.iconConfigLocal[1].model.classAssignment[ctx.iconConfigLocal[1].model.value]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](6, 20, ctx.iconConfigLocal[1].model.titleLC[ctx.iconConfigLocal[1].model.value]));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngStyle", ctx.configIcon);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](ctx.iconConfigLocal[0].model.classAssignment[ctx.iconConfigLocal[0].model.value]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](8, 22, ctx.iconConfigLocal[0].model.titleLC[ctx.iconConfigLocal[0].model.value]));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngStyle", ctx.configIcon);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matMenuTriggerFor", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.userName, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hasBackdrop", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.globals.languageConfLocal.webIntConfig, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.globals.graphRequired && !ctx.globals.graphLoaded);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.globals.graphRequired && ctx.globals.graphLoaded);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.loggedIn);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgStyle, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__.MatMenuTrigger, _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__.MatMenuItem], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslatePipe], styles: [".widgetReload[_ngcontent-%COMP%] {\n  background-position: 1px 2px !important;\n  float: left;\n  margin-right: 2px;\n}\n\n.widgetReload[_ngcontent-%COMP%], .widgetOptions[_ngcontent-%COMP%], .widgetLogin[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 21px;\n  height: 22px;\n  text-decoration: none;\n  color: #2a5a8b;\n  cursor: pointer;\n}\n\n.actionHeaderComponent[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n.mat-menu-item[_ngcontent-%COMP%] {\n  font: 400 12px/20px Arial, Verdana, Helvetica, sans-serif;\n  height: 100%;\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n\n#userMenu[_ngcontent-%COMP%] {\n  height: 20px;\n  cursor: pointer;\n}\n\n#userMenuIcon[_ngcontent-%COMP%] {\n  margin-top: 2px;\n  margin-left: 4px;\n}\n\n#actionsHeader[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding-top: 5px;\n}\n\n.bmPlus[_ngcontent-%COMP%], .bmMinus[_ngcontent-%COMP%], .bmDocOFF[_ngcontent-%COMP%], .bmDocON[_ngcontent-%COMP%], .bmAttachInclude[_ngcontent-%COMP%], .bmAttachExclude[_ngcontent-%COMP%] {\n  float: left;\n  width: 22px;\n  height: 21px;\n  margin-right: 2px;\n  cursor: pointer;\n}\n\n.bmDocOFF[_ngcontent-%COMP%] {\n  background-position: -88px 0px !important;\n}\n\n.bmDocON[_ngcontent-%COMP%] {\n  background-position: -110px 0px !important;\n}\n\n.bmMinus[_ngcontent-%COMP%] {\n  background-position: -66px -21px !important;\n}\n\n.bmPlus[_ngcontent-%COMP%] {\n  background-position: -44px -21px !important;\n}\n\n.bmAttachInclude[_ngcontent-%COMP%] {\n  background-position: -22px -21px !important;\n}\n\n.bmAttachExclude[_ngcontent-%COMP%] {\n  background-position: 0px -21px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpdGUtYWN0aW9ucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVDQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7OztFQUdFLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBQTtBQUNGOztBQUVBO0VBQ0UseURBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTs7Ozs7O0VBTUUsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5Q0FBQTtBQUNGOztBQUVBO0VBQ0UsMENBQUE7QUFDRjs7QUFFQTtFQUNFLDJDQUFBO0FBQ0Y7O0FBRUE7RUFDRSwyQ0FBQTtBQUNGOztBQUVBO0VBQ0UsMkNBQUE7QUFDRjs7QUFFQTtFQUNFLHlDQUFBO0FBQ0YiLCJmaWxlIjoic2l0ZS1hY3Rpb25zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndpZGdldFJlbG9hZCB7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMXB4IDJweCAhaW1wb3J0YW50O1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIG1hcmdpbi1yaWdodDogMnB4O1xyXG59XHJcblxyXG4ud2lkZ2V0UmVsb2FkLFxyXG4ud2lkZ2V0T3B0aW9ucyxcclxuLndpZGdldExvZ2luIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDIxcHg7XHJcbiAgaGVpZ2h0OiAyMnB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogIzJhNWE4YjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5hY3Rpb25IZWFkZXJDb21wb25lbnQge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLm1hdC1tZW51LWl0ZW0ge1xyXG4gIGZvbnQ6IDQwMCAxMnB4IC8gMjBweCBBcmlhbCwgVmVyZGFuYSwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuI3VzZXJNZW51IHtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4jdXNlck1lbnVJY29uIHtcclxuICBtYXJnaW4tdG9wOiAycHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDRweDtcclxufVxyXG5cclxuI2FjdGlvbnNIZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIHBhZGRpbmctdG9wOiA1cHg7XHJcbn1cclxuXHJcbi5ibVBsdXMsXHJcbi5ibU1pbnVzLFxyXG4uYm1Eb2NPRkYsXHJcbi5ibURvY09OLFxyXG4uYm1BdHRhY2hJbmNsdWRlLFxyXG4uYm1BdHRhY2hFeGNsdWRlIHtcclxuICBmbG9hdDogbGVmdDtcclxuICB3aWR0aDogMjJweDtcclxuICBoZWlnaHQ6IDIxcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAycHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uYm1Eb2NPRkYge1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC04OHB4IDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYm1Eb2NPTiB7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTExMHB4IDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYm1NaW51cyB7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTY2cHggLTIxcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJtUGx1cyB7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTQ0cHggLTIxcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJtQXR0YWNoSW5jbHVkZSB7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTIycHggLTIxcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJtQXR0YWNoRXhjbHVkZSB7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMHB4IC0yMXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 7769:
/*!*********************************************************!*\
  !*** ./src/app/directives/activity-action.directive.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActivityActionDirective": () => (/* binding */ ActivityActionDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);

class ActivityActionDirective {
    constructor(elementRef) {
        this.elementRef = elementRef;
    }
    onMouseEnter() {
        this.elementRef.nativeElement.lastChild.classList =
            'show activityButtonContainer clearfix';
    }
    onMouseLeave() {
        this.elementRef.nativeElement.lastChild.classList =
            'hide activityButtonContainer clearfix';
    }
}
ActivityActionDirective.ɵfac = function ActivityActionDirective_Factory(t) { return new (t || ActivityActionDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef)); };
ActivityActionDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ActivityActionDirective, selectors: [["", "appActivityAction", ""]], hostBindings: function ActivityActionDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function ActivityActionDirective_mouseenter_HostBindingHandler() { return ctx.onMouseEnter(); })("mouseleave", function ActivityActionDirective_mouseleave_HostBindingHandler() { return ctx.onMouseLeave(); });
    } } });


/***/ }),

/***/ 9102:
/*!***********************************************!*\
  !*** ./src/app/directives/modal.directive.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalDirective": () => (/* binding */ ModalDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);

class ModalDirective {
    constructor(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
}
ModalDirective.ɵfac = function ModalDirective_Factory(t) { return new (t || ModalDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef)); };
ModalDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ModalDirective, selectors: [["", "appModal", ""]] });


/***/ }),

/***/ 7321:
/*!*************************************!*\
  !*** ./src/app/graph/data/oauth.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OAuthSettings": () => (/* binding */ OAuthSettings)
/* harmony export */ });
// eslint-disable-next-line @typescript-eslint/naming-convention
const OAuthSettings = {
    appId: '487bf2b8-965b-4e53-b071-3c13164313ca',
    redirectUri: 'https://vopint.gedys-intraware.de/gi8bm',
    /*appId: '82cc362f-b9da-43a3-b9f8-3008e6d47d9e',
    redirectUri: 'https://localhost:3000/gi8bm',*/
    scopes: ['user.read', 'mail.readbasic', 'mail.read', 'Mail.ReadWrite'],
};


/***/ }),

/***/ 3650:
/*!************************************!*\
  !*** ./src/app/graph/data/user.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "User": () => (/* binding */ User)
/* harmony export */ });
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// <UserSnippet>
class User {
}
// </UserSnippet>


/***/ }),

/***/ 1831:
/*!************************************************!*\
  !*** ./src/app/graph/services/auth.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _microsoft_microsoft_graph_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/microsoft-graph-client */ 8411);
/* harmony import */ var _data_oauth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/oauth */ 7321);
/* harmony import */ var _data_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/user */ 3650);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _azure_msal_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @azure/msal-angular */ 3235);
/* harmony import */ var src_app_services_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/message.service */ 2684);
/* harmony import */ var src_app_services_globals_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/globals.service */ 660);








class AuthService {
    // <ConstructorSnippet>
    constructor(msalService, messageService, globals) {
        this.msalService = msalService;
        this.messageService = messageService;
        this.globals = globals;
        /*this.authenticated = this.msalService.instance.getAllAccounts().length > 0;
        this.getUser().then((user) => {
          this.user = user;
        });*/
    }
    // </ConstructorSnippet>
    // Prompt the user to sign in and
    // grant consent to the requested permission scopes
    signIn(skipTokenCheck) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            if (!skipTokenCheck) {
                const token = yield this.getAccessToken();
                if (token && token !== '') {
                    return;
                }
            }
            const result = yield this.msalService
                .loginPopup(_data_oauth__WEBPACK_IMPORTED_MODULE_1__.OAuthSettings)
                .toPromise()
                .catch((reason) => {
                this.globals.actionsAllowed = false;
                this.messageService.showError(this.globals.languageConfLocal.graph, 'Microsoft Graph: Login failed', true);
            });
            if (result) {
                this.globals.actionsAllowed = true;
                this.globals.graphLoaded = true;
                this.authenticated = true;
                this.user = yield this.getUser();
            }
        });
    }
    // Sign out
    signOut() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            yield this.msalService.logout().toPromise();
            this.globals.graphLoaded = false;
            this.user = undefined;
            this.authenticated = false;
        });
    }
    // Sign out Popup
    signOutPopup() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            yield this.msalService.logoutPopup().toPromise();
            this.user = undefined;
            this.authenticated = false;
        });
    }
    // Silently request an access token
    getAccessToken() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const account = this.msalService.instance.getAllAccounts()[0];
            const result = yield this.msalService
                .acquireTokenSilent({
                account: account !== null && account !== void 0 ? account : undefined,
                scopes: _data_oauth__WEBPACK_IMPORTED_MODULE_1__.OAuthSettings.scopes,
            })
                .toPromise()
                .catch((reason) => {
                this.globals.actionsAllowed = false;
                this.messageService.showError(this.globals.languageConfLocal.graph, 'Microsoft Graph: Get token failed. Try signing in.');
                this.signIn(true);
            });
            if (result) {
                this.globals.graphLoaded = true;
                this.globals.actionsAllowed = true;
                return result.accessToken;
            }
            // Couldn't get a token
            this.authenticated = false;
            return '';
        });
    }
    // <GetUserSnippet>
    getUser() {
        var _a, _b, _c, _d, _e;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.authenticated) {
                return undefined;
            }
            const graphClient = _microsoft_microsoft_graph_client__WEBPACK_IMPORTED_MODULE_0__.Client.init({
                // Initialize the Graph client with an auth
                // provider that requests the token from the
                // auth service
                authProvider: (done) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                    const token = yield this.getAccessToken().catch((reason) => {
                        done(reason, null);
                    });
                    if (token) {
                        done(null, token);
                    }
                    else {
                        done('Could not get an access token', null);
                    }
                }),
            });
            // Get the user from Graph (GET /me)
            const graphUser = yield graphClient
                .api('/me')
                .select('displayName,mail,mailboxSettings,userPrincipalName')
                .get();
            const user = new _data_user__WEBPACK_IMPORTED_MODULE_2__.User();
            user.displayName = (_a = graphUser.displayName) !== null && _a !== void 0 ? _a : '';
            // Prefer the mail property, but fall back to userPrincipalName
            user.email = (_c = (_b = graphUser.mail) !== null && _b !== void 0 ? _b : graphUser.userPrincipalName) !== null && _c !== void 0 ? _c : '';
            user.timeZone = (_e = (_d = graphUser.mailboxSettings) === null || _d === void 0 ? void 0 : _d.timeZone) !== null && _e !== void 0 ? _e : 'UTC';
            // Use default avatar
            user.avatar = '/assets/no-profile-photo.png';
            return user;
        });
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_azure_msal_angular__WEBPACK_IMPORTED_MODULE_7__.MsalService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](src_app_services_message_service__WEBPACK_IMPORTED_MODULE_3__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](src_app_services_globals_service__WEBPACK_IMPORTED_MODULE_4__.GlobalsService)); };
AuthService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 3994:
/*!******************************************************!*\
  !*** ./src/app/interceptors/no-cache.interceptor.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoCacheInterceptor": () => (/* binding */ NoCacheInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);

class NoCacheInterceptor {
    constructor() { }
    intercept(request, next) {
        if (request.params.has('noCache')) {
            console.log('INTERCEPTED');
            const noCacheReq = request.clone({
                // eslint-disable-next-line @typescript-eslint/naming-convention
                setHeaders: { 'Cache-Control': 'no-cache' },
                params: request.params.delete('noCache'),
            });
            return next.handle(noCacheReq);
        }
        return next.handle(request);
    }
}
NoCacheInterceptor.ɵfac = function NoCacheInterceptor_Factory(t) { return new (t || NoCacheInterceptor)(); };
NoCacheInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NoCacheInterceptor, factory: NoCacheInterceptor.ɵfac });


/***/ }),

/***/ 211:
/*!*************************************!*\
  !*** ./src/app/loader/lc-loader.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LcLoader": () => (/* binding */ LcLoader)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 9165);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services_language_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/language.service */ 1155);



class LcLoader {
    constructor(language) {
        this.language = language;
    }
    getTranslation(lang) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable((observer) => {
            this.language.waitForInit().subscribe(() => {
                observer.next(this.language.passLCObj());
                observer.complete();
            });
        });
    }
}
LcLoader.ɵfac = function LcLoader_Factory(t) { return new (t || LcLoader)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_services_language_service__WEBPACK_IMPORTED_MODULE_0__.LanguageService)); };
LcLoader.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: LcLoader, factory: LcLoader.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 5692:
/*!************************************************************!*\
  !*** ./src/app/otherClasses/config-items-default.class.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "iconDefaultConfig": () => (/* binding */ iconDefaultConfig),
/* harmony export */   "ConfigData": () => (/* binding */ ConfigData)
/* harmony export */ });
class DeleteAttachmentsConfig {
    constructor() {
        this.model = {
            name: 'deleteAttachments',
            value: '',
            classAssignment: {
                '': 'bmAttachInclude',
                1: 'bmAttachExclude',
            },
            titleLC: {
                '': 'LC73172',
                1: 'LC73173',
            },
        };
    }
}
class OpenMailConfig {
    constructor() {
        this.model = {
            name: 'openMail',
            value: '',
            classAssignment: {
                '': 'bmDocOFF',
                1: 'bmDocON',
            },
            titleLC: {
                '': 'LC73169',
                1: 'LC73168',
            },
        };
    }
}
class CreateAddress {
    constructor() {
        this.model = {
            name: 'createAddress',
            value: '',
            classAssignment: {
                '': 'bmPlus',
                1: 'bmMinus',
            },
            titleLC: {
                '': 'LC73197',
                1: 'LC73197',
            },
        };
    }
}
const iconDefaultConfig = [
    new DeleteAttachmentsConfig(),
    new OpenMailConfig(),
    new CreateAddress(),
];
class ConfigData {
}


/***/ }),

/***/ 5738:
/*!************************************************************!*\
  !*** ./src/app/otherClasses/create-address-items.class.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CreateAddressItems)
/* harmony export */ });
class CreateAddressItems {
    constructor() {
        this.items = [
            {
                name: 'createAddressCompany',
                lc: 'LC73000',
            },
            {
                name: 'createAddressToCompany',
                lc: 'LC73001',
            },
            {
                name: 'createAddressPerson',
                lc: 'LC73003',
            },
        ];
    }
    addNewItem(name, lc) {
        this.items.push({
            name,
            lc,
        });
    }
}


/***/ }),

/***/ 3519:
/*!********************************************!*\
  !*** ./src/app/otherClasses/modal-item.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalItem": () => (/* binding */ ModalItem)
/* harmony export */ });
class ModalItem {
    constructor(component, data) {
        this.component = component;
        this.data = data;
    }
}


/***/ }),

/***/ 5566:
/*!******************************************!*\
  !*** ./src/app/pipes/add-spacer.pipe.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddSpacerPipe": () => (/* binding */ AddSpacerPipe)
/* harmony export */ });
/* harmony import */ var _types_address_order_display__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types/address-order.display */ 1325);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);


class AddSpacerPipe {
    transform(value, ...args) {
        console.log('PIPE!!!!!!!!!!!!!!!!');
        console.log(typeof value);
        return this.addSpacerToObject(value);
    }
    // Checks order of AddressOrder and adds -BLANK- placeholder to displayable object
    addSpacerToObject(obj) {
        const orderIndices = [];
        const objWithSpacers = [];
        for (const currentEntry of obj) {
            orderIndices.push(_types_address_order_display__WEBPACK_IMPORTED_MODULE_0__.order.indexOf(currentEntry.key));
        }
        let curEntryIndex = 0;
        let curSpacerIndex = 0;
        for (const curOrderIndex of orderIndices) {
            if (curSpacerIndex < _types_address_order_display__WEBPACK_IMPORTED_MODULE_0__.spacerIndices.length) {
                if (curOrderIndex > _types_address_order_display__WEBPACK_IMPORTED_MODULE_0__.spacerIndices[curSpacerIndex]) {
                    if (curEntryIndex > 0 &&
                        objWithSpacers[curEntryIndex - 1].key === '-BLANK-') {
                        // Skip Spacer
                    }
                    else {
                        objWithSpacers.push({
                            key: '-BLANK-',
                            value: '-BLANK-',
                        });
                    }
                    curSpacerIndex++;
                }
            }
            objWithSpacers.push(obj[curEntryIndex]);
            curEntryIndex++;
        }
        return objWithSpacers;
    }
}
AddSpacerPipe.ɵfac = function AddSpacerPipe_Factory(t) { return new (t || AddSpacerPipe)(); };
AddSpacerPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "addSpacer", type: AddSpacerPipe, pure: true });


/***/ }),

/***/ 9633:
/*!************************************************!*\
  !*** ./src/app/services/activities.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActivitiesService": () => (/* binding */ ActivitiesService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 9165);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _connection_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./connection.service */ 2377);
/* harmony import */ var _address_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./address.service */ 9688);
/* harmony import */ var _language_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./language.service */ 1155);






class ActivitiesService {
    constructor(connectionService, addressService, language) {
        this.connectionService = connectionService;
        this.addressService = addressService;
        this.language = language;
        this.indexSubscription = null;
        this.currentObserver = null;
        this.currentAddresses = [];
    }
    initActivities(addresses, index, observer) {
        console.log('INIT ACTIVITIES');
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
        console.log(addresses);
        console.log(addresses[index]);
        if (addresses.length > 0) {
            params = params.append('pointer', addresses[index].pointer);
            if (addresses[index].companyPointer !== undefined) {
                params = params.append('companypointer', addresses[index].companyPointer);
            }
            console.log(params);
            this.connectionService
                .getReqNoCache('activities', params, undefined, true)
                .subscribe({
                next: (resp) => {
                    console.log(resp);
                    console.log(resp.maxEntries);
                    resp.type = 'activities';
                    console.log(resp);
                    observer.next(resp);
                },
                error: (errHttp) => {
                    observer.error(errHttp);
                },
                complete: () => {
                    // Do nothing
                },
            });
        }
        this.connectionService
            .getReqNoCache('activityTypes', params, undefined, true)
            .subscribe({
            next: (resp) => {
                resp.type = 'types';
                observer.next(resp);
            },
            error: (errHttp) => {
                observer.error(errHttp);
            },
            complete: () => {
                // Do nothing
            },
        });
    }
    changeDefaultTypeSelection(newType) {
        console.log(newType);
        this.connectionService
            .postReq('activityTypes', 'displaydocumentstype=' + newType, false)
            .subscribe(() => {
            console.log(this.currentObserver);
            if (this.currentObserver) {
                console.log('init index change handler');
                this.initActivities(this.currentAddresses, 0, this.currentObserver);
            }
        });
    }
    destroy() {
        if (this.indexSubscription != null) {
            this.indexSubscription.unsubscribe();
        }
    }
    init() {
        return new rxjs__WEBPACK_IMPORTED_MODULE_4__.Observable((observer) => {
            this.currentAddresses = [];
            this.setObserver(observer);
            this.addressService.waitForAddresses().subscribe({
                next: (addresses) => {
                    this.currentAddresses = addresses;
                    this.indexChangeHandler(addresses, observer);
                },
                error: (errHttp) => {
                    this.currentAddresses = [];
                    this.indexChangeHandler([], observer);
                    console.log('Activities failure!');
                    console.log(errHttp);
                },
                complete: () => {
                    // Nothing
                },
            });
        });
    }
    setObserver(observer) {
        if (!this.currentObserver) {
            this.currentObserver = observer;
        }
    }
    indexChangeHandler(addresses, observer) {
        if (this.indexSubscription) {
            this.indexSubscription.unsubscribe();
            this.addressService.addressIndex = 0;
        }
        this.indexSubscription = this.addressService
            .addToIndexListenerList()
            .subscribe((newIndex) => {
            this.initActivities(addresses, newIndex, observer);
        });
    }
}
ActivitiesService.ɵfac = function ActivitiesService_Factory(t) { return new (t || ActivitiesService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_connection_service__WEBPACK_IMPORTED_MODULE_0__.ConnectionService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_address_service__WEBPACK_IMPORTED_MODULE_1__.AddressService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_language_service__WEBPACK_IMPORTED_MODULE_2__.LanguageService)); };
ActivitiesService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: ActivitiesService, factory: ActivitiesService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 9688:
/*!*********************************************!*\
  !*** ./src/app/services/address.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddressService": () => (/* binding */ AddressService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 9165);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _connection_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./connection.service */ 2377);
/* harmony import */ var _waitList_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./waitList.service */ 7076);
/* harmony import */ var _globals_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./globals.service */ 660);
/* harmony import */ var _init_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./init.service */ 4705);
/* harmony import */ var _create_address_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./create-address.service */ 2654);








class AddressService {
    constructor(connectionService, waitListService, globals, initService, createService) {
        this.connectionService = connectionService;
        this.waitListService = waitListService;
        this.globals = globals;
        this.initService = initService;
        this.createService = createService;
        this.fetchInProgress = false;
        this.addressObjectExtended = false;
        this.indexToShow = 0;
        this.addressResponseObject = {};
        this.addresses = [];
    }
    waitForAddresses() {
        return new rxjs__WEBPACK_IMPORTED_MODULE_5__.Observable((observer) => {
            console.log(observer);
            if (this.addresses.length > 0) {
                console.log('Adresse vorhanden');
                observer.next(this.addresses);
                observer.complete();
            }
            else {
                console.log('Warte auf Adresse');
                this.waitListService.addToWaitList('address', observer);
            }
        });
    }
    processAddresses() {
        return new rxjs__WEBPACK_IMPORTED_MODULE_5__.Observable((observer) => {
            if (this.addresses.length < 1) {
                if (!this.fetchInProgress) {
                    this.fetchInProgress = true;
                    this.processData().subscribe({
                        next: (body) => {
                            body.forEach((element) => {
                                //this.extendProperties(element);
                                let curAddr = element;
                                curAddr = this.modifyAdditionalData(curAddr);
                                this.addresses.push(curAddr);
                                console.log('ProcessAddresses');
                            });
                            if ((body.length < 1 && !this.createService.isOpen) ||
                                (body.length >= 1 && this.createService.isOpen)) {
                                this.createService.toggleOpen();
                            }
                            observer.next(this.addresses);
                            observer.complete();
                        },
                        error: () => {
                            this.processWaitingList();
                            this.fetchInProgress = false;
                        },
                        complete: () => {
                            this.processWaitingList();
                            this.fetchInProgress = false;
                        },
                    });
                }
                else {
                    this.waitListService.addToWaitList('address', observer);
                }
            }
            else {
                observer.next(this.addresses);
                observer.complete();
            }
        });
    }
    set addressIndex(newIndex) {
        this.indexToShow = newIndex;
        this.notifyIndexSubscriber();
    }
    get addressIndex() {
        return this.indexToShow;
    }
    get toHideList() {
        return this.addressResponseObject.hide;
    }
    get currentPointer() {
        return this.addresses[this.addressIndex].pointer;
    }
    get currentAddressData() {
        return this.addresses[this.addressIndex];
    }
    addToIndexListenerList() {
        return new rxjs__WEBPACK_IMPORTED_MODULE_5__.Observable((observer) => {
            //this.curIndexSubscriberList.push(observer);
            this.waitListService.addToWaitList('index', observer);
        });
    }
    resetAddr() {
        this.addresses = [];
    }
    addressChange() {
        for (const sub of this.waitListService.accessWaitList('addressChange')) {
            sub.next(true);
        }
    }
    waitForAddressChange() {
        return new rxjs__WEBPACK_IMPORTED_MODULE_5__.Observable((observer) => {
            this.waitListService.addToWaitList('addressChange', observer);
        });
    }
    get hasAddress() {
        if (this.addresses.length > 0) {
            return true;
        }
        else {
            return false;
        }
    }
    extendProperties(element) {
        if (!this.addressObjectExtended) {
            this.addressResponseObject.hide.push('isCompany');
            this.addressObjectExtended = true;
        }
        if (element.pointer.toLowerCase().includes('company')) {
            element.isCompany = true;
        }
        else {
            element.isCompany = false;
        }
    }
    modifyAdditionalData(address) {
        const ignore = this.addressResponseObject.ignoreInAddress;
        if (ignore) {
            ignore.forEach((element) => {
                if (address.additional) {
                    delete address.additional[element];
                }
            });
        }
        console.log(address);
        return address;
    }
    notifyIndexSubscriber() {
        this.waitListService.accessWaitList('index').forEach((observer) => {
            observer.next(this.addressIndex);
        });
    }
    processWaitingList() {
        console.log('processing waitlist.....');
        this.waitListService.accessWaitList('address').forEach((observer) => {
            console.log(observer);
            if (this.addresses.length > 0) {
                observer.next(this.addresses);
                observer.complete();
            }
            else {
                console.log(' ERROR ');
                observer.error('No address found.');
            }
        });
        this.waitListService.clearWaitList('address');
    }
    processData() {
        return new rxjs__WEBPACK_IMPORTED_MODULE_5__.Observable((observer) => {
            this.connectionService.processPath().subscribe(() => {
                // Path Ready
                //console.log(resp);
                console.log('CURMAIL <<<<<<<<<<<<<<<<<<<<<<<<<<');
                console.log(this.globals.curMailAddr);
                if (!this.globals.curMailUnid || this.globals.curMailUnid === '') {
                    this.waitListService.addToWaitListFunc('mailAddr', observer, this.addressHandler.bind(this));
                }
                else {
                    this.addressHandler(observer);
                }
            });
        });
    }
    /*private addressHandler(observer: Subscriber<{ [key: string]: any }>) {
      let params = new HttpParams();
      params = params.set('unid', this.globals.curMailUnid);
      this.connectionService.processAddress(params).subscribe((resp) => {
        // Path Ready
        this.addressResponseObject = resp as AddressResponse;
        observer.next(resp.data);
        observer.complete();
        this.notifyIndexSubscriber();
  
        // App is init / Show App
        this.initService.initComplete = true;
      });
    }*/
    addressHandler(observer) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpParams();
        console.log('ADDRESS HANDLER >>>>>>>>>>>>>>>>>>>>>>>>>>');
        params = params.set('mail', this.globals.curMailAddr);
        this.connectionService.processAddress(params).subscribe((resp) => {
            // Path Ready
            this.addressResponseObject = resp;
            observer.next(resp.data);
            observer.complete();
            this.notifyIndexSubscriber();
            // App is init / Show App
            this.initService.initComplete = true;
        });
    }
    getUrlOrigin(curUrl) {
        const url = new URL(curUrl);
        return url.origin;
    }
}
AddressService.ɵfac = function AddressService_Factory(t) { return new (t || AddressService)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_connection_service__WEBPACK_IMPORTED_MODULE_0__.ConnectionService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_waitList_service__WEBPACK_IMPORTED_MODULE_1__.WaitListService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_globals_service__WEBPACK_IMPORTED_MODULE_2__.GlobalsService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_init_service__WEBPACK_IMPORTED_MODULE_3__.InitService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_create_address_service__WEBPACK_IMPORTED_MODULE_4__.CreateAddressService)); };
AddressService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({ token: AddressService, factory: AddressService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 4148:
/*!********************************************!*\
  !*** ./src/app/services/config.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigService": () => (/* binding */ ConfigService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 6215);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _globals_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./globals.service */ 660);



class ConfigService {
    constructor(globals) {
        this.globals = globals;
        this.currentSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
    }
    checkForWebInt() {
        const curWebInt = localStorage.getItem('webInt');
        if (localStorage.getItem('webInt') !== null) {
            this.currentSubject.next(curWebInt);
        }
    }
    processWebInt() {
        this.currentSubject.next(this.globals.webInt);
    }
    get subject() {
        return this.currentSubject;
    }
}
ConfigService.ɵfac = function ConfigService_Factory(t) { return new (t || ConfigService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_globals_service__WEBPACK_IMPORTED_MODULE_0__.GlobalsService)); };
ConfigService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ConfigService, factory: ConfigService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2377:
/*!************************************************!*\
  !*** ./src/app/services/connection.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConnectionService": () => (/* binding */ ConnectionService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 9165);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 9412);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _globals_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./globals.service */ 660);
/* harmony import */ var _waitList_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./waitList.service */ 7076);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ 2238);
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./message.service */ 2684);
/* harmony import */ var _loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loader.service */ 8555);
/* harmony import */ var _graph_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../graph/services/auth.service */ 1831);










const LOGINPATH = 'loginBM.xsp';
const MAX_RETRIES = 3;
const MS_UNTIL_RETRY = 300;
const KEEPALIVE_TIMER_MS = 55000;
class ConnectionService {
    constructor(globals, waitList, modal, messageService, loaderService, authService) {
        this.globals = globals;
        this.waitList = waitList;
        this.modal = modal;
        this.messageService = messageService;
        this.loaderService = loaderService;
        this.authService = authService;
        this.pathFetchInProgress = false;
        this.loggedIn = false;
        this.loggingOut = false;
        this.listenerSet = false;
        this.options = {};
        this.messageListener = null;
        this.loginWindow = null;
        this.pathInfo = null;
        if (!this.globals.graphRequired) {
            this.waitForGraphRequired().subscribe(() => {
                this.openGraphLogin();
            });
        }
        else {
            this.openGraphLogin();
        }
    }
    // Opens login window and inits listener for login
    connect() {
        return new rxjs__WEBPACK_IMPORTED_MODULE_5__.Observable((observer) => {
            this.createListenerLogin(observer);
            this.loginWindow = this.popupWindow(this.globals.webInt + LOGINPATH, 'login', 440, 190);
            this.globals.loginOpen = true;
            if (!this.loginWindow ||
                this.loginWindow.closed ||
                typeof this.loginWindow.closed == 'undefined') {
                if (!this.loggingOut) {
                    this.messageService.showError(this.globals.languageConfLocal.popupBlocked, undefined, true);
                }
            }
        });
    }
    objectToHttpParams(objToTransform) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpParams();
        for (const key in objToTransform) {
            if (Object.prototype.hasOwnProperty.call(objToTransform, key)) {
                const value = objToTransform[key];
                if (value) {
                    params = params.set(key, value);
                }
            }
        }
        return params;
    }
    reload() {
        const curURL = window.location.href;
        window.location.reload();
        /*if (curURL.endsWith('/')) {
          window.location.href = curURL.substr(0, curURL.length - 1);
        } else {
          window.location.reload();
        }*/
    }
    // For first modal, get newest response
    // Every additional modal uses a cached version
    getReqModal(pathComponent, params) {
        if (!this.globals.modalCacheFlag) {
            return this.getReqNoCache(pathComponent, params);
        }
        else {
            if (params == null) {
                params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpParams();
            }
            return this.getReq(pathComponent, params);
        }
    }
    getReqNoCache(pathComponent, params, responseIsJSON, avoidLoader) {
        console.log('IN REQUEST CACHE');
        console.log(responseIsJSON);
        if (params == null) {
            params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpParams();
        }
        params = params.append('noCache', 'true');
        return this.getReq(pathComponent, params, responseIsJSON, avoidLoader);
    }
    getReq(pathComponent, params, responseIsJSON, avoidLoader) {
        console.log('>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<');
        console.log(pathComponent);
        console.log(params);
        let options;
        if (responseIsJSON != null && responseIsJSON === false) {
            options = this.globals.changeOwnOptions({
                responseType: 'text',
            });
        }
        else {
            options = undefined;
        }
        if (!pathComponent.includes('keepAlive') && !avoidLoader) {
            this.activateLoader();
        }
        if (params == null) {
            params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpParams();
        }
        return new rxjs__WEBPACK_IMPORTED_MODULE_5__.Observable((observer) => {
            console.log('IN REQUEST OBS');
            console.log(this.pathInfo);
            this.getReqHandler(pathComponent, params, observer, 0, options, responseIsJSON);
        });
    }
    getReqHandler(pathComponent, params, observer, currentTry, options, responseIsJSON) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            console.log('IN REQUEST PATH');
            if (this.pathInfo != null) {
                let url = this.globals.webInt +
                    this.globals.apiOverviewPath +
                    this.pathInfo[pathComponent].relativePath;
                let obj;
                if (options) {
                    obj = this.globals.changeOwnOptions(options);
                }
                else {
                    obj = this.globals.objectWithParams(params);
                }
                console.log(pathComponent);
                console.log(obj);
                console.log('PARAMS: ');
                console.log(params.toString());
                url += '?' + params.toString();
                yield fetch(url, obj)
                    .then((resp) => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
                    console.log('THEN');
                    console.log(this.globals.options);
                    let respData;
                    if (responseIsJSON === undefined ||
                        responseIsJSON === null ||
                        responseIsJSON) {
                        respData = yield resp.json();
                    }
                    else {
                        respData = yield resp.text();
                    }
                    console.log(respData);
                    observer.next(respData);
                    observer.complete();
                    this.loaderService.deactivateLoader();
                }))
                    .catch((error) => {
                    console.log('CATCH');
                    console.log('HTTP Error', error);
                    observer.error();
                    this.loaderService.deactivateLoader();
                });
                console.log('Req URL:' + url);
            }
            else {
                // If connection fails, retry up to MAX_RETRIES times - then send error
                console.log('RETRY');
                currentTry++;
                if (currentTry === MAX_RETRIES) {
                    if (window.localStorage.getItem('webInt') === null) {
                        // Ignore
                    }
                    else {
                        this.messageService.setConnectionTimeout(this.globals.languageConfLocal.cantConnect);
                    }
                    observer.error();
                }
                else {
                    setTimeout(() => {
                        this.getReqHandler(pathComponent, params, observer, currentTry);
                    }, MS_UNTIL_RETRY);
                }
            }
        });
    }
    postReq(pathComponent, body, responseIsJSON = true, options, ignoreLoader) {
        console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx');
        console.log(pathComponent);
        console.log(body);
        if (ignoreLoader === undefined || !ignoreLoader) {
            this.activateLoader();
        }
        if (body instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpParams) {
            body = body.toString();
        }
        if (!responseIsJSON) {
            if (options) {
                options.method = 'POST';
                options.responseType = 'text';
                options.body = body;
                options = this.globals.changeOwnOptions(options);
            }
            else {
                options = this.globals.changeOwnOptions({
                    responseType: 'text',
                    method: 'POST',
                    body,
                });
            }
        }
        else if (!options) {
            options = this.globals.changeOwnOptions({
                method: 'POST',
                body,
            });
        }
        if (options) {
            options.method = 'POST';
            options.body = body;
            options = this.globals.changeOwnOptions(options);
        }
        return new rxjs__WEBPACK_IMPORTED_MODULE_5__.Observable((observer) => {
            if (this.pathInfo != null) {
                const url = this.globals.webInt +
                    this.globals.apiOverviewPath +
                    this.pathInfo[pathComponent].relativePath;
                console.log('BODY: ');
                console.log(body.toString());
                console.log(options);
                // TODO Problem beim Dokumentieren
                (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.from)(fetch(url, options)).subscribe({
                    next: (resp) => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
                        console.log(resp);
                        console.log('notify observer');
                        if (resp.status === 200) {
                            let respData;
                            if (responseIsJSON === undefined ||
                                responseIsJSON === null ||
                                responseIsJSON) {
                                respData = yield resp.json();
                            }
                            else {
                                respData = yield resp.text();
                            }
                            console.log(respData);
                            observer.next(respData);
                            this.loaderService.deactivateLoader();
                        }
                        else {
                            console.log('POST FAILED IN NEXT');
                            console.log('HTTP Error', resp);
                            observer.error(resp);
                            this.loaderService.deactivateLoader();
                        }
                    }),
                    error: (errHttp) => {
                        console.log('POST FAILED IN ERROR');
                        console.log('HTTP Error', errHttp);
                        observer.error(errHttp);
                        this.loaderService.deactivateLoader();
                    },
                    complete: () => {
                        // Nothing
                    },
                });
                console.log('Req URL:' + url);
            }
        });
    }
    postSoap(url, data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.activateLoader();
            const response = yield fetch(url, {
                method: 'POST',
                mode: 'cors',
                cache: 'no-cache',
                credentials: 'include',
                headers: {
                    'Content-Type': 'text/xml',
                    SOAPAction: 'basicInvoke',
                },
                redirect: 'follow',
                referrerPolicy: 'no-referrer',
                body: data,
            });
            this.loaderService.deactivateLoader();
            return response;
        });
    }
    // Gets path info from cache or inits request, if cache empty
    processPath() {
        return new rxjs__WEBPACK_IMPORTED_MODULE_5__.Observable((observer) => {
            if (!this.pathFetchInProgress) {
                this.pathFetchInProgress = true;
                const http$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.from)(fetch(this.globals.webInt + this.globals.apiOverviewPath, this.globals.options));
                if (this.pathInfo != null) {
                    console.log('>>>>> Path != null');
                    this.processPathWaitingList();
                    this.pathFetchInProgress = false;
                    observer.next(this.pathInfo);
                    observer.complete();
                }
                else {
                    console.log('>>>>>> login');
                    this.loginConnect(http$, observer);
                }
            }
            else {
                this.waitList.addToWaitList('path', observer);
            }
        });
    }
    /*public processAddress(params: HttpParams) {
      return new Observable<{ [key: string]: any }>((observer) => {
        if (this.pathInfo != null) {
          const addressUrl =
            this.globals.webInt +
            this.globals.apiOverviewPath +
            this.pathInfo.addresses.relativePath;
  
          const http$ = this.http.get<any>(
            addressUrl,
            this.globals.objectWithParams(params)
          );
  
          this.processAddressHandler(http$, observer);
        }
      });
    }*/
    processAddress(params) {
        params = params.set('filterImg', 'true');
        return new rxjs__WEBPACK_IMPORTED_MODULE_5__.Observable((observer) => {
            if (this.pathInfo != null) {
                this.postReq('addresses', params, true).subscribe({
                    next: (resp) => {
                        console.log('ProcessAddress');
                        console.log(resp);
                        observer.next(resp);
                        observer.complete();
                    },
                    error: (errHttp) => {
                        console.log('HTTP Error', errHttp);
                    },
                    complete: () => {
                        // Nothing
                    },
                });
            }
        });
    }
    waitForLC() {
        return new rxjs__WEBPACK_IMPORTED_MODULE_5__.Observable((observer) => {
            if (this.pathInfo == null) {
                console.log('>>>>> Path null wait for lc');
                this.processPath().subscribe(() => {
                    console.log('>>>>> Path get');
                    this.processLCHandler(observer);
                });
            }
            else {
                this.processLCHandler(observer);
            }
        });
    }
    processLCHandler(observer) {
        // For typecheck - will only be called when path is set.
        if (this.pathInfo != null) {
            if (Object.keys(this.globals.languageConf).length > 0) {
                observer.next(true);
                observer.complete();
            }
            else {
                const http$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.from)(fetch(this.globals.webInt +
                    this.globals.apiOverviewPath +
                    this.pathInfo.translation.relativePath +
                    '/businessmail', this.globals.options));
                http$.subscribe({
                    next: (resp) => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
                        console.log('LC LC LC LC LC LC');
                        console.log(resp);
                        if (resp.status !== 200) {
                            observer.error(yield resp.text());
                        }
                        else {
                            this.globals.languageConf = yield resp.json();
                            console.log(resp.body);
                            observer.next(true);
                            observer.complete();
                        }
                    }),
                    error: (errHttp) => {
                        console.log('HTTP Error', errHttp);
                    },
                    complete: () => {
                        // Nothing
                    },
                });
            }
        }
    }
    checkWebInt(inputVal) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            return yield fetch(inputVal + LOGINPATH, {
                method: 'HEAD',
            })
                .then(() => {
                if (this.globals.webInt) {
                    this.loggingOut = true;
                    this.logout();
                }
                window.localStorage.setItem('webInt', inputVal);
                this.globals.webInt = inputVal;
                return true;
            })
                .catch(() => {
                this.messageService.showError(this.globals.languageConfLocal.webIntCertError + ' ' + inputVal, undefined, true);
                return false;
            });
        });
    }
    logoutGraph() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            yield this.authService.signOutPopup();
        });
    }
    logout() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.from)(fetch(this.globals.webInt.substr(0, this.globals.webInt.length - 1) +
                '?logout', this.globals.options)).subscribe({
                next: () => {
                    console.log('LOGGING OUT');
                    console.log(this.loggingOut);
                    this.reload();
                },
                error: (err) => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
                    console.log('ERROR LOGGING OUT');
                    console.log(err);
                    const resp = yield fetch(this.globals.webInt + 'restBM.xsp/verserest/', {
                        method: 'get',
                        credentials: 'include',
                        cache: 'no-cache',
                        mode: 'cors',
                    });
                    if (!(resp.status != null && resp.status === 401)) {
                        if (resp.type != null && resp.type === 'cors') {
                            this.reload();
                        }
                        this.messageService.showError(this.globals.languageConfLocal.webIntLogoutFailed, undefined, true);
                    }
                    else {
                        this.reload();
                    }
                }),
            });
        });
    }
    waitForWebIntModal() {
        return new rxjs__WEBPACK_IMPORTED_MODULE_5__.Observable((observer) => {
            if (this.webIntModalOpen) {
                observer.next(this.webIntModalOpen);
                observer.complete();
            }
            else {
                this.waitList.addToWaitList('webIntModal', observer);
            }
        });
    }
    getUserName() {
        return new rxjs__WEBPACK_IMPORTED_MODULE_5__.Observable((observer) => {
            this.getReqNoCache('user', null).subscribe((resp) => {
                observer.next(resp);
                observer.complete();
            });
        });
    }
    waitForGraphRequired() {
        return new rxjs__WEBPACK_IMPORTED_MODULE_5__.Observable((observer) => {
            this.waitList.addToWaitList('graphRequired', observer);
        });
    }
    get isLoggedIn() {
        return this.loggedIn;
    }
    set webIntModalOpenRef(func) {
        this.webIntModalOpen = func;
        for (const sub of this.waitList.accessWaitList('webIntModal')) {
            sub.next(func);
            sub.complete();
        }
    }
    openGraphLogin() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.globals.graphLoaded) {
                return this.authService.signIn();
            }
            return null;
        });
    }
    activateLoader() {
        if (this.globals.webInt && this.globals.webInt !== '') {
            this.loaderService.activateLoader(Boolean(this.modal.openDialogs.length).valueOf());
        }
    }
    // Avoids caching to check if user is logged in
    checkIfLoggedIn(http$, observer) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            if (this.pathInfo != null) {
                let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpParams();
                params = params.set('noCache', 'true');
                console.log('CHECK IF LOGGED IN ');
                this.getReqNoCache('keepAlive', null, false).subscribe({
                    next: (resp) => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
                        console.log('Keep Alive Resp');
                        console.log(resp);
                        if (resp == null || resp !== 'OK') {
                            console.log('check if logged in error');
                            this.connect().subscribe(this.connectHandler(http$, observer));
                        }
                        else {
                            this.processPathWaitingList();
                            this.pathFetchInProgress = false;
                            observer.next(resp);
                            observer.complete();
                        }
                    }),
                    error: (error) => {
                        console.log('check if logged in error');
                        this.connect().subscribe(this.connectHandler(http$, observer));
                    },
                });
            }
        });
    }
    processPathWaitingList() {
        console.log('------ Process wait list');
        this.waitList.accessWaitList('path').forEach((observer) => {
            if (this.pathInfo != null) {
                console.log('------ != Null');
                observer.next(this.pathInfo);
                observer.complete();
            }
            else {
                console.log('------ != Error');
                observer.error();
            }
        });
    }
    /*private processAddressHandler(
      http$: Observable<any>,
      observer: Subscriber<{ [key: string]: any }>
    ) {
      http$.subscribe({
        next: (resp: any) => {
          console.log(resp.body);
          observer.next(resp.body);
          observer.complete();
        },
        error: (errHttp: any) => {
          console.log('HTTP Error', errHttp);
        },
        complete: () => {
          // Nothing
        },
      });
    }*/
    // Tries to get path info, caches it and passes it to observer, if successful.
    loginConnect(http$, observer) {
        if (!this.globals.webInt) {
        }
        else {
            this.loginConnectHandler(http$, observer);
        }
    }
    loginConnectHandler(http$, observer) {
        http$.subscribe({
            next: (resp) => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
                if (resp.status !== 200) {
                    this.loginConnectError(resp, http$, observer);
                }
                else {
                    // Already logged in, get path info and send to subscribers
                    this.pathInfo = yield resp.clone().json();
                    this.loggedIn = true;
                    console.log('ALREADY LOGGED IN!!!!');
                    console.log(this.pathInfo);
                    this.keepAlive();
                    this.checkIfLoggedIn(http$, observer);
                }
            }),
            error: (errHttp) => {
                this.loginConnectError(errHttp, http$, observer);
            },
            complete: () => {
                // Nothing
            },
        });
    }
    loginConnectError(errHttp, http$, observer) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            console.log('!!!!!!! NOT LOGGED IN');
            console.log(errHttp);
            this.loggedIn = false;
            // User not connected, try again after login
            console.log('HTTP Error', errHttp);
            if (errHttp.status === 401 || errHttp.status === 200) {
                this.connect().subscribe(this.connectHandler(http$, observer));
            }
            else {
                this.processPathWaitingList();
                this.pathFetchInProgress = false;
            }
        });
    }
    // Refresh session
    keepAlive() {
        if (this.keepAliveInterval != null) {
            clearInterval(this.keepAliveInterval);
        }
        this.keepAliveInterval = setInterval(() => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const sub = this.getReqNoCache('keepAlive', null, false).subscribe(() => {
                sub.unsubscribe();
            });
        }), KEEPALIVE_TIMER_MS);
    }
    connectHandler(http$, observer) {
        return {
            next: () => {
                console.log('connectHandler next');
                // Do nothing
            },
            error: (err) => {
                console.log('connectHandler error');
                // TODO: Error Handling failed to connect
                //observer.error();
            },
            complete: () => {
                console.log('connectHandler complete');
                // Resend request after login to get path info
                const newHttp = (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.from)(fetch(this.globals.webInt + this.globals.apiOverviewPath, this.globals.options));
                this.loginConnect(newHttp, observer);
            },
        };
    }
    popupWindow(url, title, w, h) {
        if (!this.loggingOut) {
            const left = screen.width / 2 - w / 2;
            const top = screen.height / 2 - h / 2;
            return window.open(url, title, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=' +
                w +
                ', height=' +
                h +
                ', top=' +
                top +
                ', left=' +
                left);
        }
        return null;
    }
    // Notifies subscribers of connect() if login is successful
    createListenerLogin(observer) {
        if (!this.listenerSet) {
            this.loaderService.deactivateLoaderAfterTimeout();
            window.addEventListener('message', (this.messageListener = (event) => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
                console.log(event);
                if (event.origin !== this.globals.origin) {
                    return;
                }
                else {
                    if (event.data === 'OK') {
                        console.log('Event Data OK');
                        if (this.loginWindow != null) {
                            this.loginWindow.close();
                        }
                        window.removeEventListener('message', this.messageListener, false);
                        this.loaderService.activateLoader(false);
                        observer.next('OK');
                        observer.complete();
                        this.globals.loginOpen = false;
                        for (const sub of this.waitList.accessWaitList('login')) {
                            sub.next('OK');
                            sub.next('complete');
                        }
                    }
                    else {
                        if (event.data === 'Close') {
                            this.waitList.addToWaitList('login', observer);
                            this.loaderService.deactivateLoader();
                            this.globals.loginOpen = false;
                        }
                        console.log(event.data);
                        //observer.error('Window closed');
                    }
                }
            })), false);
            this.listenerSet = true;
        }
    }
}
ConnectionService.ɵfac = function ConnectionService_Factory(t) { return new (t || ConnectionService)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_globals_service__WEBPACK_IMPORTED_MODULE_0__.GlobalsService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_waitList_service__WEBPACK_IMPORTED_MODULE_1__.WaitListService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_message_service__WEBPACK_IMPORTED_MODULE_2__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_loader_service__WEBPACK_IMPORTED_MODULE_3__.LoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_graph_services_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService)); };
ConnectionService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({ token: ConnectionService, factory: ConnectionService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 7261:
/*!******************************************************************!*\
  !*** ./src/app/services/connectors/connector-factory.service.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConnectorFactory": () => (/* binding */ ConnectorFactory)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 9165);
/* harmony import */ var _connector_owa_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./connector-owa.service */ 8857);
/* harmony import */ var _connector_verse_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./connector-verse.service */ 8955);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _globals_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../globals.service */ 660);
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../message.service */ 2684);
/* harmony import */ var src_app_graph_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/graph/services/auth.service */ 1831);
/* harmony import */ var _waitList_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../waitList.service */ 7076);









class ConnectorFactory {
    constructor(globals, message, auth, waitlist) {
        this.globals = globals;
        this.message = message;
        this.auth = auth;
        this.waitlist = waitlist;
    }
    // Checks which app accesses BM
    checkForApp() {
        console.log('FACTORY');
        return new rxjs__WEBPACK_IMPORTED_MODULE_6__.Observable((observer) => {
            try {
                Office.onReady(() => {
                    console.log('FACTORY OWA');
                    observer.next(new _connector_owa_service__WEBPACK_IMPORTED_MODULE_0__.ConnectorOWAService(this.globals, this.message, this.auth, this.waitlist));
                    observer.complete();
                });
            }
            catch (e) {
                window.addEventListener('message', (event) => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
                    if (event.data.verseApiType ===
                        'com.ibm.verse.ping.application.loaded') {
                        const loadedMessage = {
                            verseApiType: 'com.ibm.verse.application.loaded',
                        };
                        if (event.source != null &&
                            !(event.source instanceof MessagePort) &&
                            !(event.source instanceof ServiceWorker)) {
                            event.source.postMessage(loadedMessage, event.origin);
                        }
                    }
                    if (event.data.verseApiType === 'com.ibm.verse.action.clicked') {
                        const verse = new _connector_verse_service__WEBPACK_IMPORTED_MODULE_1__.ConnectorVerseService(this.globals, this.message);
                        verse.data = event.data.verseApiData;
                        observer.next(verse);
                        observer.complete();
                    }
                }), false);
            }
        });
    }
}
ConnectorFactory.ɵfac = function ConnectorFactory_Factory(t) { return new (t || ConnectorFactory)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_globals_service__WEBPACK_IMPORTED_MODULE_2__.GlobalsService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_message_service__WEBPACK_IMPORTED_MODULE_3__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](src_app_graph_services_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_waitList_service__WEBPACK_IMPORTED_MODULE_5__.WaitListService)); };
ConnectorFactory.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({ token: ConnectorFactory, factory: ConnectorFactory.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8857:
/*!**************************************************************!*\
  !*** ./src/app/services/connectors/connector-owa.service.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConnectorOWAService": () => (/* binding */ ConnectorOWAService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 9165);
/* harmony import */ var _connector_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./connector.service */ 3529);
/* harmony import */ var _microsoft_microsoft_graph_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/microsoft-graph-client */ 8411);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _globals_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../globals.service */ 660);
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../message.service */ 2684);
/* harmony import */ var src_app_graph_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/graph/services/auth.service */ 1831);
/* harmony import */ var _waitList_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../waitList.service */ 7076);









class ConnectorOWAService extends _connector_service__WEBPACK_IMPORTED_MODULE_0__.ConnectorService {
    constructor(globals, messageService, authService, waitList) {
        super(globals);
        this.messageService = messageService;
        this.authService = authService;
        this.waitList = waitList;
        this.globals.curConnectorType = 'Owa';
        this.globals.graphRequired = true;
        if (authService.authenticated) {
            this.globals.graphLoaded = true;
            this.globals.curConnector = this;
            this.initGraph();
        }
        else {
            this.waitForGraph().subscribe(() => {
                this.initGraph();
                this.globals.curConnector = this;
            });
        }
        Office.context.mailbox.addHandlerAsync(Office.EventType.ItemChanged, this.itemChangeHandler.bind(this));
    }
    waitForCSS() {
        return new rxjs__WEBPACK_IMPORTED_MODULE_6__.Observable((observer) => {
            observer.complete();
        });
    }
    getData() {
        console.log('--------------------');
        console.log(this.appData);
        return this.initGlobalValues();
    }
    checkMailType() {
        var _a;
        console.log('MAILTYPE');
        console.log((_a = Office.context.mailbox.item) === null || _a === void 0 ? void 0 : _a.itemType);
    }
    set data(newVal) {
        this.appData = newVal;
        this.initGlobalValues();
    }
    set alreadyDocumented(val) {
        if (val.ticketAlreadyDoc) {
            this.postData.ticketAlreadyDoc = val.ticketAlreadyDoc;
        }
        if (val.officeAlreadyDoc) {
            this.postData.officeAlreadyDoc = val.officeAlreadyDoc;
        }
        this.setOpenExtension(this.postData.graphMailID, this.postData.ticketAlreadyDoc, this.postData.officeAlreadyDoc);
    }
    get isMailAlreadyDoc() {
        if (this.postData.ticketAlreadyDoc || this.postData.officeAlreadyDoc) {
            return true;
        }
        else {
            return false;
        }
    }
    get curPostData() {
        return this.postData;
    }
    getPostData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            if (Office.context.mailbox.item) {
                const type = Office.CoercionType.Text;
                console.log('?');
                console.log(Office.context.mailbox.item);
                console.log(Office.context.mailbox.item.body);
                console.log(Office.context.mailbox.item.body.getTypeAsync);
                if (Office.context.mailbox.item) {
                    Office.context.mailbox.item.body.getAsync(type, (body) => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
                        if (body.status === Office.AsyncResultStatus.Failed) {
                            this.messageService.showError(body.error.message, body.error.name, true);
                        }
                        else {
                            this.postData = {
                                to: this.appData.to,
                                from: this.appData.from,
                                cc: this.appData.cc,
                                subject: this.appData.subject,
                                sender: this.appData.sender,
                                contentType: type,
                                body: body.value,
                                date: new Date(this.appData.dateTimeModified).getTime(),
                                messageID: this.appData.internetMessageId,
                                preview: '',
                                isIncoming: true,
                                attachments: [],
                                officeAlreadyDoc: false,
                                ticketAlreadyDoc: false,
                                graphMailID: '',
                            };
                            if (this.globals.graphLoaded) {
                                const res = yield this.getMimeMessage();
                                console.log('ME DATA -------------------------------------------------');
                                this.setAttachments(res.id);
                            }
                            else {
                                this.waitForGraph().subscribe(() => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
                                    const res = yield this.getMimeMessage();
                                    console.log('ME DATA -------------------------------------------------');
                                    this.setAttachments(res.id);
                                }));
                            }
                            console.log(this.postData);
                        }
                    }));
                }
            }
            return true;
        });
    }
    adjustToastPosition() {
        // Nothing to adjust
    }
    itemChangeHandler() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            window.location.reload();
        });
    }
    checkDocumentedFlag(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const res = yield this.graphClient
                .api(`/me/messages/${id}/extensions/GI8.BM`)
                .responseType(_microsoft_microsoft_graph_client__WEBPACK_IMPORTED_MODULE_1__.ResponseType.RAW)
                .get()
                .then((resp) => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
                if (resp.status === 404) {
                    this.setOpenExtension(id);
                }
                else if (resp.status === 200) {
                    resp = yield resp.json();
                    console.log(resp);
                    this.postData.officeAlreadyDoc = resp.officeAlreadyDoc;
                    this.postData.ticketAlreadyDoc = resp.ticketAlreadyDoc;
                }
                else {
                    resp = yield resp.json();
                    this.messageService.showError(resp.error.message +
                        ' ' +
                        this.globals.languageConfLocal.graphRelog, 'GRAPH ERROR', true);
                }
            }));
        });
    }
    setOpenExtension(id, ticketIsDoc = false, officeIsDoc = false) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            console.log('init extension');
            const extension = {
                '@odata.type': 'microsoft.graph.openTypeExtension',
                extensionName: 'GI8.BM',
                ticketAlreadyDoc: ticketIsDoc,
                officeAlreadyDoc: officeIsDoc,
            };
            this.postData.officeAlreadyDoc = officeIsDoc;
            this.postData.ticketAlreadyDoc = ticketIsDoc;
            const res = yield this.graphClient
                .api(`/me/messages/${id}/extensions`)
                .post(extension);
            console.log(res);
        });
    }
    getMimeMessage() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            let resp = null;
            let res = yield this.graphClient
                .api('/me/messages')
                .filter(`internetMessageId eq '${this.appData.internetMessageId}'`)
                .get();
            res = res.value;
            if (Array.isArray(res) && res.length > 0) {
                if (res.length >= 1) {
                    resp = res[0];
                }
                else {
                    resp = res;
                }
            }
            else {
                resp = res;
            }
            try {
                this.checkDocumentedFlag(resp.id);
                this.postData.graphMailID = resp.id;
                console.log(resp);
                this.postData.date = new Date(resp.sentDateTime).getTime();
                this.postData.body = resp.body.content;
                this.postData.contentType = resp.body.contentType;
                this.postData.preview = resp.bodyPreview;
                console.log('PREVIEW: ' + this.postData.preview);
                const senderMail = resp.sender.emailAddress.address;
                const userMail = Office.context.mailbox.userProfile
                    .emailAddress;
                if (senderMail.toLowerCase() === userMail.toLowerCase()) {
                    this.postData.isIncoming = false;
                }
                else {
                    this.postData.isIncoming = true;
                }
                console.log('ME DATA: ' + this.postData.contentType);
            }
            catch (e) {
                console.error(e);
                resp = '';
            }
            return resp;
        });
    }
    setAttachments(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const res = yield this.graphClient
                .api('/me/messages/' + id + '/attachments')
                .get();
            console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++RES RES RES');
            console.log(res);
            const attachments = [];
            for (const attachment of res.value) {
                if (this.globals.deleteAttachments && !attachment.isInline) {
                    // Ignore
                }
                else {
                    attachments.push({
                        data: attachment.contentBytes,
                        name: attachment.name,
                        type: attachment.contentType,
                        cid: attachment.contentId,
                        inline: attachment.isInline,
                    });
                }
            }
            this.postData.attachments = attachments;
            console.log('ATTACHMENTS +++++++++++++++++++++++++++++++++++++++++++++++');
            console.log(this.postData.attachments);
        });
    }
    // Initialize the Graph client
    initGraph() {
        this.graphClient = _microsoft_microsoft_graph_client__WEBPACK_IMPORTED_MODULE_1__.Client.init({
            authProvider: (done) => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
                // Get the token from the auth service
                const token = yield this.authService
                    .getAccessToken()
                    .catch((reason) => {
                    done(reason, null);
                });
                if (token) {
                    done(null, token);
                }
                else {
                    done('Could not get an access token', null);
                }
            }),
        });
    }
    waitForGraph() {
        return new rxjs__WEBPACK_IMPORTED_MODULE_6__.Observable((observer) => {
            this.waitList.addToWaitList('graphLoaded', observer);
        });
    }
    initGlobalValues() {
        console.log('OFFICE OBJECT: >>>>>>>>>>>>>>>>>>>>>>>>>>>>');
        console.log(Office.context);
        console.log(Office.context.mailbox);
        this.appData = Office.context.mailbox.item;
        this.globals.curSubject = this.appData.subject;
        this.globals.curMailUnid = this.appData.internetMessageId;
        if (this.appData.from.emailAddress.toLowerCase() ===
            Office.context.mailbox.userProfile.emailAddress.toLowerCase()) {
            console.log('11122');
            console.log(this.appData.to);
            this.globals.curMailAddr = this.appData.to[0].emailAddress;
        }
        else {
            console.log('22211');
            this.globals.curMailAddr = this.appData.from.emailAddress;
        }
        this.globals.curTo = this.appData.to;
        this.globals.curFrom = this.appData.from;
        this.globals.curCC = this.appData.cc;
        this.globals.curMailAddrCount =
            this.appData.to.length + this.appData.cc.length;
        this.globals.displayMailBody = false;
        return this.getPostData();
    }
}
ConnectorOWAService.ɵfac = function ConnectorOWAService_Factory(t) { return new (t || ConnectorOWAService)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_globals_service__WEBPACK_IMPORTED_MODULE_2__.GlobalsService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_message_service__WEBPACK_IMPORTED_MODULE_3__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](src_app_graph_services_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_waitList_service__WEBPACK_IMPORTED_MODULE_5__.WaitListService)); };
ConnectorOWAService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({ token: ConnectorOWAService, factory: ConnectorOWAService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8955:
/*!****************************************************************!*\
  !*** ./src/app/services/connectors/connector-verse.service.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConnectorVerseService": () => (/* binding */ ConnectorVerseService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 9165);
/* harmony import */ var _connector_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./connector.service */ 3529);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _globals_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../globals.service */ 660);
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../message.service */ 2684);





class ConnectorVerseService extends _connector_service__WEBPACK_IMPORTED_MODULE_0__.ConnectorService {
    constructor(globals, messageService) {
        super(globals);
        this.messageService = messageService;
        this.adjustToastPosition();
        this.globals.curConnectorType = 'Verse';
        this.globals.curConnector = this;
    }
    waitForCSS() {
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__.Observable((observer) => {
            const newCSS = {
                main: {},
                overflowContainer: {},
            };
            newCSS.overflowContainer = {
                height: 'calc(100% - 40px)',
            };
            observer.next(newCSS);
            observer.complete();
        });
    }
    getData() {
        console.log('--------------------');
        console.log(this.appData);
    }
    checkMailType() {
        // Ignore
    }
    set data(newVal) {
        this.appData = newVal;
        this.initGlobalValues();
    }
    set alreadyDocumented(val) {
        // Ignore
    }
    get isMailAlreadyDoc() {
        // Not implemented for Verse (Handled on backend)
        return false;
    }
    get curPostData() {
        return null;
    }
    adjustToastPosition() {
        this.messageService.changeClass('toast-bottom-center-verse');
    }
    getPostData() {
        throw new Error('Method not implemented.');
    }
    initGlobalValues() {
        const context = this.appData.context;
        this.globals.curSubject = context.subject;
        this.globals.curMailUnid = context.unid;
        if (this.globals.ownMailAddr === context.sender.emailAddress) {
            this.globals.curMailAddr = context.recipientTo[0];
        }
        else {
            this.globals.curMailAddr = context.sender.emailAddress;
        }
        this.globals.curTo = context.recipientTo;
        this.globals.curFrom = context.sender;
        this.globals.curCC = context.recipientCC;
        this.globals.curMailAddrCount =
            context.recipientTo.length + context.recipientCC.length;
    }
}
ConnectorVerseService.ɵfac = function ConnectorVerseService_Factory(t) { return new (t || ConnectorVerseService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_globals_service__WEBPACK_IMPORTED_MODULE_1__.GlobalsService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_message_service__WEBPACK_IMPORTED_MODULE_2__.MessageService)); };
ConnectorVerseService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: ConnectorVerseService, factory: ConnectorVerseService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 3529:
/*!**********************************************************!*\
  !*** ./src/app/services/connectors/connector.service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConnectorService": () => (/* binding */ ConnectorService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 9165);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _globals_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globals.service */ 660);



class ConnectorService {
    constructor(globals) {
        this.globals = globals;
    }
    waitForConnectorType() {
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable((observer) => {
            if (this.globals.curConnectorType != null) {
                observer.next(this.globals.curConnectorType);
                observer.complete();
            }
        });
    }
}
ConnectorService.ɵfac = function ConnectorService_Factory(t) { return new (t || ConnectorService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_globals_service__WEBPACK_IMPORTED_MODULE_0__.GlobalsService)); };
ConnectorService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ConnectorService, factory: ConnectorService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8865:
/*!************************************************************!*\
  !*** ./src/app/services/create-address-handler.service.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateAddressHandlerService": () => (/* binding */ CreateAddressHandlerService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 9790);
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./message.service */ 2684);
/* harmony import */ var _soap_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./soap.service */ 6894);
/* harmony import */ var _webint_link_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./webint-link.service */ 6578);






const userLanguage = navigator.language;
class CreateAddressHandlerService {
    constructor(translate, messageService, soapService, webintLink) {
        this.translate = translate;
        this.messageService = messageService;
        this.soapService = soapService;
        this.webintLink = webintLink;
    }
    create(addressValues, displayedKeys, fieldDisplayNameMap, contactsDB, rows, type, closeAllModal, pointer) {
        this.closeAll = closeAllModal;
        console.log(type);
        switch (type) {
            case 'company': {
                this.handleCreateCompany(addressValues, displayedKeys, fieldDisplayNameMap, contactsDB, rows);
                break;
            }
            case 'toCompany': {
                this.handleCreateAddressToCompany(addressValues, displayedKeys, fieldDisplayNameMap, contactsDB, rows, pointer);
                break;
            }
            case 'person': {
                this.handleCreatePrivatePerson(addressValues, displayedKeys, fieldDisplayNameMap, contactsDB, rows);
                break;
            }
            default: {
                this.translate.get('LC53496').subscribe((text) => {
                    this.messageService.showError(text);
                });
                break;
            }
        }
    }
    replaceWithCompanyData(addressValues, displayedKeys, fieldDisplayNameMap, rows, pointer, resp) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const resultObj = yield this.createResultObject(addressValues, displayedKeys, fieldDisplayNameMap, rows);
            this.searchResultData = yield this.soapService.invokeSoap('GetAddressByID', { fdme: pointer });
            let result = this.searchResultData;
            result = Object.keys(result);
            if (result.length > 0) {
                const companyData = result[0].split('~*~');
                if (companyData != null) {
                    resultObj.Company = companyData[29];
                    resultObj.Address1 = companyData[10];
                    resultObj.Address2 = companyData[30];
                    resultObj.ZipCode = companyData[12];
                    resultObj.City = companyData[11];
                    //resultObj["ZipCode#City"] = companyData[12] + " " + companyData[11];
                    resultObj.State = companyData[14];
                    resultObj.CountryToo = companyData[13];
                    resultObj.MainPhone = companyData[15];
                    resultObj.Fax = companyData[17];
                }
            }
            resp.Company = resultObj.Company;
            resp.Address1 = resultObj.Address1;
            resp.Address2 = resultObj.Address2;
            resp['ZipCode#City'] = resultObj.ZipCode + ' ' + resultObj.City;
            resp.State = resultObj.State;
            resp.CountryToo = resultObj.CountryToo;
            resp.MainPhone = resultObj.MainPhone;
            resp.Fax = resultObj.Fax;
            return resp;
        });
    }
    // Creates Object with addressdata of new contact
    createResultObject(addressValues, keys, fieldDisplayNameMap, rows) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            console.log(addressValues);
            console.log(keys);
            console.log(fieldDisplayNameMap);
            console.log(rows);
            const resultObj = {};
            const values = addressValues.split('\n');
            let field = null;
            let subFields = null;
            let subValues = null;
            let value = null;
            values.length = rows;
            // You have multiple values for {DUPLICATE}
            let errorText = '';
            this.translate.get('LC53497').subscribe((text) => {
                errorText = text;
            });
            for (const i in keys) {
                console.log(i);
                console.log(keys);
                field = keys[i];
                if (values[i] != null) {
                    if (field != null && Number(i) < values.length) {
                        if (field.includes('#') && values[i].length > 0) {
                            subFields = field.split('#');
                            subValues = values[i].split(' ');
                            console.log('SubFields');
                            console.log(subFields);
                            console.log('SubValues');
                            console.log(subValues);
                            for (const j in subFields) {
                                if (Number(j) < subValues.length) {
                                    // Shows error if duplicate keys with different values are present
                                    if (resultObj[subFields[j]] != null &&
                                        resultObj[subFields[j]] !== subValues[j]) {
                                        errorText = errorText.replace('{DUPLICATE}', fieldDisplayNameMap.get(subFields[j]));
                                        this.messageService.showError(errorText);
                                        return;
                                    }
                                    else {
                                        if (subValues[j] != null) {
                                            subValues[j] = subValues[j].trim();
                                        }
                                        resultObj[subFields[j]] = subValues[j];
                                    }
                                }
                            }
                        }
                        else {
                            if (values[i].length > 0 && values[i].trim().length > 0) {
                                value = values[i].trim();
                                if (keys[i].length > 0) {
                                    if (resultObj[keys[i]] != null &&
                                        resultObj[keys[i]].localeCompare(value) !== 0) {
                                        errorText = errorText.replace('{DUPLICATE}', fieldDisplayNameMap.get(keys[i]));
                                        this.messageService.showError(errorText);
                                        return;
                                    }
                                    resultObj[keys[i]] = value;
                                }
                            }
                        }
                    }
                }
            }
            console.log(resultObj);
            return resultObj;
        });
    }
    handleCreateCompany(addressValues, keys, fieldDisplayNameMap, contactsDB, rows) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const resultObj = yield this.createResultObject(addressValues, keys, fieldDisplayNameMap, rows);
            console.log(resultObj);
            console.log(resultObj.Company);
            console.log(resultObj.Company == null);
            console.log(resultObj.Company === '');
            if (resultObj.Company == null || resultObj.Company === '') {
                // The field '{FIELDNAME}' is a required field.
                this.translate.get('LC73202').subscribe((text) => {
                    text = text.replace('{FIELDNAME}', fieldDisplayNameMap.get('Company'));
                    this.messageService.showError(text);
                });
                return;
            }
            let query = '';
            for (const key in resultObj) {
                query += '~*~' + key + '~#~' + resultObj[key];
            }
            // Add Company to start
            query = '~*~' + resultObj.Company + query;
            // Add trailing data
            query += '~*~fdCorreType~#~GeMain';
            query += '~*~fdIsNewDoc~#~0';
            query += '~*~AddressSynch~#~0';
            const soapObj = {};
            soapObj.addressData = query;
            soapObj.contactsPath = '$' + contactsDB;
            soapObj.targetCompanyId = '';
            if (Array.isArray(userLanguage) && userLanguage.length > 0) {
                soapObj.languageCode = userLanguage[0];
            }
            else {
                soapObj.languageCode = userLanguage;
            }
            console.log(soapObj);
            let result;
            try {
                result = yield this.soapService.invokeSoap('CreateAddresses', soapObj, true);
            }
            catch (e) {
                this.messageService.showError(e.message);
                return;
            }
            const resultKeys = Object.keys(result);
            if (resultKeys.length === 1) {
                window.open(this.webintLink.convertToLink(resultKeys[0]), '_blank');
                //reload();
                //openInWebInt(resultKeys[0]);
                this.closeAll();
            }
            else {
                // Could not create address
                this.translate.get('LC53496').subscribe((text) => {
                    this.messageService.showError(text);
                });
            }
        });
    }
    handleCreateAddressToCompany(addressValues, keys, fieldDisplayNameMap, contactsDB, rows, pointer) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            if (!pointer) {
                // Could not create address
                this.translate.get('LC53496').subscribe((text) => {
                    this.messageService.showError(text);
                });
                return;
            }
            const resultObj = yield this.createResultObject(addressValues, keys, fieldDisplayNameMap, rows);
            // Replaces posted data with company data
            let result = this.searchResultData;
            result = Object.keys(result);
            if (result.length > 0) {
                const companyData = result[0].split('~*~');
                if (companyData != null) {
                    resultObj.Company = companyData[29];
                    resultObj.Address1 = companyData[10];
                    resultObj.Address2 = companyData[30];
                    resultObj.ZipCode = companyData[12];
                    resultObj.City = companyData[11];
                    //resultObj["ZipCode#City"] = companyData[12] + " " + companyData[11];
                    resultObj.State = companyData[14];
                    resultObj.CountryToo = companyData[13];
                    if (resultObj.MainPhone == null ||
                        resultObj.MainPhone.localeCompare('') === 0) {
                        resultObj.MainPhone = companyData[15];
                    }
                    if (resultObj.Fax == null || resultObj.Fax.localeCompare('') === 0) {
                        resultObj.Fax = companyData[17];
                    }
                }
            }
            if (resultObj.LastName == null ||
                resultObj.LastName.localeCompare('') === 0) {
                // The field '{FIELDNAME}' is a required field.
                this.translate.get('LC73202').subscribe((text) => {
                    text = text.replace('{FIELDNAME}', fieldDisplayNameMap.get('LastName'));
                    this.messageService.showError(text);
                });
                return;
            }
            let query = '';
            for (const key in resultObj) {
                query += '~*~' + key + '~#~' + resultObj[key];
            }
            // Add Company to start (Empty on create address to company)
            query = '~*~' + query;
            // Add trailing data
            query += '~*~AddressSynch~#~1';
            const soapObj = {};
            soapObj.addressData = query;
            soapObj.contactsPath = '$' + contactsDB;
            soapObj.targetCompanyId = pointer;
            if (Array.isArray(userLanguage) && userLanguage.length > 0) {
                soapObj.languageCode = userLanguage[0];
            }
            else {
                soapObj.languageCode = userLanguage;
            }
            let resp;
            try {
                resp = yield this.soapService.invokeSoap('CreateAddresses', soapObj, true);
            }
            catch (e) {
                this.messageService.showError(e.message);
                return;
            }
            const resultKeys = Object.keys(resp);
            if (resultKeys.length === 1) {
                window.open(this.webintLink.convertToLink(resultKeys[0]), '_blank');
            }
            else {
                // Could not create address
                this.translate.get('LC53496').subscribe((text) => {
                    this.messageService.showError(text);
                });
            }
            this.closeAll();
        });
    }
    // Needs to use a reference of the class instead of this, as it is called as a callback
    handleCreatePrivatePerson(addressValues, keys, fieldDisplayNameMap, contactsDB, rows) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const resultObj = yield this.createResultObject(addressValues, keys, fieldDisplayNameMap, rows);
            delete resultObj.Company;
            if (resultObj.LastName == null ||
                resultObj.LastName.localeCompare('') === 0) {
                // The field '{FIELDNAME}' is a required field.
                this.translate.get('LC73202').subscribe((text) => {
                    text = text.replace('{FIELDNAME}', fieldDisplayNameMap.get('LastName'));
                    this.messageService.showError(text);
                });
                return;
            }
            let query = '~*~';
            for (const key in resultObj) {
                query += '~*~' + key + '~#~' + resultObj[key];
            }
            // Add trailing data
            query += '~*~fdCorreType~#~GeMain';
            query += '~*~fdIsNewDoc~#~0';
            query += '~*~AddressSynch~#~0';
            const soapObj = {};
            soapObj.addressData = query;
            soapObj.contactsPath = '$' + contactsDB;
            soapObj.targetCompanyId = '';
            if (Array.isArray(userLanguage) && userLanguage.length > 0) {
                soapObj.languageCode = userLanguage[0];
            }
            else {
                soapObj.languageCode = userLanguage;
            }
            let result;
            try {
                result = yield this.soapService.invokeSoap('CreateAddresses', soapObj, true);
            }
            catch (e) {
                this.messageService.showError(e.message);
                return;
            }
            const resultKeys = Object.keys(result);
            if (resultKeys.length === 1) {
                window.open(this.webintLink.convertToLink(resultKeys[0]), '_blank');
            }
            else {
                // Could not create address
                this.translate.get('LC53496').subscribe((text) => {
                    this.messageService.showError(text);
                });
            }
            this.closeAll();
        });
    }
}
CreateAddressHandlerService.ɵfac = function CreateAddressHandlerService_Factory(t) { return new (t || CreateAddressHandlerService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_message_service__WEBPACK_IMPORTED_MODULE_0__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_soap_service__WEBPACK_IMPORTED_MODULE_1__.SoapService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_webint_link_service__WEBPACK_IMPORTED_MODULE_2__.WebintLinkService)); };
CreateAddressHandlerService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: CreateAddressHandlerService, factory: CreateAddressHandlerService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2654:
/*!****************************************************!*\
  !*** ./src/app/services/create-address.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateAddressService": () => (/* binding */ CreateAddressService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 9165);
/* harmony import */ var _otherClasses_create_address_items_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../otherClasses/create-address-items.class */ 5738);
/* harmony import */ var _otherClasses_config_items_default_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../otherClasses/config-items-default.class */ 5692);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _globals_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./globals.service */ 660);





class CreateAddressService {
    constructor(globals) {
        this.globals = globals;
        this.configData = _otherClasses_config_items_default_class__WEBPACK_IMPORTED_MODULE_1__.iconDefaultConfig;
        this.subscribers = [];
        this.createInstance = new _otherClasses_create_address_items_class__WEBPACK_IMPORTED_MODULE_0__.default();
        this.open = false;
    }
    connect() {
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__.Observable((observer) => {
            this.subscribers.push(observer);
            observer.next(this.globals.isCreateBlockOpen);
        });
    }
    updateObservers() {
        const curState = this.globals.isCreateBlockOpen;
        for (const sub of this.subscribers) {
            sub.next(curState);
        }
    }
    toggleOpen() {
        this.open = !this.open;
        if (this.isOpen) {
            this.configData[2].model.value = '1';
        }
        else {
            this.configData[2].model.value = '';
        }
        this.globals.createAddressToggle();
        this.updateObservers();
    }
    get items() {
        return this.createInstance.items;
    }
    get isOpen() {
        return this.open;
    }
    set config(data) {
        this.configData = data;
    }
}
CreateAddressService.ɵfac = function CreateAddressService_Factory(t) { return new (t || CreateAddressService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_globals_service__WEBPACK_IMPORTED_MODULE_2__.GlobalsService)); };
CreateAddressService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: CreateAddressService, factory: CreateAddressService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 660:
/*!*********************************************!*\
  !*** ./src/app/services/globals.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GlobalsService": () => (/* binding */ GlobalsService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 9165);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _waitList_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./waitList.service */ 7076);



class GlobalsService {
    constructor(waitListService) {
        this.waitListService = waitListService;
        this.apiOverviewPath = 'restBM.xsp/verserest/';
        this.currentWebInt = '';
        if (window.localStorage.getItem('webInt') != null) {
            this.currentWebInt = window.localStorage.getItem('webInt');
        }
        this.mailAddr = '';
        this.mailUnid = '';
        this.subject = '';
        this.resetMailAddr = '';
        this.cc = [];
        this.to = [];
        this.from = {};
        this.mailAddrCount = 0;
        if (this.currentWebInt) {
            this.webIntUrl = new URL(this.currentWebInt);
        }
        this.webIntRelativeStart = this.webInt + this.apiOverviewPath;
        this.lcs = {};
        this.lcsLocal = {};
        this.selectedContacts = null;
        this.modalSessionCache = false;
        this.rippleColorRGBA = 'rgba(154, 169, 255, 0.1)';
        this.createAddressOpen = false;
        this.ownMail = '';
        this.showMailBody = true;
        this.connectorType = null;
        this.allowActions = false;
        this.optionsObj = {
            method: 'GET',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
        };
    }
    set loginOpen(val) {
        this.loginWindowOpen = val;
    }
    get loginOpen() {
        return this.loginWindowOpen;
    }
    set actionsAllowed(val) {
        this.allowActions = val;
    }
    get actionsAllowed() {
        return this.allowActions;
    }
    set openMail(val) {
        this.openEMail = val;
    }
    get openMail() {
        return this.openEMail;
    }
    set deleteAttachments(val) {
        this.deleteAttach = val;
    }
    get deleteAttachments() {
        return this.deleteAttach;
    }
    set curConnectorType(val) {
        this.connectorType = val;
    }
    get curConnectorType() {
        return this.connectorType;
    }
    set curConnector(val) {
        this.connector = val;
    }
    get curConnector() {
        return this.connector;
    }
    set graphRequired(val) {
        this.graphReq = val;
        for (const entry of this.waitListService.accessWaitList('graphRequired')) {
            entry.next(val);
            entry.complete();
        }
    }
    get graphRequired() {
        return this.graphReq;
    }
    set graphLoaded(val) {
        this.graphLoad = val;
        for (const entry of this.waitListService.accessWaitList('graphLoaded')) {
            entry.next(val);
            entry.complete();
        }
    }
    get graphLoaded() {
        return this.graphLoad;
    }
    get isCreateBlockOpen() {
        return this.createAddressOpen;
    }
    get rippleColor() {
        return this.rippleColorRGBA;
    }
    set webInt(value) {
        this.currentWebInt = value;
        this.webIntUrl = new URL(this.currentWebInt);
        if (this.currentWebInt != null && this.currentWebInt !== '') {
            this.notifyWaitList();
        }
    }
    get webInt() {
        return this.currentWebInt;
    }
    set displayMailBody(val) {
        this.showMailBody = val;
    }
    get displayMailBody() {
        return this.showMailBody;
    }
    set curMailAddr(value) {
        if (this.resetMailAddr === '') {
            this.resetMailAddr = value;
        }
        this.mailAddr = value;
        this.waitListService.resolveFuncWaitList('mailAddr');
    }
    get curMailAddr() {
        return this.mailAddr;
    }
    get startMailAddr() {
        return this.resetMailAddr;
    }
    set curSubject(value) {
        this.subject = value;
    }
    get curSubject() {
        return this.subject;
    }
    set curCC(value) {
        this.cc = value;
    }
    get curCC() {
        return this.cc;
    }
    set curTo(value) {
        this.to = value;
    }
    get curTo() {
        return this.to;
    }
    set curFrom(value) {
        this.from = value;
    }
    get curFrom() {
        return this.from;
    }
    set curMailAddrCount(value) {
        this.mailAddrCount = value;
    }
    get curMailAddrCount() {
        return this.mailAddrCount;
    }
    set curMailUnid(value) {
        this.mailUnid = value;
    }
    get curMailUnid() {
        return this.mailUnid;
    }
    get origin() {
        return this.webIntUrl.origin;
    }
    get requestWebInt() {
        return this.webIntRelativeStart;
    }
    get options() {
        return this.optionsObj;
    }
    get languageConf() {
        return this.lcs;
    }
    set languageConf(newLCs) {
        this.lcs = newLCs;
    }
    set ownMailAddr(mail) {
        this.ownMail = mail;
    }
    waitForlanguageConfLocal() {
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable((observer) => {
            if (this.lcsLocal !== {}) {
                observer.next(this.lcsLocal);
                observer.complete();
            }
            else {
                this.waitListService.addToWaitList('localLC', observer);
            }
        });
    }
    set languageConfLocal(newLCs) {
        this.lcsLocal = newLCs;
    }
    get languageConfLocal() {
        return this.lcsLocal;
    }
    get currentContactsDB() {
        return this.selectedContacts;
    }
    set currentContactsDB(newContactsDB) {
        this.selectedContacts = newContactsDB;
    }
    get modalCacheFlag() {
        return this.modalSessionCache;
    }
    set modalCacheFlag(flag) {
        this.modalSessionCache = flag;
    }
    languageEntry(key) {
        return this.lcs[key];
    }
    changeGlobalOptions(newObj) {
        return this.changeOptionsObj(newObj, this.optionsObj);
    }
    changeOwnOptions(newObj) {
        const ownOptions = {};
        Object.assign(ownOptions, this.optionsObj);
        return this.changeOptionsObj(newObj, ownOptions);
    }
    objectWithParams(params) {
        let newObject = {};
        newObject = Object.assign(newObject, this.options);
        newObject.params = params;
        return newObject;
    }
    clearTemps() {
        this.clearModalTemps();
    }
    clearModalTemps() {
        this.currentContactsDB = null;
    }
    createAddressToggle() {
        this.createAddressOpen = !this.createAddressOpen;
    }
    waitForWebInt(observer) {
        this.waitListService.addToWaitList('webInt', observer);
    }
    notifyWaitList() {
        for (const sub of this.waitListService.accessWaitList('webInt')) {
            sub.next(this.webInt);
            sub.complete();
        }
        this.waitListService.clearWaitList('webInt');
    }
    changeOptionsObj(newObj, optionsToChange) {
        const map = new Map(Object.entries(newObj));
        map.forEach((value, key) => {
            optionsToChange[key] = value;
        });
        return optionsToChange;
    }
}
GlobalsService.ɵfac = function GlobalsService_Factory(t) { return new (t || GlobalsService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_waitList_service__WEBPACK_IMPORTED_MODULE_0__.WaitListService)); };
GlobalsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: GlobalsService, factory: GlobalsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 4249:
/*!*******************************************!*\
  !*** ./src/app/services/image.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImageService": () => (/* binding */ ImageService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _globals_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./globals.service */ 660);


class ImageService {
    constructor(globals) {
        this.globals = globals;
    }
    getImgUrl(pathComp) {
        return this.globals.webInt + pathComp;
    }
    getViewImgFileName(viewImgID) {
        return 'vwicn' + viewImgID.toString().padStart(3, '0') + '.png';
    }
    getViewIconUrl(viewImgID) {
        return this.getImgUrl(this.getViewImgFileName(viewImgID));
    }
}
ImageService.ɵfac = function ImageService_Factory(t) { return new (t || ImageService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_globals_service__WEBPACK_IMPORTED_MODULE_0__.GlobalsService)); };
ImageService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ImageService, factory: ImageService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 4705:
/*!******************************************!*\
  !*** ./src/app/services/init.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InitService": () => (/* binding */ InitService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 9165);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _waitList_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./waitList.service */ 7076);



class InitService {
    constructor(waitList) {
        this.waitList = waitList;
        this.isInit = false;
    }
    set initComplete(newVal) {
        this.isInit = newVal;
        if (newVal) {
            this.informWaitList();
        }
    }
    get initComplete() {
        return this.isInit;
    }
    waitForInit() {
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable((observer) => {
            observer.next(this.isInit);
            if (!this.isInit) {
                this.waitList.addToWaitList('init', observer);
            }
            else {
                observer.complete();
                this.informWaitList();
            }
        });
    }
    informWaitList() {
        const subs = this.waitList.accessWaitList('init');
        for (const sub of subs) {
            sub.next(this.initComplete);
            if (this.initComplete) {
                sub.complete();
            }
        }
        this.waitList.clearWaitList('init');
    }
}
InitService.ɵfac = function InitService_Factory(t) { return new (t || InitService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_waitList_service__WEBPACK_IMPORTED_MODULE_0__.WaitListService)); };
InitService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: InitService, factory: InitService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8398:
/*!*************************************************!*\
  !*** ./src/app/services/input-tools.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InputToolsService": () => (/* binding */ InputToolsService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 9075);


class InputToolsService {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    sanitizeInput(input, type) {
        return this.sanitizer.sanitize(type, input);
    }
}
InputToolsService.ɵfac = function InputToolsService_Factory(t) { return new (t || InputToolsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.DomSanitizer)); };
InputToolsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: InputToolsService, factory: InputToolsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 1155:
/*!**********************************************!*\
  !*** ./src/app/services/language.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LanguageService": () => (/* binding */ LanguageService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 9165);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _globals_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./globals.service */ 660);
/* harmony import */ var _waitList_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./waitList.service */ 7076);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _connection_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./connection.service */ 2377);






class LanguageService {
    constructor(global, waitList, http, globals, connectionService) {
        this.global = global;
        this.waitList = waitList;
        this.http = http;
        this.globals = globals;
        this.connectionService = connectionService;
        this.loaded = false;
        connectionService.waitForLC().subscribe(() => {
            this.loaded = true;
            this.processLCWaitingList();
        });
        this.setLCSLocal();
    }
    waitForInit() {
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__.Observable((observer) => {
            if (this.loaded) {
                observer.next(true);
                observer.complete();
                this.processLCWaitingList();
            }
            else {
                this.waitList.addToWaitList('lc', observer);
            }
        });
    }
    getLCEntry(lc, toReplace, replaceString) {
        return this.replacePlaceholder(this.global.languageEntry('LC' + lc), toReplace, replaceString);
    }
    passLCObj() {
        return this.global.languageConf;
    }
    getLang() {
        const userLang = navigator.language.toLowerCase();
        if (userLang.startsWith('de')) {
            return 'de';
        }
        else {
            return 'en';
        }
    }
    setLCSLocal() {
        this.http
            .get('assets/i18n/' + this.getLang() + '.json')
            .subscribe((resp) => {
            this.globals.languageConfLocal = resp;
            this.localLCReady();
        });
    }
    localLCReady() {
        for (const sub of this.waitList.accessWaitList('localLC')) {
            sub.next(this.globals.languageConfLocal);
            sub.complete();
        }
    }
    processLCWaitingList() {
        console.log('------ Process wait list');
        this.waitList.accessWaitList('lc').forEach((observer) => {
            observer.next();
            observer.complete();
        });
    }
    replacePlaceholder(text, toReplace, replaceString) {
        if (toReplace && replaceString) {
            text = text.replace(toReplace, replaceString);
        }
        return text;
    }
}
LanguageService.ɵfac = function LanguageService_Factory(t) { return new (t || LanguageService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_globals_service__WEBPACK_IMPORTED_MODULE_0__.GlobalsService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_waitList_service__WEBPACK_IMPORTED_MODULE_1__.WaitListService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_globals_service__WEBPACK_IMPORTED_MODULE_0__.GlobalsService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_connection_service__WEBPACK_IMPORTED_MODULE_2__.ConnectionService)); };
LanguageService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: LanguageService, factory: LanguageService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8555:
/*!********************************************!*\
  !*** ./src/app/services/loader.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoaderService": () => (/* binding */ LoaderService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 9165);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _init_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./init.service */ 4705);
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./message.service */ 2684);
/* harmony import */ var _globals_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./globals.service */ 660);





class LoaderService {
    constructor(init, messageService, globals) {
        this.init = init;
        this.messageService = messageService;
        this.globals = globals;
        this.isInit = false;
        this.initServiceInit = false;
        this.init.waitForInit().subscribe((resp) => {
            this.initServiceInit = resp;
            this.deactivateLoader();
        });
        this.forceOpen = false;
        this.loaderTimeout = null;
        this.isActive = false;
    }
    deactivateLoaderAfterTimeout() {
        if (this.isActive) {
            this.loaderTimeout = setTimeout(() => {
                this.forceDeactivateLoader();
            }, 5000);
        }
    }
    activateLoader(isModal, forceOpen) {
        if (!this.globals.loginOpen) {
            this.clearTimeout();
            this.deactivateLoaderAfterTimeout();
        }
        if (forceOpen) {
            this.isActive = true;
            this.forceOpen = forceOpen;
        }
        if (this.isInit) {
            this.isActive = true;
            this.loaderCompSubscriber.next({
                activate: true,
                modal: isModal,
            });
        }
    }
    clearTimeout() {
        this.messageService.clearConnectionTimeout();
        if (this.loaderTimeout) {
            clearTimeout(this.loaderTimeout);
            this.loaderTimeout = null;
        }
    }
    deactivateLoader() {
        if (this.isInit && this.initServiceInit && !this.forceOpen) {
            this.isActive = false;
            if (!this.globals.loginOpen) {
                this.clearTimeout();
            }
            this.messageService.clearConnectionTimeout();
            this.loaderCompSubscriber.next({
                activate: false,
            });
        }
    }
    forceDeactivateLoader() {
        this.isActive = false;
        if (!this.globals.loginOpen) {
            this.clearTimeout();
        }
        this.forceOpen = false;
        this.loaderCompSubscriber.next({
            activate: false,
        });
    }
    connectToService() {
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__.Observable((observer) => {
            this.loaderCompSubscriber = observer;
            this.isInit = true;
        });
    }
}
LoaderService.ɵfac = function LoaderService_Factory(t) { return new (t || LoaderService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_init_service__WEBPACK_IMPORTED_MODULE_0__.InitService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_message_service__WEBPACK_IMPORTED_MODULE_1__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_globals_service__WEBPACK_IMPORTED_MODULE_2__.GlobalsService)); };
LoaderService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: LoaderService, factory: LoaderService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2684:
/*!*********************************************!*\
  !*** ./src/app/services/message.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessageService": () => (/* binding */ MessageService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ 9344);
/* harmony import */ var _globals_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./globals.service */ 660);



const TIMEOUT_IN_MS = 5000;
class MessageService {
    constructor(toastr, globals) {
        this.toastr = toastr;
        this.globals = globals;
        this.toastrObj = {
            timeOut: 3000,
            positionClass: 'toast-bottom-center',
            preventDuplicates: true,
            progressBar: true,
            closeButton: true,
            maxOpen: 0,
            newestOnTop: false,
        };
        this.defaultTitle = '';
        this.connectionTimeout = null;
    }
    showError(message, title = this.defaultTitle, noTimeout) {
        if (noTimeout) {
            const newOptions = {};
            Object.assign(newOptions, this.toastrObj);
            newOptions.disableTimeOut = true;
            this.toastr.error(message, title, newOptions);
        }
        else {
            this.toastr.error(message, title, this.toastrObj);
        }
    }
    showInfo(message, title = this.defaultTitle) {
        this.toastr.info(message, title, this.toastrObj);
    }
    showSuccess(message, title = this.defaultTitle) {
        this.toastr.success(message, title, this.toastrObj);
    }
    showWarning(message, title = this.defaultTitle) {
        this.toastr.warning(message, title, this.toastrObj);
    }
    showCommon(message, title = this.defaultTitle) {
        this.toastr.show(message, title, this.toastrObj);
    }
    setConnectionTimeout(message, title = this.defaultTitle) {
        this.clearConnectionTimeout();
        this.connectionTimeout = setTimeout(() => {
            if (!this.globals.loginOpen) {
                this.showError(message, title, true);
                return;
            }
        }, TIMEOUT_IN_MS);
    }
    clearConnectionTimeout() {
        if (this.connectionTimeout != null) {
            clearTimeout(this.connectionTimeout);
            this.connectionTimeout = null;
        }
    }
    clearToasts() {
        this.toastr.clear();
    }
    changeClass(newClass) {
        this.toastrObj.positionClass = newClass;
    }
}
MessageService.ɵfac = function MessageService_Factory(t) { return new (t || MessageService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_2__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_globals_service__WEBPACK_IMPORTED_MODULE_0__.GlobalsService)); };
MessageService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: MessageService, factory: MessageService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 1609:
/*!*******************************************!*\
  !*** ./src/app/services/modal.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalService": () => (/* binding */ ModalService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 9765);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 9165);
/* harmony import */ var _otherClasses_modal_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../otherClasses/modal-item */ 3519);
/* harmony import */ var _components_modal_choose_office_choose_office_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/modal/choose-office/choose-office.component */ 7764);
/* harmony import */ var _components_modal_search_contact_search_contact_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/modal/search-contact/search-contact.component */ 8704);
/* harmony import */ var _components_modal_create_contact_create_contact_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/modal/create-contact/create-contact.component */ 7380);
/* harmony import */ var _components_modal_create_ticket_create_ticket_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/modal/create-ticket/create-ticket.component */ 4594);
/* harmony import */ var _components_modal_document_file_document_file_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/modal/document-file/document-file.component */ 7679);
/* harmony import */ var _components_modal_select_contact_select_contact_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/modal/select-contact/select-contact.component */ 1436);
/* harmony import */ var _components_modal_select_create_label_select_create_label_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/modal/select-create-label/select-create-label.component */ 7545);
/* harmony import */ var _components_modal_duplicate_duplicate_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/modal/duplicate/duplicate.component */ 1032);
/* harmony import */ var _components_modal_search_template_search_template_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/modal/search-template/search-template.component */ 3827);
/* harmony import */ var _components_modal_select_mail_address_select_mail_address_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/modal/select-mail-address/select-mail-address.component */ 632);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _waitList_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./waitList.service */ 7076);
/* harmony import */ var _globals_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./globals.service */ 660);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/dialog */ 2238);
















class ModalService {
    constructor(waitList, globals, matDialog) {
        this.waitList = waitList;
        this.globals = globals;
        this.matDialog = matDialog;
        this.modalTypeSource = new rxjs__WEBPACK_IMPORTED_MODULE_13__.Subject();
        this.currentType = this.modalTypeSource.asObservable();
        this.activeModals = [];
    }
    changeType(objToPass) {
        this.modalTypeSource.next(objToPass);
    }
    setModalHeader(newHeader) {
        console.log('++++++++++++++ SETMODALHEADER ++++++++++');
        console.log(newHeader);
        this.modalHeader = newHeader;
    }
    setModalFooter(newFooter) {
        console.log('------ SETMODALFOOTER ------');
        console.log(newFooter);
        this.modalFooter = newFooter;
        this.modalItems = this.getModalItems();
        this.waitList.accessWaitList('modalDesign').forEach((observer) => {
            observer.next(this.modalItems);
            observer.complete();
            this.waitList.clearWaitList('modalDesign');
        });
    }
    waitForModalDesign() {
        return new rxjs__WEBPACK_IMPORTED_MODULE_14__.Observable((observer) => {
            this.waitList.addToWaitList('modalDesign', observer);
        });
    }
    getModalItems() {
        if (!this.modalItems) {
            return {
                chooseOfficeDB: new _otherClasses_modal_item__WEBPACK_IMPORTED_MODULE_0__.ModalItem(_components_modal_choose_office_choose_office_component__WEBPACK_IMPORTED_MODULE_1__.ChooseOfficeComponent, this.initModalData('documentFile')),
                selectContact: new _otherClasses_modal_item__WEBPACK_IMPORTED_MODULE_0__.ModalItem(_components_modal_select_contact_select_contact_component__WEBPACK_IMPORTED_MODULE_6__.SelectContactComponent, this.initModalData()),
                searchContact: new _otherClasses_modal_item__WEBPACK_IMPORTED_MODULE_0__.ModalItem(_components_modal_search_contact_search_contact_component__WEBPACK_IMPORTED_MODULE_2__.SearchContactComponent, this.initModalData('chooseOfficeDB')),
                searchTemplate: new _otherClasses_modal_item__WEBPACK_IMPORTED_MODULE_0__.ModalItem(_components_modal_search_template_search_template_component__WEBPACK_IMPORTED_MODULE_9__.SearchTemplateComponent, this.initModalData('chooseOfficeDB')),
                createContact: new _otherClasses_modal_item__WEBPACK_IMPORTED_MODULE_0__.ModalItem(_components_modal_create_contact_create_contact_component__WEBPACK_IMPORTED_MODULE_3__.CreateContactComponent, this.initModalData()),
                createTicket: new _otherClasses_modal_item__WEBPACK_IMPORTED_MODULE_0__.ModalItem(_components_modal_create_ticket_create_ticket_component__WEBPACK_IMPORTED_MODULE_4__.CreateTicketComponent, this.initModalData()),
                documentFile: new _otherClasses_modal_item__WEBPACK_IMPORTED_MODULE_0__.ModalItem(_components_modal_document_file_document_file_component__WEBPACK_IMPORTED_MODULE_5__.DocumentFileComponent, this.initModalData()),
                createAddressCompany: new _otherClasses_modal_item__WEBPACK_IMPORTED_MODULE_0__.ModalItem(_components_modal_select_contact_select_contact_component__WEBPACK_IMPORTED_MODULE_6__.SelectContactComponent, this.initModalData('createContact', {
                    createType: 'company',
                })),
                createAddressToCompany: new _otherClasses_modal_item__WEBPACK_IMPORTED_MODULE_0__.ModalItem(_components_modal_search_contact_search_contact_component__WEBPACK_IMPORTED_MODULE_2__.SearchContactComponent, this.initModalData('createContact', {
                    type: 'company',
                    createType: 'toCompany',
                })),
                createAddressPerson: new _otherClasses_modal_item__WEBPACK_IMPORTED_MODULE_0__.ModalItem(_components_modal_select_contact_select_contact_component__WEBPACK_IMPORTED_MODULE_6__.SelectContactComponent, this.initModalData('createContact', {
                    createType: 'person',
                })),
                createLabel: new _otherClasses_modal_item__WEBPACK_IMPORTED_MODULE_0__.ModalItem(_components_modal_select_create_label_select_create_label_component__WEBPACK_IMPORTED_MODULE_7__.SelectCreateLabelComponent, this.initModalData(null, {
                    currentModal: this.newActive,
                })),
                selectMailAddress: new _otherClasses_modal_item__WEBPACK_IMPORTED_MODULE_0__.ModalItem(_components_modal_select_mail_address_select_mail_address_component__WEBPACK_IMPORTED_MODULE_10__.SelectMailAddressComponent, this.initModalData()),
                duplicate: new _otherClasses_modal_item__WEBPACK_IMPORTED_MODULE_0__.ModalItem(_components_modal_duplicate_duplicate_component__WEBPACK_IMPORTED_MODULE_8__.DuplicateComponent, this.initModalData()),
            };
        }
        else {
            return this.modalItems;
        }
    }
    addActiveModal(newModal) {
        this.globals.modalCacheFlag = true;
        this.activeModals.push(newModal);
    }
    closeActiveModal(passToCaller) {
        const modalToClose = this.activeModals.pop();
        if (modalToClose) {
            modalToClose.close(passToCaller);
        }
        if (this.activeModals.length < 1) {
            this.globals.modalCacheFlag = false;
            this.globals.clearModalTemps();
        }
    }
    closeAllModals() {
        this.matDialog.closeAll();
        this.activeModals = [];
    }
    initWebIntModal() {
        return this.modalHeader;
    }
    get modalItemsPub() {
        return this.modalItems;
    }
    get newActive() {
        return this.activeModals[this.activeModals.length - 1];
    }
    initModalData(nextModalType = null, addToData, header = this.modalHeader, footer = this.modalFooter) {
        const objToReturn = {
            nextType: nextModalType,
            modalHeader: header,
            modalFooter: footer,
            closeModal: this.closeActiveModal.bind(this),
            closeAllModal: this.closeAllModals.bind(this),
            modalItems: this.modalItems,
        };
        if (addToData) {
            for (const key of Object.keys(addToData)) {
                objToReturn[key] = addToData[key];
            }
        }
        return objToReturn;
    }
}
ModalService.ɵfac = function ModalService_Factory(t) { return new (t || ModalService)(_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵinject"](_waitList_service__WEBPACK_IMPORTED_MODULE_11__.WaitListService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵinject"](_globals_service__WEBPACK_IMPORTED_MODULE_12__.GlobalsService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__.MatDialog)); };
ModalService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjectable"]({ token: ModalService, factory: ModalService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 1293:
/*!********************************************!*\
  !*** ./src/app/services/reload.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReloadService": () => (/* binding */ ReloadService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _address_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./address.service */ 9688);
/* harmony import */ var _globals_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./globals.service */ 660);



class ReloadService {
    constructor(addressService, globals) {
        this.addressService = addressService;
        this.globals = globals;
    }
    reload(fullReload) {
        if (fullReload) {
            this.globals.curMailAddr = this.globals.startMailAddr;
        }
        this.addressService.resetAddr();
        this.addressService.addressChange();
    }
}
ReloadService.ɵfac = function ReloadService_Factory(t) { return new (t || ReloadService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_address_service__WEBPACK_IMPORTED_MODULE_0__.AddressService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_globals_service__WEBPACK_IMPORTED_MODULE_1__.GlobalsService)); };
ReloadService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ReloadService, factory: ReloadService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 6894:
/*!******************************************!*\
  !*** ./src/app/services/soap.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SoapService": () => (/* binding */ SoapService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 9790);
/* harmony import */ var _connection_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./connection.service */ 2377);
/* harmony import */ var _globals_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./globals.service */ 660);
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./message.service */ 2684);
/* harmony import */ var _loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loader.service */ 8555);







class SoapService {
    constructor(translate, connection, globals, messageService, loaderService) {
        this.translate = translate;
        this.connection = connection;
        this.globals = globals;
        this.messageService = messageService;
        this.loaderService = loaderService;
    }
    // Calls SOAP method
    // Parameters need to be passed as an object
    invokeSoap(method, parameters, firstAsArray) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.loaderService.activateLoader(false);
            if (parameters !== null && typeof parameters === 'object') {
                try {
                    let data = '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:soapenc="http://schemas.xmlsoap.org/soap/encoding/"  xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:urn="urn:DefaultNamespace">' +
                        '<soapenv:Header/>' +
                        '<soapenv:Body>' +
                        '<urn:' +
                        method +
                        '>';
                    for (const key in parameters) {
                        if (firstAsArray) {
                            data +=
                                '<' +
                                    key +
                                    ' soapenc:arrayType="xsd:string[1]">' +
                                    '<item>' +
                                    '<![CDATA[' +
                                    parameters[key] +
                                    ']]>' +
                                    '</item>' +
                                    '</' +
                                    key +
                                    '>';
                            firstAsArray = false;
                        }
                        else {
                            data +=
                                '<' + key + '><![CDATA[' + parameters[key] + ']]></' + key + '>';
                        }
                    }
                    data +=
                        '</urn:' + method + '>' + '</soapenv:Body>' + '</soapenv:Envelope>';
                    const response = yield this.connection.postSoap(this.globals.webInt + '/businessMailContacts', data);
                    let responseText;
                    if (response.status === 200) {
                        responseText = yield response.text();
                    }
                    else {
                        throw new Error('');
                    }
                    const xmlDoc = new window.DOMParser().parseFromString(responseText, 'text/xml');
                    const xmlReturnEle = xmlDoc.getElementsByTagName(method + 'Return')[0];
                    const result = [];
                    let child;
                    if (xmlDoc.childNodes.length > 0) {
                        // eslint-disable-next-line @typescript-eslint/prefer-for-of
                        for (let i = 0; i < xmlReturnEle.childNodes.length; i++) {
                            child = xmlReturnEle.childNodes[i];
                            result.push(child.textContent ? child.textContent : '');
                        }
                    }
                    else {
                        result.push(xmlDoc.textContent ? xmlDoc.textContent : '');
                    }
                    this.loaderService.deactivateLoader();
                    return this.arrayToObj(result, '~#~');
                }
                catch (e) {
                    // Failed to retrieve data
                    this.translate.get('LC53488').subscribe((text) => {
                        this.messageService.showError(text);
                        this.loaderService.deactivateLoader();
                        throw Error(text);
                    });
                }
            }
            else {
                // Invalid data
                this.translate.get('LC53487').subscribe((text) => {
                    this.messageService.showError(text);
                    throw Error(text);
                });
            }
            this.loaderService.deactivateLoader();
        });
    }
    arrayToObj(arr, devider) {
        const obj = {};
        for (const index in arr) {
            if (Object.prototype.hasOwnProperty.call(arr, index)) {
                const splitArr = arr[index].split(devider);
                if (splitArr.length >= 2) {
                    obj[splitArr[0]] = splitArr[1];
                }
                else if (splitArr.length === 1) {
                    obj[splitArr[0]] = '';
                }
            }
        }
        return obj;
    }
}
SoapService.ɵfac = function SoapService_Factory(t) { return new (t || SoapService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_connection_service__WEBPACK_IMPORTED_MODULE_0__.ConnectionService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_globals_service__WEBPACK_IMPORTED_MODULE_1__.GlobalsService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_message_service__WEBPACK_IMPORTED_MODULE_2__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_loader_service__WEBPACK_IMPORTED_MODULE_3__.LoaderService)); };
SoapService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: SoapService, factory: SoapService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 7076:
/*!**********************************************!*\
  !*** ./src/app/services/waitList.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WaitListService": () => (/* binding */ WaitListService)
/* harmony export */ });
/* harmony import */ var _types_waitlist_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types/waitlist.type */ 942);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);


class WaitListService {
    constructor() {
        this.waitListRecord = {};
        this.waitListWithFunction = {};
        console.log(_types_waitlist_type__WEBPACK_IMPORTED_MODULE_0__.waitListTypes);
        _types_waitlist_type__WEBPACK_IMPORTED_MODULE_0__.waitListTypes.forEach((element) => {
            this.waitListRecord[element] = [];
            this.waitListWithFunction[element] = [];
        });
        console.log(this.waitListRecord);
    }
    addToWaitList(waitListName, observer) {
        this.waitListRecord[waitListName].push(observer);
    }
    addToWaitListFunc(waitListName, observer, func) {
        this.waitListWithFunction[waitListName].push({
            subscriber: observer,
            function: func,
        });
    }
    accessWaitList(waitListName) {
        return this.waitListRecord[waitListName];
    }
    clearWaitList(waitListName) {
        this.waitListRecord[waitListName].length = 0;
    }
    resolveFuncWaitList(waitListName) {
        for (const entry of this.waitListWithFunction[waitListName]) {
            entry.function(entry.subscriber);
        }
        this.waitListWithFunction[waitListName].length = 0;
    }
}
WaitListService.ɵfac = function WaitListService_Factory(t) { return new (t || WaitListService)(); };
WaitListService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: WaitListService, factory: WaitListService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 6578:
/*!*************************************************!*\
  !*** ./src/app/services/webint-link.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WebintLinkService": () => (/* binding */ WebintLinkService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _globals_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./globals.service */ 660);


class WebintLinkService {
    constructor(globalsService) {
        this.globalsService = globalsService;
        this.indexParamStart = 'index.xsp?';
        this.urlExtension = this.indexParamStart + 'loadTabs=false';
    }
    convertToLink(pointer) {
        return (this.globalsService.webInt +
            this.urlExtension +
            '&openDocument=' +
            pointer);
    }
    openWebIntWithParams(params) {
        params = params.set('loadTabs', 'false');
        window.open(this.globalsService.webInt + this.indexParamStart + params.toString(), '_blank');
    }
}
WebintLinkService.ɵfac = function WebintLinkService_Factory(t) { return new (t || WebintLinkService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_globals_service__WEBPACK_IMPORTED_MODULE_0__.GlobalsService)); };
WebintLinkService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: WebintLinkService, factory: WebintLinkService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 1325:
/*!************************************************!*\
  !*** ./src/app/types/address-order.display.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "order": () => (/* binding */ order),
/* harmony export */   "compareAddressOrder": () => (/* binding */ compareAddressOrder),
/* harmony export */   "spacerIndices": () => (/* binding */ spacerIndices)
/* harmony export */ });
const order = [
    'name',
    'companyName',
    'birthdate',
    '-BLANK-',
    'phone',
    'cellphone',
    'homephone',
    '-BLANK-',
    'homepage',
    'skype',
    'pointer',
    'companyPointer',
    'isCompany',
    'additional',
];
// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
function compareAddressOrder(key1, key2) {
    const indexKey1 = order.indexOf(key1.key);
    const indexKey2 = order.indexOf(key2.key);
    if (indexKey1 === -1 && indexKey2 === -1) {
        return 0;
    }
    if (indexKey1 === -1) {
        return 1;
    }
    if (indexKey2 === -1) {
        return -1;
    }
    if (indexKey1 < indexKey2) {
        return -1;
    }
    if (indexKey1 > indexKey2) {
        return 1;
    }
    return 0;
}
const spacerIndices = ((searchType) => {
    const indicies = [];
    order.forEach((element, index) => {
        if (element.includes(searchType)) {
            indicies.push(index);
        }
    });
    return indicies;
})('-BLANK-');


/***/ }),

/***/ 5352:
/*!**************************************************!*\
  !*** ./src/app/types/create-label-names.type.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createLabels": () => (/* binding */ createLabels),
/* harmony export */   "startLabels": () => (/* binding */ startLabels)
/* harmony export */ });
const createLabels = [
    '',
    'FirstName',
    'MiddleName',
    'LastName',
    'FirstName#LastName',
    'FirstName#MiddleName#LastName',
    'LastName#FirstName',
    'fdSalutatoryAddress',
    'fdContactTitle',
    'Company',
    'Address1',
    'Address2',
    'ZipCode',
    'City',
    'ZipCode#City',
    'CountryToo',
    'MainPhone',
    'Fax',
    'CellPhone',
    'EMailAddress',
    'HomePage',
    'Title',
    'Department',
    'State',
];
const startLabels = [
    'EMailAddress',
    'FirstName#LastName',
    'Company',
    'HomePage',
    'Address1',
    'ZipCode#City',
    'State',
    'CountryToo',
    'MainPhone',
    'Fax',
    'CellPhone',
    'Title',
    'fdContactTitle',
    'Department',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
];


/***/ }),

/***/ 942:
/*!****************************************!*\
  !*** ./src/app/types/waitlist.type.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "waitListTypes": () => (/* binding */ waitListTypes)
/* harmony export */ });
const waitListTypes = [
    'address',
    'path',
    'index',
    'lc',
    'localLC',
    'modalDesign',
    'init',
    'webInt',
    'webIntModal',
    'login',
    'mailAddr',
    'addressChange',
    'graphRequired',
    'graphLoaded',
];


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
try {
    Office.initialize = () => {
        const platform = _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser();
        platform.bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule);
    };
}
catch (e) {
    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser()
        .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
        .catch((err) => console.error(err));
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map