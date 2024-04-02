//import { LayoutManager } from "layout-manager/LayoutManager"

function TestBar(){
    return Widget.Window({
        name: "bar",
        anchor: ["top", "right", "left"],//LayoutManager.GetAnchor()
        exclusivity: "exclusive",
        child: Widget.Button({
            label: "Toggle addon",
            onClicked: () => App.toggleWindow("addon-window")
        })
    })
}

function TestAddonWindow() {
    return Widget.Window({
        name: "addon-window",
        visible: false,
        anchor: ["top", "right", "left"],//LayoutManager.GetAnchor()
        exclusivity: "exclusive",
        child: Widget.Label({
            label: "Addon"
        })
    })
}

App.config({
    windows: [TestBar(), TestAddonWindow()]
})