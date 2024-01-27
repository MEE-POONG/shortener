# Choose the Image which has Node installed already
FROM node:18-alpine

# COPY all the files from Current Directory into the Container
COPY ./ ./

# Install the Project Dependencies like Express Framework
RUN yarn
RUN yarn postinstall

# Tell that this image is going to Open a Port 
EXPOSE 3333

# Default Command to launch the Application
CMD ["npm", "start"]
