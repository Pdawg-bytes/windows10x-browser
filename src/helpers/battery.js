let batteryPromise = navigator.getBattery();
batteryPromise.then(determineIcon);

const batteryIcon = [ "\uEBA0", "\uEBA1", "\uEBA2", "\uEBA3", "\uEBA4", "\uEBA5", "\uEBA6", "\uEBA7", "\uEBA8", "\uEBA9", "\uEBAA" ];

export function determineIcon(batteryObject)
{
  try
  {
    let indexIconMath = Math.floor((batteryObject.level * 100) / 10);
    let indexIcon = batteryIcon[indexIconMath];
    return indexIcon;
  } 
  catch (error)
  {
    return null;
  }
}
