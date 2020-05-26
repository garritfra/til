# Identifying a remote host OS via ping

When you ping a remote host, you typically get an output like this:

```
64 bytes from 10.0.0.1: icmp_seq=0 ttl=64 time=13.038 ms
64 bytes from 10.0.0.1: icmp_seq=1 ttl=64 time=13.632 ms
```

You can identify the OS of the pinged host by checking its `time-to-live` (ttl) attribute.

Here are the TTLs of the most common OS:

| OS          | TTL |
|-------------|-----|
| Linux/Unix  | 64  |
| Windows     | 128 |
| Solaris/AIX | 256 |

## References

- [https://shibumi.dev/posts/identify-the-os-via-ping/](https://shibumi.dev/posts/identify-the-os-via-ping/)
