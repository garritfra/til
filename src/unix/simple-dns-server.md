# Setting up a simple dns server using dnsmasq

You can set up a simple dns server for your lan or vpn. In my case, I use wireguard to set up a vpn and dnsmasq to access the clients through a nice domain name.

Simply install the `dnsmasq` package from your package manager (apt, pacman, yum...).

Afterwards, edit the `/etc/dnsmasq.conf` file with the following content:

```
domain-needed
bogus-privexpand-hosts
 
listen-address=127.0.0.1
listen-address=<local ip of server (e.g. 192.168.0.1)>
bind-interfaces
 
# Use open source DNS servers (googles 8.8.8.8 dns server is a viable option, but I switched to 1.1.1.1 some time ago)
server=1.1.1.1
server=208.67.220.220
```

Check the status of the service using `sudo systemctl status dnsmasq`. You might need to restart it by using `sudo systemctl restart dnsmasq`

Now, you can add custom hosts to `/etc/hosts`:

```
127.0.0.1	localhost
127.0.1.1	debian

# The following lines are desirable for IPv6 capable hosts
::1     localhost ip6-localhost ip6-loopback
ff02::1 ip6-allnodes
ff02::2 ip6-allrouters


# Add hosts here in format <ip> <domainname>
10.0.0.2 mycustomdomain
```

You will need to add your dns server in your clients dns settings. Look up how to add a custom dns server for your platform.

If you are using wireguard, you can specify the `DNS` option in each client interface config:

```
[Interface]
PrivateKey = <hidden>
Address = 10.0.0.2/32
DNS = <ip of dns server>
```

Don't forget to restart the wirguard interface afterwards.

## Further reading

- [https://medium.com/nuculabs/setting-up-a-simple-dns-server-859de750f6fe](https://medium.com/nuculabs/setting-up-a-simple-dns-server-859de750f6fe)
