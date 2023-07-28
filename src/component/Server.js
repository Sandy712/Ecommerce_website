import { createServer,Model } from 'miragejs';
export function makeServer({ environment = 'development' } = {}) {
  let server = createServer({
    environment,
    models: {
      user: Model,
    },

    seeds(server) {
        server.create('user', { id: 1, username: 'testuser', password: 'testpassword' });
        server.create('user', { id: 2, username: 'sandeep', password: 'sandeep' });
        server.create('user', { id: 3, username: 'uday', password: 'uday' });
    },
  

    routes() {
        this.namespace = 'api';
  
        this.post('/login', (schema, request) => {
          // Simulate a successful login response
          const { username, password } = JSON.parse(request.requestBody);
          const user = schema.users.findBy({ username });
  
          if (user && user.password===password) {
            return {
              user: {
                id: user.id,
                username: user.username,
              },
            };
          } else {
            return { error: 'Invalid credentials' };
          }
        });
  
        // Add more routes for registration, logout, etc. if needed.
  
        this.namespace = ''; // Reset the namespace for non-API routes
      },
    
});

  return server;
}