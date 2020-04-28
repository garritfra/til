# Avoiding transient dependencies in Gradle

If you encounter the following error:

```bash
Duplicate class x found in modules y and z
```

There might be a transitive dependency in your project that is not resolved correctly. To avoid this, you can set the `transitive` attribute of the dependency to `false`:

```groovy
dependencies {
    implementation 'com.android.support:appcompat-v7:23.1.0' {
        transitive = false
    }
}
```

Note that by setting this attribute to false, the dependencies of that dependency will **not** be installed.

### Further reading:

- [https://www.devsbedevin.net/android-understanding-gradle-dependencies-and-resolving-conflicts/](https://www.devsbedevin.net/android-understanding-gradle-dependencies-and-resolving-conflicts/)

