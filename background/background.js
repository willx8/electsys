// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

var sMode="off";
var courseId="XX000";
var lastTabId = -1;

chrome.runtime.onInstalled.addListener(function() {
//	chrome.storage.local.set({'selectMode':"关闭"},function(){});



// localStorage is persisted, so it's a good place to keep state that you
  // need to persist across page reloads.

	chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    // With a new rule ...
    chrome.declarativeContent.onPageChanged.addRules([
      {
        // That fires when a page's URL contains a 'g' ...
        conditions: [
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { urlContains: 'electsys.sjtu.edu.cn' },
          })
        ],
        // And shows the extension's page action.
        actions: [ new chrome.declarativeContent.ShowPageAction() ]
      }
    ]);
  });

});
