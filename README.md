# docker-shamir
Barebones shamir split and reconstruction

Spliting into 3 shares with a 2 minimum needed for reconstruction:

```cat secret.txt | docker run -i lkoba/shamir split 3 2 > shares.txt```

Reconstructing some shares saved in ```some-shares.txt```:

```cat some-shares.txt | docker run -i lkoba/shamir reconstruct > reconstructed.txt```

Related stuff:

```
https://github.com/lkoba/shamir.js # this one is used by the dockerfile
http://passguardian.com/
https://iancoleman.io/shamir/
```

