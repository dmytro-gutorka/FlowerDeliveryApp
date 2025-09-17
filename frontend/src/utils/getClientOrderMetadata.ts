export default function getClientOrderMetadata() {
  const clientTz = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const clientOffsetMinutes = new Date().getTimezoneOffset() * -1;

  let lng;
  let lat;

  navigator.geolocation.getCurrentPosition((pos) => {
    lng = pos.coords.longitude;
    lat = pos.coords.latitude;
  });

  return {
    clientTz,
    clientOffsetMinutes,
    lat,
    lng,
  };
}
