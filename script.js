const app = 'Video Call';
const VISITS_KEY = 'videocall-visits';

const iframe = document.querySelector("#iframe");
iframe.width = window.innerWidth - 15 + "px";
iframe.height = window.innerHeight - 25 + "px";

trackVisitor();
