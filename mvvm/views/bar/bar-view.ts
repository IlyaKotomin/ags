import {BarViewModel} from "../../view-models/bar/bar-view-model";
import { LayoutManager } from "../../../services/layout-manager/LayoutManager";
import { GlobalWidget } from "../../../Contracts/Widgets/GlobalWidget";
import Gtk from "@girs/gtk-3.0";

export class BarView extends GlobalWidget{
    protected static Left(){
        return Widget.Box({
            spacing: 8,
            children: [
                BarViewModel.getLauncherButton()
            ],
        })
    }
    protected static Center(){
        return Widget.Box({
            spacing: 8,
            children: [
                BarViewModel.getWorkspaces()
            ],
        })
    }
    protected static Right(){
        return Widget.Box({
            hpack: "end",
            spacing: 8,
            children: [
                BarViewModel.getClock()
            ],
        })
    }
    protected static default (monitor: number){
        return Widget.Window({
            monitor,
            name: `bar${monitor}`,
            class_name: 'bar',
            anchor: LayoutManager.getAnchor(),
            margins: LayoutManager.getMenuMargins(), //[20, 20, 0, 20],
            exclusivity: "exclusive",
            child: Widget.CenterBox({
                class_name: "bar",
                start_widget: this.Left(),
                center_widget: this.Center(),
                end_widget: this.Right()
            })
        })
    }
    public static BuildBar(monitor = 0) : Gtk.Window{
        return Widget.Window({
            monitor,
            name: `bar${monitor}`,
            class_name: 'bar',
            anchor: LayoutManager.getAnchor(),
            margins: LayoutManager.getMenuMargins(), //[20, 20, 0, 20],
            exclusivity: "exclusive",
            child: Widget.CenterBox({
                class_name: "bar",
                start_widget: this.Left(),
                center_widget: this.Center(),
                end_widget: this.Right()
            })
        })
    }

    buildWindow(monitor: number): Gtk.Window {
        return Widget.Window({
            monitor,
            name: `bar${monitor}`,
            class_name: 'bar',
            anchor: LayoutManager.getAnchor(),
            margins: LayoutManager.getMenuMargins(), //[20, 20, 0, 20],
            exclusivity: "exclusive",
            child: Widget.CenterBox({
                class_name: "bar",
                start_widget: BarView.Left(),
                center_widget: BarView.Center(),
                end_widget: BarView.Right()
            })
        })
    }
}