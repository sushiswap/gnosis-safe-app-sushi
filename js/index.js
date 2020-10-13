var Operation = {};
Operation[Operation["CALL"] = 0] = "CALL";
Operation[Operation["DELEGATE_CALL"] = 1] = "DELEGATE_CALL";
Operation[Operation["CREATE"] = 2] = "CREATE";

var TransferMethods = {};
TransferMethods["TRANSFER"] = "transfer";
TransferMethods["TRANSFER_FROM"] = "transferFrom";
TransferMethods["SAFE_TRANSFER_FROM"] = "safeTransferFrom";

var SettingsChangeMethods = {};
SettingsChangeMethods["SETUP"] = "setup";
SettingsChangeMethods["SET_FALLBACK_HANDLER"] = "setFallbackHandler";
SettingsChangeMethods["ADD_OWNER_WITH_THRESHOLD"] = "addOwnerWithThreshold";
SettingsChangeMethods["REMOVE_OWNER"] = "removeOwner";
SettingsChangeMethods["REMOVE_OWNER_WITH_THRESHOLD"] = "removeOwnerWithThreshold";
SettingsChangeMethods["SWAP_OWNER"] = "swapOwner";
SettingsChangeMethods["CHANGE_THRESHOLD"] = "changeThreshold";
SettingsChangeMethods["CHANGE_MASTER_COPY"] = "changeMasterCopy";
SettingsChangeMethods["ENABLE_MODULE"] = "enableModule";
SettingsChangeMethods["DISABLE_MODULE"] = "disableModule";
SettingsChangeMethods["EXEC_TRANSACTION_FROM_MODULE"] = "execTransactionFromModule";
SettingsChangeMethods["APPROVE_HASH"] = "approveHash";
SettingsChangeMethods["EXEC_TRANSACTION"] = "execTransaction";

INTERFACE_MESSAGES = {
    ENV_INFO: 'ENV_INFO',
    ON_SAFE_INFO: 'ON_SAFE_INFO',
    TRANSACTION_CONFIRMED: 'TRANSACTION_CONFIRMED',
    TRANSACTION_REJECTED: 'TRANSACTION_REJECTED',
};
SDK_MESSAGES = {
    SAFE_APP_SDK_INITIALIZED: 'SAFE_APP_SDK_INITIALIZED',
    SEND_TRANSACTIONS: 'SEND_TRANSACTIONS',
};

var envInfo = {
    txServiceUrl: '',
};

getTxServiceUrl = function () { return envInfo.txServiceUrl; };
setTxServiceUrl = function (url) {
    envInfo.txServiceUrl = url;
};

