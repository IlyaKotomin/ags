export const applications = await Service.import("applications");
export const tray = await Service.import("systemtray");
export const hyprlandService = await Service.import("hyprland");
export const date = Variable("", {poll: [1000, 'date "+%H:%M:%S %b %e"']})

export const liliumLogoLight = `${IMAGES}/lilium_logo.svg`;
export const liliumLogoDark = `${IMAGES}/lilium_logo_dark.svg`;
