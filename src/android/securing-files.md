# Securing Files on the file system

Android provides an easy way to encrypt files that are stored in the file system of the device, using the `EncryptedFile` class:

```kotlin
val keyGenParameterSpec = MasterKeys.AES256_GCM_SPEC
val masterKeyAlias = MasterKeys.getOrCreate(keyGenParameterSpec)

val fileToWrite = "my_sensitive_data.txt"

val encryptedFile = EncryptedFile.Builder(
    File(directory, fileToWrite),
    context,
    masterKeyAlias,
    EncryptedFile.FileEncryptionScheme.AES256_GCM_HKDF_4KB
).build()

encryptedFile.openFileOutput().bufferedWriter().use {
    it.write("MY SUPER-SECRET INFORMATION")
}
```

If a master key has already been generated on the device, it will be used. Otherwise, a new key will be generated.

To read a file, you can use the following snippet:

```kotlin
val keyGenParameterSpec = MasterKeys.AES256_GCM_SPEC
val masterKeyAlias = MasterKeys.getOrCreate(keyGenParameterSpec)

val fileToRead = "my_sensitive_data.txt"
val encryptedFile = EncryptedFile.Builder(
    File(directory, fileToRead),
    context,
    masterKeyAlias,
    EncryptedFile.FileEncryptionScheme.AES256_GCM_HKDF_4KB
).build()

val contents = encryptedFile.bufferedReader().useLines { lines ->
    lines.fold("") { working, line ->
        "$working\n$line"
    }
}
```

This makes sure that the data on the device is encrypted, without much hassle.

### References

- https://developer.android.com/topic/security/data#kotlin
