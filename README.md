# SlackArchive

SlackArchive can be started with just a few commands. First make sure you create copies of the config.yaml.sample to their according config.yaml and change the files with the correct parameters.

Next you can start SlackArchive using the following commands:

```
docker network create slackarchive

docker-compose run --rm wait_for_dependencies
docker-compose run --rm slackarchive-init

docker-compose up slackarchive
docker-compose up slackarchive-bot

```
