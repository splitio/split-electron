var SplitFactory = require('@splitsoftware/splitio').SplitFactory;

// preload.js
// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
window.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded!');
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }

  for (const dependency of ['chrome', 'node', 'electron']) {
    replaceText(`${dependency}-version`, process.versions[dependency])
  }

  var factory = SplitFactory({
    core: {
      authorizationKey: '<your split server-side api key>',
    },
    debug: false
  })

  const client = factory.client()

  client.on(client.Event.SDK_READY, function() {
    console.log("SDK_READY");
    draw();
  });

  client.on(client.Event.SDK_UPDATE, function() {
    console.log("SDK_UPDATE");
    draw();
  });
	
  function draw() {
    const splitResult = client.getTreatmentWithConfig(
                      'dmartin-electron', // unique identifier for your user
                      'multivariant_demo')

    const configs = JSON.parse(splitResult.config);
    document.getElementById("call-to-action").innerHTML = configs.text

    let img = document.getElementById("banner-image")
    img.src = configs.image
    img.style.width = '50%'
  }
})


