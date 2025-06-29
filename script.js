const ua = navigator.userAgent.toLowerCase();
const isAltStoreOrESign = ua.includes("altstore") || ua.includes("esign");

if (isAltStoreOrESign) {
  // Redirect to JSON if accessed by AltStore/ESign
  window.location.href = "manifest.json";
}