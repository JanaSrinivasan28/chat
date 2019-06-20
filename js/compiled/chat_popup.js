/*!
 * This file is a part of Mibew Messenger.
 *
 * Copyright 2005-2019 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Mibew = Mibew || {};
! function(t) {
    if (!t.ChatPopup) {
        t.ChatPopup = {}, t.Objects = t.Objects || {}, t.Objects.ChatPopups = {}, t.Utils = {}, t.Utils.createCookie = function(t, e, i) {
            var s = /([^\.]+\.[^\.]+)$/.exec(document.location.hostname);
            document.cookie = "" + t + "=" + e + "; path=/; " + (s ? "domain=" + s[1] + "; " : "") + (i ? "expires=" + i.toUTCString() + "; " : "")
        }, t.Utils.readCookie = function(t) {
            for (var e = document.cookie.split("; "), i = t + "=", s = !1, a = 0; a < e.length; a++)
                if (e[a].indexOf(i) != -1) {
                    s = e[a].substr(i.length);
                    break
                } return s
        }, t.Utils.deleteCookie = function(e) {
            t.Utils.createCookie(e, "", new Date(0))
        }, t.Utils.inherits = function() {
            var t = function() {};
            return function(e, i) {
                t.prototype = i.prototype, e.prototype = new t, t.prototype = null, e.prototype.constructor = e
            }
        }(), t.Utils.addEventListener = function(t, e, i) {
            t.addEventListener ? t.addEventListener(e, i, !1) : t.attachEvent && t.attachEvent("on" + e, function(e) {
                i.call(t, e)
            })
        }, t.Utils.loadStyleSheet = function(t, e) {
            var i = document.createElement("link");
            return i.setAttribute("rel", "stylesheet"), i.setAttribute("type", "text/css"), i.setAttribute("href", t), e && i.setAttribute("id", e), document.getElementsByTagName("head")[0].appendChild(i), i
        }, t.Utils.loadScript = function(t, e) {
            var i = document.createElement("script");
            return i.setAttribute("type", "text/javascript"), i.setAttribute("src", t), e && i.setAttribute("id", e), document.getElementsByTagName("head")[0].appendChild(i), i
        }, t.ChatPopup.init = function(e) {
            var i = window.postMessage && e.preferIFrame,
                s = i ? t.ChatPopup.IFrame : t.ChatPopup.Window;
            t.Objects.ChatPopups[e.id] = new s(e)
        };
        var e = function(t) {
            this.id = t.id, this.url = t.url, this.width = t.width, this.height = t.height, this.resizable = t.resizable || !1, this.styleLoader = t.styleLoader, this.modSecurity = t.modSecurity || !1, this.styleName = t.style
        };
        e.prototype.buildChatUrl = function() {
            var t = document.location.href,
                e = document.referrer;
            return this.modSecurity && (t = t.replace("http://", "").replace("https://", ""), e = e.replace("http://", "").replace("https://", "")), this.url + (this.url.indexOf("?") === -1 ? "?" : "&") + "url=" + encodeURIComponent(t) + "&referrer=" + encodeURIComponent(e)
        }, t.ChatPopup.IFrame = function(i) {
            e.call(this, i), this.wrapperDiv = null, this.iframe = null, this.toggleDiv = null, this.isOpened = !1, this.isMinified = !1, this.attachDefaultStyles(), t.Utils.loadScript(this.styleLoader);
            var s = t.Utils.readCookie("mibew-chat-frame-" + this.id);
            s && this.safeOpen(s)
        }, t.Utils.inherits(t.ChatPopup.IFrame, e), t.ChatPopup.IFrame.prototype.attachDefaultStyles = function() {
            var t = !1;
            return function() {
                if (!t) {
                    t = !0;
                    var e = document.createElement("style"),
                        i = ".mibew-chat-frame {height: 0px; width: 0px;}";
                    e.setAttribute("type", "text/css"), e.styleSheet ? e.styleSheet.cssText = i : e.appendChild(document.createTextNode(i)), document.getElementsByTagName("head")[0].appendChild(e)
                }
            }
        }(), t.ChatPopup.IFrame.prototype.open = function(e) {
            if (!this.isOpened) {
                this.wrapperDiv || (this.wrapperDiv = document.createElement("div"), this.wrapperDiv.className = "mibew-chat-wrapper", this.wrapperDiv.setAttribute("id", "mibew-chat-wrapper-" + this.id), this.wrapperDiv.style.display = "none", this.wrapperDiv.innerHTML = '<iframe name="mibewChat' + this.id + '"></iframe>', this.iframe = this.wrapperDiv.getElementsByTagName("iframe")[0], this.iframe.setAttribute("id", "mibew-chat-frame-" + this.id), this.iframe.className = "mibew-chat-frame", this.iframe.setAttribute("frameBorder", 0), document.getElementsByTagName("body")[0].appendChild(this.wrapperDiv), this.toggleDiv = document.createElement("div"), this.toggleDiv.setAttribute("id", "mibew-chat-frame-toggle-" + this.id), this.toggleDiv.className = "mibew-chat-frame-toggle mibew-chat-frame-toggle-on", t.Utils.addEventListener(this.toggleDiv, "click", function(e) {
                    var i = t.Objects.ChatPopups,
                        s = /^mibew-chat-frame-toggle-([0-9A-Za-z]+)$/.exec(this.id);
                    s && i[s[1]] && i[s[1]].toggle()
                }), document.getElementsByTagName("body")[0].appendChild(this.toggleDiv)), this.wrapperDiv.style.display = "block", this.toggleDiv.style.display = "block", this.iframe.src = e || this.buildChatUrl(), this.isOpened = !0, t.Utils.createCookie("mibew-chat-frame-style-" + this.id, this.styleName);
                var i = t.Utils.readCookie("mibew-chat-frame-minified-" + this.id);
                "true" === i && this.toggle()
            }
        }, t.ChatPopup.IFrame.prototype.safeOpen = function(e) {
            var i = t.Utils.loadScript(e + "/check", "mibew-check-iframe-" + this.id);
            i.popup = this, i.url = e;
            var s = t.Utils.readCookie("mibew-chat-frame-style-" + this.id);
            i.onload = function() {
                this.popup.open(this.url + (s ? "?style=" + s : ""))
            }, i.onerror = function() {
                this.popup.close()
            }
        }, t.ChatPopup.IFrame.prototype.close = function() {
            this.isOpened && (this.wrapperDiv.style.display = "none", this.iframe.src = "", this.isOpened = !1, this.toggleDiv.style.display = "none", t.Utils.deleteCookie("mibew-chat-frame-" + this.id), t.Utils.deleteCookie("mibew-chat-frame-minified-" + this.id))
        }, t.ChatPopup.IFrame.prototype.toggle = function() {
            this.wrapperDiv.style.display = this.isMinified ? "block" : "none", this.isMinified = !this.isMinified, this.toggleDiv.className = "mibew-chat-frame-toggle mibew-chat-frame-toggle-" + (this.isMinified ? "off" : "on"), t.Utils.createCookie("mibew-chat-frame-minified-" + this.id, this.isMinified)
        }, t.ChatPopup.Window = function(t) {
            e.call(this, t), this.window = null
        }, t.Utils.inherits(t.ChatPopup.Window, e), t.ChatPopup.Window.prototype.open = function(t) {
            this.window = window.open(t || this.buildChatUrl(), "mibewChat" + this.id, this.getWindowParams()), this.window.focus(), this.window.opener = window
        }, t.ChatPopup.Window.prototype.close = function() {
            this.window && (this.window.close(), this.window = null)
        }, t.ChatPopup.Window.prototype.getWindowParams = function() {
            return ["toolbar=0", "scrollbars=0", "location=0", "status=1", "menubar=0", "width=" + this.width.toString(), "height=" + this.height.toString(), "resizable=" + (this.resizable ? "1" : "0")].join(",")
        }, t.Utils.addEventListener(window, "message", function(e) {
            var i = /^mibew-chat-started\:mibewChat([0-9A-Za-z]+)\:(.*)$/.exec(e.data);
            i && t.Utils.createCookie("mibew-chat-frame-" + i[1], i[2])
        }), t.Utils.addEventListener(window, "message", function(e) {
            var i = t.Objects.ChatPopups,
                s = /^mibew-chat-closed\:mibewChat([0-9A-Za-z]+)$/.exec(e.data);
            s && i[s[1]] && i[s[1]].close()
        })
    }
}(Mibew);