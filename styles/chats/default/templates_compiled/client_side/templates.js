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
! function() {
    Handlebars.templates = Handlebars.templates || {};
    Handlebars.templates._logo = Handlebars.template({
        1: function(a, n, e, l, t) {
            var s;
            return null != (s = e["if"].call(null != n ? n : a.nullContext || {}, null != (s = null != n ? n.page : n) ? s.mibewHost : s, {
                name: "if",
                hash: {},
                fn: a.program(2, t, 0),
                inverse: a.program(4, t, 0),
                data: t
            })) ? s : ""
        },
        2: function(a, n, e, l, t) {
            var s, r = a.lambda,
                i = a.escapeExpression;
            var checkIsAgent = (s = null != n ? n.user : n) ? s.isAgent : s;
            return "                <a onclick=\"window.open('" + i(r(null != (s = null != n ? n.page : n) ? s.mibewHost : s, n)) + '\');return false;" href="' + i(r(null != (s = null != n ? n.page : n) ? s.mibewHost : s, n)) + '">\n                    <img src="' + i(r(null != (s = null != (s = null != n ? n.page : n) ? s.company : s) ? (checkIsAgent) ? '/chat/styles/chats/default/images/access_one_chat_server_logo.png' : s.chatLogoURL : s, n)) + '" alt=""/>\n                </a>\n'
        },
        4: function(a, n, e, l, t) {
            var s;
            return '                <img src="' + a.escapeExpression(a.lambda(null != (s = null != (s = null != n ? n.page : n) ? s.company : s) ? s.chatLogoURL : s, n)) + '" alt=""/>\n'
        },
        6: function(a, n, e, l, t) {
            var s;
            return null != (s = e["if"].call(null != n ? n : a.nullContext || {}, null != (s = null != n ? n.page : n) ? s.mibewHost : s, {
                name: "if",
                hash: {},
                fn: a.program(7, t, 0),
                inverse: a.program(9, t, 0),
                data: t
            })) ? s : ""
        },
        7: function(a, n, e, l, t) {
            var s, r = a.lambda,
                i = a.escapeExpression;
            return "                <a onclick=\"window.open('" + i(r(null != (s = null != n ? n.page : n) ? s.mibewHost : s, n)) + '\');return false;" href="' + i(r(null != (s = null != n ? n.page : n) ? s.mibewHost : s, n)) + '">\n                    <img src="' + i(r(null != (s = null != n ? n.page : n) ? s.stylePath : s, n)) + '/images/default-logo.png" alt=""/>\n                </a>\n'
        },
        9: function(a, n, e, l, t) {
            var s;
            return '                <img src="' + a.escapeExpression(a.lambda(null != (s = null != n ? n.page : n) ? s.stylePath : s, n)) + '/images/default-logo.png" alt=""/>\n'
        },
        compiler: [7, ">= 4.0.0"],
        main: function(a, n, e, l, t) {
            var s;
            return '<div id="logo-wrapper">\n    <div id="logo">\n' + (null != (s = e["if"].call(null != n ? n : a.nullContext || {}, null != (s = null != (s = null != n ? n.page : n) ? s.company : s) ? s.chatLogoURL : s, {
                name: "if",
                hash: {},
                fn: a.program(1, t, 0),
                inverse: a.program(6, t, 0),
                data: t
            })) ? s : "") + '        &nbsp;\n        <div id="page-title">' + a.escapeExpression(a.lambda(null != (s = null != n ? n.page : n) ? s.title : s, n)) + '</div>\n        <div class="clear">&nbsp;</div>\n    </div>\n</div>'
        },
        useData: !0
    })
}(),
function() {
    Handlebars.templates = Handlebars.templates || {};
    Handlebars.templates.default_control = Handlebars.template({
        compiler: [7, ">= 4.0.0"],
        main: function(a, n, e, l, t) {
            var s;
            return "<strong>" + a.escapeExpression((s = null != (s = e.title || (null != n ? n.title : n)) ? s : e.helperMissing, "function" == typeof s ? s.call(null != n ? n : a.nullContext || {}, {
                name: "title",
                hash: {},
                data: t
            }) : s)) + "</strong>"
        },
        useData: !0
    })
}(),
function() {
    Handlebars.templates = Handlebars.templates || {};
    Handlebars.templates.message = Handlebars.template({
        1: function(a, n, e, l, t) {
            var s, r = null != n ? n : a.nullContext || {},
                i = e.helperMissing,
                o = "function",
                u = a.escapeExpression;
            return "<span class='name-" + u((s = null != (s = e.kindName || (null != n ? n.kindName : n)) ? s : i, typeof s === o ? s.call(r, {
                name: "kindName",
                hash: {},
                data: t
            }) : s)) + "'>" + u((s = null != (s = e.name || (null != n ? n.name : n)) ? s : i, typeof s === o ? s.call(r, {
                name: "name",
                hash: {},
                data: t
            }) : s)) + "</span>: "
        },
        3: function(a, n, e, l, t) {
            return a.escapeExpression((e.urlReplace || n && n.urlReplace || e.helperMissing).call(null != n ? n : a.nullContext || {}, null != n ? n.message : n, {
                name: "urlReplace",
                hash: {},
                data: t
            }))
        },
        compiler: [7, ">= 4.0.0"],
        main: function(a, n, e, l, t) {
            var s, r, i = null != n ? n : a.nullContext || {},
                o = e.helperMissing,
                u = a.escapeExpression;
            return "<span>" + u((e.formatTime || n && n.formatTime || o).call(i, null != n ? n.created : n, {
                name: "formatTime",
                hash: {},
                data: t
            })) + "</span>\n" + (null != (s = e["if"].call(i, null != n ? n.name : n, {
                name: "if",
                hash: {},
                fn: a.program(1, t, 0),
                inverse: a.noop,
                data: t
            })) ? s : "") + "\n<span class='message-" + u((r = null != (r = e.kindName || (null != n ? n.kindName : n)) ? r : o, "function" == typeof r ? r.call(i, {
                name: "kindName",
                hash: {},
                data: t
            }) : r)) + "'>" + (null != (s = (e.replace || n && n.replace || o).call(i, "\\n", "<br/>", {
                name: "replace",
                hash: {},
                fn: a.program(3, t, 0),
                inverse: a.noop,
                data: t
            })) ? s : "") + "</span><br/>"
        },
        useData: !0
    })
}(),
function() {
    Handlebars.templates = Handlebars.templates || {};
    Handlebars.templates["chat/avatar"] = Handlebars.template({
        1: function(a, n, e, l, t) {
            var s;
            return '<img src="' + a.escapeExpression((s = null != (s = e.imageLink || (null != n ? n.imageLink : n)) ? s : e.helperMissing, "function" == typeof s ? s.call(null != n ? n : a.nullContext || {}, {
                name: "imageLink",
                hash: {},
                data: t
            }) : s)) + '" border="0" alt="" />'
        },
        3: function(a, n, e, l, t) {
            return '<div class="default-avatar"></div>'
        },
        compiler: [7, ">= 4.0.0"],
        main: function(a, n, e, l, t) {
            var s;
            return null != (s = e["if"].call(null != n ? n : a.nullContext || {}, null != n ? n.imageLink : n, {
                name: "if",
                hash: {},
                fn: a.program(1, t, 0),
                inverse: a.program(3, t, 0),
                data: t
            })) ? s : ""
        },
        useData: !0
    })
}(),
function() {
    Handlebars.templates = Handlebars.templates || {};
    Handlebars.templates["chat/layout"] = Handlebars.template({
        1: function(a, n, e, l, t) {
            return '        <div id="avatar-region"></div>\n'
        },
        compiler: [7, ">= 4.0.0"],
        main: function(a, n, e, l, t) {
            var s, r = null != n ? n : a.nullContext || {};
            return (null != (s = a.invokePartial(l._logo, n, {
                name: "_logo",
                data: t,
                helpers: e,
                partials: l,
                decorators: a.decorators
            })) ? s : "") + '\n<div id="chat-header">\n    <div class="background-center"><div class="background-left"><div class="background-right">\n        <div id="controls-region"></div>\n    </div></div></div>\n</div>\n\n<div id="chat">\n    <div class="background-left"><div class="background-right"><div class="background-shady-center"><div class="background-shady-left"><div class="background-shady-right">\n' + (null != (s = e.unless.call(r, null != (s = null != n ? n.user : n) ? s.isAgent : s, {
                name: "unless",
                hash: {},
                fn: a.program(1, t, 0),
                inverse: a.noop,
                data: t
            })) ? s : "") + '        <div id="messages-region"></div>\n        <div id="status-region"></div>\n    </div></div></div></div></div>\n</div>\n\n<div id="message-form-region"></div>\n\n<div id="footer">' + a.escapeExpression((e.l10n || n && n.l10n || e.helperMissing).call(r, "Powered by:", {
                name: "l10n",
                hash: {},
                data: t
            })) + ' <a id="poweredby-link" href="https://mibew.org" title="Mibew Messenger project" target="_blank">mibew.org</a></div>'
        },
        usePartial: !0,
        useData: !0
    })
}(),
function() {
    Handlebars.templates = Handlebars.templates || {};
    Handlebars.templates["chat/message"] = Handlebars.template({
        1: function(a, n, e, l, t) {
            var s, r = null != n ? n : a.nullContext || {},
                i = e.helperMissing,
                o = "function",
                u = a.escapeExpression;
            return "<span class='name-" + u((s = null != (s = e.kindName || (null != n ? n.kindName : n)) ? s : i, typeof s === o ? s.call(r, {
                name: "kindName",
                hash: {},
                data: t
            }) : s)) + "'>" + u((s = null != (s = e.name || (null != n ? n.name : n)) ? s : i, typeof s === o ? s.call(r, {
                name: "name",
                hash: {},
                data: t
            }) : s)) + "</span>: "
        },
        3: function(a, n, e, l, t) {
            return a.escapeExpression((e.urlReplace || n && n.urlReplace || e.helperMissing).call(null != n ? n : a.nullContext || {}, null != n ? n.message : n, {
                name: "urlReplace",
                hash: {},
                data: t
            }))
        },
        compiler: [7, ">= 4.0.0"],
        main: function(a, n, e, l, t) {
            var s, r, i = null != n ? n : a.nullContext || {},
                o = e.helperMissing,
                u = a.escapeExpression;
            return "<span>" + u((e.formatTime || n && n.formatTime || o).call(i, null != n ? n.created : n, {
                name: "formatTime",
                hash: {},
                data: t
            })) + "</span> \n" + (null != (s = e["if"].call(i, null != n ? n.name : n, {
                name: "if",
                hash: {},
                fn: a.program(1, t, 0),
                inverse: a.noop,
                data: t
            })) ? s : "") + "\n<span class='message-" + u((r = null != (r = e.kindName || (null != n ? n.kindName : n)) ? r : o, "function" == typeof r ? r.call(i, {
                name: "kindName",
                hash: {},
                data: t
            }) : r)) + "'>" + (null != (s = (e.replace || n && n.replace || o).call(i, "\\n", "<br/>", {
                name: "replace",
                hash: {},
                fn: a.program(3, t, 0),
                inverse: a.noop,
                data: t
            })) ? s : "") + "</span><br/>"
        },
        useData: !0
    })
}(),
function() {
    Handlebars.templates = Handlebars.templates || {};
    Handlebars.templates["chat/message_form"] = Handlebars.template({
        1: function(a, n, e, l, t) {
            return '    <div class="background-center"><div class="background-left"><div class="background-right">\n        <textarea id="message-input" class="message" tabindex="0" rows="2" cols="10"></textarea>\n    </div></div></div>\n'
        },
        3: function(a, n, e, l, t) {
            var s, r = null != n ? n : a.nullContext || {},
                i = e.helperMissing;
            var checkIsAgent = (s = null != n ? n.user : n) ? s.isAgent : s;
            return '    <div id="post-message">\n        <div id="predefined-wrapper">\n' + (null != (s = e["if"].call(r, null != (s = null != n ? n.user : n) ? s.isAgent : s, {
                name: "if",
                hash: {},
                fn: a.program(4, t, 0),
                inverse: a.noop,
                data: t
            })) ? s : "") + '        </div>\n        <a href="javascript:void(0)" id="send-message" title="' + a.escapeExpression((e.l10n || n && n.l10n || i).call(r, "Send message", {
                name: "l10n",
                hash: {},
                data: t
            })) + '">' + (null != (s = (e.l10n || n && n.l10n || i).call(r, (checkIsAgent) ? "Send" : "", null != n ? n.sendShortcut : n, {
                name: "l10n",
                hash: {},
                data: t
            })) ? s : "") + "</a>\n    </div>\n"
        },
        4: function(a, n, e, l, t) {
            var s, r = null != n ? n : a.nullContext || {};
            return '                <select id="predefined" size="1" class="answer">\n                    <option>' + a.escapeExpression((e.l10n || n && n.l10n || e.helperMissing).call(r, "Select answer...", {
                name: "l10n",
                hash: {},
                data: t
            })) + "</option>\n" + (null != (s = e.each.call(r, null != n ? n.predefinedAnswers : n, {
                name: "each",
                hash: {},
                fn: a.program(5, t, 0),
                inverse: a.noop,
                data: t
            })) ? s : "") + "                </select>\n"
        },
        5: function(a, n, e, l, t) {
            return "                    <option>" + a.escapeExpression(a.lambda(null != n ? n["short"] : n, n)) + "</option>\n"
        },
        compiler: [7, ">= 4.0.0"],
        main: function(a, n, e, l, t) {
            var s, r = null != n ? n : a.nullContext || {};
            return '<div id="message">\n' + (null != (s = e["if"].call(r, null != (s = null != n ? n.user : n) ? s.canPost : s, {
                name: "if",
                hash: {},
                fn: a.program(1, t, 0),
                inverse: a.noop,
                data: t
            })) ? s : "") + '</div>\n\n<div id="send">\n' + (null != (s = e["if"].call(r, null != (s = null != n ? n.user : n) ? s.canPost : s, {
                name: "if",
                hash: {},
                fn: a.program(3, t, 0),
                inverse: a.noop,
                data: t
            })) ? s : "") + '</div>\n<div class="clear"></div>'
        },
        useData: !0
    })
}(),
function() {
    Handlebars.templates = Handlebars.templates || {};
    Handlebars.templates["invitation/layout"] = Handlebars.template({
        compiler: [7, ">= 4.0.0"],
        main: function(a, n, e, l, t) {
            return '<div id="invitation-messages-region"></div>'
        },
        useData: !0
    })
}(),
function() {
    Handlebars.templates = Handlebars.templates || {};
    Handlebars.templates["leave_message/description"] = Handlebars.template({
        compiler: [7, ">= 4.0.0"],
        main: function(a, n, e, l, t) {
            var s, r = null != n ? n : a.nullContext || {},
                i = e.helperMissing,
                o = a.escapeExpression;
            return '<div class="buttons">\n    <a href="javascript:Mibew.Utils.closeChatPopup();" title="' + o((e.l10n || n && n.l10n || i).call(r, "Close", {
                name: "l10n",
                hash: {},
                data: t
            })) + '">\n        <img class="tpl-image image-close-window" src="' + o(a.lambda(null != (s = null != n ? n.page : n) ? s.stylePath : s, n)) + '/images/free.gif" alt="' + o((e.l10n || n && n.l10n || i).call(r, "Close", {
                name: "l10n",
                hash: {},
                data: t
            })) + '" />\n    </a>\n</div>\n<div class="info-message">' + (null != (s = (e.l10n || n && n.l10n || i).call(r, "Sorry. None of the support team is available at the moment. <br/>Please leave a message and someone will get back to you shortly.", {
                name: "l10n",
                hash: {},
                data: t
            })) ? s : "") + "</div>"
        },
        useData: !0
    })
}(),
function() {
    Handlebars.templates = Handlebars.templates || {};
    Handlebars.templates["leave_message/form"] = Handlebars.template({
        1: function(a, n, e, l, t) {
            var s;
            return null != (s = e["if"].call(null != n ? n : a.nullContext || {}, null != n ? n.groupId : n, {
                name: "if",
                hash: {},
                fn: a.program(2, t, 0),
                inverse: a.noop,
                data: t
            })) ? s : ""
        },
        2: function(a, n, e, l, t) {
            var s;
            return '<input type="hidden" name="group" value="' + a.escapeExpression((s = null != (s = e.groupId || (null != n ? n.groupId : n)) ? s : e.helperMissing, "function" == typeof s ? s.call(null != n ? n : a.nullContext || {}, {
                name: "groupId",
                hash: {},
                data: t
            }) : s)) + '"/>'
        },
        4: function(a, n, e, l, t) {
            var s, r = null != n ? n : a.nullContext || {},
                i = e.helperMissing,
                o = a.escapeExpression;
            return '        <tr>\n            <td class="text"><strong>' + o((e.l10n || n && n.l10n || i).call(r, "Choose Department:", {
                name: "l10n",
                hash: {},
                data: t
            })) + '</strong></td>\n            <td>\n                <select name="group" style="min-width:200px;">\n' + (null != (s = e.each.call(r, null != n ? n.groups : n, {
                name: "each",
                hash: {},
                fn: a.program(5, t, 0),
                inverse: a.noop,
                data: t
            })) ? s : "") + '                </select>\n            </td>\n        </tr>\n        <tr>\n            <td class="text"><strong>' + o((e.l10n || n && n.l10n || i).call(r, "Department description:", {
                name: "l10n",
                hash: {},
                data: t
            })) + '</strong></td>\n            <td class="text" id="group-description">\n                ' + (null != (s = e.each.call(r, null != n ? n.groups : n, {
                name: "each",
                hash: {},
                fn: a.program(8, t, 0),
                inverse: a.noop,
                data: t
            })) ? s : "") + "\n            </td>\n        </tr>\n"
        },
        5: function(a, n, e, l, t) {
            var s, r = a.lambda,
                i = a.escapeExpression;
            return '                        <option value="' + i(r(null != n ? n.id : n, n)) + '" ' + (null != (s = e["if"].call(null != n ? n : a.nullContext || {}, null != n ? n.selected : n, {
                name: "if",
                hash: {},
                fn: a.program(6, t, 0),
                inverse: a.noop,
                data: t
            })) ? s : "") + ">" + i(r(null != n ? n.name : n, n)) + "</option>\n"
        },
        6: function(a, n, e, l, t) {
            return 'selected="selected"'
        },
        8: function(a, n, e, l, t) {
            var s;
            return null != (s = e["if"].call(null != n ? n : a.nullContext || {}, null != n ? n.selected : n, {
                name: "if",
                hash: {},
                fn: a.program(9, t, 0),
                inverse: a.noop,
                data: t
            })) ? s : ""
        },
        9: function(a, n, e, l, t) {
            return a.escapeExpression(a.lambda(null != n ? n.description : n, n))
        },
        11: function(a, n, e, l, t) {
            return '        <tr>\n            <td><img id="captcha-img" src="captcha"/></td>\n            <td><input type="text" name="captcha" size="50" maxlength="15" value="" class="username"/></td>\n        </tr>\n'
        },
        13: function(a, n, e, l, t) {
            var s;
            return '        <tr>\n            <td colspan="2"><strong>' + (null != (s = (e.l10n || n && n.l10n || e.helperMissing).call(null != n ? n : a.nullContext || {}, 'Please note that by leaving the message you\'re explicitly agree with the <a href="{0}" target="_blank">Privacy Policy</a>', null != n ? n.privacyPolicyUrl : n, {
                name: "l10n",
                hash: {},
                data: t
            })) ? s : "") + "</strong></td>\n        </tr>\n"
        },
        compiler: [7, ">= 4.0.0"],
        main: function(a, n, e, l, t) {
            var s, r, i = a.lambda,
                o = a.escapeExpression,
                u = null != n ? n : a.nullContext || {},
                d = e.helperMissing,
                p = "function";
            return '<form name="leaveMessageForm" method="post" action="">\n    <input type="hidden" name="style" value="' + o(i(null != (s = null != n ? n.page : n) ? s.style : s, n)) + '"/>\n    <input type="hidden" name="info" value="' + o((r = null != (r = e.info || (null != n ? n.info : n)) ? r : d, typeof r === p ? r.call(u, {
                name: "info",
                hash: {},
                data: t
            }) : r)) + '"/>\n    <input type="hidden" name="referrer" value="' + o((r = null != (r = e.referrer || (null != n ? n.referrer : n)) ? r : d, typeof r === p ? r.call(u, {
                name: "referrer",
                hash: {},
                data: t
            }) : r)) + '"/>\n    ' + (null != (s = e.unless.call(u, null != n ? n.groups : n, {
                name: "unless",
                hash: {},
                fn: a.program(1, t, 0),
                inverse: a.noop,
                data: t
            })) ? s : "") + '\n\n    <div class="errors"></div>\n\n    <table cellspacing="1" cellpadding="5" border="0" class="form">\n        <tr>\n            <td><strong>' + o((e.l10n || n && n.l10n || d).call(u, "Your email", {
                name: "l10n",
                hash: {},
                data: t
            })) + ':</strong></td>\n            <td><input type="text" name="email" size="50" value="' + o((r = null != (r = e.email || (null != n ? n.email : n)) ? r : d, typeof r === p ? r.call(u, {
                name: "email",
                hash: {},
                data: t
            }) : r)) + '" class="username"/></td>\n        </tr>\n        <tr>\n            <td><strong>' + o((e.l10n || n && n.l10n || d).call(u, "Your name", {
                name: "l10n",
                hash: {},
                data: t
            })) + ':</strong></td>\n            <td><input type="text" name="name" size="50" value="' + o((r = null != (r = e.name || (null != n ? n.name : n)) ? r : d, typeof r === p ? r.call(u, {
                name: "name",
                hash: {},
                data: t
            }) : r)) + '" class="username"/></td>\n        </tr>\n' + (null != (s = e["if"].call(u, null != n ? n.groups : n, {
                name: "if",
                hash: {},
                fn: a.program(4, t, 0),
                inverse: a.noop,
                data: t
            })) ? s : "") + "        <tr>\n            <td><strong>" + o((e.l10n || n && n.l10n || d).call(u, "Message", {
                name: "l10n",
                hash: {},
                data: t
            })) + ':</strong></td>\n            <td valign="top">\n                <textarea id="message-leave" name="message" tabindex="0" cols="40" rows="5">' + o((r = null != (r = e.message || (null != n ? n.message : n)) ? r : d, typeof r === p ? r.call(u, {
                name: "message",
                hash: {},
                data: t
            }) : r)) + "</textarea>\n            </td>\n        </tr>\n" + (null != (s = e["if"].call(u, null != n ? n.showCaptcha : n, {
                name: "if",
                hash: {},
                fn: a.program(11, t, 0),
                inverse: a.noop,
                data: t
            })) ? s : "") + (null != (s = e["if"].call(u, null != n ? n.privacyPolicyUrl : n, {
                name: "if",
                hash: {},
                fn: a.program(13, t, 0),
                inverse: a.noop,
                data: t
            })) ? s : "") + '    </table>\n    <a href="javascript:void(0);" class="but" id="send-message">' + o((e.l10n || n && n.l10n || d).call(u, "Send", {
                name: "l10n",
                hash: {},
                data: t
            })) + '</a>\n    <div class="clear">&nbsp;</div>\n</form>\n<div id="ajax-loader"><img src="' + o(i(null != (s = null != n ? n.page : n) ? s.stylePath : s, n)) + '/images/ajax-loader.gif" alt="Loading..." /></div>'
        },
        useData: !0
    })
}(),
function() {
    Handlebars.templates = Handlebars.templates || {};
    Handlebars.templates["leave_message/layout"] = Handlebars.template({
        compiler: [7, ">= 4.0.0"],
        main: function(a, n, e, l, t) {
            var s;
            return (null != (s = a.invokePartial(l._logo, n, {
                name: "_logo",
                data: t,
                helpers: e,
                partials: l,
                decorators: a.decorators
            })) ? s : "") + '\n<div id="headers">\n    <div class="headers-inwards-wrapper-common"><div class="headers-inwards-wrapper-left"><div class="headers-inwards-wrapper-right"><div class="headers-inwards-wrapper-top"><div class="headers-inwards-wrapper-top-left"><div class="headers-inwards-wrapper-top-right"><div class="headers-inwards-wrapper-bottom-left"><div class="headers-inwards-wrapper-bottom-right" id="description-region">\n    </div></div></div></div></div></div></div></div>\n</div>\n\n<div id="content-wrapper"></div>'
        },
        usePartial: !0,
        useData: !0
    })
}(),
function() {
    Handlebars.templates = Handlebars.templates || {};
    Handlebars.templates["leave_message/sent_description"] = Handlebars.template({
        compiler: [7, ">= 4.0.0"],
        main: function(a, n, e, l, t) {
            var s, r = null != n ? n : a.nullContext || {},
                i = e.helperMissing,
                o = a.escapeExpression;
            return '<div class="buttons">\n        <a href="javascript:Mibew.Utils.closeChatPopup();" title="' + o((e.l10n || n && n.l10n || i).call(r, "Close...", {
                name: "l10n",
                hash: {},
                data: t
            })) + '">\n            <img class="tpl-image image-close-window" src="' + o(a.lambda(null != (s = null != n ? n.page : n) ? s.stylePath : s, n)) + '/images/free.gif" alt="' + o((e.l10n || n && n.l10n || i).call(r, "Close...", {
                name: "l10n",
                hash: {},
                data: t
            })) + '" />\n        </a>\n</div>\n<div class="info-message">' + o((e.l10n || n && n.l10n || i).call(r, "Thank you for your message. We'll answer your query by email as soon as possible.", {
                name: "l10n",
                hash: {},
                data: t
            })) + "</div>"
        },
        useData: !0
    })
}(),
function() {
    Handlebars.templates = Handlebars.templates || {};
    Handlebars.templates["survey/form"] = Handlebars.template({
        1: function(a, n, e, l, t) {
            var s;
            return '<input type="hidden" name="email" value="' + a.escapeExpression((s = null != (s = e.email || (null != n ? n.email : n)) ? s : e.helperMissing, "function" == typeof s ? s.call(null != n ? n : a.nullContext || {}, {
                name: "email",
                hash: {},
                data: t
            }) : s)) + '"/>'
        },
        3: function(a, n, e, l, t) {
            var s;
            return null != (s = e["if"].call(null != n ? n : a.nullContext || {}, null != n ? n.groupId : n, {
                name: "if",
                hash: {},
                fn: a.program(4, t, 0),
                inverse: a.noop,
                data: t
            })) ? s : ""
        },
        4: function(a, n, e, l, t) {
            var s;
            return '<input type="hidden" name="group" value="' + a.escapeExpression((s = null != (s = e.groupId || (null != n ? n.groupId : n)) ? s : e.helperMissing, "function" == typeof s ? s.call(null != n ? n : a.nullContext || {}, {
                name: "groupId",
                hash: {},
                data: t
            }) : s)) + '"/>'
        },
        6: function(a, n, e, l, t) {
            var s;
            return '<input type="hidden" name="message" value="' + a.escapeExpression((s = null != (s = e.message || (null != n ? n.message : n)) ? s : e.helperMissing, "function" == typeof s ? s.call(null != n ? n : a.nullContext || {}, {
                name: "message",
                hash: {},
                data: t
            }) : s)) + '"/>'
        },
        8: function(a, n, e, l, t) {
            var s, r = null != n ? n : a.nullContext || {},
                i = e.helperMissing,
                o = a.escapeExpression;
            return "        <tr>\n            <td><strong>" + o((e.l10n || n && n.l10n || i).call(r, "Choose Department:", {
                name: "l10n",
                hash: {},
                data: t
            })) + '</strong></td>\n            <td>\n                <select name="group">\n' + (null != (s = e.each.call(r, null != n ? n.groups : n, {
                name: "each",
                hash: {},
                fn: a.program(9, t, 0),
                inverse: a.noop,
                data: t
            })) ? s : "") + "                </select>\n            </td>\n        </tr>\n        <tr>\n            <td><strong>" + o((e.l10n || n && n.l10n || i).call(r, "Department description:", {
                name: "l10n",
                hash: {},
                data: t
            })) + '</strong></td>\n            <td id="group-description">' + (null != (s = e.each.call(r, null != n ? n.groups : n, {
                name: "each",
                hash: {},
                fn: a.program(14, t, 0),
                inverse: a.noop,
                data: t
            })) ? s : "") + "</td>\n        </tr>\n"
        },
        9: function(a, n, e, l, t) {
            var s, r = a.lambda,
                i = a.escapeExpression,
                o = null != n ? n : a.nullContext || {};
            return '                        <option value="' + i(r(null != n ? n.id : n, n)) + '" ' + (null != (s = e["if"].call(o, null != n ? n.selected : n, {
                name: "if",
                hash: {},
                fn: a.program(10, t, 0),
                inverse: a.noop,
                data: t
            })) ? s : "") + ">" + i(r(null != n ? n.name : n, n)) + (null != (s = e.unless.call(o, null != n ? n.online : n, {
                name: "unless",
                hash: {},
                fn: a.program(12, t, 0),
                inverse: a.noop,
                data: t
            })) ? s : "") + "</option>\n"
        },
        10: function(a, n, e, l, t) {
            return 'selected="selected"'
        },
        12: function(a, n, e, l, t) {
            return " (offline)"
        },
        14: function(a, n, e, l, t) {
            var s;
            return null != (s = e["if"].call(null != n ? n : a.nullContext || {}, null != n ? n.selected : n, {
                name: "if",
                hash: {},
                fn: a.program(15, t, 0),
                inverse: a.noop,
                data: t
            })) ? s : ""
        },
        15: function(a, n, e, l, t) {
            return a.escapeExpression(a.lambda(null != n ? n.description : n, n))
        },
        17: function(a, n, e, l, t) {
            return 'disabled="disabled"'
        },
        19: function(a, n, e, l, t) {
            var s, r = null != n ? n : a.nullContext || {},
                i = e.helperMissing,
                o = a.escapeExpression;
            return "        <tr>\n            <td><strong>" + o((e.l10n || n && n.l10n || i).call(r, "Email:", {
                name: "l10n",
                hash: {},
                data: t
            })) + '</strong></td>\n            <td><input type="text" name="email" size="50" value="' + o((s = null != (s = e.email || (null != n ? n.email : n)) ? s : i, "function" == typeof s ? s.call(r, {
                name: "email",
                hash: {},
                data: t
            }) : s)) + '" class="username"/></td>\n        </tr>\n'
        },
        21: function(a, n, e, l, t) {
            var s, r = null != n ? n : a.nullContext || {},
                i = e.helperMissing,
                o = a.escapeExpression;
            return "        <tr>\n            <td><strong>" + o((e.l10n || n && n.l10n || i).call(r, "Initial Question:", {
                name: "l10n",
                hash: {},
                data: t
            })) + '</strong></td>\n            <td valign="top"><textarea id="message-survey" name="message" tabindex="0" cols="45" rows="2">' + o((s = null != (s = e.message || (null != n ? n.message : n)) ? s : i, "function" == typeof s ? s.call(r, {
                name: "message",
                hash: {},
                data: t
            }) : s)) + "</textarea></td>\n        </tr>\n"
        },
        23: function(a, n, e, l, t) {
            var s;
            return '        <tr>\n            <td colspan="2"><strong>' + (null != (s = (e.l10n || n && n.l10n || e.helperMissing).call(null != n ? n : a.nullContext || {}, 'Please note that by starting the chat you\'re explicitly agree with the <a href="{0}" target="_blank">Privacy Policy</a>', null != n ? n.privacyPolicyUrl : n, {
                name: "l10n",
                hash: {},
                data: t
            })) ? s : "") + "</strong></td>\n        </tr>\n"
        },
        compiler: [7, ">= 4.0.0"],
        main: function(a, n, e, l, t) {
            var s, r, i = a.lambda,
                o = a.escapeExpression,
                u = null != n ? n : a.nullContext || {},
                d = e.helperMissing,
                p = "function";
            return '<form name="surveyForm" method="post" action="">\n    <input type="hidden" name="style" value="' + o(i(null != (s = null != n ? n.page : n) ? s.style : s, n)) + '"/>\n    <input type="hidden" name="info" value="' + o((r = null != (r = e.info || (null != n ? n.info : n)) ? r : d, typeof r === p ? r.call(u, {
                name: "info",
                hash: {},
                data: t
            }) : r)) + '"/>\n    <input type="hidden" name="referrer" value="' + o((r = null != (r = e.referrer || (null != n ? n.referrer : n)) ? r : d, typeof r === p ? r.call(u, {
                name: "referrer",
                hash: {},
                data: t
            }) : r)) + '"/>\n    <input type="hidden" name="survey" value="on"/>\n    ' + (null != (s = e.unless.call(u, null != n ? n.showEmail : n, {
                name: "unless",
                hash: {},
                fn: a.program(1, t, 0),
                inverse: a.noop,
                data: t
            })) ? s : "") + "\n    " + (null != (s = e.unless.call(u, null != n ? n.groups : n, {
                name: "unless",
                hash: {},
                fn: a.program(3, t, 0),
                inverse: a.noop,
                data: t
            })) ? s : "") + "\n    " + (null != (s = e.unless.call(u, null != n ? n.showMessage : n, {
                name: "unless",
                hash: {},
                fn: a.program(6, t, 0),
                inverse: a.noop,
                data: t
            })) ? s : "") + '\n\n    <div class="errors"></div>\n\n    <table class="form">\n' + (null != (s = e["if"].call(u, null != n ? n.groups : n, {
                name: "if",
                hash: {},
                fn: a.program(8, t, 0),
                inverse: a.noop,
                data: t
            })) ? s : "") + "        <tr>\n            <td><strong>" + o((e.l10n || n && n.l10n || d).call(u, "Name:", {
                name: "l10n",
                hash: {},
                data: t
            })) + '</strong></td>\n            <td><input type="text" name="name" size="50" value="' + o((r = null != (r = e.name || (null != n ? n.name : n)) ? r : d, typeof r === p ? r.call(u, {
                name: "name",
                hash: {},
                data: t
            }) : r)) + '" class="username" ' + (null != (s = e.unless.call(u, null != n ? n.canChangeName : n, {
                name: "unless",
                hash: {},
                fn: a.program(17, t, 0),
                inverse: a.noop,
                data: t
            })) ? s : "") + "/></td>\n        </tr>\n" + (null != (s = e["if"].call(u, null != n ? n.showEmail : n, {
                name: "if",
                hash: {},
                fn: a.program(19, t, 0),
                inverse: a.noop,
                data: t
            })) ? s : "") + (null != (s = e["if"].call(u, null != n ? n.showMessage : n, {
                name: "if",
                hash: {},
                fn: a.program(21, t, 0),
                inverse: a.noop,
                data: t
            })) ? s : "") + (null != (s = e["if"].call(u, null != n ? n.privacyPolicyUrl : n, {
                name: "if",
                hash: {},
                fn: a.program(23, t, 0),
                inverse: a.noop,
                data: t
            })) ? s : "") + '    </table>\n    <br/>\n    <a href="javascript:void(0);" class="but" id="submit-survey">' + o((e.l10n || n && n.l10n || d).call(u, "Start Chat", {
                name: "l10n",
                hash: {},
                data: t
            })) + '</a>\n    <div class="clear">&nbsp;</div>\n</form>\n<div id="ajax-loader"><img src="' + o(i(null != (s = null != n ? n.page : n) ? s.stylePath : s, n)) + '/images/ajax-loader.gif" alt="Loading..." /></div>'
        },
        useData: !0
    })
}(),
function() {
    Handlebars.templates = Handlebars.templates || {};
    Handlebars.templates["survey/layout"] = Handlebars.template({
        compiler: [7, ">= 4.0.0"],
        main: function(a, n, e, l, t) {
            var s, r = null != n ? n : a.nullContext || {},
                i = e.helperMissing,
                o = a.escapeExpression;
            return (null != (s = a.invokePartial(l._logo, n, {
                name: "_logo",
                data: t,
                helpers: e,
                partials: l,
                decorators: a.decorators
            })) ? s : "") + '\n<div id="headers">\n    <div class="headers-inwards-wrapper-common"><div class="headers-inwards-wrapper-left"><div class="headers-inwards-wrapper-right"><div class="headers-inwards-wrapper-top"><div class="headers-inwards-wrapper-top-left"><div class="headers-inwards-wrapper-top-right"><div class="headers-inwards-wrapper-bottom-left"><div class="headers-inwards-wrapper-bottom-right">\n        <div class="buttons">\n            <a href="javascript:Mibew.Utils.closeChatPopup();" title="' + o((e.l10n || n && n.l10n || i).call(r, "Close", {
                name: "l10n",
                hash: {},
                data: t
            })) + '"><img class="tpl-image image-close-window" src="' + o(a.lambda(null != (s = null != n ? n.page : n) ? s.stylePath : s, n)) + '/images/free.gif" alt="' + o((e.l10n || n && n.l10n || i).call(r, "Close", {
                name: "l10n",
                hash: {},
                data: t
            })) + '" /></a>\n        </div>\n        <div class="info-message">' + o((e.l10n || n && n.l10n || i).call(r, "Thank you for contacting us. Please fill out the form below and click the Start Chat button.", {
                name: "l10n",
                hash: {},
                data: t
            })) + '</div>\n    </div></div></div></div></div></div></div></div>\n</div>\n\n<div id="content-wrapper"></div>'
        },
        usePartial: !0,
        useData: !0
    })
}(),
function() {
    Handlebars.templates = Handlebars.templates || {};
    Handlebars.templates["chat/controls/close"] = Handlebars.template({
        compiler: [7, ">= 4.0.0"],
        main: function(a, n, e, l, t) {
            return '<div class="tpl-image" title="' + a.escapeExpression((e.l10n || n && n.l10n || e.helperMissing).call(null != n ? n : a.nullContext || {}, "Close chat", {
                name: "l10n",
                hash: {},
                data: t
            })) + '"></div>'
        },
        useData: !0
    })
}(),
function() {
    Handlebars.templates = Handlebars.templates || {};
    Handlebars.templates["chat/controls/history"] = Handlebars.template({
        compiler: [7, ">= 4.0.0"],
        main: function(a, n, e, l, t) {
            return '<div class="tpl-image" title="' + a.escapeExpression((e.l10n || n && n.l10n || e.helperMissing).call(null != n ? n : a.nullContext || {}, "Visit history", {
                name: "l10n",
                hash: {},
                data: t
            })) + '"></div>'
        },
        useData: !0
    })
}(),
function() {
    Handlebars.templates = Handlebars.templates || {};
    Handlebars.templates["chat/controls/redirect"] = Handlebars.template({
        1: function(a, n, e, l, t) {
            return '<div class="tpl-image" title="' + a.escapeExpression((e.l10n || n && n.l10n || e.helperMissing).call(null != n ? n : a.nullContext || {}, "Redirect visitor to another operator", {
                name: "l10n",
                hash: {},
                data: t
            })) + '"></div>\n'
        },
        compiler: [7, ">= 4.0.0"],
        main: function(a, n, e, l, t) {
            var s;
            return null != (s = e["if"].call(null != n ? n : a.nullContext || {}, null != (s = null != n ? n.user : n) ? s.canPost : s, {
                name: "if",
                hash: {},
                fn: a.program(1, t, 0),
                inverse: a.noop,
                data: t
            })) ? s : ""
        },
        useData: !0
    })
}(),
function() {
    Handlebars.templates = Handlebars.templates || {};
    Handlebars.templates["chat/controls/refresh"] = Handlebars.template({
        compiler: [7, ">= 4.0.0"],
        main: function(a, n, e, l, t) {
            return '<div class="tpl-image" title="' + a.escapeExpression((e.l10n || n && n.l10n || e.helperMissing).call(null != n ? n : a.nullContext || {}, "Refresh", {
                name: "l10n",
                hash: {},
                data: t
            })) + '"></div>'
        },
        useData: !0
    })
}(),
function() {
    Handlebars.templates = Handlebars.templates || {};
    Handlebars.templates["chat/controls/secure_mode"] = Handlebars.template({
        compiler: [7, ">= 4.0.0"],
        main: function(a, n, e, l, t) {
            return '<div class="tpl-image" title="SSL"></div>'
        },
        useData: !0
    })
}(),
function() {
    Handlebars.templates = Handlebars.templates || {};
    Handlebars.templates["chat/controls/send_mail"] = Handlebars.template({
        compiler: [7, ">= 4.0.0"],
        main: function(a, n, e, l, t) {
            return '<div class="tpl-image" title="' + a.escapeExpression((e.l10n || n && n.l10n || e.helperMissing).call(null != n ? n : a.nullContext || {}, "Send chat history by e-mail", {
                name: "l10n",
                hash: {},
                data: t
            })) + '"></div>'
        },
        useData: !0
    })
}(),
function() {
    Handlebars.templates = Handlebars.templates || {};
    Handlebars.templates["chat/controls/sound"] = Handlebars.template({
        1: function(a, n, e, l, t) {
            return '    <div class="tpl-image sound-control-on" title="' + a.escapeExpression((e.l10n || n && n.l10n || e.helperMissing).call(null != n ? n : a.nullContext || {}, "Turn off sound", {
                name: "l10n",
                hash: {},
                data: t
            })) + '"></div>\n'
        },
        3: function(a, n, e, l, t) {
            return '    <div class="tpl-image sound-control-off" title="' + a.escapeExpression((e.l10n || n && n.l10n || e.helperMissing).call(null != n ? n : a.nullContext || {}, "Turn on sound", {
                name: "l10n",
                hash: {},
                data: t
            })) + '"></div>\n'
        },
        compiler: [7, ">= 4.0.0"],
        main: function(a, n, e, l, t) {
            var s;
            return null != (s = e["if"].call(null != n ? n : a.nullContext || {}, null != n ? n.enabled : n, {
                name: "if",
                hash: {},
                fn: a.program(1, t, 0),
                inverse: a.program(3, t, 0),
                data: t
            })) ? s : ""
        },
        useData: !0
    })
}(),
function() {
    Handlebars.templates = Handlebars.templates || {};
    Handlebars.templates["chat/controls/user_name"] = Handlebars.template({
        1: function(a, n, e, l, t) {
            var s, r = null != n ? n : a.nullContext || {};
            return '    <span class="user-name-control-prefix">' + a.escapeExpression((e.l10n || n && n.l10n || e.helperMissing).call(r, "You are", {
                name: "l10n",
                hash: {},
                data: t
            })) + "</span>\n" + (null != (s = e["if"].call(r, null != n ? n.nameInput : n, {
                name: "if",
                hash: {},
                fn: a.program(2, t, 0),
                inverse: a.program(4, t, 0),
                data: t
            })) ? s : "")
        },
        2: function(a, n, e, l, t) {
            var s, r = a.escapeExpression;
            return '        <div class="user-name-control-input-background"><input id="user-name-control-input" type="text" size="12" value="' + r(a.lambda(null != (s = null != n ? n.user : n) ? s.name : s, n)) + '" class="username" /></div>\n        <a href="javascript:void(0)" class="user-name-control-set tpl-image" title="' + r((e.l10n || n && n.l10n || e.helperMissing).call(null != n ? n : a.nullContext || {}, "Change name", {
                name: "l10n",
                hash: {},
                data: t
            })) + '"></a>\n'
        },
        4: function(a, n, e, l, t) {
            var s, r = null != n ? n : a.nullContext || {},
                i = e.helperMissing,
                o = a.escapeExpression;
            return '        <a href="javascript:void(0)" title="' + o((e.l10n || n && n.l10n || i).call(r, "Change name", {
                name: "l10n",
                hash: {},
                data: t
            })) + '">' + o(a.lambda(null != (s = null != n ? n.user : n) ? s.name : s, n)) + '</a>\n        <a class="user-name-control-change tpl-image" title="' + o((e.l10n || n && n.l10n || i).call(r, "Change name", {
                name: "l10n",
                hash: {},
                data: t
            })) + '"></a>\n'
        },
        6: function(a, n, e, l, t) {
            var s, r = a.escapeExpression;
            return r((e.l10n || n && n.l10n || e.helperMissing).call(null != n ? n : a.nullContext || {}, "You are", {
                name: "l10n",
                hash: {},
                data: t
            })) + "&nbsp;" + r(a.lambda(null != (s = null != n ? n.user : n) ? s.name : s, n)) + "\n"
        },
        compiler: [7, ">= 4.0.0"],
        main: function(a, n, e, l, t) {
            var s;
            return null != (s = e["if"].call(null != n ? n : a.nullContext || {}, null != (s = null != n ? n.user : n) ? s.canChangeName : s, {
                name: "if",
                hash: {},
                fn: a.program(1, t, 0),
                inverse: a.program(6, t, 0),
                data: t
            })) ? s : ""
        },
        useData: !0
    })
}(),
function() {
    Handlebars.templates = Handlebars.templates || {};
    Handlebars.templates["chat/status/base"] = Handlebars.template({
        compiler: [7, ">= 4.0.0"],
        main: function(a, n, e, l, t) {
            var s;
            return a.escapeExpression((s = null != (s = e.title || (null != n ? n.title : n)) ? s : e.helperMissing, "function" == typeof s ? s.call(null != n ? n : a.nullContext || {}, {
                name: "title",
                hash: {},
                data: t
            }) : s))
        },
        useData: !0
    })
}(),
function() {
    Handlebars.templates = Handlebars.templates || {};
    Handlebars.templates["chat/status/message"] = Handlebars.template({
        compiler: [7, ">= 4.0.0"],
        main: function(a, n, e, l, t) {
            var s;
            return a.escapeExpression((s = null != (s = e.message || (null != n ? n.message : n)) ? s : e.helperMissing, "function" == typeof s ? s.call(null != n ? n : a.nullContext || {}, {
                name: "message",
                hash: {},
                data: t
            }) : s))
        },
        useData: !0
    })
}(),
function() {
    Handlebars.templates = Handlebars.templates || {};
    Handlebars.templates["chat/status/typing"] = Handlebars.template({
        compiler: [7, ">= 4.0.0"],
        main: function(a, n, e, l, t) {
            return a.escapeExpression((e.l10n || n && n.l10n || e.helperMissing).call(null != n ? n : a.nullContext || {}, "Remote user is typing...", {
                name: "l10n",
                hash: {},
                data: t
            }))
        },
        useData: !0
    })
}();