var getBySafeTxHash = function (safeTxHash) {
    return __awaiter(void 0, void 0, void 0, function () {
        var txServiceUrl, controller, options, res, json, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    txServiceUrl = getTxServiceUrl();
                    if (!txServiceUrl) {
                        throw new Error("ENV information hasn't been synced yet or there was an error during the process");
                    }
                    controller = new AbortController();
                    options = {
                        method: 'GET',
                        signal: controller.signal,
                    };
                    setTimeout(function () { return controller.abort(); }, 10000);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, fetch(txServiceUrl + "/transactions/" + safeTxHash, options)];
                case 2:
                    res = _a.sent();
                    return [4 /*yield*/, res.json()];
                case 3:
                    json = _a.sent();
                    return [2 /*return*/, json];
                case 4:
                    err_1 = _a.sent();
                    throw err_1;
                case 5: return [2 /*return*/];
            }
        });
    });
};

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __assign() {
    __assign = Object.assign || function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function __generator(thisArg, body) {
    var _ = { label: 0, sent: function () { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var config = {};
var _logMessageFromSafe = function (origin, messageId) {
    console.info("SafeConnector: A message with id " + messageId + " was received from origin " + origin + ".");
};
// TODO: Think of a better way to type this
var _handleMessageFromInterface = function (messageId, payload, requestId) {
    return __awaiter(void 0, void 0, void 0, function () {
        var typedPayload, typedPayload_1, typedPayload_2;
        var _a, _b, _c, _d, _e;
        return __generator(this, function (_f) {
            _logMessageFromSafe(origin, messageId);
            switch (messageId) {
                case INTERFACE_MESSAGES.ENV_INFO:
                    typedPayload = payload;
                    _logMessageFromSafe(origin, messageId);
                    setTxServiceUrl(typedPayload.txServiceUrl);
                    break;
                case INTERFACE_MESSAGES.ON_SAFE_INFO: {
                    typedPayload_1 = payload;
                    (_a = config.listeners) === null || _a === void 0 ? void 0 : _a.onSafeInfo({
                        safeAddress: typedPayload_1.safeAddress,
                        network: typedPayload_1.network.toLowerCase(),
                        ethBalance: typedPayload_1.ethBalance,
                    });
                    break;
                }
                case INTERFACE_MESSAGES.TRANSACTION_CONFIRMED: {
                    typedPayload_2 = payload;
                    (_c = (_b = config.listeners) === null || _b === void 0 ? void 0 : _b.onTransactionConfirmation) === null || _c === void 0 ? void 0 : _c.call(_b, {
                        requestId: requestId,
                        safeTxHash: typedPayload_2.safeTxHash,
                    });
                    break;
                }
                case INTERFACE_MESSAGES.TRANSACTION_REJECTED: {
                    (_e = (_d = config.listeners) === null || _d === void 0 ? void 0 : _d.onTransactionRejection) === null || _e === void 0 ? void 0 : _e.call(_d, {
                        requestId: requestId,
                    });
                    break;
                }
                default: {
                    console.warn("SafeConnector: A message was received from origin " + origin + " with an unknown message id: " + messageId);
                    break;
                }
            }
            return [2 /*return*/];
        });
    });
};
var _onParentMessage = function (_a) {
    var origin = _a.origin, data = _a.data;
    return __awaiter(void 0, void 0, void 0, function () {
        var messageId, requestId, messagePayload;
        var _b;
        return __generator(this, function (_c) {
            if (origin === window.origin) {
                return [2 /*return*/];
            }
            if (((_b = config.safeAppUrlsRegExp) === null || _b === void 0 ? void 0 : _b.find(function (regExp) { return regExp.test(origin); })) === undefined) {
                console.error("SafeConnector: A message was received from an unknown origin: " + origin + ".");
                return [2 /*return*/];
            }
            if (!data || !data.messageId) {
                console.error("SafeConnector: A message was received from origin " + origin + " with NO message id provided.");
                return [2 /*return*/];
            }
            if (!config.listeners) {
                console.error("SafeConnector: A message was received from origin " + origin + " but no listeners were registered.");
                return [2 /*return*/];
            }
            messageId = data.messageId, requestId = data.requestId, messagePayload = data.data;
            _handleMessageFromInterface(messageId, messagePayload, requestId);
            return [2 /*return*/];
        });
    });
};
var _sendMessageToParent = function (messageId, data, requestId) {
    if (!requestId) {
        if (typeof window !== 'undefined') {
            requestId = Math.trunc(window === null || window === void 0 ? void 0 : window.performance.now());
        }
        else {
            requestId = Math.trunc(Date.now());
        }
    }
    var message = {
        messageId: messageId,
        requestId: requestId,
        data: data,
    };
    if (typeof window !== 'undefined') {
        window.parent.postMessage(message, '*');
    }
    return message;
};
function sendInitializationMessage() {
    _sendMessageToParent(SDK_MESSAGES.SAFE_APP_SDK_INITIALIZED, undefined);
}
/**
 * Register all the listeners supported. When Safe-app sends a message
 * depending on the messageId, the corresponding listener will be called
 * @param listeners
 */
function addListeners(listeners) {
    config.listeners = __assign({}, listeners);
    window.addEventListener('message', _onParentMessage);
}
/**
 * Unregister all the listeners previously set by addListeners.
 */
function removeListeners() {
    window.removeEventListener('message', _onParentMessage);
}
/**
 * Request Safe app to send transactions
 * @param txs
 */
function sendTransactions(txs, requestId) {
    if (!txs || !txs.length) {
        throw new Error('sendTransactions: No transactions were passed');
    }
    var message = _sendMessageToParent(SDK_MESSAGES.SEND_TRANSACTIONS, txs, requestId);
    return message;
}
/**
 * Sets Safe-app url that will render the third-party app.
 * @param parentUrl
 */
function initSdk(safeAppUrlsRegExp) {
    if (safeAppUrlsRegExp === void 0) { safeAppUrlsRegExp = []; }
    config.safeAppUrlsRegExp = __spreadArrays([
        /https:\/\/.*(gnosis-safe\.io|gnosisdev.com)/,
        /https?:\/\/localhost:\d+/
    ], safeAppUrlsRegExp);
    sendInitializationMessage();
    return { addListeners: addListeners, removeListeners: removeListeners, sendTransactions: sendTransactions };
}