//import { LayoutManager } from "layout-manager/LayoutManager"

import app from "../types/app";

function SpawnTestAddon() {
    if(app.getWindow("addon-window"))
        App.addWindow(TestAddonWindow());
}

function TestBar(){
    return Widget.Window({
        anchor: ["top", "right", "left"],//LayoutManager.GetAnchor()
        exclusivity: "exclusive",
        child: Widget.Button({
            onClicked: SpawnTestAddon
        })
    })
}

function TestAddonWindow() {
    return Widget.Window({
        name: "addon-window",
        anchor: ["top", "right", "left"],//LayoutManager.GetAnchor()
        exclusivity: "exclusive",
        child: Widget.Button({
            label: "Close",
            onClicked: () => App.closeWindow("addon-window")
        })
    })
}

App.config({
    windows: [TestBar()]
})