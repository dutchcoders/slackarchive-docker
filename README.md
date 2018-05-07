# SlackArchive

SlackArchive can be started with just a few commands.

First, ensure you have both Docker (https://www.docker.com/community-edition) and Docker Compose (https://docs.docker.com/compose/install/) on your native architecture (wherever you are going to run SlackArchive).

First, copy `slackarchive/config.yaml.sample` to `slackarchive/config.yaml`, and replace all the values within `{...}` with the appropriate values you want. Any place with a token or key, ensure those are random. You can generate a random value on the command line with bash using the following command: `openssl rand -base64 8 |md5 |head -c24;echo` (if you have OpenSSL) or without `ping -c 1 yahoo.com |md5 | head -c24; echo`. We avoid using `/dev/urandom` in case you are not using a UNIX-based machine.

Next, follow the same instructions as above for `slackarchive-bot/config.yaml.sample`. Ensure you put the config file in the same folder as where the sample file is.

Now, make sure you change at least the password (and ideally the username) of the MongoDB user in `mongodb/docker-entrypoint-initdb.d/slackarchive.js`. By default, the user is `slackarchive` and the password is `1234`. NOTE: if you change these, you *must* update the values in the other two configuration files, **AND** change the MongoDB URI/URL string in the `docker-compose.yaml` file under the `slackarchive` directive.

Finally, if you want additional security, change the MongoDB root username and password in the `docker-compose.yaml` file under the `mongodb` directive and environment variables.

With all of these configuration options updates, you should now be able to start SlackArchive using the following commands:

```
docker network create slackarchive

docker-compose run --rm wait_for_dependencies
docker-compose run --rm slackarchive-init

docker-compose up slackarchive
docker-compose up slackarchive-bot
```
