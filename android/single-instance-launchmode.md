# Android activity launchMode

By default, an activity in android has the `standard` launchMode. If it is used by an activity, every Intent will create a new activity and launch it on top of the rest.

Using the `singleInstance` launchMode will only create a new activity, if there is no activity of that type yet. If there **is** an activity of the same kind in the background, this activity will be moved to foreground instead.

To change the launchMode of an activity, simply add the `launchMode` attribute in the manifest:

```xml
<activity
    android:name=".SingleTaskActivity"
    android:label="singleTask launchMode"
    android:launchMode="singleInstance">
```

Alternatively, you could also specify an attribute for the specific intent:

```java
Intent intent = new Intent(StandardActivity.this, StandardActivity.class);
intent.addFlags(Intent.FLAG_ACTIVITY_SINGLE_INSTANCE);
startActivity(intent);
```

### Further reading:

https://inthecheesefactory.com/blog/understand-android-activity-launchmode/en
