# split-electron-app

This is a simple example of Split in an Electron app.  

Use the node.js SDK in preload.js to bring in the correct treatment without flicker.

Use JS SDK in index.html to hook the SDK_UPDATE event and change the display in response to feature flag changes.

You will need to find client and server-side API keys to put into the samples.  Create a multivariant_demo feature flag and use the Syntax menu item to generate JavaScript and node.js example; the API keys are included in the example.

- The multivariant_demo split mentioned has red, green, blue treatments and the following dynamic config:

Create a feature flag called multivariant_demo. You can cut-and-paste the JSON into the red, green, and blue treatments.

```
red: {"text":"Bring a Cute Dog Home","image":"http://www.cortazar-split.com/dog_by_the_door.jpeg","image_width":"100%"}
blue: {"text":"Adopt a Cute Dog","image":"http://www.cortazar-split.com/dog_origin.jpeg","image_width":"100%"}
green: {"text":"This pet is chillin'","image":"http://www.cortazar-split.com/dog_on_the_couch.jpeg","image_width":"100%"}
```

