# typescript-microservice-template

## Setup project

1 - Create a new .env file in the root direct of the this repository. You can run the following line which will do the same
> cp .env.example .env

2 - Run the docker-compose line in order to raise the required resources to run the app
> docker-compose up -d 

3 - Install the [biome vscode extension](https://marketplace.visualstudio.com/items?itemName=biomejs.biome). This repository uses the [biomejs](https://biomejs.dev/) to format and lint the source code

4 - Run the app using the following lines
> npm run dev

## General instructions

### Tests
The tests are separated into two sources:
* The .test.ts ones are located at the same directory of the source code and they contains only unit test. All external componentes must be mocked in order to reduce the test scop to only one component.
* The .spec.ts are located at the ./specs location and they contains the integration tests. These tests are intentded to reproduce most of the stack locally, so the only mocks in these tests are only real external resources.