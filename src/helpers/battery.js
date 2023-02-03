let batteryPromise = navigator.getBattery();
batteryPromise.then(determineIcon);

const batteryIconCharge = [ "\uEBAE", "\uEBAC", "\uEBAD", "\uEBAE", "\uEBAF", "\uEBB0", "\uEBB1", "\uEBB2", "\uEBB3", "\uEBB4", "\uEBB5" ];
const batteryIcon = [ "\uEBA0", "\uEBA1", "\uEBA2", "\uEBA3", "\uEBA4", "\uEBA5", "\uEBA6", "\uEBA7", "\uEBA8", "\uEBA9", "\uEBAA" ];

function determineIcon(batteryObject)
{
  if (batteryObject.charging)
  {
  	let indexIcon = Math.floor((batteryObject.level * 100) / 10);
    console.log(batteryIconCharge[indexIcon]);
    return indexIcon;
  }
  else
  {
  	let indexIcon = Math.floor((batteryObject.level * 100) / 10);
    console.log(batteryIcon[indexIcon]);
    return indexIcon;
  }
}
