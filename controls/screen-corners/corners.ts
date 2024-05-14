// NOTE! I use ts-nocheck because Cairo is not an introspectable lib
// @ts-nocheck

//import { Anchor, LayoutManager } from "../../services/layout-manager/LayoutManager";
import { GlobalWidget } from "../../Contracts/Widgets/GlobalWidget";
import Gtk from "@girs/gtk-3.0/gtk-3.0";
import cairo from "@girs/cairo-1.0";
import Cairo from 'gi://cairo?version=1.0';
import cairo10 from "../../types/@girs/cairo-1.0/cairo-1.0";

export class Corners extends GlobalWidget{
    buildWindow(monitor: number): Gtk.Window
    {
        const drawingArea = Widget.DrawingArea({
            widthRequest: 50,
            heightRequest: 50,
            hpack: 'start',
            vpack: 'end',
            drawFn: (self, cr, w, h) =>
            {
                const center = {
                    x: w / 2,
                    y: h / 2,
                };

                cr.setSourceRGBA(255, 1, 1, 1)
                cr.setLineWidth(8)
                cr.arc(center.x, center.y, 3, 0, Math.PI * 2)
                cr.stroke()
            },
        })

        return Widget.Window({
            monitor,
            name: `corner${monitor}`,
            anchor: 'bottom left'.split(' '),
            class_name: "unset",
            exclusivity: 'ignore',
            visible: true,
            child: drawingArea,
            setup: (self) => self.input_shape_combine_region(new cairo10.Region()),
        });
    }
}