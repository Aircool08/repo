const ua = navigator.userAgent.toLowerCase();
const isAltStoreOrESign = ua.includes("altstore") || ua.includes("esign");

if (isAltStoreOrESign) {
  window.location.href = "manifest.json";
}
