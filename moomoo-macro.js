// ==UserScript==
// @name         -  ! Macro MooMoo.io ! -
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Try to be the God or Goddess in MooMoo.io!
// @author       LuminexT
// @match *://moomoo.io/*
// @match *://*.moomoo.io/*
// @grant        none
// @require https://cdn.jsdelivr.net/npm/msgpack-lite@0.1.26/dist/msgpack.min.js
// @require https://cdnjs.cloudflare.com/ajax/libs/jquery-confirm/3.3.0/jquery-confirm.min.js
// @require https://greasyfork.org/scripts/423602-msgpack/code/msgpack.js
// @require https://greasyfork.org/scripts/423602-msgpack/code/msgpack.js?version=1005014
// @require http://code.jquery.com/jquery-3.3.1.min.js
// @require https://code.jquery.com/ui/1.12.0/jquery-ui.min.js
// @require https://cdnjs.cloudflare.com/ajax/libs/jquery-confirm/3.3.0/jquery-confirm.min.js
// @require https://greasyfork.org/scripts/456235-moomoo-js/code/MooMoojs.js?version=1161717
// @require https://cdn.jsdelivr.net/gh/emn178/js-sha3/build/sha3.min.js
// ==/UserScript==
(function() {
    setInterval(() => window.follmoo && follmoo(), 10);
    'use strict';
    const log = console.log;
    var aB = true,
        gW = "not";

    WebSocket.prototype.oldSender = WebSocket.prototype.send;
    WebSocket.prototype.send = function(m) {
            if (gW == "not") {
                gW = this;
            }
            if (msgpack.decode(new Uint8Array(Array.from(new Uint8Array(m))))[0] == "13c") {
                if (msgpack.decode(new Uint8Array(Array.from(new Uint8Array(m))))[1][0] == 0 && msgpack.decode(new Uint8Array(Array.from(new Uint8Array(m))))[1][1] != 0 && aB) {
                    this.oldSender(new Uint8Array(Array.from(msgpack.encode((['13c', [1, msgpack.decode(new Uint8Array(Array.from(new Uint8Array(m))))[1][1], msgpack.decode(new Uint8Array(Array.from(new Uint8Array(m))))[1][2]]])))));
                }
            }
            this.oldSender(m);
        };
    let myPlayer = {
    id: null,
    x: null,
    y: null,
    dir: null,
    object: null,
    weapon: null,
    clan: null,
    isLeader: null,
    hat: null,
    accessory: null,
    isSkull: null
};
    function isElementVisible(e) {
    return (e.offsetParent !== null);
}

    function haveGreat(){
    let hasGreat = true;
    if (hasGreat) hasGreat = isElementVisible(document.getElementById("actionBarItem23"));
    return hasGreat;
}
    function hasSpike(){
    let hasSpike = true;
    if (hasSpike) hasSpike = isElementVisible(document.getElementById("actionBarItem22"));
    return hasSpike;
}
    function hasApple(){
    let hasApple = true;
    if (hasApple) hasApple = isElementVisible(document.getElementById("actionBarItem16"));
    return hasApple;
}
    function hasCookie(){
    let hasCookie = true;
    if (hasCookie) hasCookie = isElementVisible(document.getElementById("actionBarItem17"));
    return hasCookie;
}

    function haveSpinning(){
    let hasSpinning = true;
    if (hasSpinning) hasSpinning = isElementVisible(document.getElementById("actionBarItem25"));
    return hasSpinning;
}


        let d = document.addEventListener("keydown", (e) => {
                    if (e.keyCode == 16) {
                        gW.send(new Uint8Array(Array.from(msgpack.encode(["13c", [0, 0, 1]]))));
                    } else if (e.keyCode == 66) {
                        gW.send(new Uint8Array(Array.from(msgpack.encode(["13c", [0, 21, 1]]))));
                    } else if (e.keyCode == 73) {
                        gW.send(new Uint8Array(Array.from(msgpack.encode(["13c", [0, 19, 1]]))));
                    } else if (e.keyCode == 80) {
                        gW.send(new Uint8Array(Array.from(msgpack.encode(["13c", [0, 18, 1]]))));
                    } else if (e.keyCode == 75) {
                        gW.send(new Uint8Array(Array.from(msgpack.encode(["13c", [0, 17, 1]]))));
                    } else if (e.keyCode == 66) {
                        gW.send(new Uint8Array(Array.from(msgpack.encode(["13c", [0, 18, 1]]))));
                    } else if (e.keyCode == 81) {
                        if (hasApple()) {
                            gW.send(new Uint8Array(Array.from(msgpack.encode(["5", [0, null]]))));
                            gW.send(new Uint8Array(Array.from(msgpack.encode(["c", [1, null]]))));
                            gW.send(new Uint8Array(Array.from(msgpack.encode(["5", [0, null]]))));
                            gW.send(new Uint8Array(Array.from(msgpack.encode(["c", [1, null]]))));
                            gW.send(new Uint8Array(Array.from(msgpack.encode(["5", [0, null]]))));
                        } else if (hasCookie()) {
                            gW.send(new Uint8Array(Array.from(msgpack.encode(["5", [1, null]]))));
                            gW.send(new Uint8Array(Array.from(msgpack.encode(["c", [1, null]]))));
                            gW.send(new Uint8Array(Array.from(msgpack.encode(["5", [1, null]]))));
                            gW.send(new Uint8Array(Array.from(msgpack.encode(["c", [1, null]]))));
                            gW.send(new Uint8Array(Array.from(msgpack.encode(["5", [1, null]]))));
                        }
                    } else if (e.keyCode == 70) {
                        gW.send(new Uint8Array(Array.from(msgpack.encode(["c", [1, null]]))));
                        gW.send(new Uint8Array(Array.from(msgpack.encode(["5", [15, 0]]))));
                        gW.send(new Uint8Array(Array.from(msgpack.encode(["c", [1, null]]))));
                        gW.send(new Uint8Array(Array.from(msgpack.encode(["c", [0, null]]))));
                    } else if (e.keyCode == 86) {
                        if (hasSpike()) {
                            gW.send(new Uint8Array(Array.from(msgpack.encode(["c", [1, null]]))));
                            gW.send(new Uint8Array(Array.from(msgpack.encode(["5", [6, 0]]))));
                            gW.send(new Uint8Array(Array.from(msgpack.encode(["c", [1, null]]))));
                            gW.send(new Uint8Array(Array.from(msgpack.encode(["c", [0, null]]))));
                        } else if (haveGreat()){
                            gW.send(new Uint8Array(Array.from(msgpack.encode(["c", [1, null]]))));
                            gW.send(new Uint8Array(Array.from(msgpack.encode(["5", [7, 0]]))));
                            gW.send(new Uint8Array(Array.from(msgpack.encode(["c", [1, null]]))));
                            gW.send(new Uint8Array(Array.from(msgpack.encode(["c", [0, null]]))));
                        } else if (haveSpinning()) {
                            gW.send(new Uint8Array(Array.from(msgpack.encode(["c", [1, null]]))));
                            gW.send(new Uint8Array(Array.from(msgpack.encode(["5", [9, 0]]))));
                            gW.send(new Uint8Array(Array.from(msgpack.encode(["c", [1, null]]))));
                            gW.send(new Uint8Array(Array.from(msgpack.encode(["c", [0, null]]))));
                        }
                    } else if (e.keyCode == 78) {
                        gW.send(new Uint8Array(Array.from(msgpack.encode(["c", [1, null]]))));
                        gW.send(new Uint8Array(Array.from(msgpack.encode(["5", [10, 0]]))));
                        gW.send(new Uint8Array(Array.from(msgpack.encode(["c", [1, null]]))));
                        gW.send(new Uint8Array(Array.from(msgpack.encode(["c", [0, null]]))));
                    }

                    });


                    var ID_BullHelmet = 7;
                    var ID_TurretGear = 53;
                    var ID_FlipperHat = 31;
                    var ID_SoldierHelmet = 6;
                    var ID_TankGear = 40;
                    var ID_EmpHelmet = 22;
                    var ID_SpikeGearHelmet = 11;
                    var ID_SnowBall = 12;

                    document.addEventListener('keydown', function(e) {
                        if (e.keyCode === 16 && document.activeElement.id.toLowerCase() !== 'chatbox') {
                            storeEquip(0);
                        } else if (e.keyCode === 84 && document.activeElement.id.toLowerCase() !== 'chatbox') {
                            storeEquip(ID_TankGear);
                        } else if (e.keyCode === 67 && document.activeElement.id.toLowerCase() !== 'chatbox') {
                            storeEquip(ID_SoldierHelmet);
                        } else if (e.keyCode === 85 && document.activeElement.id.toLowerCase() !== 'chatbox') {
                            storeEquip(ID_BoosterHat);
                        } else if (e.keyCode === 72 && document.activeElement.id.toLowerCase() !== 'chatbox') {
                            storeEquip(ID_EmpHelmet);
                        } else if (e.keyCode === 90 && document.activeElement.id.toLowerCase() !== 'chatbox') {
                            storeEquip(ID_TurretGear);
                        } else if (e.keyCode === 71 && document.activeElement.id.toLowerCase() !== 'chatbox') {
                            storeEquip(ID_BullHelmet);
                        } else if (e.keyCode === 66 && document.activeElement.id.toLowerCase() !== 'chatbox') {
                            storeEquip(ID_SpikeGearHelmet)
                        }
                    })
})();