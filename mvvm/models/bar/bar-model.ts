import { PaletteManager } from "../../../services/configuration-system/palette-manager";

export const applications = await Service.import("applications");
export const tray = await Service.import("systemtray");
export const hyprlandService = await Service.import("hyprland");
export const date = Variable("", {poll: [1000, 'date "+%H:%M:%S %b %e"']})
export const liliumLogoLight = `${IMAGES}/lilium_logo_light.svg`;
export const liliumLogoDark = `${IMAGES}/lilium_logo_dark.svg`;

export function getLiliumLogo(isDarkTheme: boolean) {
    if (isDarkTheme)
        return `${IMAGES}/lilium_logo_light.svg`;
    else if (!isDarkTheme)
        return `${IMAGES}/lilium_logo_dark.svg`;
}