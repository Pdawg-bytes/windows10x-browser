export async function updateBatteryLevel() {
    const battery = await navigator.getBattery();
    const level = battery.level * 100;
    return level;
}