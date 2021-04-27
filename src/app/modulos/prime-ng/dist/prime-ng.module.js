"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PrimeNgModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var table_1 = require("primeng/table");
var button_1 = require("primeng/button");
var card_1 = require("primeng/card");
var scrolltop_1 = require("primeng/scrolltop");
var badge_1 = require("primeng/badge");
var animations_1 = require("@angular/platform-browser/animations");
var tooltip_1 = require("primeng/tooltip");
var fieldset_1 = require("primeng/fieldset");
var dialog_1 = require("primeng/dialog");
var PrimeNgModule = /** @class */ (function () {
    function PrimeNgModule() {
    }
    PrimeNgModule = __decorate([
        core_1.NgModule({
            declarations: [],
            imports: [common_1.CommonModule],
            exports: [
                table_1.TableModule,
                button_1.ButtonModule,
                card_1.CardModule,
                badge_1.BadgeModule,
                scrolltop_1.ScrollTopModule,
                animations_1.BrowserAnimationsModule,
                tooltip_1.TooltipModule,
                fieldset_1.FieldsetModule,
                dialog_1.DialogModule,
            ]
        })
    ], PrimeNgModule);
    return PrimeNgModule;
}());
exports.PrimeNgModule = PrimeNgModule;
