"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
/*!
 * Copyright 2017-2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
var apollo_link_1 = require("apollo-link");
var apollo_link_retry_1 = require("apollo-link-retry");
var apollo_utilities_1 = require("apollo-utilities");
exports.PERMANENT_ERROR_KEY = typeof Symbol !== 'undefined' ? Symbol('permanentError') : '@@permanentError';
var BASE_TIME_MS = 100;
var JITTER_FACTOR = 100;
var MAX_DELAY_MS = 5 * 60 * 1000;
var getDelay = function (count) { return ((Math.pow(2, count)) * BASE_TIME_MS) + (JITTER_FACTOR * Math.random()); };
exports.SKIP_RETRY_KEY = '@@skipRetry';
exports.getEffectDelay = function (_action, retries) {
    var delay = getDelay(retries);
    return delay <= MAX_DELAY_MS ? delay : null;
};
exports.createRetryLink = function (origLink) {
    var delay;
    var retryLink = new apollo_link_retry_1.RetryLink({
        attempts: function (count, operation, error) {
            var _a = error, _b = exports.PERMANENT_ERROR_KEY, _c = _a[_b], permanent = _c === void 0 ? false : _c;
            var _d = operation.variables, _e = exports.SKIP_RETRY_KEY, _f = _d[_e], skipRetry = _f === void 0 ? false : _f;
            if (permanent) {
                return false;
            }
            if (error.statusCode >= 400 && error.statusCode < 500) {
                return false;
            }
            if (apollo_utilities_1.graphQLResultHasError({ errors: error ? error.graphQLErrors : [] })) {
                return false;
            }
            if (skipRetry) {
                return false;
            }
            delay = getDelay(count);
            return delay <= MAX_DELAY_MS;
        },
        delay: function (_count, _operation, _error) { return delay; },
    });
    var link = apollo_link_1.ApolloLink.from([
        retryLink,
        origLink,
    ]);
    return new apollo_link_1.ApolloLink(function (operation, forward) {
        var _a = operation.variables, _b = exports.SKIP_RETRY_KEY, _c = _a[_b], skipRetry = _c === void 0 ? false : _c, otherVars = __rest(_a, [typeof _b === "symbol" ? _b : _b + ""]);
        if (skipRetry) {
            operation.variables = otherVars;
        }
        return link.request(operation, forward);
    });
};
