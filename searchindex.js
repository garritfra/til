Object.assign(window.search, {"doc_urls":["SUMMARY.html#android","SUMMARY.html#rust","about.html#about","android/android.html#android","android/single-instance-launchmode.html#android-activity-launchmode","android/single-instance-launchmode.html#further-reading","rust/rust.html#rust","rust/clippy-linter.html#using-the-clippy-linter-to-spot-common-mistakes"],"index":{"documentStore":{"docInfo":{"0":{"body":5,"breadcrumbs":1,"title":1},"1":{"body":3,"breadcrumbs":1,"title":1},"2":{"body":11,"breadcrumbs":0,"title":0},"3":{"body":0,"breadcrumbs":1,"title":1},"4":{"body":55,"breadcrumbs":4,"title":3},"5":{"body":4,"breadcrumbs":3,"title":2},"6":{"body":0,"breadcrumbs":1,"title":1},"7":{"body":47,"breadcrumbs":7,"title":6}},"docs":{"0":{"body":"Summary About android Single Instance Launchmode","breadcrumbs":"android","id":"0","title":"android"},"1":{"body":"Rust Clippy Linter","breadcrumbs":"Rust","id":"1","title":"Rust"},"2":{"body":"This book contains writeups of things that I learn from day to day. The Idea came from this HN post.","breadcrumbs":"About","id":"2","title":"About"},"3":{"body":"","breadcrumbs":"Android","id":"3","title":"Android"},"4":{"body":"By default, an activity in android has the standard launchMode. If it is used by an activity, every Intent will create a new activity and launch it on top of the rest. Using the singleInstance launchMode will only create a new activity, if there is no activity of that type yet. If there is an activity of the same kind in the background, this activity will be moved to foreground instead. To change the launchMode of an activity, simply add the launchMode attribute in the manifest: <activity android:name=\".SingleInstanceActivity\" android:label=\"singleInstance launchMode\" android:launchMode=\"singleInstance\"> Alternatively, you could also specify an attribute for the specific intent: Intent intent = new Intent(StandardActivity.this, StandardActivity.class);\nintent.addFlags(Intent.FLAG_ACTIVITY_SINGLE_INSTANCE);\nstartActivity(intent);","breadcrumbs":"android » Android activity launchMode","id":"4","title":"Android activity launchMode"},"5":{"body":"https://inthecheesefactory.com/blog/understand-android-activity-launchmode/en","breadcrumbs":"android » Further reading:","id":"5","title":"Further reading:"},"6":{"body":"","breadcrumbs":"Rust","id":"6","title":"Rust"},"7":{"body":"Using a linter that is developed by the Rust team , you can spot common mistakes in your Rust code. Run the following commands to install Clippy: # Update rust version\nrustup update # Add clippy as a rustup component\nrustup component add clippy # If it says that it cant find the clippy component, run this\nrustup self update To run clippy, cd into your project and run the following command: cargo clippy Et voilà!","breadcrumbs":"Rust » Using the Clippy linter to spot common mistakes","id":"7","title":"Using the Clippy linter to spot common mistakes"}},"length":8,"save":true},"fields":["title","body","breadcrumbs"],"index":{"body":{"root":{"a":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"v":{"df":2,"docs":{"4":{"tf":3.1622776601683795},"5":{"tf":1.0}}}}}},"d":{"d":{"df":2,"docs":{"4":{"tf":1.0},"7":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"df":0,"docs":{},"l":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"n":{"df":1,"docs":{"4":{"tf":1.0}}}}}}},"n":{"d":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"i":{"d":{":":{"df":0,"docs":{},"l":{"a":{"b":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"=":{"\"":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}}}}}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{},"u":{"df":0,"docs":{},"n":{"c":{"df":0,"docs":{},"h":{"df":0,"docs":{},"m":{"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"e":{"=":{"\"":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}}}}}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"n":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"=":{"\"":{".":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"n":{"c":{"df":0,"docs":{},"e":{"a":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"df":4,"docs":{"0":{"tf":1.4142135623730951},"3":{"tf":1.0},"4":{"tf":1.4142135623730951},"5":{"tf":1.0}}},"df":0,"docs":{}}}}},"df":0,"docs":{}},"t":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"b":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.4142135623730951}}}}},"df":0,"docs":{}}}}}},"b":{"a":{"c":{"df":0,"docs":{},"k":{"df":0,"docs":{},"g":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}}}}}}}},"df":0,"docs":{}},"df":0,"docs":{},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"k":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"c":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":1,"docs":{"2":{"tf":1.0}}}},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"7":{"tf":1.0}}}},"r":{"df":0,"docs":{},"g":{"df":0,"docs":{},"o":{"df":1,"docs":{"7":{"tf":1.0}}}}}},"d":{"df":1,"docs":{"7":{"tf":1.0}}},"df":0,"docs":{},"h":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":1,"docs":{"4":{"tf":1.0}}}}},"df":0,"docs":{}},"l":{"df":0,"docs":{},"i":{"df":0,"docs":{},"p":{"df":0,"docs":{},"p":{"df":0,"docs":{},"i":{"df":2,"docs":{"1":{"tf":1.0},"7":{"tf":2.6457513110645907}}}}}}},"o":{"d":{"df":0,"docs":{},"e":{"df":1,"docs":{"7":{"tf":1.0}}}},"df":0,"docs":{},"m":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"7":{"tf":1.4142135623730951}}},"df":0,"docs":{}}},"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"7":{"tf":1.4142135623730951}}}}},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"7":{"tf":1.7320508075688772}}}}}},"n":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"2":{"tf":1.0}}}}},"df":0,"docs":{}}}},"r":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}}},"d":{"a":{"df":0,"docs":{},"y":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"f":{"a":{"df":0,"docs":{},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"df":0,"docs":{}},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"p":{"df":1,"docs":{"7":{"tf":1.0}}}}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":1,"docs":{"7":{"tf":1.0}}}},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"7":{"tf":1.0}}},"df":0,"docs":{}}},"o":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":1,"docs":{"7":{"tf":1.4142135623730951}}}}}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"g":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}}}}}}}}},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"5":{"tf":1.0}}}}}}}}},"h":{"df":0,"docs":{},"n":{"df":1,"docs":{"2":{"tf":1.0}}},"t":{"df":0,"docs":{},"t":{"df":0,"docs":{},"p":{"df":0,"docs":{},"s":{":":{"/":{"/":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"f":{"a":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"y":{".":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"/":{"b":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"g":{"/":{"df":0,"docs":{},"u":{"df":0,"docs":{},"n":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"5":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"i":{"d":{"df":0,"docs":{},"e":{"a":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"l":{"df":1,"docs":{"7":{"tf":1.0}}},"n":{"c":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{},"e":{"a":{"d":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"(":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"n":{"d":{"a":{"df":0,"docs":{},"r":{"d":{"a":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"v":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"y":{".":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"i":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"df":0,"docs":{}}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}}}},".":{"a":{"d":{"d":{"df":0,"docs":{},"f":{"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"g":{"df":0,"docs":{},"s":{"(":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{".":{"df":0,"docs":{},"f":{"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"g":{"_":{"a":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"v":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"y":{"_":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"_":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}}}}},"df":0,"docs":{}}}}}}}},"df":0,"docs":{}}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":1,"docs":{"4":{"tf":2.0}}}}}}}},"k":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}}}},"l":{"a":{"df":0,"docs":{},"u":{"df":0,"docs":{},"n":{"c":{"df":0,"docs":{},"h":{"df":1,"docs":{"4":{"tf":1.0}},"m":{"df":0,"docs":{},"o":{"d":{"df":2,"docs":{"0":{"tf":1.0},"4":{"tf":2.449489742783178}},"e":{"/":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"5":{"tf":1.0}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}},"df":0,"docs":{}}}},"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"n":{"df":1,"docs":{"2":{"tf":1.0}}}}},"df":0,"docs":{}},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":2,"docs":{"1":{"tf":1.0},"7":{"tf":1.4142135623730951}}}}}}}},"m":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"i":{"df":0,"docs":{},"f":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}}}}}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"k":{"df":1,"docs":{"7":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}}},"o":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"n":{"df":0,"docs":{},"e":{"df":0,"docs":{},"w":{"df":1,"docs":{"4":{"tf":1.7320508075688772}}}}},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"j":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"7":{"tf":1.0}}}},"df":0,"docs":{}}}}}},"r":{"df":0,"docs":{},"e":{"a":{"d":{"df":1,"docs":{"5":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}}},"u":{"df":0,"docs":{},"n":{"df":1,"docs":{"7":{"tf":2.0}}},"s":{"df":0,"docs":{},"t":{"df":3,"docs":{"1":{"tf":1.4142135623730951},"6":{"tf":1.0},"7":{"tf":1.7320508075688772}},"u":{"df":0,"docs":{},"p":{"df":1,"docs":{"7":{"tf":2.0}}}}}}}},"s":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":1,"docs":{"4":{"tf":1.0}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"f":{"df":1,"docs":{"7":{"tf":1.0}}}}},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"n":{"df":0,"docs":{},"g":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}},"e":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}}}}}}}}},"p":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"i":{"df":0,"docs":{},"f":{"df":1,"docs":{"4":{"tf":1.0}},"i":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"df":0,"docs":{}},"o":{"df":0,"docs":{},"t":{"df":1,"docs":{"7":{"tf":1.4142135623730951}}}}},"t":{"a":{"df":0,"docs":{},"n":{"d":{"a":{"df":0,"docs":{},"r":{"d":{"a":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"v":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"y":{".":{"c":{"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":1,"docs":{"4":{"tf":1.0}}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}}},"df":0,"docs":{}},"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}},"r":{"df":0,"docs":{},"t":{"a":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"v":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"y":{"(":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"df":0,"docs":{}}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}},"u":{"df":0,"docs":{},"m":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{}}}}},"t":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"m":{"df":1,"docs":{"7":{"tf":1.0}}}},"df":0,"docs":{}},"h":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"o":{"df":0,"docs":{},"p":{"df":1,"docs":{"4":{"tf":1.0}}}},"y":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"u":{"df":0,"docs":{},"p":{"d":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"7":{"tf":1.7320508075688772}}}},"df":0,"docs":{}},"df":0,"docs":{}},"s":{"df":2,"docs":{"4":{"tf":1.4142135623730951},"7":{"tf":1.4142135623730951}}}},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"7":{"tf":1.0}}}}}}}},"o":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":1,"docs":{"7":{"tf":1.0}}}}}},"w":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"u":{"df":0,"docs":{},"p":{"df":1,"docs":{"2":{"tf":1.0}}}}}}}}}}},"breadcrumbs":{"root":{"a":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"v":{"df":2,"docs":{"4":{"tf":3.3166247903554},"5":{"tf":1.0}}}}}},"d":{"d":{"df":2,"docs":{"4":{"tf":1.0},"7":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"df":0,"docs":{},"l":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"n":{"df":1,"docs":{"4":{"tf":1.0}}}}}}},"n":{"d":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"i":{"d":{":":{"df":0,"docs":{},"l":{"a":{"b":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"=":{"\"":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}}}}}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{},"u":{"df":0,"docs":{},"n":{"c":{"df":0,"docs":{},"h":{"df":0,"docs":{},"m":{"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"e":{"=":{"\"":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}}}}}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"n":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"=":{"\"":{".":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"n":{"c":{"df":0,"docs":{},"e":{"a":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"df":4,"docs":{"0":{"tf":1.7320508075688772},"3":{"tf":1.4142135623730951},"4":{"tf":2.0},"5":{"tf":1.4142135623730951}}},"df":0,"docs":{}}}}},"df":0,"docs":{}},"t":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"b":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.4142135623730951}}}}},"df":0,"docs":{}}}}}},"b":{"a":{"c":{"df":0,"docs":{},"k":{"df":0,"docs":{},"g":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}}}}}}}},"df":0,"docs":{}},"df":0,"docs":{},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"k":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"c":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":1,"docs":{"2":{"tf":1.0}}}},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"7":{"tf":1.0}}}},"r":{"df":0,"docs":{},"g":{"df":0,"docs":{},"o":{"df":1,"docs":{"7":{"tf":1.0}}}}}},"d":{"df":1,"docs":{"7":{"tf":1.0}}},"df":0,"docs":{},"h":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":1,"docs":{"4":{"tf":1.0}}}}},"df":0,"docs":{}},"l":{"df":0,"docs":{},"i":{"df":0,"docs":{},"p":{"df":0,"docs":{},"p":{"df":0,"docs":{},"i":{"df":2,"docs":{"1":{"tf":1.0},"7":{"tf":2.8284271247461903}}}}}}},"o":{"d":{"df":0,"docs":{},"e":{"df":1,"docs":{"7":{"tf":1.0}}}},"df":0,"docs":{},"m":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"7":{"tf":1.4142135623730951}}},"df":0,"docs":{}}},"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"7":{"tf":1.7320508075688772}}}}},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"7":{"tf":1.7320508075688772}}}}}},"n":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"2":{"tf":1.0}}}}},"df":0,"docs":{}}}},"r":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}}},"d":{"a":{"df":0,"docs":{},"y":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"f":{"a":{"df":0,"docs":{},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"df":0,"docs":{}},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"p":{"df":1,"docs":{"7":{"tf":1.0}}}}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":1,"docs":{"7":{"tf":1.0}}}},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"7":{"tf":1.0}}},"df":0,"docs":{}}},"o":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":1,"docs":{"7":{"tf":1.4142135623730951}}}}}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"g":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}}}}}}}}},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"5":{"tf":1.4142135623730951}}}}}}}}},"h":{"df":0,"docs":{},"n":{"df":1,"docs":{"2":{"tf":1.0}}},"t":{"df":0,"docs":{},"t":{"df":0,"docs":{},"p":{"df":0,"docs":{},"s":{":":{"/":{"/":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"f":{"a":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"y":{".":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"/":{"b":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"g":{"/":{"df":0,"docs":{},"u":{"df":0,"docs":{},"n":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"5":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"i":{"d":{"df":0,"docs":{},"e":{"a":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"l":{"df":1,"docs":{"7":{"tf":1.0}}},"n":{"c":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{},"e":{"a":{"d":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"(":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"n":{"d":{"a":{"df":0,"docs":{},"r":{"d":{"a":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"v":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"y":{".":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"i":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"df":0,"docs":{}}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}}}},".":{"a":{"d":{"d":{"df":0,"docs":{},"f":{"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"g":{"df":0,"docs":{},"s":{"(":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{".":{"df":0,"docs":{},"f":{"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"g":{"_":{"a":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"v":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"y":{"_":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"_":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}}}}},"df":0,"docs":{}}}}}}}},"df":0,"docs":{}}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":1,"docs":{"4":{"tf":2.0}}}}}}}},"k":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}}}},"l":{"a":{"df":0,"docs":{},"u":{"df":0,"docs":{},"n":{"c":{"df":0,"docs":{},"h":{"df":1,"docs":{"4":{"tf":1.0}},"m":{"df":0,"docs":{},"o":{"d":{"df":2,"docs":{"0":{"tf":1.0},"4":{"tf":2.6457513110645907}},"e":{"/":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"5":{"tf":1.0}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}},"df":0,"docs":{}}}},"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"n":{"df":1,"docs":{"2":{"tf":1.0}}}}},"df":0,"docs":{}},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":2,"docs":{"1":{"tf":1.0},"7":{"tf":1.7320508075688772}}}}}}}},"m":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"i":{"df":0,"docs":{},"f":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}}}}}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"k":{"df":1,"docs":{"7":{"tf":1.7320508075688772}}}},"df":0,"docs":{}}}},"o":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"n":{"df":0,"docs":{},"e":{"df":0,"docs":{},"w":{"df":1,"docs":{"4":{"tf":1.7320508075688772}}}}},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"j":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"7":{"tf":1.0}}}},"df":0,"docs":{}}}}}},"r":{"df":0,"docs":{},"e":{"a":{"d":{"df":1,"docs":{"5":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}}},"u":{"df":0,"docs":{},"n":{"df":1,"docs":{"7":{"tf":2.0}}},"s":{"df":0,"docs":{},"t":{"df":3,"docs":{"1":{"tf":1.7320508075688772},"6":{"tf":1.4142135623730951},"7":{"tf":2.0}},"u":{"df":0,"docs":{},"p":{"df":1,"docs":{"7":{"tf":2.0}}}}}}}},"s":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":1,"docs":{"4":{"tf":1.0}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"f":{"df":1,"docs":{"7":{"tf":1.0}}}}},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"n":{"df":0,"docs":{},"g":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}},"e":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}}}}}}}}},"p":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"i":{"df":0,"docs":{},"f":{"df":1,"docs":{"4":{"tf":1.0}},"i":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"df":0,"docs":{}},"o":{"df":0,"docs":{},"t":{"df":1,"docs":{"7":{"tf":1.7320508075688772}}}}},"t":{"a":{"df":0,"docs":{},"n":{"d":{"a":{"df":0,"docs":{},"r":{"d":{"a":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"v":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"y":{".":{"c":{"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":1,"docs":{"4":{"tf":1.0}}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}}},"df":0,"docs":{}},"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}},"r":{"df":0,"docs":{},"t":{"a":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"v":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"y":{"(":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"df":0,"docs":{}}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}},"u":{"df":0,"docs":{},"m":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{}}}}},"t":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"m":{"df":1,"docs":{"7":{"tf":1.0}}}},"df":0,"docs":{}},"h":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"o":{"df":0,"docs":{},"p":{"df":1,"docs":{"4":{"tf":1.0}}}},"y":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"u":{"df":0,"docs":{},"p":{"d":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"7":{"tf":1.7320508075688772}}}},"df":0,"docs":{}},"df":0,"docs":{}},"s":{"df":2,"docs":{"4":{"tf":1.4142135623730951},"7":{"tf":1.7320508075688772}}}},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"7":{"tf":1.0}}}}}}}},"o":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":1,"docs":{"7":{"tf":1.0}}}}}},"w":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"u":{"df":0,"docs":{},"p":{"df":1,"docs":{"2":{"tf":1.0}}}}}}}}}}},"title":{"root":{"a":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"v":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"df":0,"docs":{},"n":{"d":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"i":{"d":{"df":3,"docs":{"0":{"tf":1.0},"3":{"tf":1.0},"4":{"tf":1.0}}},"df":0,"docs":{}}}}},"df":0,"docs":{}}},"c":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":0,"docs":{},"p":{"df":0,"docs":{},"p":{"df":0,"docs":{},"i":{"df":1,"docs":{"7":{"tf":1.0}}}}}}},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"m":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"7":{"tf":1.0}}}}}}}},"df":0,"docs":{},"f":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"5":{"tf":1.0}}}}}}}}},"l":{"a":{"df":0,"docs":{},"u":{"df":0,"docs":{},"n":{"c":{"df":0,"docs":{},"h":{"df":0,"docs":{},"m":{"df":0,"docs":{},"o":{"d":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}}}}},"df":0,"docs":{}}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"7":{"tf":1.0}}}}}}}},"m":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"k":{"df":1,"docs":{"7":{"tf":1.0}}}},"df":0,"docs":{}}}}},"r":{"df":0,"docs":{},"e":{"a":{"d":{"df":1,"docs":{"5":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"u":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":2,"docs":{"1":{"tf":1.0},"6":{"tf":1.0}}}}}},"s":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"t":{"df":1,"docs":{"7":{"tf":1.0}}}}}},"u":{"df":0,"docs":{},"s":{"df":1,"docs":{"7":{"tf":1.0}}}}}}},"pipeline":["trimmer","stopWordFilter","stemmer"],"ref":"id","version":"0.9.5"},"results_options":{"limit_results":30,"teaser_word_count":30},"search_options":{"bool":"OR","expand":true,"fields":{"body":{"boost":1},"breadcrumbs":{"boost":1},"title":{"boost":2}}}});