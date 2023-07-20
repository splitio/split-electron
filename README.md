# split-electron-app

Use the node.js SDK in preload.js to bring in the correct treatment without flicker.

Use JS SDK in index.html to hook the SDK_UPDATE event and change the display in response to feature flag changes.

- The multivariant_demo split mentioned has red, green, blue treatments and the following dynamic config:

```
red: {"text":"Bring a Cute Dog Home","image":"http://www.cortazar-split.com/dog_by_the_door.jpeg","image_width":"100%"}
blue: {"text":"Adopt a Cute Dog","image":"http://www.cortazar-split.com/dog_origin.jpeg","image_width":"100%"}
green: {"text":"This pet is chillin'","image":"http://www.cortazar-split.com/dog_on_the_couch.jpeg","image_width":"100%"}
```

