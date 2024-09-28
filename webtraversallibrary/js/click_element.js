// Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.

// Requires dom.js

let selector = arguments[0];

let wtlUid = null;
if (arguments.length > 1) {
  wtlUid = arguments[1];
}

let element = document.querySelector(selector);
if (element !== null) {
  clickElement(element);
} else {
  console.error('click_element: Element not found with selector: ', selector);

  if (wtlUid === null) {
      return;
  }

  // Try clicking the element by its wtl-uid. Sometimes the element is not found by
  // selector due to discrepancies in the DOM vs the scraped snapshot
  console.log('click_element: Trying to find element by wtl-uid: ', wtlUid);
  element = findElementByWtlUid(wtlUid);

  if (element !== null) {
    clickElement(element);
  } else {
    console.error('click_element: Element not found with wtl-uid: ', wtlUid);
  }
}
