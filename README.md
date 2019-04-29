# gscl
Layouts should be uploaded as .json files in the following format:
```
{
  "common": [
    "element": {multiple-word CSS properties} //add more as necessary
  ],
  "layouts": [
    {
      "title": "layoutName",
      "playerX": [ //replace with number
        "element": {multiple-word CSS properties} //add more as necessary
      ], //add as many players as supported
      "details": [
        "element": {multiple-word CSS properties} //add more as necessary
      ]
    } //add more as necessary
  ]
}
```
For more about multiple-word CSS properties, see the [jQuery documentation](http://api.jquery.com/css/#css-properties).
