# Use the correct Node.js version and Alpine image for lightweight containers
ARG NODE_VERSION=18.0.0
FROM node:${NODE_VERSION}-alpine

# Use production node environment by default.
ENV NODE_ENV production

# Set the working directory in the container
WORKDIR /usr/src/app

# Install dependencies (Production + Development for TypeScript)
COPY package*.json ./
RUN npm install

# Copy the entire application source code to the working directory
COPY . .

# Compile TypeScript to JavaScript
RUN npx tsc

# Expose the port that the application listens on
EXPOSE 5000

# Use a non-root user to run the application (security best practice)
USER node

# Run the compiled JavaScript (output of TypeScript compilation will be in the dist folder)
CMD ["node", "dist/index.js"]
