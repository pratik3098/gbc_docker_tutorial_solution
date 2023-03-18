#### Description #####
The repo contains a Source files, Dockerfiles and docker-compose files for a Nodejs app.
The app is packaged with a Ubuntu:22.04 as a base OS.


##### Building Image #####
./build_image: Script to run the images

basenode:
The base layer image  which has the Nodejs installed and configured. 
Dockerfile.base

app: 
The image with the app files imported and the basenode as the base layer.
Dockerfile
Note: The image packages the app by installing its dependiecies

#### Creating a virtual docker network ####
The following command creates a bridge network with name gbc-network

docker network create gbc-network

#### Running the app #### 

To run the app there are two alternatives. Using the docker commands or specify the app config in the docker-compose.yaml file 



docker-compose.yaml: 
The file has a Nodejs app and the Mongodb containers running. 
The containers are able to communicate with each other using the bridge network created gbc-network 
The shared volume is mapped on the local filesystem

Command: docker-compose up -d 


docker-compose.copy.yaml:
The file conntains another container app2 which communicates with app and mongodb using the network gbc-network. 
The app1 and mongodb can be pinged from the app2.
The shared volumes is shared between both of the files 

Command: docker-compose -f ./docker-compose.copy.yaml up -d 
